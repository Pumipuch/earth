import Link from "next/link"

export interface NavItemProps {
    href: string
    text: string
}


export const NavItem = ({ href, text }: NavItemProps) => {
    return (
        <Link href={href}>{text}</Link>
    )
}