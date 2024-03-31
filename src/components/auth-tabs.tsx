import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import LoginCard from "@/components/login-card";
import SignUpCard from "@/components/signup-card";
import { useValue } from "@/hooks/value";
import LoginButton from "./google-sign-in";
import SignUpButton from "./google-sign-up";

const AuthTabs = () => {
	const value = useValue();
	return (
		<Tabs
			defaultValue="login"
			value={value.value}
			onValueChange={value.setValue}
			className="w-[400px]"
		>
			<TabsList>
				<TabsTrigger value="login">Login</TabsTrigger>
				<TabsTrigger value="sign-up">Sign-up</TabsTrigger>
			</TabsList>
			<TabsContent value="login">
				<div className="flex flex-col gap-2">
					<LoginCard />
					<LoginButton />
				</div>
			</TabsContent>
			<TabsContent value="sign-up">
				<div className="flex flex-col gap-2">
					<SignUpCard />
					<SignUpButton/>
				</div>
			</TabsContent>
		</Tabs>
	);
};

export default AuthTabs;
