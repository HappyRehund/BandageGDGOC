import { LuPhoneCall } from "react-icons/lu";
import { AiOutlineMail } from "react-icons/ai";
import { PiInstagramLogoBold } from "react-icons/pi";
import { IoLogoYoutube, IoLogoTwitter } from "react-icons/io5";
import { MdFacebook } from "react-icons/md";

const Header = () => {
    return (
        <div className="bg-primary text-white py-2 hidden lg:block">
            <div className="container mx-auto flex justify-between items-center text-sm">
                {/* Contact Info */}

                <div className="flex items-center gap-1">
                    <LuPhoneCall className="text-base" />
                    <p>(255) 555-0118</p>
                </div>

                <div className="flex items-center gap-1">
                    <AiOutlineMail className="text-base" />
                    <p>michelle.rivera@example.com</p>
                </div>

                {/* Promotion */}
                <p className="text-base font-bold text-center">
                    Follow Us and get a chance to win 80% off
                </p>

                {/* Social Media */}
                <div className="flex items-center gap-4">
                    <p className="font-semibold">Follow Us :</p>
                    <div className="flex items-center gap-2">
                        <PiInstagramLogoBold className="text-lg cursor-pointer hover:text-gray-300" />
                        <IoLogoYoutube className="text-lg cursor-pointer hover:text-gray-300" />
                        <MdFacebook className="text-lg cursor-pointer hover:text-gray-300" />
                        <IoLogoTwitter className="text-lg cursor-pointer hover:text-gray-300" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
