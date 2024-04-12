"use client";
import AuthTabs from "@/components/auth-tabs";
import ImageScreen from "@/components/image-screen";
import { useSession } from "next-auth/react";

export default function Home() {
	const { data: session } = useSession();
	return (
		<>
			{!session ? (
				<div className="flex flex-col items-center justify-center min-h-screen">
					<AuthTabs />
				</div>
			) : (
				<ImageScreen />
			)}
		</>
	);
}
