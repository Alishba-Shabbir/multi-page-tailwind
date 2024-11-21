export default function Lunch() {
  const menuItems = [
    { name: "Chicken Biryani", price: 1050 },
    { name: "Beef Kebab", price: 1120 },
    { name: "Vegetable Curry", price: 840 },
    { name: "Chicken Karahi", price: 1260 },
    { name: "Grilled Sandwich", price: 770 },
    { name: "Chicken Wrap", price: 840 },
    { name: "Butter Chicken", price: 1400 },
    { name: "Dal (Lentil) Curry", price: 700 },
    { name: "Rice and Curry Combo", price: 1190 },
    { name: "Beef Burger", price: 980 },
    { name: "Chicken Shawarma", price: 910 },
    { name: "Prawn Fried Rice", price: 1330 },
    { name: "Falafel Plate", price: 840 },
  ];

  return (
    <div className="p-4 sm:p-6 md:p-8 lg:p-12 bg-gray-50 text-gray-800">
      <h1 className="text-3xl sm:text-4xl font-bold text-center mb-6 text-black-600">Lunch Menu</h1>
      
      <div className="overflow-x-auto">
        <table className="min-w-full table-auto border-collapse bg-white rounded-lg shadow-md">
          <thead>
            <tr className="bg-yellow-500 text-white">
              <th className="px-4 py-2 text-left">Item</th>
              <th className="px-4 py-2 text-left">Price (PKR)</th>
            </tr>
          </thead>
          <tbody>
            {menuItems.map((item, index) => (
              <tr key={index} className="border-b hover:bg-gray-100">
                <td className="px-4 py-2">{item.name}</td>
                <td className="px-4 py-2">{item.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
