import "../pages/All.scss";
const productList = [
  {
    productUrl:
      "https://www.bata.in/dw/image/v2/BCLG_PRD/on/demandware.static/-/Sites-bata-in-master-catalog/default/dw83183af1/images/tile/3391249_2.jpeg?sw=660",
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
      "https://www.bata.in/dw/image/v2/BCLG_PRD/on/demandware.static/-/Sites-bata-in-master-catalog/default/dw1b7d797b/images/tile/1619028_2.jpeg?sw=660",
    productName: "BUBBLEGUMMERS",
    productPrice: " ₹ 594.15",
  },
  {
    productUrl:
      "https://www.bata.in/dw/image/v2/BCLG_PRD/on/demandware.static/-/Sites-bata-in-master-catalog/default/dw0a4de551/images/tile/3396252_2.jpeg?sw=660",
    productName: "BATA",
    productPrice: "MRP ₹ 532.00",
  },
  {
    productUrl:
      "https://www.bata.in/dw/image/v2/BCLG_PRD/on/demandware.static/-/Sites-bata-in-master-catalog/default/dw838db060/images/tile/1019978_2.jpeg?sw=660",
    productName: "BUBBLEGUMMERS",
    productPrice: "MRP ₹ 852.00",
  },
  {
    productUrl:
      "https://www.bata.in/dw/image/v2/BCLG_PRD/on/demandware.static/-/Sites-bata-in-master-catalog/default/dw0100b2bd/images/tile/3110156_2.jpeg?sw=660",
    productName: "DISNEY",
    productPrice: "MRP ₹ 599.00",
  },
  {
    productUrl:
      "https://www.bata.in/dw/image/v2/BCLG_PRD/on/demandware.static/-/Sites-bata-in-master-catalog/default/dw28e6a9d5/images/tile/3615395_2.jpeg?sw=660",
    productName: "BUBBLEGUMMERS",
    productPrice: "MRP ₹ 599.00",
  },
  {
    productUrl:
      "https://www.bata.in/dw/image/v2/BCLG_PRD/on/demandware.static/-/Sites-bata-in-master-catalog/default/dw79bb805d/images/tile/1015978_2.jpeg?sw=660",
    productName: "BUBBLEGUMMERS",
    productPrice: "MRP ₹ 852.00",
  },
  {
    productUrl:
      "https://www.bata.in/dw/image/v2/BCLG_PRD/on/demandware.static/-/Sites-bata-in-master-catalog/default/dwd7384b79/images/tile/1619412_2.jpeg?sw=660",
    productName: "BUBBLEGUMMERS",
    productPrice: "MRP ₹ 699.00",
  },
  {
    productUrl:
      "https://www.bata.in/dw/image/v2/BCLG_PRD/on/demandware.static/-/Sites-bata-in-master-catalog/default/dw03c48e65/images/tile/1012977_2.jpeg?sw=660",
    productName: "BUBBLEGUMMERS",
    productPrice: "MRP ₹ 852.00",
  },
  {
    productUrl:
      "https://www.bata.in/dw/image/v2/BCLG_PRD/on/demandware.static/-/Sites-bata-in-master-catalog/default/dwb8e6a9e3/images/tile/1015921_1.jpeg?sw=660",
    productName: "BUBBLEGUMMERS",
    productPrice: "MRP ₹ 746.00",
  },
  {
    productUrl:
      "https://www.bata.in/dw/image/v2/BCLG_PRD/on/demandware.static/-/Sites-bata-in-master-catalog/default/dw3b82782e/images/tile/1015977_2.jpeg?sw=660",
    productName: "BUBBLEGUMMERS",
    productPrice: "MRP ₹ 852.00",
  },
];
function Kids() {
  return (
    <div className="kid">
      <div className="offers">
        <p>
          <i>Free home delivery</i>
        </p>
      </div>
      <ul className="sidenav">
        <li>
          <b>Kids</b>
        </li>
        <li>
          <b>All Kids</b>
        </li>
        <li>Featured</li>
        <li>Shoes</li>
        <li>Accessories</li>
        <li>Apparels</li>
        <li>Brands</li>
      </ul>
      <div className="product_page">
        <div className="product_name">
          <p>Kids</p>
        </div>
        <div className="product_number">
          <h2>KIDS</h2>
          <span>(457)</span>
        </div>
        <div className="filter">
          <i class="fa fa-sliders" aria-hidden="true"></i>
          <span>Filter and sort</span>
          <div className="table">
            <i class="fa fa-th" aria-hidden="true"></i>
          </div>
        </div>

        <div className="productList">
          {productList.map((data) => (
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
  );
}
export default Kids;
