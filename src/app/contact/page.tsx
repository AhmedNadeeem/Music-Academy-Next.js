"use client"
import React from "react";
import { BackgroundBeams } from "@/components/ui/background-beams";

export default function page() {
  return (
    <div className="min-h-screen min-w-full bg-gray-900 py-12 pt-16">
        <div className="min-h-screen flex flex-col justify-center items-center">
            <div className="m-4 text-center">
                <h1 className="text-lg md:text-7xl text-center font-sans font-bold mb-8 text-white">Contact Us</h1>
                <p className="text-gray-400 max-w-xl mb-8">We&apos;re here to help with any questions about our courses,
                programs, or events. Reach out and let us know how we can assist you
                in your musical journey.</p>
            </div>

            <div className="flex flex-col gap-2">
                <input className="w-xl h-16 rounded-lg bg-black px-4" type="text" name="" id="" placeholder="Your email address"/>
                <textarea className="w-xl h-36 rounded-xl bg-black p-4" name="" id="" placeholder="Your message"></textarea>
                <button className="mt-4 bg-teal-500 h-12 rounded-xl font-bold m hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset">Send Message</button>
            </div>
        </div>

        <BackgroundBeams  />
    </div>
    
  );
}
