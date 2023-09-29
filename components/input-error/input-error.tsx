type InputError = {
  message: string;
  id?: string;
};

export const InputError = ({ id, message }: InputError) => {
  return (
    <p role="alert" className="mt-2 text-sm text-red-600" id={id}>
      {message}
    </p>
  );
};
