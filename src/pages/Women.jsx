import "../pages/All.scss";
const listDetails = [
  {
    productUrl:
      "https://www.bata.in/dw/image/v2/BCLG_PRD/on/demandware.static/-/Sites-bata-in-master-catalog/default/dwdbd41c2e/images/tile/5715432_1.jpeg?sw=660",
    productName: "BATA",
    productPrice: "MRP ₹ 599.00",
  },
  {
    productUrl:
      "https://www.bata.in/dw/image/v2/BCLG_PRD/on/demandware.static/-/Sites-bata-in-master-catalog/default/dw628b00b2/images/tile/5599392_2.jpeg?sw=660",
    productName: "BATA",
    productPrice: "MRP ₹ 699.00",
  },
  {
    productUrl:
      "https://www.bata.in/dw/image/v2/BCLG_PRD/on/demandware.static/-/Sites-bata-in-master-catalog/default/dw61eb1402/images/tile/5710014_2.jpeg?sw=660",
    productName: "BATA",
    productPrice: "MRP ₹ 532.00",
  },
  {
    productUrl:
      "https://www.bata.in/dw/image/v2/BCLG_PRD/on/demandware.static/-/Sites-bata-in-master-catalog/default/dw547783ca/images/tile/5714345_2.jpeg?sw=660",
    productName: "BATA",
    productPrice: "MRP ₹ 852.00",
  },
  {
    productUrl:
      "https://www.bata.in/dw/image/v2/BCLG_PRD/on/demandware.static/-/Sites-bata-in-master-catalog/default/dwf3e9fb88/images/tile/6716994_2.jpeg?sw=660",
    productName: "SCHOLL",
    productPrice: "MRP ₹ 1,999.00",
  },
  {
    productUrl:
      "https://www.bata.in/dw/image/v2/BCLG_PRD/on/demandware.static/-/Sites-bata-in-master-catalog/default/dw5f2762f6/images/tile/5519509_2.jpeg?sw=660",
    productName: "BATA",
    productPrice: " MRP ₹ 599.00",
  },
  {
    productUrl:
      "https://www.bata.in/dw/image/v2/BCLG_PRD/on/demandware.static/-/Sites-bata-in-master-catalog/default/dw8ee4198f/images/tile/5713025_2.jpeg?sw=660",
    productName: "BATA",
    productPrice: "MRP ₹ 532.00",
  },
  {
    productUrl:
      "https://www.bata.in/dw/image/v2/BCLG_PRD/on/demandware.static/-/Sites-bata-in-master-catalog/default/dw317e6d99/images/tile/5599377_2.jpeg?sw=660",
    productName: "BATA",
    productPrice: "MRP ₹ 746.00",
  },
  {
    productUrl:
      "https://www.bata.in/dw/image/v2/BCLG_PRD/on/demandware.static/-/Sites-bata-in-master-catalog/default/dw082c7627/images/tile/5596392_2.jpeg?sw=660",
    productName: "BATA",
    productPrice: "MRP ₹ 699.00",
  },
  {
    productUrl:
      "https://www.bata.in/dw/image/v2/BCLG_PRD/on/demandware.static/-/Sites-bata-in-master-catalog/default/dweb87baad/images/tile/5515041_2.jpeg?sw=660",
    productName: "BATA",
    productPrice: "MRP ₹ 599.00",
  },
  {
    productUrl:
      "https://www.bata.in/dw/image/v2/BCLG_PRD/on/demandware.static/-/Sites-bata-in-master-catalog/default/dw7a42d6e2/images/tile/5616934_2.jpeg?sw=660",
    productName: "BATA",
    productPrice: "MRP ₹ 449.50",
  },
  {
    productUrl:
      "https://www.bata.in/dw/image/v2/BCLG_PRD/on/demandware.static/-/Sites-bata-in-master-catalog/default/dwf385031f/images/tile/5715901_2.jpeg?sw=660",
    productName: "BATA",
    productPrice: "MRP ₹ 1,499.00",
  },
  {
    productUrl:
      "https://www.bata.in/dw/image/v2/BCLG_PRD/on/demandware.static/-/Sites-bata-in-master-catalog/default/dwd4a2c9ae/images/tile/5516800_2.jpeg?sw=660",
    productName: "BATA",
    productPrice: "MRP ₹ 1,066.00",
  },
  {
    productUrl:
      "https://www.bata.in/dw/image/v2/BCLG_PRD/on/demandware.static/-/Sites-bata-in-master-catalog/default/dwc3bff540/images/tile/5596343_2.jpeg?sw=660",
    productName: "POWER",
    productPrice: "MRP ₹ 1,499.00",
  },
  {
    productUrl:
      "https://www.bata.in/dw/image/v2/BCLG_PRD/on/demandware.static/-/Sites-bata-in-master-catalog/default/dw57f34c9a/images/tile/6716221_2.jpeg?sw=660",
    productName: "BATA",
    productPrice: "MRP ₹ 699.00",
  },
];
function Women() {
  return (
    <div className="women">
      <div className="offers">
        <p>
          <i>Free home delivery</i>
        </p>
      </div>
      <ul className="sidenav">
        <li>
          <b>WOMEN</b>
        </li>
        <li>
          <b>All Women</b>
        </li>
        <li>Featured</li>
        <li>Shoes</li>
        <li>Heel Type</li>
        <li>Accessories</li>
        <li>Bags</li>
        <li>Apparels</li>
        <li>Brands</li>
      </ul>
      <div className="product_page">
        <div className="product_name">
          <p>Women</p>
        </div>
        <div className="product_number">
          <h2>WOMEN</h2>
          <span>(2103)</span>
        </div>
        <div className="filter">
          <i class="fa fa-sliders" aria-hidden="true"></i>
          <span>Filter and sort</span>
          <div className="table">
            <i class="fa fa-th" aria-hidden="true"></i>
          </div>
        </div>
        {/* <h3 className="text-center p-5">Women</h3> */}
        <div className="container">
          <div className="productList">
            {listDetails.map((data) => (
              <div className="col-md-4">
                <div className="card">
                  <img src={data.productUrl} alt="" />
                  <div className="product_name">{data.productName}</div>
                  <div className="product_price">{data.productPrice}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
export default Women;
