import React, { useState } from "react";
import LogOut from "@/components/logout-btn";
import { getData } from "@/lib/db.server";
import { useQuery } from "@tanstack/react-query";
import { format } from "date-fns";
import { Calendar } from "@/components/ui/calendar";
import Image from "next/image";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormField } from "./ui/form";
import { Button } from "./ui/button";

const DateSchema = z.object({
	value: z.date({ required_error: "A date is required." }),
});

const ImageScreen = () => {
	const [selectedDate, setSelectedDate] = useState(new Date());
	const form = useForm<z.infer<typeof DateSchema>>({
		resolver: zodResolver(DateSchema),
		defaultValues: { value: selectedDate },
	});

	function onSubmit(values: z.infer<typeof DateSchema>) {
		setSelectedDate(values.value);
	}

	const query = useQuery({
		queryKey: ["data-call", format(selectedDate, "yyyy-MM-dd")],
		queryFn: () => getData(format(selectedDate, "yyyy-MM-dd")),
	});

	const formattedDate = format(selectedDate, "dd-MMM-yyyy");

	return (
		<>
			{query.isLoading ? (
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
				<div className="flex gap-2">
					<Form {...form}>
						<form
							onSubmit={form.handleSubmit(onSubmit)}
							className="p-4 space-y-2"
						>
							<FormField
								control={form.control}
								name="value"
								render={({ field }) => (
									<Calendar
										mode="single"
										selected={field.value}
										onSelect={(date: Date) => {
											field.onChange(date);
											setSelectedDate(date);
										}}
										disabled={(date: Date) =>
											date > new Date() || date < new Date("1900-01-01")
										}
										initialFocus={new Date()}
									/>
								)}
							/>
						</form>
					</Form>
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
						<LogOut />
					</div>
				</div>
			)}
		</>
	);
};

export default ImageScreen;
