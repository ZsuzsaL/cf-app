"use client";

import { SignedIn, SignedOut } from "@clerk/nextjs";
import FarmForm from "./Home/FarmForm";
import Landing from "./Home/Landing";

const Home = () => {
  return (
    <main className="text-center mx-2">
      <SignedIn>
        <section>
          <h2>Welcome!</h2>
          <h4>Tell us about your farm</h4>
          <FarmForm />
        </section>
      </SignedIn>
      <SignedOut>
        <Landing />
      </SignedOut>
    </main>
  );
};

export default Home;
