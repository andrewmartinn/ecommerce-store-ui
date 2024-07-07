import { Link } from "react-router-dom";
import Logo from "../../assets/logo.svg";
import { BsInstagram } from "react-icons/bs";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaYoutube, FaSnapchatSquare, FaTiktok } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-zinc-800 py-12">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10 text-white font-medium">
        <div>
          <img src={Logo} alt="" />
          <div className="flex gap-4 mt-4">
            <BsInstagram className="text-xl" />
            <FaSquareXTwitter className="text-xl" />
            <FaTiktok className="text-xl" />
            <FaYoutube className="text-xl" />
            <FaSnapchatSquare className="text-xl" />
          </div>
        </div>
        <div>
          <p>Store</p>
          <div className="h-[2px] w-[26px] bg-white mt-2"></div>
          <div className="flex flex-col gap-4 mt-4 text-sm">
            <Link to="/">About Us</Link>
            <Link to="/">Store Locator</Link>
            <Link to="/">Franchises</Link>
            <Link to="/">Work With Us</Link>
          </div>
        </div>
        <div>
          <p>Help</p>
          <div className="h-[2px] w-[26px] bg-white mt-2"></div>
          <div className="flex flex-col gap-4 mt-4 text-sm">
            <Link to="/">Frequently Asked Questions</Link>
            <Link to="/">My Order Status</Link>
            <Link to="/">Delivery</Link>
            <Link to="/">Processing Return</Link>
            <Link to="/">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
