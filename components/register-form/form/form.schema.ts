import * as z from "zod";

export const registerFormSchema = z
	.object({
		email: z.string().email(),
		password: z.string().min(8),
		confirmPassword: z.string().min(8),
	})
	.superRefine(({ password, confirmPassword }, ctx) => {
		if (confirmPassword !== password) {
			ctx.addIssue({
				code: "custom",
				message: "The passwords did not match",
			});
		}
	});
