import { IProduct } from '../../models';
import Loader from '../Loader/Loader';
import ProductItem from '../ProductItem/ProductItem';
import styles from './ProductList.module.scss';

interface ProductListProps {
    isError: boolean;
    isLoading: boolean;
    products: IProduct[] | undefined;
}

const ProductList: React.FC<ProductListProps> = ({ isError, isLoading, products }) => {
    return (
        <>
            {
                isLoading && <Loader />
            }
            {
                isError && <h2>Something went wrong...</h2>
            }
            <div className={styles.productList}>
                {
                    !isLoading && products && products.map((product) => (
                        <ProductItem product={product} key={product.id} />
                    ))
                }
            </div>
        </>
    );
};

export default ProductList;
