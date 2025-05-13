import Header from "../components/Header";
import Main from "../components/main";
import Facilities from "../components/Facilities";
import FeaturedProducts1 from "../components/Featuredproducts1";
import TopsellerProducts from "../components/TopSellerProducts"; 
import CategoryTabs from "../components/categoryTabs";
// import NewArrivalProducts from "../components/NewArrivalProducts";
import Footer from "../components/Footer";
const Home = () =>{
    return(
        <div>
        <Header />
        <Main />
        <Facilities />
        <CategoryTabs />
        <FeaturedProducts1 />
        <TopsellerProducts />
        {/* <NewArrivalProducts />   */}
        <Footer />
        </div>
    );
};
export default Home;