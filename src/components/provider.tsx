"use client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import type React from "react";

type Props = {
	children: React.ReactNode;
};

const Providers = (props: Props) => {
	const queryClient = new QueryClient();
	return (
		<QueryClientProvider client={queryClient}>
			{props.children}
			<ReactQueryDevtools />
		</QueryClientProvider>
	);
};

export default Providers;
