import Image from 'next/image'
import React from 'react'

export default function ServiceCard2(props) {
    return (
        <div className={`h-[261.29px] w-[261.29px] p-[11px] -mr-10 rounded-full bg-[${props.bg}] flex flex-col items-center justify-center gap-y-[10px] text-center`} style={{ zIndex: props.zIndex }}>
            <Image src={props.source} alt="Service"/>
            <span className="text-[#FFFFFF] text-xl leading-[30.79px] font-bold">{props.name}</span>
            <p className="text-[#BCC1CA] font-normal text-[12.72px] leading-[16.73px] text-wrap">{props.description}</p>
        </div>
    )
}
