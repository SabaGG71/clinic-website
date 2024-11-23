"use client";
import styles from './page.module.scss';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import contact from '../../../public/contact.svg';
import facebook from '../../../public/facebook.svg';
import instagram from '../../../public/contactIg.svg';
import whatsapp from '../../../public/whatsappIcon.svg';
export default function Contact () {
    

    useEffect(() => {
        document.addEventListener("mousemove", function(e) {
          
            document.querySelectorAll(".page_circle__lRQ_q").forEach(function(move){
                var moving_value = move.getAttribute("data-value")
                var x = (e.clientX * moving_value) / 70;
                var y = (e.clientY * moving_value) / 70;
          
                move.style.transform = `translateX(${-x}px) translateY(${y}px)`;
              })
            document.querySelectorAll(".page_circler__nwYsg").forEach(function(move){
                var moving_value = move.getAttribute("data-value")
                var x = (e.clientX * moving_value) / 70;
                var y = (e.clientY * moving_value) / 70;
          
                move.style.transform = `translateX(${-x}px) translateY(${y}px)`;
              })
        });

      })
      const [faq1True, setFaq1True] = useState(false);
      const [faq2True, setFaq2True] = useState(false);
      const [faq3True, setFaq3True] = useState(false);
      const [faq4True, setFaq4True] = useState(false);
       
    return (
     <main className={styles.mainContactWrapper}>
        <div className={styles.mainContact}>
             <div className={styles.contact}>
                <div data-value="5" className={`${styles.circle1} ${styles.circler}`}></div>
                <div data-value="3" className={`${styles.circle2} ${styles.circler}`}></div>
                <div data-value="-3" className={`${styles.circle3} ${styles.circler}`}></div>
                <div className={styles.contactTop}>
                 <h1 className={styles.contactTitle}><Image className={styles.teethImage} src={contact} alt='contact-svg'/> კონტაქტი</h1>
                 <p className={styles.contactText}>
                   ჩვენთვის მნიშვნელოვანია თქვენი ჯანმრთელობა, სწორედ ამიტომ მოდით ჩვენს კლინიკაში. 
                 </p>
            </div>
          </div>
        </div>

        <div className={styles.book}>
            <div className={styles.bookTop}> 
                <div className={styles.bookRight}>
                    <div className={styles.bookRightLeft}>
                        <p className={styles.bookspan}>კონტაქტი</p>
                        <h3 className={styles.bookRightTitle}> დაგვიკავშირდით</h3>
                        <p className={styles.bookText}>
                    დიზაინის შესრულებისას საჩვენებელია, თუ როგორი იქნება ტექსტის ბლოკი. სწორედ ასეთ დროს არის მოსახერხებელი ამ გენერატორით შექმნილი ტექსტის გამოყენება,
                    </p>
                    </div>
                    <div className={styles.bookSpanRight}>  
                    <div className={`${styles.bookRightFlex} ${styles.bookRightChange}`}>
                         <Image className={`${styles.teethImage} ${styles.teethSvg}`} src={contact} alt='contact-svg'/>
                         <div className={styles.bookRightFlexIn}>
                                 <p className={`${styles.bookRightFlexP} ${styles.sameBookP}`}>დარეკეთ: </p>
                                 <p className={`${styles.bookRightFlexP} ${styles.sameBookP2}`}>+227-300-3676</p>
                         </div>
                    </div>
                    <div className={`${styles.bookRightFlex} ${styles.bookFlexbox}`}>
                         <Image className={`${styles.teethImage} ${styles.teethSvg}`} src={contact} alt='contact-svg'/>
                         <div className={styles.bookRightFlexIn}>
                                 <p className={`${styles.bookRightFlexP} ${styles.sameBookP}`}>მეილი: </p>
                                 <p className={`${styles.bookRightFlexP} ${styles.sameBookP2}`}>medico@gmail.com</p>
                         </div>
                    </div>
                    <div className={styles.bookRightFlex}>
                         <Image className={`${styles.teethImage} ${styles.teethSvg}`} src={contact} alt='contact-svg'/>
                         <div className={styles.bookRightFlexIn}>
                                 <p className={`${styles.bookRightFlexP} ${styles.sameBookP}`}>ლოკაცია: </p>
                                 <p className={`${styles.bookRightFlexP} ${styles.sameBookP2}`}>თბილისი</p>
                         </div>
                        </div> 
                    </div>
                </div>
            </div>
        </div>

         <div className={styles.bookLeft}>
            <div className={styles.bookLeftTop}>
              <div className={styles.bookLeftFlex}>
                <h5 className={styles.bookLeftTitle}>გამოგვყევით:</h5>
              </div>
              <div className={styles.bookLeftFlexRight}>
                <Image className={styles.bookSvg} src={facebook}/> 
                <Image className={styles.bookSvg} src={whatsapp}/> 
                <Image className={styles.bookSvg} src={instagram}/>  
              </div>
            </div>
            </div>
                <section className={styles.faq}>
               <div className={styles.circleParent}>
                  <div data-value="-3" className={`${styles.circle4} ${styles.circle}`}></div>
                  <div data-value="-2" className={`${styles.circle5} ${styles.circle}`}></div>
                  <div data-value="5" className={`${styles.circle6} ${styles.circle}`}></div>
                  <div data-value="5" className={`${styles.circle7} ${styles.circle}`}></div>
                  <div data-value="5" className={`${styles.circle8} ${styles.circle}`}></div>
         </div>
            <div className={styles.faqTop}>
               <div className={styles.faqTopFlex}>
               <h1 className={styles.faqTopTitle}>გსურთ დაჯავშნოთ ექიმთან ვიზიტი?</h1>
                <p className={styles.faqTopText}>შემთხვევითად გენერირებული ტექსტი ეხმარება დიზაინერებს და ტიპოგრაფიული ნაწარმის შემქმნელებს, რეალურთან მაქსიმალურად მიახლოებული.</p>
                <button className={styles.faqTopBtn}>დაჯავშნა</button>
               </div>
            </div> 
        </section>
        </main> 
    );
};