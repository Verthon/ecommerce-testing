import { UseFormRegister } from "react-hook-form";

export type LoginFormSchema = {
	email: string;
	password: string;
};

export type LoginFormUIProps = {
  register: UseFormRegister<LoginFormSchema>
	onSubmit: () => void;
  isSubmitDisabled: boolean;
}
