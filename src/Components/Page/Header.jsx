import React from 'react';
import './Header.css';
import {BiHomeAlt2} from 'react-icons/bi'
import {SiAboutdotme} from "react-icons/si"
import {RiContactsLine} from "react-icons/ri"
import {RiCustomerService2Fill} from "react-icons/ri"

const Header = () => {
  return (
    <header className="transparent-header">
      <nav>
        <ul>
          <li>
            <a href="/"> <BiHomeAlt2 /></a>
          </li>
          <li>
            <a href="/about" ><SiAboutdotme size={22}/></a>
          </li>
          <li>
            <a href="/contact"><RiContactsLine /></a>
          </li>
          <li>
            <a href="/service"><RiCustomerService2Fill /></a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
