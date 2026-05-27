import Link from "next/link";
import Image from "next/image";

export default function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2 group">
      <Image
        src="/images/Raxxdev.PNG"
        alt="Dev.Raxxis"
        width={45}
        height={45}
        className="rounded-lg"
      />
      <span
        className="text-lg font-bold"
        style={{ fontFamily: "var(--font-m-plus-rounded)" }}
      >
        Dev.Raxxis
      </span>
    </Link>
  );
}
