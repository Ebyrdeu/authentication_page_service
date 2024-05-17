"use client"
import {cn} from "@/lib/utils";
import {buttonVariants} from "@/components/ui/button";
import {Label} from "@/components/ui/label";
import {Input} from "@/components/ui/input";
import {toast} from "@/components/ui/use-toast";
import React, {useState} from "react";
import * as z from "zod";
import {authFormSchema} from "@/lib/validations/auth-form";
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {Icons} from "@/components/ui/icons";
import {useRouter} from "next/navigation";

interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> {
}

type FormData = z.infer<typeof authFormSchema>

export function SignInForm({className, ...props}: UserAuthFormProps) {
    const router = useRouter();
    const {
        register,
        handleSubmit,
        formState: {errors},
    } = useForm<FormData>({
        resolver: zodResolver(authFormSchema),
    })

    const [isLoading, setIsLoading] = useState<boolean>(false)

    async function onSubmit(data: FormData) {
        setIsLoading(true)
        const {res} = await fetch('/signin/api', {
            method: 'POST',
            body: JSON.stringify({data}),
            headers: {'content-type': 'application/json'},
        }).then(r => r.json());
        setIsLoading(false);

        if (res.status === 500) {
            return toast({
                title: res.status,
                description: "Something went wrong with logging an user"
            })
        }

        toast({
            title: res.status,
            description: "You will be redirected soon"
        })

        return router.refresh()
    }

    return (
        <div className={cn("grid gap-6", className)} {...props}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="grid gap-2">
                    <div className="grid gap-1">
                        <Label className="sr-only" htmlFor="username">
                            Username
                        </Label>
                        <Input
                            id="username"
                            placeholder="bobba_fetus"
                            type="username"
                            autoCapitalize="none"
                            autoComplete="username"
                            autoCorrect="off"
                            disabled={isLoading}
                            {...register("username")}
                        />
                        {errors?.username && (
                            <p className="px-1 text-xs text-red-600">
                                {errors.username.message}
                            </p>
                        )}
                    </div>

                    <div className="grid gap-1">
                        <Label className="sr-only" htmlFor="password">
                            Password
                        </Label>
                        <Input
                            id="password"
                            placeholder="****"
                            type="password"
                            autoCapitalize="none"
                            autoComplete="password"
                            autoCorrect="off"
                            disabled={isLoading}
                            {...register("password")}
                        />
                        {errors?.password && (
                            <p className="px-1 text-xs text-red-600">
                                {errors.password.message}
                            </p>
                        )}
                    </div>
                    <button className={cn(buttonVariants())} disabled={isLoading}>
                        {isLoading && (
                            <Icons.spinner className="mr-2 h-4 w-4 animate-spin"/>
                        )}
                        Sign In with Username & Password
                    </button>
                </div>
            </form>
        </div>
    )
}