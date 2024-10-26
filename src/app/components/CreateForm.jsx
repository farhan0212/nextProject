"use client";

import React from "react";
import { SaveContact } from "../../../lib/action";
import { useFormState } from "react-dom";

const initialState = {
  error: {},
  message: "",
};

const CreateForm = () => {
  const [state, formAction] = useFormState(SaveContact, initialState);

  return (
    <>
      <form
        onSubmit={formAction}
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
          <div id="name-error" aria-live="polite" aria-atomic="true">
            <p className="mt-2 text-sm text-red-500">
              {state.error.name.join(", ")}
            </p>
          </div>
        )}

        <label
          htmlFor="phone"
          className="text-2xl font-bold mr-auto text-gray-900">
          Nomor Telepon
        </label>
        <input
          type="tel" // Changed from number to tel for phone numbers
          name="phone"
          id="phone"
          className="py-2 neo w-full mb-4"
          placeholder="Nomor Telepon ..."
        />
        {state?.error?.phone && (
          <div id="phone-error" aria-live="polite" aria-atomic="true">
            <p className="mt-2 text-sm text-red-500">
              {state.error.phone.join(", ")}
            </p>
          </div>
        )}

        {state?.message && (
          <div id="message-error" aria-live="polite" aria-atomic="true">
            <p className="mt-2 text-sm text-red-500">{state.message}</p>
          </div>
        )}

        <button
          type="submit"
          className="neo w-1/2 py-2 bg-orange-600 font-bold text-2xl text-white hover:bg-orange-700 transition-colors">
          Submit
        </button>
      </form>
    </>
  );
};

export default CreateForm;
