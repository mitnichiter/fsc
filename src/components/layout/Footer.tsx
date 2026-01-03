import Link from "next/link";
import { Anchor, Mail, MapPin, Phone } from "lucide-react";

export function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-card border-t border-white/5 pt-16 pb-8">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

                    {/* Brand */}
                    <div className="space-y-4">
                        <div className="flex items-center gap-2">
                            <div className="p-2 rounded-full border border-primary/20 bg-primary/10">
                                <Anchor className="h-5 w-5 text-primary" />
                            </div>
                            <span className="text-xl font-bold text-foreground">Fantastic Boat Cruise</span>
                        </div>
                        <p className="text-muted-foreground leading-relaxed">
                            Experience the serene beauty of Alappuzha with our premium Shikara boat services.
                            Luxury, comfort, and unforgettable memories.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-foreground font-semibold mb-6">Quick Links</h3>
                        <ul className="space-y-3">
                            {[
                                { label: "Home", href: "/" },
                                { label: "Shikara Experience", href: "/shikara" },
                                { label: "Destinations", href: "/destinations" },
                                { label: "Booking", href: "/booking" },
                                { label: "Contact Us", href: "/contact" },
                            ].map((link) => (
                                <li key={link.label}>
                                    <Link
                                        href={link.href}
                                        className="text-muted-foreground hover:text-primary transition-colors"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-foreground font-semibold mb-6">Contact Us</h3>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3 text-muted-foreground">
                                <MapPin className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                                <span>
                                    Haneef, Baithussalaf<br />
                                    Pallathuruthy, Kannitta Jetty<br />
                                    Alappuzha - 688009, Kerala
                                </span>
                            </li>
                            <li className="flex items-center gap-3 text-muted-foreground">
                                <Phone className="h-5 w-5 text-primary shrink-0" />
                                <a href="tel:+918848851384" className="hover:text-primary transition-colors">
                                    +91 884 885 1384
                                </a>
                            </li>
                            <li className="flex items-center gap-3 text-muted-foreground">
                                <Mail className="h-5 w-5 text-primary shrink-0" />
                                <a href="mailto:info@fantasticboatcruise.com" className="hover:text-primary transition-colors">
                                    info@fantasticboatcruise.com
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Newsletter / CTA */}
                    <div>
                        <h3 className="text-foreground font-semibold mb-6">Book Your Trip</h3>
                        <p className="text-muted-foreground mb-4">
                            Ready for a magical journey through the backwaters?
                        </p>
                        <div className="flex flex-col gap-3">
                            <a
                                href="/booking"
                                className="inline-flex items-center justify-center h-10 px-4 py-2 bg-primary text-primary-foreground font-medium rounded-md hover:bg-primary/90 transition-colors"
                            >
                                Book Now
                            </a>
                            <a
                                href="https://wa.me/918848851384"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center h-10 px-4 py-2 border border-input bg-background hover:bg-accent hover:text-accent-foreground font-medium rounded-md transition-colors"
                            >
                                Chat on WhatsApp
                            </a>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-center items-center gap-4 text-sm text-muted-foreground">
                    <p>© {currentYear} Fantastic Boat Cruise. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
