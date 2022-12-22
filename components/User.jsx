import { signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image";
import React from "react";

export default function User() {
	const { data: session } = useSession();

	if (session) {
		return (
			<>
				<img
					onClick={signOut}
					src={session.user.image}
					alt="user-image"
					className="w-10 h-10 p-1 cursor-pointer hover:bg-gray-200 rounded-full"
				></img>
			</>
		);
	}

	return (
		<>
			<button className="auth-button" onClick={signIn}>
				Sign in
			</button>
		</>
	);
}
