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
      <div className="chinese-menu">
        <h1>Chinese Menu</h1>
        <table>
          <thead>
            <tr>
              <th>Dish</th>
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
    );
  }
  