import { FormEvent } from "react";
import { UseFormRegister } from "react-hook-form";
import { CSRFToken } from "types/common.types";

export type LoginFormSchema = {
	email: string;
	password: string;
};

export type LoginFormProps = {
	csrfToken: CSRFToken;
};

export type LoginFormUIProps = {
  register: UseFormRegister<LoginFormSchema>
	onSubmit: () => void;
  isSubmitDisabled: boolean;
} & LoginFormProps;
