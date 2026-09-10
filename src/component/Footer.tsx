import footerImg from "../assets/logo-footer.png";

const Footer = () => {
  return (
    <footer className="bg-[#06091A] pt-32 text-white">
      <div className="container mx-auto px-6 pb-6">
        {/* Logo */}
        <div className="mb-10 flex justify-center">
          <img src={footerImg} alt="Cricket logo" className="w-24" />
        </div>

        {/* Footer columns */}
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          {/* About */}
          <div>
            <h2 className="mb-4 text-sm font-semibold">About Us</h2>

            <p className="max-w-xs text-sm leading-6 text-gray-400">
              We are a passionate team dedicated to providing the best services
              to our customers.
            </p>
          </div>

          {/* Links */}
          <div>
            <h2 className="mb-4 text-sm font-semibold">Quick Links</h2>

            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <a href="#" className="hover:text-white">
                  Home
                </a>
              </li>

              <li>
                <a href="#about" className="hover:text-white">
                  About
                </a>
              </li>

              <li>
                <a href="#team" className="hover:text-white">
                  Teams
                </a>
              </li>
            </ul>
          </div>

          {/* Subscribe */}
          <div>
            <h2 className="mb-4 text-sm font-semibold">Subscribe</h2>

            <p className="mb-4 text-sm text-gray-400">
              Subscribe to our newsletter for the latest updates.
            </p>

            <div className="flex max-w-sm">
              <input
                type="email"
                placeholder="Enter your email"
                className="min-w-0 flex-1 rounded-l-md bg-white px-4 py-2 text-xs text-gray-700 outline-none"
              />

              <button
                type="button"
                className="rounded-r-md bg-linear-to-r from-pink-300 to-yellow-300 px-4 py-2 text-xs font-bold text-black"
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-10 border-t border-gray-800 pt-5 text-center">
          <p className="text-xs text-gray-500">
            © 2024 Your Company. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
