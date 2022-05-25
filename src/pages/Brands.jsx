import "../pages/All.scss";
const productList = [
  {
    brandImg:
      "https://www.bata.in/on/demandware.static/-/Sites-bata-in-Library/en_IN/dw325c61b4/brand/bata.png",
    brandName: "BATA",
  },
  {
    brandImg:
      "https://www.bata.in/on/demandware.static/-/Sites-bata-in-Library/en_IN/dw58fc7a8a/brand/bata-industrials.png",
    brandName: "BATA INDUSTRIALS",
  },
  {
    brandImg:
      "https://www.bata.in/on/demandware.static/-/Sites-bata-in-Library/en_IN/dwfeb3f939/brand/bubblegummers.png",
    brandName: "BUBBLEGUMMERS",
  },
  {
    brandImg:
      "https://www.bata.in/on/demandware.static/-/Sites-bata-in-Library/en_IN/dw55d357ca/brand/bata-comfit.png",
    brandName: "BATA COMFIT",
  },
  {
    brandImg:
      "https://www.bata.in/on/demandware.static/-/Sites-bata-in-Library/en_IN/dwe2ea91f2/brand/cat.png",
    brandName: "CAT",
  },
  {
    brandImg:
      "https://www.bata.in/on/demandware.static/-/Sites-bata-in-Library/en_IN/dwc55b1f25/brand/disney.png",
    brandName: "DISNEY",
  },
  {
    brandImg:
      "https://www.bata.in/on/demandware.static/-/Sites-bata-in-Library/en_IN/dwae13d435/brand/footin.png",
    brandName: "FOOTIN",
  },
  {
    brandImg:
      "https://www.bata.in/on/demandware.static/-/Sites-bata-in-Library/en_IN/dw11b84e85/brand/hush-puppies.png",
    brandName: "HUSH PUPPIES ",
  },

  {
    brandImg:
      "https://www.bata.in/on/demandware.static/-/Sites-bata-in-Library/en_IN/dwd5f209b0/brand/marie-claire.png",
    brandName: "MARIE CLAIRE",
  },
  {
    brandImg:
      "https://www.bata.in/on/demandware.static/-/Sites-bata-in-Library/en_IN/dwe06f0df6/brand/north-star.png",
    brandName: "NORTH STAR",
  },
  {
    brandImg:
      "https://www.bata.in/on/demandware.static/-/Sites-bata-in-Library/en_IN/dwb5b2a4a4/brand/naturalizer.png",
    brandName: "NATURALIZER",
  },
  {
    brandImg:
      "https://www.bata.in/on/demandware.static/-/Sites-bata-in-Library/en_IN/dw0d331ced/brand/power.png",
    brandName: "POWER",
  },
  {
    brandImg:
      "https://www.bata.in/on/demandware.static/-/Sites-bata-in-Library/en_IN/dw50b17453/brand/scholl.png",
    brandName: "SCHOLL",
  },
  {
    brandImg:
      "https://www.bata.in/on/demandware.static/-/Sites-bata-in-Library/en_IN/dwd3d4e9f6/brand/weinbrenner.png",
    brandName: "WEINBRENNER",
  },
];
function Brands() {
  return (
    <div className="brand">
      <div className="brand_title">
        <h3>BRANDS</h3>
      </div>
      <div className="productList brand-name">
        {productList.map((data) => (
          <div className="logos">
            <img src={data.brandImg} alt="" />
            <div className="product_name">{data.brandName}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default Brands;
