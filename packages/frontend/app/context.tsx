// context.tsx
import React, { createContext } from "react";

export interface ServerStyleContextData {
	key: string;
	ids: Array<string>;
	css: string;
}

export interface ClientStyleContextData {
	reset: () => void;
}

export const ClientStyleContext = createContext<ClientStyleContextData | null>(
	null,
);
