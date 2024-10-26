"use client";

import React from "react";
import { SubmitButton } from "./buttons";
import { useFormState } from "react-dom";

import { saveContact } from "../../../lib/action";

const CreateForm = () => {
  const [state, formAction] = useFormState(saveContact, null);

  return (
    <>
      <form
        action={formAction}
        className="w-1/2 flex flex-col justify-center items-center">
        <label
          htmlFor="name"
          className="text-2xl font-bold mr-auto text-gray-900">
          Full Name
        </label>
        <input
          type="text"
          name="name"
          id="name"
          className="py-2 neo mb-4 w-full"
          placeholder="Name ...."
        />
        {state?.error?.name && (
          <p className="text-red-500">{state.error.name}</p>
        )}
        <label
          htmlFor="phone"
          className="text-2xl font-bold mr-auto text-gray-900">
          Nomor Telepon
        </label>
        <input
          type="tel"
          name="phone"
          id="phone"
          className="py-2 neo w-full mb-4"
          placeholder="Nomor Telepon ..."
        />
        {state?.error?.name && (
          <p className="text-red-500">{state.error.name}</p>
        )}
        {state?.message && <p className="text-red-500">{state.message}</p>}
        <SubmitButton Label="save" />
      </form>
    </>
  );
};

export default CreateForm;
