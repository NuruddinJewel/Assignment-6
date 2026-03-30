import React from 'react';
import { Check } from 'lucide-react';

const Price = () => {
  const plans = [
    {
      name: 'Starter',
      description: 'Perfect for getting started',
      price: '0',
      features: ['Access to 10 free tools', 'Basic templates', 'Community support', '1 project per month'],
      buttonText: 'Get Started Free',
      isPopular: false,
    },
    {
      name: 'Pro',
      description: 'Best for professionals',
      price: '29',
      features: ['Access to all premium tools', 'Unlimited templates', 'Priority support', 'Unlimited projects', 'Cloud sync', 'Advanced analytics'],
      buttonText: 'Start Pro Trial',
      isPopular: true,
    },
    {
      name: 'Enterprise',
      description: 'For teams and businesses',
      price: '99',
      features: ['Everything in Pro', 'Team collaboration', 'Custom integrations', 'Dedicated support', 'SLA guarantee', 'Custom branding'],
      buttonText: 'Contact Sales',
      isPopular: false,
    },
  ];

  return (
   
    <section className="bg-white py-24 px-6 min-h-screen">
      {/* Header */}
      <div className="text-center mb-20">
        <h2 className="text-4xl md:text-5xl font-extrabold text-[#0F172A] mb-4 tracking-tight">
          Simple, Transparent Pricing
        </h2>
        <p className="text-gray-500 text-lg max-w-2xl mx-auto">
          Choose the plan that fits your needs. Upgrade or downgrade anytime.
        </p>
      </div>

      {/* Pricing Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
        {plans.map((plan, index) => (
          <div
            key={index}
            className={`relative rounded-4xl p-10 transition-all duration-300 flex flex-col ${
              plan.isPopular 
                ? 'bg-[#7C3AED] text-white scale-105 shadow-2xl shadow-purple-500/30 z-10' 
                : 'bg-white text-slate-900 border border-gray-100 shadow-sm'
            }`}
          >
            {/* Most Popular Badge */}
            {plan.isPopular && (
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#FEF3C7] text-[#92400E] text-[10px] font-bold py-1.5 px-5 rounded-full uppercase tracking-widest shadow-sm">
                Most Popular
              </div>
            )}

            <div className="mb-6">
              <h3 className={`text-2xl font-bold mb-2 ${plan.isPopular ? 'text-white' : 'text-[#0F172A]'}`}>
                {plan.name}
              </h3>
              <p className={`text-sm ${plan.isPopular ? 'text-purple-100' : 'text-gray-500'}`}>
                {plan.description}
              </p>
            </div>

            <div className="mb-10 flex items-baseline gap-1">
              <span className="text-5xl font-extrabold">${plan.price}</span>
              <span className={`text-lg font-medium ${plan.isPopular ? 'text-purple-200' : 'text-gray-400'}`}>/Month</span>
            </div>

            {/* Features List */}
            <ul className="space-y-5 mb-10 grow">
              {plan.features.map((feature, i) => (
                <li key={i} className="flex items-center gap-3 text-sm font-medium">
                  <div className={`p-0.5 rounded-full ${plan.isPopular ? 'text-white' : 'text-green-500'}`}>
                     <Check size={18} strokeWidth={3} />
                  </div>
                  <span className={plan.isPopular ? 'text-white' : 'text-slate-600'}>
                    {feature}
                  </span>
                </li>
              ))}
            </ul>

            {/* Action Button */}
            <button
              className={`w-full py-4 rounded-2xl font-bold text-sm transition-all active:scale-95 shadow-sm ${
                plan.isPopular
                  ? 'bg-white text-[#7C3AED] hover:bg-gray-50'
                  : 'bg-[#7C3AED] text-white hover:bg-[#6D28D9]'
              }`}
            >
              {plan.buttonText}
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Price;