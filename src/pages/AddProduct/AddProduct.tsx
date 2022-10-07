import { useState } from 'react';
import Loader from '../../components/Loader/Loader';
import { IProduct } from '../../models';
import { useAddNewProductMutation, useGetCategoriesQuery } from '../../services/StoreService';
import styles from './AddProduct.module.scss';

const AddProduct = () => {
    const [title, setTitle] = useState<string>('Product Name');
    const [price, setPrice] = useState<number>(100);
    const [image, setImage] = useState<string>('https://t3.ftcdn.net/jpg/04/34/72/82/360_F_434728286_OWQQvAFoXZLdGHlObozsolNeuSxhpr84.jpg');
    const [description, setDescription] = useState<string>('Product Description');
    const [category, setCategory] = useState<string>('electronics');

    const { data: categories, isLoading: categoryLoading } = useGetCategoriesQuery();

    const [addProductMutation, { isLoading, data }] = useAddNewProductMutation();

    const chooseCategory = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setCategory(event.target.value);
    }

    const addProduct = async (event: React.ChangeEvent<HTMLFormElement>) => {
        event.preventDefault();

        if (title && price && description && image && category) {
            await addProductMutation({
                title,
                price, 
                description,
                image,
                category,
            })
        }
    }

    console.log(data);
    
    return (
        <div className={styles.addProduct}>
            {
                isLoading && <Loader />
            }
            <form onSubmit={addProduct}>
                <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <input
                    type="number"
                    value={price}
                    onChange={(e) => setPrice(Number(e.target.value))}
                />
                <input
                    type="text"
                    value={image}
                    onChange={(e) => setImage(e.target.value)}
                />
                <textarea
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />
                {
                    categoryLoading && <Loader />
                }
                {
                    categories && (
                        <select
                            value={'electronics'}
                            onChange={chooseCategory}
                        >
                            {
                                categories.map((category) => (
                                    <option
                                        key={category}
                                        value={category}
                                    >{category}</option>
                                ))
                            }
                        </select>
                    )
                }
                <button type='submit'>Add Product</button>
            </form>
        </div>
    );
};

export default AddProduct;
