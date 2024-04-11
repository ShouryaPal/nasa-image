import NextAuth from "next-auth";
import type { Account, User as AuthUser } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import User from "@/models/User";
import connect from "@/lib/db";

// biome-ignore lint/suspicious/noExplicitAny: <explanation>
export const authOptions: any = {
  providers: [
    CredentialsProvider({
      id: "credentials",
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      // biome-ignore lint/suspicious/noExplicitAny: <explanation>
      async authorize(credentials: any) {
        await connect();
        try {
          const user = await User.findOne({ email: credentials.email });
          if (user) {
            const isPasswordCorrect = await bcrypt.compare(
              credentials.password,
              user.password
            );
            if (isPasswordCorrect) {
              return user;
            }
          }
          // biome-ignore lint/suspicious/noExplicitAny: <explanation>
        } catch (err: any) {
          throw new Error(err);
        }
      },
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID ?? "",
      clientSecret: process.env.OAUTH_SECRET ?? "",
    }),
    //
  ],
  callbacks: {
    async signIn({ user, account }: { user: AuthUser; account: Account }) {
      if (account?.provider === "credentials") {
        return true;
      }
      if (account?.provider === "google") {
        await connect();
        try {
          const existingUser = await User.findOne({ email: user.email });
          if (!existingUser) {
            const newUser = new User({
              email: user.email,
            });
            await newUser.save();
            return true;
          }
          return true;
        } catch (err) {
          console.log("Error saving user", err);
          return false;
        }
      }
    },
  },
};

export const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
