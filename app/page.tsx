import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="main">
      <div className="mx-auto flex flex-column h-[100vh] justify-center gap-x-4 rounded-xl bg-white p-6 shadow-lg outline outline-black/5 dark:bg-slate-800 dark:shadow-none dark:-outline-offset-1 dark:outline-white/10">
        <span className="vertical-align middle">
          <Link href="mailto:makuru@makuru.org">
            <span className="text-[24px] inline-middle material-icons-outlined">mail</span>
          </Link>
          <Link href="">
            <span className="text-[24px] si si-matrix"></span>
          </Link>
          <Link href="mailto:makuru@makuru.org">
            <span className="material-icons-outlined">mail</span>
          </Link>
          <Link href="mailto:makuru@makuru.org">
            <span className="material-icons-outlined">mail</span>
          </Link>
        </span>
      </div>
      <div>
        <Image src="/Spot_the_cow.gif" width={500} height={300} alt="" />
      </div>
    </div>
  );
}
