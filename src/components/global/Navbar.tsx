import React from "react";
import Desktop_logo from "../../assets/images/Desktop_logo.svg"
import SearchWithDropdown from "../SearchWithDropDown";

const Navbar: React.FC = () => {
    return (
        <nav className="bg-white border-b border-gray-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16 items-center">

                    <div className="flex-shrink-0">
                        <img className="h-10 w-auto" src={Desktop_logo} alt="MYDR24 Logo" />
                    </div>

                    {/* Center: Delivery location and search */}
                    <div className="flex-1 flex items-center justify-center">
                        <SearchWithDropdown />
                    </div>

                    {/* Right: Contact info, user login, offers, cart */}
                    <div className="flex items-center space-x-6">

                        <a href="tel:+919311791119" className="text-black-100 flex items-center font-semibold">
                            <svg width="20" height="23" viewBox="0 0 20 23" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-[4px] -mb-[3px]">
                                <path d="M3.19339 2.70616L4.52143 2.05612C5.12591 1.75991 5.8203 1.6883 6.47497 1.85466C7.12964 2.02102 7.69984 2.41398 8.07914 2.96018L9.28989 4.70369C9.61612 5.17337 9.78333 5.73085 9.76806 6.29789C9.7528 6.86494 9.55582 7.41309 9.20478 7.86544L7.92856 9.51023C7.91348 9.53099 7.90173 9.55387 7.89372 9.57808C7.79098 9.92301 8.18519 10.7306 9.1738 11.8841C10.2887 13.1842 11.0521 13.643 11.3428 13.5028L13.2364 12.5657C13.755 12.3094 14.3429 12.2178 14.9177 12.3037C15.4924 12.3896 16.0252 12.6486 16.4413 13.0445L17.9803 14.5074C18.4635 14.9668 18.7593 15.5815 18.8126 16.2374C18.866 16.8933 18.6733 17.5458 18.2704 18.0736L17.3799 19.2388C17.0704 19.6444 16.6648 19.9709 16.1977 20.1906C15.7307 20.4102 15.216 20.5164 14.6978 20.5001C11.6202 20.4025 8.5424 18.5236 5.45061 14.9181C2.35754 11.3103 1.0057 8.01972 1.45713 5.04762C1.53268 4.55004 1.72997 4.07751 2.03232 3.66994C2.33467 3.26237 2.73236 2.9319 3.19339 2.70616ZM3.77223 3.8259C3.49559 3.9613 3.25644 4.15964 3.07499 4.40416C2.89355 4.64868 2.77514 4.93218 2.72976 5.23072C2.34054 7.79184 3.55708 10.7543 6.43784 14.114C9.31647 17.4715 12.0885 19.1633 14.7406 19.2466C15.0516 19.2563 15.3603 19.1925 15.6405 19.0606C15.9207 18.9288 16.164 18.7328 16.3497 18.4894L17.2394 17.3252C17.4565 17.041 17.5603 16.6897 17.5317 16.3364C17.5031 15.9832 17.3439 15.6522 17.0837 15.4047L15.5446 13.941C15.3205 13.7279 15.0337 13.5884 14.7243 13.5422C14.4149 13.4959 14.0984 13.5452 13.8191 13.6831L11.9208 14.6227C10.8689 15.1333 9.6639 14.4094 8.1881 12.6872C6.93814 11.2303 6.39599 10.1162 6.66009 9.22886C6.71155 9.0561 6.79285 8.89777 6.904 8.75388L8.18022 7.10909C8.36933 6.86551 8.47546 6.5703 8.48371 6.26491C8.49196 5.95952 8.40191 5.65927 8.2262 5.40632L7.01475 3.66378C6.8105 3.36959 6.50341 3.15794 6.15082 3.06836C5.79823 2.97877 5.42425 3.01738 5.09872 3.17697L3.77223 3.8259Z" fill="#383838" />
                            </svg>

                            +91 93117 91119
                        </a>

                        {/* Login */}
                        <div className="text-gray-700 flex items-center cursor-pointer">
                            <svg
                                className="w-5 h-5 mr-1"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M12 11V7a5 5 0 00-5-5 5 5 0 00-5 5v10a5 5 0 005 5 5 5 0 005-5v-4"
                                />
                            </svg>
                            Hello, Log in
                        </div>

                        {/* Offers */}
                        <a href="#" className="text-gray-700 flex items-center">
                            <svg
                                className="w-5 h-5 mr-1"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M12 4.354v5.792M7 9.146a3.5 3.5 0 100 5.792m5-1.438a3.5 3.5 0 100-5.792"
                                />
                            </svg>
                            Offers
                        </a>

                        {/* Cart */}
                        <a href="#" className="relative text-gray-700 flex items-center">
                            <svg
                                className="w-5 h-5"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M3 3h18l-1 9H4l-1-9z"
                                />
                            </svg>
                            <span className="absolute top-0 right-0 mt-0.5 ml-1 bg-red-500 text-white text-xs rounded-full px-1.5">
                                4
                            </span>
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
