"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Check, Users, Shield, Zap, Music, Anchor, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function ShikaraPage() {
    return (
        <div className="min-h-screen bg-background">

            {/* Header */}
            <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/r1.jpg"
                        alt="Royal Shikara Header"
                        fill
                        className="object-cover"
                        priority
                    />
                    <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]" />
                </div>
                <div className="container relative z-10 text-center px-4">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-6xl font-bold text-foreground mb-4"
                    >
                        The Royal <span className="text-primary">Shikara</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-xl text-muted-foreground max-w-2xl mx-auto"
                    >
                        A masterpiece of comfort and engineering, designed for the intimate exploration of backwaters.
                    </motion.p>
                </div>
            </section>

            {/* Main Content */}
            <section className="py-20 px-4">
                <div className="container mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

                        {/* Specs & Description */}
                        <div className="space-y-12">
                            <div>
                                <h2 className="text-3xl font-bold mb-6 text-foreground">Specifications</h2>
                                <div className="grid grid-cols-2 gap-6">
                                    {[
                                        { icon: Users, label: "Capacity", value: "20 Guests" },
                                        { icon: Anchor, label: "Type", value: "Premium Shikara" },
                                        { icon: Zap, label: "Engine", value: "Silent Outboard" },
                                        { icon: Sun, label: "Feature", value: "Open Sun Deck" },
                                    ].map((spec, i) => (
                                        <div key={i} className="flex flex-col items-center p-6 bg-card rounded-xl border border-border/50 hover:border-primary/30 transition-colors">
                                            <spec.icon className="w-8 h-8 text-primary mb-3" />
                                            <span className="text-sm text-muted-foreground uppercase tracking-widest">{spec.label}</span>
                                            <span className="text-lg font-bold text-foreground">{spec.value}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div>
                                <h2 className="text-3xl font-bold mb-6 text-foreground">Why It's Special</h2>
                                <p className="text-muted-foreground leading-relaxed text-lg mb-6">
                                    Our Shikara is unique because of its <strong>foldable roof</strong> capabilities and narrow frame,
                                    allowing it to glide under low-hanging bridges and enter small canals that traditional houseboats cannot reach.
                                </p>
                                <ul className="space-y-4">
                                    {[
                                        "Experience village life up close",
                                        "Plush cushioned seating for long cruises",
                                        "Foldable roof for 360° views"
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-center gap-3 text-foreground">
                                            <div className="p-1.5 rounded-full bg-primary/20 text-primary">
                                                <Check className="w-4 h-4" />
                                            </div>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        {/* Visuals / Gallery Placeholder */}
                        <div className="space-y-8">
                            <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl border border-white/10">
                                <Image
                                    src="/p2.jpg"
                                    alt="Shikara Interior"
                                    fill
                                    className="object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                                <div className="absolute bottom-4 left-4">
                                    <span className="text-white font-medium">Interior View</span>
                                </div>
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-lg border border-white/5">
                                    <Image
                                        src="/p1.jpg"
                                        alt="Canal View"
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-lg border border-white/5">
                                    <Image
                                        src="/p3.jpg"
                                        alt="Sunset View"
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                            </div>

                            <div className="bg-card p-8 rounded-2xl border border-primary/20 text-center space-y-4 mt-8">
                                <h3 className="text-xl font-bold text-foreground">Ready to set sail?</h3>
                                <p className="text-muted-foreground">Book your private Shikara cruise today.</p>
                                <Link href="/booking">
                                    <Button className="w-full h-12 text-lg bg-primary text-primary-foreground hover:bg-primary/90">
                                        Check Availability
                                    </Button>
                                </Link>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </div>
    );
}
