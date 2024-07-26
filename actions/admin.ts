"use server";

import { UserRole, currentRole } from "@/lib/auth";

export const admin = async () => {
  const role = await currentRole();

  if (role && role === "ADMIN") {
    return { success: "Allowed Server Action!" };
  }

  return { error: "Forbidden Server Action!" };
};
