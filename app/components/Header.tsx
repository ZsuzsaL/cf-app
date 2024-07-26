"use client";

import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
  useUser,
} from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import logo from "../../public/images/logo.png";
import menu from "../../public/images/menu.png";
import SlidingMenu from "./SlidingMenu";

const Header: React.FC = () => {
  const { isSignedIn, user } = useUser();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (isSignedIn && user) {
      const checkAndAddUser = async () => {
        try {
          const response = await fetch("/api/checkUser", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              email: user.primaryEmailAddress?.emailAddress,
              userId: user.id,
            }),
          });

          if (response.ok) {
            const result = await response.json();
            console.log("Success:", result);
          } else {
            console.error("Failed to check/add user");
          }
        } catch (error) {
          console.error("An error occurred:", error);
        }
      };

      checkAndAddUser();
    }
  }, [isSignedIn, user]);

  return (
    <header className="p-4 h-20 flex justify-between items-center">
      <Link href="/">
        <Image
          alt="climate farmers logo"
          src={logo}
          className="object-contain w-24 md:w-40"
        />
      </Link>
      <SignedIn>
        <UserButton />
        <Image
          src={menu}
          alt="menu"
          className="cursor-pointer w-8 md:w-12"
          onClick={() => setIsMenuOpen(true)}
        />
        {isMenuOpen && <SlidingMenu setIsMenuOpen={setIsMenuOpen} />}
      </SignedIn>
      <SignedOut>
        <SignInButton />
      </SignedOut>
    </header>
  );
};

export default Header;
