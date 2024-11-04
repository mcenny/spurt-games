'use client';
import React from 'react';
import { Button } from './ui/button';
import { ChevronRight } from 'lucide-react';
import { payWithPaystack } from '@/lib/paystack';
import { useToast } from "@/hooks/use-toast"


const Footer = () => {
  const { toast } = useToast();
  const handleBuyNow = async () => {
    const response = await payWithPaystack({
      name: 'Spurt Games',
      email: 'test@test.com',
      amount: 29999 * 100,
    })
    if (response?.transaction) {
      toast({
        title: 'Payment successful',
        description: 'You have successfully purchased the game',
        variant: 'success',
      });
    } else {
      toast({
        title: 'Payment failed',
        description: 'There was an error processing your payment',
        variant: 'error',
      });
    }
    console.log({ response });
  };

  return <section className="py-20 bg-[#0B1E26] text-white min-h-[96px]" id='footerContainer'>
    <div className="container mx-auto px-6 text-center">
      <h2 className="text-4xl font-bold mb-8">Ready to Build Your Empire?</h2>
      <p className="text-xl mb-8">Get your copy of Spurt! Empire Games today and start your journey to business mastery!</p>
      <div className="flex flex-col items-center space-y-4">
        <p className="text-2xl font-bold">₦29,999</p>
        <Button size="lg" className="bg-[#A5EC60] hover:bg-[#419310] text-[#0B1E26] rounded-full" id='buy-now-button' onClick={handleBuyNow}>
          Buy Now
          <ChevronRight className="ml-2" />
        </Button>
        <p className="text-sm">Estimated delivery: 5-7 business days</p>
      </div>
    </div>
  </section>;
};

export default Footer;
