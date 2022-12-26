import React from "react";
import Header from "../../components/Header";
import { getProviders, signIn } from "next-auth/react";
import Logo from "../../components/UI/Logo";

export default function signinwithgoogle({ providers }) {
  return (
    <>
      <Header />
      <div className="mt-40 flex flex-col items-center">
        <Logo textSize="text-7xl" select="select-none" />
        <div>
          {providers &&
            Object.values(providers).map((provider) => (
              <div
                key={provider.name}
                className="mx-5 flex flex-col items-center"
              >
                <p className="center my-10 italic">
                  Authenticate using your {provider.name} account to gain access
                  to more features of this site
                </p>
                <button
                  onClick={() => signIn(provider.id, { callbackUrl: "/" })}
                  className="auth-button"
                >
                  Sign in with {provider.name}
                </button>
              </div>
            ))}
        </div>
      </div>
    </>
  );
}

export async function getServerSideProps() {
  const providers = await getProviders();
  return {
    props: { providers },
  };
}
