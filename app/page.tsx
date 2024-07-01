import { query } from "../lib/db";
import Header from "./components/Header";
import TwoImage from "./components/TwoImage";
import { FarmInfoData } from "./types/types";

async function getData(): Promise<FarmInfoData[]> {
  const result = await query("SELECT * FROM farmInfo");
  return result.rows;
}

export default async function Home() {
  const data: FarmInfoData[] = await getData();

  const farmname: string =
    data.length > 0 ? data[0].farmname : "No farm data available";

  return (
    <main className="">
      <Header farmName={farmname} />
      <section className="text-white bg-[url(/images/start_header.jpg)] h-[600px] rounded-3xl bg-no-repeat p-16 flex justify-center flex-col">
        <h1>It’s time to transform farming.</h1>
        <h4 className="my-8">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
          rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
          ipsum dolor sit amet.
        </h4>
        <button className="bg-lime self-start text-black">Learn more</button>
      </section>
      <section>
        <h3>What farmers have say</h3>
        <TwoImage />
      </section>
    </main>
  );
}
