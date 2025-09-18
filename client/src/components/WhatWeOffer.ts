import { useState } from "react";
import { Bot, Cpu, Camera, SatelliteDish, Move, CircuitBoard, X } from "lucide-react";
import { Code, Cloud, Shield, BarChart3, Smartphone, Database, Box, Server, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";

const allServices = [
    {
        icon: Bot,
        title: "Robotic Lab",
        description: "Hands-on lab work with robotics hardware to experiment, build, and learn advanced systems.",
        image: "./../src/assets/roboticlab.jpg",
    },
    {
        icon: CircuitBoard,
        title: "Industrial Training & Projects",
        description: "Gain practical experience working on industrial automation and control systems.",
        image: "./../src/assets/w2.jpg",
    },
    {
        icon: SatelliteDish,
        title: "IoT Solutions",
        description: "Develop smart connected devices and systems using cutting-edge Internet of Things technologies.",
        image: "./../src/assets/w3.jpg",
    },
    {
        icon: Code,
        title: "Web Development",
        description: "Build interactive and responsive websites using modern web technologies and frameworks.",
        image: "./../src/assets/w4.jpeg",
    },
    {
        icon: Move,
        title: "3D Printing",
        description: "Explore additive manufacturing techniques and create complex prototypes using 3D printing tools.",
        image: "./../src/assets/w5.webp",
    },
    {
        icon: Smartphone,
        title: "Mobile App Development",
        description: "Design and develop mobile applications for Android and iOS using popular tools and platforms.",
        image: "./../src/assets/w6.webp",
    },
    {
        icon: Cpu,
        title: "Internship Programs",
        description: "Intern with industry partners and gain real-world experience in engineering and technology.",
        image: "./../src/assets/w7.png",
    },
    {
        icon: Camera,
        title: "CAD Designing",
        description: "Master computer-aided design tools to create precise engineering drawings and models.",
        image: "./../src/assets/w8.jpg",
    },
    {
        icon: BarChart3,
        title: "Data Science",
        description: "Analyze large datasets to uncover insights and inform strategic decisions using statistical tools.",
        image: "./../src/assets/w9.webp",
    },
    {
        icon: Shield,
        title: "Cybersecurity",
        description: "Implement robust security measures to protect networks, systems, and data from threats.",
        image: "./../src/assets/w10.jpg",
    },
    {
        icon: Server,
        title: "DevOps Engineering",
        description: "Streamline software development and deployment processes with automation and best practices.",
        image: "./../src/assets/w11.jpg",
    },
    {
        icon: Globe,
        title: "Blockchain Development",
        description: "Build decentralized applications and smart contracts using blockchain technology.",
        image: "./../src/assets/w12.jpg",
    },
    {
        icon: Box,
        title: "R & D Services",
        description: "Engage in research and development projects to innovate and enhance engineering solutions.",
        image: "./../src/assets/w13.svg",
    },
    {
        icon: Database,
        title: "Software Development",
        description: "Create efficient, scalable, and maintainable software systems tailored to client needs.",
        image: "./../src/assets/w14.png",
    }
];

export default function WhatWeOffer() {
    const [selectedService, setSelectedService] = useState(null);
    const [showAll, setShowAll] = useState(false);

    const displayedServices = showAll ? allServices : allServices.slice(0, 6);

    return (
        <section id="services" className="py-20 bg-gray-50 dark:bg-gray-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white">
                        What We Offer
                    </h2>
                    <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
                        Explore our diverse services combining robotics, computer technologies, and innovative solutions.
                    </p>
                </div>

                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {displayedServices.map((service, idx) => (
                        <div
                            key={idx}
                            onClick={() => setSelectedService(service)}
                            className="cursor-pointer bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
                        >
                            <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300">
                                <service.icon className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                                {service.title}
                            </h3>
                            <p className="text-gray-600 dark:text-gray-300 text-sm">
                                {service.description}
                            </p>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-8">
                    <Button
                        onClick={() => setShowAll(!showAll)}
                        variant="outline"
                        className="px-6 py-3 text-lg"
                    >
                        {showAll ? "Show Less" : "Show More"}
                    </Button>
                </div>
            </div>

            {/* Modal */}
            {selectedService && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg max-w-md w-full relative p-6 mx-4">
                        <button
                            onClick={() => setSelectedService(null)}
                            className="absolute top-4 right-4 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
                            aria-label="Close modal"
                        >
                            <X size={24} />
                        </button>
                        <img
                            src={selectedService.image}
                            alt={selectedService.title}
                            className="w-full h-48 object-cover rounded-md mb-4"
                        />
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                            {selectedService.title}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300">{selectedService.description}</p>
                    </div>
                </div>
            )}
        </section>
    );
}
