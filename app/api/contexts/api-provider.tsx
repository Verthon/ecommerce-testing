import * as React from "react";
import { ApolloProvider } from "@apollo/client";
import { apiClient } from "../apiClient";

type ApiProviderProps = {
	children: React.ReactNode;
};

export const ApiProvider = ({ children }: ApiProviderProps) => {
	return <ApolloProvider client={apiClient}>{children}</ApolloProvider>;
};
