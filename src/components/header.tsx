import Link from "next/link"
export default function Header(){
    return(
        <div className="header">
            <ul className="header-button">
                <h1>The Glided Spoon</h1>
                <li>
                <Link href="/">Home</Link>
                </li>
                <li>
                    <Link href="/about-us">About Us</Link>
                </li>
                <li>
                    <Link href="/contact-us">Contact Us</Link>
                    </li>
                <li>
                    <Link href="/order-now">Order Now</Link>
                </li>
            </ul>
            
        </div>
    )
}



