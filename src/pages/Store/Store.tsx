import { useState, useEffect } from 'react';
import Categories from '../../components/Categories/Categories';
import ProductList from '../../components/ProductList/ProductList';
import { IProduct } from '../../models';
import { useGetProductsQuery, useLazyGetSpecifilteredCategoryQuery } from '../../services/StoreService';
import styles from './Store.module.scss';

const Store = () => {
    const [products, setProducts] = useState<IProduct[]>();
    const [loading, setLoading] = useState(true);
    const [activeCategory, setActiveCategory] = useState<string>('All Products');

    const { isError, isLoading, data } = useGetProductsQuery('some data for searched', {
        // refetchOnFocus: true, // after few times refetch data again
        // skip: length < 3, // if searching something it false it will not work
        // pollingInterval: 1000, // Update datas after current times "1000 miliseconds"  
        // selectFromResult: ({ isLoading, isError, data }) => ({
        //     data: countCat ? data?.filter((item) => item.count === countCat) : data,
        //     isLoading,
        //     isError,
        // }) // filtering data
    });
    const [setCategory, { data: categoryData }] = useLazyGetSpecifilteredCategoryQuery();

    useEffect(() => {

        if (categoryData) {
            setProducts(categoryData);
        } else {
            setProducts(data);
        }

        setLoading(isLoading);

    }, [data, categoryData, isLoading]);

    return (
        <div className={`${styles.store} container`}>
            <h1 className={styles.store__title}>Store</h1>
            <div className={styles.store__content}>
                <Categories data={data} setCategory={setCategory} setLoading={setLoading} activeCategory={activeCategory} setActiveCategory={setActiveCategory} />
                <ProductList isError={isError} isLoading={loading} products={products} />
            </div>
        </div>
    );
};

export default Store;
