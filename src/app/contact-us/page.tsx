export default function Contact() {
    return (
      <div className="p-6 max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Contact Us</h1>
        <p className="text-gray-700 mb-4">
          We do love to hear from you! Whether you have a question, feedback, or would like to make a reservation, we are here to help.
        </p>
        <div className="space-y-4">
          <p className="text-gray-800 font-semibold">Reach Out to Us:</p>
          <div className="space-y-2">
            <p className="text-gray-700">
              <span className="font-semibold">📍 Location:</span>
              <br />
              The Gilded Spoon, 1234 Gourmet Avenue, Food District, Karachi, Pakistan
            </p>
            <p className="text-gray-700">
              <span className="font-semibold">📞 Phone:</span>
              <br />
              +92 21 1234 5678
            </p>
            <p className="text-gray-700">
              <span className="font-semibold">✉️ Email:</span>
              <br />
              info@thegildedspoon.pk
            </p>
            <p className="text-gray-700">
              <span className="font-semibold">🕒 Operating Hours:</span>
              <br />
              Monday to Thursday: 07:00 AM to 10:00 PM
              <br />
              Friday to Sunday: 07:00 AM to 11:30 PM
            </p>
            <p className="text-gray-700">
              <span className="font-semibold">Reservations:</span>
              <br />
              To reserve a table, please call us or fill out our online reservation form. We recommend booking in advance for weekends and special occasions.
            </p>
            <p className="text-gray-700">
              <span className="font-semibold">Stay Connected:</span>
              <br />
              Follow us on social media for the latest updates, promotions, and mouth-watering food pictures!
            </p>
          </div>
        </div>
      </div>
    );
  }
  