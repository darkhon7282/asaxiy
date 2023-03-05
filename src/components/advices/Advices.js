import React from 'react'
import "./Advices.css"

function Advices() {
  return (
    <div className='advices container'>
        <h1>Asaxiy kompaniyasi haqida</h1>
        <p className='advices_about'>Butun O‘zbekiston bo‘ylab maishiy texnika va elektronika tovarlarini yetkazib beruvchi kompaniyamizning asosiy afzalligi – ko‘p yillik ish tajribasi va yaxshi nom qozonib ulgurganidir. Asos solinganidan buyon Asaxiy internet-do‘koni va uning jamoasi iste’mol bozorining talablari tendensiyalarini tinimsiz kuzatib kelmoqda; bu esa bizga eng so‘nggi texnologiyalar va innovatsion yechimlardan hamisha boxabar bo‘lib turish imkonini beradi.</p>
        
        <p className='advices_about'>Kompaniiya mutaxassislari mijozlarimizning istaklarini diqqat bilan o‘rganishadi, shu bois resurs doimiy tarzda hamyonbop narxlardagi sifatli yangi mahsulotlar bilan boyitilib kelmoqda.</p>
        
        <div className="about__help">
            <div className="principle">Kompaniyaning ish tamoyili</div>
            <div className="advantage">Bizning afzalliklarimiz</div>
        </div>

        <p className='advices__address'>"Asaxiy Books" MCHJ </p>
        <p className='advices__address'>Ro'yxatdan o'tish raqami: 646439 </p>
        <p className='advices__address'>INN: 305829008</p>
        <p className='advices__address'>MCHJ rahbari: Allayev Firuz Abdunasimovich</p>
    </div>
  )
}

export default Advices