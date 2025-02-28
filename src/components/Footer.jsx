import React from "react";
import { motion } from "framer-motion";
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-black text-white py-14 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="p-6 bg-gray-900 rounded-xl shadow-lg"
          >
            <h2 className="text-3xl font-extrabold text-yellow-400">🎟️ Lucky Draw</h2>
            <p className="mt-3 text-gray-400">
              Your gateway to fortune! Participate in our exciting lottery and stand a chance to win big!
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="p-6 bg-gray-900 rounded-xl shadow-lg"
          >
            <h3 className="text-2xl font-bold text-yellow-300">Quick Links</h3>
            <ul className="mt-4 space-y-3">
              {["Home", "Payment", "Results", "Contact Us"].map((link, index) => (
                <li key={index}>
                  <motion.a
                    href={`/${link.toLowerCase().replace(" ", "")}`}
                    whileHover={{ scale: 1.1 }}
                    className="text-gray-400 hover:text-white transition duration-300 block no-underline"
                    style={{ textDecoration: 'none' }}
                  >
                    {link}
                  </motion.a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Social Media */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="p-6 bg-gray-900 rounded-xl shadow-lg"
          >
            <h3 className="text-2xl font-bold text-yellow-300">Follow Us</h3>
            <div className="flex justify-center md:justify-start space-x-6 mt-4">
              {[
                { icon: FaFacebook, link: "https://facebook.com" },
                { icon: FaTwitter, link: "https://twitter.com" },
                { icon: FaInstagram, link: "https://instagram.com" },
                { icon: FaYoutube, link: "https://youtube.com" },
              ].map(({ icon: Icon, link }, index) => (
                <motion.a
                  key={index}
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  className="text-white transition duration-300"
                >
                  <Icon size={28} />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 mt-10 pt-6 text-center text-gray-400 text-sm">
          © {new Date().getFullYear()} Lucky Draw. All rights reserved.
        </div>
      </div>
    </div>
  );
};

export default Footer;