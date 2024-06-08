import {
	Box,
	Heading,
	List,
	ListIcon,
	ListItem,
	OrderedList,
	UnorderedList,
} from "@chakra-ui/react";
import type { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";

export const meta: MetaFunction = () => {
	return [
		{ title: "New Remix SPA" },
		{ name: "description", content: "Welcome to Remix (SPA Mode)!" },
	];
};

export default function Index() {
	return (
		<Box>
			<Heading>Welcome to Remix (SPA Mode)</Heading>
			<List>
				<ListItem>
					<a
						target="_blank"
						href="https://remix.run/guides/spa-mode"
						rel="noreferrer"
					>
						SPA Mode Guide
					</a>
				</ListItem>
				<ListItem>
					<a target="_blank" href="https://remix.run/docs" rel="noreferrer">
						Remix Docs
					</a>
				</ListItem>
				<ListItem>
					<Link to="devices/a">device A</Link>
				</ListItem>
			</List>
		</Box>
	);
}
