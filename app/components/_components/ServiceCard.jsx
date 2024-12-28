import Image from 'next/image'
import React from 'react'

export default function ServiceCard(props) {
    return (
        <div className="h-[250px] w-[185px] bg-[#111111] py-[10px] shadow-[0px_15px_30px_0px_rgba(0,0,0,0.5)] flex flex-col items-center justify-center gap-y-[30px]">
            <Image src={props.source} alt="Service"/>
            <span className="text-[#FFFFFF] text-base font-normal text-center">{props.name}</span>
        </div>
    )
}
