import React, { ReactNode } from "react";
import SideBar from "@/components/SideBar";
import Header from "@/components/Header";
import Login from "./Login";

interface Props {
  children?: ReactNode;
  className?: string;
  onclick?: () => void;
}

const Layout: React.FC<Props> = ({ children, className = "" }) => {
  const baseUrl = "/admin";
  const Links = [
    {
      title: "Home",
      link: baseUrl + "/home",
    },
    {
      title: "About Us",
      link: baseUrl + "/about_us",
    },
    {
      title: "Packages",
      link: baseUrl + "/packages",
    },
    {
      title: "Jeep Saffari",
      link: baseUrl + "/jeep_saffari",
    },

    {
      title: "Canter Saffari",
      link: baseUrl + "/canter_saffari",
    },

    {
      title: "Dhikala Rest House",
      link: baseUrl + "/dhikalaresthouse",
    },
    {
      title: "Contact Us",
      link: baseUrl + "/contact_us",
    },
  ];

  const auth = false;
  if (auth) return <Login />;
  return (
    <div className="w-full h-screen flex">
      <title>Employee</title>
      <SideBar
        data={Links}
        mainClassName="max-w-[250px] "
        SideBarLogoClassName={""}
      />

      <div id="scroll-right" className="w-full overflow-y-scroll">
        <Header />
        <div className={`px-6 max-w-[1600px] mx-auto ${className}`}>
          {children}
        </div>
      </div>
    </div>
  );
};

export default Layout;
