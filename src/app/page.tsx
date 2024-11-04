'use client';

import { Button } from "@/components/ui/button";
import { ChevronRight, Package, Quote } from 'lucide-react';
import { benefits, testimonials } from '@/lib/data';
import { scrollToFooter } from "@/lib/helper";

const LandingPage = () => {


  return (
    <div className="min-h-screen bg-[#487070]">
      <section className="hero-section relative h-screen flex items-center justify-center text-white">
        <div className="absolute inset-0 bg-[#0B1E26] opacity-80" />
        <div className="container mx-auto px-6 text-center z-10 flex flex-col items-center">
          <h1 className="text-5xl font-bold mb-6 max-w-3xl">Build Your Business Empire, One Move at a Time!</h1>
          <p className="text-xl mb-8">A captivating blend of strategy, competition, and real-world business challenges</p>
          <Button size="lg" className="bg-[#A5EC60] hover:bg-[#419310] text-[#0B1E26] rounded-full" onClick={scrollToFooter} id='start-building-button'>
            Start Building Your Empire Now!
            <ChevronRight className="ml-2" />
          </Button>
        </div>
      </section>

      <section className="py-20 bg-[#A5EC60]">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16">Why Choose Spurt! Empire Games?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center p-6 bg-[#0B1E26] rounded-[16px]">
                <div className="pt-6 text-white">
                  <div className="mb-4 flex justify-center">
                    <benefit.icon size={48} className="text-[#A5EC60] min-w-[48px]" />
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-[#fff]">{benefit.title}</h3>
                  <p className="text-white">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#487070] relative z-10">
        <div className="absolute inset-0 game-contents-bg z-10" />
        <div className="container mx-auto px-6 relative z-10">
          <h2 className="text-4xl font-bold text-center mb-16 text-white">What&apos;s Inside the Box?</h2>
          <div className="flex justify-center items-center">
            <div className="w-full max-w-2xl relative z-10 bg-[#0B1E26] rounded-[16px]">
              <div className="p-8 text-white">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex items-center space-x-4">
                    <Package className="text-[#A5EC60] min-w-[24px]" />
                    <span>Game Board</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <Package className="text-[#A5EC60] min-w-[24px]" />
                    <span>Player Tokens</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <Package className="text-[#A5EC60] min-w-[24px]" />
                    <span>Game Dice</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <Package className="text-[#A5EC60] min-w-[24px]" />
                    <span>Business Cards & Assets</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <Package className="text-[#A5EC60] min-w-[24px]" />
                    <span>Strategy Guide</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <Package className="text-[#A5EC60] min-w-[24px]" />
                    <span>Instructions Manual</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#A5EC60]">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16">What Our Players Say</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="p-6 relative bg-[#0B1E26] rounded-[16px]">
                <Quote className="text-[#A5EC60] absolute top-[0] left-[0] z-10 opacity-10" size={64} />
                <div className='relative z-10 h-full flex flex-col justify-between'>
                  <p className="text-white mb-4">{testimonial.text}</p>
                  <p className="font-bold text-[#A5EC60] mt-auto">{testimonial.author}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default LandingPage;