import React from 'react';

const User = () => {
    return (
        <div>
              {/* Data */}
            <div className="bg-linear-to-r from-[#6366F1] via-[#8B5CF6] to-[#A855F7] py-8 px-4 flex justify-center items-center">
  <div className="flex flex-col md:flex-row items-center justify-center gap-12 md:gap-20 text-white">
    
    {/* Stat 1 */}
    <div className="text-center">
      <h2 className="text-5xl font-bold mb-2">50K+</h2>
      <p className="text-purple-100 text-lg opacity-90">Active Users</p>
    </div>

    {/* Divider */}
    <div className="hidden md:block h-16 w-px bg-white opacity-30"></div>

    {/* Stat 2 */}
    <div className="text-center">
      <h2 className="text-5xl font-bold mb-2">200+</h2>
      <p className="text-purple-100 text-lg opacity-90">Premium Tools</p>
    </div>

    {/* Divider */}
    <div className="hidden md:block h-16 w-px bg-white opacity-30"></div>

    {/* Stat 3 */}
    <div className="text-center">
      <h2 className="text-5xl font-bold mb-2">4.9</h2>
      <p className="text-purple-100 text-lg opacity-90">Rating</p>
    </div>

  </div>
</div>
        </div>
    );
};

export default User;