"use client";

import styles from './faq.module.scss';
import add from '../../../../public/add.svg';
import Image from 'next/image';
import { useState, useEffect } from 'react';

const Faq = () => {

    const [faq1True, setFaq1True] = useState(false);
    const [faq2True, setFaq2True] = useState(false);
    const [faq3True, setFaq3True] = useState(false);
    const [faq4True, setFaq4True] = useState(false);

    useEffect(() => {
        document.addEventListener("mousemove", function(e) {

            document.querySelectorAll(".faq_circle__m2o96").forEach(function(move){
                var moving_value = move.getAttribute("data-value")
                var x = (e.clientX * moving_value) / 80;
                var y = (e.clientY * moving_value) / 80;
          
                move.style.transform = `translateX(${-x}px) translateY(${y}px)`;
              })
        });
      })

    return (
        <section className={styles.faq}>
         <div className={styles.circleParent}>
         <div data-value="-3" className={`${styles.circle1} ${styles.circle}`}></div>
         <div data-value="-2" className={`${styles.circle3} ${styles.circle}`}></div>
            <div data-value="5" className={`${styles.circle2} ${styles.circle}`}></div>
         </div>
            <div className={styles.faqTop}>
               <div className={styles.faqTopFlex}>
               <h1 className={styles.faqTopTitle}>ხშირად დასმული შეკითხვები</h1>
                <p className={styles.faqTopText}>შემთხვევითად გენერირებული ტექსტი ეხმარება დიზაინერებს და ტიპოგრაფიული ნაწარმის შემქმნელებს, რეალურთან მაქსიმალურად მიახლოებული.</p>
               </div>
            </div>

            <div className={styles.faqContainer}>
                 <div className={styles.faqContainerTop}>
                    <div className={!faq1True ? styles.dropFaq : styles.dropFaqActive}>
                    <div onClick={() => setFaq1True(!faq1True)} className={!faq1True ? styles.faqContainerBox : styles.faqContainerBoxActive}>
                        <p className={styles.faqContainerTitle}>რამდენი დღე ვმუშაობთ კვირაში?</p>
                        <Image src={add} alt="add-svg" className={!faq1True ? styles.faqImg : styles.faqImgActive}/>
                    </div>
                     {faq1True ? <div className={styles.faqDrop}>როგორი იქნება ტექსტის ბლოკი. სწორედ ასეთ დროს არის მოსახერხებელი ამ გენერატორით შექმნილი ტექსტის გამოყენება, რადგან უბრალოდ „ტექსტი ტექსტი ტექსტი“ ან სხვა გამეორებადი სიტყვების ჩაყრა, ხელოვნურ ვიზუალურ სიმეტრიას ქმნის</div>  : ""}
                    </div>
                    <div className={!faq2True ? styles.dropFaq : styles.dropFaqActive}>
                    <div onClick={() => setFaq2True(!faq2True)} className={!faq2True ? styles.faqContainerBox : styles.faqContainerBoxActive}>
                        <p className={styles.faqContainerTitle}>რა გამოგვარჩევს სხვა კლინიკებისგან?</p>
                        <Image src={add} alt="add-svg" className={!faq2True ? styles.faqImg : styles.faqImgActive}/>
                    </div>
                     {faq2True ? <div className={styles.faqDrop}>როგორი იქნება ტექსტის ბლოკი. სწორედ ასეთ დროს არის მოსახერხებელი ამ გენერატორით შექმნილი ტექსტის გამოყენება, რადგან უბრალოდ „ტექსტი ტექსტი ტექსტი“ ან სხვა გამეორებადი სიტყვების ჩაყრა, ხელოვნურ ვიზუალურ სიმეტრიას ქმნის</div>  : ""}
                    </div>
                    <div className={!faq3True ? styles.dropFaq : styles.dropFaqActive}>
                    <div onClick={() => setFaq3True(!faq3True)} className={!faq3True ? styles.faqContainerBox : styles.faqContainerBoxActive}>
                        <p className={styles.faqContainerTitle}>სად არის ჩვენი კლინიკა?</p>
                        <Image src={add} alt="add-svg" className={!faq3True ? styles.faqImg : styles.faqImgActive}/>
                    </div>
                     {faq3True ? <div className={styles.faqDrop}>როგორი იქნება ტექსტის ბლოკი. სწორედ ასეთ დროს არის მოსახერხებელი ამ გენერატორით შექმნილი ტექსტის გამოყენება, რადგან უბრალოდ „ტექსტი ტექსტი ტექსტი“ ან სხვა გამეორებადი სიტყვების ჩაყრა, ხელოვნურ ვიზუალურ სიმეტრიას ქმნის</div>  : ""}
                    </div>
                    <div className={!faq4True ? styles.dropFaq : styles.dropFaqActive}>
                    <div onClick={() => setFaq4True(!faq4True)} className={!faq4True ? styles.faqContainerBox : styles.faqContainerBoxActive}>
                        <p className={styles.faqContainerTitle}>რა ღირს კბილის გათეთრება?</p>
                        <Image src={add} alt="add-svg" className={!faq4True ? styles.faqImg : styles.faqImgActive}/>
                    </div>
                     {faq4True ? <div className={styles.faqDrop}>როგორი იქნება ტექსტის ბლოკი. სწორედ ასეთ დროს არის მოსახერხებელი ამ გენერატორით შექმნილი ტექსტის გამოყენება, რადგან უბრალოდ „ტექსტი ტექსტი ტექსტი“ ან სხვა გამეორებადი სიტყვების ჩაყრა, ხელოვნურ ვიზუალურ სიმეტრიას ქმნის</div>  : ""}
                    </div>
                 </div>
            </div>
        </section>
        
    )
}

export default Faq;