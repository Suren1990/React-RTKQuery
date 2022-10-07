import { Routes, Route } from 'react-router-dom';
import Product from './pages/Product/Product';
import { RoutesPath } from './Consts';
import Home from './pages/Home/Home';
import Store from './pages/Store/Store';
import AddProduct from './pages/AddProduct/AddProduct';

const Routing = () => {
    return (
        <Routes>
            <Route path={RoutesPath.home} element={<Home />} />
            <Route path={RoutesPath.store} element={<Store />} />
            <Route path={RoutesPath.product} element={<Product />} />
            <Route path={RoutesPath.addProduct} element={<AddProduct />} />
        </Routes>
    );
};

export default Routing;