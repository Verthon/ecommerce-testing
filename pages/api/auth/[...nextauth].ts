import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import * as bcrypt from "bcrypt";

import {
	GetAccountByEmailDocument,
	GetAccountByEmailQuery,
	GetAccountByEmailQueryVariables,
} from "../../../generated/graphql";
import { authorizedApolloClient } from "../../../graphql/apolloClient";

export const authOptions = {
	pages: {
		signIn: "/login",
	},
	providers: [
		CredentialsProvider({
			name: "Credentials",
			credentials: {
				email: { label: "Email", type: "text", placeholder: "jsmith" },
				password: { label: "Password", type: "password" },
			},
			async authorize(credentials) {
				if (!credentials) {
					return null;
				}

				const userByEmail = await authorizedApolloClient.query<
					GetAccountByEmailQuery,
					GetAccountByEmailQueryVariables
				>({
					query: GetAccountByEmailDocument,
					variables: {
						email: credentials.email,
					},
				});

				if (userByEmail.error) {
					return null;
				}

				if (!userByEmail.data.account?.password) {
					return null;
				}

				const hashedPassword = userByEmail.data.account?.password;

				const arePasswordsEqual = await bcrypt.compare(
					credentials.password,
					hashedPassword
				);

				if (!arePasswordsEqual) {
					return null;
				}

				return {
					id: userByEmail?.data?.account?.id,
					email: userByEmail?.data?.account?.email,
				};
			},
		}),
	],
};

//@ts-ignore
export default NextAuth(authOptions);
