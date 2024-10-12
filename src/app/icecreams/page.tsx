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
      <div>
        <h1>Ice Cream Menu</h1>
        <table>
          <thead>
            <tr>
              <th>Ice Cream</th>
              <th>Price (PKR)</th>
            </tr>
          </thead>
          <tbody>
            {iceCreamItems.map((item, index) => (
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
  