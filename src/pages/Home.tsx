import BlogsAndArticles from "../components/home/BlogsAndArticles"
import FAQ from "../components/home/FAQ"
import PopularHealthCheckup from "../components/home/PopularHealthCheckup"
import Testimonial from "../components/home/Testimonial"
import TrendingProducts from "../components/home/TrendingProducts"
import WhyMyDr24 from "../components/home/WhyMyDr24"

const Home: React.FC = () => {
    return (
        <>
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