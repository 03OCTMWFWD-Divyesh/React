import React from "react";

function Header() {
  return (
    <>
      <header id='hed'>
        <div className="hed-wr">
          <div className="container">
            <nav className="navbar">
              <div className="logo">
                <span>K</span>ING
              </div>
              <ul className="navmenu">
                <li><a href="#">Home</a></li>
                <li><a href="#">Promo</a></li>
                <li><a href="#">Project</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Contact Us</a></li>
              </ul>
              <div class="search">
                <a href="https://www.google.com"><i class="fa-solid fa-magnifying-glass"></i></a>
              </div>
            </nav>
          </div>
        </div>
      </header>
      <img src="G:\Github\React\my-app1\Image\virat_kohli_2.jpg" alt=""></img>
    </>
  )
}

export default Header;