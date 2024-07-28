import { Product } from '../../models/Product';
import BurgerMenu from './BurgerMenu';
import BusinessName from './BusinessName';
import ShoppingCart from './ShoppingCart';

const Header = ({ cart, emptyCart }: { cart: Product[], emptyCart: () => void }) => {
  return (
    <nav className="fixed top-0 left-0 w-full text-black bg-amber-100 flex justify-between items-center p-2">
      <BurgerMenu />
      <BusinessName />
      <ShoppingCart cart={cart} emptyCart={emptyCart}/>
    </nav>
  );
};

export default Header;