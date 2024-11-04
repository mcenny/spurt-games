'use client';
import React from 'react';
import { Button } from "@/components/ui/button";
import { Mail, Phone, MessageSquare } from 'lucide-react';

const Contact = () => {
  return (
    <div className="min-h-screen about-game-bg py-20 relative">
      <div className="absolute inset-0 bg-[#0B1E26] opacity-80 z-10" />
      <div className="container mx-auto px-6 relative z-20">
        <h1 className="text-4xl font-bold text-center text-white mb-12 py-12">Contact Us</h1>

        <div className="grid md:grid-cols-2 gap-8">

          <div className="p-6 bg-[#0B1E26] rounded-[16px] border border-[#1C621B]">
            <div className="p-6">
              <h2 className="text-2xl font-semibold mb-6 text-[#A5EC60]">Send us a message</h2>
              <form className="space-y-6 text-white">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full p-2 border rounded-md bg-[#18333D] placeholder:text-[#419310] focus:outline-[#A5EC60]"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full p-2 border rounded-md bg-[#18333D] placeholder:text-[#419310] focus:outline-[#A5EC60]"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    className="w-full p-2 border rounded-md bg-[#18333D] placeholder:text-[#419310] focus:outline-[#A5EC60]"
                    required
                  ></textarea>
                </div>
                <Button className="w-full bg-[#A5EC60] hover:bg-[#419310] text-[#0B1E26] rounded-full">
                  Send Message
                  <MessageSquare className="ml-2" />
                </Button>
              </form>
            </div>
          </div>

          <div className="space-y-6">
            <div className="p-6 bg-[#0B1E26] rounded-[16px] border border-[#1C621B]">
              <div>
                <h2 className="text-2xl font-semibold mb-6 text-[#A5EC60]">Social Media</h2>
                <div className="space-y-4">
                  <a href="https://twitter.com/spurtgames" className="flex items-center text-white hover:text-[#419310] ">
                    <svg className="w-6 h-6 mr-3 text-[#A5EC60]" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    </svg>
                    @spurtgames
                  </a>
                  <a href="https://facebook.com/spurtgames" className="flex items-center text-white hover:text-[#419310] ">
                    <svg className="w-6 h-6 mr-3 text-[#A5EC60]" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978.401 0 .955.042 1.468.103a8.68 8.68 0 0 1 1.141.195v3.325a8.623 8.623 0 0 0-.653-.036 26.805 26.805 0 0 0-.733-.009c-.707 0-1.259.096-1.675.309a1.686 1.686 0 0 0-.679.622c-.258.42-.374.995-.374 1.752v1.297h3.919l-.386 2.103-.287 1.564h-3.246v8.245C19.396 23.238 24 18.179 24 12.044c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.628 3.874 10.35 9.101 11.647Z" />
                    </svg>
                    Spurt Empire Games
                  </a>
                </div>
              </div>
            </div>

            <div className="p-6 bg-[#0B1E26] rounded-[16px] border border-[#1C621B]">
              <div>
                <h2 className="text-2xl font-semibold mb-6 text-[#A5EC60]">Contact Information</h2>
                <div className="space-y-4">
                  <a href="mailto:support@spurtgames.com" className="flex items-center text-white hover:text-[#A5EC60]">
                    <Mail className="mr-3 text-[#A5EC60]" />
                    support@spurtgames.com
                  </a>
                  <a href="tel:+2341234567890" className="flex items-center text-white hover:text-[#A5EC60]">
                    <Phone className="mr-3 text-[#A5EC60]" />
                    +234 123 456 7890
                  </a>
                </div>
              </div>
            </div>

            <div className="p-6 bg-[#0B1E26] rounded-[16px] border border-[#1C621B]">
              <div>
                <h2 className="text-2xl font-semibold mb-6 text-[#A5EC60]">FAQ</h2>
                <div className="space-y-4">
                  <p className="text-white">
                    For common questions about shipping, gameplay, or technical support,
                    please check our FAQ section before contacting us.
                  </p>
                  <Button variant="outline" className="w-full bg-[#A5EC60] hover:bg-[#419310] text-[#0B1E26] rounded-full" onClick={() => window.location.href = '/faq'}>
                    View FAQ
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact; 