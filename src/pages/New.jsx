import { NavLink } from "react-router-dom";
import "../pages/All.scss";

const productDtails = [
  {
    productUrl:
      "https://www.bata.in/dw/image/v2/BCLG_PRD/on/demandware.static/-/Sites-bata-in-master-catalog/default/dw2b90b48a/images/tile/8316471_2.jpeg?sw=660",
    productName: "BATA",
    productPrice: "MRP ₹ 1,299.00",
  },
  {
    productUrl:
      "https://www.bata.in/dw/image/v2/BCLG_PRD/on/demandware.static/-/Sites-bata-in-master-catalog/default/dwa738a10c/images/tile/8592343_2.jpeg?sw=660",
    productName: "POWER",
    productPrice: "MRP ₹ 1,499.00",
  },
  {
    productUrl:
      "https://www.bata.in/dw/image/v2/BCLG_PRD/on/demandware.static/-/Sites-bata-in-master-catalog/default/dwb7c882c5/images/tile/8246458_2.jpeg?sw=660",
    productName: "BATA",
    productPrice: "MRP ₹ 1,499.00",
  },
  {
    productUrl:
      "https://www.bata.in/dw/image/v2/BCLG_PRD/on/demandware.static/-/Sites-bata-in-master-catalog/default/dwb75e2351/images/tile/3599155_2.jpeg?sw=660",
    productName: "BUBBLEGUMMERS",
    productPrice: "MRP ₹ 599.00",
  },
  {
    productUrl:
      "https://www.bata.in/dw/image/v2/BCLG_PRD/on/demandware.static/-/Sites-bata-in-master-catalog/default/dw2ba67984/images/tile/8589818_2.jpeg?sw=660",
    productName: "BATA",
    productPrice: "MRP ₹ 852.00",
  },
  {
    productUrl:
      "https://www.bata.in/dw/image/v2/BCLG_PRD/on/demandware.static/-/Sites-bata-in-master-catalog/default/dw93897a72/images/tile/8729329_2.jpeg?sw=660",
    productName: "SANDAK",
    productPrice: "MRP ₹ 549.00",
  },
  {
    productUrl:
      "https://www.bata.in/dw/image/v2/BCLG_PRD/on/demandware.static/-/Sites-bata-in-master-catalog/default/dw3363d159/images/tile/8214876_2.jpeg?sw=660",
    productName: "BATA",
    productPrice: "MRP ₹ 1,699.00",
  },
  {
    productUrl:
      "https://www.bata.in/dw/image/v2/BCLG_PRD/on/demandware.static/-/Sites-bata-in-master-catalog/default/dw9b870895/images/tile/5597095_2.jpeg?sw=660",
    productName: "BATA",
    productPrice: "MRP ₹ 532.00",
  },
  {
    productUrl:
      "https://www.bata.in/dw/image/v2/BCLG_PRD/on/demandware.static/-/Sites-bata-in-master-catalog/default/dwb3d7c8e3/images/tile/8596343_2.jpeg?sw=660",
    productName: "POWER",
    productPrice: "MRP ₹ 1,499.00",
  },
  {
    productUrl:
      "https://www.bata.in/dw/image/v2/BCLG_PRD/on/demandware.static/-/Sites-bata-in-master-catalog/default/dwaece016f/images/tile/8722329_2.jpeg?sw=660",
    productName: "SANDAK",
    productPrice: "MRP ₹ 549.00",
  },
  {
    productUrl:
      "https://www.bata.in/dw/image/v2/BCLG_PRD/on/demandware.static/-/Sites-bata-in-master-catalog/default/dwe8b036f2/images/tile/5395592_1.jpeg?sw=660",
    productName: "POWER",
    productPrice: "MRP ₹ 1,999.00",
  },
  {
    productUrl:
      "https://www.bata.in/dw/image/v2/BCLG_PRD/on/demandware.static/-/Sites-bata-in-master-catalog/default/dw3889d55e/images/tile/8599385_2.jpeg?sw=660",
    productName: "BATA",
    productPrice: "MRP ₹ 799.00",
  },
];
function New() {
  return (
    <div className="new">
      <div className="offers">
        <p>
          <i>Free home delivery</i>
        </p>
      </div>
      <ul className="sidenav">
        <li>
          <b>NEW</b>
        </li>
        <li>
          <b>All New</b>
        </li>
        <li>Women</li>
        <li>Men</li>
        <li>Kids</li>
        <li>Bata 3D</li>
      </ul>
      <div className="product_page">
        <div className="product_name">
          <p>New</p>
        </div>
        <div className="product_number">
          <h2>NEW</h2>
          <span>(2090)</span>
        </div>
        <div className="filter">
          <i class="fa fa-sliders" aria-hidden="true"></i>
          <span>Filter and sort</span>
          <div className="table">
            <i class="fa fa-th" aria-hidden="true"></i>
          </div>
        </div>
        <h3 className="text-center p-5">New</h3>
        <div className="container">
          <div className="productList">
            {productDtails.map((data) => (
              <div className="col-md-4">
                <div className="card">
                  <NavLink to="/product-details">
                    <img src={data.productUrl} alt="" />
                  </NavLink>
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
export default New;
