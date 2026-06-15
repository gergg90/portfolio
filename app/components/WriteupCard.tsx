"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";

interface Writeup {
  title: string;
  date: string;
  tags: string[];
  difficulty: string;
  platform: string;
  file: string;
}

const difficultyColors: Record<string, string> = {
  Easy: "bg-primary/20 text-primary border-primary/30",
  Medium: "bg-accent/20 text-accent border-accent/30",
  Hard: "bg-destructive/20 text-destructive border-destructive/30",
};

const platformColors: Record<string, string> = {
  HackTheBox: "bg-primary/20 text-primary border-primary/30",
  TryHackMe: "bg-accent/20 text-accent border-accent/30",
  VulnHub: "bg-muted-foreground/20 text-muted-foreground border-muted-foreground/30",
};

export default function WriteupCard({ writeup }: { writeup: Writeup }) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.3, ease: [0.165, 0.84, 0.44, 1] }}
    >
      <Card className="group border-border/50 bg-card/50 backdrop-blur-sm transition-all duration-300 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5">
        <CardHeader className="flex flex-col gap-3 pb-2">
          <div className="flex flex-wrap gap-2">
            <Badge
              variant="outline"
              className={platformColors[writeup.platform] || "bg-muted text-muted-foreground"}
            >
              {writeup.platform}
            </Badge>
            <Badge
              variant="outline"
              className={difficultyColors[writeup.difficulty] || "bg-muted text-muted-foreground"}
            >
              {writeup.difficulty}
            </Badge>
          </div>
          <h3 className="text-lg font-semibold text-foreground leading-tight">
            {writeup.title}
          </h3>
        </CardHeader>
        <CardContent className="flex flex-col gap-3">
          <div className="flex flex-wrap gap-1.5">
            {writeup.tags.map((tag) => (
              <Badge
                key={tag}
                variant="secondary"
                className="bg-muted/50 text-muted-foreground text-xs"
              >
                {tag}
              </Badge>
            ))}
          </div>
          <div className="flex items-center justify-between pt-2 border-t border-border/30">
            <span className="font-mono text-xs text-muted-foreground">
              {writeup.date}
            </span>
            <motion.a
              href={writeup.file}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ x: 2 }}
              className="inline-flex items-center gap-1.5 text-sm text-primary hover:text-primary/80 transition-colors"
            >
              Leer
              <ExternalLink className="size-3.5" />
            </motion.a>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
