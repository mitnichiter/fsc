"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { MapPin, Clock, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const destinations = [
    {
        title: "Kuttanad Village Cruise",
        description: "Known as the 'Rice Bowl of Kerala', Kuttanad offers a unique experience of farming below sea level. Glide through narrow canals, witness endless paddy fields, and experience the rustic charm of village life.",
        duration: "2-4 Hours",
        highlights: ["Below-sea-level farming", "Narrow canal cruising", "Duck farming", "Village life interaction"],
        image: "/p1.jpg",
    },
    {
        title: "Vembanad Lake Exploration",
        description: "The largest lake in Kerala, Vembanad offers a vast, serene expanse of water. Perfect for watching the sunset and spotting migratory birds. The open waters provide a sense of tranquility unmatched by any other route.",
        duration: "3-5 Hours",
        highlights: ["Broad open waters", "Sunset views", "Chinese fishing nets", "Bird watching"],
        image: "/p2.jpg",
    },
    {
        title: "Pathiramanal Island Visit",
        description: "A small island in the Vembanad Lake, Pathiramanal is a haven for hundreds of rare migratory birds. A paradise for naturalists and bird watchers, accessible only by boat.",
        duration: "4-6 Hours",
        highlights: ["Migratory birds", "Island walk", "Nature photography", "Secluded atmosphere"],
        image: "/p3.jpg",
    },
];

export default function DestinationsPage() {
    return (
        <div className="min-h-screen bg-background pt-24 pb-20">

            <div className="container mx-auto px-4">
                <div className="text-center mb-16 max-w-3xl mx-auto">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-5xl font-bold text-foreground mb-6"
                    >
                        Explore the <span className="text-primary">Backwaters</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-lg text-muted-foreground"
                    >
                        From the narrow canals of Kuttanad to the vast expanse of Vembanad Lake,
                        choose the route that speaks to your soul.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 gap-12">
                    {destinations.map((dest, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ delay: index * 0.1, duration: 0.6 }}
                            className="group grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center bg-card rounded-3xl p-6 lg:p-12 border border-border/50 hover:border-primary/20 transition-all"
                        >
                            {/* Image Side - Alternating Order */}
                            <div className={`relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                                <Image
                                    src={dest.image}
                                    alt={dest.title}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors" />
                            </div>

                            {/* Content Side */}
                            <div className={`space-y-6 ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
                                    <MapPin className="w-4 h-4" />
                                    <span>Popular Route</span>
                                </div>

                                <h2 className="text-3xl font-bold text-foreground">{dest.title}</h2>
                                <p className="text-muted-foreground text-lg leading-relaxed">
                                    {dest.description}
                                </p>

                                <div className="flex items-center gap-2 text-foreground/80 font-medium">
                                    <Clock className="w-5 h-5 text-primary" />
                                    <span>Recommended Duration: {dest.duration}</span>
                                </div>

                                <div>
                                    <h4 className="font-semibold text-foreground mb-3">Highlights:</h4>
                                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                                        {dest.highlights.map((highlight, hIndex) => (
                                            <li key={hIndex} className="flex items-center gap-2 text-muted-foreground">
                                                <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                                                {highlight}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="pt-4">
                                    <Link href="/booking">
                                        <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                                            Book This Trip <ArrowRight className="ml-2 w-4 h-4" />
                                        </Button>
                                    </Link>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-24 bg-primary/5 rounded-3xl p-12 text-center">
                    <h3 className="text-2xl md:text-3xl font-bold mb-4 text-foreground">Custom Routes Available</h3>
                    <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
                        Want to combine multiple destinations or plan a specific photography tour?
                        We can customize the journey to your preferences.
                    </p>
                    <Link href="/contact">
                        <Button variant="outline" size="lg" className="h-12 px-8 border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                            Contact for Custom Plan
                        </Button>
                    </Link>
                </div>

            </div>
        </div>
    );
}
