"use client";
import React from "react";
import { Button } from "./ui/button";
import { FcGoogle } from "react-icons/fc";
import { useUser } from "@/hooks/user";
import { signIn } from "next-auth/react";

const LoginButton = () => {
	const user = useUser();
	async function handleLogin() {
		await signIn("google");
		user.setUser("login");
	}
	return (
		<>
			<div className="flex items-center justify-between">
				<div className="w-2/5 h-[1px] bg-gray-400" />
				<h1 className="text-gray-400 text-lg">OR</h1>
				<div className="w-2/5 h-[1px] bg-gray-400" />
			</div>
			<Button className="gap-2" onClick={() => handleLogin()}>
				<FcGoogle className="size-4" />
				<h1>with Google</h1>
			</Button>
		</>
	);
};

export default LoginButton;
