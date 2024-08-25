export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <main>
        {/* Left Nav */}
        {children}
        {/* Right Nav */}
      </main>
    </div>
  );
}
