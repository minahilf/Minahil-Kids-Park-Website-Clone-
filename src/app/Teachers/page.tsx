"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import t1 from "../../../Assets/t1.png"
import t2 from "../../../Assets/t2.png"
import t3 from "../../../Assets/t3.png"
import t4 from "../../../Assets/t4.png"

export default function Teachers(){
    return(
        <motion.div initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: false }}>
        <h1 className="text-center text-black text-[30px] mb-4">Our Talented Teachers</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 justify-center items-center">
        <div className="flex flex-col justify-center items-center">
            <Image src={t1} alt="teacher" className="w-[200px] h-[200px]"/>
            <p className="text-black mt-2 ">Warso Setyo</p>
            <p className="text-[14px] text-gray-500">Headmaster</p>
        </div>

        <div className="flex flex-col justify-center items-center mt-2">
            <Image src={t2} alt="teacher" className="w-[200px] h-[200px]"/>
            <p className="text-black mt-2 ">Retno Hadi</p>
            <p className="text-[14px] text-gray-500">Maths Teacher</p>
        </div>

        <div className="flex flex-col justify-center items-center mt-2">
            <Image src={t3} alt="teacher" className="w-[200px] h-[200px]"/>
            <p className="text-black mt-2 ">Nursholaha</p>
            <p className="text-[14px] text-gray-500">English Teacher</p>
        </div>

        <div className="flex flex-col justify-center items-center mt-2">
            <Image src={t4} alt="teacher" className="w-[200px] h-[200px]"/>
            <p className="text-black mt-2 ">Zubaidah</p>
            <p className="text-[14px] text-gray-500">Arts Teacher</p>
        </div>
        </div>
        </motion.div>
    )
}