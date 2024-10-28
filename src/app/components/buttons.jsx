"use client";

import clsx from "clsx";
import { Pencil, Plus, Trash } from "lucide-react";
import Link from "next/link";
import React from "react";
import { useFormStatus } from "react-dom";
import { deleteContact } from "../../../lib/action";

export const CreateButton = () => {
  return (
    <Link
      href="/contacts/create"
      className="px-3 py-2 text-black neo neo-animate">
      <Plus size={24} />
    </Link>
  );
};

export const EditButton = ({ id }) => {
  return (
    <Link
      href={`/contacts/edit/${id}`}
      className=" p-2 hover:scale-125 duration-300 text-yellow-500 ">
      <Pencil size={24} strokeWidth={3} />
    </Link>
  );
};

export const DeleteButton = ({ id }) => {
  const DeleteContactById = deleteContact.bind(null, id);

  return (
    <form action={DeleteContactById}>
      <button className=" p-2 text-red-500 hover:scale-125 duration-300 ">
        <Trash size={24} strokeWidth={3} />
      </button>
    </form>
  );
};

export const SubmitButton = ({ label }) => {
  const { pending } = useFormStatus();

  const className = clsx(
    "neo w-1/2 py-2 bg-orange-600 font-bold text-2xl text-white hover:bg-orange-700 transition-colors",
    { "opacity-50 cursor-progress": pending }
  );

  return (
    <button type="submit" className={className}>
      {label === "save" ? (
        <span>{pending ? "Saving..." : "save"}</span>
      ) : (
        <span>{pending ? "Updating... " : "update"}</span>
      )}
    </button>
  );
};
