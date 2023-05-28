import Nominee from "./components/Nominee";
import data from "./data/data.json";
import Category from "./components/Category";
function App() {
  return (
    <>
      <p>Online Votes</p>
      {data?.map(({ id, title, nominees }) => {
        return (
          <Category key={id} title={title}>
            {nominees?.map(({ id: nomineeId, image, name }) => {
              return <Nominee key={nomineeId} name={name} image={image} />;
            })}
          </Category>
        );
      })}
    </>
  );
}

export default App;
