import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./SingleRoute.css";
import { MdShoppingBasket, MdTextsms } from "react-icons/md";
import { BsFacebook, BsTelegram, BsWhatsapp } from "react-icons/bs";
import { AiFillTwitterCircle, AiTwotoneStar } from "react-icons/ai";

import { collection, getDocs } from "firebase/firestore";
import { db } from "../../server";


import "swiper/css";
import "swiper/css/pagination";

function SingleRoute() {
  const params = useParams();

  const [data, setData] = useState([]);

  const productsColRef = collection(db, "products");

  useEffect(() => {
    const getProducts = async () => {
      const products = await getDocs(productsColRef);
      setData(products.docs.map((pro) => ({ ...pro.data(), id: pro.id })));
    };
    getProducts();
  }, []);

  const oneItem = data?.find((el) => el.id === params.id);

  if (!oneItem) {
    return (
      <div className="placeholder container">
        <div className="placeholder__image"></div>
        <div className="placeholder__text">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    );
  }

  return (
    <div className="container">
      <div className="product__overall">
        <div className="product_pic_info">
          <div className="product__pic">
            <img src={oneItem?.urls[0]} alt="" />
          </div>
          <div className="product__info">
            <h3 className="product_name_info">{oneItem?.title}</h3>
            <h2>{oneItem?.price.brm()} so'm</h2>
            <div className="product___comment">
              <AiTwotoneStar />
              <AiTwotoneStar />
              <AiTwotoneStar />
              <AiTwotoneStar />
              <AiTwotoneStar />
              <div className="ta__sharx">
                <MdTextsms className="ta_sharx" />
                <p>*** ta sharh</p>
              </div>
            </div>

            <h4>{oneItem?.desc}</h4>

            <h5>
              Holati: <b>* sotuvda bor</b>
            </h5>

            <div className="product__share">
              <h5>Ulashish :</h5>
              <BsFacebook />
              <BsTelegram />
              <AiFillTwitterCircle />
              <BsWhatsapp />
            </div>
            <button className="product_add_bascet">
              <MdShoppingBasket className="product__bascet" /> Savatchaga
              qo'shish
            </button>
            <button className="product_buy">Bir bosishda sotib olish</button>
          </div>
        </div>
      </div>
      <div className="product__description">
        <h2>Mahsulot Ta'rifi</h2>
        <h1>Lorem, ipsum.</h1>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. At harum tempora molestiae voluptatibus sint saepe sequi nulla sapiente nostrum cumque inventore ipsum odio deleniti nam neque dolorum itaque accusamus quia ullam cum animi, dolores culpa ratione. Optio veniam cumque, expedita accusantium iure neque deleniti sunt architecto cupiditate error necessitatibus nulla eaque, dicta, culpa facilis laudantium cum autem. Blanditiis voluptates vel debitis quae, nemo fugit natus laudantium culpa quis unde, consequatur facilis eos aut necessitatibus optio minus iusto quidem corrupti recusandae?</p>
        <h1>Lorem, ipsum.</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        <h1>Lorem</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, impedit in. Eaque possimus temporibus tenetur minus quo quae hic minima natus necessitatibus!</p>
        <h1>Lorem ipsum dolor sit.</h1>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur suscipit assumenda quibusdam vitae, dolore sapiente ipsum aperiam iure culpa ullam alias neque, vero beatae nihil quaerat ipsam fugit? Sunt, ab.</p>
        <h1>Lorem, ipsum.</h1>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptate nemo fuga saepe voluptatem, quos commodi dolorum ducimus repellat, eius, voluptatibus eos sunt nostrum vel quod non nisi dolores. Autem deserunt minima officiis modi libero cumque pariatur illo dolorum quidem. Nam.</p>
      </div>
    </div>
  );
}

export default SingleRoute;
