"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const droneImages = [
    { src: "/drone/chungom-canal.jpg", alt: "Chungom Canal", span: "col-span-1 md:col-span-2 row-span-2" },
    { src: "/drone/pallathuruthy.jpg", alt: "Pallathuruthy", span: "col-span-1" },
    { src: "/drone/pallathuruthy-river.jpg", alt: "Pallathuruthy River", span: "col-span-1" },
    { src: "/drone/with-drone.jpg", alt: "Drone Shot", span: "col-span-1 md:col-span-2 row-span-2" },
    { src: "/drone/kannitta-paddy.jpg", alt: "Kannitta Paddy Field", span: "col-span-1" },
    { src: "/drone/paddy-field.jpg", alt: "Paddy Field", span: "col-span-1" },
];

export default function DroneViewPage() {
    return (
        <div className="min-h-screen bg-background relative overflow-hidden">
            <Navbar />

            {/* Background Ambience */}
            <div className="absolute inset-0 bg-[url('/hero.jpg')] bg-cover bg-center opacity-5 fixed top-0 w-full h-full -z-10" />

            <div className="pt-32 pb-20 px-4 container mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-16"
                >
                    <span className="text-primary uppercase tracking-widest text-sm font-medium mb-4 block">
                        From the Sky
                    </span>
                    <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
                        Drone <span className="text-primary italic">Perspectives</span>
                    </h1>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
                        Experience the backwaters like never before. Capture your moments from the sky with our exclusive drone photography service.
                    </p>
                </motion.div>

                {/* Pricing Card */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.2 }}
                    className="max-w-3xl mx-auto mb-20 p-8 rounded-3xl bg-secondary/10 border border-secondary/20 backdrop-blur-sm text-center"
                >
                    <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12">
                        <div className="text-left">
                            <h3 className="text-2xl font-bold text-foreground mb-2">Special Package</h3>
                            <p className="text-muted-foreground">10 Minutes Boating + 2 Minutes Drone Video</p>
                        </div>
                        <div className="h-px md:h-16 w-full md:w-px bg-border" />
                        <div>
                            <span className="text-4xl font-bold text-primary">₹500</span>
                            <span className="text-muted-foreground ml-2">only</span>
                        </div>
                    </div>
                </motion.div>

                {/* Image Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 auto-rows-[300px] gap-6">
                    {droneImages.map((img, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 + i * 0.1 }}
                            className={`relative rounded-3xl overflow-hidden group shadow-lg border border-white/5 ${img.span}`}
                        >
                            <Image
                                src={img.src}
                                alt={img.alt}
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                                sizes="(max-width: 768px) 100vw, 33vw"
                            />
                            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                <p className="text-white font-medium text-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                    {img.alt}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
            <Footer />
        </div>
    );
}
