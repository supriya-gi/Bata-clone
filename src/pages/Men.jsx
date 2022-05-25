import "../pages/All.scss";
const productDtails = [
  {
    productUrl:
      "https://www.bata.in/dw/image/v2/BCLG_PRD/on/demandware.static/-/Sites-bata-in-master-catalog/default/dw0f9f7bbc/images/tile/8246158_2.jpeg?sw=660",
    productName: "BATA",
    productPrice: "MRP ₹ 1,299.00",
  },
  {
    productUrl:
      "https://www.bata.in/dw/image/v2/BCLG_PRD/on/demandware.static/-/Sites-bata-in-master-catalog/default/dw239cf03e/images/tile/8396078_2.jpeg?sw=660",
    productName: "POWER",
    productPrice: "MRP ₹ 1,699.00",
  },
  {
    productUrl:
      "https://www.bata.in/dw/image/v2/BCLG_PRD/on/demandware.static/-/Sites-bata-in-master-catalog/default/dw98d847b2/images/tile/8396226_2.jpeg?sw=660",
    productName: "BATA",
    productPrice: "MRP ₹ 1,499.00",
  },
  {
    productUrl:
      "https://www.bata.in/dw/image/v2/BCLG_PRD/on/demandware.static/-/Sites-bata-in-master-catalog/default/dw9903cd24/images/tile/8319436_2.jpeg?sw=660",
    productName: "NORTH STAR",
    productPrice: "MRP ₹ 2,499.00",
  },
  {
    productUrl:
      "https://www.bata.in/dw/image/v2/BCLG_PRD/on/demandware.static/-/Sites-bata-in-master-catalog/default/dw3fad16aa/images/tile/8397214_2.jpeg?sw=660",
    productName: "WEINBRENNER",
    productPrice: "MRP ₹ 1,499.00",
  },
  {
    productUrl:
      "https://www.bata.in/dw/image/v2/BCLG_PRD/on/demandware.static/-/Sites-bata-in-master-catalog/default/dwc5309f9a/images/tile/8246253_2.jpeg?sw=660",
    productName: "BATA",
    productPrice: "MRP ₹ 1,499.00",
  },
  {
    productUrl:
      "https://www.bata.in/dw/image/v2/BCLG_PRD/on/demandware.static/-/Sites-bata-in-master-catalog/default/dwcbb1fc2b/images/tile/8544734_2.jpeg?sw=660",
    productName: "HUSH PUPPIES",
    productPrice: "MRP ₹ 3,199.20",
  },
  {
    productUrl:
      "https://www.bata.in/dw/image/v2/BCLG_PRD/on/demandware.static/-/Sites-bata-in-master-catalog/default/dw6ccadd19/images/tile/8044909_1.jpeg?sw=660",
    productName: "HUSH PUPPIES",
    productPrice: "MRP ₹ 4,999.00",
  },
  {
    productUrl:
      "https://www.bata.in/dw/image/v2/BCLG_PRD/on/demandware.static/-/Sites-bata-in-master-catalog/default/dw9d6c2b2f/images/tile/8516379_2.jpeg?sw=660",
    productName: "BATA",
    productPrice: "MRP ₹ 1,499.00",
  },
  {
    productUrl:
      "https://www.bata.in/dw/image/v2/BCLG_PRD/on/demandware.static/-/Sites-bata-in-master-catalog/default/dw7adebe22/images/tile/8516613_2.jpeg?sw=660",
    productName: "BATA",
    productPrice: "MRP ₹ 1,199.20",
  },
  {
    productUrl:
      "https://www.bata.in/dw/image/v2/BCLG_PRD/on/demandware.static/-/Sites-bata-in-master-catalog/default/dw75d33a75/images/tile/8213876_2.jpeg?sw=660",
    productName: "BATA",
    productPrice: "MRP ₹ 1,699.00",
  },
  {
    productUrl:
      "https://www.bata.in/dw/image/v2/BCLG_PRD/on/demandware.static/-/Sites-bata-in-master-catalog/default/dweb511546/images/tile/8514613_2.jpeg?sw=660",
    productName: "BATA",
    productPrice: "MRP ₹ 1,199.20",
  },
];
function Men() {
  return (
    <div className="men">
      <div className="offers">
        <p>
          <i>Free home delivery</i>
        </p>
      </div>
      <ul className="sidenav">
        <li className="mobile">
          <b>Men</b>
        </li>
        <li>
          <b>All Men</b>
        </li>
        <li>Featured</li>
        <li>Shoes</li>
        <li>Accessories</li>
        <li>Apparels</li>
        <li>Brands</li>
      </ul>
      <div className="product_page">
        <div className="product_name">
          <p>Men</p>
        </div>
        <div className="product_number">
          <h2>MEN</h2>
          <span>(1792)</span>
        </div>
        <div className="filter">
          <i class="fa fa-sliders" aria-hidden="true"></i>
          <span>Filter and sort</span>
          <div className="table">
            <i class="fa fa-th" aria-hidden="true"></i>
          </div>
        </div>
        <h3 className="text-center p-5"></h3>
        <div className="container">
          <div className="productList">
            {productDtails.map((data) => (
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
export default Men;
