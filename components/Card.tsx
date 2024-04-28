
export interface CardProps {
    data: any
}

export const Card = ({ data }: CardProps) => {
    return (
        <div>
            {data.map((val:any) => (
                <div key={val.id}>
                    <img src={val.img} alt="" />
                    <p>Name : {val.name}</p>
                    <p>Age : {val.age}</p>
                    <p>City : {val.city}</p>
                    <p>Followers :{val.followers}</p>
                    <p>Likes :{val.likes}</p>
                    <p>Pics :{val.pics}</p>
                </div>
            ))}
        </div>
    )
}