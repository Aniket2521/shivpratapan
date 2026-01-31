import React, { useState, useEffect } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import { 
  FaPiggyBank, FaUserFriends, FaCoins, FaHeart,
  FaChartLine, FaHandHoldingUsd, FaShieldAlt,
  FaCalendarAlt, FaRupeeSign, FaPercent, FaClock,
  FaBuilding, FaHome, FaMobileAlt, FaDoorOpen,
  FaArrowRight, FaCheckCircle, FaStar, FaUserTie,
  FaGraduationCap, FaRing, FaMoneyBillWave,
  FaCalculator, FaFileContract, FaHandshake, FaPhoneAlt
} from 'react-icons/fa';

const Plan = () => {
  const { language } = useLanguage();
  const isMarathi = language === 'mr';

  // Color constants
  const primaryColor = '#b03462';
  const secondaryColor = '#ffd166';
  const accentColor = '#06d6a0';
  const darkColor = '#1a1a2e';
  const lightColor = '#f8f9fa';

  // Translations
  const translations = {
    en: {
      pageTitle: 'Financial Plans & Schemes',
      pageSubtitle: 'Explore our comprehensive range of deposit and loan schemes designed to meet all your financial needs',
      depositSchemes: 'Deposit Schemes',
      loanSchemes: 'Loan Schemes',
      goldLoanSchemes: 'Gold Loan Schemes',
      depositDesc: 'Secure your future with our range of deposit schemes designed for every life stage and financial goal.',
      loanDesc: 'Get quick financial assistance with our easy loan schemes featuring minimal documentation and fast approval.',
      goldDesc: 'Instant loans against your gold with flexible repayment options and competitive interest rates.',
      keyFeatures: 'Key Features',
      schemeHighlights: 'Scheme Highlights',
      interestRate: 'Interest Rate',
      maxAmountLabel: 'Max Amount',
      tenureLabel: 'Tenure',
      keyFeatureLabel: 'Key Feature',
      goldLoanComparison: 'Gold Loan Schemes Comparison',
      whyChooseDeposits: 'Why Choose Our Deposit Schemes?',
      needHelp: 'Need Help Choosing the Right Scheme?',
      needHelpDesc: 'Our financial advisors are here to help you select the perfect scheme based on your goals and requirements.',
      callNow: 'Call Now: 1800-123-4567',
      visitBranch: 'Visit Nearest Branch',
      // Deposit Schemes
      pensionTitle: 'Pension Deposit Scheme',
      pensionTagline: 'Old age financial security scheme',
      pensionDesc: 'Small savings today for a worry-free retirement. Regular income support after maturity. Ideal for senior citizens. Safe and secure long-term investment.',
      pensionFeatures: ['Regular monthly income', 'Worry-free retirement', 'Safe & secure', 'Ideal for seniors', 'Long-term investment'],
      rdTitle: 'Recurring Deposit Scheme (RD)',
      rdTagline: 'Small monthly savings plan',
      rdDesc: 'Suitable for salaried & self-employed persons. Disciplined saving habit. Helps fulfill future goals. Fixed tenure with assured returns.',
      rdFeatures: ['Monthly savings', 'Disciplined habit', 'Future goals', 'Assured returns', 'Flexible tenure'],
      halfPriceTitle: 'Half Price Deposit Scheme',
      halfPriceTagline: 'Special 150% return scheme',
      halfPriceDesc: 'Deposit once, get 1.5 times return. Ideal for short-term financial goals. High return on investment. Trusted Shivpratap Multistate Scheme.',
      halfPriceFeatures: ['150% returns', 'Short-term goals', 'High ROI', 'One-time deposit', 'Trusted scheme'],
      subhmangalTitle: 'Subhmangal Deposit Scheme',
      subhmangalTagline: 'Designed for children\'s wedding expenses',
      subhmangalDesc: 'Planned savings for a memorable ceremony. No compromise on family dreams. Safe investment with assured maturity value. Emotion-based long-term saving plan.',
      subhmangalFeatures: ['Wedding planning', 'Family dreams', 'Assured maturity', 'Emotional savings', 'Long-term plan'],
      billionaireTitle: 'Billionaire Deposit Scheme',
      billionaireTagline: 'High-return long-term deposit plan',
      billionaireDesc: 'Monthly investment of ₹21,000. Maturity amount up to ₹1 Crore. Investment period: 18 years. Ideal for wealth creation.',
      billionaireFeatures: ['₹1 Crore target', '18 years tenure', 'Wealth creation', 'Monthly investment', 'High returns'],
      // Loan Schemes
      personalTitle: 'Personal Loan',
      personalTagline: 'Quick solution for short-term financial needs',
      personalDesc: 'Minimal documentation. Fast approval & disbursement. Flexible repayment options. Suitable for emergencies.',
      personalFeatures: ['Quick approval', 'Minimal docs', 'Flexible EMI', 'Emergency use', 'Fast disbursal'],
      personalHighlights: ['Processing Fee: 1% of loan amount', 'Tenure: 12-60 months', 'Interest: 10.5% - 15% p.a.'],
      // Gold Loan Schemes
      emiGoldTitle: 'EMI Gold Loan',
      regularGoldTitle: 'Regular Gold Loan',
      easyGoldTitle: 'Easy Gold Loan',
      goldOverdraftTitle: 'Gold Loan Overdraft (C.C.)',
      bulletGoldTitle: 'Bullet Gold Loan',
      doorstepGoldTitle: 'Door Step (Home Reach) Gold Loan',
      // Benefits
      safeSecure: 'Safe & Secure',
      safeSecureDesc: 'RBI insured deposits with guaranteed returns',
      highReturns: 'High Returns',
      highReturnsDesc: 'Competitive interest rates for better growth',
      flexibleTenure: 'Flexible Tenure',
      flexibleTenureDesc: 'Choose tenure from 1 month to 10 years',
      easyWithdrawal: 'Easy Withdrawal',
      easyWithdrawalDesc: 'Premature withdrawal options available'
    },
    mr: {
      pageTitle: 'आर्थिक योजना आणि योजना',
      pageSubtitle: 'आपल्या सर्व आर्थिक गरजा पूर्ण करण्यासाठी डिपॉझिट आणि कर्ज योजनांची आमची व्यापक श्रेणी शोधा',
      depositSchemes: 'ठेव योजना',
      loanSchemes: 'कर्ज योजना',
      goldLoanSchemes: 'सोने कर्ज योजना',
      depositDesc: 'प्रत्येक जीवन श्रेणी आणि आर्थिक लक्ष्यांसाठी डिझाइन केलेल्या आमच्या ठेव योजनांच्या श्रेणीसह आपले भविष्य सुरक्षित करा.',
      loanDesc: 'किमान दस्तऐवजीकरण आणि जलद मंजुरीसह आमच्या सोप्या कर्ज योजनांसह जलद आर्थिक सहाय्य मिळवा.',
      goldDesc: 'लवचिक परतफेड पर्याय आणि स्पर्धात्मक व्याज दरांसह आपल्या सोन्यावर तातडीचे कर्ज.',
      keyFeatures: 'मुख्य वैशिष्ट्ये',
      schemeHighlights: 'योजना मुख्य गुणविशेष',
      interestRate: 'व्याज दर',
      maxAmountLabel: 'कमाल रक्कम',
      tenureLabel: 'कालावधी',
      keyFeatureLabel: 'मुख्य वैशिष्ट्य',
      goldLoanComparison: 'सोने कर्ज योजना तुलना',
      whyChooseDeposits: 'आमच्या ठेव योजना का निवडाव्यात?',
      needHelp: 'योग्य योजना निवडण्यात मदत हवी का?',
      needHelpDesc: 'आपल्या लक्ष्यांनुसार आणि आवश्यकतांनुसार योग्य योजना निवडण्यासाठी आमले आर्थिक सल्लागार येथे आहेत.',
      callNow: 'आता कॉल करा: 1800-123-4567',
      visitBranch: 'जवळची शाखा भेट द्या',
      // Deposit Schemes
      pensionTitle: 'पेन्शन ठेव योजना',
      pensionTagline: 'वृद्धापकाळीची आर्थिक सुरक्षा योजना',
      pensionDesc: 'चिंतामुक्त निवृत्तीसाठी आजची लहान बचत. परिपक्वतेनंतर नियमित उत्पन्न समर्थन. वरिष्ठ नागरिकांसाठी उत्तम. सुरक्षित आणि दीर्घकालीन गुंतवणूक.',
      pensionFeatures: ['नियमित मासिक उत्पन्न', 'चिंतामुक्त निवृत्ती', 'सुरक्षित आणि सुरक्षित', 'वरिष्ठांसाठी उत्तम', 'दीर्घकालीन गुंतवणूक'],
      rdTitle: 'आवर्ती ठेव योजना (आरडी)',
      rdTagline: 'लहान मासिक बचत योजना',
      rdDesc: 'वेतनभोगी आणि स्वयं-रोजगारी व्यक्तींसाठी योग्य. अनुशासित बचतची सवय. भविष्यातील लक्ष्ये पूर्ण करण्यास मदत करते. आश्वासित परताव्यासह निश्चित कालावधी.',
      rdFeatures: ['मासिक बचत', 'अनुशासित सवय', 'भविष्यातील लक्ष्ये', 'आश्वासित परतावा', 'लवचिक कालावधी'],
      halfPriceTitle: 'अर्धवेळ ठेव योजना',
      halfPriceTagline: 'विशेष 150% परतावा योजना',
      halfPriceDesc: 'एकदा ठेव करा, 1.5 पट परतावा मिळवा. अल्पकालीन आर्थिक लक्ष्यांसाठी उत्तम. गुंतवणुकीवर उच्च परतावा. विश्वसनीय शिवप्रताप मल्टीस्टेट योजना.',
      halfPriceFeatures: ['150% परतावा', 'अल्पकालीन लक्ष्ये', 'उच्च आरओआय', 'एकदा ठेव', 'विश्वसनीय योजना'],
      subhmangalTitle: 'शुभमंगल ठेव योजना',
      subhmangalTagline: 'मुलांच्या लग्न खर्चांसाठी डिझाइन केलेली',
      subhmangalDesc: 'आठवणीत राहणारे समारंभासाठी नियोजित बचत. कुटुंबाच्या स्वप्नांवर तडजोड नाही. आश्वासित परिपक्वता मूल्यासह सुरक्षित गुंतवणूक. भावनावर आधारित दीर्घकालीन बचत योजना.',
      subhmangalFeatures: ['लग्न नियोजन', 'कुटुंबाची स्वप्ने', 'आश्वासित परिपक्वता', 'भावनात्मक बचत', 'दीर्घकालीन योजना'],
      billionaireTitle: 'अब्जाधीश ठेव योजना',
      billionaireTagline: 'उच्च-परतावा दीर्घकालीन ठेव योजना',
      billionaireDesc: 'मासिक गुंतवणूक ₹21,000. परिपक्वता रक्कम ₹1 कोटीपर्यंत. गुंतवणुकीचा कालावधी: 18 वर्षे. संपत्ती निर्मितीसाठी उत्तम.',
      billionaireFeatures: ['₹1 कोटी लक्ष्य', '18 वर्षांचा कालावधी', 'संपत्ती निर्मिती', 'मासिक गुंतवणूक', 'उच्च परतावा'],
      // Loan Schemes
      personalTitle: 'वैयक्तिक कर्ज',
      personalTagline: 'अल्पकालीन आर्थिक गरजांसाठी जलद उपाय',
      personalDesc: 'किमान दस्तऐवजीकरण. जलद मंजुरी आणि वितरण. लवचिक परतफेड पर्याय. आपत्कालीन वापरासाठी योग्य.',
      personalFeatures: ['जलद मंजुरी', 'किमान दस्तऐवज', 'लवचिक ईएमआय', 'आपत्कालीन वापर', 'जलद वितरण'],
      personalHighlights: ['प्रक्रिया शुल्क: कर्ज रक्कमीचे 1%', 'कालावधी: 12-60 महिने', 'व्याज: 10.5% - 15% वार्षिक'],
      // Gold Loan Schemes
      emiGoldTitle: 'ईएमआय सोने कर्ज',
      regularGoldTitle: 'नियमित सोने कर्ज',
      easyGoldTitle: 'सोपे सोने कर्ज',
      goldOverdraftTitle: 'सोने कर्ज ओव्हरड्राफ्ट (सी.सी.)',
      bulletGoldTitle: 'बुलेट सोने कर्ज',
      doorstepGoldTitle: 'दारस्थ (होम रीच) सोने कर्ज',
      // Benefits
      safeSecure: 'सुरक्षित आणि सुरक्षित',
      safeSecureDesc: 'आरबीआय विमा केलेल्या ठेवींसह आश्वासित परतावा',
      highReturns: 'उच्च परतावा',
      highReturnsDesc: 'चांगल्या वाढीसाठी स्पर्धात्मक व्याज दर',
      flexibleTenure: 'लवचिक कालावधी',
      flexibleTenureDesc: '1 महिन्यापासून 10 वर्षापर्यंत कालावधी निवडा',
      easyWithdrawal: 'सोपी काढणी',
      easyWithdrawalDesc: 'समयपूर्व काढण्याचे पर्याय उपलब्ध'
    }
  };

  const t = translations[language];

  // State for active category
  const [activeCategory, setActiveCategory] = useState('deposit');
  const [selectedPlan, setSelectedPlan] = useState(null);

  // Handle hash navigation
  useEffect(() => {
    const hash = window.location.hash.replace('#', '');
    if (hash) {
      // Set active category based on hash
      if (hash.includes('pension') || hash.includes('recurring') || hash.includes('half-price') || 
          hash.includes('subhmangal') || hash.includes('billionaire')) {
        setActiveCategory('deposit');
      } else if (hash.includes('personal')) {
        setActiveCategory('loan');
      } else if (hash.includes('gold')) {
        setActiveCategory('gold');
      }

      // Scroll to the specific section after a short delay
      setTimeout(() => {
        const element = document.getElementById(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'center' });
          // Add highlight effect
          element.classList.add('ring-4', 'ring-yellow-400', 'ring-opacity-75');
          setTimeout(() => {
            element.classList.remove('ring-4', 'ring-yellow-400', 'ring-opacity-75');
          }, 2000);
        }
      }, 100);
    }
  }, []);

  // Deposit Schemes Data
  const depositSchemes = [
    {
      id: 'pension',
      title: t.pensionTitle,
      icon: <FaUserTie />,
      tagline: t.pensionTagline,
      description: t.pensionDesc,
      features: t.pensionFeatures,
      color: 'from-blue-500 to-blue-700'
    },
    {
      id: 'recurring',
      title: t.rdTitle,
      icon: <FaPiggyBank />,
      tagline: t.rdTagline,
      description: t.rdDesc,
      features: t.rdFeatures,
      color: 'from-green-500 to-green-700'
    },
    {
      id: 'half-price',
      title: t.halfPriceTitle,
      icon: <FaStar />,
      tagline: t.halfPriceTagline,
      description: t.halfPriceDesc,
      features: t.halfPriceFeatures,
      color: 'from-purple-500 to-purple-700'
    },
    {
      id: 'subhmangal',
      title: t.subhmangalTitle,
      icon: <FaRing />,
      tagline: t.subhmangalTagline,
      description: t.subhmangalDesc,
      features: t.subhmangalFeatures,
      color: 'from-pink-500 to-pink-700'
    },
    {
      id: 'billionaire',
      title: t.billionaireTitle,
      icon: <FaChartLine />,
      tagline: t.billionaireTagline,
      description: t.billionaireDesc,
      features: t.billionaireFeatures,
      color: 'from-yellow-500 to-yellow-700'
    }
  ];

  // Loan Schemes Data
  const loanSchemes = [
    {
      id: 'personal',
      title: t.personalTitle,
      icon: <FaHandHoldingUsd />,
      tagline: t.personalTagline,
      description: t.personalDesc,
      features: t.personalFeatures,
      highlights: t.personalHighlights,
      color: 'from-blue-500 to-indigo-600'
    }
  ];

  // Gold Loan Schemes Data
  const goldLoanSchemes = [
    {
      id: 'emi-gold',
      title: t.emiGoldTitle,
      icon: <FaCalculator />,
      interestRate: '0.69% per month',
      maxAmount: '₹50,000',
      tenure: '12 months',
      description: isMarathi ? 'मासिक ईएमआय देय आवश्यक. मासिक व्याज गणना.' : 'Monthly EMI payment required. Monthly interest calculation.',
      features: isMarathi ? [
        'मासिक ईएमआय',
        '₹50,000 मर्यादा',
        '1 वर्ष कालावधी',
        'मासिक व्याज'
      ] : [
        'Monthly EMI',
        '₹50,000 limit',
        '1 year tenure',
        'Monthly interest'
      ],
      color: 'from-yellow-500 to-amber-600'
    },
    {
      id: 'regular-gold',
      title: t.regularGoldTitle,
      icon: <FaCoins />,
      interestRate: '0.83% per month',
      maxAmount: '₹35,000 per tola',
      tenure: '12 months',
      description: isMarathi ? 'मासिक व्याज देय आवश्यक. मासिक व्याज गणना.' : 'Monthly interest payment required. Monthly interest calculation.',
      features: isMarathi ? [
        'मासिक व्याज',
        '₹35,000/तोला',
        '1 वर्ष कालावधी',
        'नियमित देय'
      ] : [
        'Monthly interest',
        '₹35,000/tola',
        '1 year tenure',
        'Regular payment'
      ],
      color: 'from-yellow-600 to-yellow-800'
    },
    {
      id: 'easy-gold',
      title: t.easyGoldTitle,
      icon: <FaHandshake />,
      interestRate: '0.99% per month',
      maxAmount: '₹50,000',
      tenure: '12 months',
      description: isMarathi ? 'मासिक व्याज देय आवश्यक. सोपे आणि जलद कर्ज प्रक्रिया.' : 'Monthly interest payment required. Simple & quick loan process.',
      features: isMarathi ? [
        'सोपी प्रक्रिया',
        '₹50,000 मर्यादा',
        'जलद मंजुरी',
        'मासिक व्याज'
      ] : [
        'Simple process',
        '₹50,000 limit',
        'Quick approval',
        'Monthly interest'
      ],
      color: 'from-orange-500 to-orange-700'
    },
    {
      id: 'gold-overdraft',
      title: t.goldOverdraftTitle,
      icon: <FaFileContract />,
      interestRate: '15% per annum',
      maxAmount: 'Based on gold valuation',
      tenure: '24 months',
      description: isMarathi ? 'वर्तमान सोन्याच्या मूल्यावर आधारित कर्ज. वापरलेल्या रकमेवरच व्याज लागू. त्रैमासिक व्याज गणना.' : 'Loan based on current gold valuation. Interest applicable only on utilized amount. Quarterly interest calculation.',
      features: isMarathi ? [
        'ओव्हरड्राफ्ट सुविधा',
        'वापरलेल्यावर व्याज',
        '2 वर्ष कालावधी',
        'त्रैमासिक व्याज'
      ] : [
        'Overdraft facility',
        'Interest on utilized',
        '2 years tenure',
        'Quarterly interest'
      ],
      color: 'from-green-500 to-green-700'
    },
    {
      id: 'bullet-gold',
      title: t.bulletGoldTitle,
      icon: <FaMoneyBillWave />,
      interestRate: '15% per annum',
      maxAmount: '₹50,000',
      tenure: '12 months',
      description: isMarathi ? 'तातडीचे कर्ज वितरण. त्रैमासिक व्याज गणना.' : 'Immediate loan disbursement. Quarterly interest calculation.',
      features: isMarathi ? [
        'तातडीचे वितरण',
        '₹50,000 मर्यादा',
        'बुलेट परतफेड',
        'त्रैमासिक व्याज'
      ] : [
        'Immediate disbursal',
        '₹50,000 limit',
        'Bullet repayment',
        'Quarterly interest'
      ],
      color: 'from-red-500 to-red-700'
    },
    {
      id: 'doorstep-gold',
      title: t.doorstepGoldTitle,
      icon: <FaDoorOpen />,
      interestRate: 'Contact for details',
      maxAmount: 'Based on valuation',
      tenure: 'Flexible',
      description: isMarathi ? 'ग्राहकाच्या घरी सोने मूल्यांकन. दारस्थी कर्ज प्रदान. फोन कॉलद्वारे साधी विनंती. सोयीस्कर आणि सुरक्षित सेवा.' : 'Gold valuation at customer\'s home. Loan provided at doorstep. Simple request by phone call. Convenient & safe service.',
      features: isMarathi ? [
        'घरी मूल्यांकन',
        'दारस्थी सेवा',
        'फोन विनंती',
        'सोयीस्कर',
        'सेवा शुल्क: ₹5/चौ.फूट.'
      ] : [
        'Home valuation',
        'Doorstep service',
        'Phone request',
        'Convenient',
        'Service charge: ₹5/sq.ft.'
      ],
      color: 'from-purple-500 to-purple-700'
    }
  ];

  // Get schemes based on active category
  const getActiveSchemes = () => {
    switch(activeCategory) {
      case 'deposit': return depositSchemes;
      case 'loan': return loanSchemes;
      case 'gold': return goldLoanSchemes;
      default: return depositSchemes;
    }
  };

  // Get category title
  const getCategoryTitle = () => {
    switch(activeCategory) {
      case 'deposit': return t.depositSchemes;
      case 'loan': return t.loanSchemes;
      case 'gold': return t.goldLoanSchemes;
      default: return t.depositSchemes;
    }
  };

  // Get category icon
  const getCategoryIcon = () => {
    switch(activeCategory) {
      case 'deposit': return <FaPiggyBank />;
      case 'loan': return <FaHandHoldingUsd />;
      case 'gold': return <FaCoins />;
      default: return <FaPiggyBank />;
    }
  };

  return (
    <div 
      className="font-sans min-h-screen relative overflow-hidden"
      style={{
        background: `linear-gradient(135deg, ${lightColor} 0%, white 100%)`
      }}
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div 
          className="absolute -top-20 -right-20 w-96 h-96 rounded-full opacity-5"
          style={{ backgroundColor: primaryColor }}
        ></div>
        <div 
          className="absolute -bottom-32 -left-32 w-80 h-80 rounded-full opacity-5"
          style={{ backgroundColor: secondaryColor }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 md:py-12">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-10 md:mb-12">
          <h1 
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6"
            style={{
              background: `linear-gradient(135deg, ${primaryColor} 0%, #d15679 100%)`,
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}
          >
            {t.pageTitle}
          </h1>
          <p className="text-gray-600 text-base sm:text-lg max-w-3xl mx-auto px-4">
            {t.pageSubtitle}
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-8 sm:mb-10 md:mb-12">
          <button
            onClick={() => setActiveCategory('deposit')}
            className={`px-4 sm:px-6 md:px-8 py-3 sm:py-4 rounded-xl font-semibold transition-all duration-300 transform hover:-translate-y-1 flex items-center gap-2 sm:gap-3 text-sm sm:text-base ${
              activeCategory === 'deposit' ? 'shadow-xl scale-105' : 'hover:shadow-lg'
            }`}
            style={{
              background: activeCategory === 'deposit' 
                ? `linear-gradient(135deg, ${primaryColor} 0%, #d15679 100%)`
                : 'white',
              color: activeCategory === 'deposit' ? 'white' : primaryColor,
              border: `2px solid ${activeCategory === 'deposit' ? 'transparent' : `${primaryColor}30`}`
            }}
          >
            <FaPiggyBank className="text-sm sm:text-base" />
            <span className="hidden sm:inline">{t.depositSchemes}</span>
            <span className="sm:hidden">{t.depositSchemes.split(' ')[0]}</span>
          </button>

          <button
            onClick={() => setActiveCategory('loan')}
            className={`px-4 sm:px-6 md:px-8 py-3 sm:py-4 rounded-xl font-semibold transition-all duration-300 transform hover:-translate-y-1 flex items-center gap-2 sm:gap-3 text-sm sm:text-base ${
              activeCategory === 'loan' ? 'shadow-xl scale-105' : 'hover:shadow-lg'
            }`}
            style={{
              background: activeCategory === 'loan' 
                ? `linear-gradient(135deg, ${primaryColor} 0%, #d15679 100%)`
                : 'white',
              color: activeCategory === 'loan' ? 'white' : primaryColor,
              border: `2px solid ${activeCategory === 'loan' ? 'transparent' : `${primaryColor}30`}`
            }}
          >
            <FaHandHoldingUsd className="text-sm sm:text-base" />
            <span className="hidden sm:inline">{t.loanSchemes}</span>
            <span className="sm:hidden">{t.loanSchemes.split(' ')[0]}</span>
          </button>

          <button
            onClick={() => setActiveCategory('gold')}
            className={`px-4 sm:px-6 md:px-8 py-3 sm:py-4 rounded-xl font-semibold transition-all duration-300 transform hover:-translate-y-1 flex items-center gap-2 sm:gap-3 text-sm sm:text-base ${
              activeCategory === 'gold' ? 'shadow-xl scale-105' : 'hover:shadow-lg'
            }`}
            style={{
              background: activeCategory === 'gold' 
                ? `linear-gradient(135deg, ${primaryColor} 0%, #d15679 100%)`
                : 'white',
              color: activeCategory === 'gold' ? 'white' : primaryColor,
              border: `2px solid ${activeCategory === 'gold' ? 'transparent' : `${primaryColor}30`}`
            }}
          >
            <FaCoins className="text-sm sm:text-base" />
            <span className="hidden sm:inline">{t.goldLoanSchemes}</span>
            <span className="sm:hidden">{t.goldLoanSchemes.split(' ')[0]}</span>
          </button>
        </div>

        {/* Category Header */}
        <div 
          className="rounded-2xl shadow-xl p-4 sm:p-6 md:p-8 mb-8 sm:mb-10 md:mb-12 border relative overflow-hidden"
          style={{
            backgroundColor: 'white',
            borderColor: `${primaryColor}20`
          }}
        >
          <div 
            className="absolute top-0 right-0 w-24 sm:w-32 md:w-40 h-24 sm:h-32 md:h-40 rounded-full opacity-10"
            style={{ backgroundColor: primaryColor }}
          ></div>
          
          <div className="relative z-10 flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
            <div 
              className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl flex items-center justify-center text-xl sm:text-2xl md:text-3xl flex-shrink-0"
              style={{
                background: `linear-gradient(135deg, ${primaryColor} 0%, #d15679 100%)`,
                color: 'white'
              }}
            >
              {getCategoryIcon()}
            </div>
            <div className="text-center sm:text-left">
              <h2 className="text-2xl sm:text-2xl md:text-3xl font-bold mb-2" style={{ color: darkColor }}>
                {getCategoryTitle()}
              </h2>
              <p className="text-gray-600 max-w-3xl text-sm sm:text-base">
                {activeCategory === 'deposit' && t.depositDesc}
                {activeCategory === 'loan' && t.loanDesc}
                {activeCategory === 'gold' && t.goldDesc}
              </p>
            </div>
          </div>
        </div>

        {/* Schemes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {getActiveSchemes().map((scheme) => (
            <div 
              key={scheme.id}
              id={scheme.id}
              onClick={() => setSelectedPlan(scheme)}
              className="bg-white rounded-2xl shadow-xl overflow-hidden border transform transition-all duration-500 hover:-translate-y-4 hover:shadow-2xl cursor-pointer"
              style={{ borderColor: `${primaryColor}20` }}
            >
              {/* Scheme Header */}
              <div 
                className="p-6 text-white relative overflow-hidden"
                style={{
                  background: `linear-gradient(135deg, ${primaryColor} 0%, #9c2956 100%)`
                }}
              >
                <div className="absolute top-0 right-0 w-24 h-24 rounded-full bg-white/10 -translate-y-8 translate-x-8"></div>
                
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 rounded-xl bg-white/20 flex items-center justify-center">
                    <div className="text-2xl">
                      {scheme.icon}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">{scheme.title}</h3>
                    <p className="text-white/80 text-sm mt-1">{scheme.tagline}</p>
                  </div>
                </div>

                {/* Interest Rate Badge for Gold Loans */}
                {(activeCategory === 'gold' || activeCategory === 'loan') && scheme.interestRate && (
                  <div className="flex items-center gap-2 mt-4">
                    <FaPercent />
                    <span className="font-bold">{t.interestRate}: {scheme.interestRate}</span>
                  </div>
                )}
              </div>

              {/* Scheme Content */}
              <div className="p-6">
                {/* Description */}
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {scheme.description}
                </p>

                {/* Features */}
                <div className="mb-6">
                  <h4 className="font-bold mb-3 flex items-center gap-2" style={{ color: primaryColor }}>
                    <FaCheckCircle /> {t.keyFeatures}
                  </h4>
                  <div className="space-y-2">
                    {scheme.features.map((feature, index) => (
                      <div 
                        key={index}
                        className="flex items-center gap-3 p-3 rounded-lg"
                        style={{ backgroundColor: `${primaryColor}08` }}
                      >
                        <FaArrowRight className="flex-shrink-0" style={{ color: primaryColor }} />
                        <span className="text-sm" style={{ color: darkColor }}>
                          {typeof feature === 'string' ? feature : feature?.label || JSON.stringify(feature)}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Scheme Specific Details */}
                {scheme.maxAmount && (
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div 
                      className="p-4 rounded-xl text-center"
                      style={{ backgroundColor: `${secondaryColor}15` }}
                    >
                      <div className="text-sm text-gray-600 mb-1">{t.maxAmount}</div>
                      <div className="font-bold text-lg" style={{ color: darkColor }}>
                        {scheme.maxAmount}
                      </div>
                    </div>
                    {scheme.tenure && (
                      <div 
                        className="p-4 rounded-xl text-center"
                        style={{ backgroundColor: `${accentColor}15` }}
                      >
                        <div className="text-sm text-gray-600 mb-1">{t.tenure}</div>
                        <div className="font-bold text-lg" style={{ color: darkColor }}>
                          {scheme.tenure}
                        </div>
                      </div>
                    )}
                  </div>
                )}

                {/* Highlights for Personal Loan */}
                {scheme.highlights && (
                  <div className="mb-6">
                    <h4 className="font-bold mb-3" style={{ color: primaryColor }}>
                      {t.schemeHighlights}
                    </h4>
                    <div className="space-y-2">
                      {scheme.highlights.map((highlight, index) => (
                        <div 
                          key={index}
                          className="flex items-center gap-3 p-3 rounded-lg border"
                          style={{ borderColor: `${primaryColor}20` }}
                        >
                          <FaStar style={{ color: secondaryColor }} />
                          <span className="text-sm" style={{ color: darkColor }}>
                            {typeof highlight === 'string' ? highlight : highlight?.label || JSON.stringify(highlight)}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Scheme Comparison Table for Gold Loans */}
        {activeCategory === 'gold' && (
          <div 
            className="rounded-2xl shadow-xl p-8 mb-12 border"
            style={{
              backgroundColor: 'white',
              borderColor: `${primaryColor}20`
            }}
          >
            <h3 className="text-2xl font-bold mb-8 text-center" style={{ color: primaryColor }}>
              {t.goldLoanComparison}
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr style={{ backgroundColor: `${primaryColor}10` }}>
                    <th className="p-4 text-left font-bold" style={{ color: darkColor }}>{t.depositSchemes}</th>
                    <th className="p-4 text-left font-bold" style={{ color: darkColor }}>{t.interestRate}</th>
                    <th className="p-4 text-left font-bold" style={{ color: darkColor }}>{t.maxAmountLabel}</th>
                    <th className="p-4 text-left font-bold" style={{ color: darkColor }}>{t.tenureLabel}</th>
                    <th className="p-4 text-left font-bold" style={{ color: darkColor }}>{t.keyFeatureLabel}</th>
                  </tr>
                </thead>
                <tbody>
                  {goldLoanSchemes.map((scheme, index) => (
                    <tr 
                      key={scheme.id}
                      className={`border-b ${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}`}
                      style={{ borderColor: `${primaryColor}10` }}
                    >
                      <td className="p-4 font-medium" style={{ color: darkColor }}>
                        {scheme.title}
                      </td>
                      <td className="p-4">
                        <span className="font-bold" style={{ color: primaryColor }}>
                          {scheme.interestRate}
                        </span>
                      </td>
                      <td className="p-4 font-medium" style={{ color: darkColor }}>
                        {scheme.maxAmount}
                      </td>
                      <td className="p-4" style={{ color: darkColor }}>
                        {scheme.tenure}
                      </td>
                      <td className="p-4 text-sm" style={{ color: darkColor }}>
                        {scheme.features[0]}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Deposit Scheme Benefits */}
        {activeCategory === 'deposit' && (
          <div 
            className="rounded-2xl shadow-xl p-8 mb-12 border"
            style={{
              backgroundColor: `${primaryColor}05`,
              borderColor: `${primaryColor}20`
            }}
          >
            <h3 className="text-2xl font-bold mb-8 text-center" style={{ color: primaryColor }}>
              {t.whyChooseDeposits}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {[
                {
                  icon: <FaShieldAlt />,
                  title: t.safeSecure,
                  description: t.safeSecureDesc
                },
                {
                  icon: <FaChartLine />,
                  title: t.highReturns,
                  description: t.highReturnsDesc
                },
                {
                  icon: <FaCalendarAlt />,
                  title: t.flexibleTenure,
                  description: t.flexibleTenureDesc
                },
                {
                  icon: <FaRupeeSign />,
                  title: t.easyWithdrawal,
                  description: t.easyWithdrawalDesc
                }
              ].map((benefit, index) => (
                <div 
                  key={index}
                  className="bg-white p-6 rounded-xl border text-center transform transition-all duration-300 hover:-translate-y-2 hover:shadow-lg"
                  style={{ borderColor: `${primaryColor}20` }}
                >
                  <div 
                    className="w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4 text-2xl"
                    style={{
                      backgroundColor: `${primaryColor}15`,
                      color: primaryColor
                    }}
                  >
                    {benefit.icon}
                  </div>
                  <h4 className="font-bold mb-2" style={{ color: darkColor }}>
                    {benefit.title}
                  </h4>
                  <p className="text-gray-600 text-sm">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Contact CTA */}
        <div 
          className="rounded-2xl shadow-xl p-8 border text-center relative overflow-hidden"
          style={{
            background: `linear-gradient(135deg, ${primaryColor} 0%, #9c2956 100%)`,
            borderColor: primaryColor
          }}
        >
          <div className="absolute top-0 right-0 w-40 h-40 rounded-full bg-white/10 -translate-y-20 translate-x-20"></div>
          <div className="relative z-10">
            <h3 className="text-2xl font-bold text-white mb-4">
              {t.needHelp}
            </h3>
            <p className="text-white/80 mb-8 max-w-2xl mx-auto">
              {t.needHelpDesc}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-3 rounded-xl font-bold bg-white hover:bg-gray-100 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg"
                style={{ color: primaryColor }}>
                <FaPhoneAlt className="inline mr-2" />
                {t.callNow}
              </button>
              <button className="px-8 py-3 rounded-xl font-bold bg-transparent border-2 border-white text-white hover:bg-white/10 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg">
                <FaBuilding className="inline mr-2" />
                {t.visitBranch}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Custom CSS */}
      <style jsx>{`
        /* Custom scrollbar for table */
        .overflow-x-auto::-webkit-scrollbar {
          height: 8px;
        }

        .overflow-x-auto::-webkit-scrollbar-track {
          background: #f1f1f1;
          border-radius: 4px;
        }

        .overflow-x-auto::-webkit-scrollbar-thumb {
          background: ${primaryColor}60;
          border-radius: 4px;
        }

        .overflow-x-auto::-webkit-scrollbar-thumb:hover {
          background: ${primaryColor}80;
        }

        /* Smooth hover transitions */
        .transition-all {
          transition-property: all;
          transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
        }

        /* Card hover effects */
        .hover\:-translate-y-4:hover {
          transform: translateY(-16px);
        }

        .hover\:-translate-y-2:hover {
          transform: translateY(-8px);
        }

        .hover\:-translate-y-1:hover {
          transform: translateY(-4px);
        }

        /* Shadow effects */
        .hover\:shadow-2xl:hover {
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
        }

        .hover\:shadow-xl:hover {
          box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
        }

        .hover\:shadow-lg:hover {
          box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
        }
      `}</style>
    </div>
  );
};

export default Plan;