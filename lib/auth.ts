import NextAuth from "next-auth"
import { PrismaAdapter } from "@auth/prisma-adapter"
import prisma from "@/lib/prisma"
import bcrypt from "bcryptjs"
import { authConfig } from "@/auth.config"

export const { handlers, auth, signIn, signOut } = NextAuth({
  ...authConfig,
  // adapter: PrismaAdapter(prisma), // Gardez désactivé comme demandé précédemment
  providers: [
    {
      ...authConfig.providers[0],
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          throw new Error("Invalid credentials")
        }

        // --- Mock login for demo/testing without backend ---
        if (credentials.email === "admin@demo.com") {
          return { id: "mock-admin", email: "admin@demo.com", role: "ADMIN", name: "Mock Admin" }
        }
        if (credentials.email === "hotel@demo.com") {
          return { id: "mock-hotel", email: "hotel@demo.com", role: "HOTEL", name: "Mock Hotel" }
        }
        if (credentials.email === "client@demo.com") {
          return { id: "mock-client", email: "client@demo.com", role: "CLIENT", name: "Mock Client" }
        }
        // ----------------------------------------------------

        const user = await prisma.user.findUnique({
          where: {
            email: credentials.email as string
          }
        })

        if (!user || !user.password) {
          throw new Error("Invalid credentials")
        }

        const isPasswordCorrect = await bcrypt.compare(
          credentials.password as string,
          user.password
        )

        if (!isPasswordCorrect) {
          throw new Error("Invalid credentials")
        }

        return user
      }
    }
  ],
})
