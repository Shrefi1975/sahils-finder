export function Logo({
  size = 40,
  className = "",
}: {
  size?: number;
  className?: string;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      xmlns="http://www.w3.org/2000/svg"
      className={`rounded-xl shadow-sm ${className}`}
      role="img"
      aria-label="سوقنا"
      style={{ width: size, height: size }}
    >
      <rect width="64" height="64" rx="12" fill="#1e40af" />
      <path
        d="M14 44 V30 C14 22 20 16 28 16 C36 16 42 22 42 30 V44"
        stroke="#ffffff"
        strokeWidth="6"
        strokeLinecap="round"
        fill="none"
      />
      <circle cx="46" cy="18" r="4.5" fill="#f5a623" />
      <rect x="12" y="46" width="40" height="5" rx="2.5" fill="#f5a623" />
    </svg>
  );
}
