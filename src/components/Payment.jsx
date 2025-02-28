import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const Payment = () => {
  const { value } = useParams();
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSuccessOpen, setIsSuccessOpen] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState("upi"); // Default to UPI
  const [userData, setUserData] = useState({ name: "", phone: "" });

  const handlePayment = () => {
    if (!userData.name || !userData.phone) {
      alert("Please enter your details before proceeding.");
      return;
    }
    setIsModalOpen(false);
    setIsSuccessOpen(true); // Show success popup
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-50 to-blue-100">
      {/* Payment Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="bg-white rounded-2xl shadow-xl p-8 max-w-md w-full text-center"
      >
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Payment Details</h1>
        <p className="text-lg text-gray-600">You selected:</p>
        <motion.p
          className="text-3xl font-semibold text-blue-600 mt-2"
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.3 }}
        >
          ₹{value}
        </motion.p>

        {/* Buttons Container */}
        <div className="mt-6 flex justify-center space-x-4">
          {/* Back Button */}
          <motion.button
            onClick={() => navigate("/")}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-3 bg-gray-500 text-white text-lg font-semibold rounded-lg shadow-lg 
                       hover:bg-gray-600 transition duration-300 ease-in-out"
          >
            Back
          </motion.button>

          {/* Pay Button */}
          <motion.button
            onClick={() => setIsModalOpen(true)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-3 bg-green-500 text-white text-lg font-semibold rounded-lg shadow-lg 
                       hover:bg-green-600 transition duration-300 ease-in-out"
          >
            Pay ₹{value}
          </motion.button>
        </div>
      </motion.div>

      {/* Payment Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 50, opacity: 0 }}
              className="bg-white rounded-lg p-6 w-96 shadow-xl"
            >
              <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">
                Complete Your Payment
              </h2>

              {/* User Details */}
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-semibold">Name</label>
                <input
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded-md"
                  placeholder="Enter your name"
                  value={userData.name}
                  onChange={(e) => setUserData({ ...userData, name: e.target.value })}
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-semibold">Phone Number</label>
                <input
                  type="tel"
                  className="w-full p-2 border border-gray-300 rounded-md"
                  placeholder="Enter your phone number"
                  value={userData.phone}
                  onChange={(e) => setUserData({ ...userData, phone: e.target.value })}
                />
              </div>

              {/* Payment Method Selection */}
              <div className="mb-4">
                <p className="text-gray-700 font-semibold">Select Payment Method:</p>
                <div className="flex gap-4 mt-2">
                  <button
                    onClick={() => setPaymentMethod("upi")}
                    className={`flex-1 px-4 py-2 rounded-lg border-2 ${
                      paymentMethod === "upi" ? "border-blue-500 bg-blue-100" : "border-gray-300"
                    }`}
                  >
                    UPI ID
                  </button>
                  <button
                    onClick={() => setPaymentMethod("qr")}
                    className={`flex-1 px-4 py-2 rounded-lg border-2 ${
                      paymentMethod === "qr" ? "border-blue-500 bg-blue-100" : "border-gray-300"
                    }`}
                  >
                    QR Code
                  </button>
                </div>
              </div>

              {/* Proceed to Pay Button */}
              <motion.button
                onClick={handlePayment}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full mt-4 px-6 py-3 bg-green-500 text-white text-lg font-semibold rounded-lg shadow-lg 
                           hover:bg-green-600 transition duration-300 ease-in-out"
              >
                Proceed to Pay ₹{value}
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
{/* Success Modal */}
<AnimatePresence>
  {isSuccessOpen && (
    <motion.div
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center px-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 50, opacity: 0 }}
        className="bg-white rounded-lg p-8 w-[400px] md:w-[500px] lg:w-[600px] shadow-xl text-center"
      >
        <h2 className="text-3xl font-bold text-green-600 whitespace-nowrap">
          🎉 Payment Successful!
        </h2>

        <p className="text-gray-700 mt-3 text-lg">
          You will receive your lottery ticket on your registered number:
        </p>

        {/* User Phone Number Display */}
        <div className="bg-gray-100 p-3 mt-4 rounded-md text-xl font-semibold text-blue-700">
          📲 {userData.phone}
        </div>

        <p className="text-gray-600 mt-3 text-lg">
          The results will be announced within <span className="font-bold text-gray-800">5 days</span>.
        </p>

        {/* OK Button */}
        <motion.button
          onClick={() => {
            setIsSuccessOpen(false);
            navigate("/"); // Redirect to home after success
          }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="mt-5 px-6 py-2 bg-blue-500 text-white text-lg font-semibold rounded-lg shadow-lg 
                     hover:bg-blue-600 transition duration-300 ease-in-out"
        >
          OK, Got It!
        </motion.button>
      </motion.div>
    </motion.div>
  )}
</AnimatePresence>

    </div>
  );
};

export default Payment;
