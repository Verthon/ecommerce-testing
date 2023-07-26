import { ApolloClient, InMemoryCache } from "@apollo/client";

export const apiClient = new ApolloClient({
	uri: process.env.HYPERGRAPH_CONTENT_API,
	cache: new InMemoryCache(),
});

export const authorizedApiClient = new ApolloClient({
	uri: process.env.HYPERGRAPH_CONTENT_API,
	cache: new InMemoryCache(),
	headers: {
		Authorization: `Bearer ${process.env.HYPERGRAPH_TOKEN}`,
	},
});
