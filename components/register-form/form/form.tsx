import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";

import type { RegisterFormInputs } from "./form.types";
import { RegisterFormSchema, registerFormSchema } from "./form.schema";
import { useLocale } from "hooks/useLocale/useLocale";

export const Form = () => {
	const { t } = useLocale();
	const {
		register,
		handleSubmit,
		watch,
		formState: { errors, isValid },
	} = useForm<RegisterFormSchema>({
		resolver: zodResolver(registerFormSchema),
	});

	const onSubmit: SubmitHandler<RegisterFormInputs> = async (data) => {
		await fetch("/api/register", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(data),
		});
	};

	return (
		<form className="space-y-4 md:space-y-6" onSubmit={handleSubmit(onSubmit)}>
			<div>
				<label
					htmlFor="email"
					className="block mb-2 text-sm font-medium text-gray-900"
				>
					{t("register.form.emailLabel")}
				</label>
				<input
					type="email"
					id="email"
					className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
					placeholder="name@company.com"
					required
					{...register("email")}
				/>
			</div>
			<div>
				<label
					htmlFor="companyName"
					className="block mb-2 text-sm font-medium text-gray-900"
				>
					{t("register.form.companyLabel")}
				</label>
				<input
					type="text"
					id="companyName"
					className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
					placeholder="Mighty Corp"
					required
					{...register("companyName")}
				/>
			</div>
			<div>
				<label
					htmlFor="password"
					className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
				>
					{t("register.form.passwordLabel")}
				</label>
				<input
					type="password"
					id="password"
					placeholder="••••••••"
					className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
					required
					{...register("password")}
				/>
			</div>
			<div>
				<label
					htmlFor="confirm-password"
					className="block mb-2 text-sm font-medium text-gray-900"
				>
					{t("register.form.confirmPassword")}
				</label>
				<input
					type="confirm-password"
					id="confirm-password"
					placeholder="••••••••"
					className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
					required
					{...register("confirmPassword")}
				/>
			</div>
			<div className="flex items-start">
				<div className="flex items-center h-5">
					<input
						id="terms"
						aria-describedby="terms"
						type="checkbox"
						className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300"
						required
					/>
				</div>
				<div className="ml-3 text-sm">
					<label htmlFor="terms" className="font-light text-gray-500">
						{t("register.form.acceptTerms")}{" "}
						<a
							className="font-medium text-primary-600 hover:underline"
							href="#"
						>
							{t("register.form.termsAndConditions")}
						</a>
					</label>
				</div>
			</div>
			<button
				disabled={!isValid}
				type="submit"
				className="w-full text-gray-900 bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
			>
				{t('register.form.submit')}
			</button>
			<p className="text-sm font-light text-gray-500">
				{t("register.form.alreadyHaveAccount")}{" "}
				<a href="/login" className="font-medium text-primary-600 hover:underline">
					{t("register.form.loginHere")}
				</a>
			</p>
		</form>
	);
};
