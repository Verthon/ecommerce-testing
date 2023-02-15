import Link from "next/link";

import { useLocale } from "hooks/useLocale/useLocale";

import { Form } from "./form/form";

export const RegisterForm = () => {

	const { t } = useLocale()

	return (
		<section className="bg-gray-50">
			<div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
				<Link
					href="/"
					className="flex items-center mb-6 text-2xl font-semibold text-gray-900"
				>
					Brand eyewear
				</Link>
				<div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0">
					<div className="p-6 space-y-4 md:space-y-6 sm:p-8">
						<h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
							{t('register.form.createAccount')}
						</h1>
						<Form />
					</div>
				</div>
			</div>
		</section>
	);
};
