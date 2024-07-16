type Props = {};
import Image from "next/image";
import map from "../../public/images/map.png";
import wa from "../../public/images/wa.png";
import Card from "../components/Card";

const OverView = (props: Props) => {
  return (
    <main>
      <h2>Hola, Jorge</h2>
      <h3>Find out what&apos;s going on in Andaluzia </h3>
      <p>
        Meet fellow farmers in your area, sign up to community events and learn
        about practices that farmers in your area are applying
      </p>
      <Card image={map} text1="Arable Farmers in Andalusía" text2="Meet them" />
      <Image src={wa} alt="whatsapp" className="w-full" />
    </main>
  );
};

export default OverView;
