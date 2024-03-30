"use client";
import AuthTabs from "@/components/auth-tabs";
import useStore from "@/hooks/user";
import { getData } from "@/lib/db.server";
import { useQuery } from "@tanstack/react-query";
import { format } from "date-fns";
import Image from "next/image";
import { useEffect } from "react";

export default function Home() {
	const user = useStore();
	const query = useQuery({
		queryKey: ["data-call"],
		queryFn: () => getData(),
	});

	// biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
	useEffect(() => {
		user.fetchUser();
	}, []);

	const formattedDate = query.data?.date
		? format(new Date(query.data.date), "dd-MMM-yyyy")
		: "";
	return (
		<>
			{user.user === null ? (
				<div className="flex flex-col items-center justify-center min-h-screen">
					<AuthTabs />
				</div>
			) : query.isLoading ? (
				<div className="flex flex-col items-center justify-center min-h-screen">
					<h1 className="text-3xl font-bold text-zinc-800">Loading...</h1>
				</div>
			) : query.isError ? (
				<div className="flex flex-col items-center justify-center min-h-screen">
					<h1 className="text-3xl font-bold text-red-500">
						Error fetching data
					</h1>
					<p className="text-lg text-zinc-800">Please try again later.</p>
				</div>
			) : (
				<div className="p-4 flex flex-col items-center gap-3">
					<h1 className="text-3xl font-bold underline text-zinc-800">
						"{formattedDate}" Image
					</h1>
					<Image
						src={query.data?.hdurl}
						alt="nasa-img"
						width={800}
						height={600}
						className="w-auto h-auto border-8 rounded-sm"
					/>
					<h2 className="text-2xl font-bold">{query.data?.title}</h2>
				</div>
			)}
		</>
	);
}
