import Image from "next/image";
import Link from "next/link";
import logo from "../app/public/logo.jpg";
import breakfast from "../app/public/breakfast.jpg";
import lunch from "../app/public/lunch.jpg";
import dinner from "../app/public/dinner.jpg";
import salads from "../app/public/salads.jpg";
import beverages from "../app/public/beverages.jpg";
import coffee from "../app/public/coffee.jpg";
import desserts from "../app/public/desserts.jpg";
import icecreams from "../app/public/icecreams.jpg";
import chinese from "../app/public/chinese.jpg";

export default function Home() {
  return (
    <div className="bg-black text-white p-4">
      <div className="text-center mb-8">
        <p className="text-xl">
          Always great customer service here and fair pricing
          <br />
          on a large selection of choices on their menu....
        </p>
      </div>

      <div className="flex justify-center mb-8">
        <Image src={logo} alt="Logo" width={500} height={300} className="object-contain" />
      </div>

      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-ivory">***MENU***</h1>
      </div>

      {/* Menu Items */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {[
          { href: "/breakfast", imgSrc: breakfast, alt: "Breakfast", title: "Breakfast" },
          { href: "/lunch", imgSrc: lunch, alt: "Lunch", title: "Lunch" },
          { href: "/dinner", imgSrc: dinner, alt: "Dinner", title: "Dinner" },
          { href: "/salad", imgSrc: salads, alt: "Salad & Chutneys", title: "Salad & Chutneys" },
          { href: "/beverages", imgSrc: beverages, alt: "Beverages", title: "Beverages" },
          { href: "/coffee", imgSrc: coffee, alt: "Chai & Coffee", title: "Chai & Coffee" },
          { href: "/icecreams", imgSrc: icecreams, alt: "Ice-Creams", title: "Ice-Creams" },
          { href: "/desserts", imgSrc: desserts, alt: "Desserts", title: "Desserts" },
          { href: "/chinese", imgSrc: chinese, alt: "Chinese", title: "Chinese" },
        ].map((menuItem, index) => (
          <div key={index} className="group text-center">
            <Link href={menuItem.href}>
              <div className="relative overflow-hidden rounded-lg shadow-lg hover:scale-105 transition-transform duration-300">
                <Image
                  src={menuItem.imgSrc}
                  alt={menuItem.alt}
                  width={600}
                  height={400}
                  layout="intrinsic"
                  className="object-cover w-full h-full"
                />
                <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-40 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h5 className="text-xl font-semibold">{menuItem.title}</h5>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
