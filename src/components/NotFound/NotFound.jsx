import { Link } from "react-router-dom";

const NotFound = () =>
  <div className="container mx-auto text-center h-screen flex flex-col justify-center items-center">
    <h3 className="md:text-6xl md:font-extrabold text-2xl font-medium pb-10">404 page not found</h3>
    <p className="md:text-3xl text-xl md:font-medium font-normal">We are sorry but the page you are looking for does not exist.</p>
    <Link to="/"><button className="px-6 py-4 rounded-2xl bg-blue-500 text-white mt-10 md:text-xl text-lg md:font-semibold font-medium hover:bg-blue-800">Go Back to Home</button></Link>
  </div>

export default NotFound;