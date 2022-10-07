import { useNavigate, useParams } from 'react-router-dom';
import Loader from '../../components/Loader/Loader';
import { useGetCurrentProductQuery } from '../../services/StoreService';
import styles from './Product.module.scss';

const Product = () => {
    const { productId } = useParams();
    const navigate = useNavigate();

    const { isError, isLoading, data: product } = useGetCurrentProductQuery(Number(productId));

    const goBack = () => {
        navigate('/store');
    }

    // const goToCategory = (productCategory: string) => {
    //     navigate(RoutesPath.store);
    // }

    return (
        <div className={`${styles.product} container`}>
            <span className={styles.product__goback} onClick={goBack}>Go Back</span>
            {
                isError && <p>Womething went wrong...</p>
            }
            {
                isLoading && <Loader />
            }
            <div className={styles.product__inner}>
                {
                    !isLoading && product && (
                        <>
                            <div className={styles.product__img_wrap}>
                                <img
                                    className={styles.product__img}
                                    src={product.image}
                                    alt={product.title}
                                />
                            </div>
                            <div className={styles.product__info}>
                                <h3 className={styles.product__title}>{product.title}</h3>
                                <h4 className={styles.product__category}>Category: {product.category}</h4>
                                <span className={styles.product__rate}>Rating: {product?.rating?.rate}</span>
                                <p className={styles.product__description}>{product.description}</p>
                                <span className={styles.product__price}>Price: {product.price}</span>
                            </div>
                        </>
                    )
                }
            </div>
        </div>
    );
};

export default Product;
