import { ApolloProvider } from "@apollo/client";
import { apolloClient } from "../../graphql/apolloClient";
import type { GraphQlProviderProps } from "./graphql-provider.types";

export const GraphQlProvider = ({ children }: GraphQlProviderProps) => {
	return <ApolloProvider client={apolloClient}>{children}</ApolloProvider>;
};
