"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import calender from "../../../Assets/Calendar.png"
import vector from "../../../Assets/Vector.png"
import stu from "../../../Assets/h5.png"
import star from "../../../Assets/star.png"
export default function Future(){
    return(
        <motion.div initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: false }}>
        <div className="sm:flex sm:justify-center sm:items-center">
             <div className="flex flex-col sm:flex-row items-center  lg:items-start text-center lg:text-left mb-8 lg:mb-0 ">
            <h1 className="text-[48px] sm:text-[44px] lg:text-[50px] xl:text-[62px] text-[#04162F] mt-10 lg:p-10">
              A Brighter Future For your kids
            </h1>
            <p className="text-[#6B6B6B] text-center p-4 font-medium text-sm lg:pt-[12%] xl:w-[50%] xl:text-[18px]">
              We offer high quality Daycare Services for your kids, contact us or visit us today for more information
            </p>
            </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 justify-center items-center gap-8 mb-10">
                {/* calender  */}
            <div className="flex items-center gap-4 justify-center">
      <Image
        src={calender} 
        alt="Calendar" 
        className="w-10 h-10"
      />
      <div className="flex flex-col">
        <span className="text-[18px] font-bold text-green-500 lg:text-[20px]">12</span>
        <span className="text-[14px] text-gray-700 lg:text-[16px]">Years Experience</span>
      </div>
    </div>
    {/* acheivements */}
    <div className="flex items-center gap-4 justify-center">
      <Image
        src={vector} 
        alt="Calendar" 
        className="w-10 h-10 "
      />
      <div className="flex flex-col">
        <span className="text-[16px] font-bold text-green-500 lg:text-[18px]">4235</span>
        <span className="text-[14px] text-gray-700 lg:text-[16px]">Total Achievments</span>
      </div>
    </div>
    {/* students */}
    <div className="flex items-center gap-4 justify-center">
      <Image
        src={stu} 
        alt="Calendar" 
        className="w-10 h-10 "
      />
      <div className="flex flex-col">
        <span className="text-[16px] font-bold text-green-500 lg:text-[18px]">3468</span>
        <span className="text-[14px] text-gray-700 lg:text-[16px]">Happy Students</span>
      </div>
    </div>
    {/* reviews */}
    <div className="flex items-center gap-4 justify-center ">
      <Image
        src={star} 
        alt="Calendar" 
        className="w-10 h-10 "
      />
      <div className="flex flex-col">
        <span className="text-[16px] font-bold text-green-500 lg:text-[18px]">3k+</span>
        <span className="text-[14px] text-gray-700 lg:text-[16px]">Positive Review</span>
      </div>
    </div>

        </div>
        </motion.div>
    )
}