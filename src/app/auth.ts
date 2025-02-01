import {PrismaAdapter} from "@auth/prisma-adapter";
import {Adapter} from "next-auth/adapters";
import prisma from "@/lib/prisma"
import NextAuth from "next-auth"
import Google from "next-auth/providers/google"
import Github from "next-auth/providers/github"
 
export const { handlers, signIn, signOut, auth } = NextAuth({
  theme: {
    logo: "/logo.png"
  },
  adapter: PrismaAdapter(prisma) as Adapter,
  providers: [Google, Github],
  // pages: {
  //   signIn: "/login",
  //   signOut: "/",
  //   newUser: "/register"
  // }
});