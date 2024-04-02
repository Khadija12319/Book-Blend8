import { Helmet } from "react-helmet-async";
import "../../App.css"
import { GrUserManager } from "react-icons/gr";
const BookBlogs = () => {
    return (
        <div className="container mx-auto rounded-2xl mb-10">
            <Helmet>
                <title>Book Blend | Blogs</title>
            </Helmet>
            <div className="container1 h-fit rounded-2xl">
                <div className="bg-gray-100 bg-opacity-10">
                    <h1 className="font2 text-3xl font-semibold py-8 text-center">Title: Lost in the Pages: A Journey Through the Enchanted Realm of {"'The Secret Garden'"}</h1>
                    <p className="px-4 text-[22px] font-medium text-center font1">In the serene confines of my cozy reading corner, nestled amidst a sea of cushions and bathed in the soft glow of candlelight, I embarked on a whimsical journey through the enchanting pages of Frances Hodgson {"Burnett's"} timeless classic{', "The Secret Garden."'}<br></br>

                                <span className="font2 font-bold text-2xl leading-[50px]">Setting the Scene</span><br></br>

                                As the faint scent of lavender wafted through the air and the gentle rustle of leaves outside provided a soothing backdrop, I eagerly opened the weathered cover of {'"The Secret Garden,"'} ready to be transported to the magical world that awaited me within its pages.<br></br>

                                <span className="font2 font-bold text-2xl leading-[50px]">Exploring the Magical World</span><br></br>

                                From the moment I stepped through the gates of Misselthwaite Manor alongside young Mary Lennox, I found myself captivated by the lush beauty and mysterious allure of the Yorkshire countryside. With each turn of the page, I wandered through the sprawling grounds of the estate, my imagination ablaze with visions of hidden chambers, forgotten secrets, and the promise of new beginnings.<br></br>

                                <span className="font2 font-bold text-2xl leading-[50px]">Meeting Memorable Characters</span><br></br>

                                In the company of Mary, Colin, and the spirited young gardener Dickon, I embarked on a journey of self-discovery and transformation. From the prickly exterior of the orphaned Mary to the fragile innocence of young Colin, each character I encountered left an indelible mark on my heart, their struggles and triumphs resonating deeply with my own.

                                Reflecting on Themes of Healing and Growth<br></br>

                                As I followed {"Mary's journey from a lonely and embittered child to a compassionate and courageous young girl, I couldn't"} help but reflect on the themes of healing, growth, and the transformative power of nature that permeate the pages of{' "The Secret Garden."'} Through the simple act of tending to the neglected garden, Mary and her friends discover the healing balm of friendship, the joy of connection, and the beauty of new beginnings.<br></br>

                                <span className="font2 font-bold text-2xl leading-[50px]">The Magic of Imagination</span><br></br>

                                As I turned the final page of {'"The Secret Garden"'} and bid farewell to its beloved characters, I was reminded of the enduring magic of imagination and the timeless appeal of a good book. In the pages of {"Burnett's"} masterpiece, I found solace, inspiration, and a renewed sense of wonder that will stay with me long after the last echoes of its enchanting tale have faded away.<br></br>

                                <span className="font2 font-bold text-2xl leading-[50px]">Conclusion</span><br></br>

                                My journey through the pages of {'"The Secret Garden"'} was a magical odyssey filled with wonder, discovery, and the boundless possibilities of the imagination. As I closed the book and returned to the world outside my window, I carried with me the lessons learned and the memories cherished, forever grateful for the timeless enchantment of Frances Hodgson {"Burnett's"} beloved classic.</p>
                                <p className="py-6 flex text-3xl font-semibold items-center gap-3 justify-center"><GrUserManager className="bg-gray-600 text-white text-[80px] p-2 rounded-full"/> By : Khadijatul Kobra</p>
                </div>
            </div>
        </div>
    );
};

export default BookBlogs;