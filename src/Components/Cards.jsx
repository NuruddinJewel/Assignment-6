import { useState } from 'react';
import { Check, ShoppingCart, Package, Loader2 } from 'lucide-react';

const tagStyles = {
  bestseller: 'bg-yellow-100 text-yellow-800',
  popular: 'bg-purple-100 text-purple-700',
  new: 'bg-green-100 text-green-700',
};

const periodLabel = (period) =>
  period === 'one-time' ? 'One-Time' : 'Mo';

const Cards = ({ products = [] }) => {
  const [cartCount, setCartCount] = useState(0);
  const [activeTab, setActiveTab] = useState('products');

  // Handle empty state while loading
  if (!products.length) {
    return (
      <div className="flex flex-col items-center justify-center py-20 text-gray-500 font-bold gap-3">
        <Loader2 className="w-8 h-8 animate-spin text-violet-500" />
        <p>Loading Premium Tools...</p>
      </div>
    );
  }

  return (
    <section className="max-w-6xl mx-auto px-6 py-14">
      {/* ── Header ── */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-3">
          Premium Digital Tools
        </h1>
        <p className="text-gray-500 text-base max-w-lg mx-auto leading-relaxed">
          Choose from our curated collection of premium digital products.
        </p>

        {/* Tab buttons */}
        <div className="flex justify-center gap-3 mt-7">
          <button
            onClick={() => setActiveTab('products')}
            className={`flex items-center gap-2 px-7 py-2.5 rounded-full font-bold text-sm transition-all active:scale-95 cursor-pointer
              ${activeTab === 'products'
                ? 'bg-violet-600 text-white shadow-lg shadow-violet-200'
                : 'bg-white border border-gray-200 text-gray-700 hover:border-violet-300'}`}
          >
            <Package size={18} />
            Products
          </button>
          <button
            onClick={() => setActiveTab('cart')}
            className={`flex items-center gap-2 px-7 py-2.5 rounded-full font-bold text-sm transition-all active:scale-95 cursor-pointer
              ${activeTab === 'cart'
                ? 'bg-violet-600 text-white shadow-lg shadow-violet-200'
                : 'bg-white border border-gray-200 text-gray-700 hover:border-violet-300'}`}
          >
            <ShoppingCart size={18} />
            Cart ({cartCount})
          </button>
        </div>
      </div>

      {/* ── Cards Grid ── */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="card bg-base-100 shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-200 rounded-2xl overflow-hidden"
          >
            <div className="card-body gap-0 p-6">
              {/* Badge */}
              <div className="flex justify-end mb-2">
                <span className={`text-[10px] uppercase tracking-wider font-bold px-3 py-1 rounded-full ${tagStyles[product.tagType] || 'bg-gray-100 text-gray-600'}`}>
                  {product.tag}
                </span>
              </div>

              {/* Icons */}
              <div className="text-4xl mb-3 text-violet-600">
                {product.icon}
              </div>

              {/* Name */}
              <h2 className="card-title text-xl font-extrabold text-gray-900 mb-2">
                {product.name}
              </h2>

              {/* Description */}
              <p className="text-sm text-gray-500 leading-relaxed mb-4 h-12">
                {product.description}
              </p>

              {/* Price */}
              <div className="mb-4">
                <span className="text-3xl font-extrabold text-gray-900">${product.price}</span>
                <span className="text-sm text-gray-400 ml-1">/{periodLabel(product.period)}</span>
              </div>

              {/* Features */}
              <ul className="flex flex-col gap-2 mb-6 grow">
                {product.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-gray-600">
                    <Check className="w-4 h-4 text-violet-500 shrink-0" strokeWidth={3} />
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Buy Button */}
              <button
                className="btn rounded-full bg-violet-600 hover:bg-violet-700 border-none text-white font-bold w-full active:scale-95 transition-all cursor-pointer flex items-center justify-center gap-2"
                onClick={() => setCartCount(c => c + 1)}
              >
                <ShoppingCart size={18} />
                Buy Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Cards;