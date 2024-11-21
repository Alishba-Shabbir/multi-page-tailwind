export default function CoffeeTeaMenu() {
  const beverageItems = [
    { name: "Tea", price: 140 },
    { name: "Green Tea", price: 210 },
    { name: "Herbal Tea", price: 280 },
    { name: "Coffee", price: 210 },
    { name: "Cappuccino", price: 420 },
    { name: "Espresso", price: 350 },
    { name: "Latte", price: 490 },
    { name: "Mocha", price: 560 },
    { name: "Cold Coffee", price: 560 },
    { name: "Masala Chai", price: 350 },
    { name: "Americano", price: 350 },
  ];

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Coffee and Tea Menu</h1>
      <table className="min-w-full table-auto border-collapse">
        <thead>
          <tr>
            <th className="px-4 py-2 text-left border-b text-gray-700">Item</th>
            <th className="px-4 py-2 text-left border-b text-gray-700">Price (PKR)</th>
          </tr>
        </thead>
        <tbody>
          {beverageItems.map((item, index) => (
            <tr key={index} className="hover:bg-gray-100">
              <td className="px-4 py-2 border-b text-gray-600">{item.name}</td>
              <td className="px-4 py-2 border-b text-gray-600">{item.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
