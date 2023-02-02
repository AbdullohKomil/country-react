import { Link } from 'react-router-dom';
import './Header.scss';
import '../../App.css';
import { useEffect, useState } from 'react';
function Header() {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || '');
  document.body.classList.toggle(localStorage.getItem('theme'));

  return (
    <header>
      <nav className='navbar'>
        <div className='container d-block'>
          <ul className='navbar__list list-unstyled m-0'>
            <li className='title__item'>
              <Link
                className='text-decoration-none'
                to='/'
              >
                Where in the world?
              </Link>
            </li>
            <li className='mode__item'>
              <button
                onClick={() => {
                  if (theme == '') {
                    setTheme('dark');
                    localStorage.setItem('theme', 'dark');
                    window.location.reload();
                  } else {
                    window.location.reload();
                    localStorage.removeItem('theme');
                  }
                }}
                className='mode__button'
              >
                Dark Mode
              </button>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Header;
