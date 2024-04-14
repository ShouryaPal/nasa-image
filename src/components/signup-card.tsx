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
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
} from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import type { z } from "zod";
import { loginSchema } from "@/schema/login-autentication";
import axios from "axios";
import { toast } from "sonner";
import { useValue } from "@/hooks/value";

const SignUpCard = () => {
	const form = useForm<z.infer<typeof loginSchema>>({
		resolver: zodResolver(loginSchema),
	});
	return (
		<Card>
			<CardHeader>
				<CardTitle>Sign Up</CardTitle>
				<CardDescription>Enter details</CardDescription>
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
									<FormDescription>*Minimum 8 character</FormDescription>
								</FormItem>
							)}
						/>
					</CardContent>
					<CardFooter>
						<Button>Sign Up</Button>
					</CardFooter>
				</form>
			</Form>
		</Card>
	);
};

export default SignUpCard;
