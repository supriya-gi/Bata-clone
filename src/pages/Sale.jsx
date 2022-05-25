import "../pages/All.scss";
const productDtails = [
  {
    productUrl:
      "https://www.bata.in/dw/image/v2/BCLG_PRD/on/demandware.static/-/Sites-bata-in-master-catalog/default/dw83183af1/images/tile/3391249_2.jpeg?sw=660",
    productName: "BATA",
    productPrice: "₹ 559.20",
  },
  {
    productUrl:
      "https://www.bata.in/dw/image/v2/BCLG_PRD/on/demandware.static/-/Sites-bata-in-master-catalog/default/dw0e47bca4/images/tile/8719198_2.jpeg?sw=660",
    productName: "BATA",
    productPrice: "₹ 639.20",
  },
  {
    productUrl:
      "https://www.bata.in/dw/image/v2/BCLG_PRD/on/demandware.static/-/Sites-bata-in-master-catalog/default/dw802319eb/images/tile/8713117_2.jpeg?sw=660",
    productName: "BATA",
    productPrice: "₹ 559.20",
  },
  {
    productUrl:
      "https://www.bata.in/dw/image/v2/BCLG_PRD/on/demandware.static/-/Sites-bata-in-master-catalog/default/dw75d7ad32/images/tile/8716283_2.jpeg?sw=660",
    productName: "BATA",
    productPrice: "₹ 559.20",
  },
  {
    productUrl:
      "https://www.bata.in/dw/image/v2/BCLG_PRD/on/demandware.static/-/Sites-bata-in-master-catalog/default/dw953fc1f3/images/tile/3391160_2.jpeg?sw=660",
    productName: "BATA",
    productPrice: "₹ 499.50",
  },
  {
    productUrl:
      "https://www.bata.in/dw/image/v2/BCLG_PRD/on/demandware.static/-/Sites-bata-in-master-catalog/default/dwaa4a9a36/images/tile/8399090_2.jpeg?sw=660",
    productName: "POWER",
    productPrice: "₹ 1,359.20",
  },
];
function Sale() {
  return (
    <div className="sale">
      <div className="offers">
        <p>
          <i>Free home delivery</i>
        </p>
      </div>
      <ul className="sidenav">
        <li>
          <b>SALE</b>
        </li>
        <li>
          <b>All Sale</b>
        </li>
        <li>Women</li>
        <li>Men</li>
        <li>Kids</li>
      </ul>
      <div className="product_page">
        <div className="product_name">
          <p>Sale</p>
        </div>
        <div className="product_number">
          <h2>SALE</h2>
          <span>(2264)</span>
        </div>
        <div className="filter">
          <i class="fa fa-sliders" aria-hidden="true"></i>
          <span>Filter and sort</span>
          <div className="table">
            <i class="fa fa-th" aria-hidden="true"></i>
          </div>
        </div>
        <div className="container">
          <div className="productList">
            {productDtails.map((data) => (
              <div className="col-md-4">
                <div className="card">
                  {/* <NavLink to={"/product/${product.id}"}> */}
                  <img src={data.productUrl} alt="" />
                  {/* </NavLink> */}
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
export default Sale;
