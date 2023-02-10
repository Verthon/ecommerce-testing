import * as React from "react";

import { useLocale } from "hooks/useLocale/useLocale";
import { Form } from "./form";
import { LoginFormProps } from "./login-form.types";

export const LoginForm = ({ csrfToken }: LoginFormProps) => {
	const { t } = useLocale();

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
	};

	return (
		<section className="bg-gray-50 ">
			<div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
				<div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0">
					<div className="p-6 space-y-4 md:space-y-6 sm:p-8">
						<h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
							{t("login.form.title")}
						</h1>
						<Form csrfToken={csrfToken} onSubmit={handleSubmit} />
					</div>
				</div>
			</div>
		</section>
	);
};
