import prisma from "@/lib/prisma";
import { auth } from "@clerk/nextjs/server";

const Farm = async () => {
  const { userId } = auth();

  const farm = await prisma.farminfo.findMany({
    where: {
      userid: userId,
    },
  });

  return (
    <main>
      <h2>Farm {farm[0].farmname}</h2>
      <h3>
        Follow the progress of your regeneration journey through data and
        experiments
      </h3>
      <section>
        <p>Region: {farm[0].region}</p>
        <p>Main Production: {farm[0].mainproduction}</p>
        <p>Farm Size: {farm[0].farmsize} HA</p>
      </section>
    </main>
  );
};

export default Farm;
