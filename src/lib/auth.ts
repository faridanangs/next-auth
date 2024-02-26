import { NextAuthOptions } from "next-auth";
import Credentials from "next-auth/providers/credentials";

export const authOptions: NextAuthOptions = {
  session: {
    strategy: "jwt"
  },
  providers: [
    Credentials({
      credentials: {
        email: {
          label: "Email",
          type: "email",
          placeholder: "example@example.com",
        },
        password: {
          label: "Password",
          type: "password",
        },
      },
      // ini di gunakan untuk menangkap data ceredencial email dan pass
      async authorize(credentials) {
        const user = {
          id: "id",
          username: "hello",
          email: "example@gmail.com",
        };
        return user;
      },
    }),
  ],
};
