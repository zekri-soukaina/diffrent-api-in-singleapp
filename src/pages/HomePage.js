import React from "react";
import "./HomePage.css";
import homeimg from "../images/homeimg.jpeg";
import pokeimg from "../images/pokeimg.jpg";
import adviceimg from "../images/adviceimg.jpg";
import cocktailsimg from "../images/cocktailsimg.jpg";
import movieimg from "../images/movieimg.jpg";
import { Link, NavLink } from "react-router-dom";

export default function HomePage() {
  return (
    <div>
      <div>
        <div className="divImg">
          <img className="homeimage" src={homeimg} alt="img"></img>
        </div>
        <p className="joinushead">lets enjoy programming together!</p>
        <p className="joinuspara">
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly believable.
          If you are going to use a passage of Lorem Ipsum...
        </p>

        <div className="down">
          <svg
            width="34"
            height="34"
            viewBox="0 0 34 34"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M17 34C12.4592 34 8.19002 32.2317 4.97917 29.0208C1.76833 25.81 0 21.5408 0 17C0 12.4592 1.76833 8.19002 4.97917 4.97917C8.19002 1.76833 12.4592 0 17 0C21.5408 0 25.81 1.76833 29.0208 4.97917C32.2317 8.19002 34 12.4592 34 17C34 21.5408 32.2317 25.81 29.0208 29.0208C25.81 32.2317 21.5408 34 17 34ZM17 2.65625C9.09091 2.65625 2.65625 9.09091 2.65625 17C2.65625 24.9091 9.09091 31.3438 17 31.3438C24.9091 31.3438 31.3438 24.9091 31.3438 17C31.3438 9.09091 24.9091 2.65625 17 2.65625ZM26.183 14.7422L24.3047 12.8639L17 20.1686L9.69531 12.8639L7.817 14.7422L17 23.9252L26.183 14.7422Z"
              fill="black"
            />
          </svg>
        </div>
      </div>

      <div className="div-1">
        <div className="div-1-1">
          <img className="pokeimg" src={pokeimg} alt="img"></img>
        </div>
        <div className="div-1-2">
          <NavLink to="/pokemons">Pokemon</NavLink>
        </div>
      </div>

      <div className="div0">
        <div className="div0-1">
          <img className="adviceimg" src={adviceimg} alt="img"></img>
        </div>
        <div className="div0-2">
          <NavLink to="/advices">advices</NavLink>
        </div>
        <p className="div0-3">
          there is here some crazy advices for you check it out!
        </p>
      </div>

      <div className="div1">
        <div className="div1-1">
          <img className="cocktailsimg" src={cocktailsimg} alt="img"></img>
        </div>
        <div className="div1-2">
          <NavLink to="/cocktails">cocktails</NavLink>
        </div>
      </div>

      <div className="div2">
        <div className="div2-1">
          <img className="movieimg" src={movieimg} alt="img"></img>
        </div>
        <div className="div2-2">
          <svg
            width="34"
            height="34"
            viewBox="0 0 34 34"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M17 34C12.4592 34 8.19002 32.2317 4.97917 29.0208C1.76833 25.81 0 21.5408 0 17C0 12.4592 1.76833 8.19002 4.97917 4.97917C8.19002 1.76833 12.4592 0 17 0C21.5408 0 25.81 1.76833 29.0208 4.97917C32.2317 8.19002 34 12.4592 34 17C34 21.5408 32.2317 25.81 29.0208 29.0208C25.81 32.2317 21.5408 34 17 34ZM17 2.65625C9.09091 2.65625 2.65625 9.09091 2.65625 17C2.65625 24.9091 9.09091 31.3437 17 31.3437C24.9091 31.3437 31.3437 24.9091 31.3437 17C31.3437 9.09091 24.9091 2.65625 17 2.65625ZM26.183 14.7422L24.3047 12.8639L17 20.1686L9.69531 12.8639L7.817 14.7422L17 23.9252L26.183 14.7422Z"
              fill="#C4C4C4"
            />
          </svg>
        </div>
      </div>

      <div className="div3"></div>

      <div className="div4">
        <div className="div4-1"></div>
        <div className="div4-2"></div>
        <div className="div4-3">
          <svg
            width="38"
            height="35"
            viewBox="0 0 38 35"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M37.3467 17.2032C37.3172 21.7439 35.3776 26.0024 31.8851 29.194C28.3926 32.3855 23.7652 34.1282 18.8555 34.101C13.9459 34.0737 9.34137 32.2798 5.89053 29.0498C2.43968 25.8198 0.555397 21.54 0.584841 16.9993C0.614284 12.4586 2.55393 8.20012 6.04642 5.00858C9.5389 1.81705 14.1664 0.0743606 19.076 0.101591C23.9856 0.128822 28.5901 1.92272 32.041 5.15276C35.4918 8.3828 37.3761 12.6625 37.3467 17.2032ZM3.45686 17.0153C3.40558 24.9242 10.3212 31.3973 18.8728 31.4448C27.4243 31.4922 34.4234 25.0962 34.4747 17.1873C34.5259 9.27836 27.6103 2.80522 19.0588 2.75779C10.5072 2.71036 3.50814 9.10632 3.45686 17.0153ZM16.5841 7.90491L14.541 9.77192L22.3917 17.1203L14.4463 24.381L16.465 26.2706L26.4535 17.1428L16.5841 7.90491Z"
              fill="#C4C4C4"
            />
          </svg>
        </div>
      </div>

      <div className="div5"></div>

      <div className="connect"></div>
      <div className="social"></div>
      <div className="sponsers"></div>
    </div>
  );
}
