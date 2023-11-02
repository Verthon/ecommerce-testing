import { zodResolver } from "@hookform/resolvers/zod";
import { type SubmitHandler, useForm } from "react-hook-form";
import Link from "next/link";

import type { RegisterFormInputs } from "./form.types";
import { type RegisterFormSchema, registerFormSchema } from "./form.schema";
import { useLocale } from "app/localization/hooks/useLocale";

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
          className="mb-2 block text-sm font-medium text-gray-900"
        >
          {t("register.form.emailLabel")}
        </label>
        <input
          type="email"
          id="email"
          className="focus:ring-primary-600 focus:border-primary-600 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 sm:text-sm"
          placeholder="name@company.com"
          required
          {...register("email")}
        />
      </div>
      <div>
        <label
          htmlFor="companyName"
          className="mb-2 block text-sm font-medium text-gray-900"
        >
          {t("register.form.companyLabel")}
        </label>
        <input
          type="text"
          id="companyName"
          className="focus:ring-primary-600 focus:border-primary-600 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 sm:text-sm"
          placeholder="Mighty Corp"
          required
          {...register("companyName")}
        />
      </div>
      <div>
        <label
          htmlFor="password"
          className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
        >
          {t("register.form.passwordLabel")}
        </label>
        <input
          type="password"
          id="password"
          placeholder="••••••••"
          className="focus:ring-primary-600 focus:border-primary-600 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 sm:text-sm"
          required
          {...register("password")}
        />
      </div>
      <div>
        <label
          htmlFor="confirm-password"
          className="mb-2 block text-sm font-medium text-gray-900"
        >
          {t("register.form.confirmPassword")}
        </label>
        <input
          type="confirm-password"
          id="confirm-password"
          placeholder="••••••••"
          className="focus:ring-primary-600 focus:border-primary-600 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 sm:text-sm"
          required
          {...register("confirmPassword")}
        />
      </div>
      <div className="flex items-start">
        <div className="flex h-5 items-center">
          <input
            id="terms"
            aria-describedby="terms"
            type="checkbox"
            className="focus:ring-3 focus:ring-primary-300 h-4 w-4 rounded border border-gray-300 bg-gray-50"
            required
          />
        </div>
        <div className="ml-3 text-sm">
          <label htmlFor="terms" className="font-light text-gray-500">
            {t("register.form.acceptTerms")}{" "}
            <a
              className="text-primary-600 font-medium hover:underline"
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
        className="bg-primary-600 hover:bg-primary-700 focus:ring-primary-300 w-full rounded-lg px-5 py-2.5 text-center text-sm font-medium text-gray-900 focus:outline-none focus:ring-4"
      >
        {t("register.form.submit")}
      </button>
      <p className="text-sm font-light text-gray-500">
        {t("register.form.alreadyHaveAccount")}{" "}
        <Link
          href="/login"
          className="text-primary-600 font-medium hover:underline"
        >
          {t("register.form.loginHere")}
        </Link>
      </p>
    </form>
  );
};
