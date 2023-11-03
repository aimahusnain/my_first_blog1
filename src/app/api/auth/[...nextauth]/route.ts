import { AuthOptions } from 'next-auth';
import GithubProvider from 'next-auth/providers/github';
import NextAuth from 'next-auth/next';
import { Prisma } from '@prisma/client';
import { PrismaAdapter } from '@auth/prisma-adapter';
import prisma from "../../../../utils/connect"

import { getServerSession } from "next-auth"


const authOptions: AuthOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    GithubProvider({
      clientId: '6e26750467d26051c5f0',
      clientSecret: '72a09fad53416987fd32471ccf64d19a60ccc9b7',
    }),
  ],
  callbacks: {
    async session({ session, token }: any) {
      console.log(session, token);
      // You can modify the session data here if needed
      return session;
    },
    // Add the callbackUrl to redirect to the root page after login
    async redirect({ url, baseUrl }) {
      return 'http://localhost:3000/';
    },
  },
  secret: 'iamadeveloperlove',  
};

const nextAuth = NextAuth(authOptions);
export const getAuthSession = () => getServerSession(authOptions)

const handler = NextAuth(authOptions)
export {handler as GET, handler as POST}