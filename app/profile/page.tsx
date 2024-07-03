import Image from "next/image";

import { query } from "@/lib/db";
import manuel from "../../public/images/manuel-profile.png";
import { FarmInfoData } from "../types/types";

async function getData(): Promise<FarmInfoData[]> {
  const result = await query("SELECT * FROM farmInfo");
  return result.rows;
}

type Props = {};

const Profile = async (props: Props) => {
  const data: FarmInfoData[] = await getData();

  return (
    <main>
      <section>
        <figure className="flex gap-8">
          <Image src={manuel} alt="profile" />
          <figcaption className="text-green">
            <h1>{data?.[0]?.landownerfirstname}</h1>
            <h4>
              {data?.[0]?.farmname}| {data?.[0]?.farmsize}
            </h4>
          </figcaption>
        </figure>
      </section>
    </main>
  );
};

export default Profile;
