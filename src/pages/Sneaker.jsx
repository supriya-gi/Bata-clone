import "../pages/All.scss";
import SneakerStudio from "../assets/images/SneakerStudio.jpg";

const ladiesshoes = [
  {
    shoesImg:
      "https://korra.co.in/clients/sneaker-studio/images/Lifestyle-wya.png",
  },
  {
    shoesImg:
      "https://korra.co.in/clients/sneaker-studio/images/Running-wya.png",
  },
  {
    shoesImg:
      "https://korra.co.in/clients/sneaker-studio/images/Walking-wya.png",
  },
  {
    shoesImg:
      "https://korra.co.in/clients/sneaker-studio/images/Training-wya.png",
  },
  {
    shoesImg:
      "https://korra.co.in/clients/sneaker-studio/images/Outdoor-wya.png",
  },
];
const powerimg = [
  {
    imgUrl:
      "https://korra.co.in/clients/sneaker-studio/images/XoRise-TechVideo-Thumbnails.png",
  },
  {
    imgUrl:
      "https://korra.co.in/clients/sneaker-studio/images/Engage-TechVideo-Thumbnails.png",
  },
  {
    imgUrl:
      "https://korra.co.in/clients/sneaker-studio/images/Racer-TechVideo-Thumbnails.png",
  },
];
const sneaker = [
  {
    sneakerImg: "https://korra.co.in/clients/sneaker-studio/images/bs-1.jpg",
    sneakerName: "HUSH PUPPIES NAVY SNEAKER FOR MEN",
    sneakerPrice: "₹ 5,999.00",
  },
  {
    sneakerImg: "https://korra.co.in/clients/sneaker-studio/images/bs-2.jpg",
    sneakerName: "POWER BLACK RUNNING SHOES FOR WOMEN",
    sneakerPrice: "₹ 2,699.10",
  },
  {
    sneakerImg: "https://korra.co.in/clients/sneaker-studio/images/bs-3.jpg",
    sneakerName: "HUSH PUPPIES RED CASUAL SHOES FOR WOMEN",
    sneakerPrice: "₹ 5,399.10",
  },
  {
    sneakerImg: "https://korra.co.in/clients/sneaker-studio/images/bs-4.jpg",
    sneakerName: "HUSH PUPPIES GREY RUNNINGSHOES FOR MEN",
    sneakerPrice: "₹ 3,999.00",
  },
  {
    sneakerImg: "https://korra.co.in/clients/sneaker-studio/images/bs-5.jpg",
    sneakerName: "POWER BLACK JOGGING SHOES FOR MEN",
    sneakerPrice: "₹ 2,499.00",
  },
];
let brands = [
  {
    brandImg:
      "https://korra.co.in/clients/sneaker-studio/images/shop-by-brand-1.png",
    brandLogo: "https://korra.co.in/clients/sneaker-studio/images/bata.png",
  },
  {
    brandImg:
      "https://korra.co.in/clients/sneaker-studio/images/shop-by-brand-7.png",
    brandLogo:
      "https://korra.co.in/clients/sneaker-studio/images/power-logo.png",
  },
  {
    brandImg:
      "https://korra.co.in/clients/sneaker-studio/images/shop-by-brand-4.png",
    brandLogo:
      "https://korra.co.in/clients/sneaker-studio/images/hush-puppies-logo.png",
  },
  {
    brandImg:
      "https://korra.co.in/clients/sneaker-studio/images/shop-by-brand-6.png",
    brandLogo:
      "https://korra.co.in/clients/sneaker-studio/images/north-star.png",
  },
];
function Sneaker() {
  return (
    <div className="sneaker">
      <div className="offers">
        <p>
          <i>Free home delivery</i>
        </p>
      </div>
      <video controls autoPlay muted loop>
        <source
          src="https://korra.co.in/clients/sneaker-studio/images/home-banner-1.mp4"
          type="video/mp4"
        />
      </video>
      <p className="discription">
        Every occasion deserves a different look. A stylish one for a movie
        date, a powerful one for a<br /> morning run and a casual one for a
        meetup with friends. Sneaker Studio at Bata is where you
        <br /> can ace them all.
        <br /> Choose from over <b>300 sneaker styles from 9 brands.</b>
        <br />
        <i>
          <b>#Want it Get It</b>
        </i>
      </p>
      <div className="action">
        <h1>
          <b>WHAT’S YOUR ACTION</b>
        </h1>
      </div>
      <div className="block">
        {ladiesshoes.map((img) => (
          <div className="blog">
            <img src={img.shoesImg} alt="" />
          </div>
        ))}
      </div>
      <div className="action">
        <h1 className="text-center">
          <b>LATEST IN POWER</b>
        </h1>
      </div>
      <div className="block ">
        {powerimg.map((data) => (
          <div className="power">
            <img src={data.imgUrl} alt="" />
          </div>
        ))}
      </div>
      <div className="block">
        <img src={SneakerStudio} alt="" />
      </div>
      <div className="action">
        <h1 className="text-center">
          <b>BEST SELLER</b>
        </h1>
      </div>
      <div className="block">
        {sneaker.map((data) => (
          <div className="card border">
            <img src={data.sneakerImg} alt="" />
            <div className="heading">{data.sneakerName}</div>
            <div className="price">{data.sneakerPrice}</div>
          </div>
        ))}
      </div>
      <div className="action">
        <h1 className="text-center">
          <b>SHOP BY BRANDS</b>
        </h1>
      </div>
      <div className="container">
        <div className="block">
          {brands.map((content) => (
            <div className="card">
              <div className="border img-content">
                <img src={content.brandImg} alt="" />
                <div className="brand_logo">
                  <img src={content.brandLogo} alt="" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
export default Sneaker;
