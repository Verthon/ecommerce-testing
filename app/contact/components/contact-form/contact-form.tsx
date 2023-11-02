import { zodResolver } from "@hookform/resolvers/zod";
import { type SubmitHandler, useForm } from "react-hook-form";

import { useLocale } from "app/localization/hooks/useLocale";
import { Input } from "components/input/Input";

import { type ContactFormSchema, contactFormSchema } from "./contact-form.schema";
import { Label } from "components/label/label";
import { useApiStatus } from "app/api/hooks/useApiStatus";
import { InputError } from "components/input-error/input-error";
import { Checkbox } from "components/checkbox/checkbox";
import { objectKeys } from "app/shared/utils/objectKeys";
import { ClosableAlert } from "components/closeable-alert/closeable-alert";

type ContactFormInputs = {};

export const ContactForm = () => {
  const { t } = useLocale();
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    reset: resetForm,
  } = useForm<ContactFormSchema>({
    mode: "onBlur",
    resolver: zodResolver(contactFormSchema),
  });
  const { apiStatus, setApiStatus } = useApiStatus();

  const onSubmit: SubmitHandler<ContactFormInputs> = async (data) => {
    try {
      setApiStatus("loading");
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Server responded with an error");
      }

      resetForm();
      setApiStatus("success");
    } catch (e) {
      setApiStatus("error");
    }
  };

  const getInputStatus = (
    fieldName: keyof ContactFormSchema,
  ): "idle" | "error" | "loading" => {
    const statusConditions = {
      loading: apiStatus === "loading",
      error: errors[fieldName],
    } as const;

    return (
      objectKeys(statusConditions).find((status) => statusConditions[status]) ||
      "idle"
    );
  };

  return (
    <form
      method="POST"
      className="mx-auto mt-16 max-w-xl sm:mt-20"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
        <div>
          <Label htmlFor="firstName">{t("contact.firstName")}</Label>
          <div className="mt-2.5">
            <Input
              type="text"
              id="first-name"
              {...register("firstName")}
              inputStatus={getInputStatus("firstName")}
            />
            {errors.firstName?.message && (
              <InputError id="email-error" message={errors.firstName.message} />
            )}
          </div>
        </div>
        <div>
          <Label htmlFor="lastName">{t("contact.lastName")}</Label>
          <div className="mt-2.5">
            <Input type="text" id="last-name" {...register("lastName")} />
            {errors.lastName?.message && (
              <InputError id="email-error" message={errors.lastName.message} />
            )}
          </div>
        </div>
        <div className="sm:col-span-2">
          <Label htmlFor="company">{t("contact.company")}</Label>
          <div className="mt-2.5">
            <Input type="text" id="company" {...register("companyName")} />
          </div>
        </div>
        <div className="sm:col-span-2">
          <Label htmlFor="email">{t("contact.email")}</Label>
          <div className="mt-2.5">
            <Input type="email" id="email" {...register("email")} />
            {errors.email?.message && (
              <InputError id="email-error" message={errors.email.message} />
            )}
          </div>
        </div>
        <div className="sm:col-span-2">
          <Label htmlFor="message">{t("contact.message")}</Label>
          <div className="mt-2.5">
            <textarea
              id="message"
              rows={4}
              className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              {...register("message")}
            ></textarea>
            {errors.message?.message && (
              <InputError id="email-error" message={errors.message.message} />
            )}
          </div>
        </div>
        <div className="flex gap-x-4 sm:col-span-2">
          <div className="flex h-6 items-center">
            <Checkbox
              {...register("consent")}
              description={
                <>
                  {t("contact.privacyConsentFirstPart")}{" "}
                  <a href="#" className="font-semibold text-indigo-600">
                    {t("contact.privacyConsentLastPart")}
                  </a>
                  .
                </>
              }
            />
          </div>
        </div>
      </div>
      <div className="mt-6">
        {apiStatus === "success" && (
          <ClosableAlert
            type="success"
            message={t("contact.emailSentSuccess")}
          />
        )}
        {apiStatus === "error" && (
          <ClosableAlert type="error" message={t("contact.emailSentFailure")} />
        )}
      </div>
      <div className="mt-10">
        <button
          type="submit"
          className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold capitalize text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500 disabled:ring-gray-200"
          disabled={!isValid || apiStatus === "loading"}
        >
          {t("contact.submit")}
        </button>
      </div>
    </form>
  );
};
