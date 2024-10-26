import CreateForm from "../../components/CreateForm";
import React from "react";

const CreateContactPage = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center mx-auto ">
        <h1 className="text-3xl font-bold my-5">Create Contact</h1>
        <CreateForm />
      </div>
    </>
  );
};

export default CreateContactPage;
