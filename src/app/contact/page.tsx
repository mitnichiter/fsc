"use client";

import { Mail, MapPin, Phone, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ContactPage() {
    return (
        <div className="min-h-screen bg-background pt-24 pb-20">
            <div className="container mx-auto px-4">

                <div className="text-center mb-16 max-w-2xl mx-auto">
                    <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Get in Touch</h1>
                    <p className="text-lg text-muted-foreground">
                        Have questions about our Shikara cruises? We're here to help you plan your perfect Alappuzha experience.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">

                    {/* Contact Info Card */}
                    <div className="space-y-8 bg-card p-8 rounded-3xl border border-white/5">
                        <div>
                            <h2 className="text-2xl font-bold text-foreground mb-6">Contact Information</h2>
                            <div className="space-y-6">

                                <div className="flex items-start gap-4">
                                    <div className="p-3 rounded-full bg-primary/10 text-primary shrink-0">
                                        <MapPin className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-foreground mb-1">Address</h3>
                                        <p className="text-muted-foreground leading-relaxed">
                                            Haneef, Baithussalaf<br />
                                            Pallathuruthy, Kannitta Jetty<br />
                                            Alappuzha - 688009, Kerala, India
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-4">
                                    <div className="p-3 rounded-full bg-primary/10 text-primary shrink-0">
                                        <Phone className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-foreground mb-1">Phone</h3>
                                        <a href="tel:+918848851384" className="text-muted-foreground hover:text-primary transition-colors block">
                                            +91 884 885 1384
                                        </a>
                                    </div>
                                </div>

                                <div className="flex items-center gap-4">
                                    <div className="p-3 rounded-full bg-primary/10 text-primary shrink-0">
                                        <Mail className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-foreground mb-1">Email</h3>
                                        <a href="mailto:info@fantasticboatcruise.com" className="text-muted-foreground hover:text-primary transition-colors block">
                                            info@fantasticboatcruise.com
                                        </a>
                                        <a href="mailto:puthuvelhaneef@gmail.com" className="text-muted-foreground hover:text-primary transition-colors block mt-1">
                                            puthuvelhaneef@gmail.com
                                        </a>
                                    </div>
                                </div>

                            </div>
                        </div>

                        <div className="pt-6 border-t border-white/10">
                            <h3 className="font-semibold text-foreground mb-4">Quick Chat</h3>
                            <a
                                href="https://wa.me/918848851384"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Button className="w-full h-12 bg-[#25D366] hover:bg-[#128C7E] text-white font-medium">
                                    <MessageCircle className="mr-2 w-5 h-5" />
                                    Chat on WhatsApp
                                </Button>
                            </a>
                        </div>
                    </div>

                    {/* Simple Inquiry Form */}
                    <div className="bg-card p-8 rounded-3xl border border-white/5">
                        <h2 className="text-2xl font-bold text-foreground mb-6">Send a Message</h2>
                        <form className="space-y-4">
                            <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <label htmlFor="name" className="text-sm font-medium text-foreground">Name</label>
                                    <input type="text" id="name" className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50" placeholder="John Doe" />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="phone" className="text-sm font-medium text-foreground">Phone</label>
                                    <input type="tel" id="phone" className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50" placeholder="+91..." />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="email" className="text-sm font-medium text-foreground">Email</label>
                                <input type="email" id="email" className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50" placeholder="john@example.com" />
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="message" className="text-sm font-medium text-foreground">Message</label>
                                <textarea id="message" className="flex min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50" placeholder="I'm interested in..." />
                            </div>
                            <Button type="submit" className="w-full bg-primary text-primary-foreground hover:bg-primary/90 mt-2">
                                Send Message
                            </Button>
                        </form>
                    </div>

                </div>
            </div>
        </div>
    );
}
