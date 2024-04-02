import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import Books from "../Books/Books";

const Home = () => {
    return (
        <>
            <Helmet>
                <title>Book Blend | Home</title>
            </Helmet>
            <Banner></Banner>
            <Books></Books>
        </>
    );
};

export default Home;