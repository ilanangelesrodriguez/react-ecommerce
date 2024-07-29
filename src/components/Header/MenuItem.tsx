import { Link } from 'react-router-dom';

interface MenuItemProps {
  icon: JSX.Element;
  text: string;
  to: string;
}

const MenuItem = ({ icon, text, to }: MenuItemProps) => (
  <li className="flex items-center px-4 py-2 hover:bg-gray-100 cursor-pointer">
    {icon}
    <Link to={to} className="ml-2">{text}</Link>
  </li>
);

export default MenuItem;