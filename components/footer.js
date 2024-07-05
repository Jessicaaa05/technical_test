import React, {useState} from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const [isExpanded, setIsExpanded] = useState(false);

    const toggleDropdown = () => {
        setIsExpanded(!isExpanded);
    };

  const options = [
    'Global (English)',
    'Australia (English)',
    'Brasil (Português)',
    '中国 (简体中文)',
    'Česká republika (Čeština)',
    'Danmark (Dansk)',
    'Deutschland (Deutsch)',
    'España (Español)',
    'France (Français)',
    'Italia (Italiano)',
    '日本 (日本語)',
    'México (Español)',
    'Nederland (Nederlands)',
    'Norge (Norsk)',
    'Polska (Polski)',
    'Portugal (Português)',
    'Sverige (Svenska)',
    'United Arab Emirates (English)',
    'United Kingdom (English)'
  ];
    return (
        <footer className="ds-page-layout__footer">
            <section className="ds-page-footer ds-background-color-white">
                <hr className="ds-divider ds-divider--light" />
                <div className="ds-container ds-padding-top-48 ds-md-padding-top-96 ds-background-color-white ds-page-footer__container ds-page-footer__container--switcher">
                    <div className="ds-margin-bottom-48 ds-md-margin-bottom-96 ds-lg-margin-bottom-144">
                        <nav className="ds-grid ds-position-relative">
                            <ul role="menubar" className="ds-grid__col ds-grid__col--6 ds-md-grid__col--4 ds-lg-grid__col--2 ds-lg-padding-top-0">
                                <li role="none" className="ds-text ds-font-weight-bold ds-color-black">About</li>
                                <li role="none" className="ds-margin-top-12">
                                    <a href="https://www.adyen.com/press-and-media" data-track-component-name="DsPageFooter" data-track-text="About > Press & media" role="menuitem" className="ds-button-link ds-button-link--tertiary ds-button-link--black">Press & media</a>
                                </li>
                                <li role="none" className="ds-margin-top-12">
                                    <a href="https://careers.adyen.com" target="_blank" rel="noopener" data-track-component-name="DsPageFooter" data-track-text="About > Careers" role="menuitem" className="ds-button-link ds-button-link--tertiary ds-button-link--black">Careers</a>
                                </li>
                                <li role="none" className="ds-margin-top-12">
                                    <a href="https://investors.adyen.com" target="_blank" rel="noopener" data-track-component-name="DsPageFooter" data-track-text="About > Investor Relations" role="menuitem" className="ds-button-link ds-button-link--tertiary ds-button-link--black">Investor Relations</a>
                                </li>
                                <li role="none" className="ds-margin-top-12">
                                    <a href="https://www.adyen.com/partners" data-track-component-name="DsPageFooter" data-track-text="About > Partner with us" role="menuitem" className="ds-button-link ds-button-link--tertiary ds-button-link--black">Partner with us</a>
                                </li>
                                <li role="none" className="ds-margin-top-12">
                                    <a href="https://www.adyen.com/contact" data-track-component-name="DsPageFooter" data-track-text="About > Contact" role="menuitem" className="ds-button-link ds-button-link--tertiary ds-button-link--black">Contact</a>
                                </li>
                            </ul>

                            <ul role="menubar" className="ds-grid__col ds-grid__col--6 ds-md-grid__col--4 ds-lg-grid__col--2 ds-lg-padding-top-0">
                                <li role="none" className="ds-text ds-font-weight-bold ds-color-black">Products</li>
                                <li role="none" className="ds-margin-top-12">
                                    <a href="https://www.adyen.com/accept-payments" data-track-component-name="DsPageFooter" data-track-text="Products > Payments" role="menuitem" className="ds-button-link ds-button-link--tertiary ds-button-link--black">Payments</a>
                                </li>
                                <li role="none" className="ds-margin-top-12">
                                    <a href="https://www.adyen.com/risk-management" data-track-component-name="DsPageFooter" data-track-text="Products > Risk management" role="menuitem" className="ds-button-link ds-button-link--tertiary ds-button-link--black">Risk management</a>
                                </li>
                                <li role="none" className="ds-margin-top-12">
                                    <a href="https://www.adyen.com/authentication-3d-secure" data-track-component-name="DsPageFooter" data-track-text="Products > Authentication" role="menuitem" className="ds-button-link ds-button-link--tertiary ds-button-link--black">Authentication</a>
                                </li>
                                <li role="none" className="ds-margin-top-12">
                                    <a href="https://www.adyen.com/issuing" data-track-component-name="DsPageFooter" data-track-text="Products > Issuing" role="menuitem" className="ds-button-link ds-button-link--tertiary ds-button-link--black">Issuing</a>
                                </li>
                                <li role="none" className="ds-margin-top-12">
                                    <a href="https://www.adyen.com/pricing" data-track-component-name="DsPageFooter" data-track-text="Products > Pricing" role="menuitem" className="ds-button-link ds-button-link--tertiary ds-button-link--black">Pricing</a>
                                </li>
                            </ul>

                            <ul role="menubar" className="ds-grid__col ds-grid__col--6 ds-md-grid__col--4 ds-lg-grid__col--2 ds-lg-padding-top-0 ds-padding-top-48">
                                <li role="none" className="ds-text ds-font-weight-bold ds-color-black">Resources</li>
                                <li role="none" className="ds-margin-top-12">
                                    <a href="https://docs.adyen.com" target="_blank" rel="noopener" data-track-component-name="DsPageFooter" data-track-text="Resources > Documentation" role="menuitem" className="ds-button-link ds-button-link--tertiary ds-button-link--black">Documentation</a>
                                </li>
                                <li role="none" className="ds-margin-top-12">
                                    <a href="https://help.adyen.com/academy" target="_blank" rel="noopener" data-track-component-name="DsPageFooter" data-track-text="Resources > Academy" role="menuitem" className="ds-button-link ds-button-link--tertiary ds-button-link--black">Academy</a>
                                </li>
                                <li role="none" className="ds-margin-top-12">
                                    <a href="https://www.adyen.com/knowledge-hub" data-track-component-name="DsPageFooter" data-track-text="Resources > Knowledge Hub" role="menuitem" className="ds-button-link ds-button-link--tertiary ds-button-link--black">Knowledge Hub</a>
                                </li>
                                <li role="none" className="ds-margin-top-12">
                                    <a href="https://www.adyen.com/newsletter" data-track-component-name="DsPageFooter" data-track-text="Resources > Newsletter" role="menuitem" className="ds-button-link ds-button-link--tertiary ds-button-link--black">Newsletter</a>
                                </li>
                            </ul>

                            <ul role="menubar" className="ds-grid__col ds-grid__col--6 ds-md-grid__col--4 ds-lg-grid__col--2 ds-lg-padding-top-0 ds-padding-top-48">
                                <li role="none" className="ds-text ds-font-weight-bold ds-color-black">Platform</li>
                                <li role="none" className="ds-margin-top-12">
                                    <a href="https://www.adyen.com/infrastructure" data-track-component-name="DsPageFooter" data-track-text="Platform > Infrastructure" role="menuitem" className="ds-button-link ds-button-link--tertiary ds-button-link--black">Infrastructure</a>
                                </li>
                                <li role="none" className="ds-margin-top-12">
                                    <a href="https://www.adyen.com/licenses" data-track-component-name="DsPageFooter" data-track-text="Platform > Licenses" role="menuitem" className="ds-button-link ds-button-link--tertiary ds-button-link--black">Licenses</a>
                                </li>
                                <li role="none" className="ds-margin-top-12">
                                    <a href="https://www.adyen.com/legal" data-track-component-name="DsPageFooter" data-track-text="Platform > Legal" role="menuitem" className="ds-button-link ds-button-link--tertiary ds-button-link--black">Legal</a>
                                </li>
                                <li role="none" className="ds-margin-top-12">
                                    <a href="https://www.adyen.com/legal/terms-and-conditions" data-track-component-name="DsPageFooter" data-track-text="Platform > Terms & Conditions" role="menuitem" className="ds-button-link ds-button-link--tertiary ds-button-link--black">Terms & Conditions</a>
                                </li>
                                <li role="none" className="ds-margin-top-12">
                                    <a href="https://www.adyen.com/policies-and-disclaimer/responsible-disclosure" data-track-component-name="DsPageFooter" data-track-text="Platform > Responsible disclosure policy" role="menuitem" className="ds-button-link ds-button-link--tertiary ds-button-link--black">Responsible disclosure policy</a>
                                </li>
                            </ul>

                            <div className="ds-grid__col ds-grid__col--12 ds-md-grid__col--4 ds-lg-grid__col--2 ds-page-footer__social-signup ds-lg-grid__col--4" data-v-b7bb97e8="">
                              <div className="ds-page-footer__social-bar">
                                <ul role="menubar" className="ds-social-bar ds-social-bar--dark ds-social-bar--horizontal ds-social-bar--footer flex items-center">
                                  <li role="none" className="ds-social-bar__list-item mr-2" data-v-4f2f8dd5>
                                    <a href="https://www.facebook.com/AdyenPayments/" target="_blank" rel="noopener" aria-label="Facebook Opens in new window" data-track-component-name="DsPageFooter" data-track-text="Facebook Opens in new window" data-track-id="Facebook" data-j-link="" role="menuitem" data-j-socialbar-list-link="" className="ds-social-bar__link ds-button-icon ds-button-icon--primary ds-button-icon--green" data-v-4f2f8dd5>
                                        <div data-j-link-text="" className="ds-text-icon ds-text-icon--icon-only" data-v-354ff3ba>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" aria-label="Facebook-small" role="img" data-j-link-icon-only="" className="icon" data-v-354ff3ba>
                                                <g clipPath="url(#clip0_21_2240)">
                                                    <path fill="currentColor" d="M12 0C18.6275 0 24 5.40532 24 12.0734C24 18.0996 19.6116 23.0944 13.8748 24V15.5642H16.6711L17.2027 12.0734H13.8748V9.80844C13.8748 8.85434 14.339 7.92217 15.8307 7.92217H17.3444V4.95092C17.3444 4.95092 15.9708 4.71496 14.6579 4.71496C11.9174 4.71496 10.1252 6.3856 10.1252 9.41275V12.0732H7.07753V15.564H10.1252V23.9998C4.38836 23.0942 0 18.0994 0 12.0732C0 5.40532 5.37254 0 12 0Z"/>
                                                </g>
                                                <defs>
                                                    <clipPath id="clip0_21_2240">
                                                        <rect width="24" height="24" fill="currentColor"/>
                                                    </clipPath>
                                                </defs>
                                            </svg>
                                        </div>
                                    </a>
                                  </li>
                                  <li role="none" className="ds-social-bar__list-item mr-2" data-v-4f2f8dd5>
                                    <a href="https://www.linkedin.com/company/adyen/" target="_blank" rel="noopener" aria-label="Linkedin Opens in new window" data-track-component-name="DsPageFooter" data-track-text="Linkedin Opens in new window" data-track-id="Linkedin" data-j-link="" role="menuitem" data-j-socialbar-list-link="" className="ds-social-bar__link ds-button-icon ds-button-icon--primary ds-button-icon--green" data-v-4f2f8dd5>
                                      <div data-j-link-text="" className="ds-text-icon ds-text-icon--icon-only" data-v-354ff3ba>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" aria-label="Linkedin-small" role="img" data-j-link-icon-only="" className="icon" data-v-354ff3ba>
                                            <path fill="currentColor" d="M18.1763 1.41174H5.82339C3.38809 1.41174 1.41162 3.38821 1.41162 5.82351V18.1765C1.41162 20.6117 3.38809 22.5882 5.82339 22.5882H18.1763C20.6116 22.5882 22.5881 20.6117 22.5881 18.1765V5.82351C22.5881 3.38821 20.6116 1.41174 18.1763 1.41174ZM8.47045 18.1765H5.82339V8.47057H8.47045V18.1765ZM7.14692 7.34998C6.29103 7.34998 5.6028 6.65292 5.6028 5.79704C5.6028 4.94115 6.29103 4.23527 7.14692 4.23527C8.0028 4.23527 8.69103 4.93233 8.69103 5.78821C8.69103 6.6441 8.0028 7.34998 7.14692 7.34998ZM19.0587 18.1765H16.4116V13.2353C16.4116 10.2617 12.8822 10.4912 12.8822 13.2353V18.1765H10.2352V8.47057H12.8822V10.0323C14.1175 7.74704 19.0587 7.57939 19.0587 12.2206V18.1765Z"/>
                                        </svg>
                                      </div>
                                    </a>
                                  </li>
                                  <li role="none" className="ds-social-bar__list-item" data-v-4f2f8dd5>
                                    <a href="https://x.com/Adyen" target="_blank" rel="noopener" aria-label="Twitter Opens in new window" data-track-component-name="DsPageFooter" data-track-text="Twitter Opens in new window" data-track-id="Twitter" data-j-link="" role="menuitem" data-j-socialbar-list-link="" className="ds-social-bar__link ds-button-icon ds-button-icon--primary ds-button-icon--green" data-v-4f2f8dd5>
                                      <div data-j-link-text="" className="ds-text-icon ds-text-icon--icon-only" data-v-354ff3ba>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" aria-label="Twitter-small" role="img" data-j-link-icon-only="" className="icon" data-v-354ff3ba>
                                          <path fill="currentColor" d="M8.54926 6.00409L17.5174 17.9951H15.4865L6.51838 6.00409H8.54926Z"/>
                                          <path fill="currentColor" d="M24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12ZM10.3438 12.7165L4.57178 18.952H5.87093L10.9244 13.4926L15.0074 18.952H19.4281L13.3694 10.8514L18.742 5.04724H17.4429L12.789 10.0751L9.02868 5.04724H4.60793L10.3438 12.7165Z"/>
                                        </svg>
                                      </div>
                                    </a>
                                  </li>
                                </ul>
                              </div>
                              <div>
                                <a href="https://www.adyen.com/newsletter" className="ds-button ds-button--secondary ds-button--green" aria-label="Subscribe to our newsletter">
                                  <div className="ds-text-icon">
                                    <span>Subscribe to our newsletter</span>
                                  </div>
                                </a>
                              </div>
                            </div>
                        </nav>
                    </div>

                    <div className="ds-grid ds-page-footer__bottom" data-v-299db9f8>
                      <div className="ds-grid__col ds-grid__col--12 ds-page-footer__bottom-row botto mb-6" data-v-299db9f8>
                          <div className="ds-display-flex ds-align-items-center ds-flex-wrap" data-v-21f8dd88>
                              <nav data-v-21f8dd88>
                                  <ul role="menubar" className="ds-display-flex ds-align-items-center" data-v-21f8dd88>
                                      <li role="none" className="ds-display-flex ds-text-small" data-v-21f8dd88>
                                          <a href="https://www.adyen.com/privacy-policy" data-track-component-name="DsPageFooter" data-track-text="Privacy" role="menuitem" className="ds-footer-secondary-navigation-link ds-margin-right-12" data-v-21f8dd88>Privacy
                                          </a>
                                      </li>
                                      <li role="none" className="ds-display-flex ds-text-small" data-v-21f8dd88>
                                          <a href="https://www.adyen.com/policies-and-disclaimer/cookie-policy" data-track-component-name="DsPageFooter" data-track-text="Cookies" role="menuitem" className="ds-footer-secondary-navigation-link ds-margin-right-12" data-v-21f8dd88>Cookies
                                          </a>
                                      </li>
                                      <li role="none" className="ds-display-flex ds-text-small" data-v-21f8dd88>
                                          <a href="https://www.adyen.com/policies-and-disclaimer/disclaimer" data-track-component-name="DsPageFooter" data-track-text="Disclaimer" role="menuitem" className="ds-footer-secondary-navigation-link ds-margin-right-12" data-v-21f8dd88>Disclaimer
                                          </a>
                                      </li>
                                  </ul>
                              </nav>
                              <p data-j-copyright className="ds-text-small ds-color-grey-3200" data-v-21f8dd88>&copy; {currentYear} Adyen
                              </p>
                          </div>

                          <div className="ds-margin-bottom-48 ds-md-margin-bottom-0 ds-align-items-center" data-v-299db9f8="true">
                            <div className="ds-dropdown ds-dropdown--light" data-v-0b5ab653="true">
                              <label id="dropdown-label-dropdown-14169" className="ds-screen-reader-visible" data-v-0b5ab653="true">
                                Language switcher
                              </label>
                              <div className="ds-dropdown__wrapper" data-v-0b5ab653="true">
                                <div 
                                  aria-controls="dropdown-listbox-dropdown-14170" 
                                  aria-labelledby="dropdown-label-dropdown-14171" 
                                  aria-expanded={isExpanded} 
                                  aria-haspopup="listbox" 
                                  role="combobox" 
                                  tabIndex="0" 
                                  data-j-button 
                                  data-track-component-name="DsPageFooter" 
                                  data-track-text="Global (English)" 
                                  className="ds-dropdown__button flex items-center cursor-pointer" 
                                  onClick={toggleDropdown}
                                >
                                  <svg 
                                    xmlns="http://www.w3.org/2000/svg" 
                                    width="22" 
                                    height="22" 
                                    viewBox="0 0 22 22" 
                                    aria-label="globe" 
                                    role="img" 
                                    className="icon ds-dropdown__button__icon mr-3"
                                  >
                                    <g fill="none" stroke="currentColor" strokeWidth="2">
                                      <circle r="10" transform="matrix(1 0 0 -1 11 11)" />
                                      <ellipse rx="4" ry="10" transform="matrix(1 0 0 -1 11 11)" />
                                      <path d="M1 11L21 11" />
                                    </g>
                                  </svg>
                                  <span role="textbox" className="mr-3">Global (English)</span>
                                  <svg 
                                    xmlns="http://www.w3.org/2000/svg" 
                                    width="10" 
                                    height="6" 
                                    viewBox="0 0 10 6" 
                                    aria-label="chevron-down-small" 
                                    role="img" 
                                    className="icon ds-dropdown__button__icon-chevron mr-3"
                                  >
                                    <path 
                                      fillRule="evenodd" 
                                      clipRule="evenodd" 
                                      d="M0.292893 0.292893C0.683418 -0.097631 1.31658 -0.097631 1.70711 0.292893L5 3.58579L8.29289 0.292894C8.68342 -0.0976309 9.31658 -0.0976309 9.70711 0.292894C10.0976 0.683417 10.0976 1.31658 9.70711 1.70711L5.70711 5.70711C5.31658 6.09763 4.68342 6.09763 4.29289 5.70711L0.292893 1.70711C-0.097631 1.31658 -0.097631 0.683417 0.292893 0.292893Z" 
                                      fill="currentColor"
                                    />
                                  </svg>
                                </div>
                                <div
                                  id="dropdown-listbox-dropdown-2"
                                  aria-labelledby="dropdown-label-dropdown-2"
                                  role="listbox"
                                  tabIndex="-1"
                                  className={`ds-dropdown__list ds-popover-container ds-popover-container--light w-68 ${isExpanded ? 'block' : 'hidden'}`}
                                  style={{ inset: 'auto 0px 100% auto', height: '260px' }}
                                  data-v-0b5ab653="true"
                                >
                                  {isExpanded && options.map((option, index) => (
                                    <div
                                      key={index}
                                      role="option"
                                      className="ds-dropdown__list__option ds-button-list-option ds-button-list-option--light ds-dropdown__list__option--autoWidth"
                                      data-j-option=""
                                      data-track-component-name="DsPageFooter"
                                      data-track-text={option}
                                    >
                                      <span className="ds-dropdown__list__option__text">{option}</span>
                                    </div>
                                  ))}
                                </div>
                              </div>
                            </div>
                          </div>
                      </div>
                    </div>
                </div>
            </section>
        </footer>
    );
};

export default Footer;
