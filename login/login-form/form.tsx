import { useLocale } from "hooks/useLocale/useLocale";
import Link from "next/link";
import { LoginFormUIProps } from "./login-form.types";

export const Form = ({ register, isSubmitDisabled, onSubmit }: LoginFormUIProps) => {
	const { t } = useLocale();

	return (
		<form
			className="space-y-4 md:space-y-6"
			onSubmit={onSubmit}
		>
			<div>
				<label
					htmlFor="email"
					className="block mb-2 text-sm font-medium text-gray-900"
				>
					{t("login.form.emailLabel")}
				</label>
				<input
					type="email"
					id="email"
					className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
					placeholder="name@company.com"
					{...register('email')}
				/>
			</div>
			<div>
				<label
					htmlFor="password"
					className="block mb-2 text-sm font-medium text-gray-900"
				>
					{t("login.form.passwordLabel")}
				</label>
				<input
					type="password"
					id="password"
					placeholder="••••••••"
					className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
					{...register('password')}
				/>
			</div>
			<div className="flex items-center justify-between">
				<div className="flex items-start">
					<div className="flex items-center h-5">
						<input
							id="remember"
							aria-describedby="remember"
							type="checkbox"
							className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300"
						/>
					</div>
					<div className="ml-3 text-sm">
						<label htmlFor="remember" className="text-gray-500">
							{t("login.form.rememberMe")}
						</label>
					</div>
				</div>
			</div>
			<button
				type="submit"
				disabled={isSubmitDisabled}
				className="w-full text-gray-900 border-gray-900 bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center disabled:cursor-not-allowed"
			>
				{t("login.form.singIn")}
			</button>
			<p className="text-sm font-light text-gray-500">
				{t("login.form.noAccount")}{" "}
				<Link
					href="/register"
					className="font-medium text-primary-600 hover:underline"
				>
					{t("login.form.signUp")}
				</Link>
			</p>
		</form>
	);
};
