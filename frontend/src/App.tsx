import React from "react";
import Button from "./components/Button";
import { GET_COUNT, INCREMENT } from "./Queries";
import { useQuery, useMutation } from "@apollo/react-hooks";
import "./style/styles.css";
function App() {
  let get_count = useQuery(GET_COUNT);
  const [Increment, newValue] = useMutation(INCREMENT);

  const update = () => {
    Increment();
  };

  const count = (
    <span>
      {(newValue.data && newValue.data.increment) ||
        (get_count.data && get_count.data.count) ||
        0}
    </span>
  );
  return (
    <div className="App">
      <div className="Wrapper">
        <>
          {count}
          <Button update={update} />
        </>
      </div>
    </div>
  );
}

export default App;
