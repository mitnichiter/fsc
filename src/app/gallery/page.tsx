"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { VideoCarousel } from "@/components/gallery/VideoCarousel";

export default function GalleryPage() {
    const videos = [
        {
            id: "v1",
            title: "Sunrise at Backwaters",
            thumbnail: "/hero.jpg",
            duration: "0:30",
            videoUrl: "https://video.wixstatic.com/video/7be4ec_6fa4a30acaed47ac94a3773a6e85d940/1080p/mp4/file.mp4"
        },
        {
            id: "v2",
            title: "Shikara Boat Tour",
            thumbnail: "/r1.jpg",
            duration: "1:00",
            videoUrl: "https://video.wixstatic.com/video/7be4ec_c313ed2f496f4702a3c4dc2bdf722543/1080p/mp4/file.mp4"
        },
        {
            id: "v3",
            title: "Kuttanad Boat Cruise",
            thumbnail: "/p3.jpg",
            duration: "1:45",
            videoUrl: "https://video.wixstatic.com/video/7be4ec_ceb5c059e8034ec4935de606d7846b95/1080p/mp4/file.mp4"
        },
        {
            id: "v4",
            title: "Kainakary Alappuzha",
            thumbnail: "/p1.jpg",
            duration: "2:10",
            videoUrl: "https://video.wixstatic.com/video/7be4ec_d52f4a52294841bd9507b159e1354722/1080p/mp4/file.mp4"
        }
    ];

    const galleryImages = [
        "/p1.jpg",
        "/r1.jpg",
        "/p3.jpg",
        "/p2.jpg",
        "/hero.jpg"
    ];

    return (
        <div className="min-h-screen pt-24 pb-16">
            <div className="container mx-auto px-4">
                {/* Header Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-16"
                >
                    <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
                        Gallery
                    </h1>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        Experience the beauty of Alleppey through our lens. From serene backwaters to vibrant village life.
                    </p>
                </motion.div>

                {/* Video Carousel Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-24"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
                        Motion <span className="text-primary">Memories</span>
                    </h2>

                    <VideoCarousel videos={videos} />
                </motion.div>

                {/* Image Grid Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12">
                        Captured <span className="text-primary">Moments</span>
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {galleryImages.map((src, index) => (
                            <motion.div
                                key={index}
                                whileHover={{ scale: 1.02 }}
                                className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg"
                            >
                                <Image
                                    src={src}
                                    alt={`Gallery Image ${index + 1}`}
                                    fill
                                    className="object-cover hover:scale-110 transition-transform duration-500"
                                />
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
