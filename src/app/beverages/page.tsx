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
      <div>
        <h1>Beverage Menu</h1>
        <table>
          <thead>
            <tr>
              <th>Beverage</th>
              <th>Price (PKR)</th>
            </tr>
          </thead>
          <tbody>
            {beverageItems.map((item, index) => (
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
  