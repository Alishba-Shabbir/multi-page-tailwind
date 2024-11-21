export default function Dinner() {
  const menuItems = [
    { name: "Grilled Chicken", price: 1400 },
    { name: "Mutton Korma", price: 1680 },
    { name: "Fish Fry", price: 1260 },
    { name: "Beef Steak", price: 2100 },
    { name: "Chicken Tikka", price: 1190 },
    { name: "Prawn Curry", price: 1960 },
    { name: "Vegetable Stir-fry", price: 1050 },
    { name: "Lamb Chops", price: 2240 },
    { name: "Paneer Tikka", price: 1120 },
    { name: "BBQ Platter", price: 2520 },
    { name: "Chicken Alfredo Pasta", price: 1680 },
    { name: "Grilled Salmon", price: 2100 },
  ];

  return (
    <div className="p-4 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Dinner Menu</h1>
      <table className="min-w-full table-auto border-collapse">
        <thead>
          <tr className="bg-gray-100">
            <th className="py-2 px-4 text-left font-semibold text-gray-700">Item</th>
            <th className="py-2 px-4 text-left font-semibold text-gray-700">Price (PKR)</th>
          </tr>
        </thead>
        <tbody>
          {menuItems.map((item, index) => (
            <tr
              key={index}
              className={`border-b ${index % 2 === 0 ? "bg-gray-50" : "bg-white"}`}
            >
              <td className="py-2 px-4 text-gray-800">{item.name}</td>
              <td className="py-2 px-4 text-gray-800">{item.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
