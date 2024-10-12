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
      <div className="lunch-menu">
        <h1>Lunch Menu</h1>
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
         