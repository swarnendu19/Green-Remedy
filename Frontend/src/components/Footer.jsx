import React from "react";

const Footer = () => {
    return (
        <footer className="bg-gradient-to-l from-green-600 via-green-100 to-green-600 text-green-800 py-10">
            <div className="max-w-[1200px] container mx-auto px-8 md:px-16 lg:px-24">
                {/* Footer Top Section */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
                    {/* About Section */}
                    <div className="md:mr-8">
                        <h4 className="text-lg font-semibold mb-4 text-green-900">About Green Remedy</h4>
                        <p className="text-gray-700">
                            Green Remedy brings the healing power of nature to your fingertips. Explore our virtual garden and discover the diverse range of medicinal plants used in traditional AYUSH practices.
                        </p>
                    </div>

                    {/* Quick Links Section */}
                    <div className="md:mr-8">
                        <h4 className="text-lg font-semibold mb-4 text-green-900">Quick Links</h4>
                        <ul>
                            <li className="mb-2">
                                <a href="#home" className="hover:text-green-600 transition-colors duration-300">Home</a>
                            </li>
                            <li className="mb-2">
                                <a href="#about" className="hover:text-green-600 transition-colors duration-300">About Us</a>
                            </li>
                            <li className="mb-2">
                                <a href="#contact" className="hover:text-green-600 transition-colors duration-300">Contact Us</a>
                            </li>
                            <li className="mb-2">
                                <a href="#learn-more" className="hover:text-green-600 transition-colors duration-300">Learn More</a>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Info Section */}
                    <div>
                        <h4 className="text-lg font-semibold mb-4 text-green-900">Contact Us</h4>
                        <p>Email: <a href="mailto:support@greenremedy.com" className="hover:text-green-800">support@greenremedy.com</a></p>
                        <p>Phone: +1 234 567 890</p>
                        <p>Address: 123 Herbal Ave, Green City</p>
                        <div className="mt-4 flex justify-center md:justify-start space-x-4">
                            {/* Social Media Icons */}
                            <a href="#" className="text-green-800 hover:text-green-600 transition-colors duration-300">
                                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M22.67,0H1.33A1.31,1.31,0,0,0,0,1.29V22.71A1.31,1.31,0,0,0,1.33,24H22.67A1.31,1.31,0,0,0,24,22.71V1.29A1.31,1.31,0,0,0,22.67,0ZM7.09,20.09H3.85V9h3.24ZM5.47,7.73A1.88,1.88,0,1,1,7.35,5.85,1.88,1.88,0,0,1,5.47,7.73ZM20.09,20.09H16.85V14.5c0-1.33,0-3-1.82-3S13,13.27,13,14.5V20.09H9.76V9H12.9V10.32h.05a3.45,3.45,0,0,1,3.11-1.71c3.33,0,3.95,2.19,3.95,5V20.09Z" />
                                </svg>
                            </a>
                            <a href="#" className="text-green-800 hover:text-green-600 transition-colors duration-300">
                                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12,2.16A9.84,9.84,0,1,0,21.84,12,9.84,9.84,0,0,0,12,2.16ZM12,18a6,6,0,1,1,6-6A6,6,0,0,1,12,18Zm7-10.94a1.41,1.41,0,1,1,1.41-1.41A1.42,1.42,0,0,1,19,7.06Z" />
                                </svg>
                            </a>
                            <a href="#" className="text-green-800 hover:text-green-600 transition-colors duration-300">
                                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M24,4.56a10,10,0,0,1-2.83.78A5,5,0,0,0,23.34,3a9.94,9.94,0,0,1-3.16,1.21A5,5,0,0,0,16.67,3a5,5,0,0,0-5,5,5.31,5.31,0,0,0,.13,1.14A14.15,14.15,0,0,1,1.64,3.16,5,5,0,0,0,3.27,9.09,5,5,0,0,1,.94,8.48v.06a5,5,0,0,0,4,4.9,5.16,5.16,0,0,1-2.27.09,5,5,0,0,0,4.66,3.46A10,10,0,0,1,0,19.54,14.14,14.14,0,0,0,7.67,21a14,14,0,0,0,14.17-14v-.63A10.11,10.11,0,0,0,24,4.56Z" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Footer Bottom Section */}
                <div className="text-center text-gray-600 mt-8">
                    <p>© 2024 Green Remedy. All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
