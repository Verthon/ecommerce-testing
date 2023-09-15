import { HTMLInputTypeAttribute } from "react";

type InputProps = {
  name: string;
  placeholder?: string;
  type?: HTMLInputTypeAttribute;
  id?: string;
  defaultValue?: string;
  inputStatus?: "idle" | "error" | "loading" | "success" | "disabled";
  ariaDescribedby?: string;
};

const INPUT_CLASS: Record<
  Exclude<InputProps["inputStatus"], undefined>,
  string
> = {
  idle: "block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6",
  error:
    "block w-full rounded-md border-0 py-1.5 pr-10 text-red-900 ring-1 ring-inset ring-red-300 placeholder:text-red-300 focus:ring-2 focus:ring-inset focus:ring-red-500 sm:text-sm sm:leading-6",
  loading:
    "block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500 disabled:ring-gray-200 sm:text-sm sm:leading-6",
  disabled:
    "block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500 disabled:ring-gray-200 sm:text-sm sm:leading-6",
  success:
    "block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6",
};

export const Input = ({
  name,
  type = "text",
  inputStatus = "idle",
  defaultValue,
  ariaDescribedby,
  placeholder,
}: InputProps) => {
  const className = INPUT_CLASS[inputStatus];

  return (
    <input
      type={type}
      name={name}
      id={name}
      className={className}
      placeholder={placeholder}
      defaultValue={defaultValue}
      aria-invalid={inputStatus === "error"}
      aria-describedby={ariaDescribedby}
    />
  );
};
