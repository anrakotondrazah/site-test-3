"use client";

interface LogoProps {
  size?: "sm" | "md" | "lg";
  white?: boolean;
}

export default function Logo({ size = "md", white = true }: LogoProps) {
  const scales = { sm: 0.6, md: 1, lg: 1.4 };
  const scale = scales[size];
  const color = white ? "#FFFFFF" : "#00C5F2";

  return (
    <div className="flex items-center gap-3 select-none">
      {/* Pictogram - 4 petal/drop fluid asymmetric icon */}
      <svg
        width={Math.round(44 * scale)}
        height={Math.round(50 * scale)}
        viewBox="0 0 44 50"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Petal 1 - Top right (largest), drop shape ~45° right-upward */}
        <path
          d="M28 2 C34 2, 41 8, 39 16 C37 22, 30 24, 26 20 C22 16, 24 8, 28 2 Z"
          fill={color}
          transform="rotate(40, 32, 13)"
        />
        {/* Petal 2 - Central vertical, slightly curved left */}
        <path
          d="M20 4 C24 4, 27 11, 25 18 C23 24, 17 26, 14 21 C11 16, 14 8, 20 4 Z"
          fill={color}
          transform="rotate(-5, 19, 15)"
        />
        {/* Petal 3 - Medium, 45° left-downward */}
        <path
          d="M14 18 C18 14, 24 16, 23 22 C22 27, 16 30, 12 27 C8 24, 10 22, 14 18 Z"
          fill={color}
          transform="rotate(-40, 17, 23)"
        />
        {/* Petal 4 - Smallest, horizontal left pointing drop */}
        <path
          d="M8 32 C10 29, 16 30, 16 34 C16 37, 12 40, 8 38 C5 36, 6 34, 8 32 Z"
          fill={color}
          transform="rotate(-70, 12, 35)"
        />
        {/* Convergence curve base */}
        <path
          d="M10 42 C14 40, 22 36, 30 34 C36 32, 40 34, 41 38"
          stroke={color}
          strokeWidth="2.5"
          strokeLinecap="round"
          fill="none"
          opacity="0.7"
        />
      </svg>

      {/* Text block */}
      <div className="flex flex-col leading-none">
        {/* LOCAGESTION - Extra Bold, squircle O, low A bar */}
        <span
          style={{
            fontSize: `${Math.round(22 * scale)}px`,
            fontFamily: "'Space Grotesk', sans-serif",
            fontWeight: 800,
            color: color,
            letterSpacing: "-0.03em",
            lineHeight: 1,
          }}
        >
          LOCAGESTION
        </span>
        {/* LA SOLUTION GESTION - Light, wide tracking, offset start */}
        <span
          style={{
            fontSize: `${Math.round(7.5 * scale)}px`,
            fontFamily: "'Space Grotesk', sans-serif",
            fontWeight: 300,
            color: color,
            letterSpacing: "0.32em",
            lineHeight: 1,
            marginTop: `${Math.round(4 * scale)}px`,
            marginLeft: `${Math.round(26 * scale)}px`,
            opacity: 0.9,
          }}
        >
          LA SOLUTION GESTION
        </span>
      </div>
    </div>
  );
}
