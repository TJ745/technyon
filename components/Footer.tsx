"use client";
import React, { useState } from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaSnapchat,
  FaTiktok,
} from "react-icons/fa6";
import Modal from "./ModalServices";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="pt-16 pb-16 border-t border-gray-600">
      <div className="w-[80%] mx-auto items-start grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* 1st part */}
        <div>
          <div className="font-bold text-3xl">TECHNYON</div>
          <p className="mt-5 font-semibold text-gray-300 text-sm">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi,
            impedit? Perferendis magnam amet, non veritatis officia culpa
            nesciunt natus facilis.
          </p>
          {/* Social icons */}
          <div className="flex items-center space-x-4 mt-6">
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
          </div>
        </div>

        {/* 2nd part */}
        <div className="space-y-5">
          <h1 className="text-lg font-bold">Company</h1>
          <p className="text-gray-300 hover:text-gray-400 font-medium cursor-pointer text-sm">
            Home
          </p>
          <p className="text-gray-300 hover:text-gray-400 font-medium cursor-pointer text-sm">
            Products
          </p>
          <p className="text-gray-300 hover:text-gray-400 font-medium cursor-pointer text-sm">
            About Us
          </p>
          <p className="text-gray-300 hover:text-gray-400 font-medium cursor-pointer text-sm">
            Contact Us
          </p>
        </div>

        {/* 3rd part */}
        <div className="space-y-5">
          <h1 className="text-lg font-bold">Services</h1>
          <p className="text-gray-300 hover:text-gray-400 font-medium cursor-pointer text-sm">
            Legal Information
          </p>
          <p
            onClick={() => setIsModalOpen(true)}
            className="text-gray-300 hover:text-gray-400 font-medium cursor-pointer text-sm"
          >
            Terms & Conditions
          </p>
          <p className="text-gray-300 hover:text-gray-400 font-medium cursor-pointer text-sm">
            Privacy Policy
          </p>
          <p className="text-gray-300 hover:text-gray-400 font-medium cursor-pointer text-sm">
            Report Abuse
          </p>
        </div>

        <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
          <h2 className="text-xl font-semibold mb-4">Terms & Conditions</h2>
          <p className="text-gray-300 text-justify text-sm">
            Welcome to TECHNYON.
            <br /> By using our website, you agree to the following terms:
            <br />
            1. Use of the Site: TECHNYON is a product showcase platform. We do
            not currently sell directly; we link to trusted partners like Amazon
            for checkout. We are not responsible for transactions made on
            third-party sites.
            <br />
            2. Intellectual Property: All content (text, images, logos, product
            descriptions) on TECHNYON is owned by us or used with permission.
            Please do not copy or reproduce without consent. <br />
            3. Accuracy of Information: We do our best to keep product listings
            accurate and updated, but we cannot guarantee that all information
            is 100% current or error-free.
            <br />
            4. External Links: TECHNYON links to external platforms (e.g.,
            Amazon). We are not responsible for their content, privacy policies,
            or service quality. <br />
            5. Future Changes: We may update these Terms at any time. Continued
            use of the site means you agree to the updated version.
          </p>
        </Modal>
        {/* 4th part */}
        <div>
          <h1 className="text-lg font-bold">Get in Touch</h1>
          <div className="mt-6">
            <h1 className="text-sm">Our Mobile Number</h1>
            <h1 className="text-base font-bold mt-1">+44</h1>
          </div>
          <div className="mt-6">
            <h1 className="text-sm">Our Email</h1>
            <h1 className="text-base font-bold mt-1">UK@gmail.com</h1>
          </div>
        </div>
      </div>
      {/* Copyright */}
      <div className="mt-8 w-[80%] mx-auto border-t pt-8 flex flex-col md:flex-row justify-between items-center text-gray-600 text-sm">
        <p className="text-center md:text-left">
          Copyright &copy; {currentYear} TECHNYON. All Rights Reserved
        </p>
        <div className="flex items-center space-x-4 mt-4 md:mt-0">
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
        </div>
      </div>
    </div>
  );
}
