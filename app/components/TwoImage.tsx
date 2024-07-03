import Image, { StaticImageData } from "next/image";

type Props = {
  image1: StaticImageData;
  image2: StaticImageData;
  text1: string;
  text2: string;
};

const TwoImage: React.FC<Props> = ({ image1, image2, text1, text2 }) => {
  return (
    <div className="flex">
      <figure>
        <Image src={image1} alt="farmer" className="my-10"></Image>
        <figcaption>{text1}</figcaption>
      </figure>
      <figure>
        <Image src={image2} alt="farmer" className="my-10"></Image>
        <figcaption>{text2}</figcaption>
      </figure>
    </div>
  );
};

export default TwoImage;
