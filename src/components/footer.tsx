import Link from "next/link";
export function Footer() {
    return (
      <div className="footer">
        <ul className="footer-buttons">
            <h3>The Glided Spoon Restaurant</h3>
          <li><Link href="/privacy">Privacy Policy</Link></li>
          <li><Link href="/pictures">Restaurant Pictures</Link></li>
        </ul>
      </div>
    );
  }