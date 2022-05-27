import bata from "../assets/images/bata.png";
import { NavLink } from "react-router-dom";
import "./style.scss";
// import kids from "../assets/images/kids.png";
function Header() {
  return (
    <div className="header">
      <div className="logo">
        <NavLink to="/">
          <img src={bata} alt="logo" />
        </NavLink>
      </div>
      <div className="navbar">
        <ul>
          <li>
            <NavLink to="sneaker-studio" id="sneaker" className="fixed">
              SNEAKER STUDIO
            </NavLink>
          </li>
          <li>
            <NavLink to="new">NEW</NavLink>
          </li>
          <li>
            <NavLink to="women">WOMEN</NavLink>
          </li>
          <li>
            <NavLink to="men">MEN</NavLink>
          </li>
          <li>
            <NavLink to="kids">KIDS</NavLink>
          </li>
          <li>
            <NavLink to="sale">SALE</NavLink>
          </li>
          <li>
            <NavLink to="brands">BRANDS</NavLink>
          </li>
        </ul>
      </div>
      <div className="icons">
        <ul>
          <li className="mobile">
            <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1.5"
                d="M19.25 19.25L15.5 15.5M4.75 11C4.75 7.54822 7.54822 4.75 11 4.75C14.4518 4.75 17.25 7.54822 17.25 11C17.25 14.4518 14.4518 17.25 11 17.25C7.54822 17.25 4.75 14.4518 4.75 11Z"
              ></path>
            </svg>
          </li>
          <li>
            <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1.5"
                d="M15.2502 15.25H4.75V4.75H15.2502V15.25Z"
              ></path>
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1.5"
                d="M9.25 17.5C9.25 18.4665 8.4665 19.25 7.5 19.25C6.5335 19.25 5.75 18.4665 5.75 17.5C5.75 16.5335 6.5335 15.75 7.5 15.75C8.4665 15.75 9.25 16.5335 9.25 17.5Z"
              ></path>
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1.5"
                d="M18.25 17.5C18.25 18.4665 17.4665 19.25 16.5 19.25C15.5335 19.25 14.75 18.4665 14.75 17.5C14.75 16.5335 15.5335 15.75 16.5 15.75C17.4665 15.75 18.25 16.5335 18.25 17.5Z"
              ></path>
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1.5"
                d="M19.2502 15.25H15.25V8.75H16.2502C17.9071 8.75 19.2502 10.0931 19.2502 11.75V15.25Z"
              ></path>
            </svg>
          </li>
          <li className="mobile">
            <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
              <circle
                cx="12"
                cy="8"
                r="3.25"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1.5"
              ></circle>
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1.5"
                d="M6.8475 19.25H17.1525C18.2944 19.25 19.174 18.2681 18.6408 17.2584C17.8563 15.7731 16.068 14 12 14C7.93201 14 6.14367 15.7731 5.35924 17.2584C4.82597 18.2681 5.70558 19.25 6.8475 19.25Z"
              ></path>
            </svg>
          </li>
          <li className="mobile">
            <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
              <path
                fill-rule="evenodd"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1.5"
                d="M11.995 7.23319C10.5455 5.60999 8.12832 5.17335 6.31215 6.65972C4.49599 8.14609 4.2403 10.6312 5.66654 12.3892L11.995 18.25L18.3235 12.3892C19.7498 10.6312 19.5253 8.13046 17.6779 6.65972C15.8305 5.18899 13.4446 5.60999 11.995 7.23319Z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </li>
          <li>
            <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1.5"
                d="M16.5843 17.662L18.25 9.75H5.75L7.41569 17.662C7.61053 18.5875 8.42701 19.25 9.37279 19.25H14.6272C15.573 19.25 16.3895 18.5875 16.5843 17.662Z"
              ></path>
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1.5"
                d="M8.75 9.5V7.75C8.75 6.09315 10.0931 4.75 11.75 4.75H12.25C13.9069 4.75 15.25 6.09315 15.25 7.75V9.5"
              ></path>
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1.5"
                d="M19.25 9.75H4.75"
              ></path>
            </svg>
          </li>
        </ul>
      </div>
    </div>
  );
}
export default Header;
