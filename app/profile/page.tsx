import { query } from "@/lib/db";
import { FarmInfoData } from "../types/types";
import ProfileContent from "./ProfileContent";

async function getData(): Promise<FarmInfoData[]> {
  const result = await query("SELECT * FROM farmInfo");
  return result.rows;
}

const ProfilePage = async () => {
  const farmInfoData: FarmInfoData[] = await getData();

  return <ProfileContent farmInfoData={farmInfoData} />;
};

export default ProfilePage;
