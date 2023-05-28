import { Fragment } from "react";
import Nominee from "./components/Nominee";
import data from "./data/data.json";
function App() {
  return (
    <>
      <p>Online Votes</p>
      {data?.map(({ id, title, nominees }) => {
        return (
          <Fragment key={id}>
            <h1>{title}</h1>
            {nominees?.map(({ id: nomineeId, image, name }) => {
              return <Nominee key={nomineeId} name={name} image={image} />;
            })}
          </Fragment>
        );
      })}
    </>
  );
}

export default App;
