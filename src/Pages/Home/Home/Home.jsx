import PageTitle from "../../Shared/PageTitle/PageTitle";
import Banner from "../Banner/Banner";
import Feature from "../Feature/Feature";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <PageTitle title={'Our Feature'} />
            <Feature></Feature>
        </div>
    );
};

export default Home;