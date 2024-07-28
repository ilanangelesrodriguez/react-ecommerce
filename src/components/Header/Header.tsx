import BurgerMenu from './BurgerMenu';
import BusinessName from './BusinessName';
import ShoppingCart from './ShoppingCart';

const Header = () => {
  return (
    <nav className="fixed top-0 left-0 w-full text-black bg-amber-100 flex justify-between items-center p-2">
      <BurgerMenu />
      <BusinessName />
      <ShoppingCart />
    </nav>
  );
};

export default Header;