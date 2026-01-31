import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { 
  FaFacebook, FaInstagram, FaTwitter, FaYoutube, 
  FaPhone, FaEnvelope, FaGlobe, FaMobileAlt, 
  FaCalculator, FaBars, FaTimes, FaChevronDown, 
  FaChevronRight, FaMapMarkerAlt
} from 'react-icons/fa';
import logo from '../components/Assets/SHIVPRATAP LOGO.png';

const Navbar = () => {
  const navigate = useNavigate();
  const { language, changeLanguage } = useLanguage();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState('English');
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [activeSubDropdown, setActiveSubDropdown] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [screenSize, setScreenSize] = useState('desktop');
  const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = useState(false);

  useEffect(() => {
    setSelectedLanguage(language === 'en' ? 'English' : 'मराठी');
  }, [language]);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 768) setScreenSize('mobile');
      else if (width < 1024) setScreenSize('tablet');
      else setScreenSize('desktop');
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const languages = [
    { code: 'en', name: 'English' },
    { code: 'mr', name: 'मराठी' }
  ];

  const translations = {
    en: {
      navItems: [
        { label: 'Organization', hasDropdown: false },
        { label: 'Director', hasDropdown: true, dropdownItems: ['Chairman', 'Executive Directors', 'Managing Director'] },
        { label: 'Plan', hasDropdown: true, dropdownItems: [
          { label: 'Deposit Schemes', hasSubDropdown: true, subItems: [
            'Pension Deposit Scheme', 'Recurring Deposit Scheme (RD)', 'Half Price Deposit Scheme', 
            'Subhmangal Deposit Scheme', 'Billionaire Deposit Scheme'
          ]},
          { label: 'Loan Schemes', hasSubDropdown: true, subItems: ['Personal Loan'] },
          { label: 'Gold Loan Schemes', hasSubDropdown: true, subItems: [
            'EMI Gold Loan', 'Regular Gold Loan', 'Easy Gold Loan', 
            'Gold Loan Overdraft (C.C.)', 'Bullet Gold Loan', 'Door Step (Home Reach) Gold Loan'
          ]}
        ]},
        { label: 'Account', hasDropdown: true, dropdownItems: ['Savings Account', 'Current Account', 'premium savings account'] },
        { label: 'Branch', hasDropdown: true, dropdownItems: ['Branch', 'Customer Service Center'] },
        { label: 'Loan', hasDropdown: true, dropdownItems: ['Gold Loan images', 'Personal Loan images', 'Mortgage Loan images', 'Home Loan images', 'Vehicle Loan images', 'Women Loan images', 'Education Loan images'] },
        { label: 'Gallery', hasDropdown: false },
        { label: 'Media', hasDropdown: false },
        { label: 'Annual Report', hasDropdown: false },
        { label: 'Contact', hasDropdown: false }
      ],
      bankName: 'Shivpratap Multistate Bank',
      bankNameShort: 'Shivpratap Bank',
      trustedSince: 'Trusted Since 1985',
      calculator: 'Calculator',
      calc: 'Calc',
      mobileBanking: 'Mobile Banking',
      mobile: 'Mobile',
      announcements: 'Announcements:',
      menu: 'Menu',
      language: 'Language:',
      needAssistance: 'Need assistance?',
      announcementsList: [
        " New Digital Savings Account with 7% interest!",
        " Enhanced security features implemented for safe banking",
        " Business Loan interest rates reduced by 0.5%",
        " New branch opening in Pune next month"
      ]
    },
    mr: {
      navItems: [
        { label: 'संस्था', hasDropdown: false },
        { label: 'संचालक', hasDropdown: true, dropdownItems: ['अध्यक्ष', 'व्यवस्थापकीय संचालक', 'कार्यकारी संचालक'] },
        { label: 'योजना', hasDropdown: true, dropdownItems: [
          { label: 'ठेव योजना', hasSubDropdown: true, subItems: [
            'पेन्शन ठेव योजना', 'आवर्ती ठेव योजना (आरडी)', 'अर्धवेळ ठेव योजना', 
            'शुभमंगल ठेव योजना', 'अब्जाधीश ठेव योजना'
          ]},
          { label: 'कर्ज योजना', hasSubDropdown: true, subItems: ['वैयक्तिक कर्ज'] },
          { label: 'सोने कर्ज योजना', hasSubDropdown: true, subItems: [
            'ईएमआय सोने कर्ज', 'नियमित सोने कर्ज', 'सोपे सोने कर्ज', 
            'सोने कर्ज ओव्हरड्राफ्ट (सी.सी.)', 'बुलेट सोने कर्ज', 'दारस्थ (होम रीच) सोने कर्ज'
          ]}
        ]},
        { label: 'खाते', hasDropdown: true, dropdownItems: ['बचत खाते', 'चालू खाते', 'प्रीमियम बचत खाते'] },
        { label: 'शाखा', hasDropdown: true, dropdownItems: ['शाखा', 'ग्राहक सेवा केंद्र'] },
        { label: 'कर्ज', hasDropdown: true, dropdownItems: ['सोन्याचे कर्ज प्रतिमा', 'वैयक्तिक कर्ज प्रतिमा', 'हायपोथेकेशन कर्ज प्रतिमा', 'घर कर्ज प्रतिमा', 'वाहन कर्ज प्रतिमा', 'महिला कर्ज प्रतिमा', 'शिक्षण कर्ज प्रतिमा'] },
        { label: 'गॅलरी', hasDropdown: false },
        { label: 'मीडिया', hasDropdown: false },
        { label: 'वार्षिक अहवाल', hasDropdown: false },
        { label: 'संपर्क', hasDropdown: false }
      ],
      bankName: 'शिवप्रताप मल्टीस्टेट बँक',
      bankNameShort: 'शिवप्रताप बँक',
      trustedSince: '१९८५ पासून विश्वासार्ह',
      calculator: 'कॅल्क्युलेटर',
      calc: 'कॅल्क',
      mobileBanking: 'मोबाईल बँकिंग',
      mobile: 'मोबाईल',
      announcements: 'घोषणा:',
      menu: 'मेनू',
      language: 'भाषा:',
      needAssistance: 'मदतीची आवश्यकता आहे का?',
      announcementsList: [
        " ७% व्याज दरासह नवीन डिजिटल बचत खाते!",
        " मोबाईल बँकिंग अॅप आता प्ले स्टोर आणि अॅप स्टोवर उपलब्ध",
        " सुरक्षित बँकिंगसाठी सुधारित सुरक्षा वैशिष्ट्ये लागू केली",
        " व्यवसाय कर्जाचे व्याज दर ०.५% कमी केले",
        " पुढील महिन्यात पुण्यात नवीन शाखा सुरू होणार"
      ]
    }
  };

  const currentLang = selectedLanguage === 'English' ? 'en' : 'mr';
  const currentContent = translations[currentLang];

  const getNavigationPath = (mainItem, dropdownItem, subItem = null) => {
    const pathMap = {
      'Organization': '/about',
      'Chairman': '/chairman',
      'Executive Directors': '/executive-director',
      'Managing Director': '/managing-director',
      'Pension Deposit Scheme': '/plan-pension',
      'Recurring Deposit Scheme (RD)': '/plan-recurring',
      'Half Price Deposit Scheme': '/plan-half-price',
      'Subhmangal Deposit Scheme': '/plan-subhmangal',
      'Billionaire Deposit Scheme': '/plan-billionaire',
      'Personal Loan': '/plan-personal',
      'EMI Gold Loan': '/plan-emi-gold',
      'Regular Gold Loan': '/plan-regular-gold',
      'Easy Gold Loan': '/plan-easy-gold',
      'Gold Loan Overdraft (C.C.)': '/plan-gold-overdraft',
      'Bullet Gold Loan': '/plan-bullet-gold',
      'Door Step (Home Reach) Gold Loan': '/plan-doorstep-gold',
      'Savings Account': '/savings-account',
      'Current Account': '/current-account',
      'premium savings account': '/premium-savings-account',
      'Branch': '/branch',
      'Customer Service Center': '/customer-service',
      'Gallery': '/gallery',
      'Media': '/media',
      'Annual Report': '/annual-report',
      'FAQ': '/faq',
      'Contact': '/contact',
      'संस्था': '/about',
      'अध्यक्ष': '/chairman',
      'व्यवस्थापकीय संचालक': '/executive-director',
      'कार्यकारी संचालक': '/managing-director',
      'पेन्शन ठेव योजना': '/plan-pension',
      'आवर्ती ठेव योजना (आरडी)': '/plan-recurring',
      'अर्धवेळ ठेव योजना': '/plan-half-price',
      'शुभमंगल ठेव योजना': '/plan-subhmangal',
      'अब्जाधीश ठेव योजना': '/plan-billionaire',
      'वैयक्तिक कर्ज': '/plan-personal',
      'ईएमआय सोने कर्ज': '/plan-emi-gold',
      'नियमित सोने कर्ज': '/plan-regular-gold',
      'सोपे सोने कर्ज': '/plan-easy-gold',
      'सोने कर्ज ओव्हरड्राफ्ट (सी.सी.)': '/plan-gold-overdraft',
      'बुलेट सोने कर्ज': '/plan-bullet-gold',
      'दारस्थ (होम रीच) सोने कर्ज': '/plan-doorstep-gold',
      'बचत खाते': '/savings-account',
      'चालू खाते': '/current-account',
      'प्रीमियम बचत खाते': '/premium-savings-account',
      'शाखा': '/branch',
      'ग्राहक सेवा केंद्र': '/customer-service',
      'गॅलरी': '/gallery',
      'मीडिया': '/media',
      'वार्षिक अहवाल': '/annual-report',
      'वारंवार विचारले जाणारे प्रश्न': '/faq',
      'संपर्क': '/contact',
      'सोन्याचे कर्ज प्रतिमा': '/loan#gold-loan',
      'वैयक्तिक कर्ज प्रतिमा': '/loan#personal-loan',
      'हायपोथेकेशन कर्ज प्रतिमा': '/loan#mortgage-loan',
      'घर कर्ज प्रतिमा': '/loan#home-loan',
      'वाहन कर्ज प्रतिमा': '/loan#vehicle-loan',
      'महिला कर्ज प्रतिमा': '/loan#women-loan',
      'शिक्षण कर्ज प्रतिमा': '/loan#education-loan',
      'Gold Loan images': '/loan#gold-loan',
      'Personal Loan images': '/loan#personal-loan',
      'Mortgage Loan images': '/loan#mortgage-loan',
      'Home Loan images': '/loan#home-loan',
      'Vehicle Loan images': '/loan#vehicle-loan',
      'Women Loan images': '/loan#women-loan',
      'Education Loan images': '/loan#education-loan',
    };

    const key = subItem || dropdownItem || mainItem;
    return pathMap[key] || '/';
  };

  const handleLanguageChange = (langName) => {
    setSelectedLanguage(langName);
    const langCode = langName === 'English' ? 'en' : 'mr';
    changeLanguage(langCode);
    setIsLanguageDropdownOpen(false);
  };

  const handleNavigation = (path) => {
    navigate(path);
    setActiveDropdown(null);
    setActiveSubDropdown(null);
    setIsMobileMenuOpen(false);
  };

  const handleMobileBankingClick = () => {
    window.open('https://play.google.com/store/apps/details?id=com.netwin.mobilebanking.shivp', '_blank');
  };

  const handleCalculatorClick = () => {
    navigate('/calculator');
  };

  const handleAddressClick = () => {
    window.open('https://www.google.com/maps/search/?api=1&query=Shivpratap+Gold+Tower%2C+Power+House+Rd%2C+Hanmant+Bazar%2C+Vita%2C+Maharashtra+415311', '_blank');
  };

  const handlePhoneClick = () => {
    window.open('tel:+9582837032', '_blank');
  };

  const handleEmailClick = () => {
    window.open('mailto:customercare@shivpratapmultistate.com', '_blank');
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isMobileMenuOpen && !event.target.closest('.mobile-menu')) {
        setIsMobileMenuOpen(false);
      }
      if (isLanguageDropdownOpen && !event.target.closest('.language-dropdown')) {
        setIsLanguageDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isMobileMenuOpen, isLanguageDropdownOpen]);

  return (
    <div className="w-full font-sans">
      {/* Top Bar - Responsive */}
      <div 
        className={`w-full flex items-center justify-between transition-all duration-300 ${
          screenSize === 'desktop' ? 'px-6 lg:px-8 py-3' : 'px-4 py-2'
        }`}
        style={{
          background: 'linear-gradient(135deg, #b03462 0%, #d946a6 30%, #ec4899 100%)',
          color: 'white',
        }}
      >
        <div className="flex items-center truncate cursor-pointer hover:text-pink-50" onClick={handleAddressClick}>
          <FaMapMarkerAlt className="mr-2 text-pink-200 flex-shrink-0" size={screenSize === 'mobile' ? 12 : 14} />
          <span className="truncate text-sm lg:text-base">
            {screenSize === 'desktop' 
              ? 'Shivpratap Gold Tower, Power House Rd, Hanmant Bazar, Vita, Maharashtra 415311'
              : screenSize === 'tablet'
              ? 'Shivpratap Gold Tower, Vita, Maharashtra 415311'
              : 'Shivpratap Tower, Vita'
            }
          </span>
        </div>

        <div className="flex items-center space-x-3 lg:space-x-6">
          <div className="flex items-center cursor-pointer hover:text-pink-100" onClick={handlePhoneClick}>
            <FaPhone className="mr-1 lg:mr-2 flex-shrink-0" size={screenSize === 'mobile' ? 12 : 14} />
            <span className="text-sm lg:text-base hidden sm:inline">+91 98765 43210</span>
          </div>

          <div className="flex items-center cursor-pointer hover:text-pink-100" onClick={handleEmailClick}>
            <FaEnvelope className="mr-1 lg:mr-2 flex-shrink-0" size={screenSize === 'mobile' ? 12 : 14} />
            <span className="hidden lg:inline text-sm lg:text-base">customercare@shivpratapmultistate.com</span>
          </div>

          <div className="hidden lg:flex items-center space-x-2 border-l border-pink-300 pl-2 lg:pl-4">
            <a href="https://facebook.com/shivpratapbank" target="_blank" rel="noopener noreferrer">
              <FaFacebook size={14} className="hover:text-pink-100" />
            </a>
            <a href="https://instagram.com/shivpratapbank" target="_blank" rel="noopener noreferrer">
              <FaInstagram size={14} className="hover:text-pink-100" />
            </a>
            <a href="https://twitter.com/shivpratapbank" target="_blank" rel="noopener noreferrer">
              <FaTwitter size={14} className="hover:text-pink-100" />
            </a>
            <a href="https://youtube.com/@shivpratapbank" target="_blank" rel="noopener noreferrer">
              <FaYoutube size={14} className="hover:text-pink-100" />
            </a>
          </div>

          {/* Language Dropdown - Responsive */}
          <div className="relative language-dropdown">
            <button 
              className="flex items-center px-2 lg:px-3 py-1 rounded hover:bg-pink-700"
              onClick={() => setIsLanguageDropdownOpen(!isLanguageDropdownOpen)}
            >
              <FaGlobe className="mr-1 flex-shrink-0" size={screenSize === 'mobile' ? 12 : 14} />
              <span className="hidden sm:inline text-sm lg:text-base">{selectedLanguage}</span>
              <FaChevronDown size={10} className="ml-1 flex-shrink-0" />
            </button>
            {isLanguageDropdownOpen && (
              <div className="absolute right-0 mt-1 w-32 bg-white rounded shadow-lg z-50">
                {languages.map(lang => (
                  <button
                    key={lang.code}
                    onClick={() => handleLanguageChange(lang.name)}
                    className="block w-full text-left px-4 py-2 text-sm lg:text-base text-gray-700 hover:bg-pink-600 hover:text-white"
                  >
                    {lang.name}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

    {/* Main Navbar */}
    <div
      className={`w-full sticky top-0 z-40 transition-all duration-300 ${isScrolled ? 'shadow-xl' : 'shadow-lg'}`}
      style={{ background: 'linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)' }}
    >
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`flex items-center justify-between ${
          screenSize === 'mobile' ? 'h-20' : 
          screenSize === 'tablet' ? 'h-24' : 
          'h-28'
        }`}>
          {/* Logo - Responsive - Full Width */}
          <div className="flex items-center cursor-pointer flex-1" onClick={() => navigate('/')}>
            <img
              src={logo}
              alt="Shivpratap Multistate Bank"
              className={`${
                screenSize === 'mobile' ? 'w-40 h-16' : 
                screenSize === 'tablet' ? 'w-52 h-20' : 
                'w-64 h-24'
              } rounded-lg shadow-lg object-contain transition-all duration-300 max-w-full`}
            />
          </div>

          {/* Navigation Items - Desktop and Tablet */}
          {screenSize !== 'mobile' && (
            <div className={`hidden ${
              screenSize === 'tablet' ? 'md:flex' : 'lg:flex'
            } items-center space-x-1`}>
              {currentContent.navItems.map((item, index) => (
                <div key={index} className="relative">
                  <button
                    className={`${
                      screenSize === 'tablet' ? 'px-2 py-2 text-sm' : 'px-4 py-3 text-base'
                    } rounded-md font-semibold text-gray-700 hover:text-pink-600 hover:bg-pink-50 transition-colors`}
                    onClick={() => item.hasDropdown ? setActiveDropdown(activeDropdown === index ? null : index) : handleNavigation(getNavigationPath(item.label))}
                  >
                    {screenSize === 'tablet' && item.label.length > 8 
                      ? item.label.substring(0, 8) + '...' 
                      : item.label}
                    {item.hasDropdown && <FaChevronDown className="ml-1 inline" size={8} />}
                  </button>
                  {item.hasDropdown && activeDropdown === index && (
                    <div className={`${
                      screenSize === 'tablet' ? 'w-48' : 'w-56'
                    } absolute top-full left-0 mt-1 bg-white rounded-md shadow-lg z-50`}>
                      {item.dropdownItems.map((dropdownItem, dropdownIndex) => (
                        <div key={dropdownIndex} className="relative">
                          <button
                            className={`block w-full text-left ${
                              screenSize === 'tablet' ? 'px-3 py-2 text-sm' : 'px-4 py-3 text-base'
                            } font-medium text-gray-700 hover:bg-pink-50 hover:text-pink-600 flex justify-between items-center`}
                            onClick={() => {
                              if (dropdownItem.hasSubDropdown) {
                                const dropdownLabel = typeof dropdownItem === 'string' ? dropdownItem : dropdownItem.label;
                                setActiveSubDropdown(activeSubDropdown === dropdownLabel ? null : dropdownLabel);
                              } else {
                                handleNavigation(getNavigationPath(item.label, dropdownItem));
                              }
                            }}
                          >
                            <span className="truncate">
                              {typeof dropdownItem === 'string' ? dropdownItem : dropdownItem.label}
                            </span>
                            {dropdownItem.hasSubDropdown && <FaChevronRight className="ml-2 inline flex-shrink-0" size={8} />}
                          </button>
                          
                          {/* Sub-dropdown */}
                          {dropdownItem.hasSubDropdown && (() => {
                            const dropdownLabel = typeof dropdownItem === 'string' ? dropdownItem : dropdownItem.label;
                            return activeSubDropdown === dropdownLabel;
                          })() && (
                            <div className="absolute left-full top-0 ml-1 w-64 bg-white rounded-md shadow-xl z-50 border border-gray-100">
                              {dropdownItem.subItems.map((subItem, subIndex) => (
                                <button
                                  key={subIndex}
                                  className={`block w-full text-left ${
                                    screenSize === 'tablet' ? 'px-3 py-2 text-sm' : 'px-4 py-3 text-base'
                                  } font-medium text-gray-700 hover:bg-pink-50 hover:text-pink-600 truncate`}
                                  onClick={() => handleNavigation(getNavigationPath(item.label, dropdownItem, subItem))}
                                >
                                  {subItem}
                                </button>
                              ))}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}

          {/* Right Side Actions - Responsive */}
          <div className="flex items-center space-x-2 lg:space-x-3">
            <button
              onClick={handleCalculatorClick}
              className={`flex items-center ${
                screenSize === 'tablet' ? 'px-2 py-1.5 text-xs' : 'px-3 lg:px-4 py-2 lg:py-3 text-sm lg:text-base'
              } rounded-md font-semibold text-white bg-pink-600 hover:bg-pink-700 transition-colors`}
            >
              <FaCalculator className={`${
                screenSize === 'tablet' ? 'mr-1' : 'mr-2'
              }`} size={screenSize === 'tablet' ? 12 : 14} />
              {currentContent.calc}
            </button>

            <button
              onClick={handleMobileBankingClick}
              className={`flex items-center ${
                screenSize === 'tablet' ? 'px-2 py-1.5 text-xs' : 'px-3 lg:px-4 py-2 lg:py-3 text-sm lg:text-base'
              } rounded-md font-semibold text-white bg-green-600 hover:bg-green-700 transition-colors`}
            >
              <FaMobileAlt className={`${
                screenSize === 'tablet' ? 'mr-1' : 'mr-2'
              }`} size={screenSize === 'tablet' ? 12 : 14} />
              {currentContent.mobile}
            </button>

            {/* Mobile Menu Toggle */}
            {screenSize === 'mobile' && (
              <button
                className="p-2 rounded-md text-gray-700 hover:text-pink-600 hover:bg-pink-50 transition-colors"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                {isMobileMenuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Menu - Full Navigation */}
      {screenSize === 'mobile' && isMobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-white border-t shadow-lg mobile-menu">
          <div className="max-h-96 overflow-y-auto">
            {/* Navigation Items */}
            <div className="py-2">
              {currentContent.navItems.map((item, index) => (
                <div key={index} className="border-b border-gray-100">
                  <button
                    className="w-full text-left px-4 py-3 text-base font-medium text-gray-700 hover:bg-pink-50 hover:text-pink-600 flex justify-between items-center"
                    onClick={() => item.hasDropdown ? setActiveDropdown(activeDropdown === index ? null : index) : handleNavigation(getNavigationPath(item.label))}
                  >
                    <span>{item.label}</span>
                    {item.hasDropdown && <FaChevronDown className={`transition-transform ${activeDropdown === index ? 'rotate-180' : ''}`} size={12} />}
                  </button>
                  
                  {/* Mobile Dropdown */}
                  {item.hasDropdown && activeDropdown === index && (
                    <div className="bg-gray-50">
                      {item.dropdownItems.map((dropdownItem, dropdownIndex) => (
                        <div key={dropdownIndex} className="border-b border-gray-100 last:border-b-0">
                          <button
                            className="w-full text-left px-6 py-2 text-sm text-gray-600 hover:bg-pink-50 hover:text-pink-600 flex justify-between items-center"
                            onClick={() => {
                              if (dropdownItem.hasSubDropdown) {
                                const dropdownLabel = typeof dropdownItem === 'string' ? dropdownItem : dropdownItem.label;
                                setActiveSubDropdown(activeSubDropdown === dropdownLabel ? null : dropdownLabel);
                              } else {
                                handleNavigation(getNavigationPath(item.label, dropdownItem));
                              }
                            }}
                          >
                            <span className="truncate">
                              {typeof dropdownItem === 'string' ? dropdownItem : dropdownItem.label}
                            </span>
                            {dropdownItem.hasSubDropdown && <FaChevronRight className="flex-shrink-0" size={10} />}
                          </button>
                          
                          {/* Mobile Sub-dropdown */}
                          {dropdownItem.hasSubDropdown && (() => {
                            const dropdownLabel = typeof dropdownItem === 'string' ? dropdownItem : dropdownItem.label;
                            return activeSubDropdown === dropdownLabel;
                          })() && (
                            <div className="bg-gray-100 pl-4">
                              {dropdownItem.subItems.map((subItem, subIndex) => (
                                <button
                                  key={subIndex}
                                  className="w-full text-left px-4 py-2 text-xs text-gray-600 hover:bg-pink-50 hover:text-pink-600 truncate"
                                  onClick={() => handleNavigation(getNavigationPath(item.label, dropdownItem, subItem))}
                                >
                                  {subItem}
                                </button>
                              ))}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
            
            {/* Mobile Action Buttons */}
            <div className="p-4 border-t bg-gray-50">
              <div className="grid grid-cols-2 gap-2 mb-4">
                <button
                  onClick={handleCalculatorClick}
                  className="flex items-center justify-center px-3 py-2 rounded-md text-sm font-medium text-white bg-pink-600 hover:bg-pink-700"
                >
                  <FaCalculator className="mr-2" size={12} />
                  {currentContent.calc}
                </button>
                <button
                  onClick={handleMobileBankingClick}
                  className="flex items-center justify-center px-3 py-2 rounded-md text-sm font-medium text-white bg-green-600 hover:bg-green-700"
                >
                  <FaMobileAlt className="mr-2" size={12} />
                  {currentContent.mobile}
                </button>
              </div>
              
              <div className="text-center">
                <p className="text-sm text-gray-600 mb-2">{currentContent.needAssistance}</p>
                <button 
                  onClick={handlePhoneClick}
                  className="inline-flex items-center text-pink-600 font-bold hover:text-pink-700"
                >
                  <FaPhone className="mr-2" size={14} />
                  +91 98765 43210
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>

    {/* Marquee Bar - Responsive */}
    <div className="w-full py-1 sm:py-2 overflow-hidden text-white" style={{ background: 'linear-gradient(135deg, #b03462 0%, #d946a6 50%, #ec4899 100%)' }}>
      <div className="animate-marquee whitespace-nowrap">
        <span className="mx-4 sm:mx-6 lg:mx-8 font-medium text-sm sm:text-base">hello my name is tushar patil working on this website</span>
        <span className="mx-2 sm:mx-4">•</span>
        <span className="mx-4 sm:mx-6 lg:mx-8 font-medium text-sm sm:text-base">hello my name is tushar patil working on this website</span>
        <span className="mx-2 sm:mx-4">•</span>
        <span className="mx-4 sm:mx-6 lg:mx-8 font-medium text-sm sm:text-base">hello my name is tushar patil working on this website</span>
        <span className="mx-2 sm:mx-4">•</span>
        <span className="mx-4 sm:mx-6 lg:mx-8 font-medium text-sm sm:text-base">hello my name is tushar patil working on this website</span>
        <span className="mx-2 sm:mx-4">•</span>
        <span className="mx-4 sm:mx-6 lg:mx-8 font-medium text-sm sm:text-base">hello my name is tushar patil working on this website</span>
        <span className="mx-2 sm:mx-4">•</span>
        <span className="mx-4 sm:mx-6 lg:mx-8 font-medium text-sm sm:text-base">hello my name is tushar patil working on this website</span>
        <span className="mx-2 sm:mx-4">•</span>
        <span className="mx-4 sm:mx-6 lg:mx-8 font-medium text-sm sm:text-base">hello my name is tushar patil working on this website</span>
      </div>
    </div>

      <style jsx>{`
        .animate-marquee {
          animation: marquee 25s linear infinite;
        }
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        
        /* Responsive adjustments */
        @media (max-width: 640px) {
          .animate-marquee {
            animation: marquee-mobile 20s linear infinite;
          }
        }
        
        @keyframes marquee-mobile {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        
        /* Mobile menu transitions */
        .mobile-menu {
          animation: slideDown 0.3s ease-out;
        }
        
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        /* Dropdown transitions */
        .dropdown-transition {
          transition: all 0.2s ease-in-out;
        }
        
        /* Custom scrollbar for mobile menu */
        .mobile-menu .overflow-y-auto::-webkit-scrollbar {
          width: 4px;
        }
        
        .mobile-menu .overflow-y-auto::-webkit-scrollbar-track {
          background: #f1f1f1;
        }
        
        .mobile-menu .overflow-y-auto::-webkit-scrollbar-thumb {
          background: #b03462;
          border-radius: 2px;
        }
      `}</style>
    </div>
  );
};

export default Navbar;