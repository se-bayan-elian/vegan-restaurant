"use client";
import ContactSec from "@/Components/contact/ContactSec";
import Footer from "@/Components/footer/Footer";
import Header from "@/Components/header/Header";
import SubscribeSec from "@/Components/subscribe/SubscribeSec";
import React, { Component } from "react";
import { usePathname, useRouter } from "next/navigation";

const MainComponent = ({ children }) => {
  let params = usePathname();
  console.log(params.includes("reserve"));
  return (
    <main>
      {/* if no in home page hide content  */}
      <Header variant={params.includes("reserve") || "withContent"} />
      {/* rest of page take animated background  */}
      <div
        className="animated-background"
        style={{
          backgroundImage: 'url("/assets/animatedBg.gif")',
          backgroundRepeat: "repeat",
        }}
      >
        {children}
        {/* render footer  */}
        <footer className="main-footer">
          <ContactSec></ContactSec>
          <SubscribeSec></SubscribeSec>
          <Footer></Footer>
        </footer>
      </div>
    </main>
  );
};

export default MainComponent;
