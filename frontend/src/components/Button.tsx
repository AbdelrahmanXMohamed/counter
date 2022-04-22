import React from "react";
import "../style/styles.css";
interface IProps {
  update: any;
}
export default function Button({ update }: IProps): JSX.Element {
  return (
    <div className="Btn" onClick={update}>
      <span>Increment</span>
    </div>
  );
}
