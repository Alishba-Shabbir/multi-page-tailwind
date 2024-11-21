export default function SaladChutneyMenu() {
  const saladItems = [
    { name: "Green Salad", price: 350 },
    { name: "Cucumber Salad", price: 280 },
    { name: "Tomato and Onion Salad", price: 280 },
    { name: "Chickpea Salad", price: 420 },
    { name: "Mixed Vegetable Salad", price: 490 },
    { name: "Caesar Salad", price: 700 },
    { name: "Greek Salad", price: 630 },
    { name: "Quinoa Salad", price: 770 },
  ];

  const chutneyItems = [
    { name: "Mint Chutney", price: 140 },
    { name: "Tamarind Chutney", price: 140 },
    { name: "Mango Chutney", price: 210 },
    { name: "Garlic Chutney", price: 140 },
    { name: "Coriander Chutney", price: 140 },
    { name: "Tomato Chutney", price: 210 },
  ];

  return (
    <div className="p-5 bg-black text-white">
      <h1 className="text-3xl text-center mb-6 font-bold text-ivory">Salad Menu</h1>
      <table className="min-w-full bg-white text-black border-collapse">
        <thead>
          <tr>
            <th className="px-4 py-2 border-b text-left">Salad</th>
            <th className="px-4 py-2 border-b text-left">Price (PKR)</th>
          </tr>
        </thead>
        <tbody>
          {saladItems.map((item, index) => (
            <tr key={index} className="hover:bg-gray-100">
              <td className="px-4 py-2 border-b">{item.name}</td>
              <td className="px-4 py-2 border-b">{item.price}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <h1 className="text-3xl text-center mt-8 mb-6 font-bold text-ivory">Chutneys</h1>
      <table className="min-w-full bg-white text-black border-collapse">
        <thead>
          <tr>
            <th className="px-4 py-2 border-b text-left">Chutney</th>
            <th className="px-4 py-2 border-b text-left">Price (PKR)</th>
          </tr>
        </thead>
        <tbody>
          {chutneyItems.map((item, index) => (
            <tr key={index} className="hover:bg-gray-100">
              <td className="px-4 py-2 border-b">{item.name}</td>
              <td className="px-4 py-2 border-b">{item.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
