import Image from "next/image";
import Link from "next/link";
import logo from "../../public/images/logo.png";

const Header: React.FC = ({}) => {
  const navItems = [
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
    {
      name: "Profile",
      link: "profile",
    },
  ];

  return (
    <header className="py-4 h-20 flex justify-between items-center">
      <Link href="/">
        <Image
          alt="climate farmers logo"
          src={logo}
          className="object-contain w-40"
        />
      </Link>
      <ul className="flex gap-8">
        {navItems.map((item) => {
          return (
            <li key={item.name}>
              <Link href={item.link}>{item.name}</Link>
            </li>
          );
        })}
      </ul>
      <button className=" bg-clay ">Login</button>
    </header>
  );
};

export default Header;
