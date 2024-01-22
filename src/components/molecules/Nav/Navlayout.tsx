import { Heading } from "@/components/atom/Heading/Heading";
import Link from "next/link";
import React from "react";
import { Button } from "@/components/atom/Button/Button";
import { Links } from "@/components/atom/Link/Links";
const NavLayout: React.FC = () => {
  return (
    <nav>
      <ul className="flex gap-8">
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
        <div className="flex gap-8 items-center ml-6">
          <li>
            <Links>
              <Heading level={6}>Login</Heading>
            </Links>
          </li>
          <span className="text-gray-500 gap-0">|</span>
          <li>
            <Links>
              <Button>Register</Button>
            </Links>
          </li>
        </div>
      </ul>
    </nav>
  );
};

export default NavLayout;
