import react from "react";
import reactDOM from "react-dom/client";
import "../src/index.css";

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header className="header">
      <h1>Fast React PIzza Co.</h1>
    </header>
  );
}

function Menu() {
  const pizzas = pizzaData;
  // const pizNumber = 0;
  return (
    <main className="menu">
      <h2>our menu</h2>
      {pizzas ? (
        <>
          <p>we have different pizzas</p>
          <ul className="pizzas">
            {pizzas.map((pizza) => (
              <Pizza pizzaObj={pizza} key={pizza.name} />
            ))}
          </ul>
        </>
      ) : (
        <p>we are working our menu. please come back leter</p>
      )}
    </main>
  );
}

function Pizza({ pizzaObj }) {
  // if (pizzaObj.soldOut) return null;

  return (
    <li className={`pizza ${pizzaObj.soldOut ? "sold-out" : ""}`}>
      <img src={pizzaObj.photoName} alt={pizzaObj.name}></img>
      <h1>{pizzaObj.name}</h1>
      <p>{pizzaObj.ingredients}</p>
      <span>{pizzaObj.soldOut ? "sould out" : pizzaObj.price}</span>
    </li>
  );
}

//

function Footer() {
  const hours = new Date().getHours();
  console.log(hours);
  const openHours = 6;
  const closeHours = 11;
  const isOpen = (hours) => openHours && hours <= closeHours;

  return (
    <footer>
      {isOpen ? <Order closeHours={closeHours} /> : <p>we're closed</p>}
    </footer>
  );
  //   return react.createElement("footer", null, "we are currenly open");
}

function Order({ openHours, closeHours }) {
  return (
    <div className="order">
      <p>we are open untill {closeHours}:00. Come visit us and Order</p>
      <button className="btn">open</button>
    </div>
  );
}

const root = reactDOM.createRoot(document.getElementById("root"));
root.render(
  <react.StrictMode>
    <App />
  </react.StrictMode>
);
