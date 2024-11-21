export default function Order() {
    return (
      <div className="p-4 sm:p-6 md:p-8 lg:p-12 bg-gray-50 text-gray-800">
        <h1 className="text-3xl sm:text-4xl font-bold text-center mb-6 text-yellow-600">Order Now!!</h1>
  
        <div className="space-y-4 text-lg sm:text-xl">
          <p>
            Hungry? Place your order today and let The Gilded Spoon prepare a delicious meal for you! Simply give us a call, and we will take care of the rest.
          </p>
          
          <h2 className="text-2xl font-semibold">How to Order:</h2>
          
          <p>
            <span className="font-semibold">1. Browse Our Menu:</span> Explore our range of appetizers, main dishes, and desserts.
          </p>
          
          <p>
            <span className="font-semibold">2. Call to Place Your Order:</span> 
            <br /> 📞 <span className="font-bold">Phone: +92 21 1234 5678</span>
          </p>
  
          <p>
            Our team is ready to take your order and answer any questions about our menu.
          </p>
  
          <p>
            <span className="font-semibold">3. Delivery or Pickup:</span>
          </p>
          <ul className="list-disc pl-8">
            <li>🚚 <strong>Delivery:</strong> We deliver across Karachi. Delivery times vary by location.</li>
            <li>🛍️ <strong>Pickup:</strong> Prefer to grab your food yourself? Call ahead and pick up your order at 1234 Gourmet Avenue, Karachi.</li>
          </ul>
  
          <p>
            <span className="font-semibold">Payment Options:</span>
            <br /> We accept cash on delivery or upon pickup.
          </p>
  
          <p>
            <span className="font-semibold">Delivery Hours:</span>
            <br /> Monday to Thursday: 08:30 AM to 10:00 PM
            <br /> Friday to Sunday: 08:30 AM to 11:30 PM
          </p>
  
          <p>
            Give us a call now and enjoy the delicious flavors of The Gilded Spoon without leaving your home!
          </p>
        </div>
      </div>
    );
  }
  