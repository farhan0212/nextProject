import React, { Suspense } from "react";
import ContactTable from "../components/ContactTable";
import Search from "../components/Search";
import Pagination from "../components/Pagination";
import { CreateButton } from "../components/buttons";
import { getContactPages } from "../../../lib/data";
import { TableSkeleton } from "../components/Skeleton";

const Contacts = async ({ searchParams }) => {
  const query = searchParams?.query || "";
  const currentPage = Number(searchParams?.page) || 1;
  const totalPages = await getContactPages(query);

  return (
    <div className="w-3/4 mx-auto mt-5">
      <div className="flex items-center justify-between gap-5 mb-5">
        <Search />
        <CreateButton />
      </div>
      <Suspense key={query + currentPage} fallback={<TableSkeleton />}>
        <ContactTable query={query} currentPage={currentPage} />
      </Suspense>
      <Pagination totalPages={totalPages} />
    </div>
  );
};

export default Contacts;
