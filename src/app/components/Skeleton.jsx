export const TableSkeleton = () => {
  return (
    <table className="w-full text-center font-extrabold neo-table bg-white">
      <thead className=" text-black uppercase border-4 border-black">
        <tr className="">
          <th className="py-3 px-6 border-table">Name</th>
          <th className="py-3 px-6 border-table">Phone Number</th>
          <th className="py-3 px-6 border-table">Created At</th>
          <th className="py-3 px-6 border-table">Actions</th>
        </tr>
      </thead>
      <tbody className="animate-pulse">
        {Array.from({ length: 5 }).map((_, index) => (
          <tr key={index} className="border-table bg-gray-500">
            <td className="py-3 px-6 border-table">
              <div className="bg-gray-500 h-4 w-4"></div>
            </td>
            <td className="py-3 px-6 border-table">
              <div className="bg-gray-500 h-4 w-4"></div>
            </td>
            <td className="py-3 px-6 border-table">
              <div className="bg-gray-500 h-4 w-4"></div>
            </td>
            <td className="flex justify-center gap-1 py-3">
              <div className="bg-gray-500 h-4 w-4"></div>
              <div className="bg-gray-500 h-4 w-4"></div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
