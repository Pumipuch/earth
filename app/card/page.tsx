"use client"

import { useState , useEffect } from 'react';
import { Card } from '@/components/Card';


export default function Home(){

    const [data , setData] = useState ([
        {
            id : 12345 ,
            img : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHQSCLsUmXfn1BCO68GDKX2k6IvV0YPqG9uA&s" , 
            name : "Earth" ,
            age : "28" ,
            city : "Rayong" ,
            followers : "1000" ,
            likes : "100" ,
            pics : "50"
        }
    ])

    return (
    <Card data ={data} />
    )
}