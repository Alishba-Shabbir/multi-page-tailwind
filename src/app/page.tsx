
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
    <div className="Home">
      <div className="paragraph">
        <p>
          Always great customer service here and fair pricing
          <br />
          on a large selection of choices on their menu....
        </p>
      </div>

      <div className="picture-header">
        <Image src={logo} alt="Logo" width={500} height={300} />
      </div>

      <div className="content">
        <h1>***MENU***</h1>

        <div className="parent-container">
          <div className="child-container">
            <Link href="/breakfast">
              <Image src={breakfast} alt="Breakfast" width={900} height={800} />
            </Link>
            <h5>Breakfast</h5>
          </div>
        </div>

        <div className="parent-container">
          <div className="child-container">
            <Link href="/lunch">
              <Image src={lunch} alt="Lunch" width={900} height={800} />
            </Link>
            <h5>Lunch</h5>
          </div>
        </div>

        <div className="parent-container">
          <div className="child-container">
            <Link href="/dinner">
              <Image src={dinner} alt="Dinner" width={900} height={800} />
            </Link>
            <h5>Dinner</h5>
          </div>
        </div>

        <div className="parent-container">
          <div className="child-container">
            <Link href="/salad">
              <Image src={salads} alt="Salad & Chutneys" width={500} height={100} />
            </Link>
            <h5>Salad & Chutneys</h5>
          </div>
        </div>

        <div className="parent-container">
          <div className="child-container">
            <Link href="/beverages">
              <Image src={beverages} alt="Beverages" width={500} height={100} />
            </Link>
            <h5>Beverages</h5>
          </div>
        </div>

        <div className="parent-container">
          <div className="child-container">
            <Link href="/coffee">
              <Image src={coffee} alt="Chai & Coffee" width={500} height={100} />
            </Link>
            <h5>Chai & Coffee</h5>
          </div>
        </div>

        <div className="parent-container">
          <div className="child-container">
            <Link href="/icecreams">
              <Image src={icecreams} alt="Ice-Creams" width={500} height={100} />
            </Link>
            <h5>Ice-Creams</h5>
          </div>
        </div>

        <div className="parent-container">
          <div className="child-container">
            <Link href="/desserts">
              <Image src={desserts} alt="Desserts" width={500} height={100} />
            </Link>
            <h5>Desserts</h5>
          </div>
        </div>

        <div className="parent-container">
          <div className="child-container">
            <Link href="/chinese">
              <Image src={chinese} alt="Chinese" width={500} height={100} />
            </Link>
            <h5>Chinese</h5>
          </div>
        </div>
      </div>
    </div>
  );
}
