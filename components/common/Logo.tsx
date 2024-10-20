import Link from "next/link";

export default function Logo() {
  return (
    <Link href='/' className="before:bg-pink-flamingo-600 before:w-5 before:h-5 before:rounded-full before:content-[''] before:block before:z-10 relative flex items-center gap-2">
      <h1 className="relative z-50">Nicotor<span className="text-pink-flamingo-600">dev</span></h1>
    </Link>
  );
}
