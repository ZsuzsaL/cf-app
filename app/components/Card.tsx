import Image, { StaticImageData } from "next/image";

type Props = {
  image: StaticImageData;
  text: string;
  button: string;
};

const Card: React.FC<Props> = ({ image, text, button }) => {
  return (
    <section className="rounded-3xl border-black border-4 my-6">
      <figure>
        <Image
          src={image}
          alt="farmer"
          className="rounded-b-none w-full h-36"
        />
        <figcaption className="border-black border-t-4 p-4">
          <p> {text}</p>
          <button className="underline pl-0">{button}</button>
        </figcaption>
      </figure>
    </section>
  );
};

export default Card;
