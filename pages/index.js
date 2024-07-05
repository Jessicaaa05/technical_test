import Head from 'next/head';
import Navbar from '../components/navbar';
import Footer from "../components/footer";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Adyen | Engineered for ambition - Adyen</title>
        <link data-n-head="ssr" rel="icon" type="image/x-icon" href="./images/adyen_icon.webp" sizes="any" />
        
        <link data-n-head="ssr" data-hid="i18n-alt-en" rel="alternate" href="https://www.adyen.com/" hreflang="en" />
        <link data-n-head="ssr" data-hid="i18n-alt-en-AU" rel="alternate" href="https://www.adyen.com/en_AU/" hreflang="en-AU" />
        <link data-n-head="ssr" data-hid="i18n-alt-pt-BR" rel="alternate" href="https://www.adyen.com/pt_BR/" hreflang="pt-BR" />
        <link data-n-head="ssr" data-hid="i18n-alt-zh-CN" rel="alternate" href="https://www.adyen.com/zh_CN/" hreflang="zh-CN" />
        <link data-n-head="ssr" data-hid="i18n-alt-cs-CZ" rel="alternate" href="https://www.adyen.com/cs_CZ/" hreflang="cs-CZ" />
        <link data-n-head="ssr" data-hid="i18n-alt-da-DK" rel="alternate" href="https://www.adyen.com/da_DK/" hreflang="da-DK" />
        <link data-n-head="ssr" data-hid="i18n-alt-de-DE" rel="alternate" href="https://www.adyen.com/de_DE/" hreflang="de-DE" />
        <link data-n-head="ssr" data-hid="i18n-alt-es-ES" rel="alternate" href="https://www.adyen.com/es_ES/" hreflang="es-ES" />
        <link data-n-head="ssr" data-hid="i18n-alt-fr-FR" rel="alternate" href="https://www.adyen.com/fr_FR/" hreflang="fr-FR" />
        <link data-n-head="ssr" data-hid="i18n-alt-it-IT" rel="alternate" href="https://www.adyen.com/it_IT/" hreflang="it-IT" />
        <link data-n-head="ssr" data-hid="i18n-alt-ja-JP" rel="alternate" href="https://www.adyen.com/ja_JP/" hreflang="ja-JP" />
        <link data-n-head="ssr" data-hid="i18n-alt-es-MX" rel="alternate" href="https://www.adyen.com/es_MX/" hreflang="es-MX" />
        <link data-n-head="ssr" data-hid="i18n-alt-nl-NL" rel="alternate" href="https://www.adyen.com/nl_NL/" hreflang="nl-NL" />
        <link data-n-head="ssr" data-hid="i18n-alt-no-NO" rel="alternate" href="https://www.adyen.com/no_NO/" hreflang="no-NO" />
        <link data-n-head="ssr" data-hid="i18n-alt-pl-PL" rel="alternate" href="https://www.adyen.com/pl_PL/" hreflang="pl-PL" />
        <link data-n-head="ssr" data-hid="i18n-alt-pt-PT" rel="alternate" href="https://www.adyen.com/pt_PT/" hreflang="pt-PT" />
        <link data-n-head="ssr" data-hid="i18n-alt-sv-SE" rel="alternate" href="https://www.adyen.com/sv_SE/" hreflang="sv-SE" />
        <link data-n-head="ssr" data-hid="i18n-alt-en-AE" rel="alternate" href="https://www.adyen.com/en_AE/" hreflang="en-AE" />
        <link data-n-head="ssr" data-hid="i18n-alt-en-GB" rel="alternate" href="https://www.adyen.com/en_GB/" hreflang="en-GB" />

        <script
            data-n-head="ssr"
            data-hid="gtm-consent-script"
            type="text/javascript"
            nonce="e01730a497be7be4ad81195261cec37d"
            dangerouslySetInnerHTML={{
                __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag() {
                    dataLayer.push(arguments);
                }
                gtag('consent', 'default', {
                    'ad_storage': 'denied',
                    'ad_user_data': 'denied',
                    'ad_personalization': 'denied',
                    'analytics_storage': 'denied'
                });
                `
            }}
        />
        <script
            data-n-head="ssr"
            data-hid="gtm-script"
            nonce="e01730a497be7be4ad81195261cec37d"
            dangerouslySetInnerHTML={{
                __html: `
                if (!window._gtm_init) {
                    window._gtm_init = 1;
                    (function(w, d, s, l, x, y) {
                        w[x] = {};
                        w._gtm_inject = function(i) {
                            w[x][i] = 1;
                            w[l] = w[l] || [];
                            w[l].push({
                                'nonce': 'e01730a497be7be4ad81195261cec37d'
                            });
                            w[l].push({
                                'gtm.start': new Date().getTime(),
                                event: 'gtm.js'
                            });
                            var f = d.getElementsByTagName(s)[0], j = d.createElement(s);
                            j.setAttribute('nonce', 'e01730a497be7be4ad81195261cec37d');
                            j.defer = true;
                            j.src = 'https://www.googletagmanager.com/gtm.js?id=' + i + '&gtm_auth=afdbAXrh3-yNk9m3Wq79uw&gtm_preview=env-1';
                            f.parentNode.insertBefore(j, f);
                        };
                        w[y]('GTM-575TF4H');
                    })(window, document, 'script', 'dataLayer', '_gtm_ids', '_gtm_inject');
                }
                `
            }}
        />
        <script
            data-n-head="ssr"
            data-hid="one-trust-script"
            type="text/javascript"
            data-domain-script="c791db6d-a469-4dcf-a025-d14a021ba451"
            data-document-language="true"
            src="//cdn.cookielaw.org/scripttemplates/otSDKStub.js"
            nonce="e01730a497be7be4ad81195261cec37d"
        />
        <script
            data-n-head="ssr"
            data-hid="one-trust-optanon-script"
            type="text/javascript"
            nonce="e01730a497be7be4ad81195261cec37d"
            dangerouslySetInnerHTML={{
                __html: `
                function OptanonWrapper() {}
                `
            }}
        />
      </Head>
      <noscript data-n-head="ssr" data-hid="gtm-noscript" data-pbody="true">
        <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-575TF4H&gtm_auth=afdbAXrh3-yNk9m3Wq79uw&gtm_preview=env-1" height="0" width="0" style={{display: 'none'}} hidden={true} title="gtm"></iframe>
      </noscript>

      <div data-server-rendered="true" id="__nuxt"></div>

      <div class="ds-page-layout ds-page-layout--light">
        <Navbar />
      </div>
      <main>
        <div className="ds-page-content" style={{paddingTop: 0}}>
          <section className="ds-hero-with-media ds-md-margin-bottom-48 ds-hero-with-media--light">
            <div className="ds-container ds-padding-top-48 ds-padding-bottom-48 ds-md-padding-bottom-96">
              <div className="ds-grid">
                <div className="ds-grid__col ds-grid__col--12"></div>
              </div>
              <div className="ds-width-full ds-height-full">
                <div className="ds-grid ds-justify-content-space-between ds-align-items-center">
                  <div className="ds-grid__col ds-display-flex ds-grid__col--12 ds-md-grid__col--6 ds-lg-grid__col--6">
                    <div className="ds-display-flex ds-flex-direction-column ds-justify-content-center ds-height-full">
                      <h1 className="ds-heading-medium ds-margin-bottom-12 ds-md-heading-large ds-lg-heading-xlarge">
                        Engineered for ambition
                      </h1>
                      <div className="ds-rich-text ds-text-medium">
                        <p>
                          End-to-end payments, data, and financial management in a single solution. Meet the financial technology platform that helps you realize your ambitions faster.
                        </p>
                      </div>
                      <div className="ds-buttons-wrapper ds-margin-top-24">
                        <a
                          href="https://www.adyen.com/contact/salesb"
                          className="ds-button ds-button--primary ds-button--green"
                          aria-label="Talk to our team"
                        >
                          <div className="ds-text-icon">
                            <span>Talk to our team</span>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="ds-grid__col ds-grid__col--12 ds-md-grid__col--6 ds-lg-grid__col--5">
                    <div className="ds-position-relative ds-hero-with-media__video">
                      <div
                        className="ds-video ds-margin-top-48 ds-md-margin-top-0" 
                        style={{minWidth: 472, minHeight: 629}}
                      >
                        <video
                          autoPlay
                          loop
                          muted
                          playsInline
                          poster="https://adyen.getbynder.com/transform/7f7879af-1bd7-4385-bbea-46f1b17a8d02/engineeredforambition-2x?io=transform:fill,width:708,height:943&io=transform:crop,width:708,height:943"
                        >
                          <source src="https://adyen.getbynder.com/m/1eed1ab2e24580/original/Homepage-header.mp4" type="video/mp4" />
                          <a
                            href="https://adyen.getbynder.com/m/1eed1ab2e24580/original/Homepage-header.mp4"
                            target="_blank"
                            rel="noopener"
                            aria-label="Engineered for ambition"
                            className="ds-button-link ds-button-link--primary ds-button-link--green"
                          >
                            <div className="ds-text-icon">
                              <span>Engineered for ambition</span>
                            </div>
                          </a>
                        </video>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="ds-section ds-section--light ds-padding-bottom-48 ds-md-padding-bottom-96" data-v-472b858e data-v-4467b160>
            <div className="ds-container" data-v-472b858e>
              <div className="ds-logo-bar ds-text-align-center" data-v-859002a6 data-v-4467b160>
                <div className="ds-grid__col ds-grid__col--12 ds-lg-grid__col--8 ds-lg-grid__col--offset-2" data-v-859002a6>
                  <h2 data-j-title className="ds-heading" data-v-859002a6></h2>
                </div>
                <div data-j-logo-bar className="ds-logo-bar__items ds-justify-content-center" data-v-859002a6>
                  <img src="https://adyen.getbynder.com/transform/5fffa072-7543-403e-b72a-ecad84f6521b/uber-logobar-svg" alt="Uber logo" loading="lazy" className="ds-logo-bar__image" data-v-859002a6 />
                  <img src="https://adyen.getbynder.com/transform/ac221a96-c360-4659-a806-8e19a327452c/mango-logobar-svg" alt="Mango logo" loading="lazy" className="ds-logo-bar__image" data-v-859002a6 />
                  <img src="https://adyen.getbynder.com/transform/eb186a93-5321-451e-8a5c-d6ffe98e33bf/ebay-logobar-svg" alt="Ebay logo" loading="lazy" className="ds-logo-bar__image" data-v-859002a6 />
                  <img src="https://adyen.getbynder.com/transform/ae819fe1-2eb8-43d3-be27-43f379394775/spotify-logobar-svg" alt="Spotify logo" loading="lazy" className="ds-logo-bar__image" data-v-859002a6 />
                  <img src="https://adyen.getbynder.com/transform/6c4d4322-0043-4652-85fa-e60a629415e2/mcdonalds-logobar-svg" alt="McDonalds logo" loading="lazy" className="ds-logo-bar__image" data-v-859002a6 />
                  <img src="https://adyen.getbynder.com/transform/1a0de5d0-ad93-405e-8f7e-3b2b206016bb/wix-logobar-svg" alt="Wix logo" loading="lazy" className="ds-logo-bar__image" data-v-859002a6 />
                </div>
              </div>
            </div>
          </section>

          <section className="ds-section ds-section--light" data-v-472b858e data-v-4467b160>
            <div className="ds-container" data-v-472b858e>
              <div className="ds-grid" data-v-472b858e data-v-4467b160>
                <div className="ds-grid__col ds-grid__col--12" data-v-472b858e data-v-4467b160>
                  <hr className="ds-divider ds-divider--light" data-v-4467b160 />
                </div>
              </div>
            </div>
          </section>

          <section
            className="ds-section ds-section--light ds-padding-top-48 ds-md-padding-top-96 ds-padding-bottom-48 ds-md-padding-bottom-96"
            data-v-472b858e
            data-v-d98c07a6
            data-v-4467b160
          >
            <div className="ds-container" data-v-472b858e>
              <div data-v-472b858e data-v-d98c07a6>
                <div className="ds-grid" data-v-472b858e data-v-d98c07a6>
                  <div
                    className="ds-grid__col ds-md-grid__col--8 ds-grid__col--12 ds-lg-grid__col--8 ds-margin-bottom-48"
                    data-v-472b858e
                    data-v-d98c07a6
                  >
                    <h2
                      data-j-title=""
                      className="ds-heading"
                      data-v-472b858e
                      data-v-d98c07a6
                    >
                      One platform to accept payments, protect revenue, and control your finances.
                    </h2>
                  </div>
                </div>
              </div>
              <div
                className="ds-grid-component ds-grid"
                data-j-grid=""
                data-v-6d6b2822
                data-v-4467b160
              >
                <div
                  className="ds-grid__col ds-grid__col--12 ds-md-grid__col--4 ds-lg-grid__col--3"
                  data-j-column
                  data-v-6d6b2822
                >
                  <div className="ds-text-align-left" data-v-37469bda data-v-4467b160>
                    <div className="icon-frame icon-frame--size-24 icon-frame--align-x-left icon-frame--align-y-bottom" data-v-6522a81a data-v-37469bda>
                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="23" viewBox="0 0 22 23" aria-label="world" role="img" className="icon ds-color-green" data-v-37469bda>
                            <g>
                                <path fill="none" stroke="currentColor" d="M11 21.75C16.5228 21.75 21 17.2728 21 11.75C21 6.22715 16.5228 1.75 11 1.75C5.47715 1.75 1 6.22715 1 11.75C1 17.2728 5.47715 21.75 11 21.75Z" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                                <circle fill="currentColor" stroke="none" cx="18" cy="6.75" r="1"/>
                                <circle fill="currentColor" stroke="none" cx="18" cy="9.75" r="1"/>
                                <circle fill="currentColor" stroke="none" cx="18" cy="12.75" r="1"/>
                                <circle fill="currentColor" stroke="none" cx="18" cy="15.75" r="1"/>
                                <circle fill="currentColor" stroke="none" cx="15" cy="4.75" r="1"/>
                                <circle fill="currentColor" stroke="none" cx="15" cy="7.75" r="1"/>
                                <circle fill="currentColor" stroke="none" cx="15" cy="10.75" r="1"/>
                                <circle fill="currentColor" stroke="none" cx="15" cy="13.75" r="1"/>
                                <circle fill="currentColor" stroke="none" cx="15" cy="16.75" r="1"/>
                                <circle fill="currentColor" stroke="none" cx="15" cy="19.75" r="1"/>
                                <circle fill="currentColor" stroke="none" cx="12" cy="2.75" r="1"/>
                                <circle fill="currentColor" stroke="none" cx="12" cy="5.75" r="1"/>
                                <circle fill="currentColor" stroke="none" cx="9" cy="10.75" r="1"/>
                                <circle fill="currentColor" stroke="none" cx="12" cy="8.75" r="1"/>
                                <circle fill="currentColor" stroke="none" cx="9" cy="7.75" r="1"/>
                                <circle fill="currentColor" stroke="none" cx="12" cy="11.75" r="1"/>
                                <circle fill="currentColor" stroke="none" cx="6" cy="5.75" r="1"/>
                            </g>
                        </svg>
                    </div>
                    <h4 className="ds-margin-top-24 ds-heading-xsmall" data-v-37469bda>
                      Expand your business
                    </h4>
                    <div className="ds-margin-top-12" data-v-37469bda>
                      <div className="ds-rich-text" data-v-c91d7878 data-v-4467b160>
                        <p data-v-c91d7878>
                          Easily add more{' '}
                          <a data-v-c91d7878 href="https://www.adyen.com/payment-methods">
                            payment methods
                          </a>{' '}
                          and grow into new markets with local acquiring.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="ds-grid__col ds-grid__col--12 ds-md-grid__col--4 ds-lg-grid__col--3"
                  data-j-column
                  data-v-6d6b2822
                >
                  <div className="ds-text-align-left" data-v-37469bda data-v-4467b160>
                    <div className="icon-frame icon-frame--size-24 icon-frame--align-x-left icon-frame--align-y-bottom" data-v-6522a81a data-v-37469bda>
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="24" viewBox="0 0 20 24" aria-label="collections" role="img" className="icon ds-color-green" data-v-37469bda>
                          <path d="M13 7.5V3.5C13 2.39543 12.1046 1.5 11 1.5H3C1.89543 1.5 1 2.39543 1 3.5V11.5C1 12.6046 1.89543 13.5 3 13.5H7" fill="none" stroke="currentColor" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                          <rect x="7" y="7.5" width="12" height="12" rx="2" fill="none" stroke="currentColor" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                      </svg>
                    </div>
                    <h4 className="ds-margin-top-24 ds-heading-xsmall" data-v-37469bda>
                      Connect online and offline
                    </h4>
                    <div className="ds-margin-top-12" data-v-37469bda>
                      <div className="ds-rich-text" data-v-c91d7878 data-v-4467b160>
                        <p data-v-c91d7878>
                          Create superior customer experiences using cross-channel insights.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="ds-grid__colds-grid__col--12 ds-md-grid__col--4 ds-lg-grid__col--3"
                  data-j-column
                  data-v-6d6b2822
                >
                  <div className="ds-text-align-left" data-v-37469bda data-v-4467b160>
                    <div className="icon-frame icon-frame--size-24 icon-frame--align-x-left icon-frame--align-y-bottom" data-v-6522a81a data-v-37469bda>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" aria-label="graph-dots" role="img" className="icon ds-color-green" data-v-37469bda>
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M18 5C18 3.34315 19.3431 2 21 2C22.6569 2 24 3.34315 24 5C24 6.65685 22.6569 8 21 8C20.3246 8 19.7014 7.77683 19.2 7.40022L17.9091 8.26407C17.9685 8.49955 18 8.74609 18 9C18 10.6569 16.6569 12 15 12C14.7942 12 14.5933 11.9793 14.3992 11.9398L11.3146 17.0913C11.7428 17.6099 12 18.2749 12 19C12 20.6569 10.6569 22 9 22C7.34315 22 6 20.6569 6 19C6 18.5369 6.10495 18.0982 6.29237 17.7066L4.29342 15.7076C3.90178 15.895 3.46315 16 3 16C1.34315 16 0 14.6569 0 13C0 11.3431 1.34315 10 3 10C4.65685 10 6 11.3431 6 13C6 13.4631 5.89505 13.9018 5.70763 14.2934L7.70658 16.2924C8.09822 16.105 8.53685 16 9 16C9.20579 16 9.40674 16.0207 9.60088 16.0602L12.6855 10.9088C12.2573 10.3901 12 9.72511 12 9C12 7.34315 13.3431 6 15 6C15.6754 6 16.2986 6.22316 16.8 6.59976L18.0909 5.7359C18.0315 5.50044 18 5.2539 18 5ZM21 4C20.4477 4 20 4.44772 20 5C20 5.55228 20.4477 6 21 6C21.5523 6 22 5.55228 22 5C22 4.44772 21.5523 4 21 4ZM14.5394 9.88786C14.5214 9.87541 14.5029 9.86345 14.4838 9.85204C14.4665 9.8417 14.4491 9.83194 14.4314 9.82276C14.1708 9.64227 14 9.34108 14 9C14 8.44772 14.4477 8 15 8C15.5523 8 16 8.44772 16 9C16 9.55228 15.5523 10 15 10C14.8339 10 14.6773 9.95951 14.5394 9.88786ZM3.70293 13.7029C3.72131 13.6845 3.74022 13.667 3.75963 13.6504C3.90947 13.4755 4 13.2483 4 13C4 12.4477 3.55228 12 3 12C2.44772 12 2 12.4477 2 13C2 13.5523 2.44772 14 3 14C3.24834 14 3.47553 13.9095 3.65039 13.7596C3.66703 13.7402 3.68455 13.7213 3.70293 13.7029ZM8.23995 18.3501C8.09035 18.5249 8 18.7519 8 19C8 19.5523 8.44771 20 9 20C9.55228 20 10 19.5523 10 19C10 18.6587 9.82903 18.3574 9.56806 18.1769C9.55065 18.1678 9.5334 18.1582 9.51633 18.1479C9.49745 18.1366 9.47908 18.1248 9.46122 18.1125C9.32322 18.0406 9.16636 18 9 18C8.7519 18 8.5249 18.0904 8.35011 18.2399C8.33333 18.2595 8.31568 18.2786 8.29714 18.2971C8.27861 18.3157 8.25953 18.3333 8.23995 18.3501Z" fill="currentColor"/>
                        </svg>
                    </div>
                    <h4 className="ds-margin-top-24 ds-heading-xsmall" data-v-37469bda>
                      Uncover areas for growth
                    </h4>
                    <div className="ds-margin-top-12" data-v-37469bda>
                      <div className="ds-rich-text" data-v-c91d7878 data-v-4467b160>
                        <p data-v-c91d7878>
                          Gain a deeper understanding of your business with all your global payment data in one place.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="ds-grid__col ds-grid__col--12 ds-md-grid__col--4 ds-lg-grid__col--3"
                  data-j-column
                  data-v-6d6b2822
                >
                  <div className="ds-text-align-left" data-v-37469bda data-v-4467b160>
                    <div class="icon-frame icon-frame--size-24 icon-frame--align-x-left icon-frame--align-y-bottom" data-v-6522a81a data-v-37469bda>
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="21" viewBox="0 0 18 21" aria-label="risk-team" role="img" class="icon ds-color-green" data-v-37469bda>
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M14.7072 0.292893C14.9054 0.491062 15.003 0.75171 15 1.01143C15.003 1.53774 15.2134 2.04184 15.5858 2.41421C15.9609 2.78929 16.4696 3 17 3C17.0187 3 17.0373 3.00051 17.0558 3.00153C17.1605 3.00728 17.2608 3.02914 17.3545 3.06465C17.4831 3.11329 17.6037 3.18937 17.7072 3.29289C17.8268 3.41251 17.9098 3.5549 17.9561 3.70611C17.9712 3.75533 17.9826 3.80616 17.99 3.8583C17.9973 3.90917 18.0006 3.9605 18 4.0118V9.001C17.9974 11.5788 17.1348 14.0821 15.5487 16.1142C13.9626 18.1464 11.7439 19.5912 9.24386 20.2198C9.08402 20.26 8.91673 20.2601 8.75686 20.22C6.25572 19.593 4.03568 18.1486 2.44919 16.1159C1.83342 15.3269 1.32679 14.4669 0.937299 13.5591C0.932601 13.5486 0.928093 13.538 0.923774 13.5274C0.31856 12.1051 0.000415555 10.5663 0 9.00027V4C0 3.44772 0.447715 3 1 3C1.53043 3 2.03914 2.78929 2.41421 2.41421C2.78929 2.03914 3 1.53043 3 1C3 0.447715 3.44772 0 4 0H13.9999L14.0142 9.90437e-05C14.1296 0.00170715 14.2403 0.0228639 14.3431 0.0604079C14.476 0.108813 14.6006 0.186308 14.7072 0.292893ZM15.0779 4.50794C14.748 4.32718 14.4424 4.09922 14.1716 3.82843C13.9008 3.55766 13.6729 3.25208 13.4921 2.92219L3.053 13.3613C3.32692 13.8959 3.65206 14.4065 4.02582 14.8853C4.12434 15.0116 4.22582 15.1351 4.33013 15.2557L15.0779 4.50794ZM5.78985 16.6244L16 6.41428V9C15.9976 11.1323 15.284 13.2028 13.9721 14.8837C12.7117 16.4986 10.9683 17.6651 8.99963 18.2156C7.83272 17.8902 6.74487 17.3482 5.78985 16.6244ZM4.87299 2H11.5859L2.28215 11.3037C2.09614 10.5547 2.00023 9.78134 2 8.99973V4.87299C2.68603 4.69584 3.31889 4.33797 3.82843 3.82843C4.33797 3.31889 4.69584 2.68603 4.87299 2Z" fill="currentColor"/>
                        </svg>
                    </div>
                    <h4 className="ds-margin-top-24 ds-heading-xsmall" data-v-37469bda>
                      Manage fraud at scale
                    </h4>
                    <div className="ds-margin-top-12" data-v-37469bda>
                      <div className="ds-rich-text" data-v-c91d7878 data-v-4467b160>
                        <p data-v-c91d7878>
                          Protect your business by detecting and responding to fraud without impacting real transactions.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="ds-section ds-section--grey ds-padding-top-48 ds-md-padding-top-96 ds-padding-bottom-48 ds-md-padding-bottom-96 bg-[#f7f7f8]">
            <div className="ds-container">
              <div className="ds-width-full ds-height-full ds-media-text-component">
                <div className="ds-grid ds-align-items-center ds-justify-content-space-between ds-flex-direction-column-reverse ds-md-flex-direction-row">
                  <div className="ds-grid__col ds-grid__col--12 ds-md-grid__col--5">
                    <div className="ds-video ds-margin-bottom-48" style={{minWidth: 327, minHeight: 436}}>
                      <video
                        autoPlay
                        loop
                        muted
                        playsInline
                        poster="https://adyen.getbynder.com/transform/541eba18-8dd8-449d-b50d-e8e9af296a52/checkout-options-screens?io=transform:fill,width:654,height:872&io=transform:crop,width:654,height:872"
                      >
                        <source
                          src="https://adyen.getbynder.com/m/6b8c3ed4ea42677a/original/New-video-AD0106_HomepageHike_PaymentsAnimations_07.mp4"
                          type="video/mp4"
                        />
                        <a
                          href="https://adyen.getbynder.com/m/6b8c3ed4ea42677a/original/New-video-AD0106_HomepageHike_PaymentsAnimations_07.mp4"
                          target="_blank"
                          rel="noopener"
                          aria-label="Checkout demo"
                          className="ds-button-link ds-button-link--primary ds-button-link--green"
                        >
                          <div className="ds-text-icon">
                            <span>Checkout demo</span>
                          </div>
                        </a>
                      </video>
                    </div>
                  </div>
                  <div className="ds-grid__col ds-grid__col--12 ds-md-grid__col--7">
                    <div className="ml-4">
                      <div className="ds-eyebrow ds-eyebrow__single-element">
                        <p className="ds-eyebrow__text ds-eyebrow__text--light ds-text-medium">Payments</p>
                      </div>
                      <h3 className="ds-heading ds-margin-bottom-12">Get paid everywhere</h3>
                      <div className="ds-rich-text ds-text-medium ds-margin-bottom-48">
                        <p>
                          Let your customers pay wherever and however they prefer. Work with one provider to{" "}
                          <a href="https://www.adyen.com/accept-payments" target="_blank" rel="noopener" data-v-c91d7878>
                            accept, process, and settle payments
                          </a>
                          .
                        </p>
                      </div>
                      <div className="ds-margin-top-24">
                        <a
                          href="/online-payments"
                          aria-label="Online payments"
                          className="ds-button-link--chevron ds-button-link ds-button-link--primary ds-button-link--green"
                        >
                          <div className="ds-text-icon flex items-center">
                            <span>Online payments</span>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="6"
                              height="10"
                              viewBox="0 0 6 10"
                              aria-label="chevron-right-small"
                              role="img"
                              className="icon ds-text-icon__icon ds-text-icon__icon--right ds-margin-left-6"
                            >
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M0.292893 9.70711C-0.0976309 9.31658 -0.0976309 8.68342 0.292894 8.29289L3.58579 5L0.292894 1.70711C-0.0976302 1.31658 -0.0976302 0.683417 0.292894 0.292893C0.683418 -0.0976319 1.31658 -0.0976319 1.70711 0.292893L5.70711 4.29289C6.09763 4.68342 6.09763 5.31658 5.70711 5.70711L1.70711 9.70711C1.31658 10.0976 0.683417 10.0976 0.292893 9.70711Z"
                                fill="currentColor"
                              />
                            </svg>
                          </div>
                        </a>
                        <p className="ds-margin-top-6">Accept payments on your website and in-app</p>
                      </div>
                      <div className="ds-margin-top-24">
                        <a
                          href="/pos-payments"
                          aria-label="In-person payments"
                          className="ds-button-link--chevron ds-button-link ds-button-link--primary ds-button-link--green"
                        >
                          <div className="ds-text-icon flex items-center">
                            <span>In-person payments</span>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="6"
                              height="10"
                              viewBox="0 0 6 10"
                              aria-label="chevron-right-small"
                              role="img"
                              className="icon ds-text-icon__icon ds-text-icon__icon--right ds-margin-left-6"
                            >
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M0.292893 9.70711C-0.0976309 9.31658 -0.0976309 8.68342 0.292894 8.29289L3.58579 5L0.292894 1.70711C-0.0976302 1.31658 -0.0976302 0.683417 0.292894 0.292893C0.683418 -0.0976319 1.31658 -0.0976319 1.70711 0.292893L5.70711 4.29289C6.09763 4.68342 6.09763 5.31658 5.70711 5.70711L1.70711 9.70711C1.31658 10.0976 0.683417 10.0976 0.292893 9.70711Z"
                                fill="currentColor"
                              />
                            </svg>
                          </div>
                        </a>
                        <p className="ds-margin-top-6">Enhance your point of sale setup and choose a terminal for any need.</p>
                      </div>
                      <div className="ds-margin-top-24">
                        <a
                          href="/unified-commerce"
                          aria-label="Unified Commerce"
                          className="ds-button-link--chevron ds-button-link ds-button-link--primary ds-button-link--green"
                        >
                          <div className="ds-text-icon flex items-center">
                            <span>Unified Commerce</span>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="6"
                              height="10"
                              viewBox="0 0 6 10"
                              aria-label="chevron-right-small"
                              role="img"
                              className="icon ds-text-icon__icon ds-text-icon__icon--right ds-margin-left-6"
                            >
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M0.292893 9.70711C-0.0976309 9.31658 -0.0976309 8.68342 0.292894 8.29289L3.58579 5L0.292894 1.70711C-0.0976302 1.31658 -0.0976302 0.683417 0.292894 0.292893C0.683418 -0.0976319 1.31658 -0.0976319 1.70711 0.292893L5.70711 4.29289C6.09763 4.68342 6.09763 5.31658 5.70711 5.70711L1.70711 9.70711C1.31658 10.0976 0.683417 10.0976 0.292893 9.70711Z"
                                fill="currentColor"
                              />
                            </svg>
                          </div>
                        </a>
                        <p className="ds-margin-top-6">Connect your online and in-store payment data in one system.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="ds-section ds-section--light" data-v-472b858e data-v-4467b160>
            <div className="ds-container" data-v-472b858e>
              <div className="ds-grid" data-v-472b858e data-v-4467b160>
                <div className="ds-grid__col ds-grid__col--12" data-v-472b858e data-v-4467b160>
                  <hr className="ds-divider ds-divider--light" data-v-4467b160 />
                </div>
              </div>
            </div>
          </section>

          <section className="ds-section ds-section--grey ds-padding-top-48 ds-md-padding-top-96 ds-padding-bottom-48 ds-md-padding-bottom-96" data-v-472b858e data-v-4467b160>
            <div className="ds-container" data-v-472b858e>
              <div className="ds-width-full ds-height-full ds-media-text-component" data-v-4467b160>
                <div data-j-container className="ds-grid ds-justify-content-space-between ds-flex-direction-column ds-align-items-center">
                  <div data-j-column className="ds-grid__col ds-display-flex ds-grid__col--12 ds-md-grid__col--8 ds-justify-content-center">
                    <div data-j-container="" data-j-content="" className="ds-text-align-center">
                      <div data-j-eyebrow="" className="ds-eyebrow ds-eyebrow__single-element ds-justify-content-center" data-v-ac5c2c5c>
                        <p data-j-text className="ds-eyebrow__text ds-eyebrow__text--light ds-text-medium" data-v-ac5c2c5c>Data</p>
                      </div>
                      <h3 data-j-title className="ds-heading ds-margin-bottom-12">Make smarter decisions with millions of insights</h3>
                      <div className="ds-rich-text ds-text-medium" data-v-c91d7878 data-v-4467b160>
                        <p data-v-c91d7878>Adyen’s unique data ecosystem reveals opportunities where your business can grow. </p>
                        <p data-v-c91d7878>
                          Coupled with our machine learning technology, we help you <a data-v-c91d7878 href="https://www.adyen.com/risk-management">protect your business from fraud</a>, provide <a data-v-c91d7878 href="https://www.adyen.com/authentication-3d-secure">customer-friendly authentication</a>, and <a data-v-c91d7878 href="https://www.adyen.com/revenue-optimization">increase approval rates</a>.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div data-j-column className="ds-grid__col ds-grid__col--12 ds-md-grid__col--10">
                    <picture data-j-picture="" data-j-image="" className="ds-image-element ds-margin-top-48" data-v-4cc51436>
                      <source media="(max-width: 767px)" srcSet="https://adyen.getbynder.com/transform/b475f990-8488-47e8-aa74-05668d25df7d/dahsboard-homepage-promotional-campaign-risk-offset?io=transform:fill,width:654,height:368&io=transform:crop,width:654,height:368" width="327" height="184" data-j-source-small data-v-4cc51436 />
                      <source media="(max-width: 1223px)" srcSet="https://adyen.getbynder.com/transform/b475f990-8488-47e8-aa74-05668d25df7d/dahsboard-homepage-promotional-campaign-risk-offset?io=transform:fill,width:1344,height:756&io=transform:crop,width:1344,height:756" width="672" height="378" data-j-source-medium data-v-4cc51436 />
                      <source media="(min-width: 1224px)" srcSet="https://adyen.getbynder.com/transform/b475f990-8488-47e8-aa74-05668d25df7d/dahsboard-homepage-promotional-campaign-risk-offset?io=transform:fill,width:2400,height:1350&io=transform:crop,width:2400,height:1350" width="1200" height="675" data-j-source-large data-v-4cc51436 />
                      <img loading="eager" src="https://adyen.getbynder.com/transform/b475f990-8488-47e8-aa74-05668d25df7d/dahsboard-homepage-promotional-campaign-risk-offset?io=transform:fill,width:654,height:368&io=transform:crop,width:654,height:368" alt="Dashboard around risk testing" data-j-image className="ds-image-element__image" data-v-4cc51436 />
                    </picture>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="ds-section ds-section--light" data-v-472b858e data-v-4467b160>
            <div className="ds-container" data-v-472b858e>
              <div className="ds-grid" data-v-472b858e data-v-4467b160>
                <div className="ds-grid__col ds-grid__col--12" data-v-472b858e data-v-4467b160>
                  <hr className="ds-divider ds-divider--light" data-v-4467b160 />
                </div>
              </div>
            </div>
          </section>

          <section className="ds-section ds-section--grey ds-padding-top-48 ds-md-padding-top-96 ds-padding-bottom-48 ds-md-padding-bottom-96 bg-[#f7f7f8]">
            <div className="ds-container">
              <div className="ds-width-full ds-height-full ds-media-text-component finance-operations-section">
                <div className="ds-grid ds-justify-content-space-between ds-align-items-center">
                  <div className="ds-grid__col ds-grid__col--12 ds-md-grid__col--6 ds-lg-grid__col--5">
                    <div className="ds-eyebrow ds-eyebrow__single-element">
                      <p className="ds-eyebrow__text ds-eyebrow__text--light ds-text-medium">
                        Finance &amp; operations
                      </p>
                    </div>
                    <h3 className="ds-heading ds-margin-bottom-12">
                      Take full control of your funds
                    </h3>
                    <div className="ds-rich-text ds-text-medium">
                      <p>
                        Optimize your finances and increase automation with our banking infrastructure.
                        Especially valuable for platforms and marketplaces looking to payout users faster
                        in a preferred currency.
                      </p>
                    </div>
                    <div className="ds-margin-top-48">
                      <p className="ds-font-weight-bold ds-margin-bottom-24">
                        Generate your own physical or virtual payment cards to send funds instantly and
                        manage spending.
                      </p>
                    </div>
                    <div>
                      <a
                        href="https://www.adyen.com/issuing"
                        aria-label="Discover Adyen issuing"
                        className="ds-button-link--chevron ds-button-link ds-button-link--primary ds-button-link--green flex items-center"
                        data-track-component-name="DsLink"
                      >
                        <span>Discover Adyen issuing</span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="6"
                          height="10"
                          viewBox="0 0 6 10"
                          aria-label="chevron-right-small"
                          role="img"
                          className="icon ds-text-icon__icon ds-text-icon__icon--right ds-margin-left-6"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M0.292893 9.70711C-0.0976309 9.31658 -0.0976309 8.68342 0.292894 8.29289L3.58579 5L0.292894 1.70711C-0.0976302 1.31658 -0.0976302 0.683417 0.292894 0.292893C0.683418 -0.0976319 1.31658 -0.0976319 1.70711 0.292893L5.70711 4.29289C6.09763 4.68342 6.09763 5.31658 5.70711 5.70711L1.70711 9.70711C1.31658 10.0976 0.683417 10.0976 0.292893 9.70711Z"
                            fill="currentColor"
                          />
                        </svg>
                      </a>
                    </div>
                  </div>

                  <div className="ds-grid__col ds-grid__col--12 ds-md-grid__col--6 ds-lg-grid__col--6">
                    <picture className="ds-image-element">
                      <source
                        media="(max-width: 767px)"
                        srcSet="https://adyen.getbynder.com/transform/2994616c-0b39-4a1f-a208-3badb4d8ac8c/issuing-page-header?io=transform:fill,width:654,height:654&io=transform:crop,width:654,height:654"
                        width="327"
                        height="327"
                      />
                      <source
                        media="(max-width: 1223px)"
                        srcSet="https://adyen.getbynder.com/transform/2994616c-0b39-4a1f-a208-3badb4d8ac8c/issuing-page-header?io=transform:fill,width:624,height:624&io=transform:crop,width:624,height:624"
                        width="312"
                        height="312"
                      />
                      <source
                        media="(min-width: 1224px)"
                        srcSet="https://adyen.getbynder.com/transform/2994616c-0b39-4a1f-a208-3badb4d8ac8c/issuing-page-header?io=transform:fill,width:1152,height:1152&io=transform:crop,width:1152,height:1152"
                        width="576"
                        height="576"
                      />
                      <img
                        loading="eager"
                        src="https://adyen.getbynder.com/transform/2994616c-0b39-4a1f-a208-3badb4d8ac8c/issuing-page-header?io=transform:fill,width:654,height:654&io=transform:crop,width:654,height:654"
                        alt="Making a card payment with Adyen issued card"
                        className="ds-image-element__image"
                      />
                    </picture>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="ds-section solutions-section ds-section--light ds-padding-top-48 ds-md-padding-top-96 ds-padding-bottom-48 ds-md-padding-bottom-96">
            <div className="ds-container">
              <div className="ds-grid">
                <div className="ds-grid__col ds-md-grid__col--8 ds-grid__col--12 ds-lg-grid__col--8 ds-margin-bottom-48">
                  <h2 className="ds-heading ds-margin-bottom-12">Solutions built for your business model</h2>
                  <p className="ds-text-medium">Ambition looks different to every business. Learn how Adyen is helping the world’s leading brands realize theirs.</p>
                </div>
              </div>

              <div className="ds-tabs">
              <div className="ds-padding-top-0 ds-md-padding-top-24">
                <div className="ds-grid">
                  <div className="ds-grid__col ds-grid__col--12">
                    <div className="ds-tabs__items">
                      <button
                        id="tab-digital-businesses"
                        role="tab"
                        aria-selected="true"
                        aria-controls="tab-content-digital-businesses"
                        className="tab-item ds-button-navigation ds-button-navigation--secondary ds-button-navigation--active mr-6"
                      >
                        Digital businesses
                      </button>
                      <button
                        id="tab-omnichannel"
                        role="tab"
                        aria-controls="tab-content-omnichannel"
                        className="tab-item ds-button-navigation ds-button-navigation--secondary mr-6"
                      >
                        Omnichannel
                      </button>
                      <button
                        id="tab-platforms-marketplaces"
                        role="tab"
                        aria-controls="tab-content-platforms-marketplaces"
                        className="tab-item ds-button-navigation ds-button-navigation--secondary mr-6"
                      >
                        Platforms &amp; marketplaces
                      </button>
                    </div>
                  </div>
                </div>
                <section className="ds-section ds-section--light" data-v-472b858e data-v-4467b160>
                  <div className="ds-container" data-v-472b858e>
                    <div className="ds-grid" data-v-472b858e data-v-4467b160>
                      <div className="ds-grid__col ds-grid__col--12" data-v-472b858e data-v-4467b160>
                        <hr className="ds-divider ds-divider--light" data-v-4467b160 />
                      </div>
                    </div>
                  </div>
                </section>
                <div className="ds-tabs__divider"></div>
              </div>
              <div className="ds-tabs__container">
                <div id="tab-content-digital-businesses" role="tabpanel" aria-labelledby="tab-digital-businesses" className="ds-tabs__content">
                  <div className="ds-width-full ds-height-full ds-media-text-component ds-margin-top-48">
                    <div className="ds-grid ds-justify-content-space-between ds-align-items-center">
                      <div className="ds-grid__col ds-display-flex ds-grid__col--12 ds-md-grid__col--6 ds-lg-grid__col--5">
                        <div>
                          <h3 className="ds-heading ds-margin-bottom-12">Digital businesses</h3>
                          <p className="ds-text-medium">Optimize conversion by offering seamless payments and authentication. Learn where and how to expand your business next, supported by insights. All while managing risk at scale.</p>
                          <a href="https://www.adyen.com/knowledge-hub/5-insights-from-andy-wiggan-head-of-payments-spotify" className="ds-button-link--chevron ds-button-link ds-button-link--primary ds-button-link--green ds-margin-top-24" aria-label="Seeing payments as an enabler of growth">
                            <div className="ds-text-icon flex items-center">
                              <span>Seeing payments as an enabler of growth</span>
                              <svg xmlns="http://www.w3.org/2000/svg" width="6" height="10" viewBox="0 0 6 10" aria-label="chevron-right-small" role="img" className="icon ds-text-icon__icon ds-text-icon__icon--right ds-margin-left-6">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M0.292893 9.70711C-0.0976309 9.31658 -0.0976309 8.68342 0.292894 8.29289L3.58579 5L0.292894 1.70711C-0.0976302 1.31658 -0.0976302 0.683417 0.292894 0.292893C0.683418 -0.0976319 1.31658 -0.0976319 1.70711 0.292893L5.70711 4.29289C6.09763 4.68342 6.09763 5.31658 5.70711 5.70711L1.70711 9.70711C1.31658 10.0976 0.683417 10.0976 0.292893 9.70711Z" fill="currentColor"></path>
                              </svg>
                            </div>
                          </a>
                        </div>
                      </div>
                      <div className="ds-grid__col ds-grid__col--12 ds-md-grid__col--6 ds-lg-grid__col--6">
                        <picture className="ds-image-element ">
                          <source media="(max-width: 767px)" srcSet="https://adyen.getbynder.com/m/4f199bfd79070d3a/webimage-homepage-square-spotify.jpg" />
                          <source media="(max-width: 1223px)" srcSet="https://adyen.getbynder.com/m/4f199bfd79070d3a/webimage-homepage-square-spotify.jpg" />
                          <source media="(min-width: 1224px)" srcSet="https://adyen.getbynder.com/m/4f199bfd79070d3a/webimage-homepage-square-spotify.jpg" />
                          <img loading="eager" src="https://adyen.getbynder.com/m/4f199bfd79070d3a/webimage-homepage-square-spotify.jpg" alt="People dancing to music played via Spotify" className="ds-image-element__image" />
                        </picture>
                      </div>
                    </div>
                  </div>
                  <div className="ds-logo-bar ds-margin-top-48 ds-text-align-center">
                    <div className="ds-grid__col ds-grid__col--12 ds-lg-grid__col--8 ds-lg-grid__col--offset-2">
                      <h2 className="ds-heading"></h2>
                    </div>
                    <div data-v-859002a6="" data-j-logo-bar="" className="ds-logo-bar__items ds-justify-content-center">
                      <img
                        data-v-859002a6=""
                        src="https://adyen.getbynder.com/transform/e6073dee-6232-44a6-a802-94764e40bdb6/linkedin-logobar-svg"
                        alt="LinkedIn logo"
                        loading="lazy"
                        data-j-item=""
                        className="ds-logo-bar__image"
                      />
                      <img
                        data-v-859002a6=""
                        src="https://adyen.getbynder.com/transform/d5cbe38e-d455-4923-b6bf-ebb789f7035d/SHEIN-logobar-svg"
                        alt="SHEIN logo"
                        loading="lazy"
                        data-j-item=""
                        className="ds-logo-bar__image"
                      />
                      <img
                        data-v-859002a6=""
                        src="https://adyen.getbynder.com/transform/1e13e31f-b1e4-4fa9-9dde-7c9e73d01520/hello-fresh-logobar-svg"
                        alt="Hello Fresh"
                        loading="lazy"
                        data-j-item=""
                        className="ds-logo-bar__image"
                      />
                      <img
                        data-v-859002a6=""
                        src="https://adyen.getbynder.com/transform/4335a61c-ab3c-4fee-b7ab-b52325d4bdad/booking-com-logobar-svg"
                        alt="Booking.com"
                        loading="lazy"
                        data-j-item=""
                        className="ds-logo-bar__image"
                      />
                      <img
                        data-v-859002a6=""
                        src="https://adyen.getbynder.com/transform/12d15f22-7eb2-4aea-9112-41d0a162c7e9/farfetch-logobar-svg"
                        alt="FarFetch"
                        loading="lazy"
                        data-j-item=""
                        className="ds-logo-bar__image"
                      />
                      <img
                        data-v-859002a6=""
                        src="https://adyen.getbynder.com/transform/a008f73a-23c5-45c8-86f4-236c9f9a1b1e/flixbus-logobar-svg"
                        alt="FlixBus"
                        loading="lazy"
                        data-j-item=""
                        className="ds-logo-bar__image"
                      />
                    </div>
                  </div>
                </div>
                <div id="tab-content-omnichannel" role="tabpanel" aria-labelledby="tab-omnichannel" className="ds-tabs__content hidden">
                  <div className="ds-width-full ds-height-full ds-media-text-component ds-margin-top-48">
                    <div className="ds-grid ds-justify-content-space-between ds-align-items-center">
                      <div className="ds-grid__col ds-display-flex ds-grid__col--12 ds-md-grid__col--6 ds-lg-grid__col--5">
                        <div>
                          <h3 className="ds-heading ds-margin-bottom-12">Omnichannel businesses</h3>
                          <p className="ds-text-medium">Accelerate your digital transformation. Connect your online and offline payment data in one system. Deliver more flexible buying journeys and build a deeper understanding of your customers’ behaviour.</p>
                          <a href="/knowledge-hub/joe-and-the-juice-using-payment-technology-to-improve-customer-experience" className="ds-button-link--chevron ds-button-link ds-button-link--primary ds-button-link--green ds-margin-top-24" aria-label="See how Joe & The Juice are using payment technology to improve customer experience">
                            <div className="ds-text-icon">
                              <span>See how Joe &amp; The Juice are using payment technology to improve customer experience</span>
                              <svg xmlns="http://www.w3.org/2000/svg" width="6" height="10" viewBox="0 0 6 10" aria-label="chevron-right-small" role="img" className="icon ds-text-icon__icon ds-text-icon__icon--right ds-margin-left-6">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M0.292893 9.70711C-0.0976309 9.31658 -0.0976309 8.68342 0.292894 8.29289L3.58579 5L0.292894 1.70711C-0.0976302 1.31658 -0.0976302 0.683417 0.292894 0.292893C0.683418 -0.0976319 1.31658 -0.0976319 1.70711 0.292893L5.70711 4.29289C6.09763 4.68342 6.09763 5.31658 5.70711 5.70711L1.70711 9.70711C1.31658 10.0976 0.683417 10.0976 0.292893 9.70711Z" fill="currentColor"></path>
                              </svg>
                            </div>
                          </a>
                        </div>
                      </div>
                      <div className="ds-grid__col ds-grid__col--12 ds-md-grid__col--6 ds-lg-grid__col--6">
                        <picture className="ds-image-element">
                          <source media="(max-width: 767px)" srcSet="https://adyen.getbynder.com/m/5e1f30d9a1b228a7/webimage-homepage-square-joe-the-juice.jpg" />
                          <source media="(max-width: 1223px)" srcSet="https://adyen.getbynder.com/m/5e1f30d9a1b228a7/webimage-homepage-square-joe-the-juice.jpg" />
                          <source media="(min-width: 1224px)" srcSet="https://adyen.getbynder.com/m/5e1f30d9a1b228a7/webimage-homepage-square-joe-the-juice.jpg" />
                          <img loading="eager" src="https://adyen.getbynder.com/m/5e1f30d9a1b228a7/webimage-homepage-square-joe-the-juice.jpg" alt="Joe & The Juice store" className="ds-image-element__image" />
                        </picture>
                      </div>
                    </div>
                  </div>
                  <div className="ds-logo-bar ds-margin-top-48 ds-text-align-center">
                    <div className="ds-grid__col ds-grid__col--12 ds-lg-grid__col--8 ds-lg-grid__col--offset-2">
                      <h2 className="ds-heading"></h2>
                    </div>
                    <div className="ds-logo-bar__items ds-justify-content-center">
                      <a href="your-link-here" aria-label="Discover more about our partner logos">
                        <img src="https://adyen.getbynder.com/transform/650b4908-0f67-47d5-b66a-54d31d7cbacb/unilever-logobar-svg" alt="Unilever logo" loading="lazy" className="ds-logo-bar__image" />
                        <img src="https://adyen.getbynder.com/transform/f25d6f94-9a57-45d8-a204-01336b7b6f9f/mango-logobar-svg" alt="Mango logo" loading="lazy" className="ds-logo-bar__image" />
                        <img src="https://adyen.getbynder.com/transform/9cf93be0-7c7a-484e-a49b-acc2ed68949a/victoria-secret-logobar-svg" alt="Victoria's Secret logo" loading="lazy" className="ds-logo-bar__image" />
                        <img src="https://adyen.getbynder.com/transform/41d22739-8b45-4551-b0cc-ef51283b79cd/printemps-logobar-svg" alt="Printemps logo" loading="lazy" className="ds-logo-bar__image" />
                        <img src="https://adyen.getbynder.com/transform/01c3afde-7397-44c4-b2a8-227bf61ad0b7/h-m-logobar-svg" alt="H&M logo" loading="lazy" className="ds-logo-bar__image" />
                        <img src="https://adyen.getbynder.com/transform/28d7d81b-fb23-4168-90d1-00167c57bcf5/pearle-optical-logobar-svg" alt="Pearle Optical logo" loading="lazy" className="ds-logo-bar__image" />
                      </a>
                    </div>
                  </div>
                </div>
                <div id="tab-content-platforms-marketplaces" role="tabpanel" aria-labelledby="tab-platforms-marketplaces" className="ds-tabs__content hidden">
                  <div className="ds-width-full ds-height-full ds-media-text-component ds-margin-top-48">
                    <div className="ds-grid ds-justify-content-space-between ds-align-items-center">
                      <div className="ds-grid__col ds-display-flex ds-grid__col--12 ds-md-grid__col--6 ds-lg-grid__col--5">
                        <div>
                          <h3 className="ds-heading ds-margin-bottom-12">Platforms &amp; marketplaces</h3>
                          <p className="ds-text-medium">Unlock new revenue streams by monetising payments and offering financial services. Scale globally with a payments platform that grows with you. Simplify compliance with automatic onboarding and payout capabilities.</p>
                          <a href="/knowledge-hub/5-insights-from-andy-wiggan-head-of-payments-spotify" className="ds-button-link--chevron ds-button-link ds-button-link--primary ds-button-link--green ds-margin-top-24" aria-label="Transforming platforms and marketplaces with Adyen">
                            <div className="ds-text-icon">
                              <span>Transforming platforms and marketplaces with Adyen</span>
                              <svg xmlns="http://www.w3.org/2000/svg" width="6" height="10" viewBox="0 0 6 10" aria-label="chevron-right-small" role="img" className="icon ds-text-icon__icon ds-text-icon__icon--right ds-margin-left-6">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M0.292893 9.70711C-0.0976309 9.31658 -0.0976309 8.68342 0.292894 8.29289L3.58579 5L0.292894 1.70711C-0.0976302 1.31658 -0.0976302 0.683417 0.292894 0.292893C0.683418 -0.0976319 1.31658 -0.0976319 1.70711 0.292893L5.70711 4.29289C6.09763 4.68342 6.09763 5.31658 5.70711 5.70711L1.70711 9.70711C1.31658 10.0976 0.683417 10.0976 0.292893 9.70711Z" fill="currentColor"></path>
                              </svg>
                            </div>
                          </a>
                        </div>
                      </div>
                      <div className="ds-grid__col ds-grid__col--12 ds-md-grid__col--6 ds-lg-grid__col--6">
                        <picture className="ds-image-element">
                          <source media="(max-width: 767px)" srcSet="https://adyen.getbynder.com/m/68e92942ec07f1b9/webimage-homepage-square-uber.jpg" />
                          <source media="(max-width: 1223px)" srcSet="https://adyen.getbynder.com/m/68e92942ec07f1b9/webimage-homepage-square-uber.jpg" />
                          <source media="(min-width: 1224px)" srcSet="https://adyen.getbynder.com/m/68e92942ec07f1b9/webimage-homepage-square-uber.jpg" />
                          <img loading="eager" src="https://adyen.getbynder.com/m/68e92942ec07f1b9/webimage-homepage-square-uber.jpg" alt="Uber application screen" className="ds-image-element__image" />
                        </picture>
                      </div>
                    </div>
                  </div>
                  <div className="ds-logo-bar ds-margin-top-48 ds-text-align-center">
                    <div className="ds-grid__col ds-grid__col--12 ds-lg-grid__col--8 ds-lg-grid__col--offset-2">
                      <h2 className="ds-heading"></h2>
                    </div>
                    <div data-v-859002a6="" data-j-logo-bar="" className="ds-logo-bar__items ds-justify-content-center">
                      <img src="https://adyen.getbynder.com/transform/6f2f0ab0-2f79-4673-8b3b-06cda4e4426d/uber-logobar-svg" alt="Uber logo" loading="lazy" className="ds-logo-bar__image" />
                      <img src="https://adyen.getbynder.com/transform/2971b08d-478e-4e22-8f51-5016761c4796/ebay-logobar-svg" alt="eBay logo" loading="lazy" className="ds-logo-bar__image" />
                      <img src="https://adyen.getbynder.com/transform/c45e19e7-4a68-4eec-809f-6c896457a0ed/booking-com-logobar-svg" alt="Booking.com logo" loading="lazy" className="ds-logo-bar__image" />
                      <img src="https://adyen.getbynder.com/transform/4c2a39b0-c617-43d1-865c-623780aa5897/etsy-logobar-svg" alt="Etsy logo" loading="lazy" className="ds-logo-bar__image" />
                      <img src="https://adyen.getbynder.com/transform/f11ed00a-8b8d-41d0-84b0-5125d9c394d2/vinted-logobar-svg" alt="Vinted logo" loading="lazy" className="ds-logo-bar__image" />
                      <img src="https://adyen.getbynder.com/transform/ea5698f0-2d7d-4397-8490-902b4e7359dc/fiverr-logobar-svg" alt="Fiverr logo" loading="lazy" className="ds-logo-bar__image" />
                    </div>
                  </div>
                </div>
                <div id="tab-content-smb" role="tabpanel" aria-labelledby="tab-smb" className="ds-tabs__content hidden">
                  <div className="ds-width-full ds-height-full ds-media-text-component ds-margin-top-48">
                    <div className="ds-grid ds-justify-content-space-between ds-align-items-center">
                      <div className="ds-grid__col ds-display-flex ds-grid__col--12 ds-md-grid__col--6 ds-lg-grid__col--5">
                        <div>
                          <h3 className="ds-heading ds-margin-bottom-12">Small and medium businesses</h3>
                          <p className="ds-text-medium">Use payment technology built for businesses like yours. Everything you need to accept payments, protect revenue, and control your finances. One integration, across channels and around the world.</p>
                          <a href="/knowledge-hub/5-insights-from-andy-wiggan-head-of-payments-spotify" className="ds-button-link--chevron ds-button-link ds-button-link--primary ds-button-link--green ds-margin-top-24" aria-label="Discover more about our SMB solutions">
                            <div className="ds-text-icon">
                              <span>Discover more about our SMB solutions</span>
                              <svg xmlns="http://www.w3.org/2000/svg" width="6" height="10" viewBox="0 0 6 10" aria-label="chevron-right-small" role="img" className="icon ds-text-icon__icon ds-text-icon__icon--right ds-margin-left-6">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M0.292893 9.70711C-0.0976309 9.31658 -0.0976309 8.68342 0.292894 8.29289L3.58579 5L0.292894 1.70711C-0.0976302 1.31658 -0.0976302 0.683417 0.292894 0.292893C0.683418 -0.0976319 1.31658 -0.0976319 1.70711 0.292893L5.70711 4.29289C6.09763 4.68342 6.09763 5.31658 5.70711 5.70711L1.70711 9.70711C1.31658 10.0976 0.683417 10.0976 0.292893 9.70711Z" fill="currentColor"></path>
                              </svg>
                            </div>
                          </a>
                        </div>
                      </div>
                      <div className="ds-grid__col ds-grid__col--12 ds-md-grid__col--6 ds-lg-grid__col--6">
                        <picture className="ds-image-element">
                          <source media="(max-width: 767px)" srcSet="https://adyen.getbynder.com/m/6b703cc9b2b78c43/webimage-homepage-square-meat-mentality.jpg" />
                          <source media="(max-width: 1223px)" srcSet="https://adyen.getbynder.com/m/6b703cc9b2b78c43/webimage-homepage-square-meat-mentality.jpg" />
                          <source media="(min-width: 1224px)" srcSet="https://adyen.getbynder.com/m/6b703cc9b2b78c43/webimage-homepage-square-meat-mentality.jpg" />
                          <img loading="eager" src="https://adyen.getbynder.com/m/6b703cc9b2b78c43/webimage-homepage-square-meat-mentality.jpg" alt="Man cooking food" className="ds-image-element__image" />
                        </picture>
                      </div>
                    </div>
                  </div>
                  <div className="ds-logo-bar ds-margin-top-48 ds-text-align-center">
                    <div className="ds-grid__col ds-grid__col--12 ds-lg-grid__col--8 ds-lg-grid__col--offset-2">
                      <h2 className="ds-heading"></h2>
                    </div>
                    <div data-v-859002a6="" data-j-logo-bar="" className="ds-logo-bar__items ds-justify-content-center">
                      <img src="https://adyen.getbynder.com/transform/056aa19d-e3a1-4b29-9b16-2d08b1ad0590/tushy-logobar-svg" alt="Tushy logo" loading="lazy" className="ds-logo-bar__image" />
                      <img src="https://adyen.getbynder.com/transform/88b02aa7-b889-4e19-bc3b-4bcabb586457/happy-socks-logobar-svg" alt="Happy Socks logo" loading="lazy" className="ds-logo-bar__image" />
                      <img src="https://adyen.getbynder.com/transform/cf01b248-bb10-49e8-bbe1-9f276a2788ee/jackery-logobar-svg" alt="Jackery logo" loading="lazy" className="ds-logo-bar__image" />
                      <img src="https://adyen.getbynder.com/transform/37de6f07-cc89-4af5-a05f-e84943cf5c43/bluebottle-logobar-svg" alt="Blue Bottle logo" loading="lazy" className="ds-logo-bar__image" />
                      <img src="https://adyen.getbynder.com/transform/a28d68b6-1eab-43e7-a196-57b258e9a7fa/the-spice-house-logobar-svg" alt="The Spice House logo" loading="lazy" className="ds-logo-bar__image" />
                      <img src="https://adyen.getbynder.com/transform/7f75df24-3998-4fe4-b365-83cc65b30fba/gentle-monster-logobar-svg" alt="Gentle Monster logo" loading="lazy" className="ds-logo-bar__image" />
                    </div>
                  </div>
                </div>
                <div id="tab-content-fintech" role="tabpanel" aria-labelledby="tab-fintech" className="ds-tabs__content hidden">
                  <div className="ds-width-full ds-height-full ds-media-text-component ds-margin-top-48">
                    <div className="ds-grid ds-justify-content-space-between ds-align-items-center">
                      <div className="ds-grid__col ds-display-flex ds-grid__col--12 ds-md-grid__col--6 ds-lg-grid__col--5">
                        <div>
                          <h3 className="ds-heading ds-margin-bottom-12">Fintech</h3>
                          <p className="ds-text-medium">From payment acceptance to card issuing, power your growth with flexible financial products. One partnership, multiple use cases: payment acceptance, financial services, and more.</p>
                          <a href="/knowledge-hub/5-insights-from-andy-wiggan-head-of-payments-spotify" className="ds-button-link--chevron ds-button-link ds-button-link--primary ds-button-link--green ds-margin-top-24" aria-label="Find out how we help fintechs grow">
                            <div className="ds-text-icon">
                              <span>Find out how we help fintechs grow</span>
                              <svg xmlns="http://www.w3.org/2000/svg" width="6" height="10" viewBox="0 0 6 10" aria-label="chevron-right-small" role="img" className="icon ds-text-icon__icon ds-text-icon__icon--right ds-margin-left-6">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M0.292893 9.70711C-0.0976309 9.31658 -0.0976309 8.68342 0.292894 8.29289L3.58579 5L0.292894 1.70711C-0.0976302 1.31658 -0.0976302 0.683417 0.292894 0.292893C0.683418 -0.0976319 1.31658 -0.0976319 1.70711 0.292893L5.70711 4.29289C6.09763 4.68342 6.09763 5.31658 5.70711 5.70711L1.70711 9.70711C1.31658 10.0976 0.683417 10.0976 0.292893 9.70711Z" fill="currentColor"></path>
                              </svg>
                            </div>
                          </a>
                        </div>
                      </div>
                      <div className="ds-grid__col ds-grid__col--12 ds-md-grid__col--6 ds-lg-grid__col--6">
                        <picture className="ds-image-element">
                          <source media="(max-width: 767px)" srcSet="https://adyen.getbynder.com/m/0f365e73362d93d4/webimage-homepage-square-revolut.jpg" />
                          <source media="(max-width: 1223px)" srcSet="https://adyen.getbynder.com/m/0f365e73362d93d4/webimage-homepage-square-revolut.jpg" />
                          <source media="(min-width: 1224px)" srcSet="https://adyen.getbynder.com/m/0f365e73362d93d4/webimage-homepage-square-revolut.jpg" />
                          <img loading="eager" src="https://adyen.getbynder.com/m/0f365e73362d93d4/webimage-homepage-square-revolut.jpg" alt="Revolut application screen" className="ds-image-element__image" />
                        </picture>
                      </div>
                    </div>
                  </div>
                  <div className="ds-logo-bar ds-margin-top-48 ds-text-align-center">
                    <div className="ds-grid__col ds-grid__col--12 ds-lg-grid__col--8 ds-lg-grid__col--offset-2">
                      <h2 className="ds-heading"></h2>
                    </div>
                    <div className="ds-logo-bar__items ds-justify-content-center">
                      <img src="https://adyen.getbynder.com/transform/d7cf1450-c2f0-4a12-b35b-0053b5b0aeac/bitpay-logobar-svg" alt="Bitpay logo" loading="lazy" className="ds-logo-bar__image" />
                      <img src="https://adyen.getbynder.com/transform/90d1db08-51eb-498d-982a-240240d6ef96/monzo-logobar-svg" alt="Monzo logo" loading="lazy" className="ds-logo-bar__image" />
                      <img src="https://adyen.getbynder.com/transform/d12d315a-16b1-42fa-8e87-f600deddf9d1/curve-logobar-svg" alt="Curve logo" loading="lazy" className="ds-logo-bar__image" />
                      <img src="https://adyen.getbynder.com/transform/6660cc0b-d78d-4814-9b4c-7dd5ef3cf7f2/bunq-logobar-svg" alt="Bunq logo" loading="lazy" className="ds-logo-bar__image" />
                      <img src="https://adyen.getbynder.com/transform/f8a36029-4cbb-421e-9ef8-b98a0f787fb1/stripe-logobar-svg" alt="Stripe logo" loading="lazy" className="ds-logo-bar__image" />
                      <img src="https://adyen.getbynder.com/transform/bff57d30-0ac4-4f4a-8e83-142e8dd1c4cf/klarna-logobar-svg" alt="Klarna logo" loading="lazy" className="ds-logo-bar__image" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            </div>   
          </section>

          <section
            data-v-029fbb84=""
            data-v-4467b160=""
            className="ds-background-color-white ds-padding-x-12 ds-md-padding-x-24 ds-padding-top-12 ds-md-padding-top-24 ds-padding-bottom-12 ds-md-padding-bottom-24"
            data-v-8361f0e6=""
          >
            <div data-v-029fbb84="" className="ds-background-color-green ds-padding-y-72 ds-lg-padding-y-144">
              <div data-v-029fbb84="" className="custom-full-width">
                <div data-v-029fbb84="" className="ds-container">
                  <div data-v-029fbb84="" className="ds-grid">
                    <div
                      data-v-029fbb84=""
                      className="ds-grid__col ds-grid__col--12 ds-md-grid__col--10 ds-lg-grid__col--8 ds-cta__columns"
                    >
                      <h2 data-v-029fbb84="" data-j-title="" className="ds-heading ds-color-white">
                        Get started with payments
                      </h2>
                      <div data-v-029fbb84="" className="ds-buttons-wrapper ds-margin-top-48">
                        <a
                          data-v-029fbb84=""
                          href="https://www.adyen.com/contact/salesb"
                          className="ds-button ds-button--primary ds-button--black"
                          aria-label="Talk to our team"
                          data-track-component-name="DsCallToAction"
                          data-track-text="Talk to our team"
                          data-track-title="Get started with payments"
                          data-j-link=""
                          data-j-primary-link=""
                        >
                          <div data-v-354ff3ba="" data-j-link-text="" className="ds-text-icon">
                            <span data-v-354ff3ba="" data-j-text="">
                              Talk to our team
                            </span>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
      <Footer />
      <div className="ds-page-layout__overlay" data-v-302ce658>
        <div className="vue-portal-target"></div>
      </div>
    </div>
  );
}
