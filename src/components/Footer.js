import React from "react";
import Layout from "./Layout";
import Link from "next/link";
const Footer = () => {
  return (
    <footer className="w-full border-t-2 border-solid border-dark font-medium text-lg dark:border-light dark:text-light sm:text-base ">
      <Layout className="py-8 flex items-center justify-between lg:flex-col lg:py-6">
        <span>{new Date().getFullYear()} &copy; All Rights Reserved.</span>
        <div className="flex items-center lg:py-2">
            Built with <span className="text-red-600 text-2xl px-1 under">&#9825;</span> by&nbsp;<Link href="/" className="underline underline-offset-4">Grace Reed</Link>
        </div>
        <Link href="https://www.buymeacoffee.com/gmx.reed" target="_blank">Buy Me a Coffee</Link>
      </Layout>
    </footer>
  );
};

export default Footer;
//  &#9825 