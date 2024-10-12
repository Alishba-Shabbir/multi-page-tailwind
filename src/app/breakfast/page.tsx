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
      <div className="breakfast-menu">
        <h1>Breakfast Menu</h1>
        <table>
          <thead>
            <tr>
              <th>Item</th>
              <th>Price (PKR)</th>
            </tr>
          </thead>
          <tbody>
            {menuItems.map((item, index) => (
              <tr key={index}>
                <td>{item.name}</td>
                <td>{item.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
        </div>
        )}