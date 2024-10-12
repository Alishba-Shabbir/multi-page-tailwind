export default function CoffeeTeaMenu() {
    const beverageItems = [
      { name: "Tea", price: 140 },
      { name: "Green Tea", price: 210 },
      { name: "Herbal Tea", price: 280 },
      { name: "Coffee", price: 210 },
      { name: "Cappuccino", price: 420 },
      { name: "Espresso", price: 350 },
      { name: "Latte", price: 490 },
      { name: "Mocha", price: 560 },
      { name: "Cold Coffee", price: 560 },
      { name: "Masala Chai", price: 350 },
      { name: "Americano", price: 350 },
    ];
  
    return (
      <div>
        <h1>Coffee and Tea Menu</h1>
        <table>
          <thead>
            <tr>
              <th>Item</th>
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
  