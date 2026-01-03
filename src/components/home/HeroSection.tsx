"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function HeroSection() {
    return (
        <section className="relative h-[90vh] w-full overflow-hidden flex items-center justify-center">
            {/* Background Video (Vimeo) */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <iframe
                    src="https://player.vimeo.com/video/1151150717?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479&amp;background=1&amp;autoplay=1&amp;loop=1&amp;byline=0&amp;title=0"
                    frameBorder="0"
                    allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
                    className="absolute top-1/2 left-1/2 w-[177.77vh] h-[56.25vw] min-w-full min-h-full -translate-x-1/2 -translate-y-1/2"
                    title="file"
                ></iframe>
                {/* Overlay - Gradient to ensure text readability and theme consistency */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-background" />
            </div>

            {/* Content */}
            <div className="container relative z-10 px-4 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="max-w-4xl mx-auto space-y-6"
                >
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground drop-shadow-lg">
                        Experience the <span className="text-primary italic">Soul</span> of Alappuzha
                    </h1>

                    <p className="text-lg md:text-xl text-muted-foreground/90 max-w-2xl mx-auto leading-relaxed">
                        Glide through the tranquil backwaters in our premium Shikara boats.
                        Unmatched comfort, breathtaking views, and memories that last a lifetime.
                    </p>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.4, duration: 0.5 }}
                        className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
                    >
                        <Link href="/booking">
                            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 min-w-[160px] h-12 text-lg shadow-lg shadow-primary/20">
                                Book Your Cruise
                            </Button>
                        </Link>
                        <Link href="/shikara">
                            <Button size="lg" variant="outline" className="border-white/20 bg-white/5 backdrop-blur-sm text-white hover:bg-white/10 hover:text-primary min-w-[160px] h-12 text-lg">
                                Explore Boats
                                <ArrowRight className="ml-2 h-4 w-4" />
                            </Button>
                        </Link>
                    </motion.div>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2"
            >
                <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center p-1">
                    <motion.div
                        animate={{ y: [0, 12, 0] }}
                        transition={{ repeat: Infinity, duration: 1.5 }}
                        className="w-1.5 h-1.5 bg-primary rounded-full"
                    />
                </div>
            </motion.div>
        </section>
    );
}
