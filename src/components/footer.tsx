'use client';
import React, { useState } from 'react';
import { Button } from './ui/button';
import { ChevronRight } from 'lucide-react';
import { payWithPaystack } from '@/lib/paystack';
import { useToast } from "@/hooks/use-toast"


const Footer = () => {
  const { toast } = useToast();
  const [email, setEmail] = useState('');
  const handleBuyNow = async (e: React.FormEvent<HTMLFormElement>) => {
    if (!email) {
      toast({
        title: 'Email is required',
        description: 'Please enter your email',
        variant: 'error',
      });
      return;
    }
    e.preventDefault();
    const response = await payWithPaystack({
      name: 'Spurt Games',
      email: email,
      amount: 29999 * 100,
    })
    if (response?.transaction) {
      toast({
        title: 'Payment successful',
        description: 'You have successfully purchased the game',
        variant: 'success',
      });
      setEmail('');
    } else {
      toast({
        title: 'Payment failed',
        description: 'There was an error processing your payment',
        variant: 'error',
      });
    }
  };

  return <section className="py-20 bg-[#0B1E26] text-white min-h-[96px]" id='footerContainer'>
    <div className="container mx-auto px-6 text-center">
      <h2 className="text-4xl font-bold mb-8">Ready to Build Your Empire?</h2>
      <p className="text-xl mb-8">Get your copy of Spurt! Empire Games today and start your journey to business mastery!</p>
      <form className="flex flex-col items-center space-y-4" onSubmit={handleBuyNow}>
        <p className="text-2xl font-bold">₦29,999</p>
        <div className='w-full max-w-[400px] flex flex-col items-start'>
          <label htmlFor="email" className="block text-sm font-medium mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="w-full p-2 border rounded-md bg-[#18333D] placeholder:text-gray-400 focus:outline-[#A5EC60] rounded-[8px]"
            required
            placeholder='Enter your email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <Button size="lg" className="bg-[#A5EC60] hover:bg-[#419310] text-[#0B1E26] rounded-full" id='buy-now-button' type='submit' disabled={!email}>
          Buy Now
          <ChevronRight className="ml-2" />
        </Button>
        <p className="text-sm">Estimated delivery: 5-7 business days</p>
      </form>
    </div>
  </section>;
};

export default Footer;
