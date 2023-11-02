import * as React from "react";
import { type SubmitHandler, useForm } from "react-hook-form";

import { useLocale } from "app/localization/hooks/useLocale";
import { Form } from "./form";
import type { LoginFormSchema } from "./login-form.types";
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
    const b = await signIn("credentials", {
      email: data.email,
      password: data.password,
      redirect: false,
    });
    reset();
  };

  return (
    <section className="bg-gray-50 ">
      <div className="mx-auto flex flex-col items-center justify-center px-6 py-8 md:h-screen lg:py-0">
        <div className="w-full rounded-lg bg-white shadow dark:border sm:max-w-md md:mt-0 xl:p-0">
          <div className="space-y-4 p-6 sm:p-8 md:space-y-6">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
              {t("login.form.title")}
            </h1>
            <Form
              register={register}
              onSubmit={handleSubmit(handleSubmitAction)}
              isSubmitDisabled={!isValid}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
