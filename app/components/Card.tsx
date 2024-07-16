import Image, { StaticImageData } from "next/image";

type Props = {
  image: StaticImageData;
  text1: string;
  text2: string;
};

const Card: React.FC<Props> = ({ image, text1, text2 }) => {
  return (
    <section className="rounded-3xl border-black border-4 my-6">
      <figure>
        <Image src={image} alt="farmer" className="rounded-none w-full" />
        <figcaption className="border-black border-t-4 p-4">
          <p> {text1}</p>
          <button className="underline pl-0">{text2}</button>
        </figcaption>
      </figure>
    </section>
  );
};

export default Card;
