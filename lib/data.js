import { prisma } from "./prisma";

export const getContacts = async (query, currentPage) => {
  try {
    const contacts = await prisma.contact.findMany({
      where: {
        OR: [
          { name: { contains: query, mode: "insensitive" } },
          { phone: { contains: query, mode: "insensitive" } },
        ],
      },
    });
    return contacts;
  } catch (error) {
    throw new Error("Fail fetching contact");
  }
};

export const getContactById = async (id) => {
  try {
    const contact = await prisma.contact.findUnique({
      where: {
        id,
      },
    });
    return contact;
  } catch (error) {
    throw new Error("Fail fetching contact");
  }
};

export const deleteContact = async (id) => {
  try {
    const contact = await prisma.contact.delete({
      where: {
        id,
      },
    });
    return contact;
  } catch (error) {
    throw new Error("Fail delete contact");
  }
};
