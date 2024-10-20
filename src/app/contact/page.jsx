import React from "react";
import ContactTable from "../components/ContactTable";
import Search from "../components/Search";
import { CreateButton } from "../components/buttons";

const page = () => {
  return (
    <div className="w-3/4 mx-auto mt-5">
      <div className="flex items-center justify-between gap-5 mb-5">
        <Search />
        <CreateButton />
      </div>
      <ContactTable />
    </div>
  );
};

export default page;
