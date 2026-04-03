"use client";

import Link from "next/link";
import { Hotel, Mail } from "lucide-react";

export function Footer() {
    return (
        <footer className="bg-hotel-primary text-hotel-fond mt-auto z-50 w-full">
            <div className="container mx-auto px-4 py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
                    <div>
                        <div className="flex items-center gap-2 mb-4">
                            <Hotel className="w-6 h-6" />
                            <span className="text-lg">StayBook</span>
                        </div>
                        <p className="text-sm text-blue-200">
                            Your trusted partner for finding and booking the perfect hotel worldwide.
                        </p>
                    </div>

                    <div>
                        <h4 className="mb-4 text-white">Company</h4>
                        <ul className="space-y-2 text-sm">
                            <li><Link href="/landing/home" className="text-blue-200 hover:text-white transition-colors">About Us</Link></li>
                            <li><Link href="/" className="text-blue-200 hover:text-white transition-colors">Careers</Link></li>
                            <li><Link href="/" className="text-blue-200 hover:text-white transition-colors">Press</Link></li>
                            <li><Link href="/" className="text-blue-200 hover:text-white transition-colors">Blog</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="mb-4 text-white">Support</h4>
                        <ul className="space-y-2 text-sm">
                            <li><Link href="/" className="text-blue-200 hover:text-white transition-colors">Help Center</Link></li>
                            <li><Link href="/" className="text-blue-200 hover:text-white transition-colors">Contact Us</Link></li>
                            <li><Link href="/" className="text-blue-200 hover:text-white transition-colors">Privacy Policy</Link></li>
                            <li><Link href="/" className="text-blue-200 hover:text-white transition-colors">Terms of Service</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="mb-4 text-white">Follow Us</h4>
                        <div className="flex gap-4">
                            <a href="#" className="text-blue-200 hover:text-white transition-colors">
                                
                            </a>
                            <a href="#" className="text-blue-200 hover:text-white transition-colors">
                                
                            </a>
                            <a href="#" className="text-blue-200 hover:text-white transition-colors">
                                
                            </a>
                            <a href="#" className="text-blue-200 hover:text-white transition-colors">
                                <Mail className="w-5 h-5" />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="pt-8 border-t border-blue-700 text-center text-sm text-blue-200">
                    <p>&copy; {new Date().getFullYear()} StayBook. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
