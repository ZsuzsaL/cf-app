type HeaderProps = {
  farmName: string;
};

const Header: React.FC<HeaderProps> = ({ farmName }) => {
  return <button className="my-4 bg-clay ">{farmName}</button>;
};

export default Header;
