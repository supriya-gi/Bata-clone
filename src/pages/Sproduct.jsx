import "../pages/All.scss";
const singleProduct = [
  {
    id: "1",
    productImg:
      "https://www.bata.in/dw/image/v2/BCLG_PRD/on/demandware.static/-/Sites-bata-in-master-catalog/default/dw6bca7d5b/images/large/8316471_1.jpeg?sw=1634",
    productBrand:
      "https://www.bata.in/on/demandware.static/-/Sites-bata-in-Library/en_IN/dw325c61b4/brand/bata.png",
    productName: "BATA BLACK FORMAL SHOES FOR MEN",
    productPrice: "MRP ₹ 1,299.00",
    color: "BLACK",
    size: "6",
  },
];
function productDetail(props) {
  return (
    <div className="singal_product">
      <div className="offers">
        <p>
          <i>Free home delivery</i>
        </p>
      </div>
      <div className="container sproduct">
        {singleProduct.map((item) => (
          <div className="block">
            <div className="col-md-8">
              <div className="small-img">
                <img src={item.productImg} alt="" />
              </div>
            </div>
            <div className="col-md-4 details">
              <div className="brandImg">
                <img src={item.productBrand} />
              </div>
              <div className="name">
                <h2>{item.productName}</h2>
              </div>
              <div className="product_price">
                <span>{item.productPrice}</span>
              </div>
              <span className="taxes">Inclusive of all taxes</span>
              <div className="p-color">
                <h6>
                  <b>COLOR: </b> {item.color}
                </h6>
              </div>
              <div className="p-size">
                <h5>
                  <b>Size: </b>
                  {item.size}
                </h5>
              </div>
              <div className="add-button">
                <button type="button" className="button">
                  ADD TO BAG
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default productDetail;
