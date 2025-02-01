import { Metadata } from "next";
import SettingsPage from "./settingsPage";
import { redirect } from "next/navigation";
import getUserSession from "@/lib/getUserSession";
import { auth } from "../auth";

export const metadata: Metadata = {
  title: "Settings",
};

export default async function Page() {
  const session = await auth()
  const user = session?.user

  if(!user) {
    redirect("/login?callbackUrl=/settings")
  }

  return <SettingsPage user={user} />;
}