import Link from "next/link"
import {SignUpForm} from "@/components/sign-up-form";
import {Icons} from "@/components/ui/icons";
import {BackButton} from "@/components/back-button";

export const metadata = {
    title: "Sign Up",
    description: "Create an account to get started.",
}

export default function SignUp() {
    return (
        <div
            className="container grid h-screen w-screen flex-col items-center justify-center lg:max-w-none lg:grid-cols-2 lg:px-0">
            <BackButton to="signin"/>
            <div className="hidden h-full bg-muted lg:block"/>
            <div className="lg:p-8">

                <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
                    <div className="flex flex-col space-y-2 text-center">
                        <Icons.logo className="mx-auto h-6 w-6"/>
                        <h1 className="text-2xl font-semibold tracking-tight">
                            Create an account
                        </h1>
                        <p className="text-sm text-muted-foreground">
                            Enter your username and password below to create your account
                        </p>
                    </div>
                    <SignUpForm/>
                    <p className="px-8 text-center text-sm text-muted-foreground">
                        <Link
                            href="/signin"
                            className="hover:text-brand underline underline-offset-4"
                        >
                            Already have an account? Sign In
                        </Link>
                    </p>
                </div>

            </div>
        </div>
    )
}