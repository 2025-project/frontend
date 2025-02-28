import "../styles/globals.css";
import QueryProvider from "./query-provider";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="bg-gray-50">
        <QueryProvider>{children}</QueryProvider>
      </body>
    </html>
  );
}
