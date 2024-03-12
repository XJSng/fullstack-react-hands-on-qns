import React, { useState } from 'react'

export default function Buffet() {

  const [items, setItems] = useState([]);

  const handleCheckBoxChange = (e) => {
    if (e.target.checked) {
      const cloned = [...items, e.target.value]
      setItems(cloned)
    } else {
      const indexToRemove = items.findIndex(f => f === e.target.value);
      const cloned = [...items.slice(0, indexToRemove), ...items.slice(indexToRemove + 1)]
      setItems(cloned);
    }
  }


  const calculateTotal = ()=> {
    const menu = {
      "beef": 12.00,
      "chicken": 7.50,
      "fish": 10.00,
      "mushrooms": 5.50,
      "spinach": 2.50
  };
  let totalCost = 0;
  
      items.forEach(item => {
        if (menu[item]) {
          
          totalCost += menu[item];
        
        } else {
          return "No items selected.";
        }
      })
      return ` $${totalCost}`;
      }

    return (
      <React.Fragment>
        <div>
          <input type="checkbox" name="orders" value="beef"
            checked={items.includes("beef")}
            onChange={handleCheckBoxChange}
          /><label>Shabu Shabu Beef</label>
        </div>
        <div>
          <input type="checkbox" name="orders" value="chicken"
            checked={items.includes("chicken")}
            onChange={handleCheckBoxChange}
          /><label>Chicken Fillet</label>
        </div>
        <div>
          <input type="checkbox" name="orders" value="fish"
            checked={items.includes("fish")}
            onChange={handleCheckBoxChange}
          /><label>Fish Fillet</label>
        </div>
        <div>
          <input type="checkbox" name="orders" value="mushrooms"
            checked={items.includes("mushrooms")}
            onChange={handleCheckBoxChange}
          /><label>Assorted mushhrooms</label>
        </div>
        <div>
          <input type="checkbox" name="orders" value="spinach"
            checked={items.includes("spinach")}
            onChange={handleCheckBoxChange} /><label>Spinach</label>
        </div>
        <h1>Total:{calculateTotal()}</h1>
      </React.Fragment>
    )
  }

