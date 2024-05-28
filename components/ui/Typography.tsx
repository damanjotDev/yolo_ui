'use client'
import { cn } from "../../lib/utils"

interface TypographyProps {
    title: string | number;
    className?: string
}

export function TypographyH1({title="hello", className}: TypographyProps) {
    return (
        <h1 className={cn("scroll-m-20 text-[35px] md:text-[80px] font-extrabold tracking-tight lg:text-[100px]",className)}>
            {title}
        </h1>
    )
}


export function TypographyH2({title="hello", className}: TypographyProps) {
    return (
        <h2 className={cn("scroll-m-20 pb-2 text-3xl font-[500] tracking-tight first:mt-0",className)}>
            {title}
        </h2>
    )
}

export function TypographyH3({title="hello", className=""}: TypographyProps) {
    return (
        <h3 className={cn("scroll-m-20 text-2xl font-semibold tracking-tight",className)}>
            {title}
        </h3>
    )
}

export function TypographyH4({title="hello", className=""}: TypographyProps) {
    return (
        <h4 className={cn("scroll-m-20 text-sm md:text-xl font-light tracking-tight",className)}>
            {title}
        </h4>
    )
}

export function TypographyH5({title="hello", className=""}: TypographyProps) {
    return (
        <h4 className={cn("scroll-m-20 text-sm font-semibold tracking-wider", className)}>
            {title}
        </h4>
    )
}

export function TypographyP({title="hello", className=""}: TypographyProps) {
    return (
        <p className={cn("text-sm leading-7 [&:not(:first-child)]:mt-6", className)}>
            {title}
        </p>
    )
}

