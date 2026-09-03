import Image from "next/image";

type Props = { src: string; alt: string; device?: "iPhone" | "Samsung"; priority?: boolean; className?: string; rotate?: number; scale?: number; parallaxStrength?: number };
export function DeviceMockup({ src, alt, device = "iPhone", priority = false, className = "", rotate = 0, scale = 1 }: Props) {
  const dimensions = device === "Samsung" ? { width: 524, height: 994 } : { width: 520, height: 1020 };
  return <div className={`device-mockup ${className}`} style={{ "--rotate": `${rotate}deg`, "--scale": scale } as React.CSSProperties}><Image src={src} alt={alt} width={dimensions.width} height={dimensions.height} priority={priority} sizes="(max-width: 640px) 220px, (max-width: 1200px) 360px, 520px" /></div>;
}
