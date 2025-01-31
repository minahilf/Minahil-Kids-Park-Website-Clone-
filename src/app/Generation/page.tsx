"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import kid from "../../../Assets/kid.png"
import kid1 from "../../../Assets/kid1.png"
export default function ImageOverlay() {
    return (
        <motion.div 
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: false }}
        className="container mx-auto px-4 py-12 md:py-16">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Left side: Images */}
          <div className="relative w-full md:w-1/2">
            <div className="relative">
              {/* Main image */}
              <div className="rounded-lg overflow-hidden">
                <Image 
                  src={kid}
                  alt="Happy student giving thumbs up"
                  className="w-[400px] object-cover"
                />
              </div>
              
              {/* Floating image */}
              <div className="absolute -bottom-8 -right-4 xl:right-[16%] w-48 h-48 rounded-lg overflow-hidden shadow-lg border-4 border-gray-500 border-dashed">
                <Image 
                  src={kid1}
                  alt="Graduate student"
                  className="w-full h-full object-cover p-2"
                />
              </div>
            </div>
          </div>
  
          {/* Right side: Content */}
          <div className="w-full md:w-1/2 space-y-6 mt-6">
            <h1 className="text-3xl md:text-4xl lg:text-5xl text-[#4583DA] leading-tight">
              Guiding Your Kids To Be Success Generation.
            </h1>
            
            <p className="text-gray-600 text-lg">
              We offer high quality Daycare Services for your kids, contact us or visit us today for more information
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-black text-white px-6 py-3 rounded-full hover:bg-gray-800 transition-colors">
                About us
              </button>
              
              <div className="flex items-center gap-2 justify-center">
                <span className="text-red-600">Call us :</span>
                <a 
                  href="tel:+912345 67890" 
                  className="text-black transition-colors"
                >
                  +912345 67890
                </a>
              </div>
            </div>
          </div>
        </div>
        </motion.div>
    );
  }