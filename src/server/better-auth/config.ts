import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";

import { env } from "@/env";
import { db } from "@/server/db";

export const auth = betterAuth({
	baseUrl: env.BETTER_AUTH_URL,
	database: prismaAdapter(db, {
		provider: "postgresql",
	}),
	emailAndPassword: {
		enabled: true,
	},
	socialProviders: {
		github: { 
            clientId: process.env.BETTER_AUTH_GITHUB_CLIENT_ID as string, 
            clientSecret: process.env.BETTER_AUTH_GITHUB_CLIENT_SECRET as string, 
        }, 
	},
});

export type Session = typeof auth.$Infer.Session;
