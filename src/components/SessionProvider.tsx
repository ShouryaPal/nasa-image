"use client";
import React from "react";
import { SessionProvider } from "next-auth/react";

// biome-ignore lint/suspicious/noExplicitAny: <explanation>
const AuthProvider = ({ children }: any) => {
	return <SessionProvider>{children}</SessionProvider>;
};

export default AuthProvider;
