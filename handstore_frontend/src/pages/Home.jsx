import Header from "../components/Header";
import Main from "../components/main";
import Facilities from "../components/Facilities";
import FeaturedProducts from "../components/featuredProducts";  
import Footer from "../components/Footer";
const Home = () =>{
    return(
        <div>
        <Header />
        <Main />
        <Facilities />
        <FeaturedProducts />
        <Footer />
        </div>
    );
};
export default Home;