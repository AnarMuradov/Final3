import React, {useState } from "react";
import './style.scss'
const AddPage = () => {
  const [img, setImg] = useState("");
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");


function handleSubmit(){
    fetch("http://localhost:3001", {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify({img,name,price}),
    }).then((res) => res.json());
}
 

  return (
    <section className="addPage">
        <div className="addPage__container">
        <form action="">
        <input type="text" placeholder="image" onChange={e=>setImg(e.target.value)}/>
        <input type="text" placeholder="name" onChange={e=>setName(e.target.value)}/>
        <input type="number" placeholder="price" onChange={e=>setPrice(e.target.value)}/>
        <button onClick={handleSubmit}>Add</button>
      </form>
        </div>
    </section>
  );
};

export default AddPage;
