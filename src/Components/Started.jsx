import React from 'react';
import { User, Package, Rocket } from 'lucide-react';

const Started = () => {
  const steps = [
    {
      id: '01',
      title: 'Create Account',
      description: 'Sign up for free in seconds. No credit card required to get started.',
      icon: <User size={40} className="text-violet-600" />,
    },
    {
      id: '02',
      title: 'Choose Products',
      description: 'Browse our catalog and select the tools that fit your needs.',
      icon: <Package size={40} className="text-violet-600" />,
    },
    {
      id: '03',
      title: 'Start Creating',
      description: 'Download and start using your premium tools immediately.',
      icon: <Rocket size={40} className="text-violet-600" />,
    },
  ];

  return (
    <section className="py-20 px-6 bg-white">
      {/* Header */}
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4">
          Get Started In 3 Steps
        </h2>
        <p className="text-gray-500 text-lg">
          Start using premium digital tools in minutes, not hours.
        </p>
      </div>

      {/* Steps Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {steps.map((step) => (
          <div 
            key={step.id} 
            className="card bg-base-100 border border-gray-100 shadow-sm hover:shadow-md transition-shadow relative pt-10 pb-8 px-6 text-center rounded-3xl"
          >
            {/* Step Bubble */}
            <div className="absolute top-4 right-4 bg-violet-600 text-white text-xs font-bold w-8 h-8 flex items-center justify-center rounded-xl shadow-lg shadow-violet-200">
              {step.id}
            </div>

            {/* Icon Container */}
            <div className="flex justify-center mb-6">
              <div className="w-24 h-24 bg-violet-50 rounded-full flex items-center justify-center">
                {step.icon}
              </div>
            </div>

            {/* Content */}
            <div className="card-body p-0 items-center">
              <h3 className="text-2xl font-bold text-slate-900 mb-3">
                {step.title}
              </h3>
              <p className="text-gray-500 leading-relaxed max-w-62.5">
                {step.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Started;