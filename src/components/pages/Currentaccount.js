import React, { useState } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import { 
  FaBuilding, FaBriefcase, FaFileAlt, FaUserTie,
  FaIdCard, FaPercent, FaCalculator, FaExchangeAlt,
  FaWallet, FaCreditCard, FaBook, FaShieldAlt,
  FaChartLine, FaHandshake, FaRupeeSign, FaCheckCircle,
  FaArrowRight, FaHome, FaChevronRight, FaPhoneAlt,
  FaMapMarkerAlt, FaDownload, FaUsers, FaIndustry,
  FaStore, FaUniversity, FaHandHoldingUsd, FaTruck,
  FaClipboardCheck, FaLock, FaGlobe, FaHeadset,
  FaQrcode, FaMobileAlt, FaEnvelope, FaCalendarAlt,
  FaBusinessTime, FaBalanceScale, FaInfoCircle, FaQuestionCircle
} from 'react-icons/fa';
import { GiReceiveMoney, GiPayMoney, GiTakeMyMoney } from 'react-icons/gi';

const Currentaccount = () => {
  const { language } = useLanguage();
  const isMarathi = language === 'mr';
  const [activeSection, setActiveSection] = useState('overview');
  const [showAllFeatures, setShowAllFeatures] = useState(false);
  const [selectedBusinessType, setSelectedBusinessType] = useState('proprietor');

  // Translations
  const translations = {
    en: {
      // Breadcrumb
      home: 'Home',
      account: 'Account',
      currentAccount: 'Current Account',
      
      // Hero Section
      businessBanking: 'BUSINESS BANKING',
      pageTitle: 'Current',
      pageSubtitle: 'Smooth banking for business and professional needs',
      
      // About Section
      aboutTitle: 'About Current Account',
      aboutSubtitle: 'Designed for business excellence',
      aboutPara1: 'A Current Account is specifically designed for businesses, professionals, and institutions that require frequent banking transactions. Unlike savings accounts, current accounts are built to handle large volumes of transactions with higher limits and specialized business banking features.',
      aboutPara2: 'Ideal for managing daily business operations, vendor payments, salary disbursements, and other commercial transactions. Our current account offers the flexibility and functionality that growing businesses need to thrive in today\'s competitive environment.',
      
      // Key Points
      keyPointsTitle: 'Current Account - Key Points',
      
      // Business Services
      businessServices: 'Business Services',
      businessLoans: 'Business Loans',
      termDeposits: 'Term Deposits',
      tradeFinance: 'Trade Finance',
      merchantServices: 'Merchant Services',
      
      // Contact Section
      businessSupport: 'Business Support',
      businessHelpline: 'Business Helpline',
      corporateBranch: 'Corporate Branch',
      findNearestBranch: 'Find nearest business branch',
      emailSupport: 'Email Support',
      
      // CTA Section
      ctaTitle: 'Open a Current Account for Your',
      ctaHighlight: 'Business Today',
      ctaSubtitle: 'Join thousands of successful businesses that trust Shivpratap Bank for their banking needs',
      contactBusinessBranch: 'Contact Business Branch'
    },
    mr: {
      // Breadcrumb
      home: 'होम',
      account: 'खाते',
      currentAccount: 'चालू खाते',
      
      // Hero Section
      businessBanking: 'व्यवसाय बँकिंग',
      pageTitle: 'चालू',
      pageSubtitle: 'व्यवसाय आणि व्यावसायिक गरजांसाठी सुरळीत बँकिंग',
      
      // About Section
      aboutTitle: 'चालू खात्याबद्दल',
      aboutSubtitle: 'व्यवसाय उत्कृष्टतेसाठी डिझाइन केले',
      aboutPara1: 'चालू खाते हे विशेषतः व्यवसाय, व्यावसायिक आणि संस्थांसाठी डिझाइन केलेले आहे ज्यांना वारंवार बँकिंग व्यवहारांची आवश्यकता असते. बचत खात्यांप्रमाणे नाही, चालू खाती मोठ्या प्रमाणात व्यवहार हाताळण्यासाठी आणि विशेष व्यवसाय बँकिंग वैशिष्ट्यांसह उच्च मर्यादांसह बनविली आहेत.',
      aboutPara2: 'दैनंदिन व्यवसाय ऑपरेशन्स, विक्रेता पेमेंट्स, पगार वितरण आणि इतर व्यावसायिक व्यवहार व्यवस्थापित करण्यासाठी आदर्श. आमचे चालू खाते आजच्या स्पर्धात्मक पर्यावरणात वाढणाऱ्या व्यवसायांना फलंदाजी करण्यासाठी लवचिकता आणि कार्यक्षमता ऑफर करते.',
      
      // Key Points
      keyPointsTitle: 'चालू खाते - मुख्य मुद्दे',
      
      // Business Services
      businessServices: 'व्यवसाय सेवा',
      businessLoans: 'व्यवसाय कर्ज',
      termDeposits: 'फिक्स्ड डिपॉझिट',
      tradeFinance: 'ट्रेड फायनान्स',
      merchantServices: 'व्यापारी सेवा',
      
      // Contact Section
      businessSupport: 'व्यवसाय समर्थन',
      businessHelpline: 'व्यवसाय हेल्पलाइन',
      corporateBranch: 'कॉर्पोरेट शाखा',
      findNearestBranch: 'जवळची व्यवसाय शाखा शोधा',
      emailSupport: 'ईमेल समर्थन',
      
      // CTA Section
      ctaTitle: 'आपल्या व्यवसायासाठी चालू खाते उघडा',
      ctaHighlight: 'आज',
      ctaSubtitle: 'आपल्या बँकिंग गरजांसाठी शिवप्रताप बँकेवर विश्वास ठेवणाऱ्या हजारो यशस्वी व्यवसायांमध्ये सामील व्हा',
      contactBusinessBranch: 'व्यवसाय शाखेशी संपर्क साधा'
    }
  };

  const t = translations[language];

  // Current Account Key Points
  const keyPoints = [
    {
      marathi: 'करंट खात्याला चालू खाते असेही म्हणतात',
      english: 'Current Account is also known as a running account',
      icon: <FaExchangeAlt />
    },
    {
      marathi: 'चालू खाते हे व्यवसायाशी संबंधित असते',
      english: 'This account is mainly related to business activities',
      icon: <FaBriefcase />
    },
    {
      marathi: 'कंपनी, सार्वजनिक उपक्रम व व्यावसायिक व्यवहारासाठी हे खाते वापरले जाते',
      english: 'Used by companies, public institutions, and for business transactions',
      icon: <FaIndustry />
    }
  ];

  return (
    <div className="font-sans bg-gradient-to-b from-gray-50 to-white">
      {/* 1. Professional Hero Banner */}
      <section 
        className="relative h-[500px] overflow-hidden bg-gradient-to-br from-blue-700 to-blue-900"
      >
        {/* Business Pattern Overlay */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23ffffff' fill-opacity='0.4' fill-rule='evenodd'/%3E%3C/svg%3E")`,
            backgroundSize: '300px'
          }}></div>
        </div>

        <div className="relative h-full flex flex-col justify-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Business Badge */}
            <div className="flex items-center mb-6">
              <div className="bg-white text-blue-700 px-4 py-2 rounded-full font-bold flex items-center">
                <FaBriefcase className="mr-2" />
                {t.businessBanking}
              </div>
            </div>

            {/* Breadcrumb */}
            <nav className="flex items-center text-blue-100 text-sm mb-8">
              <a href="/" className="flex items-center hover:text-white transition-colors">
                <FaHome className="mr-2" />
                {t.home}
              </a>
              <FaChevronRight className="mx-2 opacity-50" />
              <a href="/account" className="hover:text-white transition-colors">{t.account}</a>
              <FaChevronRight className="mx-2 opacity-50" />
              <span className="font-semibold text-white">{t.currentAccount}</span>
            </nav>

            {/* Main Heading */}
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
              {t.pageTitle} <span className="bg-gradient-to-r from-blue-300 to-cyan-300 bg-clip-text text-transparent">Account</span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mb-8">
              {t.pageSubtitle}
            </p>

            {/* Business Stats */}
            {/* <div className="flex flex-wrap gap-6 mt-8">
              <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-xl px-6 py-4 border border-blue-300 border-opacity-30">
                <div className="text-blue-100 text-sm opacity-90">Min Balance</div>
                <div className="text-3xl font-bold text-white">₹10,000</div>
              </div>
              <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-xl px-6 py-4 border border-blue-300 border-opacity-30">
                <div className="text-blue-100 text-sm opacity-90">Unlimited</div>
                <div className="text-3xl font-bold text-white">Transactions</div>
              </div>
              <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-xl px-6 py-4 border border-blue-300 border-opacity-30">
                <div className="text-blue-100 text-sm opacity-90">Free</div>
                <div className="text-3xl font-bold text-white">NEFT up to ₹10L</div>
              </div>
            </div> */}
          </div>
        </div>

        {/* Wave Decoration */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-16">
            <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" 
              opacity=".25" fill="white"></path>
            <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" 
              opacity=".5" fill="white"></path>
            <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" 
              fill="white"></path>
          </svg>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Main Content */}
          <div className="lg:col-span-2 space-y-12">
            {/* 3. About Current Account */}
            <section id="overview" className="scroll-mt-24">
              <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-200">
                <div className="flex items-center mb-8">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-r from-blue-600 to-blue-800 flex items-center justify-center mr-6">
                    <FaBuilding className="text-white text-2xl" />
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold text-gray-800">{t.aboutTitle}</h2>
                    <p className="text-gray-600">{t.aboutSubtitle}</p>
                  </div>
                </div>

                <div className="space-y-6 text-gray-700">
                  <p className="text-lg">
                    {t.aboutPara1}
                  </p>
                  <p>
                    {t.aboutPara2}
                  </p>
                </div>

                {/* Key Points Section */}
                <div className="mt-10 pt-8 border-t border-gray-200">
                  <h3 className="text-2xl font-bold text-gray-800 mb-6">{t.keyPointsTitle}</h3>
                  <div className="space-y-6">
                    {keyPoints.map((point, index) => (
                      <div key={index} className="flex items-start p-5 rounded-xl bg-gradient-to-r from-blue-50 to-cyan-50 border border-blue-200">
                        <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-blue-500 to-blue-600 flex items-center justify-center mr-5 flex-shrink-0">
                          <div className="text-white text-xl">
                            {point.icon}
                          </div>
                        </div>
                        <div>
                          <p className="text-blue-800 font-semibold mb-2">{isMarathi ? point.marathi : point.english}</p>
                          <p className="text-gray-700">{isMarathi ? point.english : point.english}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>
          </div>

          {/* Right Column - Sidebar */}
          <div className="space-y-8">

            {/* Business Quick Links */}
            <div className="bg-white rounded-2xl shadow-xl p-6 border border-gray-200">
              <h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center">
                <FaBriefcase className="text-blue-600 mr-3" />
                {t.businessServices}
              </h3>
              <div className="space-y-3">
                <button className="flex items-center p-4 rounded-xl hover:bg-gray-50 transition-colors border border-gray-100 w-full text-left">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-green-500 to-emerald-500 flex items-center justify-center mr-4">
                    <FaHandHoldingUsd className="text-white" />
                  </div>
                  <span className="font-medium text-gray-800">{t.businessLoans}</span>
                </button>
                <button className="flex items-center p-4 rounded-xl hover:bg-gray-50 transition-colors border border-gray-100 w-full text-left">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center mr-4">
                    <FaUniversity className="text-white" />
                  </div>
                  <span className="font-medium text-gray-800">{t.termDeposits}</span>
                </button>
                <button className="flex items-center p-4 rounded-xl hover:bg-gray-50 transition-colors border border-gray-100 w-full text-left">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-amber-500 to-yellow-500 flex items-center justify-center mr-4">
                    <FaTruck className="text-white" />
                  </div>
                  <span className="font-medium text-gray-800">{t.tradeFinance}</span>
                </button>
                <button className="flex items-center p-4 rounded-xl hover:bg-gray-50 transition-colors border border-gray-100 w-full text-left">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-teal-500 to-cyan-500 flex items-center justify-center mr-4">
                    <FaStore className="text-white" />
                  </div>
                  <span className="font-medium text-gray-800">{t.merchantServices}</span>
                </button>
              </div>
            </div>

            {/* Business Contact Card */}
            <div className="bg-gradient-to-br from-emerald-900 to-green-800 rounded-2xl shadow-xl p-6 border border-emerald-700">
              <h3 className="text-xl font-bold text-white mb-6">{t.businessSupport}</h3>
              <div className="space-y-4">
                <div className="flex items-center p-4 bg-emerald-800/30 rounded-xl border border-emerald-600">
                  <FaHeadset className="text-emerald-300 text-2xl mr-4" />
                  <div>
                    <div className="font-medium text-white">{t.businessHelpline}</div>
                    <div className="text-emerald-200 font-bold text-lg">1800-456-7890</div>
                  </div>
                </div>
                <div className="flex items-center p-4 bg-emerald-800/30 rounded-xl border border-emerald-600">
                  <FaMapMarkerAlt className="text-emerald-300 text-2xl mr-4" />
                  <div>
                    <div className="font-medium text-white">{t.corporateBranch}</div>
                    <div className="text-emerald-200">{t.findNearestBranch}</div>
                  </div>
                </div>
                <div className="flex items-center p-4 bg-emerald-800/30 rounded-xl border border-emerald-600">
                  <FaEnvelope className="text-emerald-300 text-2xl mr-4" />
                  <div>
                    <div className="font-medium text-white">{t.emailSupport}</div>
                    <div className="text-emerald-200">business@shivpratapbank.com</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 8. Business CTA Banner */}
        <section id="apply" className="scroll-mt-24 mt-16">
          <div 
            className="relative overflow-hidden rounded-2xl shadow-2xl"
            style={{
              background: 'linear-gradient(135deg, #0d47a1 0%, #1976d2 50%, #42a5f5 100%)'
            }}
          >
            {/* Business Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0" style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
              }}></div>
            </div>

            <div className="relative p-12 text-center text-white z-10">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                  {t.ctaTitle} <span className="bg-gradient-to-r from-cyan-300 to-white bg-clip-text text-transparent">{t.ctaHighlight}</span>
                </h2>
                <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
                  {t.ctaSubtitle}
                </p>
                
                <div className="flex flex-col sm:flex-row gap-6 justify-center">
                  <button className="bg-transparent border-2 border-white text-white px-10 py-5 rounded-full font-bold text-xl hover:bg-white hover:bg-opacity-10 transition-all duration-300">
                    {t.contactBusinessBranch}
                  </button>
                </div>
                
                {/* <div className="mt-10 pt-8 border-t border-blue-300">
                  <div className="flex flex-wrap justify-center gap-8">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-cyan-300">₹10K</div>
                      <div className="text-blue-200">Min Balance</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-cyan-300">Unlimited</div>
                      <div className="text-blue-200">Transactions</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-cyan-300">Free</div>
                      <div className="text-blue-200">NEFT up to ₹10L</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-cyan-300">24/7</div>
                      <div className="text-blue-200">Business Support</div>
                    </div>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Custom CSS */}
      <style jsx>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        
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
          animation: fade-in-up 0.6s ease-out;
        }
        
        /* Smooth scrolling */
        html {
          scroll-behavior: smooth;
        }
      `}</style>
    </div>
  );
};

export default Currentaccount;