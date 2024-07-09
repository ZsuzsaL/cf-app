"use client";

import { useSession } from "next-auth/react";
import FarmForm from "./Home/FarmForm";
import Landing from "./Home/Landing";

const Home = () => {
  const { data: session } = useSession();
  return (
    <main className="text-center mx-2">
      {session && session.user ? (
        <section>
          <h2>Welcome!</h2>
          <h4>Tell us about your farm</h4>
          <FarmForm />
        </section>
      ) : (
        <Landing />
      )}
    </main>
  );
};

export default Home;
