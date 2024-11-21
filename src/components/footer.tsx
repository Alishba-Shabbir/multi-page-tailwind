import Link from "next/link";

export function Footer() {
  return (
    <div className="bg-[#f9a804] text-black py-4 h-24 flex flex-col md:flex-row justify-center items-center">
      <ul className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-16 text-lg font-sans cursor-pointer transition-all duration-300 hover:text-yellow-900">
        <h3 className="text-2xl font-light text-center md:text-left text-black mb-4 md:mb-0">
          The Glided Spoon Restaurant
        </h3>
        <li>
          <Link href="/privacy">Privacy Policy</Link>
        </li>
        <li>
          <Link href="/pictures">Restaurant Pictures</Link>
        </li>
      </ul>
    </div>
  );
}
