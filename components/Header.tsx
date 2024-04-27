import Link from "next/link"

export interface HeaderProps {
    name: string
    href: string
}

export const Header = ({ name , href }: HeaderProps) => {
    return (
        <div className={"py-4 bg-blue-500"}>
            <div className={"container mx-auto"}>
                 <Link href={href}><p className="text-white text-lg font-semibold">{name}</p></Link>
            </div>
        </div>
    )
}