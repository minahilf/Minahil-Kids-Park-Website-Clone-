"use client";
import { motion } from "framer-motion";
import Image from "next/image"
import h1 from "../../../Assets/h1.png"
import h2 from "../../../Assets/h2.png"
import h3 from "../../../Assets/h3.png"
import h4 from "../../../Assets/h4.png"
import h5 from "../../../Assets/h5.png"
export default function Main(){
    return (
      <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: false }}
      className="container mx-auto px-4 lg:px-6">
        <div className="lg:flex lg:items-center lg:justify-between">
          {/* Text Content Section */}
          <div className="flex flex-col items-center gap-4 lg:items-start text-center lg:text-left mb-8 lg:mb-0 lg:w-1/2 lg:p-6">
            <h1 className="font-bold text-[48px] sm:text-[60px] lg:text-[68px] xl:text-[72px] text-[#04162F] mt-10">
              A Brighter <br /> Future For <br /> your kids
            </h1>
            <p className="text-[#6B6B6B] font-medium text-sm sm:text-base max-w-md mb-6 xl:text-[18px]">
              We offer high quality Daycare Services for your kids, contact us or visit us today for more information
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-[#E74C3C] text-white px-8 py-2 rounded-full shadow-[inset_0_4px_6px_rgba(0,0,0,0.2)] xl:w-[180px] xl:h-[50px]">
                Get started
              </button>
              <button className="border-2 border-dashed border-gray-400 text-black px-8 py-2 rounded-full xl:w-[180px] xl:h-[50px]">
                Why us?
              </button>
            </div>
          </div>
  
          {/* Image Grid Section */}
          <div className="relative w-full lg:w-1/2 xl:mt-10 p-6">
            <div className="grid grid-cols-2 gap-2 sm:gap-4">
              <div className="relative aspect-square rounded-2xl sm:rounded-3xl overflow-hidden">
                <Image 
                  src={h1}
                  alt="Student playing"
                  className="absolute w-full h-full object-cover"
                />
              </div>
              <div className="relative aspect-square rounded-2xl sm:rounded-3xl overflow-hidden">
                <Image
                  src={h2}
                  alt="Child learning"
                  className="absolute w-full h-full object-cover"
                />
              </div>
              <div className="relative aspect-square rounded-2xl sm:rounded-3xl overflow-hidden">
                <Image
                  src={h3}
                  alt="Students together"
                  className="absolute w-full h-full object-cover"
                />
              </div>
              <div className="relative aspect-square rounded-2xl sm:rounded-3xl overflow-hidden">
                <Image
                  src={h4}
                  alt="Student drawing"
                  className="absolute w-full h-full object-cover"
                />
              </div>
            </div>
  
            {/* Overlay Card */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <div className="bg-amber-400 rounded-2xl sm:rounded-3xl p-4 sm:p-6 w-32 sm:w-48 flex flex-col items-center justify-center space-y-2 sm:space-y-3">
                <div className="relative w-8 sm:w-12 h-8 sm:h-12">
                  <Image
                    src={h5}
                    alt="Student icon"
                    className="absolute w-full h-full object-contain"
                  />
                </div>
                <div className="text-xl sm:text-3xl font-bold">3468</div>
                <div className="text-xs sm:text-sm">Total students</div>
                <button className="bg-blue-700 text-white px-4 sm:px-6 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm">
                  Get started
                </button>
              </div>
            </div>
          </div>
        </div>
        </motion.div>
    );
  };
  
