export default function BeverageMenu() {
  const beverageItems = [
    { name: "Fresh Orange Juice", price: 420 },
    { name: "Lemonade", price: 350 },
    { name: "Iced Tea", price: 280 },
    { name: "Lassi (Sweet or Salt)", price: 490 },
    { name: "Soft Drinks", price: 210 },
    { name: "Milkshake (Various)", price: 630 },
    { name: "Smoothie (Various)", price: 700 },
    { name: "Sparkling Water", price: 280 },
    { name: "Coconut Water", price: 420 },
  ];

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Beverage Menu</h1>
      <table className="min-w-full table-auto border-collapse">
        <thead>
          <tr>
            <th className="px-4 py-2 text-left border-b text-gray-700">Beverage</th>
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
