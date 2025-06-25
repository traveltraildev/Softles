import Image from "next/image";
import Logo from "@/public/SoftLes.png";
import Facebook from "@/public/FacebookIcon.png";
import Twitter from "@/public/TwitterIcon.png";
import LinkedIn from "@/public/LinkedInIcon.png";
import Instagram from "@/public/InstagramIcon.png";
import Link from "next/link";


export default function Footer() {
    return (
        <div className="min-h-[30rem] p-[10px] lg:px-[120px] pt-7 w-full bg-[#212121] overflow-hidden flex flex-col justify-between place-content-center"> {/* Reduced min-h from 38rem to 30rem */}
            <div className="flex flex-col lg:flex-row justify-between place-content-center gap-y-10">
                <div className="text-[#FFFFFF] flex flex-col gap-y-6 max-w-[230px]">
                    <Image src={Logo} alt="Softles Logo"/> {/* Improved alt text */}
                    <p className="font-normal text-[14px] leading-[16.8px]">
                        57 Brand House, Coombe Way <br/>Farnborough, Hampshire
                    </p>
                    <div>
                        <h1 className="font-semibold text-lg leading-[21.6px]">HIT US UP:</h1>
                        <p className="font-medium text-[28px] leading-[33.6px] underline decoration-solid">info@softles.com</p>
                    </div>
                    <div className="flex flex-col gap-y-2">
                        <h2 className="font-semibold text-lg leading-[21.6px]">WANT TO KNOW MORE?</h2> {/* Changed h1 to h2 for better semantics */}
                        <form className="">
                            <label htmlFor="footer-email" className="sr-only">Enter your email address:</label> {/* Added accessible label */}
                            <input
                                id="footer-email" // Changed id to be more specific
                                type="email"
                                name="email" // Added name attribute
                                placeholder="Enter your email address:"
                                className="w-4/5 md:w-2/3 bg-transparent border-b-4 border-[#7A7A7A] text-[#FFFFFF] outline-none"
                                required // Added basic HTML5 validation
                            />
                            <button type="submit" className="py-[13px] px-[27px] rounded-[100px] border-[1px] border-[#7A7A7A] mt-3 hover:bg-[#7A7A7A] transition-colors duration-200"> {/* Added type="submit" and hover effect */}
                                SUBMIT
                            </button>
                        </form>
                    </div>
                </div>
                <div className="flex flex-col items-start lg:items-center gap-y-[15px]">
                    {/* Removed redundant address paragraph */}
                    <div className="w-full md:w-1/2 lg:w-[420px] h-[182px] mt-6 lg:mt-0"> {/* Added margin top for spacing on smaller screens if address was there */}
                        <iframe title="Google Maps Location of Softles" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4720.924964478238!2d-0.7573350076874479!3d51.29371402076245!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48742b842cb7a42d%3A0x1b1fd25cfaeb0a02!2sBrand%20House%2C%20Coombe%20way!5e0!3m2!1sen!2sin!4v1735461568255!5m2!1sen!2sin" className="border-none h-full w-full rounded-[20px]" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </div>
                <div className="flex flex-col gap-5 lg:gap-[10px] items-start lg:items-end"> {/* Adjusted gap and alignment */}
                    {/* Removed redundant logo image */}
                    <ul className="flex flex-col items-start lg:items-end justify-between font-medium gap-y-4 text-[#FFFFFF] underline decoration-solid text-lg leading-[21.6px] mt-[calc(56px+24px)]"> {/* 56px is approx height of logo, 24px is original gap. Pushed links down to align better with where logo was */}
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
            <div className="flex flex-col items-center justify-center text-center lg:text-justify gap-4 py-[13px]">
                <p className="text-[#FFFFFF] font-normal text-[14px] leading-[16.8px]">
                    &quot;Do something today that your future self will thank you for.&quot; {/* Consider making this dynamic or more brand-focused */}
                </p>
                <p className="text-[#676767] font-bold text-lg leading-[21.6px]">
                    All Rights Reserved © {new Date().getFullYear()} SoftLes - Web Design Company. {/* Dynamic year and improved copyright symbol */}
                </p>
            </div>
            <div className="flex items-center justify-center py-[20px] gap-x-10 md:gap-x-20 border-t-[1px] border-[#7A7A7A]"> {/* Adjusted gap for smaller screens */}
                <Link href="/#facebook" target="_blank" rel="noopener noreferrer"><Image src={Facebook} alt="Facebook Icon" /></Link> {/* Placeholder link, improved alt text, added rel attribute */}
                <Link href="/#twitter" target="_blank" rel="noopener noreferrer"><Image src={Twitter} alt="Twitter Icon" /></Link> {/* Placeholder link, improved alt text, added rel attribute */}
                <Link href="/#linkedin" target="_blank" rel="noopener noreferrer"><Image src={LinkedIn} alt="LinkedIn Icon" /></Link> {/* Placeholder link, improved alt text, added rel attribute */}
                <Link href="/#instagram" target="_blank" rel="noopener noreferrer"><Image src={Instagram} alt="Instagram Icon" /></Link> {/* Placeholder link, improved alt text, added rel attribute */}
            </div>
        </div>
    )
}