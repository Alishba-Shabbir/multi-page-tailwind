export default function DessertMenu() {
  const dessertItems = [
    { name: "Gulab Jamun (2 pcs)", price: 420 },
    { name: "Kheer (Rice Pudding)", price: 490 },
    { name: "Chocolate Cake", price: 630 },
    { name: "Brownie", price: 520 },
    { name: "Fruit Salad", price: 420 },
    { name: "Baklava (1 piece)", price: 350 },
    { name: "Cheesecake", price: 700 },
    { name: "Apple Pie", price: 630 },
    { name: "Tiramisu", price: 770 },
  ];

  return (
    <div className="p-4 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Dessert Menu</h1>
      <table className="min-w-full table-auto border-collapse">
        <thead>
          <tr className="bg-gray-100">
            <th className="py-2 px-4 text-left font-semibold text-gray-700">Dessert</th>
            <th className="py-2 px-4 text-left font-semibold text-gray-700">Price (PKR)</th>
          </tr>
        </thead>
        <tbody>
          {dessertItems.map((item, index) => (
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
