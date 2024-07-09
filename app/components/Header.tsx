import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignOutButton,
} from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import logo from "../../public/images/logo.png";

type NavItem = {
  name: string;
  link: string;
};

const Header: React.FC = async ({}) => {
  const navItems: NavItem[] = [
    {
      name: "SCT",
      link: "supply-chain-transition",
    },
    {
      name: "Community",
      link: "community",
    },
    {
      name: "C+",
      link: "carbon-plus",
    },
  ];

  return (
    <header className="py-4 h-20 flex justify-between items-center">
      <Link href="/">
        <Image
          alt="climate farmers logo"
          src={logo}
          className="object-contain w-24 md:w-40"
        />
      </Link>
      <ul className="flex gap-8">
        {/* {navItems.map((item) => {
          return (
            <li key={item.name}>
              <Link href={item.link}>{item.name}</Link>
            </li>
          );
        })} */}
        {/* {session?.user && (
          <li>
            <Link href="profile">Profile</Link>
          </li>
        )} */}
      </ul>
      <SignedIn>
        <div className="flex items-center">
          {/* <p>{session.user.name}</p> */}
          <SignOutButton />
        </div>
      </SignedIn>
      <SignedOut>
        <SignInButton />
      </SignedOut>
    </header>
  );
};

export default Header;
