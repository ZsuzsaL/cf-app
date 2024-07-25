"use client";

import { SignedIn, SignedOut, useUser } from "@clerk/nextjs";
import { useEffect, useState } from "react";
import FarmForm from "./Home/FarmForm";
import Home from "./Home/Home";
import Landing from "./Home/Landing";

const Main = () => {
  const { user } = useUser();

  const [hasFarm, setHasFarm] = useState<boolean | null>(null);

  // Fetch farm info based on the user's userId
  useEffect(() => {
    const fetchFarmInfo = async () => {
      if (user?.id) {
        try {
          const response = await fetch("/api/getFarmInfoByUserId", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              userId: user.id,
            }),
          });

          if (response.ok) {
            const data = await response.json();
            setHasFarm(data.farmExists);
          } else {
            console.error("Failed to fetch farm info");
            setHasFarm(false);
          }
        } catch (error) {
          console.error("An error occurred:", error);
          setHasFarm(false);
        }
      } else {
        setHasFarm(false);
      }
    };

    fetchFarmInfo();
  }, [user?.id]);

  // Display based on the `hasFarm` state
  return (
    <main className="text-center mx-2">
      <SignedIn>
        {hasFarm === null ? (
          <p>Loading...</p>
        ) : hasFarm ? (
          <Home />
        ) : (
          <section>
            <h2>Welcome!</h2>
            <h4>Tell us about your farm</h4>
            <FarmForm />
          </section>
        )}
      </SignedIn>
      <SignedOut>
        <Landing />
      </SignedOut>
    </main>
  );
};

export default Main;
