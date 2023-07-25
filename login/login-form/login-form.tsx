import * as React from "react";
import { SubmitHandler, useForm } from "react-hook-form";

import { useLocale } from "app/localization/hooks/useLocale";
import { Form } from "./form";
import { LoginFormSchema } from "./login-form.types";
import { signIn } from "next-auth/react";

export const LoginForm = () => {
	const { t } = useLocale();
	const {
		register,
		handleSubmit,
		watch,
		formState: { errors, isValid },
		reset,
	} = useForm<LoginFormSchema>();

	const handleSubmitAction: SubmitHandler<LoginFormSchema> = async (data) => {
		const b = await signIn('credentials', { email: data.email, password: data.password, redirect: false });
		reset();
	}


	return (
		<section className="bg-gray-50 ">
			<div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
				<div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0">
					<div className="p-6 space-y-4 md:space-y-6 sm:p-8">
						<h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
							{t("login.form.title")}
						</h1>
						<Form register={register} onSubmit={handleSubmit(handleSubmitAction)} isSubmitDisabled={!isValid} />
					</div>
				</div>
			</div>
		</section>
	);
};
