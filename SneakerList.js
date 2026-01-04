
import React, { useEffect, useState } from "react";
import axios from "axios";

function SneakerList() {
  const [sneakers, setSneakers] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/sneakers")
      .then(res => setSneakers(res.data));
  }, []);

  return (
    <div className="grid">
      {sneakers.map(s => (
        <div className="card" key={s._id}>
          <img src={s.image} alt={s.name} />
          <h3>{s.name}</h3>
          <p>{s.brand}</p>
          <p>Price: ₹{s.price}</p>
        </div>
      ))}
    </div>
  );
}

export default SneakerList;
