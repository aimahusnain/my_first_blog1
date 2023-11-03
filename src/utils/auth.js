import GithubProvider from "next-auth/providers/github"
import prisma from "./connect"

import { PrismaAdapter } from '@auth/prisma-adapter';
import { getServerSession } from "next-auth"

export const authOptions = {
  adapter: PrismaAdapter(prisma),
    providers: [
      GithubProvider({
        clientId: process.env.GITHUB_ID,
        clientSecret: process.env.GITHUB_SECRET,
      }),
    ],
  }

export const getAuthSession = () => getServerSession(authOptions)