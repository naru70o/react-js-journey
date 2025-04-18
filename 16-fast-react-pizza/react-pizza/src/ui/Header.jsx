import { Link } from 'react-router-dom';
import Username from '../features/user/Username';

function Header() {
  return (
    <>
      <header className="sm:max-w-fill flex items-center justify-between border-b border-stone-200 bg-yellow-400 px-4 py-3 uppercase sm:px-6 md:text-sm">
        <Link to="/" className="tracking-widest">
          Fast React Pizza Co.
        </Link>

        <Username />
      </header>
    </>
  );
}

export default Header;
