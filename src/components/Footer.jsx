const Footer = () => {

  return (
    <>
      <footer className="bg-[#1E293B] text-[#F1F5F9] py-10 px-6 border-t border-cyan-400/20">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-sm">

          <div>
            <h3 className="text-amber-400 text-lg font-semibold mb-2">HillBasket</h3>
            <p className="text-[#F1F5F9] opacity-80">
              Fresh groceries, trusted quality. Delivering goodness to your doorstep.
            </p>
          </div>

          <div>
            <h4 className="text-cyan-400 font-semibold mb-2">Quick Links</h4>
            <ul className="space-y-1">
              <li><a href="/" className="hover:text-amber-400">Home</a></li>
              <li><a href="/products" className="hover:text-amber-400">Products</a></li>
              <li><a href="/about" className="hover:text-amber-400">About Us</a></li>
              <li><a href="/contact" className="hover:text-amber-400">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-cyan-400 font-semibold mb-2">Contact</h4>
            <ul className="space-y-1">
              <li>Email: <a href="mailto:support@hillbasket.com" className="hover:text-amber-400">support@hillbasket.com</a></li>
              <li>Phone: <span className="opacity-80">+1 234 567 890</span></li>
              <li>Location: <span className="opacity-80">Hilltown, Earth</span></li>
            </ul>
          </div>
        </div>

        <div className="mt-10 text-center text-xs text-[#F1F5F9] opacity-50">
          &copy; {new Date().getFullYear()} HillBasket. All rights reserved.
        </div>
      </footer>
    </>

  )
}

export default Footer
