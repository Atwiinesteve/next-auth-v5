"use server";

import { signOut } from "@/app/auth";

export async function logoutUser () {
    await signOut();
}