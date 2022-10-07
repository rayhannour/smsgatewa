
import { useEffect, useState } from "react";


export default function HeroSection(props) {
    const contextPath = "./assets/layout";
    const [animationClass, setAnimationClass] = useState("");

    useEffect(() => {
        setAnimationClass("hero-animation");
    });

    return (

        <div className="landing-dark">
            <div className="landing-intro">
            <section className={`landing-hero ${animationClass} flex align-items-center flex-column justify-content-center relative`}>
            <div className="hero-inner z-2 relative">
                <div className="flex flex-column md:align-items-center md:flex-row">
                    <div className="p-2 flex flex-row md:flex-column">
                        <div className="hero-box w-10rem h-10rem md:w-12rem md:h-12rem animation flex align-items-center justify-content-center" >
                            <div className="flex flex-column align-items-center">
                                <img src={`${contextPath}/images/landing-new/templates-icon.svg`} alt="primereact templates" />
                                <div className="name">
                                    <b style={{fontFamily:'FontAwesome',fontSize:'25px',fontWeight:'bold'}}>مالـــي</b>
                                    <span style={{fontFamily:'FontAwesome'}}>+ البريد التونسي</span>
                                </div>
                            </div>
                        </div>
                        <div className="hero-box w-10rem h-10rem md:w-12rem md:h-12rem animation ml-4 md:ml-0 md:mt-4 flex align-items-center justify-content-center"  >
                            <div className="flex flex-column align-items-center">
                                <img src={`${contextPath}/images/landing-new/designer-icon.svg`} alt="primereact templates" />
                                <div className="name">
                                    <b style={{fontFamily:'FontAwesome',fontSize:'25px',fontWeight:'bold'}}>BORN</b>
                                    <span style={{fontFamily:'FontAwesome'}}>+ Born Tactile</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="p-2 flex flex-row md:flex-column">
                        <div className="hero-box w-10rem h-10rem md:w-12rem md:h-12rem animation flex align-items-center justify-content-center">
                            <div className="flex flex-column align-items-center">
                                <img src={`${contextPath}/images/landing-new/core-icon.svg`} alt="primereact core" />
                                <div className="name">
                                    <b style={{fontFamily:'FontAwesome',fontSize:'25px',fontWeight:'bold'}}>جـــزائي</b>
                                    <span style={{fontFamily:'FontAwesome'}}>مختلف احصائيات +</span>
                                </div>
                            </div>
                        </div>
                       
                            <div className="hero-box w-10rem h-10rem md:w-12rem md:h-12rem animation logo hidden md:flex my-4 align-items-center justify-content-center">
                                <div className="hero-box-inner text-center">
                                <img src={`assets/layout/images/logo-${props.colorScheme === 'light' ? 'dark' : 'light'}.png`} alt="logo" style={{ height: "90px" }} />
                                    <div className="name">
                                        <b className="font-bold" style={{fontFamily:'FontAwesome',fontSize:'25px',fontWeight:'bold'}}>القيـــادة</b>
                                    </div>
                                </div>
                            </div>
                       
                        <div className="hero-box w-10rem h-10rem md:w-12rem md:h-12rem animation flex ml-4 md:ml-0 align-items-center justify-content-center" >
                            <div className="flex flex-column align-items-center">
                                <img src={`${contextPath}/images/landing-new/css-icon.svg`} alt="primereact icons" />
                                <div className="name">
                                    <b style={{fontFamily:'FontAwesome',fontSize:'25px',fontWeight:'bold'}}>احصائيات</b>
                                    <span style={{fontFamily:'FontAwesome'}}>+ مختلفة</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="p-2 flex flex-row md:flex-column">
                        <div className="hero-box w-10rem h-10rem md:w-12rem md:h-12rem animation flex align-items-center justify-content-center" >
                            <div className="flex flex-column align-items-center">
                                <img src={`${contextPath}/images/landing-new/blocks-icon.svg`} alt="primereact templates" />
                                <div className="name">
                                    <b style={{fontFamily:'FontAwesome',fontSize:'25px',fontWeight:'bold'}}>مالـــي</b>
                                    <span style={{fontFamily:'FontAwesome'}}>+ أمان</span>
                                </div>
                            </div>
                        </div>
                       
                            <div className="hero-box w-10rem h-10rem md:w-12rem md:h-12rem animation flex ml-4 md:ml-0 md:mt-4 align-items-center justify-content-center">
                                <div className="flex flex-column align-items-center">
                                    <img src={`${contextPath}/images/landing-new/icons-icon.svg`} alt="primereact templates" />
                                    <div className="name">
                                        <b style={{fontFamily:'FontAwesome',fontSize:'25px',fontWeight:'bold'}}>SMS</b>
                                        <span style={{fontFamily:'FontAwesome'}}>+ رسائل نصية</span>
                                    </div>
                                </div>
                            </div>
                        
                    </div>
                </div>
                <div className="hero-border-top hidden md:block"></div>
                <div className="hero-border-left hidden md:block"></div>
                <div className="hero-border-right hidden md:block"></div>
            </div>
            <div className="hero-bg absolute top-0 left-0 right-0 bottom-0 z-0">
                <div className="hero-strip-top"></div>
                <div className="hero-strip-left"></div>
            </div>
        </section>

            </div>
        </div>


    );
}