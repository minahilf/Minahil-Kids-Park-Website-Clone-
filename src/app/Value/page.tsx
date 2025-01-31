"use client";
import { motion } from "framer-motion";

import Image from "next/image"
import tick from "../../../Assets/tick.png"
export default function Value(){
    return(
        <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: false }}
        >
        <div className="sm:flex sm:flex-col sm:justify-center sm:items-center sm:gap-4 p-6">
            <h1 className="font-medium text-[#04162F] text-[32px] text-center xl:text-[36px]">Our Core Values</h1>
            <p className="text-[#6B6B6B] font-normal text-[16px] text-center sm:w-[80%] lg:w-[50%] xl:w-[40%] xl:text-[18px]  ">We offer high quality Daycare Services for your kids, contact us or visit us today for more information</p>
        </div>

<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 p-6 justify-center items-center gap-6">
    {/* check 1 */}
    <div className="inline-flex items-center px-7 py-4 bg-[#FFBB12]  rounded-full shadow-[inset_0_4px_6px_rgba(0,0,0,0.2)]">
      <div className="flex items-center justify-center w-10 h-10 bg-white rounded-full mr-3">
        <Image 
          src={tick}
          alt="Tick" 
          className="w-4 h-4"
        />
      </div>
      <span className="text-black text-lg font-medium">Licensed Child Care</span>
    </div>
    {/* card 2 */}
    <div className="inline-flex items-center px-6 py-4 bg-[#FFBB12]  rounded-full shadow-[inset_0_4px_6px_rgba(0,0,0,0.2)]">
      <div className="flex items-center justify-center w-10 h-10 bg-white rounded-full mr-3">
        <Image 
          src={tick}
          alt="Tick" 
          className="w-4 h-4"
        />
      </div>
      <span className="text-black text-lg font-medium">High Quality Learning</span>
    </div>
    {/* card 3 */}
    <div className="inline-flex items-center px-6 py-4 bg-[#FFBB12]  rounded-full shadow-[inset_0_4px_6px_rgba(0,0,0,0.2)] ">
      <div className="flex items-center justify-center w-10 h-10 bg-white rounded-full mr-3">
        <Image 
          src={tick}
          alt="Tick" 
          className="w-4 h-4"
        />
      </div>
      <span className="text-black text-lg font-medium">Super Talented Staff</span>
    </div>
        </div>
        
        </motion.div>
    )
}