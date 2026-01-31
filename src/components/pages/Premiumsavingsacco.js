import React from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import { 
  FaCrown, FaStar, FaShieldAlt,
  FaEnvelope, FaMapMarkerAlt,
  FaCreditCard, FaUserTie,
  FaHandHoldingUsd, FaChevronRight, FaHome,
  FaChartLine, FaHeadset, FaUniversity
} from 'react-icons/fa';

const Premiumsavingsacco = () => {
  const { language } = useLanguage();

  // Translations
  const translations = {
    en: {
      // Breadcrumb
      home: 'Home',
      account: 'Account',
      premiumSavingsAccount: 'Premium Savings Account',
      
      // Hero Section
      premiumBanking: 'PREMIUM BANKING',
      pageTitle: 'Premium Savings',
      pageSubtitle: 'Higher returns. Smarter banking. Premium benefits.',
      
      // Stats
      interestRate: 'Interest Rate',
      minBalance: 'Min Balance',
      premiumServices: 'Premium Services',
      
      // About Section
      aboutTitle: 'About Premium Savings Account',
      aboutSubtitle: 'Exclusive banking for exceptional individuals',
      aboutPara1: 'The Premium Savings Account is designed for discerning customers who seek more than just basic banking. It combines the security of traditional savings with the sophistication of premium financial services.',
      aboutPara2: 'Tailored for professionals, business owners, and high-net-worth individuals, this account offers enhanced interest rates, priority services, and exclusive benefits that elevate your banking experience. Enjoy the perfect blend of growth, security, and convenience with our premium offerings.',
      
      // Ideal For
      idealFor: 'Ideal For',
      professionalsExecutives: 'Professionals & Executives',
      businessOwners: 'Business Owners',
      seniorCitizens: 'Senior Citizens',
      highIncomeEarners: 'High-Income Earners',
      
      // Exclusive Privileges
      exclusivePrivileges: 'Exclusive Privileges',
      priorityBankingServices: 'Priority Banking Services',
      higherTransactionLimits: 'Higher Transaction Limits',
      dedicatedManager: 'Dedicated Manager',
      waivedOffCharges: 'Waived Off Charges',
      
      // Premium Services
      premiumServicesTitle: 'Premium Services',
      wealthManagement: 'Wealth Management',
      premiumLoans: 'Premium Loans',
      priorityFDs: 'Priority FDs',
      premiumCards: 'Premium Cards',
      
      // Contact Section
      premiumSupport: 'Premium Support',
      premiumHelpline: '24/7 Premium Helpline',
      premiumLounge: 'Premium Lounge',
      visitLounge: 'Visit our exclusive lounge',
      emailSupport: 'Email Support',
      
      // CTA Section
      upgradeTo: 'Upgrade to',
      premium: 'Premium',
      today: 'Today',
      ctaSubtitle: 'Join the elite group of customers who enjoy premium banking benefits, higher returns, and exclusive services',
      scheduleBranchVisit: 'Schedule Branch Visit'
    },
    mr: {
      // Breadcrumb
      home: 'होम',
      account: 'खाते',
      premiumSavingsAccount: 'प्रीमियम बचत खाते',
      
      // Hero Section
      premiumBanking: 'प्रीमियम बँकिंग',
      pageTitle: 'प्रीमियम बचत',
      pageSubtitle: 'अधिक परतावा. चांगले बँकिंग. प्रीमियम फायदे.',
      
      // Stats
      interestRate: 'व्याज दर',
      minBalance: 'किमान शिल्लक',
      premiumServices: 'प्रीमियम सेवा',
      
      // About Section
      aboutTitle: 'प्रीमियम बचत खात्याबद्दल',
      aboutSubtitle: 'असामान्य व्यक्तींसाठी अनन्य बँकिंग',
      aboutPara1: 'प्रीमियम बचत खाते हे अशा ग्राहकांसाठी डिझाइन केलेले आहे जे केवळ मूलभूत बँकिंगपेक्षा अधिक शोधतात. हे पारंपारिक बचतीची सुरक्षितता आणि प्रीमियम आर्थिक सेवांची परिष्कारशीलता जोडते.',
      aboutPara2: 'व्यावसायिक, व्यवसाय मालक आणि उच्च-कमाई करणाऱ्या व्यक्तींसाठी तयार केलेले, हे खाते वाढीव व्याज दर, प्राधान्य सेवा आणि अनन्य फायदे देते जे तुमचे बँकिंग अनुभव उंचावतात. आमच्या प्रीमियम ऑफरिंग्ससह वाढ, सुरक्षितता आणि सोयीचा परिपूर्ण मिश्रण आनंद घ्या.',
      
      // Ideal For
      idealFor: 'योग्य',
      professionalsExecutives: 'व्यावसायिक आणि अधिकारी',
      businessOwners: 'व्यवसाय मालक',
      seniorCitizens: 'वरिष्ठ नागरिक',
      highIncomeEarners: 'उच्च कमाई करणारे',
      
      // Exclusive Privileges
      exclusivePrivileges: 'अनन्य विशेषाधिकार',
      priorityBankingServices: 'प्राधान्य बँकिंग सेवा',
      higherTransactionLimits: 'उच्च व्यवहार मर्यादा',
      dedicatedManager: 'समर्पित व्यवस्थापक',
      waivedOffCharges: 'शुल्क माफ',
      
      // Premium Services
      premiumServicesTitle: 'प्रीमियम सेवा',
      wealthManagement: 'संपत्ती व्यवस्थापन',
      premiumLoans: 'प्रीमियम कर्ज',
      priorityFDs: 'प्राधान्य एफडी',
      premiumCards: 'प्रीमियम कार्ड',
      
      // Contact Section
      premiumSupport: 'प्रीमियम समर्थन',
      premiumHelpline: '२४/७ प्रीमियम हेल्पलाइन',
      premiumLounge: 'प्रीमियम लाउंज',
      visitLounge: 'आमचे अनन्य लाउंज भेट द्या',
      emailSupport: 'ईमेल समर्थन',
      
      // CTA Section
      upgradeTo: 'अपग्रेड करा',
      premium: 'प्रीमियम',
      today: 'आज',
      ctaSubtitle: 'प्रीमियम बँकिंग फायदे, अधिक परतावा आणि अनन्य सेवा आनंद घेणाऱ्या ग्राहकांच्या अभिजात गटात सामील व्हा',
      scheduleBranchVisit: 'शाखा भेट नियोजित करा'
    }
  };

  const t = translations[language];

  return (
    <div className="font-sans bg-gradient-to-b from-gray-50 to-white">
      {/* 1. Premium Hero Banner */}
      <section 
        className="relative h-[500px] overflow-hidden bg-gradient-to-br from-gray-800 to-gray-900"
      >
        {/* Gold Overlay Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-.895-3-2-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-.895-3-2-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-.895-3-2-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-.895-3-2-3-3 1.343-3 3 1.343 3 3 3zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23FFD700' fill-opacity='0.4' fill-rule='evenodd'/%3E%3C/svg%3E")`,
            backgroundSize: '300px'
          }}></div>
        </div>

        <div className="relative h-full flex flex-col justify-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Premium Badge */}
            <div className="flex items-center mb-6">
              <div className="bg-gradient-to-r from-amber-500 to-yellow-500 text-black px-4 py-2 rounded-full font-bold flex items-center">
                <FaCrown className="mr-2" />
                {t.premiumBanking}
              </div>
            </div>

            {/* Breadcrumb */}
            <nav className="flex items-center text-gray-300 text-sm mb-8">
              <button className="flex items-center hover:text-white transition-colors">
                <FaHome className="mr-2" />
                {t.home}
              </button>
              <FaChevronRight className="mx-2 opacity-50" />
              <button className="hover:text-white transition-colors">{t.account}</button>
              <FaChevronRight className="mx-2 opacity-50" />
              <span className="font-semibold text-white">{t.premiumSavingsAccount}</span>
            </nav>

            {/* Main Heading */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4">
              {t.pageTitle} <span className="bg-gradient-to-r from-amber-400 to-yellow-500 bg-clip-text text-transparent">Account</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mb-8">
              {t.pageSubtitle}
            </p>
          </div>
        </div>

        {/* Shiny Border Bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-transparent via-amber-500 to-transparent"></div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Main Content */}
          <div className="lg:col-span-2 space-y-12">
            {/* 3. About Premium Account */}
            <section id="overview" className="scroll-mt-24">
              <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl shadow-2xl p-8 border border-gray-700">
                <div className="flex items-center mb-8">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-amber-500 to-yellow-500 flex items-center justify-center mr-6">
                    <FaCrown className="text-gray-900 text-2xl" />
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold text-white">{t.aboutTitle}</h2>
                    <p className="text-gray-400">{t.aboutSubtitle}</p>
                  </div>
                </div>

                <div className="space-y-6 text-gray-300">
                  <p className="text-lg">
                    {t.aboutPara1}
                  </p>
                  <p>
                    {t.aboutPara2}
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
                  <div className="bg-gradient-to-br from-amber-900/30 to-yellow-900/30 rounded-2xl p-6 border border-amber-500/20">
                    <h4 className="font-bold text-white mb-4 flex items-center">
                      <FaUserTie className="text-amber-400 mr-3" />
                      {t.idealFor}
                    </h4>
                    <ul className="space-y-3">
                      {[t.professionalsExecutives, t.businessOwners, t.seniorCitizens, t.highIncomeEarners].map((item, idx) => (
                        <li key={idx} className="flex items-center text-gray-300">
                          <div className="w-2 h-2 bg-amber-500 rounded-full mr-3"></div>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-gradient-to-br from-blue-900/30 to-cyan-900/30 rounded-2xl p-6 border border-blue-500/20">
                    <h4 className="font-bold text-white mb-4 flex items-center">
                      <FaShieldAlt className="text-blue-400 mr-3" />
                      {t.exclusivePrivileges}
                    </h4>
                    <ul className="space-y-3">
                      {[t.priorityBankingServices, t.higherTransactionLimits, t.dedicatedManager, t.waivedOffCharges].map((item, idx) => (
                        <li key={idx} className="flex items-center text-gray-300">
                          <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </section>

          </div>

          {/* Right Column - Sidebar */}
          <div className="space-y-8">

            {/* Premium Quick Links */}
            <div className="bg-white rounded-3xl shadow-xl p-6 border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                <FaStar className="text-amber-500 mr-3" />
                {t.premiumServicesTitle}
              </h3>
              <div className="space-y-3">
                <button className="flex items-center p-4 rounded-xl hover:bg-gray-50 transition-colors border border-gray-100 w-full text-left">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center mr-4">
                    <FaChartLine className="text-white" />
                  </div>
                  <span className="font-medium text-gray-800">{t.wealthManagement}</span>
                </button>
                <button className="flex items-center p-4 rounded-xl hover:bg-gray-50 transition-colors border border-gray-100 w-full text-left">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-emerald-500 to-green-500 flex items-center justify-center mr-4">
                    <FaHandHoldingUsd className="text-white" />
                  </div>
                  <span className="font-medium text-gray-800">{t.premiumLoans}</span>
                </button>
                <button className="flex items-center p-4 rounded-xl hover:bg-gray-50 transition-colors border border-gray-100 w-full text-left">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center mr-4">
                    <FaUniversity className="text-white" />
                  </div>
                  <span className="font-medium text-gray-800">{t.priorityFDs}</span>
                </button>
                <button className="flex items-center p-4 rounded-xl hover:bg-gray-50 transition-colors border border-gray-100 w-full text-left">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-amber-500 to-yellow-500 flex items-center justify-center mr-4">
                    <FaCreditCard className="text-white" />
                  </div>
                  <span className="font-medium text-gray-800">{t.premiumCards}</span>
                </button>
              </div>
            </div>

            {/* Premium Contact Card */}
            <div className="bg-gradient-to-br from-blue-900 to-blue-800 rounded-3xl shadow-xl p-6 border border-blue-700">
              <h3 className="text-xl font-bold text-white mb-6">{t.premiumSupport}</h3>
              <div className="space-y-4">
                <div className="flex items-center p-4 bg-blue-800/30 rounded-xl border border-blue-700">
                  <FaHeadset className="text-blue-300 text-2xl mr-4" />
                  <div>
                    <div className="font-medium text-white">{t.premiumHelpline}</div>
                    <div className="text-blue-200 font-bold text-lg">1800-258-7890</div>
                  </div>
                </div>
                <div className="flex items-center p-4 bg-blue-800/30 rounded-xl border border-blue-700">
                  <FaMapMarkerAlt className="text-blue-300 text-2xl mr-4" />
                  <div>
                    <div className="font-medium text-white">{t.premiumLounge}</div>
                    <div className="text-blue-200">{t.visitLounge}</div>
                  </div>
                </div>
                <div className="flex items-center p-4 bg-blue-800/30 rounded-xl border border-blue-700">
                  <FaEnvelope className="text-blue-300 text-2xl mr-4" />
                  <div>
                    <div className="font-medium text-white">{t.emailSupport}</div>
                    <div className="text-blue-200">premium@shivpratapbank.com</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 8. Premium CTA Banner */}
        <section id="apply" className="scroll-mt-24 mt-16">
          <div 
            className="relative overflow-hidden rounded-3xl shadow-2xl"
            style={{
              background: 'linear-gradient(135deg, rgba(21, 21, 21, 0.95) 0%, rgba(42, 42, 42, 0.9) 100%)',
              border: '1px solid rgba(255, 215, 0, 0.2)'
            }}
          >
            {/* Animated Gold Particles */}
            <div className="absolute inset-0 overflow-hidden">
              {[...Array(20)].map((_, i) => (
                <div 
                  key={i}
                  className="absolute w-2 h-2 bg-amber-400 rounded-full animate-pulse"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    animationDelay: `${Math.random() * 2}s`,
                    opacity: Math.random() * 0.5 + 0.2
                  }}
                />
              ))}
            </div>

            <div className="relative p-12 text-center text-white z-10">
              <div className="max-w-3xl mx-auto">
                <FaCrown className="text-amber-400 text-5xl mb-6 mx-auto" />
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                  {t.upgradeTo} <span className="bg-gradient-to-r from-amber-400 to-yellow-500 bg-clip-text text-transparent">{t.premium}</span> {t.today}
                </h2>
                <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
                  {t.ctaSubtitle}
                </p>
                
                <div className="flex flex-col sm:flex-row gap-6 justify-center">
                  <button className="bg-transparent border-2 border-amber-500 text-amber-400 px-10 py-5 rounded-full font-bold text-xl hover:bg-amber-500 hover:bg-opacity-10 transition-all duration-300">
                    {t.scheduleBranchVisit}
                  </button>
                </div>
                
                {/* <div className="mt-10 pt-8 border-t border-gray-700">
                  <div className="flex flex-wrap justify-center gap-8">
                    <div className="text-center">
                      <div className="text-gray-400">Interest Rate</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-amber-300">₹50K</div>
                      <div className="text-gray-400">Min Balance</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-amber-300">24/7</div>
                      <div className="text-gray-400">Premium Support</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-amber-300">0</div>
                      <div className="text-gray-400">Hidden Charges</div>
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
        
        @keyframes pulse {
          0%, 100% { opacity: 0.2; }
          50% { opacity: 0.8; }
        }
        
        .animate-pulse {
          animation: pulse 2s infinite;
        }
        
        /* Custom slider thumb */
        input[type="range"]::-webkit-slider-thumb {
          appearance: none;
          height: 24px;
          width: 24px;
          border-radius: 50%;
          background: #1f2937;
          border: 4px solid white;
          cursor: pointer;
          box-shadow: 0 0 10px rgba(0,0,0,0.3);
        }
        
        input[type="range"]::-moz-range-thumb {
          height: 24px;
          width: 24px;
          border-radius: 50%;
          background: #1f2937;
          border: 4px solid white;
          cursor: pointer;
          box-shadow: 0 0 10px rgba(0,0,0,0.3);
        }
      `}</style>
    </div>
  );
};

export default Premiumsavingsacco;