export interface HeaderProps {
    name: string
}

export const Header = ({ name }: HeaderProps) => {
    return (
        <div className={"py-4 bg-blue-500"}>
            <div className={"container mx-auto"}>
                <p className="text-white text-lg font-semibold">{name}</p>
            </div>
        </div>
    )
}