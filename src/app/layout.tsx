import "@/styles/globals.css";

import type { Metadata } from "next";
import { Geist, Inter } from "next/font/google";

import { TRPCReactProvider } from "@/trpc/react";
import { cn } from "@/lib/utils";

import { ThemeProvider } from "@/components/theme-provider";
import { ModeToggle } from "@/components/ui/dark-mode";

const inter = Inter({subsets:['latin'],variable:'--font-sans'});

export const metadata: Metadata = {
	title: "Lerno",
	description: "Your AI learning companion",
	icons: [{ rel: "icon", url: "/favicon.ico" }],
};

const geist = Geist({
	subsets: ["latin"],
	variable: "--font-geist-sans",
});

export default function RootLayout({
	children,
}: Readonly<{ children: React.ReactNode }>) {
	return (
		<html className={cn(geist.variable, "font-sans", inter.variable)} suppressHydrationWarning lang="en">
			<body>
				<TRPCReactProvider>
					<ThemeProvider
						attribute="class"
						defaultTheme="system"
						enableSystem
						disableTransitionOnChange
					>
						{children}
						<ModeToggle />
					</ThemeProvider>
		  		</TRPCReactProvider>
			</body>
		</html>
	);
}
