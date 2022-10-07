import { useState, useEffect } from 'react';
import cn from 'classnames';
import { IProduct } from '../../models';
import styles from './Categories.module.scss';

interface CategoriesProps {
    data: IProduct[] | undefined;
    activeCategory: string;
    setActiveCategory: (categoryName: string) => void;
    setCategory: (category: string) => void;
    setLoading: (load: boolean) => void; 
}

const Categories: React.FC<CategoriesProps> = ({ data, setCategory, setLoading, activeCategory, setActiveCategory }) => {
    const [categoriesData, setCategoriesData] = useState<string[]>();

    useEffect(() => {
        if (data) {
            const categoriesObj = data.reduce((categories, product) => {
                if (categories[product.category] === undefined) {
                    categories[product.category] = 1;
                } else {
                    categories[product.category]++;
                }

                return categories;
            }, {} as any);

            const categories: string[] = Object.keys(categoriesObj);

            setCategoriesData(categories);
        }

    }, [data])

    const categoryFilter = (categoryName: string) => {
        setLoading(true);
        setActiveCategory(categoryName);
        setCategory(categoryName);
    }
    
    const allProducts = () => {
        setLoading(true);
        setActiveCategory('All Products');
        setCategory('');
    }

    return (
        <div className={styles.categories}>
            {
                categoriesData && (
                    <>
                        <span
                            className={cn(styles.categories__item, {[styles.active]: activeCategory ===  'All Products'})}
                            onClick={allProducts}
                        >All Products</span>
                        {
                            categoriesData.map((category, index) => (
                                <span
                                    className={cn(styles.categories__item, {[styles.active]: activeCategory ===  category})}
                                    key={index}
                                    onClick={
                                        () => categoryFilter(category)
                                    }
                                >{category}</span>
                            ))
                        }
                    </>
                )
            }
        </div>
    );
};

export default Categories;
