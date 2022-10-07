import { useNavigate } from 'react-router-dom';
import { IProduct } from '../../models';
import styles from './ProductItem.module.scss';

interface ProductProps {
    product: IProduct;
}

const ProductItem: React.FC<ProductProps> = ({ product }) => {
    const navigate = useNavigate();

    const goToProroduct = () => {
        navigate(String(product.id));
    }

    return (
        <div
            className={styles.productItem}
            onClick={goToProroduct}
        >
            <div className={styles.productItem__img_wrap}>
                <img
                    className={styles.productItem__img}
                    src={product.image}
                    alt={product.title}
                />
            </div>
            <h3 className={styles.productItem__title}>{product.title}</h3>
            <h4 className={styles.productItem__category}> Category: {product.category}</h4>
            <span className={styles.productItem__price}>Price: {product.price}</span>
            <span className={styles.productItem__rate}>Rating: {product?.rating?.rate}</span>
        </div>
    );
};

export default ProductItem;
