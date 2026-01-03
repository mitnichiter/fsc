"use client";

import { motion } from "framer-motion";
import { Ship, ShieldCheck, Sunset, Armchair } from "lucide-react";

const features = [
    {
        icon: Ship,
        title: "Premium Shikara",
        description: "Our boats offers a luxurious open-air experience with comfortable seating.",
    },
    {
        icon: ShieldCheck,
        title: "Safe & Secure",
        description: "Expertly maintained vessels with experienced crew ensuring your complete safety.",
    },
    {
        icon: Sunset,
        title: "Magical Views",
        description: "Perfectly timed cruises to catch the mesmerizing Alappuzha sunsets.",
    },
    {
        icon: Armchair,
        title: "Comfort First",
        description: "Relax in our plush seating designed for long, leisurely journeys.",
    },
];

export function FeaturesSection() {
    return (
        <section className="py-24 bg-card text-card-foreground">
            <div className="container px-4 mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6 text-foreground">Why Choose Us?</h2>
                    <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            className="p-6 rounded-2xl bg-white/5 border border-white/5 hover:border-primary/50 transition-colors group"
                        >
                            <div className="mb-6 inline-flex p-4 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                                <feature.icon className="w-8 h-8" />
                            </div>
                            <h3 className="text-xl font-bold mb-3 text-foreground">{feature.title}</h3>
                            <p className="text-muted-foreground leading-relaxed">
                                {feature.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
