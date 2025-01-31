import Image from "next/image"
import logo from "../../Assets/logo.png"
import Info from "./Info"
import List from "./list"
export default function Footer(){
    return(
        <div className="bg-[#0295A9] p-4 ">
            <div className="sm:flex sm:justify-center sm:items-center">
            <Image src={logo} alt="logo" />
            </div>
            <div className="lg:flex lg:justify-center">
            <div><Info/></div>
            <div><List/></div>
            </div>
            </div>
   
    )
}