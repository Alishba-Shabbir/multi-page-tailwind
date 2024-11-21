export default function Breakfast() {
  const menuItems = [
    { name: "Eggs Benedict", price: 450 },
    { name: "Pancakes with Maple Syrup", price: 350 },
    { name: "Full English Breakfast", price: 600 },
    { name: "French Toast", price: 400 },
    { name: "Omelette", price: 300 },
    { name: "Avocado Toast", price: 500 },
    { name: "Fruit Salad", price: 250 },
    { name: "Breakfast Burrito", price: 550 }
  ];

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Breakfast Menu</h1>
      <table className="min-w-full table-auto border-collapse">
        <thead>
          <tr>
            <th className="px-4 py-2 text-left border-b text-gray-700">Item</th>
            <th className="px-4 py-2 text-left border-b text-gray-700">Price (PKR)</th>
          </tr>
        </thead>
        <tbody>
          {menuItems.map((item, index) => (
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
