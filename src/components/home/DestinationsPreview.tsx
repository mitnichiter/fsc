"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { MapPin, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const destinations = [
    {
        title: "Kuttanad Village",
        description: "The rice bowl of Kerala, famous for its lush paddy fields below sea level.",
        image: "/p1.jpg",
    },
    {
        title: "Vembanad Lake",
        description: "The largest lake in Kerala, offering expansive views and serene vibes.",
        image: "/p2.jpg",
    },
    {
        title: "Pathiramanal Island",
        description: "A bird watcher's paradise located in the middle of Vembanad Lake.",
        image: "/p3.jpg",
    },
];

export function DestinationsPreview() {
    return (
        <section className="py-24 bg-card text-card-foreground">
            <div className="container px-4 mx-auto">

                <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                    <div className="max-w-2xl">
                        <h2 className="text-3xl md:text-5xl font-bold mb-4 text-foreground">Explore Our Routes</h2>
                        <p className="text-muted-foreground text-lg">
                            Discover the hidden gems of Alappuzha. From narrow canals to vast lakes,
                            customizable routes tailored for your perfect journey.
                        </p>
                    </div>
                    <Link href="/destinations">
                        <Button variant="outline" className="hidden md:flex">
                            View All Destinations <ArrowRight className="ml-2 w-4 h-4" />
                        </Button>
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {destinations.map((dest, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            className="group relative rounded-2xl overflow-hidden aspect-[3/4]"
                        >
                            <Image
                                src={dest.image}
                                alt={dest.title}
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80" />

                            <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                                <div className="flex items-center gap-2 text-primary mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform -translate-y-2 group-hover:translate-y-0">
                                    <MapPin className="w-4 h-4" />
                                    <span className="text-xs uppercase tracking-wider font-bold">Famous Route</span>
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-2">{dest.title}</h3>
                                <p className="text-white/80 line-clamp-2 mb-4">
                                    {dest.description}
                                </p>
                                <Link href="/destinations" className="inline-flex items-center text-primary text-sm font-medium hover:underline">
                                    Explore <ArrowRight className="ml-1 w-3 h-3" />
                                </Link>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-8 text-center md:hidden">
                    <Link href="/destinations">
                        <Button variant="outline" className="w-full">
                            View All Destinations <ArrowRight className="ml-2 w-4 h-4" />
                        </Button>
                    </Link>
                </div>

            </div>
        </section>
    );
}
