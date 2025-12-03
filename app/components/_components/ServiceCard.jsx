import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export default function ServiceCard(props) {
    // Fallback alt text if not provided
    const altText = props.alt || `Service icon for ${props.name}`;

    return (
        <Link
            href={props.link || "#"}
            passHref
            className={`h-[280px] w-[280px] p-[24px] lg:-mr-10 rounded-full bg-[#111319] ${props.bg} ${props.hover} flex flex-col items-center justify-start gap-y-[10px] text-center group hover:scale-105 hover:shadow-lg hover:ring-2 hover:ring-[#DC4242]/40 focus-visible:ring-4 focus-visible:ring-[#DC4242] transition-all duration-200 ease-in-out outline-none`}
            style={{ zIndex: props.zIndex }}
            aria-label={`Learn more about ${props.name}`}
            tabIndex={0}
        >
            <Image src={props.source} alt={altText} width={76} height={76} />
            <span className="text-[#FFFFFF] text-xl leading-[30.79px] font-bold group-hover:text-[#DC4242] transition-colors duration-200">{props.name}</span>
            <p className="text-[#BCC1CA] font-normal text-[14px] leading-tight text-wrap px-2">{props.description}</p>
        </Link>
    )
}
