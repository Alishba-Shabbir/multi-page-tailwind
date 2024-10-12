export default function Dinner() {
    const menuItems = [
      { name: "Grilled Chicken", price: 1400 },
      { name: "Mutton Korma", price: 1680 },
      { name: "Fish Fry", price: 1260 },
      { name: "Beef Steak", price: 2100 },
      { name: "Chicken Tikka", price: 1190 },
      { name: "Prawn Curry", price: 1960 },
      { name: "Vegetable Stir-fry", price: 1050 },
      { name: "Lamb Chops", price: 2240 },
      { name: "Paneer Tikka", price: 1120 },
      { name: "BBQ Platter", price: 2520 },
      { name: "Chicken Alfredo Pasta", price: 1680 },
      { name: "Grilled Salmon", price: 2100 },
    ];
  
    return (
      <div className="dinner-menu">
        <h1>Dinner Menu</h1>
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
      </div>)}
  