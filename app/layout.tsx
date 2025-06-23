import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

// AWS Amplify
import "@/lib/amplify/client-init";
import "@/lib/amplify/server-init";
import { QueryClientProvider } from "@/lib/react-query/query-client-provider";
import { I18NextHtmlProvider } from "@/lib/i18n-next/i18n-next-html-provider";
import { ThemeProvider } from "@/components/theme-providet";
import { Authenticated } from "@/components/authenticated";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "mandarino",
  description: "language learning app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <I18NextHtmlProvider>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <QueryClientProvider>
            <Authenticated>{children}</Authenticated>
          </QueryClientProvider>
        </ThemeProvider>
      </body>
    </I18NextHtmlProvider>
  );
}
