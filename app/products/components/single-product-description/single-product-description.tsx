type SingleProductDescriptionProps = {
  description: string;
};

export const SingleProductDescription = ({
  description,
}: SingleProductDescriptionProps) => {
  return (
    <>
      <h3 className="sr-only">Description</h3>

      <div
        className="space-y-6 text-base text-gray-700"
        dangerouslySetInnerHTML={{ __html: description }}
      />
    </>
  );
};
