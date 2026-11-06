"use client";

import { motion } from "framer-motion";

/* Realistic SVG product shots for the sample MyCoffee menu cards */

type DrinkProps = { reduce: boolean | null };

function Steam({ reduce, xs, top, prefix }: DrinkProps & { xs: number[]; top: number; prefix: string }) {
  return (
    <>
      <defs>
        <linearGradient id={`${prefix}-steam`} x1="0" x2="0" y1="1" y2="0">
          <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.75" />
          <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
        </linearGradient>
      </defs>
      {xs.map((x, i) => (
        <motion.path
          key={x}
          d={`M${x} ${top} C${x - 7} ${top - 12} ${x + 7} ${top - 22} ${x} ${top - 34} C${x - 5} ${top - 42} ${x + 4} ${top - 50} ${x} ${top - 56}`}
          stroke={`url(#${prefix}-steam)`}
          strokeWidth="5"
          strokeLinecap="round"
          fill="none"
          style={{ filter: "blur(1.5px)" }}
          initial={{ opacity: 0 }}
          animate={reduce ? { opacity: 0.45 } : { opacity: [0, 0.8, 0], y: [6, -6, -16] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeOut", delay: i * 0.8 }}
        />
      ))}
    </>
  );
}

/* Ceylon Espresso — demitasse with dark crema */
export function EspressoShot({ reduce }: DrinkProps) {
  return (
    <svg viewBox="0 0 160 140" className="w-full h-full overflow-visible">
      <defs>
        <radialGradient id="es-saucer" cx="50%" cy="35%" r="65%">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="75%" stopColor="#E9E3DA" />
          <stop offset="100%" stopColor="#BDB2A4" />
        </radialGradient>
        <linearGradient id="es-body" x1="0" x2="1">
          <stop offset="0%" stopColor="#C9C0B4" />
          <stop offset="25%" stopColor="#FFFFFF" />
          <stop offset="60%" stopColor="#F1ECE5" />
          <stop offset="100%" stopColor="#A89D8F" />
        </linearGradient>
        <radialGradient id="es-crema" cx="40%" cy="40%" r="65%">
          <stop offset="0%" stopColor="#C78A55" />
          <stop offset="50%" stopColor="#8A4F2A" />
          <stop offset="100%" stopColor="#3A2014" />
        </radialGradient>
      </defs>
      <Steam reduce={reduce} xs={[70, 88]} top={62} prefix="es" />
      <ellipse cx="80" cy="122" rx="62" ry="12" fill="#000" opacity="0.28" />
      <ellipse cx="80" cy="116" rx="62" ry="15" fill="url(#es-saucer)" />
      <ellipse cx="80" cy="114" rx="38" ry="8" fill="#DCD3C7" />
      <path d="M114 80 C138 78 138 106 112 104" stroke="#E2D9CE" strokeWidth="9" fill="none" strokeLinecap="round" />
      <path d="M46 70 L114 70 C113 96 104 112 80 113 C56 112 47 96 46 70 Z" fill="url(#es-body)" />
      <path d="M54 78 C55 96 62 105 70 109" stroke="#FFFFFF" strokeWidth="3.5" fill="none" opacity="0.8" strokeLinecap="round" />
      <ellipse cx="80" cy="70" rx="34" ry="9" fill="#F7F3EE" />
      <ellipse cx="80" cy="71" rx="29" ry="6.5" fill="url(#es-crema)" />
      <ellipse cx="72" cy="69" rx="8" ry="1.6" fill="#E6B98A" opacity="0.55" />
      {/* Spoon */}
      <path d="M30 118 L60 110" stroke="#B9B2A8" strokeWidth="3" strokeLinecap="round" />
      <ellipse cx="26" cy="119" rx="7" ry="3.5" fill="#CFC9C0" transform="rotate(-15 26 119)" />
    </svg>
  );
}

/* Cinnamon Cappuccino — wide cup, foam dusted with cinnamon, a stick on the saucer */
export function CinnamonCappuccino({ reduce }: DrinkProps) {
  const dust = [
    [66, 66], [74, 70], [82, 64], [90, 69], [98, 66], [70, 74], [86, 75], [94, 73], [78, 68], [102, 71], [62, 70], [80, 72],
  ];
  return (
    <svg viewBox="0 0 160 140" className="w-full h-full overflow-visible">
      <defs>
        <radialGradient id="cp-saucer" cx="50%" cy="35%" r="65%">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="75%" stopColor="#ECE6DE" />
          <stop offset="100%" stopColor="#C2B7A9" />
        </radialGradient>
        <linearGradient id="cp-body" x1="0" x2="1">
          <stop offset="0%" stopColor="#CDC4B8" />
          <stop offset="22%" stopColor="#FFFFFF" />
          <stop offset="58%" stopColor="#F3EEE7" />
          <stop offset="100%" stopColor="#ADA294" />
        </linearGradient>
        <radialGradient id="cp-foam" cx="45%" cy="40%" r="60%">
          <stop offset="0%" stopColor="#FFF8EE" />
          <stop offset="70%" stopColor="#EED9BE" />
          <stop offset="100%" stopColor="#B98556" />
        </radialGradient>
        <linearGradient id="cp-stick" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="#A35A2C" />
          <stop offset="50%" stopColor="#7A3E1B" />
          <stop offset="100%" stopColor="#4E2610" />
        </linearGradient>
      </defs>
      <Steam reduce={reduce} xs={[68, 80, 92]} top={56} prefix="cp" />
      <ellipse cx="80" cy="124" rx="68" ry="12" fill="#000" opacity="0.28" />
      <ellipse cx="80" cy="118" rx="68" ry="16" fill="url(#cp-saucer)" />
      <ellipse cx="80" cy="116" rx="44" ry="9" fill="#DED5C9" />
      <path d="M122 76 C146 74 146 104 120 102" stroke="#E4DCD1" strokeWidth="9" fill="none" strokeLinecap="round" />
      <path d="M36 66 L124 66 C122 96 110 114 80 115 C50 114 38 96 36 66 Z" fill="url(#cp-body)" />
      <path d="M46 74 C47 94 56 106 66 111" stroke="#FFFFFF" strokeWidth="4" fill="none" opacity="0.8" strokeLinecap="round" />
      <ellipse cx="80" cy="66" rx="44" ry="11" fill="#F7F3EE" />
      <ellipse cx="80" cy="67" rx="39" ry="8.5" fill="url(#cp-foam)" />
      {dust.map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r={i % 3 === 0 ? 1.4 : 0.9} fill="#8A4A22" opacity="0.75" />
      ))}
      {/* Cinnamon stick */}
      <motion.g
        animate={reduce ? undefined : { rotate: [0, -2, 0] }}
        style={{ transformOrigin: "40px 122px" }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      >
        <rect x="18" y="117" width="46" height="7" rx="3.5" fill="url(#cp-stick)" transform="rotate(-10 40 120)" />
        <path d="M20 119 L62 112" stroke="#C9773F" strokeWidth="1" opacity="0.6" />
      </motion.g>
      {/* Star anise */}
      <g transform="translate(130 122)">
        {[0, 45, 90, 135, 180, 225, 270, 315].map((a) => (
          <ellipse key={a} cx="0" cy="-5" rx="2.2" ry="5" fill="#6B3418" transform={`rotate(${a})`} />
        ))}
        <circle r="2" fill="#3A1A0B" />
      </g>
    </svg>
  );
}

/* Iced Kithul Latte — tall glass, layered coffee & milk, ice, straw */
export function IcedLatte({ reduce }: DrinkProps) {
  const ice = [
    { x: 64, y: 34, r: -12 },
    { x: 84, y: 30, r: 14 },
    { x: 74, y: 48, r: 6 },
  ];
  return (
    <svg viewBox="0 0 160 140" className="w-full h-full overflow-visible">
      <defs>
        <linearGradient id="il-drink" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="#F3E6D3" />
          <stop offset="30%" stopColor="#E3C7A2" />
          <stop offset="55%" stopColor="#A8693A" />
          <stop offset="100%" stopColor="#4A2614" />
        </linearGradient>
        <linearGradient id="il-glass" x1="0" x2="1">
          <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.55" />
          <stop offset="18%" stopColor="#FFFFFF" stopOpacity="0.12" />
          <stop offset="80%" stopColor="#FFFFFF" stopOpacity="0.05" />
          <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0.45" />
        </linearGradient>
        <linearGradient id="il-ice" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.95" />
          <stop offset="100%" stopColor="#DCEBF2" stopOpacity="0.55" />
        </linearGradient>
        <clipPath id="il-clip">
          <path d="M52 22 L108 22 L102 122 C101 127 98 129 94 129 L66 129 C62 129 59 127 58 122 Z" />
        </clipPath>
      </defs>
      <ellipse cx="80" cy="132" rx="38" ry="6" fill="#000" opacity="0.3" />

      {/* Straw (behind glass front) */}
      <path d="M92 4 L98 -10 L106 -8" stroke="#2B1A12" strokeWidth="5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      <rect x="88" y="2" width="6" height="110" rx="3" fill="#2B1A12" transform="rotate(8 91 56)" />

      <g clipPath="url(#il-clip)">
        <rect x="40" y="26" width="80" height="110" fill="url(#il-drink)" />
        {/* Swirl of kithul syrup */}
        <motion.path
          d="M54 82 C66 74 78 90 90 80 C98 74 104 82 108 78"
          stroke="#6B3418"
          strokeWidth="3"
          fill="none"
          opacity="0.5"
          animate={reduce ? undefined : { x: [0, 6, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        />
        {ice.map((c, i) => (
          <motion.rect
            key={i}
            x={c.x - 9}
            y={c.y - 9}
            width="18"
            height="18"
            rx="4"
            fill="url(#il-ice)"
            stroke="#FFFFFF"
            strokeOpacity="0.8"
            transform={`rotate(${c.r} ${c.x} ${c.y})`}
            animate={reduce ? undefined : { y: [0, -3, 0] }}
            transition={{ duration: 3 + i * 0.5, repeat: Infinity, ease: "easeInOut", delay: i * 0.3 }}
          />
        ))}
        {/* Condensation droplets */}
        {[[58, 70], [62, 96], [100, 60], [97, 104], [56, 112]].map(([x, y], i) => (
          <circle key={i} cx={x} cy={y} r={1.6} fill="#FFFFFF" opacity="0.6" />
        ))}
      </g>

      {/* Glass */}
      <path
        d="M50 18 L110 18 L104 122 C103 128 99 131 94 131 L66 131 C61 131 57 128 56 122 Z"
        fill="url(#il-glass)"
        stroke="#FFFFFF"
        strokeOpacity="0.7"
        strokeWidth="1.5"
      />
      <ellipse cx="80" cy="18" rx="30" ry="4" fill="none" stroke="#FFFFFF" strokeOpacity="0.85" strokeWidth="1.5" />
      <path d="M57 28 L61 118" stroke="#FFFFFF" strokeWidth="3" opacity="0.6" strokeLinecap="round" />
    </svg>
  );
}
