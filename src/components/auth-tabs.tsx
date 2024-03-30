import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import LoginCard from "@/components/login-card";
import SignUpCard from "@/components/signup-card";
import { useValue } from "@/hooks/value";

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
				<LoginCard />
			</TabsContent>
			<TabsContent value="sign-up">
				<SignUpCard />
			</TabsContent>
		</Tabs>
	);
};

export default AuthTabs;
