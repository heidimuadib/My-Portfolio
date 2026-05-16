"use client";
import { useEffect } from "react";

export default function AmbientBackground() {
  useEffect(() => {
    const onMouseMove = (e) => {
      const orbs = document.querySelectorAll(".ambient-orb");
      const x = (e.clientX / window.innerWidth - 0.5) * 2;
      const y = (e.clientY / window.innerHeight - 0.5) * 2;
      orbs.forEach((orb, i) => {
        const speed = (i + 1) * 10;
        orb.style.transform = `translate(${x * speed}px, ${y * speed}px)`;
      });
    };

    document.addEventListener("mousemove", onMouseMove);
    return () => document.removeEventListener("mousemove", onMouseMove);
  }, []);

  return (
    <>
      <div className="ambient-bg">
        <div className="ambient-orb"></div>
        <div className="ambient-orb"></div>
        <div className="ambient-orb"></div>
      </div>
      <div className="grid-overlay"></div>
    </>
  );
}
