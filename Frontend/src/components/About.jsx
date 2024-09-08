import React from 'react';

export default function About() {
    return (
        <div className="bg-gradient-to-b from-green-200 via-green-100 to-transparent min-h-screen py-10">
            <div className="container mx-auto px-4">
                <h1 className="text-4xl font-bold text-green-700 text-center mb-6">About the Virtual Herbal Garden</h1>

                {/* Section 1: Project Overview */}
                <section className="mb-10">
                    <h2 className="text-2xl font-semibold text-green-600 mb-4">Project Overview</h2>
                    <p className="text-gray-700 leading-relaxed">
                        The Virtual Herbal Garden is designed to provide an immersive, educational, and interactive experience for users to explore the wide variety of medicinal plants used in AYUSH (Ayurveda, Yoga & Naturopathy, Unani, Siddha, and Homeopathy).
                        This digital platform allows users to delve into traditional healing practices from the comfort of their homes.
                    </p>
                </section>

                {/* Section 2: Background */}
                <section className="mb-10">
                    <h2 className="text-2xl font-semibold text-green-600 mb-4">Background</h2>
                    <p className="text-gray-700 leading-relaxed">
                        The AYUSH sector relies heavily on medicinal plants and herbs, forming the backbone of traditional healing. Unfortunately, not everyone has access to physical herbal gardens. This virtual platform bridges the gap, allowing users to explore and learn about medicinal plants without leaving their homes.
                    </p>
                </section>

                {/* Section 3: Features */}
                <section className="mb-10">
                    <h2 className="text-2xl font-semibold text-green-600 mb-4">Features of the Virtual Herbal Garden</h2>
                    <ul className="list-disc list-inside space-y-2 text-gray-700">
                        <li><span className="font-bold">Interactive 3D Models:</span> Rotate, zoom, and explore realistic 3D models of medicinal plants.</li>
                        <li><span className="font-bold">Detailed Information:</span> Learn about each plant’s botanical and common names, medicinal uses, habitat, and cultivation methods.</li>
                        <li><span className="font-bold">Multimedia Integration:</span> Enjoy high-quality images, videos, and audio descriptions for an enhanced learning experience.</li>
                        <li><span className="font-bold">Search & Filter:</span> Easily find plants by medicinal uses, region, or type.</li>
                        <li><span className="font-bold">Virtual Tours:</span> Take guided tours based on specific health themes like digestion, immunity, or skincare.</li>
                        <li><span className="font-bold">User Interaction:</span> Bookmark favorite plants, take notes, and share information on social media.</li>
                    </ul>
                </section>

                {/* Section 4: Expected Outcome */}
                <section>
                    <h2 className="text-2xl font-semibold text-green-600 mb-4">Expected Outcome</h2>
                    <p className="text-gray-700 leading-relaxed">
                        Our Virtual Herbal Garden is envisioned to be a valuable educational tool for students, practitioners, and enthusiasts of the AYUSH sector. By making the knowledge of medicinal plants accessible to everyone, this platform promotes awareness and appreciation of traditional herbal practices, blending technology with ancient wisdom.
                    </p>
                </section>
            </div>
        </div>
    );
}
