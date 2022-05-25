import "../pages/All.scss";
import summer from "../assets/images/summer.png";
import offer from "../assets/images/offer.jpg";
import change from "../assets/images/change.gif";
import classy1 from "../assets/images/classy1.png";
import classy2 from "../assets/images/classy2.png";
import sneaker_studio from "../assets/images/sneaker_studio.png";
import gargeouse from "../assets/images/gargeouse.png";

const shoes = [
  {
    imgUrl:
      "https://www.bata.in/dw/image/v2/BCLG_PRD/on/demandware.static/-/Sites-bata-in-Library/default/dw285ef3ab/Three%20Image%20Block/2_May_Bata-April_3ColumnComponent-NS-Female%20(1).jpg?sw=447&sfrm=jpg&q=100",
  },
  {
    imgUrl:
      "https://www.bata.in/dw/image/v2/BCLG_PRD/on/demandware.static/-/Sites-bata-in-Library/default/dw2d525628/Three%20Image%20Block/2_May_Bata-April_3ColumnComponent-Power-Male%20(1).jpg?sw=447&sfrm=jpg&q=100",
  },
  {
    imgUrl:
      "https://www.bata.in/dw/image/v2/BCLG_PRD/on/demandware.static/-/Sites-bata-in-Library/default/dw371e245b/Three%20Image%20Block/2_May_Bata-April_3ColumnComponent-HP-Male%20(1).jpg?sw=447&sfrm=jpg&q=100",
  },
];
const imageList = [
  {
    imgUrl:
      "https://www.bata.in/dw/image/v2/BCLG_PRD/on/demandware.static/-/Sites-bata-in-Library/default/dwd7b9b81d/Three%20Image%20Block/Unlimited--Sneaker_3ColumnComponent-Men-Formal-copy.jpg?sw=447&sfrm=jpg&q=100",
  },
  {
    imgUrl:
      "https://www.bata.in/dw/image/v2/BCLG_PRD/on/demandware.static/-/Sites-bata-in-Library/default/dw32f1ba76/Three%20Image%20Block/Unlimited--Sneaker_3ColumnComponent-Men-Formal-copy-2.jpg?sw=447&sfrm=jpg&q=100",
  },
  {
    imgUrl:
      "https://www.bata.in/dw/image/v2/BCLG_PRD/on/demandware.static/-/Sites-bata-in-Library/default/dw932a3e17/Three%20Image%20Block/Unlimited--Sneaker_3ColumnComponent-Men-Formal-COMFORT.jpg?sw=447&sfrm=jpg&q=100",
  },
];
function Home() {
  return (
    <div className="home">
      <div className="offers">
        <p>
          <i>Return up to 30 Days</i>
        </p>
      </div>
      <div className="container">
        <div className="banner"></div>
      </div>
      <div className="block space">
        <div className="col">
          <img src={change} alt="" />
        </div>
        <div className="col">
          <img src={offer} alt="" />
        </div>
      </div>
      <div className="shoes">
        {shoes.map((data) => (
          <div className="card">
            <img src={data.imgUrl} alt="" />
          </div>
        ))}
      </div>
      <section className="summer_section">
        <div className="summer_essential">
          <div className="summer_img">
            <img src={summer} alt="" />
          </div>
          <div className="about">
            <p className="summer">SUMMER ESSENTIALS</p>
            <p>
              Summers can be cool, breezy and comfortable with the trendiest
              Fishrman's, sandals, slides and floaters from Bata. Explore our
              curated collection now and say Hello Summers!
            </p>
            <button>EXPLORE THE COLLECTION</button>
          </div>
        </div>
      </section>
      <section className="classy">
        <div className="block change">
          <div className="col">
            <img src={classy1} alt="classy" />
          </div>
          <div className="col">
            <img src={classy2} alt="classy2" />
          </div>
        </div>
      </section>
      <section className="summer_section">
        <div className="summer_essential">
          <div className="summer_img">
            <img src={sneaker_studio} alt="" />
          </div>
          <div className="about summry">
            <p className="summer">SNEAKER</p>
            <p>
              Calling all Sneakerheads! Get the kicks that you love from Sneaker
              Studio at Bata Discover from a range of comfortable and classic
              fits that can make heads turn. The ultimate stop for all kinds of
              sneaker needs that you can dream of! Let the hoarding begin! Use
              Code “SNK15”* and get FLAT 15% off on fresh range
            </p>
            <button>EXPLORE MORE</button>
          </div>
        </div>
      </section>
      <div className="shoes apply">
        {imageList.map((image) => (
          <div className="card">
            <img src={image.imgUrl} alt="" />
          </div>
        ))}
      </div>
      <section className="summer_section">
        <div className="summer_essential">
          <div className="about summry text">
            <p className="summer">EXPLORE THE WILD</p>
            <p>
              Meet your match with the kind of style that gives you the freedom
              to move. Your elegant journey has just begun! Shop with us to
              explore what sets you free.
            </p>
            <button>EXPLORE THE COLLECTION</button>
          </div>
          <div className="summer_img">
            <img src={gargeouse} alt="" />
          </div>
        </div>
      </section>
      <div className="gst">
        <p>GST Rate Change Notification. Click to read </p>
      </div>
      {/* <hr className="border" /> */}
    </div>
  );
}
export default Home;
