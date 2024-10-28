import React from "react";
import { getContacts } from "../../../lib/data";
import { formatDate } from "../../../lib/utils";
import { DeleteButton, EditButton } from "./buttons";

const ContactTable = async ({ query, currentPage }) => {
  const contacts = await getContacts(query, currentPage);

  return (
    <div>
      <table className="w-full text-center font-extrabold neo-table bg-white">
        <thead className=" text-black uppercase border-4 border-black">
          <tr className="">
            <th className="py-3 px-6 border-table">Name</th>
            <th className="py-3 px-6 border-table">Phone Number</th>
            <th className="py-3 px-6 border-table">Created At</th>
            <th className="py-3 px-6 border-table">Actions</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((contact, index) => {
            return (
              <tr key={index} className="border-table">
                <td className="py-3 px-6 border-table">{contact.name}</td>
                <td className="py-3 px-6 border-table">{contact.phone}</td>
                <td className="py-3 px-6 border-table">
                  {formatDate(contact.created_at.toString())}
                </td>
                <td className="flex justify-center gap-1 py-3">
                  <EditButton id={contact.id} />
                  <DeleteButton id={contact.id} />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default ContactTable;
