"use client";
import Link from "next/link";
import clsx from "clsx";
import { usePathname } from "next/navigation";
import icons from "@/app/utils/dashboard/icons";
import { FC, SVGProps } from "react";

interface NavLink {
  title: string;
  path: string;
  icon: FC<SVGProps<SVGSVGElement>>;
  SwitchIcon?: FC<SVGProps<SVGSVGElement>>;
}

const sections = {
  main: [
    {
      title: "Switch Organization",
      path: "/dashboard/switch-organization",
      icon: icons.org,
      SwitchIcon: icons.switch,
    },
    { title: "Dashboard", path: "/dashboard", icon: icons.dashboard },
  ],
  customers: [
    { title: "Users", path: "/dashboard/users", icon: icons.users },
    {
      title: "Guarantors",
      path: "/dashboard/guarantors",
      icon: icons.guarantor,
    },
    { title: "Loans", path: "/dashboard/loans", icon: icons.loans },
    {
      title: "Decision Models",
      path: "/dashboard/decision-models",
      icon: icons.decisionModel,
    },
    { title: "Savings", path: "/dashboard/savings", icon: icons.savings },
    {
      title: "Loan Requests",
      path: "/dashboard/loan-requests",
      icon: icons.loanRequests,
    },
    { title: "Whitelist", path: "/dashboard/whitelist", icon: icons.whitelist },
    { title: "Karma", path: "/dashboard/karma", icon: icons.karma },
  ],
  businesses: [
    { title: "Organization", path: "/dashboard/organization", icon: icons.org },
    {
      title: "Loan Products",
      path: "/dashboard/loan-products",
      icon: icons.loanRequests,
    },
    {
      title: "Savings Products",
      path: "/dashboard/savings-products",
      icon: icons.savingsProducts,
    },
    {
      title: "Fees and Charges",
      path: "/dashboard/fees-and-charges",
      icon: icons.feesAndCharges,
    },
    {
      title: "Transactions",
      path: "/dashboard/transactions",
      icon: icons.transactions,
    },
    { title: "Services", path: "/dashboard/services", icon: icons.services },
    {
      title: "Service Account",
      path: "/dashboard/service-account",
      icon: icons.serviceAccount,
    },
    {
      title: "Settlements",
      path: "/dashboard/settlements",
      icon: icons.settlements,
    },
    { title: "Reports", path: "/dashboard/reports", icon: icons.reports },
  ],
  settings: [
    {
      title: "Preferences",
      path: "/dashboard/preferences",
      icon: icons.preferences,
    },
    {
      title: "Fees and Pricing",
      path: "/dashboard/fees-and-pricing",
      icon: icons.feesAndPricing,
    },
    {
      title: "Audit Logs",
      path: "/dashboard/audit-logs",
      icon: icons.auditLogs,
    },
    {
      title: "System Messages",
      path: "/dashboard/system-messages",
      icon: icons.systemMessages,
    },
  ],
  last: [
    {
      title: "Logout",
      path: "/",
      icon: icons.signOut,
    },
  ],
};

export default function NavLinks() {
  const pathname = usePathname();

  const renderLinks = (links: NavLink[]) =>
    links.map(({ title, path, icon: Icon, SwitchIcon }) => {
      const normalizePath = (p:string) => p.replace(/\/+$/, ""); // Remove trailing slashes
      const isActive = normalizePath(pathname) === normalizePath(path);


      return (
        <Link
          href={path}
          key={title}
          className={clsx(
            "flex items-center px-4 py-2 text-[14px] font-normal leading-[18.77px] opacity-75 rounded-lg transition-colors duration-300",
            {
              "bg-teal bg-opacity-10 text-primary": isActive, // Active state styling
              "text-secondary hover:bg-gray text-opacity-60":
                !isActive &&
                title !== "Switch Organization" &&
                title !== "Logout",
            },
            title === "Switch Organization" || title === "Logout"
              ? "text-primary"
              : ""
          )}
        >
          <Icon className="mr-3" width={20} height={20} aria-hidden="true" />
          <span>{title}</span>

          {/* Render SwitchIcon beside "Switch Organization" */}
          {title === "Switch Organization" && SwitchIcon && (
            <SwitchIcon
              className="ml-2"
              width={14}
              height={14}
              aria-hidden="true"
            />
          )}
        </Link>
      );
    });

  return (
    <>
      <div>{renderLinks(sections.main)}</div>
      <div>
        <h2 className="px-4 py-2 customText">CUSTOMERS</h2>
        {renderLinks(sections.customers)}
      </div>
      <div>
        <h2 className="px-4 py-2 customText">BUSINESSES</h2>
        {renderLinks(sections.businesses)}
      </div>
      <div>
        <h2 className="px-4 py-2 customText">SETTINGS</h2>
        {renderLinks(sections.settings)}
      </div>
      <div>
        <hr className="my-4 " />
      </div>
      <div>{renderLinks(sections.last)}</div>
      <div>
        <p className="text-primary ml-2 font-normal text-[12px] mt-8 leading-[14.08px]">v.12.0</p>
      </div>
    </>
  );
}
