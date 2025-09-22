"use client";
"use client";
import React, { FormEvent, useState } from "react";
import { BackgroundBeams } from "@/components/ui/background-beams";

export default function page() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>)=> {
    e.preventDefault();
    console.log('Submitted:', { email, message });
    setEmail("");
    setMessage("");
  };

  return (
    <div className="min-h-screen min-w-full bg-gray-900 py-12">
        <div className="min-h-screen z-100 flex flex-col justify-center items-center">
            <div className="m-4 text-center">
                <h1 className="text-lg md:text-7xl text-center font-sans font-bold mb-8 text-white">Contact Us</h1>
                <p className="text-gray-400 max-w-xl mb-8">We&apos;re here to help with any questions about our courses,
                programs, or events. Reach out and let us know how we can assist you
                in your musical journey.</p>
            </div>

            <div className="flex flex-col gap-2">
              <form onSubmit={handleSubmit} className="flex z-10 flex-col gap-2">
                <input 
                  type="email"
                  value={email}
                  onChange={(e)=> setEmail(e.target.value)}
                  className="w-xl h-16 rounded-lg bg-black px-4"
                  placeholder="Your email address"
                  required
                />
                <textarea 
                  value={message}
                  onChange={(e)=> setMessage(e.target.value)}
                  className="w-xl h-36 rounded-xl bg-black p-4" 
                  placeholder="Your message"
                ></textarea>
                <button 
                type="submit"
                className="mt-4 w-35 bg-teal-500 h-12 rounded-xl font-bold text-sm hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset">
                  Send Message
                </button>
              </form>
            </div>
        </div>

        <BackgroundBeams  />
    </div>
    
  );
}
