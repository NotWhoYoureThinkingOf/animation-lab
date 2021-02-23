import * as React from "react";
import { useState } from "react";
import { ModalWindow } from "./ModalWindow";
import { AnimatePresence } from "framer-motion";
import "./Modal.css";

export function SignUp() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button className="signup__button" onClick={() => setIsOpen(true)}>
        Open me
      </button>
      <AnimatePresence>
        {isOpen && <ModalWindow close={() => setIsOpen(false)} />}
      </AnimatePresence>
    </>
  );
}
