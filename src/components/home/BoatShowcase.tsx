"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function BoatShowcase() {
    return (
        <section className="py-24 bg-background relative overflow-hidden">
            {/* Decorative background elements */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/5 blur-3xl rounded-l-full pointer-events-none" />

            <div className="container px-4 mx-auto">
                <div className="flex flex-col lg:flex-row items-center gap-16">

                    {/* Image Side */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="w-full lg:w-1/2 relative"
                    >
                        <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl border border-white/10 group">
                            <Image
                                src="/r1.jpg"
                                alt="Premium Shikara Boat"
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-60" />

                            <div className="absolute bottom-6 left-6 right-6">
                                <span className="inline-block px-3 py-1 rounded-full bg-primary text-primary-foreground text-sm font-medium mb-2">
                                    Premium Category
                                </span>
                                <h3 className="text-2xl font-bold text-white">The Royal Shikara</h3>
                            </div>
                        </div>

                        {/* Float Stats */}
                        <div className="absolute -bottom-6 -right-6 bg-card border border-white/10 p-6 rounded-xl shadow-xl hidden md:block">
                            <div className="flex gap-6 text-center">
                                <div>
                                    <p className="text-3xl font-bold text-primary">20+</p>
                                    <p className="text-xs text-muted-foreground uppercase tracking-wide">Guests</p>
                                </div>
                                <div className="w-px bg-border" />
                                <div>
                                    <p className="text-3xl font-bold text-primary">100%</p>
                                    <p className="text-xs text-muted-foreground uppercase tracking-wide">Safe</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Content Side */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="w-full lg:w-1/2 space-y-8"
                    >
                        <div>
                            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-foreground">
                                Designed for <span className="text-primary">Luxury</span> & Comfort
                            </h2>
                            <p className="text-lg text-muted-foreground leading-relaxed">
                                Unlike traditional houseboats, our roof-foldable Shikara boats are designed to navigate narrow canals that larger vessels cannot reach. Experience the true village life of Kuttanad up close.
                            </p>
                        </div>

                        <ul className="space-y-4">
                            {[
                                "Navigate narrow canals & low bridges",
                                "Open-air seating with foldable roof",
                                "Silent outboard engines for peaceful cruising",
                                "Perfect for sunrise & sunset tours"
                            ].map((item, i) => (
                                <li key={i} className="flex items-center gap-3 text-foreground/90">
                                    <div className="p-1 rounded-full bg-primary/20 text-primary">
                                        <Check className="w-4 h-4" />
                                    </div>
                                    {item}
                                </li>
                            ))}
                        </ul>

                        <div className="flex gap-4 pt-4">
                            <Link href="/shikara">
                                <Button className="bg-primary text-primary-foreground hover:bg-primary/90 h-12 px-8">
                                    View Boat Details
                                </Button>
                            </Link>
                            <Link href="/gallery">
                                <Button variant="outline" className="h-12 px-8">
                                    View Gallery <ArrowRight className="ml-2 w-4 h-4" />
                                </Button>
                            </Link>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
