import Footer from "./components/Footer";
import Header from "./components/Header";
import Popup from "./components/Popup";
import CategoriesList from "./containers/CategoriesList";
function App() {
  return (
    <>
      <Popup />
      <Header />
      <CategoriesList />
      <Footer />
    </>
  );
}

export default App;
