import React from 'react';
import { FacebookIcon, InstagramIcon, LinkedinIcon, GithubIcon, TwitterIcon } from 'lucide-react';
export function Footer() {
  return <footer className="bg-gray-50 border-t border-gray-200 mt-16">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-4 gap-8">
          {/* Contact Info */}
          <div>
            <h3 className="font-bold text-gray-900 mb-4">Address</h3>
            <p className="text-gray-600 text-sm mb-2">071 608 4522</p>
            <p className="text-gray-600 text-sm mb-2">Jbmhq@qlcSrtu, Kandy,</p>
            <p className="text-gray-600 text-sm">Sri Lanka</p>
            <div className="flex gap-3 mt-4">
              <FacebookIcon className="w-5 h-5 text-gray-600 hover:text-blue-500 cursor-pointer" />
              <InstagramIcon className="w-5 h-5 text-gray-600 hover:text-blue-500 cursor-pointer" />
              <LinkedinIcon className="w-5 h-5 text-gray-600 hover:text-blue-500 cursor-pointer" />
              <GithubIcon className="w-5 h-5 text-gray-600 hover:text-blue-500 cursor-pointer" />
              <TwitterIcon className="w-5 h-5 text-gray-600 hover:text-blue-500 cursor-pointer" />
            </div>
          </div>

          {/* My Account */}
          <div>
            <h3 className="font-bold text-gray-900 mb-4">My Account</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-600 text-sm hover:text-blue-500">
                  Sign In
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 text-sm hover:text-blue-500">
                  Register
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 text-sm hover:text-blue-500">
                  Order status
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold text-gray-900 mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-600 text-sm hover:text-blue-500">
                  Repairs & Maintenance
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 text-sm hover:text-blue-500">
                  Product Supply & Sales
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 text-sm hover:text-blue-500">
                  Installation Services
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 text-sm hover:text-blue-500">
                  Extra Services
                </a>
              </li>
            </ul>
          </div>

          {/* Legal Stuff */}
          <div>
            <h3 className="font-bold text-gray-900 mb-4">Legal Stuff</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-600 text-sm hover:text-blue-500">
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 text-sm hover:text-blue-500">
                  Privacy & Policy
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-8 pt-6 text-center">
          <p className="text-gray-600 text-sm">
            Copyright ©2025 Pobodo. All Rights Reserved
          </p>
        </div>
      </div>
    </footer>;
}