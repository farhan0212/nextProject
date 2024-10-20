import { Pencil, Plus, Trash } from "lucide-react";
import Link from "next/link";
import React from "react";

export const CreateButton = () => {
  return (
    <Link
      href="/contacts/create"
      className="px-3 py-2 text-black neo neo-animate">
      <Plus size={24} />
    </Link>
  );
};

export const EditButton = () => {
  return (
    <Link
      href="/contacts/edit"
      className=" p-2 hover:scale-125 duration-300 text-yellow-500 ">
      <Pencil size={24} strokeWidth={3} />
    </Link>
  );
};

export const DeleteButton = () => {
  return (
    <Link
      href="/contacts/edit"
      className=" p-2 text-red-500 hover:scale-125 duration-300 ">
      <Trash size={24} strokeWidth={3} />
    </Link>
  );
};
