import { useState } from 'react';
import Image from 'next/image';
import logo from '../public/images/Adyen_Corporate.png';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  const tabs = [
    'Website',
    'Knowledge Hub',
    'Investor relations',
    'Documentation',
    'Help',
    'API Explorer'
];

  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('website');
  const [isVisible, setIsVisible] = useState(true);

  return (
    <header className="ds-page-layout__header">
        <section class="ds-page-header">
            <div className="ds-container ds-page-header__container align">
                <div className="ds-grid">
                    <div className="ds-grid__col ds-display-flex inline-flex">
                        <div className="ds-page-header__logo py-4">
                            <a href="#">
                                <Image className=" header-nav__logo ds-button-link ds-button-link--primary h-10 w-28 mr-6 top-8" src={logo} alt="Logo" loading="lazy" />
                            </a>
                        </div>

                        <div className="ds-page-header__nav">
                            <nav data-v-1fc9d97a="" aria-label="Navigation" className="ds-header-navigation">
                                <ul data-v-1fc9d97a="" aria-label="Navigation" role="menubar" className="ds-header-navigation__items flex items-center justify-end space-x-4 py-4">
                                    <li role="none" className="ds-header-navigation__items__item flex relative"> 
                                        <div className="ds-header-slide-over">
                                            <button
                                            type="button"
                                            role="menuitem"
                                            aria-haspopup="true"
                                            aria-expanded={isOpen}
                                            data-track-component-name="DsPageHeader"
                                            data-track-text="Products"
                                            data-track-level="1"
                                            className="ds-header-navigation__button ds-header-navigation__button--light ds-header-navigation__button--active flex items-center"
                                            onClick={toggleDropdown}
                                            >
                                            <span>Products</span>
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="10"
                                                height="6"
                                                viewBox="0 0 10 6"
                                                aria-label="chevron-down-small"
                                                role="img"
                                                className="ml-2 icon ds-header-navigation__button__icon items transform ${isOpen ? 'rotate-180' : ''}"
                                                style={{transition: 'transform 0.2s ease',}}
                                            >
                                                <path
                                                fillRule="evenodd"
                                                clipRule="evenodd"
                                                d="M0.292893 0.292893C0.683418 -0.097631 1.31658 -0.097631 1.70711 0.292893L5 3.58579L8.29289 0.292894C8.68342 -0.0976309 9.31658 -0.0976309 9.70711 0.292894C10.0976 0.683417 10.0976 1.31658 9.70711 1.70711L5.70711 5.70711C5.31658 6.09763 4.68342 6.09763 4.29289 5.70711L0.292893 1.70711C-0.097631 1.31658 -0.097631 0.683417 0.292893 0.292893Z"
                                                fill="currentColor"
                                                ></path>
                                            </svg>
                                            </button>

                                        </div>
                                        
                                    </li>
                                    
                                    <li data-v-1fc9d97a="" role="none" className="ds-header-navigation__items__item flex mr-4">
                                        <div data-v-5aeee45d="" data-v-1fc9d97a="" class="ds-header-slide-over ">
                                            <button data-v-1fc9d97a="" data-v-5aeee45d="" type="button" role="menuitem" aria-haspopup="true" aria-expanded="false" data-track-component-name="DsPageHeader" data-track-text="Businesses we serve" data-track-level="1" className="flex items-center ds-header-navigation__button ds-header-navigation__button--light">
                                                <span data-v-1fc9d97a="" data-v-5aeee45d="">Businesses we serve</span>
                                                <svg data-v-1fc9d97a="" xmlns="http://www.w3.org/2000/svg" width="10" height="6" viewBox="0 0 10 6" aria-label="chevron-down-small" role="img" className="ml-2 icon ds-header-navigation__button__icon" data-v-5aeee45d="">
                                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M0.292893 0.292893C0.683418 -0.097631 1.31658 -0.097631 1.70711 0.292893L5 3.58579L8.29289 0.292894C8.68342 -0.0976309 9.31658 -0.0976309 9.70711 0.292894C10.0976 0.683417 10.0976 1.31658 9.70711 1.70711L5.70711 5.70711C5.31658 6.09763 4.68342 6.09763 4.29289 5.70711L0.292893 1.70711C-0.097631 1.31658 -0.097631 0.683417 0.292893 0.292893Z" fill="currentColor"></path>
                                                </svg>
                                            </button>
                                        </div>
                                    </li>

                                    <li data-v-1fc9d97a="" role="none" className="ds-header-navigation__items__item flex mr-4">
                                        <div data-v-5aeee45d="" data-v-1fc9d97a="" className="ds-header-slide-over">
                                            <button data-v-1fc9d97a="" data-v-5aeee45d="" type="button" role="menuitem" aria-haspopup="true" aria-expanded="false" data-track-component-name="DsPageHeader" data-track-text="About" data-track-level="1" className="flex items-center ds-header-navigation__button ds-header-navigation__button--light">
                                                <span data-v-1fc9d97a="" data-v-5aeee45d="">About</span>
                                                <svg data-v-1fc9d97a="" xmlns="http://www.w3.org/2000/svg" width="10" height="6" viewBox="0 0 10 6" aria-label="chevron-down-small" role="img" className="ml-2 icon ds-header-navigation__button__icon" data-v-5aeee45d="">
                                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M0.292893 0.292893C0.683418 -0.097631 1.31658 -0.097631 1.70711 0.292893L5 3.58579L8.29289 0.292894C8.68342 -0.0976309 9.31658 -0.0976309 9.70711 0.292894C10.0976 0.683417 10.0976 1.31658 9.70711 1.70711L5.70711 5.70711C5.31658 6.09763 4.68342 6.09763 4.29289 5.70711L0.292893 1.70711C-0.097631 1.31658 -0.097631 0.683417 0.292893 0.292893Z" fill="currentColor"></path>
                                                </svg>
                                            </button>
                                        </div>
                                    </li>

                                    <li data-v-1fc9d97a="" role="none" className="ds-header-navigation__items__item flex mr-4">
                                        <div data-v-5aeee45d="" data-v-1fc9d97a="" className="ds-header-slide-over">
                                            <button data-v-1fc9d97a="" data-v-5aeee45d="" type="button" role="menuitem" aria-haspopup="true" aria-expanded="false" data-track-component-name="DsPageHeader" data-track-text="Documentation &amp; resources" data-track-level="1" className="flex items-center ds-header-navigation__button ds-header-navigation__button--light">
                                                <span data-v-1fc9d97a="" data-v-5aeee45d="">Documentation &amp; resources</span>
                                                <svg data-v-1fc9d97a="" xmlns="http://www.w3.org/2000/svg" width="10" height="6" viewBox="0 0 10 6" aria-label="chevron-down-small" role="img" className="ml-2 icon ds-header-navigation__button__icon" data-v-5aeee45d="">
                                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M0.292893 0.292893C0.683418 -0.097631 1.31658 -0.097631 1.70711 0.292893L5 3.58579L8.29289 0.292894C8.68342 -0.0976309 9.31658 -0.0976309 9.70711 0.292894C10.0976 0.683417 10.0976 1.31658 9.70711 1.70711L5.70711 5.70711C5.31658 6.09763 4.68342 6.09763 4.29289 5.70711L0.292893 1.70711C-0.097631 1.31658 -0.097631 0.683417 0.292893 0.292893Z" fill="currentColor"></path>
                                                </svg>
                                            </button>
                                        </div>
                                    </li>

                                    <li data-v-1fc9d97a="" role="none" className="ds-header-navigation__items__item flex justify-between">
                                        <a data-v-1fc9d97a="" href="/pricing" className="flex items-center ds-header-navigation__button ds-header-navigation__button--light" data-track-component-name="DsPageHeader" data-track-text="Pricing" data-track-level="1" role="menuitem">Pricing</a>
                                    </li>

                                    <li data-v-1fc9d97a="" role="none" className="ds-header-navigation__items__item flex mr-4">
                                        <div data-v-5aeee45d="" data-v-1fc9d97a="" className="ds-header-slide-over">
                                            <button data-v-1fc9d97a="" data-v-5aeee45d="" type="button" role="menuitem" aria-haspopup="true" aria-expanded="false" data-j-search="" data-track-component-name="DsPageHeader" data-track-text="Search" data-track-id="search" data-track-level="1" className="ml-52 flex items-center ds-header-navigation__button ds-header-navigation__button--light" onClick={toggleSearch}>
                                                <svg data-v-1fc9d97a="" xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" aria-label="search" role="img" className="icon" data-v-5aeee45d="">
                                                    <g fill="none" stroke="currentColor" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round">
                                                    <path d="M9 17.25C13.4183 17.25 17 13.6683 17 9.25C17 4.83172 13.4183 1.25 9 1.25C4.58172 1.25 1 4.83172 1 9.25C1 13.6683 4.58172 17.25 9 17.25Z"></path>
                                                    <path d="M19 19.25L15 15.25"></path>
                                                    </g>
                                                </svg>
                                            </button>
                                        </div>
                                    </li>

                                    <li data-v-1fc9d97a="" role="none" className="ds-header-navigation__items__item flex mr-4">
                                        <a data-v-1fc9d97a="" href="https://authn-live.adyen.com/authn/ui/login?request=eyJBdXRoblJlcXVlc3QiOnsiYWN0aXZpdHlHcm91cCI6IkJPX0NBIiwiY3JlZHNSZWFzb24iOlsiTG9nZ2luZyBpbiB0byBhcHBsaWNhdGlvbiBjYSJdLCJmb3JjZU5ld1Nlc3Npb24iOiJmYWxzZSIsImZvcmdvdFBhc3N3b3JkVXJsIjoiaHR0cHM6XC9cL2NhLWxpdmUuYWR5ZW4uY29tXC9jYVwvbG9iYnlcL3Bhc3N3b3JkLXJlc2V0XC9mb3Jnb3QtcGFzc3dvcmQiLCJyZXF1ZXN0VGltZSI6IjIwMjQtMDctMDRUMTU6MTk6MzUrMDI6MDAiLCJyZXF1ZXN0ZWRDcmVkZW50aWFscyI6W3siUmVxdWVzdGVkQ3JlZGVudGlhbCI6eyJhY2NlcHRlZEFjdGl2aXR5IjpbeyJBY2NlcHRlZEFjdGl2aXR5Ijp7ImFjdGl2aXR5R3JvdXAiOiJCT19DQSIsImFjdGl2aXR5VHlwZSI6IklNUExJQ0lUIiwibWlsbGlzZWNvbmRzQWdvIjo5MDAwMDB9fV0sInR5cGUiOiJQQVNTV09SRCJ9fSx7IlJlcXVlc3RlZENyZWRlbnRpYWwiOnsiYWNjZXB0ZWRBY3Rpdml0eSI6W3siQWNjZXB0ZWRBY3Rpdml0eSI6eyJhY3Rpdml0eUdyb3VwIjoiQk9fQ0EiLCJhY3Rpdml0eVR5cGUiOiJHUkFDRV9DT09LSUUiLCJtaWxsaXNlY29uZHNBZ28iOjB9fV0sInR5cGUiOiJUV09fRkFDVE9SIn19XSwicmVxdWVzdGluZ0FwcCI6ImNhIiwicmV0dXJuVXJsIjoiaHR0cHM6XC9cL2NhLWxpdmUuYWR5ZW4uY29tXC9jYVwvY2FcL292ZXJ2aWV3XC9kZWZhdWx0LnNodG1sIiwic2lnbmF0dXJlIjoiVjAwM1NlM28wTDIyYmorWndPeE9ucWFhM0dybXFMZmk0REh3UklpdjBqXC9wdHlGVT0ifX0%3D" target="_blank" rel="noopener" data-track-component-name="DsPageHeader" data-track-text="Log in" data-track-level="1" role="menuitem" className="ds-header-navigation__button ds-header-navigation__button--light">Log in</a>
                                    </li>

                                    <li data-v-1fc9d97a="" role="none" className="ds-header-navigation__items__item flex mr-4">
                                        <a data-v-1fc9d97a="" href="https://www.adyen.com/contact/salesb" className="ds-button ds-button--primary ds-button--null flex items-center" aria-label="Contact us" data-track-component-name="DsPageHeader" data-track-text="Contact us" data-track-level="1" data-j-link="" role="menuitem">
                                            <div data-v-354ff3ba="" data-j-link-text="" className="ds-text-icon">
                                                <span data-v-354ff3ba="" data-j-text="">Contact us</span>
                                            </div>
                                        </a>
                                    </li>

                                    {isOpen && (
                                    <div className="z-10 top-2 absolute w-full left-0 mt-16 bg-white"  data-twe-animation="[slide-down_1s_ease-in-out]">
                                        <div className="ds-header-subnavigation" aria-label="Products" role="menu">
                                        <div className="ds-container">
                                            <div className="ds-grid ds-padding-y-24 w-full">
                                            {/* Column 1 */}
                                            <div className="ds-grid__col ds-grid__col--3">
                                                <div id="nav-cards" className="overflow-hidden relative h-[436px]">
                                                    <a href="https://www.adyen.com/payment-methods" target="_blank" rel="noopener noreferrer">
                                                        <div className="bg-gradient-to-b from-transparent to-[#00112c66] absolute inset-0 z-10"></div>
                                                        <img
                                                            src="https://adyen.getbynder.com/m/d66f1527a109b84/original/navigation-highlight-payment-methods.jpg?io=transform:fill,width:300&focuspoint=0.5,0.5&quality=95"
                                                            alt="Payment Methods"
                                                            className="w-full h-full object-cover"
                                                            style={{ zIndex: -1 }}
                                                        />
                                                        <div className="absolute bottom-0 left-0 p-6 z-20">
                                                            <a
                                                                id="opt-link"
                                                                className="ds-button-link--chevron ds-button-link ds-button-link--primary ds-button-link--white flex items-center"
                                                                href="https://www.adyen.com/knowledge-hub/webhooks-accept-2xx"
                                                                target="_blank"
                                                                rel="noopener noreferrer"
                                                            >
                                                                Discover our payment methods
                                                                <svg
                                                                    className="ml-1"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    width="6"
                                                                    height="10"
                                                                    viewBox="0 0 6 10"
                                                                    aria-label="ChevronRightSmall"
                                                                    role="img"
                                                                >
                                                                    <path
                                                                        fillRule="evenodd"
                                                                        clipRule="evenodd"
                                                                        d="M0.292893 9.70711C-0.0976309 9.31658 -0.0976309 8.68342 0.292894 8.29289L3.58579 5L0.292894 1.70711C-0.0976302 1.31658 -0.0976302 0.683417 0.292894 0.292893C0.683418 -0.0976319 1.31658 -0.0976319 1.70711 0.292893L5.70711 4.29289C6.09763 4.68342 6.09763 5.31658 5.70711 5.70711L1.70711 9.70711C1.31658 10.0976 0.683417 10.0976 0.292893 9.70711Z"
                                                                        fill="currentColor"
                                                                    ></path>
                                                                </svg>
                                                            </a>
                                                        </div>
                                                    </a>
                                                </div>
                                            </div>

                                            {/* Column 2 */}
                                            <ul className="ds-grid__col ds-grid__col--3" role="none">
                                                <li role="none">
                                                <h5 className="ds-heading-xsmall">Payments</h5>
                                                </li>
                                                <li role="none" className="mt-3">
                                                <a
                                                    href="https://www.adyen.com/online-payments"
                                                    className="ds-button-link--green ds-header-subnavigation__link flex flex-col"
                                                    role="menuitem"
                                                >
                                                    <span className="ds-button-link ds-button-link--secondary">Online</span>
                                                    <span className="text-black text-sm">Accept payments on your website and in-app</span>
                                                </a>
                                                </li>
                                                <li role="none" className="mt-3">
                                                <a
                                                    href="https://www.adyen.com/pos-payments"
                                                    className="ds-button-link--green ds-header-subnavigation__link flex flex-col"
                                                    role="menuitem"
                                                >
                                                    <span className="ds-button-link ds-button-link--secondary">In-person payments</span>
                                                    <span className="text-black text-sm">Accept payments with terminals and devices</span>
                                                </a>
                                                </li>
                                                <li role="none" className="mt-3">
                                                <a
                                                    href="https://www.adyen.com/unified-commerce"
                                                    className="ds-button-link--green ds-header-subnavigation__link flex flex-col"
                                                    role="menuitem"
                                                >
                                                    <span className="ds-button-link ds-button-link--secondary">Cross channel</span>
                                                    <span className="text-black text-sm">Build journeys across sales channels</span>
                                                </a>
                                                </li>
                                                <li role="none" className="mt-3">
                                                <a
                                                    href="https://www.adyen.com/platform-payments"
                                                    className="ds-button-link--green ds-header-subnavigation__link flex flex-col"
                                                    role="menuitem"
                                                >
                                                    <span className="ds-button-link ds-button-link--secondary">Adyen for Platforms</span>
                                                    <span className="text-black text-sm">Embed payments into your platform or marketplace</span>
                                                </a>
                                                </li>
                                            </ul>

                                            {/* Column 3 */}
                                            <ul className="ds-grid__col ds-grid__col--3" role="none">
                                                <li role="none">
                                                <h5 className="ds-heading-xsmall">Enhancements</h5>
                                                </li>
                                                <li role="none" className="mt-3">
                                                <a
                                                    href="https://www.adyen.com/authentication-3d-secure"
                                                    className="ds-button-link--green ds-header-subnavigation__link flex flex-col"
                                                    role="menuitem"
                                                >
                                                    <span className="ds-button-link ds-button-link--secondary">Authentication</span>
                                                    <span className="text-black text-sm">Improve the paying experience with smart authentication</span>
                                                </a>
                                                </li>
                                                <li role="none" className="mt-3">
                                                <a
                                                    href="https://www.adyen.com/risk-management"
                                                    className="ds-button-link--green ds-header-subnavigation__link flex flex-col"
                                                    role="menuitem"
                                                >
                                                    <span className="ds-button-link ds-button-link--secondary">Risk management</span>
                                                    <span className="text-black text-sm">Detect, prevent, and respond to fraud</span>
                                                </a>
                                                </li>
                                                <li role="none" className="mt-3">
                                                <a
                                                    href="https://www.adyen.com/revenue-optimization"
                                                    className="ds-button-link--green ds-header-subnavigation__link flex flex-col"
                                                    role="menuitem"
                                                >
                                                    <span className="ds-button-link ds-button-link--secondary">Revenue Accelerate</span>
                                                    <span className="text-black text-sm">Grow your revenue with the highest authorization rates</span>
                                                </a>
                                                </li>
                                                <li role="none" className="mt-3">
                                                <a
                                                    href="https://www.adyen.com/customer-area"
                                                    className="ds-button-link--green ds-header-subnavigation__link flex flex-col"
                                                    role="menuitem"
                                                >
                                                    <span className="ds-button-link ds-button-link--secondary">Insights</span>
                                                    <span className="text-black text-sm">Understand customer behavior to drive growth</span>
                                                </a>
                                                </li>
                                            </ul>

                                            {/* Column 4 */}
                                            <ul className="ds-grid__col ds-grid__col--3 left-0" role="none">
                                                <li role="none">
                                                <h5 className="ds-heading-xsmall">Financial products</h5>
                                                </li>
                                                <li role="none" className="mt-3">
                                                <a
                                                    href="https://www.adyen.com/accounts"
                                                    className="ds-button-link--green ds-header-subnavigation__link flex flex-col"
                                                    role="menuitem"
                                                >
                                                    <span className="ds-button-link ds-button-link--secondary">Accounts</span>
                                                    <span className="text-black text-sm">Offer business accounts to users on your platform</span>
                                                </a>
                                                </li>
                                                <li role="none" className="mt-3">
                                                <a
                                                    href="https://www.adyen.com/capital"
                                                    className="ds-button-link--green ds-header-subnavigation__link flex flex-col"
                                                    role="menuitem"
                                                >
                                                    <span className="ds-button-link ds-button-link--secondary">Capital</span>
                                                    <span className="text-black text-sm">Enable fast business financing for your users</span>
                                                </a>
                                                </li>
                                                <li role="none" className="mt-3">
                                                <a
                                                    href="https://www.adyen.com/issuing"
                                                    className="-button-link--green ds-header-subnavigation__link flex flex-col"
                                                    role="menuitem"
                                                >
                                                    <span className="ds-button-link ds-button-link--secondary">Issuing</span>
                                                    <span className="text-black text-sm">Create physical and virtual cards</span>
                                                </a>
                                                </li>
                                                <li role="none" className="mt-3">
                                                <a
                                                    href="https://www.adyen.com/payouts"
                                                    className="ds-button-link--green ds-header-subnavigation__link flex flex-col"
                                                    role="menuitem"
                                                >
                                                    <span className="ds-button-link ds-button-link--secondary">Payouts</span>
                                                    <span className="text-black text-sm">Send global payouts in real time</span>
                                                </a>
                                                </li>
                                            </ul>
                                            </div>
                                        </div>
                                        </div>
                                    </div>
                                    )}

                                    {isSearchOpen && (
                                        <div className="ds-header-navigation__search z-10 top-20 absolute w-full h-full left-0 bg-white">
                                        <div className="ds-container ds-padding-y-96 ds-height-full">
                                            <div className="search ais-InstantSearch">
                                            <div className="ds-grid ds-justify-content-center ds-height-full">
                                                <div className="ds-grid__col ds-grid__col--12 ds-md-grid__col--10 ds-height-full ds-display-flex ds-flex-direction-column">
                                                <div className="search__search-box ais-SearchBox">
                                                    <div className="search__input">
                                                    <div className="ds-field-layout">
                                                        <div className="icon-frame icon-frame--size-48 icon-frame--align-x-center icon-frame--align-y-center">
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            width="20"
                                                            height="21"
                                                            viewBox="0 0 20 21"
                                                            aria-label="search"
                                                            role="img"
                                                            className="icon ml-4"
                                                        >
                                                            <g
                                                            fill="none"
                                                            stroke="currentColor"
                                                            strokeWidth="2"
                                                            strokeMiterlimit="10"
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            >
                                                            <path d="M9 17.25C13.4183 17.25 17 13.6683 17 9.25C17 4.83172 13.4183 1.25 9 1.25C4.58172 1.25 1 4.83172 1 9.25C1 13.6683 4.58172 17.25 9 17.25Z"></path>
                                                            <path d="M19 19.25L15 15.25"></path>
                                                            </g>
                                                        </svg>
                                                        </div>
                                                        <input
                                                        type="search"
                                                        placeholder="Search"
                                                        className="ds-field ds-field--light"
                                                        />
                                                    </div>
                                                    </div>
                                                </div>
                                                
                                                {/* Tabs */}
                                                <div className="ds-tabs search__tabs ds-margin-top-24">
                                                    <div className="ds-padding-top-0 ds-md-padding-top-24">
                                                    <div className="">
                                                        <div className="">
                                                        <div className="">
                                                            <div
                                                            role="tablist"
                                                            aria-orientation="horizontal"
                                                            className="ds-tabs__items"
                                                            >
                                                            {tabs.map((tab) => (
                                                                <button
                                                                key={tab}
                                                                id={`tab-${tab.replace(/\s+/g, '-').toLowerCase()}`}
                                                                role="tab"
                                                                type="button"
                                                                aria-controls={`tab-content-${tab.replace(/\s+/g, '-').toLowerCase()}`}
                                                                onClick={() => handleTabClick(tab)}
                                                                className={`tab-item ds-button-navigation ds-button-navigation--secondary mr-6 ${
                                                                    activeTab === tab ? 'ds-button-navigation--active' : ''
                                                                }`}
                                                                aria-selected={activeTab === tab ? 'true' : 'false'}
                                                                >
                                                                {tab}
                                                                </button>
                                                            ))}
                                                                <section className="ds-section ds-section--light" data-v-472b858e data-v-4467b160>
                                                                    <div className="ds-container" data-v-472b858e>
                                                                        <div className="ds-grid" data-v-472b858e data-v-4467b160>
                                                                        <div className="ds-grid__col ds-grid__col--12" data-v-472b858e data-v-4467b160>
                                                                            <hr className="ds-divider ds-divider--light" data-v-4467b160 />
                                                                        </div>
                                                                        </div>
                                                                    </div>
                                                                </section>
                                                            </div>
                                                        </div>
                                                        </div>
                                                    </div>
                                                    </div>
                                                    
                                                    <div className="ds-tabs__container">
                                                    {tabs.map((tab) => (
                                                        <div
                                                        key={`tab-content-${tab.replace(/\s+/g, '-').toLowerCase()}`}
                                                        id={`tab-content-${tab.replace(/\s+/g, '-').toLowerCase()}`}
                                                        role="tabpanel"
                                                        aria-labelledby={`tab-${tab.replace(/\s+/g, '-').toLowerCase()}`}
                                                        className="ds-tabs__content search__results"
                                                        style={{ display: activeTab === tab ? 'block' : 'none' }}
                                                        >
                                                        <div className="search__results__scroll ds-width-full">
                                                            Search results for {tab}
                                                        </div>
                                                        </div>
                                                    ))}
                                                    </div>
                                                </div>
                                                </div>
                                            </div>
                                            </div>
                                        </div>
                                        </div>
                                    )}
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </header>
  );
}
