import Image from 'next/image';
import Link from 'next/link'; // Import Link
import React from 'react';

export default function ServiceCard2(props) {
    // Fallback alt text if not provided
    const altText = props.alt || `Service icon for ${props.name}`;

    return (
        <Link href={props.link || "#"} passHref
            className={`h-[261.29px] w-[261.29px] p-[11px] lg:-mr-10 rounded-full bg-[#111319] ${props.bg} flex flex-col items-center justify-center gap-y-[10px] text-center group hover:scale-105 transition-transform duration-200 ease-in-out`}
            style={{ zIndex: props.zIndex }}
            aria-label={`Learn more about ${props.name}`} // Accessibility for the link
        >
            <Image src={props.source} alt={altText} width={80} height={80} /> {/* Added explicit width/height for Image, adjust as needed */}
            <span className="text-[#FFFFFF] text-xl leading-[30.79px] font-bold group-hover:text-[#DC4242] transition-colors duration-200">{props.name}</span>
            <p className="text-[#BCC1CA] font-normal text-[12.72px] leading-[16.73px] text-wrap">{props.description}</p>
        </Link>
    )
}
