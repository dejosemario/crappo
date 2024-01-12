import { Heading } from "@/components/atom/Heading/Heading";
import Link from "next/link";
import React from "react";
import { Button } from "@/components/atom/Button/Button";
const NavLayout: React.FC = () => {
  return (
    <nav>
      <ul className="flex gap-8">
        <li>
          <Link href="/products">
            <Heading level={6}>Products</Heading>
          </Link>
        </li>
        <li>
          <Link href="/about">
            <Heading level={6}>About</Heading>
          </Link>
        </li>
        <li>
          <Link href="/contact">
            <Heading level={6}>Contact</Heading>
          </Link>
        </li>
        <div className="flex gap-8 items-center ml-6">
          <li>
            <Link href="/login">
              <Heading level={6}>Login</Heading>
            </Link>
          </li>
          <span className="text-gray-500 gap-0">|</span>
          <li>
            <Link href="/features">
              <Button>Register</Button>
            </Link>
          </li>
        </div>
      </ul>
    </nav>
  );
};

export default NavLayout;
