import React from "react";
import "./Footer.css";

import { useLocation } from "react-router-dom";

import { HiOutlinePhone } from "react-icons/hi"
import { RxEnvelopeClosed } from "react-icons/rx"
import { TfiLocationPin } from "react-icons/tfi"
import { FaTelegramPlane, FaFacebookF } from "react-icons/fa"
import { BsInstagram, BsYoutube } from "react-icons/bs"
import { ImRss } from "react-icons/im"

function Footer() {
  const { pathname } = useLocation();
  if (pathname.includes("admin")) {
    return <></>;
  }

  return (
    <div className="footer">
      <div className="container">
        <div className="footer_top">
          <div className="bazar_deliv">
            <div className="endi">
              <div className="endi__logo">
                <img src="https://asaxiy.uz/custom-assets/images/icons/market.svg" alt="" />
              </div>
              <div className="endi__text">
                <h4>Endi bozorga borishga hojat yo'q</h4>
                <p>Bizda qulay narxlar va uyga yetkazib berish mavjud</p>
              </div>
            </div>
            <div className="endi">
              <div className="endi__logo">
                <img src="https://asaxiy.uz/custom-assets/images/icons/fast-delivery.svg" alt="" />
              </div>
              <div className="endi__text">
                <h4>Tez yetkazib berish</h4>
                <p>Bizning xizmatimiz sizni ajablantiradi</p>
              </div>
            </div>
            <div className="endi">
              <div className="endi__logo">
                <img src="https://asaxiy.uz/custom-assets/images/icons/return.svg" alt="" />
              </div>
              <div className="endi__text">
                <h4>Siz uchun qulaylikalar</h4>
                <p>Nosozlik yuzga kelganda tez rasmiylashtirish va qaytarish kafolati</p>
              </div>
            </div>
            <div className="endi">
              <div className="endi__logo">
                <img src="https://asaxiy.uz/custom-assets/images/icons/card.svg" alt="" />
              </div>
              <div className="endi__text">
                <h4>Bo'lib to'lash</h4>
                <p>3, 6, 9 va 12 oy davomida oldindan to'lovsiz</p>
              </div>
            </div>
          </div>
          <div className="footer__info">
              <div className="foot__information">
                <h3>Ma'lumotlar</h3>
                <ul>
                  <li>Ommaviy oferta (fodalanuvchi bitimi)</li>
                  <li>Muddatli to'lov asosida sotib olishning asosiy qoidalari</li>
                  <li>Muddatli to'lov shartlari</li>
                  <li>Buyurtma qanday beriladi</li>
                  <li>tovarlarni yetkazib berish va to'lov turlari</li>
                  <li>Buyurtmalarni bekor qilish va tovarni qaytarish</li>
                  <li>Biz haqimizda</li>
                  <li>Promo kod (Kupon) ni qanday aktivlashtirishingiz mumkin!</li>
                </ul>
              </div>
              <div className="foot__information">
                <h3>Biz bilan aloqa</h3>
                <ul>
                  <li><HiOutlinePhone className="foot__information_logo"/> +998 71 200 01 05</li>
                  <li><RxEnvelopeClosed className="foot__information_logo"/> info@asaxiy.uz</li>
                  <li><TfiLocationPin className="foot__information_logo"/> Chilonzor 3, Toshkent</li>
                  
                </ul>
              </div>
              <div className="foot__information">
                <h3>Biz ijtimoiy tarmoqlarda</h3>
                <ul className="foot_smm">
                  <li><FaFacebookF className="foot__information_logo"/></li>
                  <li><FaTelegramPlane className="foot__information_logo"/></li>
                  <li><BsInstagram className="foot__information_logo"/></li>
                  <li><BsYoutube className="foot__information_logo"/></li>
                  <li><ImRss className="foot__information_logo"/></li>
                </ul>
              </div>
          </div>
          
          <div className="footer_pay">
            <h3>To'lov turlari :</h3>
            <img src="https://asaxiy.uz/custom-assets/images/apelsin-logo.svg" alt="" />
            <img src="https://asaxiy.uz/custom-assets/images/payme.svg" alt="" />
            <img src="https://asaxiy.uz/custom-assets/images/visa.svg" alt="" />
            <img src="https://asaxiy.uz/custom-assets/images/mastercard.svg" alt="" />
            <img src="https://asaxiy.uz/custom-assets/images/humo.svg" alt="" />
            <img src="https://asaxiy.uz/custom-assets/images/uzcard.svg" alt="" />
          </div>
          <p className="footer__security">2015-2022 Internet-do’kon asaxiy.uz: Maishiy texnikalar va boshqalar.Mahsulotni yetkazib berish barcha viloyatlarda amalga oshiriladi. Barcha huquqlar himoyalangan.</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
