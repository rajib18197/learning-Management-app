import {
  cloneElement,
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { createPortal } from "react-dom";
import styled from "styled-components";

const StyledModal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: var(--color-grey-0);
  border-radius: var(--border-radius-lg);
  box-shadow: var(--shadow-lg);
  padding: 3.2rem 4rem;
  transition: all 0.5s;
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: var(--backdrop-color);
  backdrop-filter: blur(1px);
  z-index: 1000;
  transition: all 0.5s;
`;

const Button = styled.button`
  background: none;
  border: none;
  padding: 0.4rem;
  border-radius: var(--border-radius-sm);
  transform: translateX(0.8rem);
  transition: all 0.2s;
  position: absolute;
  top: 1.2rem;
  right: 1.9rem;

  &:hover {
    background-color: var(--color-grey-100);
  }

  & svg {
    width: 2.4rem;
    height: 2.4rem;
    /* Sometimes we need both */
    /* fill: var(--color-grey-500);
    stroke: var(--color-grey-500); */
    color: var(--color-grey-500);
  }
`;

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
    // console.log(openName);
  }

  //   return cloneElement(children, { handleClick });
  return render({ onClick: handleClick });
}

function Window({ windowName, children, render }) {
  const { openName, close } = useContext(ModalContext);
  const ref = useRef();
  // console.log(openName);

  useEffect(
    function () {
      function closeWindow(e) {
        // console.log(2);
        if (ref.current && !ref.current.contains(e.target)) {
          // console.log(1);
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

  return createPortal(
    <Overlay>
      <StyledModal ref={ref}>
        <Button>&nbsp;</Button>

        <div>{render({ onClick: close })}</div>
      </StyledModal>
    </Overlay>,
    document.body
  );
}

Modal.Open = Open;
Modal.Window = Window;
