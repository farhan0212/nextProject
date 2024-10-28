import EditForm from "../../../components/edit";
import { getContactById } from "../../../../../lib/data";
import { notFound } from "next/navigation";

const EditContactPage = async ({ params }) => {
  const id = params.id;
  const contact = await getContactById(id);

  if (!contact) {
    notFound();
  }

  return (
    <>
      <div className="flex flex-col justify-center items-center mx-auto ">
        <h1 className="text-3xl font-bold my-5">Edit Contact</h1>
        <EditForm contact={contact} />
      </div>
    </>
  );
};

export default EditContactPage;
