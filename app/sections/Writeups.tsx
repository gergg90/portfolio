"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionWrapper from "../components/SectionWrapper";
import SectionHeader from "../components/SectionHeader";
import WriteupCard from "../components/WriteupCard";
import { Badge } from "@/components/ui/badge";

interface Writeup {
  title: string;
  date: string;
  tags: string[];
  difficulty: string;
  platform: string;
  file: string;
}

const platforms = ["All", "HackTheBox", "TryHackMe", "VulnHub"];

export default function Writeups() {
  const [writeups, setWriteups] = useState<Writeup[]>([]);
  const [filter, setFilter] = useState("All");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/writeups/index.json")
      .then((res) => res.json())
      .then((data: Writeup[]) => {
        setWriteups(data);
        setLoading(false);
      })
      .catch(() => {
        setWriteups([]);
        setLoading(false);
      });
  }, []);

  const filtered =
    filter === "All"
      ? writeups
      : writeups.filter((w) => w.platform === filter);

  return (
    <SectionWrapper id="writeups">
      <div className="flex flex-col gap-6">
        <SectionHeader 
          title="Writeups" 
          subtitle="Detailed walkthroughs of CTF challenges and vulnerable machines."
        />

        <div className="flex flex-wrap gap-2">
          {platforms.map((p) => (
            <motion.button
              key={p}
              onClick={() => setFilter(p)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`rounded-full px-4 py-2 text-sm font-medium transition-all duration-300 ${
                filter === p
                  ? "bg-primary text-primary-foreground shadow-lg shadow-primary/25"
                  : "bg-muted/50 text-muted-foreground hover:bg-primary/20 hover:text-primary"
              }`}
            >
              {p}
            </motion.button>
          ))}
        </div>

        {loading ? (
          <div className="flex items-center justify-center py-20">
            <div className="font-mono text-muted-foreground">
              Cargando writeups...
            </div>
          </div>
        ) : filtered.length === 0 ? (
          <div className="flex items-center justify-center py-20">
            <div className="font-mono text-muted-foreground">
              No se encontraron writeups.
            </div>
          </div>
        ) : (
          <motion.div 
            layout
            className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"
          >
            <AnimatePresence mode="popLayout">
              {filtered.map((writeup, index) => (
                <motion.div
                  key={writeup.title}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ 
                    duration: 0.4, 
                    delay: index * 0.05,
                    ease: [0.165, 0.84, 0.44, 1] 
                  }}
                >
                  <WriteupCard writeup={writeup} />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        )}
      </div>
    </SectionWrapper>
  );
}
