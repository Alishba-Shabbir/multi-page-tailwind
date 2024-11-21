import Link from "next/link";

export default function Header() {
  return (
    <div className="bg-ivory p-5 flex justify-between items-center shadow-xl">
      <ul className="flex space-x-16">
        <h1 className="text-3xl text-[#fd990d] font-serif text-shadow-lg">The Glided Spoon</h1>
        <li className="text-lg cursor-pointer transition-all duration-200 hover:text-yellow-500">
          <Link href="/">Home</Link>
        </li>
        <li className="text-lg cursor-pointer transition-all duration-200 hover:text-yellow-500">
          <Link href="/about-us">About Us</Link>
        </li>
        <li className="text-lg cursor-pointer transition-all duration-200 hover:text-yellow-500">
          <Link href="/contact-us">Contact Us</Link>
        </li>
        <li className="text-lg cursor-pointer transition-all duration-200 hover:text-yellow-500">
          <Link href="/order-now">Order Now</Link>
        </li>
      </ul>
    </div>
  );
}
