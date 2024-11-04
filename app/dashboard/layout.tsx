import SideNav from "@/app/utils/dashboard/SideNav";
import Header from "@/app/utils/dashboard/Header";
import { workSans } from "@/app/utils/font";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div
      className={`h-screen flex flex-col overflow-x-hidden ${workSans.className}`}
    >
      {/* Header fixed at the top */}
      <div className="flex-none w-full fixed top-0 left-0 z-10">
        <Header />
      </div>

      {/* Main layout with SideNav and content */}
      <div className="flex flex-grow w-screen mt-14">
        {/* SideNav - only visible on medium and larger screens */}
        <aside className="hidden lg:flex lg:w-1/5 h-full">
          <SideNav />
        </aside>

        {/* Main Content Area with independent scrolling */}
        <main className="flex flex-grow p-6 lg:w-3/5  h-full">{children}</main>
      </div>
    </div>
  );
}
