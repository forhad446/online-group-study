import { Helmet } from "react-helmet-async";
import PageTitle from "../../Shared/PageTitle/PageTitle";
import Banner from "../Banner/Banner";
import Faq from "../Faq/Faq";
import Feature from "../Feature/Feature";


const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Home || Group Study</title>
            </Helmet>
            <Banner></Banner>
            <PageTitle title={'Our Feature'} />
            <Feature></Feature>
            <PageTitle title={'Faq'} />
            <Faq></Faq>
        </div>
    );
};

export default Home;