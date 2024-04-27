import { NavItem , NavItemProps } from "./NavItem"

export const Nav = () => {
    const navItem: NavItemProps[] = [
        { href: 'card', text: 'Profile' },
        { href: '#', text: 'about' },
        { href: '#', text: 'friend' }
    ]
    return <nav className={"py-4 bg-red-500"}>
        <div className={"container mx-auto space-x-6 text-white"}>
            {
                navItem.map((item) => (
                    <NavItem key={item.text} href={item.href} text={item.text} />
                ))
            }
        </div>
    </nav>
}