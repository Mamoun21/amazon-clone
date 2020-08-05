import React from "react";
import "./Home.css";
// import Product from "../../component/product/Product";
import Product from "./Product";
function Home() {
  return (
    <div className="home">
      <img
        className="home__image"
        src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
        alt=""
      />
      <div className="home__row">
        <Product
          id="12321341"
          title="the len startup: How Constant Innovation Creates Radically Successful Businesses Paperback"
          price={11.96}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL.SX325_BO1,204,203,200_.jpg"
        />
        <Product
          id="49538094"
          title="the len startup: How Constant Innovation Creates Radically Successful Businesses Paperback"
          price={239.0}
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/I/41iQCUasS1L._AC_SY200_QL15_FMwebp_.jpg"
        />
      </div>
      <div className="home__row">
        <Product
          id="4903850"
          title="the len startup: How Constant Innovation Creates Radically Successful Businesses Paperback"
          price={199.99}
          rating={3}
          image="https://images-na.ssl-images-amazon.com/images/I/41XnTnpJd-L._AC_US218_.jpg"
        />
        <Product
          id="23445930"
          title="the len startup: How Constant Innovation Creates Radically Successful Businesses Paperback"
          price={98.99}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/81ipKYwWZBL._AC_SL1500_.jpg"
        />
        <Product
          id="3254354345"
          title="the len startup: How Constant Innovation Creates Radically Successful Businesses Paperback"
          price={398.99}
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/I/41MLxpOejLL._AC_SY400_.jpg"
        />
      </div>
      <div className="home__row">
        <Product
          id="90829332"
          title="the len startup: How Constant Innovation Creates Radically Successful Businesses Paperback"
          price={1094.98}
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/I/71RiQZ0J2SL._AC_SX425_.jpg"
        />
      </div>
    </div>
  );
}

export default Home;
