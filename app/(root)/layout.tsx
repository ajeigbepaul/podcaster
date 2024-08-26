import LeftNavbar from "@/components/LeftNavbar";
import MobileNav from "@/components/MobileNav";
import RightSideBar from "@/components/RightSideBar";
import Image from "next/image";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="relative flex flex-col">
      <main className="flex bg-black-3 relative">
        <LeftNavbar />
        <section className="border-2 border-red-400  min-h-screen flex-1 px-4  sm:px-14">
          <div className="mx-auto w-full max-w-5xl max-sm:px-4 flex-col">
            <div className="flex h-16 items-center justify-between md:hidden">
              <Image
                src={"/icons/logo.svg"}
                alt="menuicon"
                width={30}
                height={30}
              />
              {/* mobile */}
              <MobileNav />
            </div>
            <div className="flex flex-col md:pb-14">
              {/* Toast */}
              {children}
            </div>
          </div>
        </section>
        <RightSideBar />
      </main>
    </div>
  );
}
