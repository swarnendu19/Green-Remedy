import React, { useState } from 'react';

export default function About() {
    const features = [
        { title: 'Interactive 3D Models', description: 'Rotate, zoom, and explore realistic 3D models of medicinal plants.', icon: '🌿' },
        { title: 'Detailed Information', description: 'Learn about each plant’s botanical and common names, medicinal uses, habitat, and cultivation methods.', icon: '📚' },
        { title: 'Multimedia Integration', description: 'Enjoy high-quality images, videos, and audio descriptions for an enhanced learning experience.', icon: '🎥' },
        { title: 'Search & Filter', description: 'Easily find plants by medicinal uses, region, or type.', icon: '🔍' },
        { title: 'Virtual Tours', description: 'Take guided tours based on specific health themes like digestion, immunity, or skincare.', icon: '🚶' },
        { title: 'User Interaction', description: 'Bookmark favorite plants, take notes, and share information on social media.', icon: '🌐' }
    ];

    // Track the current mouse position for each card
    const [mousePos, setMousePos] = useState({});

    const handleMouseMove = (e, index) => {
        const card = e.currentTarget.getBoundingClientRect();
        const xPos = ((e.clientX - card.left) / card.width) * 2 - 1; // From -1 to 1
        const yPos = ((e.clientY - card.top) / card.height) * 2 - 1; // From -1 to 1

        // Set the mouse position for the specific card being hovered
        setMousePos((prevPos) => ({
            ...prevPos,
            [index]: { x: xPos, y: yPos }
        }));
    };

    const handleMouseLeave = (index) => {
        // Reset mouse position when leaving the card
        setMousePos((prevPos) => ({
            ...prevPos,
            [index]: { x: 0, y: 0 }
        }));
    };

    return (
        <div className='bg-gradient-to-b from-green-200 via-green-100 to-green-50 '>
            <div className="max-w-[1300px] mx-auto py-10">
                <div className="container mx-auto px-4">
                    <h1 className="text-4xl font-bold text-green-700 text-center mb-6">About the Virtual Herbal Garden</h1>

                    {/* Section: Project Overview */}
                    <section className="mb-10 text-center">
                        <h2 className="text-2xl font-semibold text-green-600 mb-4">Project Overview</h2>
                        <p className="text-gray-700 leading-relaxed max-w-2xl mx-auto">
                            The Virtual Herbal Garden is designed to provide an immersive, educational, and interactive experience for users to explore the wide variety of medicinal plants used in AYUSH (Ayurveda, Yoga & Naturopathy, Unani, Siddha, and Homeopathy). This digital platform allows users to delve into traditional healing practices from the comfort of their homes.
                        </p>
                    </section>

                    {/* Section: Features */}
                    <section className="mb-10">
                        <h2 className="text-2xl font-semibold text-green-600 mb-8 text-center">Features of the Virtual Herbal Garden</h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {features.map((feature, index) => (
                                <div
                                    key={index}
                                    className="bg-white rounded-lg shadow-lg p-6 border-t-4 border-green-600 hover:shadow-xl transition-shadow duration-300"
                                    onMouseMove={(e) => handleMouseMove(e, index)}
                                    onMouseLeave={() => handleMouseLeave(index)}
                                    style={{
                                        perspective: '1000px',
                                        transform: mousePos[index]
                                            ? `rotateY(${mousePos[index].x * 15}deg) rotateX(${mousePos[index].y * -15}deg) translateX(${mousePos[index].x * 10}px) translateY(${mousePos[index].y * 10}px)`
                                            : 'rotateY(0) rotateX(0)',
                                        transition: 'transform 0.1s ease-out'
                                    }}
                                >
                                    <div className="text-4xl mb-4">{feature.icon}</div>
                                    <h3 className="text-xl font-semibold text-green-700 mb-2">{feature.title}</h3>
                                    <p className="text-gray-600">{feature.description}</p>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Section: Expected Outcome */}
                    {/* <section>
                        <h2 className="text-2xl font-semibold text-green-600 mb-4 text-center">Expected Outcome</h2>
                        <p className="text-gray-700 leading-relaxed max-w-2xl mx-auto">
                            Our Virtual Herbal Garden is envisioned to be a valuable educational tool for students, practitioners, and enthusiasts of the AYUSH sector. By making the knowledge of medicinal plants accessible to everyone, this platform promotes awareness and appreciation of traditional herbal practices, blending technology with ancient wisdom.
                        </p>
                    </section> */}
                </div>
            </div>
        </div>
    );
}
