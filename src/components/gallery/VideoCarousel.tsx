"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Play, Pause } from "lucide-react";
import Image from "next/image";

interface Video {
    id: string;
    title: string;
    thumbnail: string;
    duration: string;
    videoUrl: string;
}

interface VideoCarouselProps {
    videos: Video[];
}

export function VideoCarousel({ videos }: VideoCarouselProps) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false);
    const videoRef = useRef<HTMLVideoElement>(null);

    useEffect(() => {
        setIsPlaying(false);
    }, [currentIndex]);

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) % videos.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev - 1 + videos.length) % videos.length);
    };

    const togglePlay = () => {
        if (videoRef.current) {
            if (isPlaying) {
                videoRef.current.pause();
            } else {
                videoRef.current.play();
            }
            setIsPlaying(!isPlaying);
        }
    };

    return (
        <div className="relative w-full max-w-5xl mx-auto px-4">
            {/* Main Video Display */}
            <div className="relative aspect-video rounded-3xl overflow-hidden shadow-2xl border border-white/10 bg-black mb-8 group">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={currentIndex}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5 }}
                        className="absolute inset-0"
                    >
                        {!isPlaying && (
                            <>
                                <Image
                                    src={videos[currentIndex].thumbnail}
                                    alt={videos[currentIndex].title}
                                    fill
                                    className="object-cover opacity-60 group-hover:opacity-40 transition-opacity duration-500"
                                />
                                <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center cursor-pointer" onClick={togglePlay}>
                                    <div className="w-20 h-20 rounded-full bg-primary/90 text-primary-foreground flex items-center justify-center pl-1 mb-4 shadow-lg scale-100 group-hover:scale-110 transition-transform duration-300">
                                        <Play size={32} fill="currentColor" />
                                    </div>
                                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 delay-100">
                                        {videos[currentIndex].title}
                                    </h3>
                                    <span className="text-white/80 text-sm translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 delay-150">
                                        Duration: {videos[currentIndex].duration}
                                    </span>
                                </div>
                            </>
                        )}

                        <video
                            ref={videoRef}
                            src={videos[currentIndex].videoUrl}
                            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${isPlaying ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
                            controls={isPlaying}
                            onEnded={() => setIsPlaying(false)}
                            onPause={() => setIsPlaying(false)}
                            onPlay={() => setIsPlaying(true)}
                        />
                    </motion.div>
                </AnimatePresence>

                {/* Navigation Buttons for Main Display (Desktop) - Only show when not playing */}
                {!isPlaying && (
                    <>
                        <button
                            onClick={(e) => { e.stopPropagation(); prevSlide(); }}
                            className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/50 text-white hover:bg-primary hover:text-primary-foreground transition-colors backdrop-blur-sm opacity-0 group-hover:opacity-100 hidden md:block z-10"
                        >
                            <ChevronLeft size={24} />
                        </button>
                        <button
                            onClick={(e) => { e.stopPropagation(); nextSlide(); }}
                            className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/50 text-white hover:bg-primary hover:text-primary-foreground transition-colors backdrop-blur-sm opacity-0 group-hover:opacity-100 hidden md:block z-10"
                        >
                            <ChevronRight size={24} />
                        </button>
                    </>
                )}
            </div>

            {/* Thumbnails / Indicators */}
            <div className="flex gap-4 overflow-x-auto pb-4 md:grid md:grid-cols-4 md:gap-4 md:overflow-visible">
                {videos.map((video, index) => (
                    <button
                        key={video.id}
                        onClick={() => setCurrentIndex(index)}
                        className={`relative flex-shrink-0 w-40 md:w-auto h-24 rounded-lg overflow-hidden border-2 transition-all duration-300 ${index === currentIndex ? "border-primary scale-105 shadow-md" : "border-transparent opacity-70 hover:opacity-100"
                            }`}
                    >
                        <Image
                            src={video.thumbnail}
                            alt={video.title}
                            fill
                            className="object-cover"
                        />
                        <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                            {index === currentIndex && !isPlaying && <Play size={20} className="text-white" fill="currentColor" />}
                            {index === currentIndex && isPlaying && <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />}
                        </div>

                    </button>
                ))}
            </div>
        </div>
    );
}
