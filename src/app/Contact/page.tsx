"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import call from "../../../Assets/phone.png"
import mail from "../../../Assets/email.png"
import loc from "../../../Assets/loc.png"
import c1 from "../../../Assets/c1.png"
import c2 from "../../../Assets/c2.png"

export default function Contact(){
    return(
        <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: false }}
        className="mt-6 p-4 lg:p-10">
            <div className="sm:grid sm:grid-cols-2 sm:gap-8">
                {/* Contact Info Section */}
                <div>
                    <h1 className="text-[#04162F] text-[32px] text-center sm:text-left">
                        Lets talk with our awesome team
                    </h1>
                    <p className="text-[#656565] text-[16px] text-center sm:text-left mb-6">
                        We offer high quality Daycare Services for your kids, contact us or visit us today for more information
                    </p>
                    
                    <div className="flex items-center gap-3 p-4">
                        <Image 
                            src={call}
                            alt="Phone icon" 
                            className="w-6 h-6"
                        />
                        <div className="flex flex-col">
                            <span className="text-gray-700 text-lg font-medium">Call</span>
                            <span className="text-gray-600">+91123567⁠90</span>
                        </div>
                    </div>

                    <div className="flex items-center gap-3 p-4">
                        <Image 
                            src={mail}
                            alt="Phone icon" 
                            className="w-6 h-6"
                        />
                        <div className="flex flex-col">
                            <span className="text-gray-700 text-lg font-medium">Email</span>
                            <span className="text-gray-600">abcd123@gmail.com</span>
                        </div>
                    </div>

                    <div className="flex items-center gap-3 p-4">
                        <Image 
                            src={loc}
                            alt="Phone icon" 
                            className="w-6 h-6"
                        />
                        <div className="flex flex-col">
                            <span className="text-gray-700 text-lg font-medium">Location</span>
                            <span className="text-gray-600">Bangalore, India</span>
                        </div>
                    </div>
                </div>

                {/* Form Section */}
                <div className="w-full sm:max-w-none p-8 bg-white rounded-3xl [box-shadow:inset_2px_2px_5px_rgba(0,0,0,0.2),inset_-2px_-2px_5px_rgba(255,255,255,0.7)] mt-6 sm:mt-0">
                    <form className="space-y-6">
                        <div className="space-y-2">
                            <label className="block text-sm font-medium text-gray-700">Your name</label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                                    <Image 
                                        src={c1} 
                                        alt="Person icon" 
                                        className="w-4 h-4"
                                    />
                                </div>
                                <input
                                    type="text"
                                    placeholder="Full name here"
                                    className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm [box-shadow:inset_2px_2px_5px_rgba(0,0,0,0.2),inset_-2px_-2px_5px_rgba(255,255,255,0.7)]"
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="block text-sm font-medium text-gray-700">Your mail</label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                                    <Image
                                        src={c2} 
                                        alt="Mail icon" 
                                        className="h-4 w-4"
                                    />
                                </div>
                                <input
                                    type="email"
                                    placeholder="Your email address"
                                    className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm [box-shadow:inset_2px_2px_5px_rgba(0,0,0,0.2),inset_-2px_-2px_5px_rgba(255,255,255,0.7)]"
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="block text-sm font-medium text-gray-700">Message</label>
                            <textarea
                                placeholder="Type your message here"
                                rows={4}
                                className="w-full p-4 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm [box-shadow:inset_2px_2px_5px_rgba(0,0,0,0.2),inset_-2px_-2px_5px_rgba(255,255,255,0.7)]"
                            />
                        </div>

                        <button
                            type="submit"
                            className="w-[200px] px-4 py-2 bg-navy-900 text-white rounded-full bg-[#04162F] transition-colors duration-200"
                        >
                            Send message
                        </button>
                    </form>
                </div>
            </div>
            </motion.div>
    )
}