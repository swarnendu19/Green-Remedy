import React from "react";

const Contact = () => {
    return (
        <div className="min-h-screen bg-gradient-to-b from-green-200 via-green-100 to-green-50 py-10">
            <div className="container mx-auto px-6">
                <h2 className="text-4xl font-bold text-center text-green-700 mb-8">
                    Contact Us
                </h2>

                <div className="bg-white shadow-gray-400 shadow-sm rounded-lg p-8 max-w-lg mx-auto hover:shadow-gray-500 hover:shadow-lg transition-shadow">
                    <form>
                        {/* Name Input */}
                        <div className="mb-6">
                            <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">
                                Your Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                className="w-full p-4 border rounded-lg focus:outline-none focus:ring-4 focus:ring-green-500 border-gray-300 hover:border-green-600"
                                placeholder="Enter your name"
                            />
                        </div>

                        {/* Email Input */}
                        <div className="mb-6">
                            <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">
                                Your Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                className="w-full p-4 border rounded-lg focus:outline-none focus:ring-4 focus:ring-green-500 border-gray-300 hover:border-green-600"
                                placeholder="Enter your email"
                            />
                        </div>

                        {/* Message Input */}
                        <div className="mb-6">
                            <label htmlFor="message" className="block text-gray-700 font-semibold mb-2">
                                Your Message
                            </label>
                            <textarea
                                id="message"
                                rows="5"
                                className="w-full p-4 border rounded-lg focus:outline-none focus:ring-4 focus:ring-green-500 border-gray-300 hover:border-green-600"
                                placeholder="Type your message here"
                            ></textarea>
                        </div>

                        {/* Submit Button */}
                        <div className="text-center">
                            <button
                                type="submit"
                                className="bg-green-700 text-white px-6 py-3 rounded-lg hover:bg-green-600 focus:ring-4 focus:ring-green-500 shadow-md"
                            >
                                Send Message
                            </button>
                        </div>
                    </form>
                </div>

                {/* Additional Contact Info */}
                <div className="text-center mt-12 text-green-800">
                    <p>
                        You can also reach us via email at{" "}
                        <a href="mailto:support@greenremedy.com" className="text-green-800 font-semibold hover:text-green-700">
                            support@greenremedy.com
                        </a>
                    </p>
                    <p className="mt-2">Phone: +1 234 567 890</p>
                    <p className="mt-2">Address: 123 Herbal Ave, Green City</p>
                </div>
            </div>
        </div>
    );
};

export default Contact;
