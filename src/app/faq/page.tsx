import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqItems } from '@/lib/data';

const FAQ = () => {

  return (
    <div className="min-h-screen about-game-bg py-20 relative">
      <div className="absolute inset-0 bg-[#0B1E26] opacity-90 z-10" />
      <div className="container mx-auto px-6 relative z-20">
        <h1 className="text-4xl font-bold text-center text-white mb-12 py-12">Frequently Asked Questions</h1>

        <div className="max-w-3xl mx-auto bg-[#0B1E26] rounded-[16px] border border-[#1C621B] p-6">
          <Accordion type="single" collapsible className="space-y-4">
            {faqItems.map((item, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-b border-[#1C621B]">
                <AccordionTrigger className="text-[#A5EC60] hover:text-[#419310]">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-[#419310]">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default FAQ; 