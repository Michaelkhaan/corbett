import React, { ReactNode, useState } from "react";
import SideBar from "@/components/SideBar";
import Header from "@/components/Header";
import Login from "./Login";
import useAuth from "@/zustand/store";

interface Props {
  children?: ReactNode;
  className?: string;
  onclick?: () => void;
}

const Layout: React.FC<Props> = ({ children, className = "" }) => {
  const [open, setOpen] = useState(false);
  const { token } = useAuth();
  const baseUrl = "/admin";
  const Links = [
    {
      title: "Home",
      link: baseUrl + "/home",
    },
    // {
    //   title: "About Us",
    //   link: baseUrl + "/about_us",
    // },
    {
      title: "Packages",
      link: baseUrl + "/packages",
    },
    {
      title: "Night Stay",
      link: baseUrl + "/nightstay",
    },
    // {
    //   title: "Jeep Saffari",
    //   link: baseUrl + "/jeep_saffari",
    // },

    // {
    //   title: "Canter Saffari",
    //   link: baseUrl + "/canter_saffari",
    // },

    // {
    //   title: "Dhikala Rest House",
    //   link: baseUrl + "/dhikalaresthouse",
    // },
    {
      title: "Received",
      link: baseUrl + "/contact",
    },
  ];

  if (!token) return <Login />;
  return (
    <div className="w-full h-screen flex">
      <title>Employee</title>
      <SideBar
        setOpen={setOpen}
        data={Links}
        mainClassName={`max-w-[250px] lg:block z-50 lg:max-w-auto ${
          open
            ? " min-w-[250px] block fixed lg:relative top-0 bottom-0"
            : "hidden lg:relative"
        } `}
        SideBarLogoClassName={"w-full"}
      />

      <div id="scroll-right" className="w-full overflow-y-scroll">
        <Header setOpen={setOpen} />
        <div className={`px-0 lg:px-6 max-w-[1600px] mx-auto ${className}`}>
          {children}
        </div>
      </div>
    </div>
  );
};

export default Layout;
