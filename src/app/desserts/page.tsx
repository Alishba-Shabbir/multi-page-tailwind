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
      <div>
        <h1>Dessert Menu</h1>
        <table>
          <thead>
            <tr>
              <th>Dessert</th>
              <th>Price (PKR)</th>
            </tr>
          </thead>
          <tbody>
            {dessertItems.map((item, index) => (
              <tr key={index}>
                <td>{item.name}</td>
                <td>{item.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
  