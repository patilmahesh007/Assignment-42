import Footer from "../../components/footer/footer";
import Navbar from "../../components/navbar/nav";
import Card from "../../components/card/Card";
import "./App.css";
import {cardData} from "./../../config/carddata"

function App() {


  return (
    <>
      <Navbar />
      <div className="card-container">
        {cardData.map((item, index) => (
          <Card
            key={index}
            img={item.img}
            title={item.title}
            description={item.description}
            price={item.price}
            
          />
        ))}
      </div>
      <Footer />
    </>
  );
}

export default App;
