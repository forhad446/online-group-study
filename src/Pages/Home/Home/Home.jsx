import PageTitle from "../../Shared/PageTitle/PageTitle";
import Banner from "../Banner/Banner";
import Faq from "../Faq/Faq";
import Feature from "../Feature/Feature";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <PageTitle title={'Our Feature'} />
            <Feature></Feature>
            <PageTitle title={'Faq'} />
            <Faq></Faq>
        </div>
    );
};

export default Home;