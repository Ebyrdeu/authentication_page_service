import Link from "next/link";
import {Icons} from "@/components/ui/icons";
import {Metadata} from "next";
import {BackButton} from "@/components/back-button";
import {SignInForm} from "@/components/sign-in-form";

export const metadata: Metadata = {
    title: "Sign In",
    description: "Sign In to your account",
}


export default async function SignIn() {

    return (
        <div
            className="container grid h-screen w-screen flex-col items-center justify-center lg:max-w-none lg:grid-cols-2 lg:px-0">
            <BackButton to="signup"/>
            <div className="hidden h-full bg-muted lg:block"/>
            <div className="lg:p-8">
                <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
                    <div className="flex flex-col space-y-2 text-center">
                        <Icons.logo className="mx-auto h-6 w-6"/>
                        <h1 className="text-2xl font-semibold tracking-tight">
                            Sign In
                        </h1>
                        <p className="text-sm text-muted-foreground">
                            Enter your username and password below to login into your account
                        </p>
                    </div>
                    <SignInForm/>
                    <p className="px-8 text-center text-sm text-muted-foreground">
                        <Link
                            href="/signup"
                            className="hover:text-brand underline underline-offset-4"
                        >
                            Don&apos;t have an account? Sign Up
                        </Link>
                    </p>
                </div>

            </div>
        </div>

    )
}