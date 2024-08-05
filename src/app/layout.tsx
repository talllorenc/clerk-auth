import {Fira_Mono} from "next/font/google";
import "./globals.css";
import {ClerkProvider, ClerkLoading, ClerkLoaded} from "@clerk/nextjs";
import React from "react";
import Navbar from "@/components/Navbar";

const inter = Fira_Mono({
    subsets: ["cyrillic", "latin"],
    weight: ["400", "500", "700"],
});

export default async function RootLayout({
                                             children,
                                         }: {
    children: React.ReactNode;
}) {
    return (
        <ClerkProvider>

            <html lang="en" suppressHydrationWarning>
            <body className={inter.className}>
            <ClerkLoading>
                <div>
                    <p>LOADING...</p>
                </div>
            </ClerkLoading>
            <ClerkLoaded> <Navbar/>
                {children}</ClerkLoaded>

            </body>
            </html>
        </ClerkProvider>

    );
}
