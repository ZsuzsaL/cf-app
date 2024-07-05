import { signIn } from "next-auth/react";

type Props = {};

const Landing = (props: Props) => {
  return (
    <section>
      <div className="text-left text-white p-8 bg-[url(/images/start_header.jpg)] rounded-3xl bg-no-repeat flex justify-center flex-col my-4">
        <h1>Start you transition journey into regenerative agriculture</h1>
        <h4 className="mt-16">
          Join Europe&apos;s leading regenerative farming community, apply
          practices that fit your unique context and measure progress towards
          your regenerative certification
        </h4>
      </div>

      <button
        className="bg-lime self-start text-black text-center w-full"
        onClick={() => signIn()}
      >
        Join!
      </button>
    </section>
  );
};

export default Landing;
