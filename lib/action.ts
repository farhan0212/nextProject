"use server";

import { z } from "zod";
import { prisma } from "./prisma";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

const ContactSchema = z.object({
  name: z.string().min(4, "Name must be at least 4 characters"),
  phone: z
    .string()
    .min(11, "Phone must be at least 11 characters")
    .regex(/^\d+$/, "Phone must contain only numbers"),
});

const CONTACT_PATH = "/contact";

interface State {
  error?: {
    name?: string[];
    phone?: string[];
  };
  message?: string;
}
export const saveContact = async (prevSate: any, formData: FormData) => {
  const validatedFields = ContactSchema.safeParse(
    Object.fromEntries(formData.entries())
  );

  if (!validatedFields.success) {
    return {
      Error: validatedFields.error.flatten().fieldErrors,
    };
  }

  try {
    await prisma.contact.create({
      data: {
        name: validatedFields.data.name,
        phone: validatedFields.data.phone,
      },
    });
  } catch (error) {
    return { message: "Failed to create contact" };
  }

  revalidatePath(CONTACT_PATH);
  redirect(CONTACT_PATH);
};
