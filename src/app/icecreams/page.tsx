export default function IceCreamMenu() {
  const iceCreamItems = [
    { name: "Vanilla", price: 420 },
    { name: "Chocolate", price: 490 },
    { name: "Strawberry", price: 490 },
    { name: "Mango", price: 560 },
    { name: "Cookies & Cream", price: 630 },
    { name: "Mint Chocolate Chip", price: 560 },
    { name: "Pistachio", price: 630 },
    { name: "Rocky Road", price: 700 },
    { name: "Caramel Swirl", price: 700 },
  ];

  return (
    <div className="p-4 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Ice Cream Menu</h1>
      <table className="min-w-full table-auto border-collapse">
        <thead>
          <tr className="bg-gray-100">
            <th className="py-2 px-4 text-left font-semibold text-gray-700">Ice Cream</th>
            <th className="py-2 px-4 text-left font-semibold text-gray-700">Price (PKR)</th>
          </tr>
        </thead>
        <tbody>
          {iceCreamItems.map((item, index) => (
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
