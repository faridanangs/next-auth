import { authOptions } from "@/lib/auth";
import NextAuth from "next-auth/next";

const handler = NextAuth(authOptions);

// KEMUDIAN export handler sebagai GET DAN POST karna next auth hanya mengenali ini
export { handler as GET, handler as POST };