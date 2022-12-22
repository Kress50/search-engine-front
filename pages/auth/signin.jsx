import React from "react";
import Header from "../../components/Header";
import { getProviders, signIn } from "next-auth/react";

export default function signin({ providers }) {
	return (
		<>
			<Header />
			<div className="flex flex-col items-center mt-40">
				<h1 className="text-7xl">10JIN</h1>
				<div className="">
					{Object.values(providers).map((provider) => (
						<div key={provider.name} className="flex flex-col items-center">
							<p className="italic my-10 center">
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
