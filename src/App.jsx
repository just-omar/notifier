import { useState, useEffect } from "react";
import "./App.css";
import Modal from "./Modal";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    console.log("foo");
    fetch("/db.json")
      .then((resp) => resp.json())
      .then((data) => setNotifications(data));
  }, []);

  console.log(notifications);

  return (
    <div className="App">
      <header>
        <div className="counter">{notifications.length}</div>
        <button
          onClick={() => setIsOpen((prevVal) => !prevVal)}
          className="bell-btn"
        >
          <img src="/bell.png" width={50} height={50} alt="bell" />
        </button>
      </header>

      <Modal open={isOpen} onClose={() => setIsOpen(false)}>
        <section>
          {notifications.map((element) => (
            <div className="notification" key={element.id}>
              <h1 className="notification-header">{element.header}</h1>
              <p className="notification-text">{element.text}</p>
              <button className="notification-delete">Удалить</button>
            </div>
          ))}
        </section>
      </Modal>
    </div>
  );
}

export default App;
