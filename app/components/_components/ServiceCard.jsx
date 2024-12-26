import Image from 'next/image'
import React from 'react'

export default function ServiceCard(props) {
    return (
        <div className="h-[250px] w-[190px] bg-[#111111] p-10 shadow-[0px_15px_30px_0px_rgba(0,0,0,0.5)] flex flex-col justify-center gap-y-[30px]">
            <Image src={props.source} alt="Service"/>
            <span className="text-[#FFFFFF] text-xs font-normal text-center">{props.name}</span>
        </div>
    )
}
