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
      <div>
        <h1>Salad Menu</h1>
        <table>
          <thead>
            <tr>
              <th>Salad</th>
              <th>Price (PKR)</th>
            </tr>
          </thead>
          <tbody>
            {saladItems.map((item, index) => (
              <tr key={index}>
                <td>{item.name}</td>
                <td>{item.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
  
        <h1>Chutneys</h1>
        <table>
          <thead>
            <tr>
              <th>Chutney</th>
              <th>Price (PKR)</th>
            </tr>
          </thead>
          <tbody>
            {chutneyItems.map((item, index) => (
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
  