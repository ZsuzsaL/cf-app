import { query } from "@/lib/db";
import Image from "next/image";
import manuel from "../../public/images/manuel-profile.png";
import { FarmInfoData } from "../types/types";

async function getData(): Promise<FarmInfoData[]> {
  const result = await query("SELECT * FROM farmInfo");
  return result.rows;
}

const ProfilePage = async () => {
  const farmInfoData: FarmInfoData[] = await getData();

  return (
    <main>
      <section>
        <figure className="flex gap-8">
          <Image src={manuel} alt="profile" />
          <figcaption className="text-green">
            <h1>{farmInfoData?.[0]?.landownerfirstname}</h1>
            <h4>
              {farmInfoData?.[0]?.farmname} | {farmInfoData?.[0]?.farmsize}
            </h4>
          </figcaption>
        </figure>
      </section>
    </main>
  );
};

export default ProfilePage;
