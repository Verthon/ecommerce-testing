import * as React from "react";
import { UseFormRegister } from "react-hook-form";

type CheckboxProps = {
  description: React.ReactNode;
  id?: string;
  name?: string;
  label?: string;
} & ReturnType<UseFormRegister<any>>;

export const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  ({ id, name, description, label, onBlur, onChange }, ref) => {
    return (
      <div className="relative flex items-start">
        <div className="flex h-6 items-center">
          <input
            ref={ref}
            id={id}
            name={name}
            type="checkbox"
            className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600 cursor-pointer"
            onBlur={onBlur}
            onChange={onChange}
          />
        </div>
        <div className="ml-3 text-sm leading-6">
          <label htmlFor={name} className="font-medium text-gray-900">
            {label}
          </label>{" "}
          <span id={id} className="text-gray-500">
            <span className="sr-only">{label}</span>
            {description}
          </span>
        </div>
      </div>
    );
  },
);

Checkbox.displayName = "Checkbox";
