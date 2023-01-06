import { ApolloClient, InMemoryCache } from "@apollo/client";

export const apolloClient = new ApolloClient({
	uri: process.env.HYPERGRAPH_CONTENT_API,
	cache: new InMemoryCache(),
});

export const authorizedApolloClient = new ApolloClient({
	uri: process.env.HYPERGRAPH_CONTENT_API,
	cache: new InMemoryCache(),
	headers: {
		Authorization: `Bearer ${process.env.HYPERGRAPH_TOKEN}`
	}
});
