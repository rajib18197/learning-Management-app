import {
  cloneElement,
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { createPortal } from "react-dom";

const ModalContext = createContext();

export default function Modal({ children }) {
  const [openName, setOpenName] = useState("");
  const open = setOpenName;
  const close = () => setOpenName("");

  return (
    <ModalContext.Provider value={{ openName, open, close }}>
      {children}
    </ModalContext.Provider>
  );
}

function Open({ opens, children, render }) {
  const { open, openName, close } = useContext(ModalContext);

  function handleClick() {
    // openName !== opens || openName === '' ? open(opens) : close();
    open((curr) => (opens !== curr || curr === "" ? opens : ""));
    console.log(openName);
  }

  //   return cloneElement(children, { handleClick });
  return render({ onClick: handleClick });
}

function Window({ windowName, children, render }) {
  const { openName, close } = useContext(ModalContext);
  const ref = useRef();

  useEffect(
    function () {
      function closeWindow(e) {
        console.log(!ref.current.contains(e.target));
        if (ref.current && !ref.current.contains(e.target)) {
          close();
        }
      }
      document.addEventListener("click", closeWindow, true);

      return () => {
        document.removeEventListener("click", closeWindow, true);
      };
    },
    [close]
  );

  if (windowName !== openName) return null;
  console.log(111);
  return createPortal(
    <div ref={ref} style={{ padding: "10px", background: "orange" }}>
      <div style={{ padding: "10px", background: "red" }}>
        {render({ onClick: close })}
      </div>
    </div>,
    document.body
  );
}

Modal.Open = Open;
Modal.Window = Window;
