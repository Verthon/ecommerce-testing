import { ButtonProps } from "./Button.types";

export const Button = ({ disabled, text, variant }: ButtonProps) => {
	if (variant === "outline") {
		return (
			<button
				className="px-12 py-3 mt-8 text-sm font-medium text-gray-900 transition bg-white border border-gray-900 rounded hover:shadow focus:outline-none focus:ring"
				disabled={disabled}
			>
				{text}
			</button>
		);
	}

	return (
		<button
			className="px-12 py-3 mt-8 text-sm font-medium text-white transition bg-gray-900 border border-gray-900 rounded hover:shadow focus:outline-none focus:ring"
			disabled={disabled}
		>
			{text}
		</button>
	);
};
