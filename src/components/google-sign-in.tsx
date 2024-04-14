"use client";	
import React from "react";
import { Button } from "./ui/button";
import { FcGoogle } from "react-icons/fc";

const LoginButton = () => {

	return (
		<>
			<div className="flex items-center justify-between">
				<div className="w-2/5 h-[1px] bg-gray-400" />
				<h1 className="text-gray-400 text-lg">OR</h1>
				<div className="w-2/5 h-[1px] bg-gray-400" />
			</div>
			<Button className="gap-2">
				<FcGoogle className="size-4" />
				<h1>With Google</h1>
			</Button>
		</>
	);
};

export default LoginButton;
