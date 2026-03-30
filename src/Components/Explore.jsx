import React from 'react';
import { ArrowRight } from 'lucide-react';

const Explore = () => {
  return (
    <section className="relative w-full">
     
      <div className="bg-linear-to-br from-[#7C3AED] via-[#8B5CF6] to-[#A855F7] py-20 px-6 text-center text-white">
        <div className="max-w-4xl mx-auto">
          
         
          <h2 className="text-4xl md:text-5xl font-semibold mb-4 tracking-tight">
            Ready To Transform Your Workflow?
          </h2>

         
          <div className="text-white/90 text-base md:text-lg mb-10 max-w-2xl mx-auto leading-relaxed font-light">
            <p>Join thousands of professionals who are already using Digitools to work smarter.</p>
            <p>Start your free trial today.</p>
          </div>

         
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-8">
            <button className="btn btn-lg border-none bg-white text-[#8B5CF6] hover:bg-gray-100 rounded-full px-10 normal-case font-medium transition-transform active:scale-95">
              Explore Products
            </button>
            
            <button className="btn btn-lg btn-outline border-white/60 text-white hover:bg-white/10 hover:border-white rounded-full px-10 normal-case font-medium transition-transform active:scale-95">
              View Pricing
            </button>
          </div>

         
          <div className="flex flex-wrap justify-center items-center gap-2 text-white/80 text-sm font-light">
            <span>14-day free trial</span>
            <span className="mx-1 opacity-60">•</span>
            <span>No credit card required</span>
            <span className="mx-1 opacity-60">•</span>
            <span>Cancel anytime</span>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Explore;