import Image from "next/image";
import bea from "../../public/images/beatriz.jpg";
import farmer from "../../public/images/farmer1.jpg";

type Props = {};

const TwoImage = (props: Props) => {
  return (
    <div className="flex">
      <figure>
        <Image src={bea} alt="farmer" className="my-10"></Image>
        <figcaption>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
          rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
          ipsum dolor sit amet.
        </figcaption>
      </figure>
      <figure>
        <Image src={farmer} alt="farmer" className="my-10"></Image>
        <figcaption>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
          rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
          ipsum dolor sit amet.
        </figcaption>
      </figure>
    </div>
  );
};

export default TwoImage;
