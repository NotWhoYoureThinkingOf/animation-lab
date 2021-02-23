import * as React from "react";
import { Image } from "./Image";
import { SignUp } from "./SignUp";
import "./Modal.css";

export const Modal = () => {
  return (
    <article className="modal__body">
      <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
      <SignUp />
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam rem
        distinctio aliquid, dolorem vel aspernatur atque accusantium nostrum nam
        ab.
      </p>
      <Image />
    </article>
  );
};
