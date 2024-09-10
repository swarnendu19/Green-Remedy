import React from 'react';

const ContactUs = () => {
    return (
        <div className="flex items-center justify-center py-10 bg-gradient-to-b from-green-300 via-green-200 to-green-50">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl w-full p-8">
                {/* Left Section: Contact Information */}
                <div className="bg-white/70 p-8 rounded-lg  shadow-lg">
                    <h1 className="text-3xl text-green-800 font-semibold mb-4">
                        Reach out to us today via any of the given information
                    </h1>
                    <div className="text-green-800">
                        <p className="mb-4">Call us for instant support</p>
                        <p className="text-lg font-semibold mb-6">📞 +999 888 777</p>
                        <p className="mb-2">Write us by mail</p>
                        <p className="text-lg font-semibold">📧 user@email.com</p>
                    </div>
                </div>

                {/* Right Section: Contact Form */}
                <div className="bg-white/70 p-8 rounded-lg  shadow-lg">
                    <form className="space-y-6">
                        <div>
                            <input
                                type="email"
                                placeholder="Email"
                                className="w-full p-3 bg-transparent text-green-800 rounded-lg border border-green-800 focus:outline-none focus:ring-2 focus:ring-green-500 hover:border-green-600"
                            />
                        </div>
                        <div>
                            <input
                                type="text"
                                placeholder="Subject"
                                className="w-full p-3 bg-transparent text-green-800 rounded-lg  border border-green-800  focus:outline-none focus:ring-2 focus:ring-green-500 hover:border-green-600"
                            />
                        </div>
                        <div>
                            <textarea
                                placeholder="Message"
                                className="w-full p-3 bg-transparent text-green-800 rounded-lg  border border-green-800  focus:outline-none focus:ring-2 focus:ring-green-500 hover:border-green-600"
                                rows="5"
                            ></textarea>
                        </div>
                        <button
                            type="submit"
                            className="w-full p-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition duration-300"
                        >
                            Send Message ↗
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;
