"use client";
import React from "react";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
} from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import type { z } from "zod";
import { loginSchema } from "@/schema/login-autentication";
import axios from "axios";

const LoginCard = () => {
	const form = useForm<z.infer<typeof loginSchema>>({
		resolver: zodResolver(loginSchema),
	});

	return (
		<Card>
			<CardHeader>
				<CardTitle>Login</CardTitle>
				<CardDescription>Enter in your space</CardDescription>
			</CardHeader>
			<Form {...form}>
				<form>
					<CardContent className="space-y-2">
						<FormField
							control={form.control}
							name="email"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Email</FormLabel>
									<FormControl>
										<Input placeholder="xyz@xyz.com" {...field} />
									</FormControl>
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name="password"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Password</FormLabel>
									<FormControl>
										<Input placeholder="xyz" {...field} />
									</FormControl>
								</FormItem>
							)}
						/>
					</CardContent>
					<CardFooter>
						<Button>Sign In</Button>
					</CardFooter>
				</form>
			</Form>
		</Card>
	);
};

export default LoginCard;
