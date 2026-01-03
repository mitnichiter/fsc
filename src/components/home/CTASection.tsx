"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { CalendarDays, MessageCircle } from "lucide-react";

export function CTASection() {
    return (
        <section className="py-24 relative overflow-hidden">
            {/* Background Gradient */}
            <div className="absolute inset-0 bg-primary/10 -z-10" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/20 blur-[120px] rounded-full pointer-events-none" />

            <div className="container px-4 mx-auto text-center relative z-10">
                <h2 className="text-4xl md:text-6xl font-bold mb-6 text-foreground tracking-tight">
                    Ready for your <span className="text-primary">Dream Cruise?</span>
                </h2>

                <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
                    Book your slot in advance to ensure availability. Experience the best of Alappuzha with Fantastic Boat Cruise.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <Link href="/booking">
                        <Button size="lg" className="h-14 px-8 text-lg bg-primary text-primary-foreground hover:bg-primary/90 shadow-xl shadow-primary/25">
                            <CalendarDays className="mr-2 h-5 w-5" />
                            Book Now
                        </Button>
                    </Link>
                    <a
                        href="https://wa.me/918848851384"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <Button size="lg" variant="outline" className="h-14 px-8 text-lg border-primary/20 bg-background/50 hover:bg-background/80 hover:text-primary">
                            <MessageCircle className="mr-2 h-5 w-5" />
                            Enquire on WhatsApp
                        </Button>
                    </a>
                </div>
            </div>
        </section>
    );
}
