"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import kids from "../../../Assets/kids.png"
import kids1 from "../../../Assets/kids1.png"
import kids2 from "../../../Assets/kids2.png"
export default function Programs(){
    return(
        <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: false }}
        className="flex flex-col justify-center items-center p-6 ">
            <h1 className="text-[#0E4DA4] text-[26px] sm:text-[30px] lg:text-[38px]">Our Smarty Program</h1>
            <button className="bg-[#E74C3C] text-white px-8 py-2 rounded-full shadow-[inset_0_4px_6px_rgba(0,0,0,0.2)] xl:w-[180px] xl:h-[50px] mt-4">
                Get started
              </button>
              <div className="sm:flex sm:gap-8 sm:mt-4 lg:gap-10 sm:justify-center sm:items-center">
              <div className="flex flex-col justify-center items-center mt-4">
                    <Image src={kids} alt="kids" className="w-[200px] h-[200px] lg:w-[250px] lg:h-[250px] xl:w-[300px] xl:h-[300px] "/>
                    <h6 className="font-semibold text-[14px] lg:text-[16px] text-center  mt-2 text-[#04162F]">Preschool (2 - 3 years)</h6>
              </div>
              <div className="flex flex-col justify-center items-center mt-4">
                    <Image src={kids1} alt="kids" className="w-[200px] h-[200px] lg:w-[250px] lg:h-[250px] xl:w-[300px] xl:h-[300px] "/>
                    <h6 className="font-semibold text-[14px] lg:text-[16px] text-center  mt-2 text-[#04162F]">Kindergarten (3 - 5 years)</h6>
              </div>
              <div className="flex flex-col justify-center items-center mt-4">
                    <Image src={kids2} alt="kids" className="w-[200px] h-[200px] lg:w-[250px] lg:h-[250px] xl:w-[300px] xl:h-[300px] "/>
                    <h6 className="font-semibold text-[14px] lg:text-[16px] text-center  mt-2 text-[#04162F]">Pre-K For All (6 years)</h6>
              </div>
              </div>
              </motion.div>
    )
}