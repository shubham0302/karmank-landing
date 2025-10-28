import { useEffect, useState } from "react";

const CountdownTimer: React.FC = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // trigger fade-in on mount
    const t = setTimeout(() => setVisible(true), 60);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="w-full flex items-center justify-center">
      <div
        aria-label="Coming Soon"
        className={`flex flex-col items-center justify-center space-y-4 px-6 py-8 rounded-2xl glass-card drop-shadow-lg transition-opacity duration-700 ease-out transform-gpu ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-3"
        }`}
        style={{
          // subtle cosmic gradient backdrop for the card (keeps theme)
          background:
            "linear-gradient(135deg, rgba(11,12,26,0.6), rgba(31,36,82,0.55))",
          backdropFilter: "blur(8px) saturate(120%)",
        }}
      >
        <h1 className="text-4xl sm:text-5xl !leading-normal md:text-6xl font-playfair font-extrabold tracking-wide text-gradient-cosmic">
          Coming Soon
        </h1>

        <p className="text-sm sm:text-base text-muted-foreground text-center max-w-xl">
          We’re preparing something cosmic ✨ — launching shortly. Join us again
          soon for the big reveal.
        </p>

        <div
          className="mt-2 w-20 h-1 rounded-full animate-glow"
          style={{
            // tiny animated glow bar (works even if animate-glow not defined)
            boxShadow: visible
              ? "0 0 18px rgba(138, 92, 255, 0.45), 0 0 36px rgba(59, 130, 246, 0.15)"
              : "none",
            transition: "box-shadow 800ms ease",
            background:
              "linear-gradient(90deg, rgba(138,92,255,1), rgba(59,130,246,1))",
          }}
        />
      </div>
    </div>
  );
};

export default CountdownTimer;
