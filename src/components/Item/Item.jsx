import { Link } from "react-router-dom";
import "./Item.css";

const Item = ({ img, price, id, name }) => {
  return (
    <div className="item-container">
      <section>
        <div className="img-container">
          <img src={img} className="img-caracts"></img>
          <div className="middle">
            <Link to={`/item/${id}`}>
              <button className="go-to-detail">Ver detalle</button>
            </Link>
          </div>
        </div>
        <div>
          <h5 className="">{name}</h5>
          <div className="">$ {price}</div>
        </div>
      </section>
    </div>
  );
};

export default Item;