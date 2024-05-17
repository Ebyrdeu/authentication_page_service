import Link from "next/link";
import {cn} from "@/lib/utils";
import {buttonVariants} from "@/components/ui/button";
import {Icons} from "@/components/ui/icons";

export const BackButton = ({to}: { to: string }) => {
    return (
        <Link
            href={`/${to}`}

            className={cn(
                buttonVariants({variant: "ghost"}),
                "absolute left-4 top-4 md:left-8 md:top-8"
            )}
        >
            <>
                <Icons.chevronLeft className="mr-2 h-4 w-4"/>
                Back
            </>
        </Link>
    )
}