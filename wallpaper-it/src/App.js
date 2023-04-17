import Navbar from "./components/header/Navbar";
import TopHeader from "./components/header/TopHeader";
import Menu from "./components/header/Menu";
import PromoBar from "./components/header/PromoBar";
import Info from "./components/header/Info";
import AttributeList from "./components/main/AttributeList";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div className="App">
      <TopHeader />
      <Navbar />
      <Menu />
      <PromoBar />
      <Info />
      <AttributeList />
      <Footer />
    </div>
  );
}

export default App;
