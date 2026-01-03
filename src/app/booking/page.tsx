"use client";

import { useState } from "react";
import { MessageCircle, User, Calendar, Users, Ship, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function BookingPage() {
    const [formData, setFormData] = useState({
        name: "",
        date: "",
        guests: "2",
        package: "Day Cruise",
        notes: ""
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleWhatsAppRedirect = (e: React.FormEvent) => {
        e.preventDefault();

        const phoneNumber = "918848851384";
        const message = `Hello, I would like to book a Shikara cruise.
--------------------------------
*Name:* ${formData.name}
*Date:* ${formData.date}
*Guests:* ${formData.guests}
*Package:* ${formData.package}
--------------------------------
*Notes:* ${formData.notes || "None"}

Is this slot available?`;

        const encodedMessage = encodeURIComponent(message);
        const url = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

        window.open(url, '_blank');
    };

    const inputClasses = "w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-foreground focus:outline-none focus:border-primary/50 transition-colors placeholder:text-muted-foreground/50";
    const labelClasses = "block text-sm font-medium text-muted-foreground mb-2 ml-1";

    return (
        <div className="min-h-screen bg-background pt-24 pb-20">
            <div className="container mx-auto px-4">

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">

                    {/* Left Column: Booking Form */}
                    <div className="lg:col-span-2">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="bg-card p-6 md:p-8 rounded-3xl border border-white/5 shadow-xl"
                        >
                            <h2 className="text-2xl font-bold text-foreground mb-6">Send Booking Request</h2>
                            <form onSubmit={handleWhatsAppRedirect} className="space-y-6">

                                {/* Name */}
                                <div>
                                    <label htmlFor="name" className={labelClasses}>
                                        <div className="flex items-center gap-2">
                                            <User size={16} /> Full Name
                                        </div>
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        required
                                        placeholder="Your Name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        className={inputClasses}
                                    />
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    {/* Date */}
                                    <div>
                                        <label htmlFor="date" className={labelClasses}>
                                            <div className="flex items-center gap-2">
                                                <Calendar size={16} /> Travel Date
                                            </div>
                                        </label>
                                        <input
                                            type="date"
                                            id="date"
                                            name="date"
                                            required
                                            min={new Date().toISOString().split('T')[0]}
                                            value={formData.date}
                                            onChange={handleChange}
                                            className={`${inputClasses} [color-scheme:dark]`}
                                        />
                                    </div>

                                    {/* Guests */}
                                    <div>
                                        <label htmlFor="guests" className={labelClasses}>
                                            <div className="flex items-center gap-2">
                                                <Users size={16} /> Number of Guests
                                            </div>
                                        </label>
                                        <input
                                            type="number"
                                            id="guests"
                                            name="guests"
                                            required
                                            min="1"
                                            max="20"
                                            value={formData.guests}
                                            onChange={handleChange}
                                            className={inputClasses}
                                        />
                                    </div>
                                </div>

                                {/* Package */}
                                <div>
                                    <label htmlFor="package" className={labelClasses}>
                                        <div className="flex items-center gap-2">
                                            <Ship size={16} /> Preferred Package
                                        </div>
                                    </label>
                                    <select
                                        id="package"
                                        name="package"
                                        value={formData.package}
                                        onChange={handleChange}
                                        className={`${inputClasses} appearance-none cursor-pointer`}
                                        style={{ backgroundImage: 'none' }} // Removing default arrow formatting
                                    >
                                        <option value="Sunrise Cruise (6 AM - 9 AM)" className="bg-card text-foreground">Sunrise Cruise (6 AM - 9 AM)</option>
                                        <option value="Day Cruise (Hourly)" className="bg-card text-foreground">Day Cruise (Hourly Basis)</option>
                                        <option value="Sunset Cruise (3 PM - 6 PM)" className="bg-card text-foreground">Sunset Cruise (3 PM - 6 PM)</option>
                                        <option value="Full Day Package" className="bg-card text-foreground">Full Day Experience</option>
                                        <option value="Custom / Other" className="bg-card text-foreground">Custom / Other</option>
                                    </select>
                                </div>

                                {/* Notes */}
                                <div>
                                    <label htmlFor="notes" className={labelClasses}>
                                        <div className="flex items-center gap-2">
                                            <FileText size={16} /> Special Requests / Notes
                                        </div>
                                    </label>
                                    <textarea
                                        id="notes"
                                        name="notes"
                                        rows={3}
                                        placeholder="Any specific requests?"
                                        value={formData.notes}
                                        onChange={handleChange}
                                        className={inputClasses}
                                    />
                                </div>

                                <Button
                                    type="submit"
                                    className="w-full h-14 text-lg font-medium bg-[#25D366] hover:bg-[#128C7E] text-white transition-all transform hover:scale-[1.02]"
                                >
                                    <MessageCircle className="mr-2 w-6 h-6" /> Book via WhatsApp
                                </Button>

                                <p className="text-center text-sm text-muted-foreground mt-4">
                                    This will open WhatsApp with your pre-filled details.
                                </p>

                            </form>
                        </motion.div>
                    </div>

                    {/* Right Column: Information Boxes */}
                    <div className="space-y-6">

                        {/* Box 1: Alternative Contact */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.2 }}
                            className="bg-card p-6 rounded-3xl border border-white/5"
                        >
                            <h3 className="text-lg font-bold text-foreground mb-4 flex items-center gap-2">
                                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/20 text-primary text-sm">1</span>
                                Need to Call?
                            </h3>
                            <p className="text-muted-foreground text-sm mb-4">
                                For urgent confirmations or if you prefer to speak to us directly.
                            </p>
                            <a href="tel:+918848851384">
                                <Button variant="outline" className="w-full h-12 border-primary/20 hover:bg-primary/10 hover:text-primary">
                                    Call +91 884 885 1384
                                </Button>
                            </a>
                        </motion.div>

                        {/* Box 2: Payment Info */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.3 }}
                            className="bg-card p-6 rounded-3xl border border-white/5"
                        >
                            <h3 className="text-lg font-bold text-foreground mb-4 flex items-center gap-2">
                                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/20 text-primary text-sm">2</span>
                                Bank Details
                            </h3>
                            <p className="text-muted-foreground text-sm mb-4">
                                Confirm booking via GPay or Bank Transfer (Token advance required).
                            </p>
                            <div className="bg-background/40 p-4 rounded-xl border border-white/5 text-sm space-y-2 text-muted-foreground">
                                <p><strong className="text-foreground">Name:</strong> Haneef. A</p>
                                <p><strong className="text-foreground">Ac/No:</strong> 0722101057404</p>
                                <p><strong className="text-foreground">IFSC:</strong> CNRB0000722</p>
                                <p><strong className="text-foreground">Bank:</strong> Canara Bank</p>
                            </div>
                        </motion.div>

                        {/* Box 3: What's Next */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.4 }}
                            className="bg-card p-6 rounded-3xl border border-white/5"
                        >
                            <h3 className="text-lg font-bold text-foreground mb-4 flex items-center gap-2">
                                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/20 text-primary text-sm">3</span>
                                After Booking
                            </h3>
                            <ul className="text-sm text-muted-foreground space-y-3">
                                <li className="flex gap-2">
                                    <span className="text-primary mt-0.5">•</span>
                                    <span>Share payment screenshot on WhatsApp.</span>
                                </li>
                                <li className="flex gap-2">
                                    <span className="text-primary mt-0.5">•</span>
                                    <span>You'll receive the Google Map location & driver contact.</span>
                                </li>
                            </ul>
                        </motion.div>

                    </div>
                </div>
            </div>
        </div>
    );
}
