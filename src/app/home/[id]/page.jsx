import React from 'react';

const page = ({ params }) => {
  const { id } = params;
  return (
    <div className="flex min-h-60 w-full items-center justify-center text-xl font-bold">
      <p>This is home - {id}</p>
    </div>
  );
};

export default page;
