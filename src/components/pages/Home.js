
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../../contexts/LanguageContext';
import { 
  FaFacebook, FaInstagram, FaTwitter, FaYoutube, 
  FaPhone, FaEnvelope, FaChevronLeft, FaChevronRight, 
  FaCalculator, FaPiggyBank, FaHandHoldingUsd, FaChartLine,
  FaBuilding, FaUsers, FaShieldAlt, FaMobileAlt,
  FaClock, FaRupeeSign, FaPercent, FaCalendarAlt,
  FaCamera, FaVideo, FaHeart, FaHandshake,
  FaHome, FaCar, FaGraduationCap, FaBriefcase,
  FaArrowRight, FaPlayCircle, FaPlus, FaTimes,
  FaStar, FaAward, FaUserCheck, FaLightbulb,
  FaCreditCard, FaHandHoldingHeart, FaUniversity, FaComment,
  FaSearch, FaDownload, FaShareAlt, FaFilter,
  FaPiggyBank as FaPiggyBankSolid, FaUser, FaRing
} from 'react-icons/fa';
import { 
  database, 
  ref as dbRef, 
  get 
} from '../../firebase';

// Import your slider images
import slider1 from '../Assets/slider1.jpg';
import slider2 from '../Assets/slider2.jpg';
import slider3 from '../Assets/slider3.jpg';
import slider4 from '../Assets/slider4.jpg';
import slider5 from '../Assets/slider5.jpg';
import popupImage from '../Assets/All.jpeg';
import slider6 from '../Assets/slider6.jpg';
import slider7 from '../Assets/slider7.jpg';
import slider8 from '../Assets/slider8.jpg';
import slider9 from '../Assets/slider9.jpg';
import slider10 from '../Assets/slider10.jpg';
import goldBanner from '../Assets/gold_banner.webp';

const Home = () => {
  const navigate = useNavigate();
  const { language } = useLanguage();
  
  // Color constants
  const primaryColor = '#b03462';
  const secondaryColor = '#ffd166';
  const accentColor = '#06d6a0';
  const darkColor = '#1a1a2e';
  const lightColor = '#f8f9fa';

  // Translations
  const translations = {
    en: {
      aboutOrg: "About the Organization",
      orgName: "Shivpratap Multistate Bank",
      whyChooseUs: "Why Choose Us",
      whyChooseUsSub: "We combine traditional banking values with modern technology to serve you better",
      popularSchemes: "Our Popular Schemes",
      schemesSub: "Tailored financial solutions designed to meet your specific needs and aspirations",
      modernBanking: "Perfect Modern Banking for All Needs",
      bankingServices: "Banking Services",
      exploreServices: "Explore our comprehensive banking solutions",
      goldLoanCalc: "Gold Loan Calculator",
      calcSubtitle: "Calculate your eligible loan amount instantly",
      goldWeight: "Weight (grams)",
      goldRate: "Current Gold Rate (₹/gram)",
      goldPurity: "Gold Purity",
      selectTenure: "Select Tenure",
      calculateLoan: "Calculate Loan Amount",
      eligibleAmount: "You are eligible for",
      monthlyEMI: "Your monthly EMI is",
      loanAmountText: "Loan Amount:",
      basedOnLTV: "*Based on 75% Loan-to-Value ratio",
      note: "Note:",
      noteText: "Maximum loan amount is 75% of gold value as per RBI guidelines. Actual approval subject to terms and conditions.",
      mediaGallery: "Media Gallery",
      gallerySub: "Explore our journey through pictures and videos",
      viewAllGallery: "View All Gallery",
      readMore: "Read More About Us",
      stayConnected: "Stay Connected",
      followUs: "Follow us on Facebook for latest updates",
      viewMoreFB: "View More on Facebook",
      savings: "Savings",
      current: "Current",
      loans: "Loans",
      deposits: "Deposits",
      // Statistics section
      statsTitle: "Our Achievements in Numbers",
      statsSubtitle: "Trusted by millions, serving communities with excellence",
      satisfiedCustomers: "50+ Lakh Satisfied Customers",
      branches: "Branches",
      villageService: "Village Service Centers",
      employee: "Employee",
      businessVolume: "1000+ Crore Business",
      // About section content
      aboutYear2002: "In the year 2002",
      aboutParagraph1: "Galai businessmen came together and presented the idea of establishing an organization to Honorable Pratap Sheth Dada Salunkhe. At this time, the condition of cooperatives was very bad, many organizations were bankrupt and some were on the verge of bankruptcy. There was an atmosphere of volatility among depositors. Taking a decision in such a situation was very risky.",
      aboutVitthalSalunkhe: "Hon. Mr. Vitthal Salunkhe",
      aboutParagraph2: "who had a thorough knowledge of the banking sector, decided to study it and meet the challenge. Dada decided to correct the mistakes of other institutions and provide loans at low rates and with safe collateral and the institution was established on 26th June 2002.",
      aboutJuly11: "Immediately on 11th July 2002",
      aboutParagraph3: "the institution was inaugurated by Hon'ble Doctor Patangraoji Kadam, Hon'ble Jayantraoji Patil and Hon'ble Harsh Vardhanji Patil. On this occasion, grandmothers and former MLAs from all parties attended the event.",
      // Other hardcoded text
      popular: "Popular",
      viewDetails: "View Details",
      photos: "Photos",
      videos: "Videos",
      noImagesFound: "No images found",
      checkBackLater: "Check back later for new gallery images",
      photo: "PHOTO",
      bankEvent: "Bank Event",
      // Info Cards
      safeSecure: "Safe & Secure",
      safeSecureDesc: "RBI licensed with 256-bit encryption ensuring your money is always protected.",
      customerFirst: "Customer First",
      customerFirstDesc: "Personalized service with dedicated relationship managers for all your needs.",
      growthFocused: "Growth Focused",
      growthFocusedDesc: "Investment solutions designed to help you achieve your financial goals.",
      // Schemes
      pensionScheme: "Pension Deposit Scheme",
      pensionDesc: "Small savings today for a worry-free retirement. Regular income support after maturity. Ideal for senior citizens. Safe and secure long-term investment.",
      pensionFeatures: ["Regular monthly income", "Worry-free retirement", "Safe & secure", "Ideal for seniors"],
      pensionTagline: "Old age financial security scheme",
      recurringScheme: "Recurring Deposit Scheme (RD)",
      recurringDesc: "Suitable for salaried & self-employed persons. Disciplined saving habit. Helps fulfill future goals. Fixed tenure with assured returns.",
      recurringFeatures: ["Monthly savings", "Disciplined habit", "Future goals", "Assured returns"],
      recurringTagline: "Small monthly savings plan",
      halfPriceScheme: "Half Price Deposit Scheme",
      halfPriceDesc: "Deposit once, get 1.5 times return. Ideal for short-term financial goals. High return on investment. Trusted Shivpratap Multistate Scheme.",
      halfPriceFeatures: ["150% returns", "Short-term goals", "High ROI", "One-time deposit"],
      halfPriceTagline: "Special 150% return scheme",
      subhmangalScheme: "Subhmangal Deposit Scheme",
      subhmangalDesc: "Planned savings for a memorable ceremony. No compromise on family dreams. Safe investment with assured maturity value. Emotion-based long-term saving plan.",
      subhmangalFeatures: ["Wedding planning", "Family dreams", "Assured maturity", "Emotional savings"],
      subhmangalTagline: "Designed for children's wedding expenses",
      // Banking Services
      regularSavings: "Regular Savings Account",
      salaryAccount: "Salary Account",
      womensSavings: "Women's Savings Account",
      minorSavings: "Minor Savings Account",
      seniorAccount: "Senior Citizen Account",
      currentAccount: "Current Account",
      premiumCurrent: "Premium Current Account",
      startupCurrent: "Startup Current Account",
      tradeCurrent: "Trade Current Account",
      homeLoan: "Home Loan",
      personalLoan: "Personal Loan",
      carLoan: "Car Loan",
      educationLoan: "Education Loan",
      goldLoanService: "Gold Loan",
      businessLoan: "Business Loan",
      fixedDeposit: "Fixed Deposit",
      taxSaverFD: "Tax Saver FD",
      flexiDeposit: "Flexi Deposit",
      cumulativeDeposit: "Cumulative Deposit",
      // Gold Calculator
      enterWeight: "Enter weight in grams",
      grams: "Grams",
      fetchingRate: "Fetching rate...",
      realTimeRates: "*Real-time updated rates",
      forMonths: "For {months} months • 10% annual interest rate",
      errorFetchingPrice: "Unable to fetch live gold price",
      // Tenure Options
      sixMonths: "6 months",
      twelveMonths: "12 months",
      eighteenMonths: "18 months",
      twentyFourMonths: "24 months",
      thirtyMonths: "30 months",
      thirtySixMonths: "36 months",
      // Purity Options
      purity24K: "24K (99.9% Pure)",
      purity22K: "22K (91.6% Pure)",
      purity18K: "18K (75% Pure)",
      purity14K: "14K (58.5% Pure)",
      purity12K: "12K (50% Pure)",
    },
    mr: {
      aboutOrg: "संस्थेबद्दल",
      orgName: "शिवप्रताप मल्टीस्टेट बँक",
      whyChooseUs: "आम्हाला का निवडावे",
      whyChooseUsSub: "आम्ही तुम्हाला चांगली सेवा देण्यासाठी पारंपरिक बँकिंग मूल्ये आणि आधुनिक तंत्रज्ञान एकत्र करतो",
      popularSchemes: "आमच्या लोकप्रिय योजना",
      schemesSub: "तुमच्या विशिष्ट गरजा आणि आकांक्षा पूर्ण करण्यासाठी डिझाइन केलेले वित्तीय उपाय",
      modernBanking: "सर्व गरजांसाठी परिपूर्ण आधुनिक बँकिंग",
      bankingServices: "बँकिंग सेवा",
      exploreServices: "आमच्या व्यापक बँकिंग उपायांचा शोध घ्या",
      goldLoanCalc: "सोने कर्ज कॅल्क्युलेटर",
      calcSubtitle: "तुमच्या पात्र कर्जाची रक्कम त्वरित गणना करा",
      goldWeight: "वजन (ग्रॅम मध्ये)",
      goldRate: "सध्याची सोने दर (₹/ग्रॅम)",
      goldPurity: "सोन्याची शुद्धता (Purity)",
      selectTenure: "कालावधी निवडा",
      calculateLoan: "कर्जाची रक्कम गणना करा",
      eligibleAmount: "तुम्ही पात्र आहात",
      monthlyEMI: "तुमचा मासिक EMI आहे",
      loanAmountText: "कर्जाची रक्कम:",
      basedOnLTV: "*75% लोन-टू-व्हॅल्यू गुणोत्तरावर आधारित",
      note: "टीप:",
      noteText: "अधिकतम कर्ज रक्कम सोन्याच्या मूल्याच्या 75% आहे. वास्तविक मंजुरी अटी आणि नियमांना अधीन आहे.",
      mediaGallery: "मीडिया गॅलरी",
      gallerySub: "चित्रे आणि व्हिडिओद्वारे आमच्या प्रवासाचा शोध घ्या",
      viewAllGallery: "सर्व गॅलरी पहा",
      readMore: "आमच्याबद्दल अधिक वाचा",
      stayConnected: "कनेक्ट रहा",
      followUs: "नवीनतम अपडेटसाठी आम्हाला फेसबुकवर फॉलो करा",
      viewMoreFB: "फेसबुकवर अधिक पहा",
      savings: "बचत",
      current: "चालू",
      loans: "कर्ज",
      deposits: "ठेवी",
      // Statistics section
      statsTitle: "आमची उपलब्धी संख्यांमध्ये",
      statsSubtitle: "लाखो ग्राहकांचा विश्वास, उत्कृष्ट सेवेसह",
      satisfiedCustomers: "50 लाख+ समाधान ग्राहक",
      branches: "शाखा",
      villageService: "गाव सेवा केंद्र",
      employee: "कर्मचारी",
      businessVolume: "1000+ कोटी व्यवसाय",
      // About section content
      aboutYear2002: "वर्ष २००२ मध्ये",
      aboutParagraph1: "गलई व्यापाऱ्यांनी एकत्र येऊन माननीय प्रताप सेठ दादा सालुंखे यांना संस्था स्थापन करण्याचा कल्पना सादर केली. या वेळी सहकारी संस्थांची स्थिती खूप वाईट होती, अनेक संस्था दिवाळा झालेल्या होत्या आणि काही दिवाळ्याच्या वणवण्यावर होत्या. ठेवकरूंमध्ये अस्थिरतेचे वातावरण होते. अशा परिस्थितीत निर्णय घेणे खूप धोकादायक होते.",
      aboutVitthalSalunkhe: "माननीय श्री. विठ्ठल सालुंखे",
      aboutParagraph2: "यांना बँकिंग क्षेत्राचे संपूर्ण ज्ञान होते, त्यांनी त्याचा अभ्यास करण्याची आणि आव्हानाला सामोरे जाण्याची निर्णय घेतला. दादांनी इतर संस्थांच्या चुका दुरुस्त करण्याची आणि कमी दरावर आणि सुरक्षित जामीनवर कर्ज प्रदान करण्याची निर्णय घेतली आणि २६ जून २००२ रोजी संस्थेची स्थापना झाली.",
      aboutJuly11: "तात्काळ ११ जुलै २००२ रोजी",
      aboutParagraph3: "संस्थेचे उद्घाटन माननीय डॉक्टर पाटंगरावजी कदम, माननीय जयंतरावजी पाटील आणि माननीय हर्षवर्धनजी पाटील यांनी केले. या वेळी सर्व पक्षांच्या आजी आणि माजी आमदार या कार्यक्रमाला उपस्थित होते.",
      // Other hardcoded text
      popular: "लोकप्रिय",
      viewDetails: "तपशील पहा",
      photos: "फोटो",
      videos: "व्हिडिओ",
      noImagesFound: "कोणतेही चित्र सापडले नाही",
      checkBackLater: "नवीन गॅलरी प्रतिमांसाठी नंतर परत तपासा",
      photo: "फोटो",
      bankEvent: "बँक कार्यक्रम",
      // Info Cards
      safeSecure: "सुरक्षित आणि सुरक्षित",
      safeSecureDesc: "आरबीआय लायसेंस असलेले 256-बिट एन्क्रिप्शनसह आपले पैसे नेहमी सुरक्षित आहेत हे सुनिश्चित करते.",
      customerFirst: "ग्राहक प्रथम",
      customerFirstDesc: "आपल्या सर्व गरजांसाठी समर्पित रिलेशनशिप मॅनेजरसह वैयक्तिकृत सेवा.",
      growthFocused: "वाढीवर लक्ष केंद्रित",
      growthFocusedDesc: "आपल्या आर्थिक ध्येयां साध्य करण्यासाठी डिझाइन केलेले गुंतवणुकीचे उपाय.",
      // Schemes
      pensionScheme: "पेन्शन डिपॉजिट योजना",
      pensionDesc: "चिंतामुक्त निवृत्तीसाठी आजची लहान बचत. परिपक्वतेनंतर नियमित उत्पन्न समर्थन. वरिष्ठ नागरिकांसाठी आदर्श. सुरक्षित आणि सुरक्षित दीर्घकालीन गुंतवणूक.",
      pensionFeatures: ["नियमित मासिक उत्पन्न", "चिंतामुक्त निवृत्ती", "सुरक्षित आणि सुरक्षित", "वरिष्ठांसाठी आदर्श"],
      pensionTagline: "वृद्ध वयाची आर्थिक सुरक्षा योजना",
      recurringScheme: "रिकरिंग डिपॉजिट योजना (RD)",
      recurringDesc: "वेतनभोगी आणि स्वयं-रोजगार व्यक्तींसाठी योग्य. अनुशासित बचतीची सवय. भविष्यातील ध्येय पूर्ण करण्यास मदत करते. आश्वासित परताव्यासह निश्चित कालावधी.",
      recurringFeatures: ["मासिक बचत", "अनुशासित सवय", "भविष्यातील ध्येय", "आश्वासित परतावा"],
      recurringTagline: "लहान मासिक बचत योजना",
      halfPriceScheme: "अर्धी किंमत डिपॉजिट योजना",
      halfPriceDesc: "एकदा डिपॉजिट करा, 1.5 पटीने परतावा मिळवा. अल्पकालीन आर्थिक ध्येयांसाठी आदर्श. गुंतवणुकीवर उच्च परतावा. विश्वसनीय शिवप्रताप मल्टीस्टेट योजना.",
      halfPriceFeatures: ["150% परतावा", "अल्पकालीन ध्येय", "उच्च ROI", "एकदा डिपॉजिट"],
      halfPriceTagline: "विशेष 150% परतावा योजना",
      subhmangalScheme: "सुभमंगल डिपॉजिट योजना",
      subhmangalDesc: "आठवणीत समारंभासाठी नियोजित बचत. कुटुंबाच्या स्वप्नांवर कोणतीही तडजोड नाही. आश्वासित परिपक्वता मूल्यासह सुरक्षित गुंतवणूक. भावनावर आधारित दीर्घकालीन बचत योजना.",
      subhmangalFeatures: ["लग्न नियोजन", "कुटुंब स्वप्ने", "आश्वासित परिपक्वता", "भावनात्मक बचत"],
      subhmangalTagline: "मुलांच्या लग्न खर्चांसाठी डिझाइन केलेले",
      // Banking Services
      regularSavings: "नियमित बचत खाते",
      salaryAccount: "पगार खाते",
      womensSavings: "महिला बचत खाते",
      minorSavings: "किरकोळ बचत खाते",
      seniorAccount: "वरिष्ठ नागरिक खाते",
      currentAccount: "चालू खाते",
      premiumCurrent: "प्रीमियम चालू खाते",
      startupCurrent: "स्टार्टअप चालू खाते",
      tradeCurrent: "व्यापार चालू खाते",
      homeLoan: "होम लोन",
      personalLoan: "वैयक्तिक कर्ज",
      carLoan: "कार लोन",
      educationLoan: "शिक्षण कर्ज",
      goldLoanService: "सोने कर्ज",
      businessLoan: "व्यवसाय कर्ज",
      fixedDeposit: "फिक्स्ड डिपॉजिट",
      taxSaverFD: "टॅक्स सेव्हर FD",
      flexiDeposit: "फ्लेक्सी डिपॉजिट",
      cumulativeDeposit: "क्युम्युलेटिव्ह डिपॉजिट",
      // Gold Calculator
      enterWeight: "ग्रॅममध्ये वजन प्रविष्ट करा",
      grams: "ग्रॅम",
      fetchingRate: "दर आणत आहे...",
      realTimeRates: "*रियल-टाइम अपडेटेड दर",
      forMonths: "{months} महिन्यांसाठी • 10% वार्षिक व्याज दर",
      errorFetchingPrice: "थेट सोने दर मिळवण्यात अक्षम",
      // Tenure Options
      sixMonths: "6 महिने",
      twelveMonths: "12 महिने",
      eighteenMonths: "18 महिने",
      twentyFourMonths: "24 महिने",
      thirtyMonths: "30 महिने",
      thirtySixMonths: "36 महिने",
      // Purity Options
      purity24K: "24K (९९.९% शुद्ध)",
      purity22K: "22K (९१.६% शुद्ध)",
      purity18K: "18K (७५% शुद्ध)",
      purity14K: "14K (५८.५% शुद्ध)",
      purity12K: "12K (५०% शुद्ध)",
    }
  };

  const isMarathi = language === 'mr';
  const t = translations[language];

  // State management
  const [currentSlide, setCurrentSlide] = useState(0);
  const [activeTab, setActiveTab] = useState('savings');
  const [goldWeight, setGoldWeight] = useState('');
  const [goldPurity, setGoldPurity] = useState('24');
  const [selectedTenure, setSelectedTenure] = useState('12');
  const [goldRate, setGoldRate] = useState('');
  const [loanAmount, setLoanAmount] = useState('');
  const [monthlyEMI, setMonthlyEMI] = useState('');
  const [currentGoldPrice, setCurrentGoldPrice] = useState(null);
  const [goldPriceLoading, setGoldPriceLoading] = useState(false);
  const [error, setError] = useState('');
  const [galleryImages, setGalleryImages] = useState([]);
  const [galleryLoading, setGalleryLoading] = useState(true);
  const [selectedImage, setSelectedImage] = useState(null);
  const [showPopup, setShowPopup] = useState(true); // Popup state - starts as true to show on page load
  const [isPlaying, setIsPlaying] = useState(false);
  const [counters, setCounters] = useState({
    branches: 23,
    accounts: 500000,
    days: 0,
    satisfied: 0
  });


    // const [currentSlide, setCurrentSlide] = useState(0);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  // Hero Slider Images
  const sliderImages = [
    { 
      src: slider1, 
      title: "Secure Your Future",
      subtitle: "Experience banking with trust and transparency"
    },
    { 
      src: slider2, 
      title: "Digital Banking",
      subtitle: "Bank anytime, anywhere with our mobile app"
    },
    { 
      src: slider3, 
      title: "Business Loans",
      subtitle: "Fuel your business growth with our MSME schemes"
    },
    { 
      src: slider4, 
      title: "Home Loans",
      subtitle: "Turn your dream home into reality"
    },
    { 
      src: slider5, 
      title: "Investment Plans",
      subtitle: "Grow your wealth with smart investment options"
    },
    { 
      src: slider6, 
      title: "Gold Loans",
      subtitle: "Instant loans against your gold assets"
    },
    { 
      src: slider7, 
      title: "Education Loans",
      subtitle: "Invest in your future with our education schemes"
    },
    { 
      src: slider8, 
      title: "Senior Citizen Plans",
      subtitle: "Special schemes for our respected seniors"
    },
    { 
      src: slider9, 
      title: "Agriculture Loans",
      subtitle: "Supporting our farmers with flexible financing"
    },
    { 
      src: slider10, 
      title: "Women Empowerment",
      subtitle: "Special banking services for women entrepreneurs"
    }
  ];

  // Information Cards Data
  const infoCards = [
    {
      icon: <FaShieldAlt />,
      title: t.safeSecure,
      description: t.safeSecureDesc,
      gradient: "from-purple-600 to-blue-600"
    },
    {
      icon: <FaHandHoldingUsd />,
      title: t.customerFirst,
      description: t.customerFirstDesc,
      gradient: "from-pink-600 to-rose-600"
    },
    {
      icon: <FaChartLine />,
      title: t.growthFocused,
      description: t.growthFocusedDesc,
      gradient: "from-orange-500 to-yellow-500"
    }
  ];

  // Schemes Data - First 4 from Plan.js deposit schemes
  const schemes = [
    {
      id: 'pension',
      name: t.pensionScheme,
      description: t.pensionDesc,
      icon: <FaUser />,
      features: t.pensionFeatures,
      tagline: t.pensionTagline
    },
    {
      id: 'recurring',
      name: t.recurringScheme,
      description: t.recurringDesc,
      icon: <FaPiggyBank />,
      features: t.recurringFeatures,
      tagline: t.recurringTagline
    },
    {
      id: 'half-price',
      name: t.halfPriceScheme,
      description: t.halfPriceDesc,
      icon: <FaStar />,
      features: t.halfPriceFeatures,
      tagline: t.halfPriceTagline
    },
    {
      id: 'subhmangal',
      name: t.subhmangalScheme,
      description: t.subhmangalDesc,
      icon: <FaRing />,
      features: t.subhmangalFeatures,
      tagline: t.subhmangalTagline
    }
  ];

  // Banking Services Data
  const bankingServices = {
    savings: [
      { name: t.regularSavings, icon: <FaPiggyBankSolid /> },
      { name: t.salaryAccount, icon: <FaRupeeSign /> },
      { name: t.womensSavings, icon: <FaHandHoldingHeart /> },
      { name: t.minorSavings, icon: <FaUniversity /> },
      { name: t.seniorAccount, icon: <FaUserCheck /> }
    ],
    current: [
      { name: t.currentAccount, icon: <FaBriefcase /> },
      { name: t.premiumCurrent, icon: <FaStar /> },
      { name: t.startupCurrent, icon: <FaLightbulb /> },
      { name: t.tradeCurrent, icon: <FaChartLine /> }
    ],
    loans: [
      { name: t.homeLoan, icon: <FaHome /> },
      { name: t.personalLoan, icon: <FaCreditCard /> },
      { name: t.carLoan, icon: <FaCar /> },
      { name: t.educationLoan, icon: <FaGraduationCap /> },
      { name: t.goldLoanService, icon: <FaAward /> },
      { name: t.businessLoan, icon: <FaBuilding /> }
    ],
    deposits: [
      { name: t.fixedDeposit, icon: <FaCalendarAlt /> },
      { name: t.recurringScheme, icon: <FaPiggyBank /> },
      { name: t.taxSaverFD, icon: <FaPercent /> },
      { name: t.flexiDeposit, icon: <FaFilter /> },
      { name: t.cumulativeDeposit, icon: <FaChartLine /> }
    ]
  };

  // Load gallery images from Firebase
  useEffect(() => {
    loadGalleryImages();
  }, []);

  const loadGalleryImages = async () => {
    try {
      setGalleryLoading(true);
      const galleryRef = dbRef(database, 'shivpratapmultistate/gallery');
      const snapshot = await get(galleryRef);
      
      if (snapshot.exists()) {
        const galleryData = snapshot.val();
        const imagesList = Object.keys(galleryData).map(key => ({
          id: key,
          ...galleryData[key]
        }));
        setGalleryImages(imagesList);
      }
    } catch (error) {
      console.error('Error loading gallery images:', error);
    } finally {
      setGalleryLoading(false);
    }
  };

  
  // Touch handlers for mobile swipe
  const minSwipeDistance = 50;

  const onTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = (e) => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      nextSlide();
    }
    if (isRightSwipe) {
      prevSlide();
    }
  };

  // Slider control functions
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === sliderImages.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? sliderImages.length - 1 : prev - 1));
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  // Auto-advance slider
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Auto-advance slider
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowLeft') {
        prevSlide();
      } else if (e.key === 'ArrowRight') {
        nextSlide();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Handle Counter Animation
  useEffect(() => {
    const statsSection = document.getElementById('stats-section');
    if (!statsSection) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const counters = entry.target.querySelectorAll('.counter-number');
            
            counters.forEach((counter) => {
              const target = parseInt(counter.getAttribute('data-target'));
              const suffix = counter.getAttribute('data-suffix') || '';
              const duration = 2500; // 2.5 seconds for smooth animation
              const increment = target / (duration / 16); // 60fps
              let current = 0;
              
              const timer = setInterval(() => {
                current += increment;
                if (current >= target) {
                  current = target;
                  clearInterval(timer);
                }
                
                // Format the number with commas for large numbers
                let displayValue = Math.floor(current).toLocaleString('en-IN');
                counter.textContent = displayValue + suffix;
              }, 16);
            });
            
            // Disconnect after animation starts
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.3 }
    );

    observer.observe(statsSection);
    return () => observer.disconnect();
  }, []);

  // 🔑 इथे तुझी API KEY टाक
  const API_KEY = "goldapi-gegk3219mkz7j2ae-io";

  // Fetch current gold price for India using same API as Calculator.js
  const fetchCurrentGoldPrice = async () => {
    try {
      setGoldPriceLoading(true);
      const res = await fetch("https://www.goldapi.io/api/XAU/INR", {
        headers: {
          "x-access-token": API_KEY,
          "Content-Type": "application/json",
        },
      });

      if (!res.ok) throw new Error("Failed to fetch gold price");

      const data = await res.json();

      // GoldAPI price = per ounce → gram मध्ये convert
      const pricePerGram = data.price / 31.1035;
      const priceInINR = pricePerGram.toFixed(2);
      
      setCurrentGoldPrice(priceInINR);
      setGoldRate(priceInINR);
      setError("");
      
    } catch (err) {
      setError(t.errorFetchingPrice);
      // Fallback to a realistic price if API fails
      const fallbackPrice = 6250;
      setCurrentGoldPrice(fallbackPrice.toString());
      setGoldRate(fallbackPrice.toString());
    } finally {
      setGoldPriceLoading(false);
    }
  };

  // Handle weight input change - trigger gold price fetch
  const handleWeightChange = (e) => {
    const value = e.target.value;
    setGoldWeight(value);
    
    // Fetch gold price when user starts typing weight
    if (value && !currentGoldPrice) {
      fetchCurrentGoldPrice();
    }
  };

  // Load gold price on component mount
  useEffect(() => {
    fetchCurrentGoldPrice();
  }, []);

  // Handle Gold Loan Calculation
  const calculateGoldLoan = () => {
    if (!goldWeight || !goldRate) {
      alert('Please enter both gold weight and current rate');
      return;
    }
    
    const weight = parseFloat(goldWeight);
    const rate = parseFloat(goldRate);
    
    // Purity factors
    const purityFactor = {
      24: 1,
      22: 0.916,
      18: 0.75,
      14: 0.585,
      12: 0.5,
    };
    
    // Calculate gold value based on purity
    const adjustedRate = rate * purityFactor[goldPurity];
    const goldValue = weight * adjustedRate;
    const eligibleAmount = (goldValue * 0.75).toFixed(2); // 75% LTV
    setLoanAmount(eligibleAmount);
    
    // Calculate EMI (assuming 10% annual interest rate - same as Calculator.js)
    const principal = parseFloat(eligibleAmount);
    const annualRate = 0.10; // 10% annual interest
    const monthlyRate = annualRate / 12;
    const tenureMonths = parseInt(selectedTenure);
    
    const emi = (principal * monthlyRate * Math.pow(1 + monthlyRate, tenureMonths)) / 
            (Math.pow(1 + monthlyRate, tenureMonths) - 1);
    
    setMonthlyEMI(emi.toFixed(2));
  };

  return (
    <div className="font-sans bg-gradient-to-b from-gray-50 to-white min-h-screen relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div 
          className="absolute -top-20 -right-20 w-96 h-96 rounded-full opacity-5"
          style={{ backgroundColor: primaryColor }}
        ></div>
        <div 
          className="absolute -bottom-32 -left-32 w-80 h-80 rounded-full opacity-5"
          style={{ backgroundColor: primaryColor }}
        ></div>
      </div>

      {/* Hero Slider Section */}
<section
  className="
    relative w-full overflow-hidden
    bg-transparent

    h-auto                    /* mobile */
    md:h-[30vh]               /* iPad */
    lg:h-[65vh]               /* laptop */
    xl:h-[70vh]

    max-h-[900px]
  "
>
  <div
    className="relative w-full h-full"
    onTouchStart={onTouchStart}
    onTouchMove={onTouchMove}
    onTouchEnd={onTouchEnd}
  >
    {/* Slider Images */}
    {sliderImages.map((slide, index) => (
      <div
        key={slide.id}
        className={`
          transition-opacity duration-700 ease-in-out
          ${
            index === currentSlide
              ? 'opacity-100 md:absolute md:inset-0'
              : 'opacity-0 absolute inset-0'
          }
        `}
      >
        <img
          src={slide.src}
          alt={slide.alt}
          className="
            block w-full h-auto                 /* mobile only */

            md:w-full md:h-full                 /* iPad + laptop FIX */
            md:object-cover
            md:object-center
          "
        />
      </div>
    ))}

    {/* Navigation Arrows */}
    <button
      onClick={prevSlide}
      className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-sm text-white p-2 sm:p-3 rounded-full z-10"
      aria-label="Previous slide"
    >
      <svg className="w-4 h-4 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
      </svg>
    </button>

    <button
      onClick={nextSlide}
      className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-sm text-white p-2 sm:p-3 rounded-full z-10"
      aria-label="Next slide"
    >
      <svg className="w-4 h-4 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
      </svg>
    </button>

    {/* Indicators */}
    <div className="absolute bottom-3 md:bottom-5 left-1/2 -translate-x-1/2 flex space-x-2 z-10">
      {sliderImages.map((_, index) => (
        <button
          key={index}
          onClick={() => goToSlide(index)}
          className={`h-2 w-2 md:h-3 md:w-3 rounded-full transition-all duration-300 ${
            index === currentSlide
              ? 'bg-white w-6 md:w-8'
              : 'bg-white/50'
          }`}
          aria-label={`Go to slide ${index + 1}`}
        />
      ))}
    </div>
  </div>
</section>




      {/* 2. About Organization Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 
            className="text-4xl md:text-5xl font-bold text-center mb-16"
            style={{
              background: `linear-gradient(135deg, ${primaryColor} 0%, #d15679 100%)`,
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}
          >
            {t.aboutOrg}
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Left: About Text */}
            <div>
              <div className="mb-8">
                <div className="relative">
                  {/* Decorative gradient line */}
                  <div 
                    className="w-24 h-2 rounded-full mb-6"
                    style={{
                      background: `linear-gradient(90deg, ${primaryColor}, ${secondaryColor})`,
                      boxShadow: `0 4px 12px ${primaryColor}30`
                    }}
                  ></div>
                  
                  {/* Title with gradient */}
                  <h3 className="text-3xl md:text-4xl font-bold mb-6 relative">
                    <span className="relative z-10" style={{
                      background: `linear-gradient(135deg, ${primaryColor} 0%, #d15679 100%)`,
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text'
                    }}>
                      {t.orgName}
                    </span>
                    {/* Title underline */}
                    <div 
                      className="absolute -bottom-2 left-0 w-32 h-1 rounded-full"
                      style={{
                        background: `linear-gradient(90deg, ${primaryColor}, ${secondaryColor})`
                      }}
                    ></div>
                  </h3>
                </div>

                {/* About content with timeline effect */}
                <div className="relative pl-8 md:pl-10">
                  {/* Timeline line */}
                  <div 
                    className="absolute left-0 top-0 bottom-0 w-1 rounded-full"
                    style={{
                      background: `linear-gradient(to bottom, ${primaryColor}20, ${primaryColor}, ${primaryColor}20)`
                    }}
                  ></div>
                  
                  {/* Timeline start marker */}
                  <div 
                    className="absolute left-0 top-0 w-4 h-4 rounded-full transform -translate-x-1.5"
                    style={{
                      backgroundColor: primaryColor,
                      boxShadow: `0 0 0 4px ${primaryColor}20`
                    }}
                  ></div>

                  <div className="space-y-6">
                    {/* First paragraph with icon */}
                    <div className="relative">
                      <div className="flex items-start">
                        <div 
                          className="flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center mr-4 transform -translate-x-6"
                          style={{
                            backgroundColor: `${primaryColor}15`,
                            border: `2px solid ${primaryColor}30`
                          }}
                        >
                          <FaBuilding className="text-lg" style={{ color: primaryColor }} />
                        </div>
                        <div>
                          <p className="text-gray-700 leading-relaxed text-lg">
                            <span className="font-bold" style={{ color: primaryColor }}>{t.aboutYear2002}</span>, {t.aboutParagraph1}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Second paragraph with icon */}
                    <div className="relative">
                      <div className="flex items-start">
                        <div 
                          className="flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center mr-4 transform -translate-x-6"
                          style={{
                            backgroundColor: `${primaryColor}15`,
                            border: `2px solid ${primaryColor}30`
                          }}
                        >
                          <FaChartLine className="text-lg" style={{ color: primaryColor }} />
                        </div>
                        <div>
                          <p className="text-gray-700 leading-relaxed text-lg">
                            <span className="font-bold" style={{ color: primaryColor }}>{t.aboutVitthalSalunkhe}</span>, {t.aboutParagraph2}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Third paragraph with icon */}
                    <div className="relative">
                      <div className="flex items-start">
                        <div 
                          className="flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center mr-4 transform -translate-x-6"
                          style={{
                            backgroundColor: `${primaryColor}15`,
                            border: `2px solid ${primaryColor}30`
                          }}
                        >
                          <FaHandshake className="text-lg" style={{ color: primaryColor }} />
                        </div>
                        <div>
                          <p className="text-gray-700 leading-relaxed text-lg">
                            <span className="font-bold" style={{ color: primaryColor }}>{t.aboutJuly11}</span> {t.aboutParagraph3}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Timeline end marker */}
                    <div 
                      className="absolute left-0 bottom-0 w-4 h-4 rounded-full transform -translate-x-1.5"
                      style={{
                        backgroundColor: secondaryColor,
                        boxShadow: `0 0 0 4px ${secondaryColor}30`
                      }}
                    ></div>
                  </div>
                </div>
              </div>

              {/* CTA Button with gradient */}
              <button 
                onClick={() => navigate('/about')}
                className="group relative overflow-hidden px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:-translate-y-1 hover:shadow-2xl mb-12"
                style={{
                  background: `linear-gradient(135deg, ${primaryColor} 0%, #d15679 100%)`,
                  color: 'white'
                }}
              >
                <span className="relative z-10 flex items-center">
                  {t.readMore}
                  <FaArrowRight className="ml-3 group-hover:translate-x-2 transition-transform duration-300" />
                </span>
                
                {/* Hover effect */}
                <div 
                  className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300"
                ></div>
                
                {/* Button shine effect */}
                <div 
                  className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700"
                  style={{
                    background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)'
                  }}
                ></div>
              </button>

            </div>

            {/* Right: Facebook Feed */}
            <div 
              className="rounded-2xl shadow-2xl overflow-hidden border relative"
              style={{
                background: 'linear-gradient(135deg, white 0%, #f9fafb 100%)',
                borderColor: `${primaryColor}20`
              }}
            >
              <div 
                className="p-8 text-white relative overflow-hidden"
                style={{
                  background: `linear-gradient(135deg, ${primaryColor} 0%, #9c2956 100%)`
                }}
              >
                <div className="absolute top-0 right-0 w-40 h-40 rounded-full bg-white/10 -translate-y-20 translate-x-20"></div>
                
                <div className="relative flex items-center">
                  <div 
                    className="w-16 h-16 rounded-xl bg-white/20 flex items-center justify-center mr-6 backdrop-blur-sm"
                    style={{ border: '2px solid rgba(255,255,255,0.3)' }}
                  >
                    <FaFacebook className="text-3xl text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold">{t.stayConnected}</h3>
                    <p className="text-white/80 mt-2">{t.followUs}</p>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <div className="rounded-xl overflow-hidden border border-gray-200">
                  <iframe
                    src="https://www.facebook.com/plugins/page.php?href=https://www.facebook.com/shivpratapmultistatenagari&tabs=timeline&width=500&height=600&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true"
                    width="100%"
                    height="600"
                    style={{ border: "none", overflow: "hidden" }}
                    scrolling="no"
                    frameBorder="0"
                    allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                    allowFullScreen
                    title="Shivpratap Multistate Nagari Bank Facebook"
                  />
                </div>

                <button 
                  className="w-full mt-6 py-3 rounded-xl font-medium transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg flex items-center justify-center gap-2"
                  style={{
                    backgroundColor: `${primaryColor}10`,
                    color: primaryColor,
                    border: `2px solid ${primaryColor}20`
                  }}
                >
                  <FaFacebook />
                  {t.viewMoreFB}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Information Cards Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 
              className="text-4xl md:text-5xl font-bold mb-16"
              style={{
                background: `linear-gradient(135deg, ${primaryColor} 0%, #d15679 100%)`,
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}
            >
              {t.aboutOrg}
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              {t.whyChooseUsSub}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {infoCards.map((card, index) => (
              <div 
                key={index}
                className="bg-white rounded-2xl shadow-xl p-8 transform transition-all duration-500 hover:-translate-y-4 hover:shadow-2xl border relative group overflow-hidden"
                style={{ borderColor: `${primaryColor}20` }}
              >
                {/* Background decorative element */}
                <div 
                  className="absolute -right-8 -top-8 w-32 h-32 rounded-full opacity-10 group-hover:opacity-20 transition-opacity duration-300"
                  style={{ backgroundColor: primaryColor }}
                ></div>
                
                <div 
                  className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 relative z-10"
                  style={{
                    background: `linear-gradient(135deg, ${primaryColor} 0%, #d15679 100%)`,
                    boxShadow: `0 8px 24px ${primaryColor}40`
                  }}
                >
                  <div className="text-white text-2xl">
                    {card.icon}
                  </div>
                </div>
                
                <h3 
                  className="text-xl font-bold mb-4 relative z-10"
                  style={{ color: primaryColor }}
                >
                  {card.title}
                </h3>
                
                <p className="text-gray-600 mb-6 relative z-10">
                  {card.description}
                </p>
                
                <div 
                  className="w-12 h-1 rounded-full relative z-10"
                  style={{
                    background: `linear-gradient(90deg, ${primaryColor}, ${secondaryColor})`
                  }}
                ></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Schemes Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 
              className="text-4xl md:text-5xl font-bold mb-16"
              style={{
                background: `linear-gradient(135deg, ${primaryColor} 0%, #d15679 100%)`,
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}
            >
              {t.popularSchemes}
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              {t.schemesSub}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {schemes.map((scheme, index) => (
              <div 
                key={index}
                className="bg-gradient-to-br from-gray-50 to-white rounded-2xl shadow-xl overflow-hidden border transform transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl group p-6"
                style={{ borderColor: `${primaryColor}20` }}
              >
                <h3 
                  className="text-xl font-bold mb-3"
                  style={{ color: primaryColor }}
                >
                  {scheme.name}
                </h3>
                
                <p className="text-gray-600 mb-6">
                  {scheme.description}
                </p>
                
                {/* Features tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {scheme.features.map((feature, idx) => (
                    <span 
                      key={idx}
                      className="text-xs font-medium px-3 py-1 rounded-full"
                      style={{
                        backgroundColor: `${primaryColor}15`,
                        color: primaryColor
                      }}
                    >
                      {feature}
                    </span>
                  ))}
                </div>
                
                <button 
                  onClick={() => navigate(`/plan#${scheme.id}`)}
                  className="w-full py-3 rounded-xl font-semibold transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg group-hover:shadow-xl"
                  style={{
                    background: `linear-gradient(135deg, ${primaryColor} 0%, #d15679 100%)`,
                    color: 'white'
                  }}
                >
                  {t.viewDetails}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Modern Banking & Calculator Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 
            className="text-4xl md:text-5xl font-bold text-center mb-16"
            style={{
              background: `linear-gradient(135deg, ${primaryColor} 0%, #d15679 100%)`,
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}
          >
            {t.modernBanking}
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left: Banking Services */}
            <div 
              className="rounded-2xl shadow-xl p-8 border relative overflow-hidden"
              style={{
                background: 'linear-gradient(135deg, white 0%, #f9fafb 100%)',
                borderColor: `${primaryColor}20`
              }}
            >
              <div 
                className="absolute top-0 right-0 w-40 h-40 rounded-full opacity-10"
                style={{ backgroundColor: primaryColor }}
              ></div>
              
              <div className="relative z-10">
                <div className="flex items-center mb-8">
                  <div 
                    className="w-14 h-14 rounded-xl flex items-center justify-center mr-4"
                    style={{
                      background: `linear-gradient(135deg, ${primaryColor} 0%, #d15679 100%)`
                    }}
                  >
                    <FaBuilding className="text-white text-2xl" />
                  </div>
                  <div>
                    <h3 
                      className="text-2xl font-bold"
                      style={{ color: primaryColor }}
                    >
                      {t.bankingServices}
                    </h3>
                    <p className="text-gray-600">{t.exploreServices}</p>
                  </div>
                </div>

                {/* Service Tabs */}
                <div className="flex space-x-4 mb-8 overflow-x-auto pb-4">
                  {['savings', 'current', 'loans', 'deposits'].map((tab) => (
                    <button
                      key={tab}
                      onClick={() => setActiveTab(tab)}
                      className={`px-6 py-3 rounded-xl font-semibold whitespace-nowrap transition-all duration-300 ${
                        activeTab === tab
                          ? 'shadow-lg transform scale-105'
                          : 'hover:bg-gray-100'
                      }`}
                      style={{
                        background: activeTab === tab 
                          ? `linear-gradient(135deg, ${primaryColor} 0%, #d15679 100%)`
                          : 'white',
                        color: activeTab === tab ? 'white' : primaryColor,
                        border: `2px solid ${activeTab === tab ? 'transparent' : `${primaryColor}30`}`
                      }}
                    >
                      {t[tab]}
                    </button>
                  ))}
                </div>

                {/* Service List */}
                <div className="space-y-4">
                  {bankingServices[activeTab].map((service, index) => (
                    <div 
                      key={index}
                      className="flex items-center p-4 rounded-xl border hover:shadow-lg transition-all duration-300 cursor-pointer group"
                      style={{
                        borderColor: `${primaryColor}20`,
                        backgroundColor: 'white'
                      }}
                    >
                      <div 
                        className="w-10 h-10 rounded-full flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300"
                        style={{
                          backgroundColor: `${primaryColor}15`,
                          color: primaryColor
                        }}
                      >
                        {service.icon}
                      </div>
                      <span className="text-gray-800 font-medium flex-1">{service.name}</span>
                      <FaArrowRight className="text-gray-400 group-hover:text-primary group-hover:translate-x-2 transition-all duration-300" />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: Gold Loan Calculator */}
            <div 
              className="rounded-2xl shadow-xl p-8 border relative overflow-hidden"
              style={{
                background: `linear-gradient(135deg, ${primaryColor}15 0%, ${primaryColor}05 100%)`,
                borderColor: `${primaryColor}30`
              }}
            >
              <div 
                className="absolute -top-20 -right-20 w-60 h-60 rounded-full opacity-10"
                style={{ backgroundColor: primaryColor }}
              ></div>
              
              <div className="relative z-10">
                <div className="flex items-center mb-8">
                  <div 
                    className="w-14 h-14 rounded-xl flex items-center justify-center mr-4"
                    style={{
                      background: `linear-gradient(135deg, ${secondaryColor} 0%, #ffc233 100%)`
                    }}
                  >
                    <FaCalculator className="text-gray-800 text-2xl" />
                  </div>
                  <div>
                    <h3 
                      className="text-2xl font-bold"
                      style={{ color: darkColor }}
                    >
                      {t.goldLoanCalc}
                    </h3>
                    <p className="text-gray-600">{t.calcSubtitle}</p>
                  </div>
                </div>

                <div className="space-y-6">
                  <div>
                    <label className="block text-gray-700 mb-3 font-medium">
                      {t.goldWeight}
                    </label>
                    <div className="relative">
                      <input
                        type="number"
                        value={goldWeight}
                        onChange={handleWeightChange}
                        className="w-full px-4 py-4 rounded-xl border focus:ring-4 outline-none transition-all pr-12"
                        style={{
                          borderColor: '#e2e8f0',
                          backgroundColor: 'white',
                          boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)'
                        }}
                        placeholder={t.enterWeight}
                      />
                      <div className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400">
                        {t.grams}
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-gray-700 mb-3 font-medium">
                      {t.goldPurity}
                    </label>
                    <select
                      value={goldPurity}
                      onChange={(e) => setGoldPurity(e.target.value)}
                      className="w-full px-4 py-4 rounded-xl border focus:ring-4 outline-none transition-all"
                      style={{
                        borderColor: '#e2e8f0',
                        backgroundColor: 'white',
                        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)'
                      }}
                    >
                      <option value="24">{t.purity24K}</option>
                      <option value="22">{t.purity22K}</option>
                      <option value="18">{t.purity18K}</option>
                      <option value="14">{t.purity14K}</option>
                      <option value="12">{t.purity12K}</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-gray-700 mb-3 font-medium">
                      {t.selectTenure}
                    </label>
                    <select
                      value={selectedTenure}
                      onChange={(e) => setSelectedTenure(e.target.value)}
                      className="w-full px-4 py-4 rounded-xl border focus:ring-4 outline-none transition-all"
                      style={{
                        borderColor: '#e2e8f0',
                        backgroundColor: 'white',
                        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)'
                      }}
                    >
                      <option value="6">{t.sixMonths}</option>
                      <option value="12">{t.twelveMonths}</option>
                      <option value="18">{t.eighteenMonths}</option>
                      <option value="24">{t.twentyFourMonths}</option>
                      <option value="30">{t.thirtyMonths}</option>
                      <option value="36">{t.thirtySixMonths}</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-gray-700 mb-3 font-medium">
                      {t.goldRate}
                    </label>
                    <div className="relative">
                      {goldPriceLoading ? (
                        <div className="w-full px-4 py-4 rounded-xl border bg-gray-50 flex items-center justify-center">
                          <div className="flex items-center gap-2">
                            <div className="animate-spin rounded-full h-4 w-4 border-2 border-gray-400 border-t-transparent"></div>
                            <span className="text-gray-500">{t.fetchingRate}</span>
                          </div>
                        </div>
                      ) : error ? (
                        <div className="w-full px-4 py-4 rounded-xl border bg-red-50 flex items-center justify-center">
                          <span className="text-red-600">{error}</span>
                        </div>
                      ) : (
                        <>
                          <input
                            type="number"
                            value={goldRate}
                            readOnly
                            className="w-full px-4 py-4 rounded-xl border transition-all pr-24 cursor-not-allowed"
                            style={{
                              borderColor: '#e2e8f0',
                              backgroundColor: '#f8fafc',
                              boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)'
                            }}
                          />
                          <div className="absolute right-4 top-1/2 transform -translate-y-1/2 flex items-center gap-2">
                            <span className="text-gray-400">₹/gram</span>
                            <button
                              onClick={fetchCurrentGoldPrice}
                              className="p-1 rounded hover:bg-gray-200 transition-colors"
                              title="Refresh"
                            >
                              <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                              </svg>
                            </button>
                          </div>
                        </>
                      )}
                    </div>
                    {currentGoldPrice && !goldPriceLoading && !error && (
                      <p className="text-xs text-gray-500 mt-1">
                        {t.realTimeRates}
                      </p>
                    )}
                  </div>

                  <button
                    onClick={calculateGoldLoan}
                    className="w-full py-4 rounded-xl font-bold text-lg transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl active:scale-95"
                    style={{
                      background: `linear-gradient(135deg, ${secondaryColor} 0%, #ffc233 100%)`,
                      color: darkColor
                    }}
                  >
                    {t.calculateLoan}
                  </button>

                  {loanAmount && (
                    <div 
                      className="rounded-xl p-6 border animate-fade-in mb-4"
                      style={{
                        backgroundColor: `${accentColor}15`,
                        borderColor: `${accentColor}30`
                      }}
                    >
                      <div className="text-center">
                        <p className="text-gray-600 mb-3">{t.eligibleAmount}</p>
                        <div className="text-4xl font-bold mb-3" style={{ color: accentColor }}>
                          {t.loanAmountText} ₹{parseFloat(loanAmount).toLocaleString('en-IN')}
                        </div>
                        <p className="text-sm text-gray-600">
                          {t.basedOnLTV}
                        </p>
                      </div>
                    </div>
                  )}

                  {monthlyEMI && (
                    <div 
                      className="rounded-xl p-6 border animate-fade-in"
                      style={{
                        backgroundColor: `${primaryColor}15`,
                        borderColor: `${primaryColor}30`
                      }}
                    >
                      <div className="text-center">
                        <p className="text-gray-600 mb-3">{t.monthlyEMI}</p>
                        <div className="text-3xl font-bold mb-3" style={{ color: primaryColor }}>
                          ₹{parseFloat(monthlyEMI).toLocaleString('en-IN')}
                        </div>
                        <p className="text-sm text-gray-600">
                          {t.forMonths.replace('{months}', selectedTenure)}
                        </p>
                      </div>
                    </div>
                  )}
                  <div 
                    className="text-sm pt-4 border-t"
                    style={{ borderColor: `${primaryColor}20` }}
                  >
                    <p className="flex items-start gap-2 text-gray-600">
                      <span className="text-lg">💡</span>
                      <span><strong>{t.note}:</strong> {t.noteText}</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Statistics Counter Section */}
      <section id="stats-section" className="py-12 md:py-16 text-white relative overflow-hidden" style={{
        background: `linear-gradient(135deg, #b03462 0%, #8a2b4d 50%, #b03462 100%)`
      }}>
        {/* Background decorative elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-white/10 animate-pulse"></div>
          <div className="absolute -bottom-20 -left-20 w-48 h-48 rounded-full bg-white/5 animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/2 left-1/4 w-32 h-32 rounded-full bg-white/5 animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-3" style={{
              textShadow: '0 2px 4px rgba(0,0,0,0.3)'
            }}>
              {t.statsTitle}
            </h2>
            <p className="text-white/90 text-base md:text-lg max-w-2xl mx-auto">
              {t.statsSubtitle}
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 sm:gap-6 md:gap-8">
            {/* Satisfied Customers */}
            <div className="text-center group">
              <div className="relative mb-3 sm:mb-4">
                <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto rounded-full bg-white/20 flex items-center justify-center backdrop-blur-sm group-hover:bg-white/30 transition-all duration-500 group-hover:scale-110 shadow-2xl border-2 border-white/30">
                  <FaUsers className="text-2xl sm:text-3xl text-white" />
                </div>
                <div className="absolute inset-0 rounded-full bg-white/10 animate-ping opacity-20"></div>
              </div>
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold mb-1 sm:mb-2 counter-number" data-target="5000000" data-suffix="+">
                0
              </div>
              <div className="text-white/90 text-xs sm:text-sm md:text-base font-medium leading-tight">
                {t.satisfiedCustomers}
              </div>
            </div>

            {/* Branches */}
            <div className="text-center group">
              <div className="relative mb-3 sm:mb-4">
                <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto rounded-full bg-white/20 flex items-center justify-center backdrop-blur-sm group-hover:bg-white/30 transition-all duration-500 group-hover:scale-110 shadow-2xl border-2 border-white/30">
                  <FaBuilding className="text-2xl sm:text-3xl text-white" />
                </div>
                <div className="absolute inset-0 rounded-full bg-white/10 animate-ping opacity-20" style={{ animationDelay: '0.2s' }}></div>
              </div>
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold mb-1 sm:mb-2 counter-number" data-target="23">
                0
              </div>
              <div className="text-white/90 text-xs sm:text-sm md:text-base font-medium leading-tight">
                {t.branches}
              </div>
            </div>

            {/* Village Service Centers */}
            <div className="text-center group">
              <div className="relative mb-3 sm:mb-4">
                <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto rounded-full bg-white/20 flex items-center justify-center backdrop-blur-sm group-hover:bg-white/30 transition-all duration-500 group-hover:scale-110 shadow-2xl border-2 border-white/30">
                  <FaHome className="text-2xl sm:text-3xl text-white" />
                </div>
                <div className="absolute inset-0 rounded-full bg-white/10 animate-ping opacity-20" style={{ animationDelay: '0.4s' }}></div>
              </div>
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold mb-1 sm:mb-2 counter-number" data-target="6">
                0
              </div>
              <div className="text-white/90 text-xs sm:text-sm md:text-base font-medium leading-tight">
                {t.villageService}
              </div>
            </div>

            {/* Customers */}
            <div className="text-center group">
              <div className="relative mb-3 sm:mb-4">
                <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto rounded-full bg-white/20 flex items-center justify-center backdrop-blur-sm group-hover:bg-white/30 transition-all duration-500 group-hover:scale-110 shadow-2xl border-2 border-white/30">
                  <FaUserCheck className="text-2xl sm:text-3xl text-white" />
                </div>
                <div className="absolute inset-0 rounded-full bg-white/10 animate-ping opacity-20" style={{ animationDelay: '0.6s' }}></div>
              </div>
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold mb-1 sm:mb-2 counter-number" data-target="200" data-suffix="+">
                0
              </div>
              <div className="text-white/90 text-xs sm:text-sm md:text-base font-medium leading-tight">
                {t.employee}
              </div>
            </div>

            {/* Business Volume */}
            <div className="text-center group">
              <div className="relative mb-3 sm:mb-4">
                <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto rounded-full bg-white/20 flex items-center justify-center backdrop-blur-sm group-hover:bg-white/30 transition-all duration-500 group-hover:scale-110 shadow-2xl border-2 border-white/30">
                  <FaChartLine className="text-2xl sm:text-3xl text-white" />
                </div>
                <div className="absolute inset-0 rounded-full bg-white/10 animate-ping opacity-20" style={{ animationDelay: '0.8s' }}></div>
              </div>
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold mb-1 sm:mb-2 counter-number" data-target="1000" data-suffix="+">
                0
              </div>
              <div className="text-white/90 text-xs sm:text-sm md:text-base font-medium leading-tight">
                {t.businessVolume}
              </div>
            </div>
          </div>
        </div>
      </section>

      
      {/* 8. Media Gallery Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between mb-16 gap-6">
            <div>
              <h2 
                className="text-4xl md:text-5xl font-bold"
                style={{
                  background: `linear-gradient(135deg, ${primaryColor} 0%, #d15679 100%)`,
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text'
                }}
              >
                {t.mediaGallery}
              </h2>
              <p className="text-gray-600 text-lg mt-3">{t.gallerySub}</p>
            </div>
            <button 
              onClick={() => navigate('/gallery')}
              className="px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl flex items-center gap-3"
              style={{
                background: `linear-gradient(135deg, ${primaryColor} 0%, #d15679 100%)`,
                color: 'white'
              }}
            >
              <FaCamera />
              {t.viewAllGallery}
            </button>
          </div>

          {/* Gallery Grid */}
          {galleryLoading ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[...Array(6)].map((_, index) => (
                <div key={index} className="relative rounded-2xl overflow-hidden shadow-lg">
                  <div 
                    className="h-64 relative overflow-hidden animate-pulse"
                    style={{
                      background: `linear-gradient(135deg, ${primaryColor} 0%, #9c2956 100%)`
                    }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/10 to-black/30"></div>
                  </div>
                </div>
              ))}
            </div>
          ) : galleryImages.length === 0 ? (
            <div className="text-center py-20">
              <FaCamera className="mx-auto text-6xl text-gray-300 mb-5" />
              <h3 className="text-2xl font-semibold text-gray-700 mb-3">{t.noImagesFound}</h3>
              <p className="text-gray-500">{t.checkBackLater}</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {galleryImages.slice(0, 6).map((image, index) => (
                <div 
                  key={image.id}
                  onClick={() => setSelectedImage(image.url)}
                  className="relative rounded-2xl overflow-hidden shadow-lg transform transition-all duration-500 hover:-translate-y-4 hover:shadow-2xl cursor-pointer group"
                >
                  <div className="h-64 relative overflow-hidden">
                    <img
                      src={image.url}
                      alt={image.originalName || t.bankEvent}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/10 to-black/30"></div>
                    <div 
                      className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      style={{
                        background: `radial-gradient(circle, ${primaryColor}40 0%, transparent 70%)`
                      }}
                    >
                      <div className="w-16 h-16 rounded-full flex items-center justify-center bg-white/20 backdrop-blur-sm">
                        <FaPlus className="text-white text-2xl" />
                      </div>
                    </div>
                  </div>
                  <div 
                    className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6"
                  >
                    <p className="text-white font-medium text-lg">
                      {image.originalName || `${t.bankEvent} ${index + 1}`}
                    </p>
                    <p className="text-white/70 text-sm mt-1">
                      {image.category || t.bankEvent}
                    </p>
                  </div>
                  <div 
                    className="absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-bold"
                    style={{
                      backgroundColor: `${secondaryColor}20`,
                      color: darkColor,
                      backdropFilter: 'blur(10px)'
                    }}
                  >
                    {t.photo}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm animate-fade-in"
          onClick={() => setSelectedImage(null)}
        >
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-6 right-6 text-white text-3xl hover:text-gray-300 transition-colors duration-300 z-20"
            style={{ color: secondaryColor }}
          >
            <FaTimes />
          </button>
          <div 
            className="relative max-w-4xl max-h-[80vh] w-full rounded-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <img 
              src={selectedImage} 
              alt="Gallery" 
              className="w-full h-full object-contain rounded-xl"
            />
          </div>
        </div>
      )}

      {/* Custom CSS */}
      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out;
        }

        .animate-fade-in {
          animation: fade-in 0.3s ease-out;
        }

        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        .delay-200 {
          animation-delay: 200ms;
        }

        .delay-400 {
          animation-delay: 400ms;
        }

        /* Custom scrollbar for tabs */
        .overflow-x-auto::-webkit-scrollbar {
          height: 6px;
        }

        .overflow-x-auto::-webkit-scrollbar-track {
          background: #f1f1f1;
          border-radius: 3px;
        }

        .overflow-x-auto::-webkit-scrollbar-thumb {
          background: ${primaryColor}50;
          border-radius: 3px;
        }

        .overflow-x-auto::-webkit-scrollbar-thumb:hover {
          background: ${primaryColor}70;
        }

        /* Focus styles */
        input:focus, textarea:focus, select:focus {
          outline: none;
          border-color: ${primaryColor};
          box-shadow: 0 0 0 4px ${primaryColor}20;
        }
      `}</style>

      {/* Automatic Popup Modal */}
      {showPopup && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in">
          <div className="relative max-w-4xl w-full max-h-[90vh] bg-white rounded-2xl shadow-2xl overflow-hidden animate-fade-in-up">
            {/* Close Button */}
            <button
              onClick={() => setShowPopup(false)}
              className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-red-500 hover:bg-red-600 text-white flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-lg"
            >
              <FaTimes className="text-xl" />
            </button>
            
            {/* Popup Content */}
            <div className="relative">
              {/* Image */}
              <img
                src={popupImage}
                alt="Shivpratap Multistate Bank"
                className="w-full h-auto max-h-[70vh] object-contain bg-gray-50"
              />
              
              {/* Optional: Add some content below image */}
              {/* <div className="p-6 bg-gradient-to-r from-purple-600 to-blue-600 text-white">
                <h3 className="text-2xl font-bold text-center mb-2">
                  Welcome to Shivpratap Multistate Bank
                </h3>
                <p className="text-center text-white/90">
                  Your trusted partner for banking and financial services
                </p>
              </div> */}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;