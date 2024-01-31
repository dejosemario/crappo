"use client";

import { Heading } from "@/components/atom/Heading/Heading";
import Link from "next/link";
import React, { useState } from "react";
import { Button } from "@/components/atom/Button/Button";
import { Links } from "@/components/atom/Link/Links";
import CrappoLogo from "../Logo/CrappoLogo";
import { MdOutlineClose } from "react-icons/md";
import { BiMenu } from "react-icons/bi";

const NavMobile: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex md:hidden justify-between ">
      <CrappoLogo />
      <BiMenu
        onClick={() => setIsOpen((prev) => !prev)}
        className="text-white w-8 h-8 cursor-pointer"
      />

      {isOpen && (
        <nav className="fixed top-0 left-0 bg-[#0D0D2B] right-0 z-10 pt-[20px] w-full h-[70%] px-6 ">
          <MdOutlineClose
            onClick={() => setIsOpen((prev) => !prev)}
            className="absolute top-[2vh] right-[4vw] text-white w-8 h-8 cursor-pointer"
          />
          <ul className="flex gap-8 flex-col">
            <li>
              <Links>
                <Heading level={6}>Products</Heading>
              </Links>
            </li>
            <li>
              <Links>
                <Heading level={6}>About</Heading>
              </Links>
            </li>
            <li>
              <Links>
                <Heading level={6}>Contact</Heading>
              </Links>
            </li>
            <div className="flex gap-8 items-center">
              <li>
                <Links>
                  <Heading level={6}>Login</Heading>
                </Links>
              </li>
              <span className="text-gray-500">|</span>
              <li>
                <Links>
                  <Button>Register</Button>
                </Links>
              </li>
            </div>
          </ul>
        </nav>
      )}
    </div>
  );
};

export default NavMobile;
