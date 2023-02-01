import "../styles/globals.css";
import type { AppProps } from "next/app";
import { SessionProvider } from "next-auth/react";

import { GraphQlProvider } from "../providers/graphql-provider/graphql-provider";
import { LocaleProvider } from "providers/locale/locale-provider";

export default function App({
	Component,
	pageProps: { session, ...pageProps },
}: AppProps) {
	return (
		<SessionProvider session={session}>
			<GraphQlProvider>
				<LocaleProvider>
					<Component {...pageProps} />
				</LocaleProvider>
			</GraphQlProvider>
		</SessionProvider>
	);
}
