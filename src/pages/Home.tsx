import BlogsAndArticles from "../components/home/BlogsAndArticles"
import FAQ from "../components/home/FAQ"
import FullBodyCheckupPackages from "../components/home/FullBodyCheckupPackages"
import PopularHealthCheckup from "../components/home/PopularHealthCheckup"
import Testimonial from "../components/home/Testimonial"
import TrendingProducts from "../components/home/TrendingProducts"
import WhyMyDr24 from "../components/home/WhyMyDr24"
import whatsAppBanner from '../../src/assets/images/whatsAppBanner.png'
import NewLaunches from "../components/home/NewLaunches"
import CalltoAction from "../assets/images/calltoaction.png"
import Category from "../components/home/Category"
import TopDoctorsByHealth from "../components/home/TopDoctorsByHealth"

const Home: React.FC = () => {
    return (
        <>
            <TopDoctorsByHealth />
            <img src={CalltoAction} alt="" />
            <Category />
            <NewLaunches />
            <img src={whatsAppBanner} alt="" />
            <FullBodyCheckupPackages />
            <TrendingProducts />
            <WhyMyDr24 />
            <PopularHealthCheckup />
            <BlogsAndArticles />
            <Testimonial />
            <FAQ />
        </>
    )
}

export default Home