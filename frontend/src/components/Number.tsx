import React, { useState } from "react";
interface IProps {
  number: number;
}
export default function Number({ number }: IProps) {
  const [state] = useState(() => number);
  return <span>{state}</span>;
}
