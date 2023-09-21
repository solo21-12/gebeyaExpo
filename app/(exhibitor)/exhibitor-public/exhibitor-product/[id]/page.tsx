import React from "react";

type Props = {
  params: {
    id: number;
  };
};

const page = ({ params: { id } }: Props) => {
  return <div className=" h-screen justify-center flex flex-col items-centeri">{id}</div>;
};

export default page;
