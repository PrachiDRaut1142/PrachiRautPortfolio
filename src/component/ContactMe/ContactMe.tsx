import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedinIn,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { faPhone, faEnvelope, faLocation, faLocationArrow, faLocationCrosshairs, faLocationDot, faLocationPin, faLocationPinLock, faMapLocation } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
import SocialIcons from "../About/SocialIcons";

function ContactMe() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const videoPath = "/assets/mov/msgsentsuccess.webm";

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const onSubmit = async (data: any) => {
    setIsSubmitting(true);
    setIsSuccess(false);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000));

    setIsSubmitting(false);
    setIsSuccess(true);
    reset();

    // Hide success animation after 3 seconds
    setTimeout(() => setIsSuccess(false), 3000);
  };

  return (
    <div id="contact" className="relative z-40 mt-32 mb-20">
        <motion.div
          className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center px-6"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Form Section */}
          <div className="bg-[#2b2b50] p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold text-[#16f2b3] mb-4 flex items-center  h-16">
              CONTACT WITH ME
              {isSuccess && (
                <video autoPlay className="w-16 h-16 ml-2">
                  <source src={videoPath} type="video/webm" />
                  Your browser does not support the video tag.
                </video>
              )}
            </h2>

            <p className="text-gray-400 text-sm mb-6">
              If you have any questions, feel free to reach out! I'm open to new
              opportunities and collaborations.
            </p>

            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col space-y-4">
              {/* Name Input */}
              <label className="text-sm">Your Name:</label>
              <input
                {...register("name", { required: "Name is required" })}
                type="text"
                placeholder="Enter your name"
                className="p-2 rounded bg-[#1d1d42] text-white border border-gray-600 focus:outline-none focus:border-[#16f2b3]"
                autoComplete="off"
              />
              {errors.name && <p className="text-red-400 text-xs">{errors.name.message as string}</p>}

              {/* Email Input */}
              <label className="text-sm">Your Email:</label>
              <input
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                    message: "Invalid email address",
                  },
                })}
                type="email"
                placeholder="Enter your email"
                autoComplete="off"
                className="p-2 rounded bg-[#1d1d42] text-white border border-gray-600 focus:outline-none focus:border-[#16f2b3]"
              />
              {errors.email && <p className="text-red-400 text-xs">{errors.email.message as string}</p>}

              {/* Message Input */}
              <label className="text-sm">Your Message:</label>
              <textarea
                {...register("message", { required: "Message cannot be empty" })}
                rows={4}
                placeholder="Type your message..."
                className="p-2 rounded bg-[#1d1d42] text-white border border-gray-600 focus:outline-none focus:border-[#16f2b3]"
                autoComplete="off"
              ></textarea>
              {errors.message && <p className="text-red-400 text-xs">{errors.message.message as string}</p>}

              {/* Submit Button / Success Animation */}
              <motion.button
                type="submit"
                whileHover={!isSubmitting ? { scale: 1.05 } : {}}
                whileTap={!isSubmitting ? { scale: 0.95 } : {}}
                className={`mt-3 py-2 w-full text-white font-bold rounded-lg transition flex items-center justify-center space-x-2 ${isSubmitting || isSuccess ? "bg-gray-500" : "bg-pink-600"
                  }`}
                disabled={isSubmitting || isSuccess}
              >
                {isSubmitting ? (
                  <div className="flex items-center space-x-2">
                    <svg
                      className="animate-spin h-5 w-5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8v8H4z"
                      ></path>
                    </svg>
                    <span>Sending...</span>
                  </div>
                ) : (
                  <>
                    <span>SEND MESSAGE</span>

                  </>
                )}
              </motion.button>

            </form>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col space-y-6 mx-24">
            <div className="flex items-center space-x-4">
              <FontAwesomeIcon icon={faEnvelope} size="2x" className="text-[#25213b] bg-gray-300 rounded-full p-2.5" />
              <p className="text-gray-300 text-2xl">yourname@email.com</p>
            </div>

            <div className="flex items-center space-x-4">
              <FontAwesomeIcon icon={faPhone} size="2x" className="text-[#25213b] bg-gray-300 rounded-full p-2.5" />
              <p className="text-gray-300 text-2xl">+123 456 7890</p>
            </div>

            <div className="flex items-center space-x-4">
              <FontAwesomeIcon icon={faMapLocation} size="2x" className="text-[#25213b] bg-gray-300 rounded-full p-2.5" />
              <p className="text-gray-300 text-2xl">Navi Mumbai, Maharashtra</p>
            </div>

            <div className="flex space-x-6 m-2">
              <SocialIcons />
            </div>
          </div>
        </motion.div>
    </div>
  );
}

export default ContactMe;
