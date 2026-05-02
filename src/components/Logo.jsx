export default function Logo({ className = "w-12 h-12" }) {
  return (
    <svg
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Red Shield Outline */}
      <path
        d="M50 10 L85 25 V65 L50 90 L15 65 V25 Z"
        fill="#f8fafc"
        stroke="#dc2626"
        strokeWidth="4"
        strokeLinejoin="round"
      />

      {/* Sun/Light Rays behind cross */}
      <path
        d="M50 25 V20 M50 55 V60 M35 40 H30 M70 40 H75 M38 28 L34 24 M62 28 L66 24 M38 52 L34 56 M62 52 L66 56"
        stroke="#dc2626"
        strokeWidth="2"
        strokeLinecap="round"
      />

      {/* Inner Red Cross */}
      <path
        d="M50 28 V52 M40 38 H60"
        stroke="#dc2626"
        strokeWidth="5"
        strokeLinecap="round"
      />

      {/* Blue Open Book */}
      <path
        d="M25 75 V55 C25 55 35 50 50 50 C65 50 75 55 75 55 V75 C75 75 65 70 50 70 C35 70 25 75 25 75 Z"
        fill="#1e3a8a"
      />
      {/* Book Center Line */}
      <path d="M50 50 V70" stroke="white" strokeWidth="2" />

      {/* Center CLA Circle */}
      <circle
        cx="50"
        cy="60"
        r="11"
        fill="white"
        stroke="#dc2626"
        strokeWidth="2"
      />
      <text
        x="50"
        y="64"
        fill="#dc2626"
        fontSize="11"
        fontWeight="900"
        textAnchor="middle"
        fontFamily="sans-serif"
      >
        CLA
      </text>
    </svg>
  );
}
