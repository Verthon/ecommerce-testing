import * as React from "react";
import { UseFormRegister } from "react-hook-form";

type InputProps = {
  name: string;
  placeholder?: string;
  type?: React.HTMLInputTypeAttribute;
  id?: string;
  defaultValue?: string;
  inputStatus?: "idle" | "error" | "loading" | "success" | "disabled";
  ariaDescribedby?: string;
} & ReturnType<UseFormRegister<any>>;

const INPUT_CLASS: Record<
  Exclude<InputProps["inputStatus"], undefined>,
  string
> = {
  idle: "block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6",
  error:
    "block w-full rounded-md border-0 py-1.5 pr-10 text-red-900 ring-1 ring-inset ring-red-300 placeholder:text-red-300 focus:ring-2 focus:ring-inset focus:ring-red-500 sm:text-sm sm:leading-6",
  loading:
    "block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 disabled:cursor-wait disabled:bg-gray-50 disabled:text-gray-500 disabled:ring-gray-200 sm:text-sm sm:leading-6",
  disabled:
    "block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500 disabled:ring-gray-200 sm:text-sm sm:leading-6",
  success:
    "block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6",
};

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      name,
      type = "text",
      inputStatus = "idle",
      defaultValue,
      ariaDescribedby,
      placeholder,
      onBlur,
      onChange,
    },
    ref,
  ) => {
    const className = INPUT_CLASS[inputStatus];

    return (
      <input
        ref={ref}
        type={type}
        name={name}
        id={name}
        className={className}
        formNoValidate
        placeholder={placeholder}
        defaultValue={defaultValue}
        aria-invalid={inputStatus === "error"}
        aria-describedby={ariaDescribedby}
        onBlur={onBlur}
        onChange={onChange}
      />
    );
  },
);

Input.displayName = "Input";
