import logoAsset from "@/assets/souqna-logo.asset.json";

export function Logo({
  size = 40,
  className = "",
}: {
  size?: number;
  className?: string;
}) {
  return (
    <img
      src={logoAsset.url}
      alt="سوقنا"
      width={size}
      height={size}
      className={`rounded-xl object-cover shadow-sm ${className}`}
      style={{ width: size, height: size }}
    />
  );
}
