import React, { useState } from "react";
import "../../router/like/Like.css";
import "./CartItem.css";
import { ADD_TO_CART, REMOVE_CART } from "../../context/action/actionType";
import { Link, NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Empty from "../../components/empty/Empty";
import { BsFillCreditCard2FrontFill, BsFillTrashFill } from "react-icons/bs";
import { FaWallet } from "react-icons/fa";
import { GoPerson } from "react-icons/go";

import empty from "../../assets/empty.png";

const BOT_TOKEN = "6135623478:AAFJEctYWsqc_npLBX6xiyyEUaBFDY45Eu8";

const CHAT_ID = "-1001844285859";

// chat id olish uchun
// https://api.telegram.org/bot6135623478:AAFJEctYWsqc_npLBX6xiyyEUaBFDY45Eu8/getUpdates

// xabarni chatga yuborish uchun
// https://api.telegram.org/bot[your_token]/sendMessage?chat_id=[your chat_id]&parse_mode=html

function CartItem({ korzinka }) {
  const [name, setName] = useState("");
  const [tel, settel] = useState("");
  const [address, setaddress] = useState("");
  const [desc, setdesc] = useState("");

  const dispatch = useDispatch();
  const addToCart = (item) => {
    let index = korzinka.findIndex((i) => i.id === item.id);
    if (index < 0) {
      return dispatch({
        type: ADD_TO_CART,
        payload: [...korzinka, { ...item, qty: 1 }],
      });
    }
    let newCart = korzinka.map((pro, inx) =>
      inx === index ? { ...pro, qty: pro.qty + 1 } : pro
    );
    dispatch({ type: ADD_TO_CART, payload: newCart });
  };
  const minusToCart = (item) => {
    let index = korzinka.findIndex((i) => i.id === item.id);
    if (index < 0) {
      return dispatch({
        type: ADD_TO_CART,
        payload: [...korzinka, { ...item, qty: 1 }],
      });
    }
    let newCart = korzinka.map((pro, inx) =>
      inx === index ? { ...pro, qty: pro.qty - 1 } : pro
    );
    dispatch({ type: ADD_TO_CART, payload: newCart });
  };
  const like = useSelector((s) => s.cart);

  const order = () => {
    let msg = "";
    msg += `Ism: <b>${name}</b> %0A`;
    msg += `Tel: <b>${tel}</b> %0A`;
    msg += `Address: <b>${address}</b> %0A`;
    msg += `Ta'rif: <b>${desc}</b> %0A`;

    msg += "%0A<b>Buyurtmalar</b> %0A%0A";
    korzinka.forEach((order) => {
      msg += `Nomi: ${order.title} %0A`;
      msg += `Soni: ${order.qty} %0A`;
      msg += `Narxi: ${order.price} %0A%0A`;
    });

    console.log(msg);

    const API_URL = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage?chat_id=${CHAT_ID}&text=${msg}&parse_mode=html`;
    let api = new XMLHttpRequest();
    api.open("GET", API_URL, true);
    api.send();
  };

  return (
    <div className="container like">
      <h1>To'lov ma'lumotlari</h1>
      {like.length === 0 ? (
        <Empty url={empty} text="Savatchangiz bo'sh" />
      ) : (
        <div className="">
          <div className="like__text">
            <div className="your__information">
              <div className="info__text">
                <h1>Sizning ma'lumotlaringiz</h1>
                <button>Bekor qilish</button>
              </div>
              <div className="your__full">
                <div className="your_info">
                  <input
                    value={tel}
                    onChange={(e) => settel(e.target.value)}
                    type="text"
                    placeholder="Telefon raqami"
                  />
                  <input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    type="text"
                    placeholder="F.I.O"
                  />
                </div>
                <div className="your_info">
                  <select name="" id="">
                    <option value="">Namangan viloyati</option>
                    <option value="">Andijon viloyati</option>
                    <option value="">Farg'ona viloyati</option>
                    <option value="">Toshkent viloyati</option>
                    <option value="">Sirdaryo viloyati</option>
                    <option value="">Jizzax viloyati</option>
                    <option value="">Samarqand viloyati</option>
                    <option value="">Qashqadaryo viloyati</option>
                    <option value="">Surxondaryo viloyati</option>
                    <option value="">Buxoro viloyati</option>
                    <option value="">Xorazm viloyati</option>
                    <option value="">Qoraqalog'iston Respublikasi</option>
                    <option value="">Toshkent shahri</option>
                  </select>
                  <select name="" id="">
                    <option value="">Namangan shahri</option>
                    <option value="">Namangan tumani</option>
                    <option value="">Chortoq tumani</option>
                    <option value="">Yangiqo'rgon tumani</option>
                    <option value="">Chust tumani</option>
                    <option value="">Kosonsoy tumani</option>
                    <option value="">Ming buloq tumani</option>
                    <option value="">Norin tumani</option>
                    <option value="">Pop tumani</option>
                    <option value="">Uychi tumani</option>
                    <option value="">Uchqo'rg'on tumani</option>
                    <option value="">To'raqo'rgon tumani</option>
                  </select>
                </div>
                <h2>Qanday qilib olish mumkin</h2>
                <div className="your__delivery">
                  <button className="your_to_home">Uyga yetkazib berish</button>
                  <button className="your__filial">BTS filiallari</button>
                </div>
                <select className="your__district" name="" id="">
                  <option value="">Aholi punkti</option>
                  <option value="">Qurama</option>
                </select>
                <input
                  type="text"
                  className="your__district"
                  value={address}
                  onChange={(e) => setaddress(e.target.value)}
                  placeholder="Manzil"
                />
                <textarea
                  className="textarea"
                  value={desc}
                  onChange={(e) => setdesc(e.target.value)}
                  placeholder="Ish joyingiz manzili"
                  id=""
                  cols="30"
                  rows="10"
                ></textarea>
                <textarea
                  className="textarea"
                  value={desc}
                  onChange={(e) => setdesc(e.target.value)}
                  placeholder="Qo'shimcha"
                  id=""
                  cols="30"
                  rows="10"
                ></textarea>
                <button className="promo_kod_btn">Promo kod bormi?</button>
                <h2>To'lov usuli</h2>
                <div className="paymant__type">
                  <button name="karta">
                    <input type="radio" name="karta" id="" />{" "}
                    <label>
                      <BsFillCreditCard2FrontFill /> Karta orqali online
                      to'lov(Uzcard, Humo, Visa, Mastercard)
                    </label>
                  </button>
                  <button name="karta">
                    <input type="radio" name="karta" id="" />{" "}
                    <label htmlFor="">
                      <FaWallet /> Mahsulotni olganda (naqd)
                    </label>
                  </button>
                  <button name="karta">
                    <input type="radio" name="karta" id="" />{" "}
                    <label htmlFor="">
                      <GoPerson /> Hisob raqam orqali to'lash
                    </label>
                  </button>
                </div>

                <div className="procurement__rule">
                  <input type="checkbox" name="" id="" />
                  <label htmlFor="">
                    Xarid qilish{" "}
                    <a href="https://asaxiy.uz/uz/page/ruless">qoidalariga</a>{" "}
                    roziman
                  </label>
                </div>
                <h1 className="like_price">
                  Jami narx:{" "}
                  {korzinka.reduce((a, b) => a + b.price * b.qty, 0).brm()} so'm
                </h1>
                <div className="your__order">
                  <button className="your__book" onClick={order}>
                    Buyurtma berish
                  </button>
                  <NavLink className="your__back" to={"/"}>
                    Orqaga
                  </NavLink>
                </div>
              </div>
            </div>
          </div>

          <div className="like__full">
            <div className="favourit">
              {korzinka?.map((item, ind) => (
                <div key={ind} className="zzzzz">
                  <div className="for__hr">
                    <div className="like__product">
                      <Link to={`/information/${item.id}`}>
                        <img src={item.urls[0]} alt="" />
                      </Link>

                      <div className="like__name">
                        <Link to={`/information/${item.id}`}>
                          <h3>{item?.title}</h3>
                        </Link>
                        <div className="like__brand">
                          <h4>{item?.brand}</h4>
                        </div>
                      </div>
                      <div className="like__cost">
                        <button
                          className="minus"
                          disabled={item?.qty <= 1}
                          onClick={() => minusToCart(item)}
                        >
                          -
                        </button>
                        <span>{item?.qty}</span>
                        <button
                          className="plus"
                          onClick={() => addToCart(item)}
                        >
                          +
                        </button>
                      </div>
                      <div className="like__download">
                        <button className="like_btn1">
                          <h4>{item?.price.brm()} so'm</h4>
                        </button>
                        <button
                          onClick={() =>
                            dispatch({ type: REMOVE_CART, payload: item.id })
                          }
                          className="like_btn2"
                        >
                          <BsFillTrashFill /> O'chirish
                        </button>
                      </div>
                    </div>
                    <hr />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default CartItem;
