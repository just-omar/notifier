import { useState, useEffect } from "react";
import "./App.css";
import Modal from "./Modal";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux/es/exports";
import { deleteNotification, addNotification } from "./notificationsSlice";
import { nanoid } from "nanoid";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [bellClicked, setBellClicked] = useState(false);
  const dispatch = useDispatch();
  const notifications = useSelector((state) => state.notificationReducer);

  useEffect(() => {
    console.log(notifications);
    if (notifications.length < 10 && bellClicked === false) {
      if (notifications.length === 9) {
        setBellClicked(true);
      }

      setTimeout(() => {
        const id = notifications.length + 1;
        dispatch(
          addNotification({
            id: id,
            header: "foo" + id,
            text: "bar" + id,
          })
        );
      }, 1000);
    }
  }, [notifications]);

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
            <div className="notification" key={nanoid()}>
              <h1 className="notification-header">{element.header}</h1>
              <p className="notification-text">{element.text}</p>
              <button
                disabled={!bellClicked}
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
