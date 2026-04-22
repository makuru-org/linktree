import Image from "next/image";
import Link from 'next/link'

export default function Home() {
  return (
    <h1>
    <Link href="http://makuru.org">ME!</Link>
    <Image
      src="/Spot_the_cow.gif"
      width={500}
      height={500}
      alt="Picture of the author"
    />
    </h1>
  );
}
