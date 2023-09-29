import * as React from "react";
import {
  CheckCircleIcon,
  XMarkIcon,
  XCircleIcon,
} from "@heroicons/react/20/solid";

import { useLocale } from "app/localization/hooks/useLocale";

type ClosableAlertProps = {
  message: string;
  type: "success" | "error";
};

const icon = {
  success: (
    <CheckCircleIcon className="h-5 w-5 text-green-400" aria-hidden="true" />
  ),
  error: <XCircleIcon className="h-5 w-5 text-red-400" aria-hidden="true" />,
};

const Title = ({ message, type }: ClosableAlertProps) => {
  const colorClassName = {
    success: "text-green-800",
    error: "text-red-800",
  };
  const className = `text-sm font-medium ${colorClassName[type]}`;

  return <p className={className}>{message}</p>;
};

export const ClosableAlert = ({ message, type }: ClosableAlertProps) => {
  const { t } = useLocale();
  const [isOpen, setIsOpen] = React.useState(true);
  
  const backgroundColorClass = {
    success: "bg-green-50",
    error: "bg-red-50",
  };
  const closeButtonClass = {
    success:
      "inline-flex rounded-md bg-green-50 p-1.5 text-green-500 hover:bg-green-100 focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-offset-2 focus:ring-offset-green-50",
    error:
      "inline-flex rounded-md bg-red-50 p-1.5 text-red-500 hover:bg-red-100 focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-offset-2 focus:ring-offset-red-50",
  };

  if(!isOpen) return null;

  return (
    <div className={`rounded-md ${backgroundColorClass[type]} p-4`}>
      <div className="flex">
        <div className="flex-shrink-0">{icon[type]}</div>
        <div className="ml-3">
          <Title type={type} message={message} />
        </div>
        <div className="ml-auto pl-3">
          <div className="-mx-1.5 -my-1.5">
            <button type="button" className={closeButtonClass[type]} onClick={() => setIsOpen(false)}>
              <span className="sr-only">{t("core.dismiss")}</span>
              <XMarkIcon className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
