import { ChakraProvider } from "@chakra-ui/react";
import { withEmotionCache } from "@emotion/react";
import {
	Links,
	LiveReload,
	Meta,
	Outlet,
	Scripts,
	ScrollRestoration,
} from "@remix-run/react";
import { useContext, useEffect } from "react";
import { ClientStyleContext } from "./context";

const Document = ({ children }: { children: React.ReactNode }) => {
	return (
		<html lang="en">
			<head>
				<Meta />
				<Links />
			</head>
			<body>
				{children}
				<ScrollRestoration />
				<Scripts />
				<LiveReload />
			</body>
		</html>
	);
};

const Emotion = withEmotionCache(
	({ children }: DocumentProps, emotionCache) => {
		const clientStyleData = useContext(ClientStyleContext);

		// Only executed on client
		// biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
		useEffect(() => {
			// re-link sheet container
			emotionCache.sheet.container = document.head;
			// re-inject tags
			const tags = emotionCache.sheet.tags;
			emotionCache.sheet.flush();
			for (const tag of tags) {
				// biome-ignore lint/suspicious/noExplicitAny: <explanation>
				(emotionCache.sheet as any)._insertTag(tag);
			}

			// reset cache to reapply global styles
			clientStyleData?.reset();
		}, []);

		return children;
	},
);

export function Layout({ children }: { children: React.ReactNode }) {
	return (
		<Document>
			<Emotion>
				<ChakraProvider>{children}</ChakraProvider>
			</Emotion>
		</Document>
	);
}

interface DocumentProps {
	children: React.ReactNode;
}

// export default function App() {
// 	return (
// 		<Document>
// 			<ChakraProvider>
// 				<Outlet />
// 			</ChakraProvider>
// 		</Document>
// 	);
// }
export default function App() {
	return <Outlet />;
}

export function HydrateFallback() {
	return <p>Loading...</p>;
}
