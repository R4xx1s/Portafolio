"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import type { MediaItem } from "@/lib/types";
import VideoPlayer from "@/components/VideoPlayer";

interface CarouselProps {
  items: MediaItem[];
  alt: string;
}

export default function Carousel({ items, alt }: CarouselProps) {
  const [index, setIndex] = useState(0);

  const prev = () => setIndex((i) => (i === 0 ? items.length - 1 : i - 1));
  const next = () => setIndex((i) => (i === items.length - 1 ? 0 : i + 1));

  if (items.length === 0) return null;

  const item = items[index];

  return (
    <div className="relative w-full aspect-video rounded-xl overflow-hidden mb-4 bg-black">
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.25 }}
          className="absolute inset-0"
        >
          {item.type === "image" ? (
            <Image
              src={item.src}
              alt={`${alt} - ${index + 1}`}
              fill
              className="object-cover"
            />
          ) : item.type === "video" ? (
            <iframe
              src={item.src}
              title={`${alt} - ${index + 1}`}
              className="absolute inset-0 w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          ) : (
            <VideoPlayer src={item.src} />
          )}
        </motion.div>
      </AnimatePresence>

      {items.length > 1 && (
        <>
          <button
            onClick={prev}
            className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center rounded-full bg-[rgba(0,0,0,0.5)] text-white text-sm hover:bg-[rgba(0,0,0,0.7)] transition-colors z-10"
            aria-label="Anterior"
          >
            ◀
          </button>
          <button
            onClick={next}
            className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center rounded-full bg-[rgba(0,0,0,0.5)] text-white text-sm hover:bg-[rgba(0,0,0,0.7)] transition-colors z-10"
            aria-label="Siguiente"
          >
            ▶
          </button>

          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-2 z-10">
            {items.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                className={`w-2 h-2 rounded-full transition-all ${
                  i === index
                    ? "bg-white w-4"
                    : "bg-[rgba(255,255,255,0.4)] hover:bg-[rgba(255,255,255,0.6)]"
                }`}
                aria-label={`Elemento ${i + 1}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
