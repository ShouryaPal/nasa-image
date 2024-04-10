"use client";	
import React from "react";
import { Button } from "./ui/button";
import { FcGoogle } from "react-icons/fc";
import useStore from "@/hooks/user";

const LoginButton = () => {
	const user = useStore();
	function onSubmit() {
		window.location.href = `${process.env.NEXT_PUBLIC_URL}/api/auth/google`;
		user.setUser();
	}

	return (
		<>
			<div className="flex items-center justify-between">
				<div className="w-2/5 h-[1px] bg-gray-400" />
				<h1 className="text-gray-400 text-lg">OR</h1>
				<div className="w-2/5 h-[1px] bg-gray-400" />
			</div>
			<Button className="gap-2" onClick={() => onSubmit()}>
				<FcGoogle className="size-4" />
				<h1>Sign In with Google</h1>
			</Button>
		</>
	);
};

export default LoginButton;
