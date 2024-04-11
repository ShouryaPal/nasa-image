import React from "react";
import { Button } from "./ui/button";
import { signOut } from "next-auth/react";
import { toast } from "sonner";

const LogOut = () => {
	async function handleLogout() {
		toast.promise(signOut(), {
			loading: "Loading...",
			success: () => {
				return "User Logged Out";
			},
			error: "Error",
		});
	}
	return (
		<Button
			variant="outline"
			onClick={() => {
				handleLogout();
			}}
		>
			Log Out
		</Button>
	);
};

export default LogOut;
