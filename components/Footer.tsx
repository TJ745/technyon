"use client";
import React, { useState } from "react";
import Modal from "./ModalServices";
import Link from "next/link";
import Newsletter from "./Newsletter";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const [isModalOpen, setIsModalOpen] = useState("");

  return (
    <div className="pt-16 pb-16 border-t border-gray-600">
      <div className="w-[80%] mx-auto items-start grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* 1st part */}
        <div>
          <div className="font-bold text-3xl">TECHNYON</div>
          <p className="mt-5 font-semibold dark:text-gray-300 text-sm">
            At TECHNYON, we bring you curated tech products designed to enhance
            everyday life. <br />
            Shop smarter with trusted Amazon links and discover innovations that
            fit your lifestyle.
          </p>
          {/* Social icons */}
          {/* <div className="flex items-center space-x-4 mt-6">
            <div className="w-8 h-8 bg-blue-700 flex items-center justify-center flex-col rounded-full">
              <FaFacebookF />
            </div>
            <div className="w-8 h-8 bg-rose-700 flex items-center justify-center flex-col rounded-full">
              <FaInstagram />
            </div>
            <div className="w-8 h-8 bg-yellow-600 flex items-center justify-center flex-col rounded-full">
              <FaSnapchat />
            </div>
            <div className="w-8 h-8 bg-gray-900 flex items-center justify-center flex-col rounded-full">
              <FaTiktok />
            </div>
          </div> */}
        </div>

        {/* 2nd part */}
        <div className="space-y-5">
          <h1 className="text-lg font-bold">Company</h1>
          <div className="flex flex-col space-y-5">
            <Link
              href="#home"
              className="dark:text-gray-300 hover:text-gray-400 font-medium cursor-pointer text-sm"
            >
              Home
            </Link>
            <Link
              href="#products"
              className="dark:text-gray-300 hover:text-gray-400 font-medium cursor-pointer text-sm"
            >
              Products
            </Link>
            <Link
              href="#about"
              className="dark:text-gray-300 hover:text-gray-400 font-medium cursor-pointer text-sm"
            >
              About Us
            </Link>
            <Link
              href="#contact"
              className="dark:text-gray-300 hover:text-gray-400 font-medium cursor-pointer text-sm"
            >
              Contact Us
            </Link>
          </div>
        </div>

        {/* 3rd part */}
        <div className="space-y-5">
          <h1 className="text-lg font-bold">Services</h1>
          <p
            onClick={() => setIsModalOpen("legal")}
            className="dark:text-gray-300 hover:text-gray-400 font-medium cursor-pointer text-sm"
          >
            Legal Information
          </p>
          <p
            onClick={() => setIsModalOpen("terms")}
            className="dark:text-gray-300 hover:text-gray-400 font-medium cursor-pointer text-sm"
          >
            Terms & Conditions
          </p>
          <p
            onClick={() => setIsModalOpen("privacy")}
            className="dark:text-gray-300 hover:text-gray-400 font-medium cursor-pointer text-sm"
          >
            Privacy Policy
          </p>
          {/* <p className="dark:text-gray-300 hover:text-gray-400 font-medium cursor-pointer text-sm">
            Report Abuse
          </p> */}
        </div>

        <Modal isOpen={!!isModalOpen} onClose={() => setIsModalOpen("")}>
          {isModalOpen === "legal" && (
            <>
              <h2 className="text-xl font-semibold mb-4">Legal Information</h2>
              <p className="text-gray-300 text-justify text-sm">
                <p className="text-lg font-semibold">1. Disclaimer</p>
                TECHNYON provides information and links to third-party products
                for informational purposes only. We do not endorse or guarantee
                the performance or safety of any products displayed. Users are
                responsible for evaluating and using third-party products or
                services. <br />
                <br />
                <p className="text-lg font-semibold">
                  2. Limitation of Liability
                </p>
                To the fullest extent permitted by law, TECHNYON and its
                affiliates shall not be liable for any direct, indirect,
                incidental, or consequential damages resulting from your use of
                the site or reliance on any information provided.
                <br />
                <br />
                <p className="text-lg font-semibold">3. Governing Law </p>
                These Terms & Conditions are governed by the laws of United
                Kingdom. Any disputes arising from your use of the site will be
                resolved in the appropriate courts of London.
              </p>
            </>
          )}
          {isModalOpen === "terms" && (
            <>
              <h2 className="text-xl font-semibold mb-4">Terms & Conditions</h2>
              <p className="text-gray-300 text-justify text-sm">
                By accessing or using our website, you agree to be bound by the
                following Terms & Conditions. Please read them carefully.
                <br />
                <br />
                <p className="text-lg font-semibold">1. Use of the Site</p>
                TECHNYON is a product showcase platform. We do not currently
                sell directly; we link to trusted partners like Amazon for
                checkout. We are not responsible for transactions made on
                third-party sites other than Amazon.
                <br />
                <br />
                <p className="text-lg font-semibold">
                  2. Intellectual Property
                </p>
                All content (text, images, logos, product descriptions) on
                TECHNYON is owned by us or used with permission. Please do not
                copy or reproduce without our written consent. <br />
                <br />
                <p className="text-lg font-semibold">
                  3. Accuracy of Information
                </p>
                We strive to ensure that product listings and information on our
                site are accurate and up to date.
                <br />
                <br />
                <p className="text-lg font-semibold"> 4. External Links</p>
                Our site may contain links to external websites (e.g.,
                Amazon.co.uk). These sites are not under our control, and we are
                not responsible for their content, privacy policies, or the
                quality of their services. Your interactions with those sites
                are governed by their respective terms and policies. <br />
                <br />
                <p className="text-lg font-semibold">
                  5. Modifications to Terms
                </p>
                We reserve the right to update or modify these Terms &
                Conditions at any time without prior notice. Your continued use
                of the site after any changes indicates your acceptance of the
                revised terms.
              </p>
            </>
          )}
          {isModalOpen === "privacy" && (
            <>
              <h2 className="text-xl font-semibold mb-4">Privacy Policy</h2>
              <p className="text-gray-300 text-justify text-sm">
                Your privacy is important to us. This section outlines how we
                collect, use, and protect your personal information. <br />
                <p className="text-lg font-semibold">
                  1. Information We Collect
                </p>
                • Automatically Collected Data: <br />
                When you visit our site, we may collect anonymized data such as
                your IP address, browser type, referring/exit pages, and usage
                patterns. <br />• Voluntarily Provided Data: <br />
                If you contact us or subscribe to a newsletter, we may collect
                your name, email address, or other relevant information.
                <br />
                <p className="text-lg font-semibold">2. Use of Information</p>
                We use the data we collect to: <br />• Improve the performance
                and content of our website <br />• Understand user behavior and
                preferences <br />• Respond to inquiries and feedback <br />•
                Communicate updates or marketing
                <br />
                <p className="text-lg font-semibold">3. Cookies</p> Our website
                may use cookies or similar technologies to enhance user
                experience. You can manage cookie preferences through your
                browser settings.
                <br />
                <p className="text-lg font-semibold">4. Data Sharing</p> We do
                not sell, rent, or trade your personal data. We may share
                information with service providers (e.g., analytics tools)
                strictly to improve our services.
                <br />
                <p className="text-lg font-semibold">5. Your Rights</p>
                Depending on your location, you may have rights to access,
                correct, or delete your personal information. To exercise your
                rights, please contact us at our Email.
              </p>
            </>
          )}
        </Modal>
        {/* 4th part */}
        {/* <div>
          <h1 className="text-lg font-bold">Join Our Newsletter</h1>
          <div className="mt-4">
            <h1 className="text-sm">
              Subscribe to our newsletter for the latest updates, tips, and
              insights. Be the first to know about new product launches and
              exclusive offers.
            </h1>
            <input
              placeholder="Enter Email"
              className="text-base  mt-4 bg-gray-200  text-gray-800 dark:text-gray-900 px-4 py-2 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="email"
            />
            <button className="mt-4 bg-red-900 text-white px-6 py-2 rounded-lg hover:bg-red-950 transition duration-300 cursor-pointer">
              Subscribe
            </button>
          </div>
        </div> */}
        <Newsletter />
      </div>
      {/* Copyright */}
      <div className="mt-8 w-[80%] mx-auto border-t pt-8 flex flex-col md:flex-row justify-between items-center text-sm">
        <p className="w-full text-center">
          Copyright &copy; {currentYear} TECHNYON. All Rights Reserved
        </p>
        {/* <div className="flex items-center space-x-4 mt-4 md:mt-0">
          <span>Social : </span>
          <span className="text-gray-500 hover:text-gray-800">
            <FaFacebookF />
          </span>
          <span className="text-gray-500 hover:text-gray-800">
            <FaInstagram />
          </span>
          <span className="text-gray-500 hover:text-gray-800">
            <FaSnapchat />
          </span>
          <span className="text-gray-500 hover:text-gray-800">
            <FaTiktok />
          </span>
        </div> */}
      </div>
    </div>
  );
}
