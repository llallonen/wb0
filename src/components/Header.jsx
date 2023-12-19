import React from "react";

const Header = () => {
  return (
    <header className="header app-container">
      <div className="header__left">
        <div className="header__burger-btn">
          <div className="burger"></div>
        </div>
        <div className="burger--mob">
          <svg
            width="28"
            height="28"
            viewBox="0 0 28 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M2.75 6C2.75 5.30964 3.30964 4.75 4 4.75H24C24.6904 4.75 25.25 5.30964 25.25 6C25.25 6.69036 24.6904 7.25 24 7.25H4C3.30964 7.25 2.75 6.69036 2.75 6Z"
              fill="white"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M2.75 14C2.75 13.3096 3.30964 12.75 4 12.75H24C24.6904 12.75 25.25 13.3096 25.25 14C25.25 14.6904 24.6904 15.25 24 15.25H4C3.30964 15.25 2.75 14.6904 2.75 14Z"
              fill="white"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M2.75 22C2.75 21.3096 3.30964 20.75 4 20.75H18C18.6904 20.75 19.25 21.3096 19.25 22C19.25 22.6904 18.6904 23.25 18 23.25H4C3.30964 23.25 2.75 22.6904 2.75 22Z"
              fill="white"
            />
          </svg>
        </div>
        <div className="logo"></div>
      </div>
      <div className="header__searchbar">
        <input type="search" className="search text" placeholder="Я ищу..." />
        <div className="search--mob">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="28"
            viewBox="0 0 28 28"
            fill="none"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M5.99886 12C5.99886 10.4087 6.631 8.88258 7.75622 7.75736C8.88143 6.63214 10.4076 6 11.9989 6C13.5902 6 15.1163 6.63214 16.2415 7.75736C17.3667 8.88258 17.9989 10.4087 17.9989 12C17.9989 13.5913 17.3667 15.1174 16.2415 16.2426C15.1163 17.3679 13.5902 18 11.9989 18C10.4076 18 8.88143 17.3679 7.75622 16.2426C6.631 15.1174 5.99886 13.5913 5.99886 12ZM11.9989 4C10.7257 4.00018 9.471 4.30422 8.339 4.88684C7.20699 5.46946 6.23038 6.31384 5.49034 7.3498C4.7503 8.38577 4.26819 9.5834 4.08409 10.8432C3.89998 12.1029 4.0192 13.3884 4.43183 14.5928C4.84446 15.7973 5.53859 16.8858 6.45652 17.768C7.37446 18.6502 8.48969 19.3006 9.70953 19.6651C10.9294 20.0296 12.2186 20.0977 13.4701 19.8638C14.7215 19.6298 15.8991 19.1006 16.9049 18.32L22.4339 23.85C22.6215 24.0375 22.8759 24.1428 23.1412 24.1427C23.4065 24.1426 23.6608 24.0371 23.8484 23.8495C24.0359 23.6619 24.1412 23.4074 24.1411 23.1421C24.141 22.8769 24.0355 22.6225 23.8479 22.435L18.3179 16.905C19.2356 15.7225 19.8032 14.3063 19.9561 12.8173C20.109 11.3283 19.8411 9.82621 19.1829 8.48188C18.5246 7.13754 17.5024 6.00485 16.2324 5.21256C14.9625 4.42027 13.4957 4.00017 11.9989 4Z"
              fill="white"
            />
          </svg>
        </div>
      </div>
      <div className="header__nav">
        <div className="header__nav-item profile-btn">
          <button type="button">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="29"
              viewBox="0 0 28 29"
              fill="none"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M18.5207 9.28873C18.5207 12.0587 16.4361 14.2066 14.006 14.2066C11.5759 14.2066 9.49117 12.0587 9.49117 9.31221C9.47931 6.60094 11.5878 4.5 14.006 4.5C16.4241 4.5 18.5207 6.55399 18.5207 9.28873ZM4.5 22.9977C4.5 23.9836 5.14326 24.5 6.94201 24.5H21.058C22.8567 24.5 23.5 23.9836 23.5 22.9977C23.5 20.1338 19.8429 16.1901 14.006 16.1901C8.15705 16.1901 4.5 20.1338 4.5 22.9977Z"
                fill="white"
              />
            </svg>
            <span>Профиль</span>
          </button>
        </div>
        <div className="header__nav-item cart-btn">
          <button type="button">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="29"
              viewBox="0 0 28 29"
              fill="none"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M11.2214 17.4665C11.3829 17.9206 11.8452 18.1949 12.3212 18.119L25.0874 16.0828C25.5004 16.017 25.8288 15.701 25.9106 15.2909L27.2654 8.49865C27.3875 7.88644 26.925 7.31324 26.3008 7.30317L8.94122 7.02324C8.24354 7.01199 7.74913 7.70067 7.98289 8.35812L11.2214 17.4665Z"
                fill="white"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M11.8262 25.3593C13.1109 25.3593 14.1523 24.3178 14.1523 23.0331C14.1523 21.7484 13.1109 20.707 11.8262 20.707C10.5415 20.707 9.5 21.7484 9.5 23.0331C9.5 24.3178 10.5415 25.3593 11.8262 25.3593Z"
                fill="white"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M23.457 25.3593C24.7417 25.3593 25.7831 24.3178 25.7831 23.0331C25.7831 21.7484 24.7417 20.707 23.457 20.707C22.1723 20.707 21.1308 21.7484 21.1308 23.0331C21.1308 24.3178 22.1723 25.3593 23.457 25.3593Z"
                fill="white"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M5 4C6.933 4 8.5 3.77614 8.5 3.5C8.5 3.22386 6.933 3 5 3C3.067 3 1.5 3.22386 1.5 3.5C1.5 3.77614 3.067 4 5 4Z"
                fill="white"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M2.45442 2.65147C3.1177 2.55672 4.01745 2.5 5 2.5C5.98255 2.5 6.8823 2.55672 7.54558 2.65147C7.87345 2.69831 8.16489 2.75734 8.38495 2.83167C8.4917 2.86772 8.61185 2.91717 8.71511 2.98926C8.80017 3.04864 9 3.21275 9 3.5C9 3.78725 8.80017 3.95136 8.71511 4.01074C8.61185 4.08283 8.4917 4.13228 8.38495 4.16833C8.16489 4.24266 7.87345 4.30169 7.54558 4.34853C6.8823 4.44328 5.98255 4.5 5 4.5C4.01745 4.5 3.1177 4.44328 2.45442 4.34853C2.12655 4.30169 1.83511 4.24266 1.61505 4.16833C1.5083 4.13228 1.38815 4.08283 1.28489 4.01074C1.19983 3.95136 1 3.78725 1 3.5C1 3.21275 1.19983 3.04864 1.28489 2.98926C1.38815 2.91717 1.5083 2.86772 1.61505 2.83167C1.83511 2.75734 2.12655 2.69831 2.45442 2.65147Z"
                fill="white"
              />
            </svg>
            <span>Корзина</span>
            <span className="cart__notify">3</span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
