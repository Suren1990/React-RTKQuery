import { Routes, Route } from 'react-router-dom';
import Product from './pages/Product/Product';
import { RoutesPath } from './Consts';
import Home from './pages/Home/Home';
import Store from './pages/Store/Store';

const Routing = () => {
    return (
        <Routes>
            <Route path={RoutesPath.home} element={<Home />} />
            <Route path={RoutesPath.store} element={<Store />} />
            <Route path={RoutesPath.product} element={<Product />} />
        </Routes>
    );
};

export default Routing;