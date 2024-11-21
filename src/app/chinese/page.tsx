export default function ChineseMenu() {
  const menuItems = [
    { name: "Chicken Manchurian", price: 1150 },
    { name: "Beef with Black Pepper", price: 1400 },
    { name: "Sweet and Sour Chicken", price: 1100 },
    { name: "Chicken Fried Rice", price: 950 },
    { name: "Vegetable Fried Rice", price: 800 },
    { name: "Chicken Chow Mein", price: 1050 },
    { name: "Beef Chow Mein", price: 1250 },
    { name: "Prawn Hakka Noodles", price: 1450 },
    { name: "Spring Rolls (4 pcs)", price: 700 },
    { name: "Hot and Sour Soup", price: 550 },
    { name: "Chicken Corn Soup", price: 520 },
  ];

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Chinese Menu</h1>
      <table className="min-w-full table-auto border-collapse">
        <thead>
          <tr>
            <th className="px-4 py-2 text-left border-b text-gray-700">Dish</th>
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
