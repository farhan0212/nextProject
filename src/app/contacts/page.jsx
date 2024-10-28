import React from "react";
import ContactTable from "../components/ContactTable";
import Search from "../components/Search";
import { CreateButton } from "../components/buttons";

const Contacts = ({ searchParams }) => {
  const query = searchParams?.query || "";
  const currentPage = Number(searchParams?.page) || 1;

  return (
    <div className="w-3/4 mx-auto mt-5">
      <div className="flex items-center justify-between gap-5 mb-5">
        <Search />
        <CreateButton />
      </div>
      <ContactTable query={query} currentPage={currentPage} />
    </div>
  );
};

export default Contacts;
