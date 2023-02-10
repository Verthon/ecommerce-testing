import { FormEvent } from "react";
import { CSRFToken } from "types/common.types";

export type LoginFormProps = {
	csrfToken: CSRFToken;
	onSubmit: (e: FormEvent<HTMLFormElement>) => void;
};
