import { useState, useEffect } from "react";
import "./App.css";
import Modal from "./Modal";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux/es/exports";
import { deleteNotification } from "./notificationsSlice";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const dispatch = useDispatch();
  const notifs = useSelector((state) => state.notificationReducer);

  useEffect(() => {
    console.log(notifs);
  }, [notifs]);

  return (
    <div className="App">
      <header>
        <div className="counter">{notifs.length}</div>
        <button
          onClick={() => setIsOpen((prevVal) => !prevVal)}
          className="bell-btn"
        >
          <img src="/bell.png" width={50} height={50} alt="bell" />
        </button>
      </header>

      <Modal open={isOpen} onClose={() => setIsOpen(false)}>
        <section>
          {notifs.map((element) => (
            <div className="notification" key={element.id}>
              <h1 className="notification-header">{element.header}</h1>
              <p className="notification-text">{element.text}</p>
              <button
                className="notification-delete"
                onClick={() => dispatch(deleteNotification({ id: element.id }))}
              >
                Удалить
              </button>
            </div>
          ))}
        </section>
      </Modal>
    </div>
  );
}

export default App;
