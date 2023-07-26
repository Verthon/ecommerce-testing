import type { AppProps } from "next/app";
import { SessionProvider } from "next-auth/react";

import "../styles/globals.css";
import { LocaleProvider } from "app/localization/contexts/locale-context";
import { ApiProvider } from "app/api/contexts/api-provider";

export default function App({
	Component,
	pageProps: { session, ...pageProps },
}: AppProps) {
	return (
		<SessionProvider session={session}>
			<ApiProvider>
				<LocaleProvider>
					<Component {...pageProps} />
				</LocaleProvider>
			</ApiProvider>
		</SessionProvider>
	);
}
