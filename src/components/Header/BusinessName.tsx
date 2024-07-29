import logo from '../../assets/logo.png';
import { Link } from 'react-router-dom';

const BusinessName = () => {
  return (
    <div className="flex items-center justify-center flex-grow">
      <Link to="/">
        <img src={logo} alt="Novedades Marita" className="h-12 ml-2" />
      </Link>
    </div>
  );
};

export default BusinessName;