import * as React from "react";

type LabelProps = {
  children: React.ReactNode;
} & Pick<HTMLLabelElement, "htmlFor">;

export const Label = ({ htmlFor, children }: LabelProps) => {
  return (
    <label
      htmlFor={htmlFor}
      className="block text-sm font-semibold capitalize leading-6 text-gray-900"
    >
      {children}
    </label>
  );
};
