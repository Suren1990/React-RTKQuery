import cn from 'classnames';
import styles from './Header.module.scss';
import { NavLink } from 'react-router-dom';
import { RoutesPath } from '../../Consts';

const Header = () => {
    return (
        <div className={styles.header}>
            <nav className={styles.nav}>
                <NavLink to={RoutesPath.home} end className={(navData) => cn(styles.nav__link, {[styles.nav__link_active]: navData.isActive})}>Home</NavLink>
                <NavLink to={RoutesPath.store} className={(navData) => cn(styles.nav__link, {[styles.nav__link_active]: navData.isActive})}>Store</NavLink>
                <NavLink to={RoutesPath.addProduct} className={(navData) => cn(styles.nav__link, {[styles.nav__link_active]: navData.isActive})}>Add Product</NavLink>
            </nav>
        </div>
    );
};

export default Header;
