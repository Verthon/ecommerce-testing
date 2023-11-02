type SingleProductNameProps = {
  name: string;
};

export const SingleProductName = ({ name }: SingleProductNameProps) => {
  return (
    <h1 className="text-3xl font-bold tracking-tight text-gray-900">{name}</h1>
  );
};
