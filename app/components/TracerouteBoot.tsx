"use client";

import { useEffect, useState } from "react";
import { useReducedMotion } from "framer-motion";

const COMMAND = "traceroute germain.gutierrez";
// Saltos de demostración: son decoración de la traza, no datos de red reales.
const HOPS = [
  "1  gw.redes.lan        1.204 ms",
  "2  fw.seguridad.lan    3.871 ms",
  "3  agent.ia.dev        7.412 ms",
  "4  germain.gutierrez   9.003 ms  destino",
];
const SEEN_KEY = "traceroute-boot-v1";

function readSeen() {
  try {
    return sessionStorage.getItem(SEEN_KEY) === "1";
  } catch {
    return false;
  }
}

function markSeen() {
  try {
    sessionStorage.setItem(SEEN_KEY, "1");
  } catch {
    // Sin almacenamiento, la animación se repite en cada carga.
  }
}

/** Se teclea una vez por sesión. En recargas y con reduced-motion muestra el log completo. */
export default function TracerouteBoot() {
  const reduce = useReducedMotion();
  const [typed, setTyped] = useState(0);
  const [hops, setHops] = useState(0);

  useEffect(() => {
    if (readSeen() || reduce) {
      const t = setTimeout(() => {
        setTyped(COMMAND.length);
        setHops(HOPS.length);
      }, 0);
      return () => clearTimeout(t);
    }

    let t: ReturnType<typeof setTimeout>;
    let c = 0;
    let h = 0;

    const showHop = () => {
      h += 1;
      setHops(h);
      if (h < HOPS.length) t = setTimeout(showHop, 110);
      else markSeen();
    };

    const typeChar = () => {
      c += 1;
      setTyped(c);
      t = c < COMMAND.length ? setTimeout(typeChar, 18) : setTimeout(showHop, 160);
    };

    t = setTimeout(typeChar, 350);
    return () => clearTimeout(t);
  }, [reduce]);

  const finished = hops >= HOPS.length;

  return (
    <div aria-hidden className="font-mono text-[11px] leading-relaxed tracking-normal text-muted-foreground sm:text-xs">
      <p className="whitespace-pre text-foreground">
        {`$ ${COMMAND.slice(0, typed)}`}
        {!finished && <span className="caret" />}
      </p>
      {HOPS.slice(0, hops).map((line, i) => (
        <p
          key={line}
          className={`whitespace-pre ${i === HOPS.length - 1 ? "text-primary-ink" : ""}`}
        >
          {line}
        </p>
      ))}
    </div>
  );
}
