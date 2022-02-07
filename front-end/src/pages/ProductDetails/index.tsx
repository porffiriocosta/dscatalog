import { ReactComponent as ArrowIcon } from 'assets/images/arrow.svg';
import ProductPrice from 'components/ProductPrice';
import './styles.css';
import { Link } from 'react-router-dom';

const ProductDetails = () => {
  return (
    <div className="product-details-container">
      <div className="base-card product-details-card">
        <Link to="/products">
          <div className="goback-container">
            <ArrowIcon />
            <h2>Voltar</h2>
          </div>
        </Link>
        <div className="row">
          <div className="col-xl-6">
            <div className="img-container">
              <img
                src="https://raw.githubusercontent.com/devsuperior/dscatalog-resources/master/backend/img/2-big.jpg"
                alt=""
              />
            </div>
            <div className="name-price-container">
              <h1>Nome do Produto</h1>
              <ProductPrice price={2358.67} />
            </div>
          </div>
          <div className="col-xl-6">
            <div className="descriptin-container">
              <h2>Descrição do produto</h2>
              <p>
                Morbi congue consequat velit, quis fermentum nunc maximus ac.
                Sed tincidunt turpis vitae nibh commodo, ullamcorper mattis
                metus malesuada.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProductDetails;
