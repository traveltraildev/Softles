import Image from "next/image";
import Logo from "@/public/SoftLes.png";
import Facebook from "@/public/FacebookIcon.png";
import Twitter from "@/public/TwitterIcon.png";
import LinkedIn from "@/public/LinkedInIcon.png";
import Instagram from "@/public/InstagramIcon.png";
import Link from "next/link";


export default function Footer() {
    return (
        <div className=" min-h-[38rem] lg:px-[120px] pt-7 w-full bg-[#212121] overflow-hidden flex flex-col justify-between place-content-center">
            <div className="flex justify-between place-content-center">
                <div className="text-[#FFFFFF] flex flex-col gap-y-5">
                    <Image src={Logo} alt="Logo"/>
                    <p className="font-normal text-[14px] leading-[16.8px]">
                        57 Brand House, Coombe Way <br/>Farnborough, Hampshire
                    </p>
                    <div>
                        <h1 className="font-semibold text-lg leading-[21.6px]">HIT US UP:</h1>
                        <p className="font-medium text-[28px] leading-[33.6px] underline decoration-solid">info@softles.com</p>
                    </div>
                    <div className="flex flex-col gap-y-4">
                        <h1 className="font-semibold text-lg leading-[21.6px]">WANT TO KNOW MORE?</h1>
                        <form className="">
                            <div className="flex flex-col gap-1">
                                <label htmlFor="email" className="font-semibold text-lg leading-[21.6px]">
                                    Enter your email address:
                                </label>
                                <input
                                    id="email"
                                    type="email"
                                    placeholder="info@sofles.com"
                                    className="p-1 rounded-md"
                                />
                            </div>
                            <button className="py-[13px] px-[27px] rounded-[100px] border-[1px] border-[#7A7A7A] mt-3">
                                Submit
                            </button>
                        </form>
                    </div>
                </div>
                <div>
                    <p className="font-bold text-sm text-[#FFFFFF] leading-[21px] text-center">
                        57 Brand House, Coombe Way <br/>Farnborough, Hampshire
                    </p>
                </div>
                <div className="flex flex-col gap-[60px]">
                    <Image src={Logo} alt="Logo"/>
                    <ul className="flex flex-col items-start justify-between font-medium gap-y-4 text-[#FFFFFF] underline decoration-solid text-lg leading-[21.6px]">
                    <li>
                        About Us
                    </li>
                    <li>
                        Services
                    </li>
                    <li>
                        Our Work
                    </li>
                    <li>
                        Our Brochure
                    </li>
                </ul>
                </div>
            </div>
            <div className="flex flex-col items-center justify-center gap-4 py-[13px]">
                <p className="text-[#FFFFFF] font-normal text-[14px] leading-[16.8px]">
                    &quot;Do something today that your future self will thank you for.&quot;
                </p>
                <p className="text-[#676767] font-bold text-lg leading-[21.6px]">
                    All Rights Reserved 2020 SoftLes is a Web Design Company.
                </p>
            </div>
            <div className="flex items-center justify-center py-[20px] gap-x-20 border-t-[1px] border-[#7A7A7A]">
                <Link href="https://www.facebook.com" target="_blank"><Image src={Facebook} alt="Facebook" /></Link>
                <Link href="https://www.facebook.com" target="_blank"><Image src={Twitter} alt="Twitter" /></Link>
                <Link href="https://www.facebook.com" target="_blank"><Image src={LinkedIn} alt="LinkedIn" /></Link>
                <Link href="https://www.facebook.com" target="_blank"><Image src={Instagram} alt="Instagram" /></Link>
            </div>
        </div>
    )
}