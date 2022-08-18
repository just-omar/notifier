import { useState, useEffect } from "react";
import "./App.css";
import Modal from "./Modal";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux/es/exports";
import { deleteNotification, addNotification } from "./notificationsSlice";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const dispatch = useDispatch();
  const notifications = useSelector((state) => state.notificationReducer);

  // for (let i = 0; i < 8; i++) {
  //   setTimeout(
  //     () =>
  //       dispatch(
  //         addNotification({
  //           id: i + 2,
  //           header: "foo" + i,
  //           text: "bar" + i,
  //         })
  //       ),
  //     900
  //   );
  // }

  // useEffect(() => {
  //   console.log(notifications);
  //   }
  // }, [notifications]);

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
