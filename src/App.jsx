import ServiceGrid from "./components/service/ServiceGrid";
import Advisoryarea from "./components/service/advisory_area/Advisory";
import Team from "./components/team/Team.jsx";
import TaxCalculator from "./components/taxcalculator/TaxCalculator.jsx";
import AboutUs from "./components/AboutUs/AboutUs";
import Footer from "./components/footer/Footer";
import News from "./components/news/News";
import ContactBar from "./components/navbar/ContactBar";
import Navigation from "./components/navbar/Navigation";
import Crousal from "./components/crousal/Crousal";
function App() {
  return (
    <>
    <div style={{backgroundColor:'white',position:"sticky",top:0,zIndex:2}}>
      <ContactBar/>  
      <Navigation/> 
      </div>
      <Crousal/>
      <News/>
      <AboutUs/> 
      <TaxCalculator/>    
      <ServiceGrid />
      <Advisoryarea />
      <Team/>
     
      <Footer/>

    </>
  );
}
export default App;
