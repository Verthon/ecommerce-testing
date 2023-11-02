import { useLocale } from "app/localization/hooks/useLocale";
import Link from "next/link";
import type { LoginFormUIProps } from "./login-form.types";

export const Form = ({
  register,
  isSubmitDisabled,
  onSubmit,
}: LoginFormUIProps) => {
  const { t } = useLocale();

  return (
    <form className="space-y-4 md:space-y-6" onSubmit={onSubmit}>
      <div>
        <label
          htmlFor="email"
          className="mb-2 block text-sm font-medium text-gray-900"
        >
          {t("login.form.emailLabel")}
        </label>
        <input
          type="email"
          id="email"
          className="focus:ring-primary-600 focus:border-primary-600 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 sm:text-sm"
          placeholder="name@company.com"
          {...register("email")}
        />
      </div>
      <div>
        <label
          htmlFor="password"
          className="mb-2 block text-sm font-medium text-gray-900"
        >
          {t("login.form.passwordLabel")}
        </label>
        <input
          type="password"
          id="password"
          placeholder="••••••••"
          className="focus:ring-primary-600 focus:border-primary-600 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 sm:text-sm"
          {...register("password")}
        />
      </div>
      <div className="flex items-center justify-between">
        <div className="flex items-start">
          <div className="flex h-5 items-center">
            <input
              id="remember"
              aria-describedby="remember"
              type="checkbox"
              className="focus:ring-3 focus:ring-primary-300 h-4 w-4 rounded border border-gray-300 bg-gray-50"
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
        className="bg-primary-600 hover:bg-primary-700 focus:ring-primary-300 w-full rounded-lg border-gray-900 px-5 py-2.5 text-center text-sm font-medium text-gray-900 focus:outline-none focus:ring-4 disabled:cursor-not-allowed"
      >
        {t("login.form.singIn")}
      </button>
      <p className="text-sm font-light text-gray-500">
        {t("login.form.noAccount")}{" "}
        <Link
          href="/register"
          className="text-primary-600 font-medium hover:underline"
        >
          {t("login.form.signUp")}
        </Link>
      </p>
    </form>
  );
};
