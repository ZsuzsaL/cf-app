type Props = {};
import Image from "next/image";
import water from "../../public/images/beatriz.jpg";
import cohort from "../../public/images/cohort.png";
import farmer from "../../public/images/farmer-v.png";
import crops from "../../public/images/farmer1.jpg";
import map from "../../public/images/map.png";
import video from "../../public/images/video.png";
import wa from "../../public/images/wa.png";

import Card from "../components/Card";

const Home = (props: Props) => {
  const cards = [
    {
      img: crops,
      text: "Learn about cover crops",
      button: "Join the farm event",
    },
    {
      img: video,
      text: "Webinar on Holistic Farming",
      button: "See the recording",
    },
    {
      img: water,
      text: "How should I manage water in Summer?",
      button: "Access the Learning Platform",
    },
    {
      img: map,
      text: "Arable Farmers in Spain",
      button: "Meet them",
    },
    {
      img: farmer,
      text: "La Candelaria is a farm in transition since 2018 producing soy and wheat.",
      button: "See farm profile",
    },
  ];
  return (
    <main>
      <h2>Hola, Jorge</h2>
      <h3>Find out what&apos;s going on in Andaluzia </h3>
      <p>
        Meet fellow farmers in your area, sign up to community events and learn
        about practices that farmers in your area are applying
      </p>
      <Card image={map} text="Arable Farmers in Andalusía" button="Meet them" />
      <Image src={wa} alt="whatsapp" className="w-full" />
      {cards.map((card, i) => {
        return (
          <Card
            image={card.img}
            text={card.text}
            button={card.button}
            key={i}
          />
        );
      })}
      <Image src={cohort} alt="cohort" className="w-full" />
    </main>
  );
};

export default Home;
