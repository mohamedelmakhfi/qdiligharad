import React from 'react'
import './Footer.css'


const Footer = () => {
  return (
    <footer className="vectorParent">
      <img
        className="frameChild"
        loading="lazy"
        alt=""
        src="/vector-2.svg"
      />
      <div className="footerseawireFooter07">
        <div className="footerContainer">
          <div className="footerContent">
            <div className="frameParent">
              <div className="addressContentWrapper">
                <div className="addressContent">
                  <div className="address">
                    <img
                      className="communicationLocationOn"
                      loading="lazy"
                      alt=""
                      src="/communication--location-on@2x.png"
                    />
                    <div className="ohioStSouthGateCa90280Wrapper">
                      <div className="ohioStSouthContainer">
                        <p className="ohioStSouth">
                          8819 Ohio St. South Gate,
                        </p>
                        <p className="ca90280">CA 90280</p>
                      </div>
                    </div>
                  </div>
                  <div className="email">
                    <img
                      className="communicationEmail"
                      loading="lazy"
                      alt=""
                      src="/communication--email@2x.png"
                    />
                    <div className="ourstudiohellocomWrapper">
                      <div className="ourstudiohellocom">
                        Ourstudio@hello.com
                      </div>
                    </div>
                  </div>
                  <img
                    className="outlinedCommunicationCal"
                    loading="lazy"
                    alt=""
                    src="/outlined--communication--call@2x.png"
                  />
                  <div className="div">+1 386-688-3295</div>
                </div>
              </div>
              <div className="homeLinkContainerParent">
                <div className="homeLinkContainer">
                  <div className="accueil">Accueil</div>
                </div>
                <div className="qdiLiContainerParent">
                  <div className="qdiLiContainer">
                    <div className="qdiLiContent">
                      <div className="qdiLiLogo">
                        <img
                          className="logoImageLeft"
                          loading="lazy"
                          alt=""
                          src="/vector.svg"
                        />
                        <img
                          className="logoImageLeft1"
                          alt=""
                          src="/vector-1.svg"
                        />
                        <img
                          className="groupIcon"
                          loading="lazy"
                          alt=""
                          src="/group.svg"
                        />
                      </div>
                      <h3 className="qdiligharad">QdiLiGharad</h3>
                    </div>
                    <div className="menuLinks">
                      <div className="menuLinksContainer">
                        <div className="aProposs">A propos</div>
                        <div className="servicesLink">
                          <div className="services">Services</div>
                        </div>
                        <div className="contact">Contact</div>
                      </div>
                    </div>
                  </div>
                  <div className="socialLinksContainerWrapper">
                    <div className="socialLinksContainer">
                      <div className="socialIcons">
                        <div className="socialIconBackgrounds" />
                        <b className="fb">FB</b>
                      </div>
                      <div className="socialIcons1">
                        <div className="socialIconsChild" />
                        <b className="in">IN</b>
                      </div>
                      <div className="socialIcons2">
                        <div className="socialIconsItem" />
                        <b className="lik">Lik</b>
                      </div>
                      <div className="socialIcons3">
                        <div className="socialIconsInner" />
                        <b className="tw">Tw</b>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="newsletterContainerWrapper">
                <div className="newsletterContainer">
                  <b className="rejoignezNous">Rejoignez nous !</b>
                  <div className="newsletterForm">
                    <div className="emailInput">
                      <div className="yourEmail">Your Email</div>
                      <div className="form">
                        <div className="container" />
                        <input
                          className="enterYourEmail"
                          placeholder="Enter Your Email"
                          type="text"
                        />
                      </div>
                    </div>
                    <div className="subscribeButtonContainer">
                      <div className="button">
                        <div className="elementbuttonsmallfilledCo">
                          <div className="bg" />
                          <div className="buttonLabel">Inscription</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <img
            className="dividerIcon"
            loading="lazy"
            alt=""
            src="/divider.svg"
          />
        </div>
        <div className="communicationCall" />
        <div className="copyright2024QdiligharadWrapper">
          <div className="copyrightContainer">
            <span>{`Copyright : © 2024 `}</span>
            <span className="qdiligharad1">QdiLiGharad</span>
            <span>. Tous droits réservés.</span>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer