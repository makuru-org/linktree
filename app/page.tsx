import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="main">
      <div className="mx-auto flex flex-column h-[100vh] items-center justify-center gap-x-4 rounded-xl bg-white p-6 shadow-lg outline outline-black/5 dark:bg-slate-800 dark:shadow-none dark:-outline-offset-1 dark:outline-white/10">
        <Link href="mailto:makuru@makuru.org">
          <span className="material-icons-outlined">mail</span>
        </Link>
      </div>
      <Image src="/Spot_the_cow.gif" width={500} height={300} alt="" />
    </div>
  );
}
