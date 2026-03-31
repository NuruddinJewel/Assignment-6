import { useState } from 'react';
import { Check, ShoppingCart, Package, Loader2, Trash2 } from 'lucide-react';
import { toast } from 'react-toastify';

const tagStyles = {
  bestseller: 'bg-yellow-100 text-yellow-800',
  popular: 'bg-purple-100 text-purple-700',
  new: 'bg-green-100 text-green-700',
};

const periodLabel = (period) =>
  period === 'one-time' ? 'One-Time' : 'Mo';

const Cards = ({ products = [], cartItems = [], addToCart, removeFromCart, clearCart }) => {
  const [activeTab, setActiveTab] = useState('products');

  const cartCount = cartItems.reduce((sum, item) => sum + item.qty, 0);
  const cartTotal = cartItems.reduce((sum, item) => sum + item.price * item.qty, 0);

  const handleAddToCart = (product) => {
    addToCart(product);
    toast.success(`🛒 ${product.name} added to cart!`, {
      style: {
        borderRadius: '12px',
        fontWeight: '600',
        fontSize: '14px',
      },
    });
    setActiveTab('cart');
  };

  const handleCheckout = () => {
    clearCart();
    setActiveTab('products');
    toast.success('🎉 Payment Successful! Thank you for your purchase.', {
      autoClose: 3500,
      style: {
        borderRadius: '12px',
        fontWeight: '600',
        fontSize: '14px',
        background: '#f0fdf4',
        color: '#15803d',
        border: '1px solid #bbf7d0',
      },
    });
  };

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
      {/* Header */}
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

      {/* Products Tab */}
      {activeTab === 'products' && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => {
            const inCart = cartItems.find(item => item.id === product.id);
            return (
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

                  {/* Icon */}
                  <div className="text-4xl mb-3 text-violet-600">{product.icon}</div>

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
                    onClick={() => handleAddToCart(product)}
                  >
                    <ShoppingCart size={18} />
                    {inCart ? `Add Again (${inCart.qty})` : 'Buy Now'}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* Cart Tab */}
      {activeTab === 'cart' && (
        <div className="bg-white border border-gray-100 rounded-2xl shadow-sm p-8 max-w-3xl mx-auto">
          <h2 className="text-2xl font-extrabold text-gray-900 mb-6">Your Cart</h2>

          {cartItems.length === 0 ? (
            <div className="text-center py-16 text-gray-400">
              <ShoppingCart className="w-12 h-12 mx-auto mb-3 opacity-30" />
              <p className="font-semibold">Your cart is empty</p>
            </div>
          ) : (
            <>
              <div className="flex flex-col gap-3 mb-6">
                {cartItems.map(item => (
                  <div
                    key={item.id}
                    className="flex items-center gap-4 bg-gray-50 rounded-xl px-5 py-4"
                  >
                    <span className="text-2xl">{item.icon}</span>
                    <div className="flex-1">
                      <p className="font-bold text-gray-900">{item.name}</p>
                      <p className="text-sm text-gray-400">${item.price} × {item.qty}</p>
                    </div>
                    <p className="font-bold text-gray-900 mr-4">${item.price * item.qty}</p>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="text-rose-500 hover:text-rose-700 font-semibold text-sm active:scale-95 transition-all cursor-pointer flex items-center gap-1"
                    >
                      <Trash2 size={15} />
                      Remove
                    </button>
                  </div>
                ))}
              </div>

              {/* Total */}
              <div className="flex items-center justify-between border-t border-gray-100 pt-5 mb-6">
                <span className="text-gray-500 font-medium">Total:</span>
                <span className="text-3xl font-extrabold text-gray-900">${cartTotal}</span>
              </div>

              {/* Checkout */}
              <button
                onClick={handleCheckout}
                className="w-full py-4 rounded-xl bg-linear-to-r from-violet-600 to-purple-700 text-white font-bold text-base hover:opacity-95 active:scale-95 transition-all cursor-pointer"
              >
                Proceed To Checkout
              </button>
            </>
          )}
        </div>
      )}
    </section>
  );
};

export default Cards;