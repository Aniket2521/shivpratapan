import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useLanguage } from '../../contexts/LanguageContext';
import { 
  FaHome, FaChevronRight, FaCalculator, FaPercent, 
  FaCalendarAlt, FaHandHoldingUsd, FaUserCheck, 
  FaShieldAlt, FaRupeeSign, FaClock, FaHeart,
  FaGraduationCap, FaCar, FaBusinessTime, FaTractor,
  FaBuilding, FaArrowRight, FaPhoneAlt, FaMapMarkerAlt,
  FaDownload, FaFileAlt, FaTable, FaUsers, FaStar,
  FaCheckCircle, FaInfoCircle, FaBalanceScale, FaGem,
  FaPiggyBank, FaChartLine, FaUniversity, FaCogs,
  FaMobileAlt, FaWallet, FaLeaf, FaBook,
  FaIdCard, FaLandmark, FaFileContract, FaList,
  FaChevronLeft, FaChevronDown, FaSearch,
  FaRegFileAlt, FaRegChartBar, FaRegCreditCard,
  FaRegMoneyBillAlt, FaRegCalendarCheck
} from 'react-icons/fa';
import { GiReceiveMoney, GiPayMoney, GiMoneyStack, GiGoldBar, GiHouseKeys } from 'react-icons/gi';

const Loan = () => {
  const { language } = useLanguage();
  const navigate = useNavigate();
  const location = useLocation();
  const isMarathi = language === 'mr';
  const [activeLoan, setActiveLoan] = useState('personal-loan');
  const [showAllDocuments, setShowAllDocuments] = useState(false);
  const [expandedLoan, setExpandedLoan] = useState(null);

  // Loan data with images - REPLACE WITH YOUR PROVIDED IMAGES
  const loanData = {
    'personal-loan': {
      title: 'Personal Loan',
      marathiTitle: 'सामान्य कर्ज',
      subtitle: 'For education, travel, medical expenses, marriage, etc.',
      marathiSubtitle: 'शिक्षण, प्रवास, वैद्यकीय खर्च, लग्न, इत्यादीसाठी',
      color: 'from-blue-600 to-indigo-700',
      icon: <FaHandHoldingUsd />,
      description: isMarathi ? [
        'संपत्रेक आवश्यक नसलेले वैयक्तिक गरजांसाठी कर्ज',
        'मंजूरीनंतर २४-४८ तासात त्वरित वितरण',
        'वापरावर कोणत्या निर्बंधांसहित लवचबादी वापर',
        'आणीतकारी आणि नियोजित खर्चांसाठी उत्तम'
      ] : [
        'Unsecured loan for personal needs without collateral requirement',
        'Quick disbursal within 24-48 hours of approval',
        'Flexible end-use with no restrictions on usage',
        'Perfect for emergencies and planned expenses'
      ],
      eligibility: isMarathi ? [
        { title: 'नागरिकत्व', value: 'भारतीय नागरिक', icon: <FaIdCard /> },
        { title: 'वय श्रेणी', value: '२१ ते ६० वर्ष', icon: <FaUserCheck /> },
        { title: 'किमान उत्पन्न', value: '₹१५,०००/महिना (वेतनभोगी)', icon: <FaRupeeSign /> },
        { title: 'व्यवसाय उत्पन्न', value: '₹४५,०००/महिना (स्वयं-रोजगार)', icon: <FaBusinessTime /> }
      ] : [
        { title: 'Citizenship', value: 'Indian citizen', icon: <FaIdCard /> },
        { title: 'Age Range', value: '21 to 60 years', icon: <FaUserCheck /> },
        { title: 'Minimum Income', value: '₹15,000/month (salaried)', icon: <FaRupeeSign /> },
        { title: 'Business Income', value: '₹45,000/month (self-employed)', icon: <FaBusinessTime /> }
      ],
      creditScore: {
        ideal: '750+',
        description: isMarathi ? 'चांगला क्रेडिट स्कोअर कर्ज मंजूरीत करण्यास मदत करतो' : 'Good credit score helps in faster loan approval',
        levels: isMarathi ? [
          { range: '३००-५९९', label: 'कमचा', color: 'bg-red-500' },
          { range: '६००-६९९', label: 'चांगला', color: 'bg-yellow-500' },
          { range: '७००-७४९', label: 'चांगला', color: 'bg-green-500' },
          { range: '७५०-९००', label: 'उत्कृष्ट', color: 'bg-blue-500' }
        ] : [
          { range: '300-599', label: 'Poor', color: 'bg-red-500' },
          { range: '600-699', label: 'Fair', color: 'bg-yellow-500' },
          { range: '700-749', label: 'Good', color: 'bg-green-500' },
          { range: '750-900', label: 'Excellent', color: 'bg-blue-500' }
        ]
      },
      loanAmount: 'Up to ₹1,00,000 (as per eligibility)',
      tenure: 'Up to 24 months',
      interestRate: '12% - 16%',
      benefits: isMarathi ? [
        'संपत्रेक आवश्यक नाही',
        'त्वरित प्रक्रिया वेळ',
        'किमान दस्तऐवजीकरण',
        'लवचबादी परत्याप पर्याय',
        'ऑनलाइन अर्ज उपलब्ध'
      ] : [
        'No collateral required',
        'Quick processing time',
        'Minimal documentation',
        'Flexible repayment options',
        'Online application available'
      ],
      disadvantages: isMarathi ? [
        'उच्च व्याज दर',
        'असुरक्षित कर्ज (संपत्रेक नाही)',
        'कडक पात्रता मानदंड',
        'प्रक्रिया शुल्क लागू'
      ] : [
        'Higher interest rates',
        'Unsecured loan (no collateral)',
        'Strict eligibility criteria',
        'Processing fees applicable'
      ]
    },
    'mortgage-loan': {
      title: 'Mortgage Loan',
      marathiTitle: 'तारण कर्ज',
      subtitle: 'Lower interest loans against property',
      marathiSubtitle: 'मालमत्तेच्या तारणावर कमी व्याज दराचे कर्ज',
      color: 'from-green-600 to-emerald-700',
      icon: <FaBuilding />,
      description: isMarathi ? [
        'मालमत्तेच्या तारणावर कमी व्याज दरासहित सुरक्षित कर्ज',
        'मालमत्तेच्या किंमतीच्या ६०-७०% पर्यंत कर्ज रक्कम',
        'दीर्घ कर्ज परत्याप कालावधी उपलब्ध',
        'व्यवसाय विस्तार, शिक्षण, वैद्यकीय गरजांसाठी उपयुक्त'
      ] : [
        'Secure loan against property with lower interest rates',
        'Loan amount up to 60-70% of property value',
        'Long repayment tenure available',
        'Suitable for business expansion, education, medical needs'
      ],
      features: isMarathi ? [
        'इतर कर्जांपेक्षा कमी व्याज',
        'दीर्घ कर्ज परत्याप कालावधी (२० वर्षापर्यंत)',
        'अधिक कर्ज रक्कम उपलब्ध',
        'लवचबादी वापराच्या लवचबादी पर्याय'
      ] : [
        'Lower interest compared to other loans',
        'Long repayment tenure (up to 20 years)',
        'Higher loan amount available',
        'Flexible end-use options'
      ],
      types: isMarathi ? [
        { name: 'निश्चित तारण कर्ज', desc: 'संपूर्ण कालावधीसाठी निश्चित व्याज दर' },
        { name: 'समायोज्य तारण कर्ज', desc: 'बाजारप्रमाणे बदलता व्याज दर' },
        { name: 'सोपे तारण कर्ज', desc: 'नोंदणीशिवाय तारण कर्ज' },
        { name: 'नोंदणीकृत तारण कर्ज', desc: 'अधिकारींसहित औपचारिकपणे नोंदणीकृत' },
        { name: 'अटी विक्री तारण कर्ज', desc: 'अटी मालमत्ता हस्तांतरण' },
        { name: 'उसुफ्रक्च्युअरी तारण कर्ज', desc: 'देयदार मालमत्तेचे फायदे आनंदतो' }
      ] : [
        { name: 'Fixed Mortgage Loan', desc: 'Fixed interest rate for entire tenure' },
        { name: 'Adjustable Mortgage Loan', desc: 'Variable interest rate as per market' },
        { name: 'Simple Mortgage', desc: 'Basic mortgage without registration' },
        { name: 'Registered Mortgage', desc: 'Formally registered with authorities' },
        { name: 'Conditional Sale Mortgage', desc: 'Conditional property transfer' },
        { name: 'Usufructuary Mortgage', desc: 'Lender enjoys property benefits' }
      ],
      eligibility: isMarathi ? [
        { title: 'रोजगार', value: 'वेतनभोगी किंवा व्यवसायी', icon: <FaUserCheck /> },
        { title: 'वय मर्यादा', value: '१८ ते ६५ वर्ष', icon: <FaCalendarAlt /> },
        { title: 'मालमत्ता मालकी', value: 'आवश्यक', icon: <GiHouseKeys /> },
        { title: 'उत्पन्न पुरावा', value: 'आवश्यक', icon: <FaRegMoneyBillAlt /> }
      ] : [
        { title: 'Employment', value: 'Salaried or business person', icon: <FaUserCheck /> },
        { title: 'Age Limit', value: '18 to 65 years', icon: <FaCalendarAlt /> },
        { title: 'Property Ownership', value: 'Required', icon: <GiHouseKeys /> },
        { title: 'Income Proof', value: 'Required', icon: <FaRegMoneyBillAlt /> }
      ],
      documents: isMarathi ? [
        'आधार कार्ड, पॅन कार्ड, मतदार परिचयपत्र',
        'मूळ मालमत्ता दस्तऐवज',
        'बँक विधाने (शेवटचे ६ महिने)',
        'पासपोर्ट आकार फोटो',
        'उत्पन्न पुरावा (वेतन पर्चे/आयटीआर)',
        'मालमत्ता मूल्यांकन अहवाल'
      ] : [
        'Aadhaar Card, PAN Card, Voter ID',
        'Original property documents',
        'Bank statements (last 6 months)',
        'Passport size photographs',
        'Income proof (salary slips/ITR)',
        'Property valuation report'
      ],
      interestRate: '12% - 14% (bank policy based)',
      loanAmount: 'Up to 70% of property value',
      tenure: 'Up to 20 years',
      benefits: isMarathi ? [
        'अधिक कर्ज रक्कम उपलब्ध',
        'कमी प्रक्रिया शुल्क',
        'विद्यमान ग्राहकांसाठी त्वरित मंजूरी',
        'कर फायदे उपलब्ध'
      ] : [
        'Higher loan amount available',
        'Lower processing charges',
        'Faster approval for existing customers',
        'Tax benefits available'
      ]
    },
    'home-loan': {
      title: 'Home Loan',
      marathiTitle: 'गृह कर्ज',
      subtitle: 'Finance for your dream home',
      marathiSubtitle: 'तुमच्या स्वप्नांच्या घरासाठी वित्तपुरवठा',
      color: 'from-purple-600 to-violet-700',
      icon: <GiHouseKeys />,
      purpose: isMarathi ? [
        'घर/फ्लॅट खरेदी',
        'घर बांधणे',
        'घराचा विस्तार/नूतनीकरण',
        'घर सुधार',
        'इतर बँकांकडून शिल्ड बदलणे'
      ] : [
        'Purchase house/flat',
        'Construct house',
        'Home extension/renovation',
        'Home improvement',
        'Balance transfer from other banks'
      ],
      eligibility: isMarathi ? [
        { title: 'नागरिकत्व', value: 'भारतीय नागरिक', icon: <FaIdCard /> },
        { title: 'वय श्रेणी', value: '१८ ते ७० वर्ष', icon: <FaUserCheck /> },
        { title: 'क्रेडिट स्कोअर', value: '७५०+ प्राधान्य', icon: <FaRegChartBar /> },
        { title: 'किमान उत्पन्न', value: '₹२५,०००/महिना', icon: <FaRupeeSign /> }
      ] : [
        { title: 'Citizenship', value: 'Indian citizen', icon: <FaIdCard /> },
        { title: 'Age Range', value: '18 to 70 years', icon: <FaUserCheck /> },
        { title: 'Credit Score', value: '750+ preferred', icon: <FaRegChartBar /> },
        { title: 'Minimum Income', value: '₹25,000/month', icon: <FaRupeeSign /> }
      ],
      documents: isMarathi ? [
        'ओळख आणि पत्ता पुरावा (आधार, पॅन, मतदार परिचयपत्र)',
        'वेतन पर्चे (शेवटचे ३ महिने) / आयटीआर (२ वर्ष)',
        'बँक विधाने (शेवटचे ६ महिने)',
        'मालमत्ता दस्तऐवज (विक्री दस्तऐवज, करार)',
        'पासपोर्ट आकार फोटो',
        'व्यवसाय पुरावा'
      ] : [
        'ID & address proof (Aadhaar, PAN, Voter ID)',
        'Salary slips (last 3 months) / ITR (2 years)',
        'Bank statements (last 6 months)',
        'Property documents (sale deed, agreement)',
        'Passport size photographs',
        'Occupation proof'
      ],
      interestRate: '8.4% - 9.5%',
      loanAmount: 'Up to ₹5,00,00,000',
      tenure: 'Up to 30 years',
      benefits: isMarathi ? [
        'कमी व्याज दर',
        'दीर्घ कर्ज परत्याप कालावधी',
        'कलम ८०सी आणि २४ अंतर्गत कर फायदे',
        'शिल्ड बदलण्याची सुविधा',
        'टॉप-अप कर्ज उपलब्ध'
      ] : [
        'Low interest rates',
        'Long repayment tenure',
        'Tax benefits under Section 80C & 24',
        'Balance transfer facility',
        'Top-up loan available'
      ],
      specialFeatures: isMarathi ? [
        'महिला अर्जदारांना ०.२५% कमी व्याज',
        'पत्नी/पालकांसह संयुक्त अर्ज',
        'ऑनलाइन अर्ज आणि ट्रॅकिंग',
        'दारस्थळ सेवा उपलब्ध'
      ] : [
        'Women applicants get 0.25% lower interest',
        'Joint application with spouse/parents',
        'Online application and tracking',
        'Doorstep service available'
      ]
    },
    'vehicle-loan': {
      title: 'Vehicle Loan',
      marathiTitle: 'वाहन कर्ज',
      subtitle: 'Drive your dream vehicle',
      marathiSubtitle: 'तुमच्या स्वप्नांच्या वाहनासाठी कर्ज',
      color: 'from-red-600 to-pink-700',
      icon: <FaCar />,
      features: isMarathi ? [
        'दोन चाकी आणि चार चाकी वाहनांसाठी कर्ज',
        'नवीन आणि वापरलेली वाहने',
        'लवचबादी ईएमआय पर्याय',
        '२४ तासात त्वरित प्रक्रिया',
        '१००% रोड फंडिंग'
      ] : [
        'Loan for two-wheeler and four-wheeler',
        'New and second-hand vehicles',
        'Flexible EMI options',
        'Quick processing within 24 hours',
        '100% on-road funding'
      ],
      eligibility: isMarathi ? [
        { title: 'वय मर्यादा', value: '१८ ते ६५ वर्ष', icon: <FaUserCheck /> },
        { title: 'उत्पन्न स्रोत', value: 'स्थिर उत्पन्न आवश्यक', icon: <FaRegMoneyBillAlt /> },
        { title: 'ड्रायव्हिंग लायसन्स', value: 'वैध लायसन्स आवश्यक', icon: <FaIdCard /> },
        { title: 'रोजगार', value: 'वेतनभोगी किंवा स्वयं-रोजगार', icon: <FaBusinessTime /> }
      ] : [
        { title: 'Age Limit', value: '18 to 65 years', icon: <FaUserCheck /> },
        { title: 'Income Source', value: 'Stable income required', icon: <FaRegMoneyBillAlt /> },
        { title: 'Driving License', value: 'Valid license required', icon: <FaIdCard /> },
        { title: 'Employment', value: 'Salaried or self-employed', icon: <FaBusinessTime /> }
      ],
      documents: isMarathi ? [
        'आधार कार्ड, पॅन कार्ड',
        'वैध ड्रायव्हिंग लायसन्स',
        'वाहन कोटेशन/प्रोफॉर्मा इन्व्हॉइस',
        'वेतन पर्ची/उत्पन्न पुरावा (३ महिने)',
        'बँक विधाने (६ महिने)',
        'पासपोर्ट आकार फोटो',
        'पत्ता पुरावा'
      ] : [
        'Aadhaar Card, PAN Card',
        'Valid driving license',
        'Vehicle quotation/proforma invoice',
        'Salary slip/income proof (3 months)',
        'Bank statements (6 months)',
        'Passport size photographs',
        'Address proof'
      ],
      interestRate: '8.5% - 12%',
      loanAmount: 'Up to ₹50,00,000',
      tenure: '1-7 years',
      benefits: isMarathi ? [
        'त्वरित प्रक्रिया आणि वितरण',
        'लवचबादी कालावधी पर्याय',
        'विमा सहाय्य',
        'किमान दस्तऐवजीकरण',
        'ऑनलाइन अर्ज सुविधा'
      ] : [
        'Quick processing & disbursement',
        'Flexible tenure options',
        'Insurance assistance',
        'Minimal documentation',
        'Online application facility'
      ],
      vehicleTypes: isMarathi ? [
        { type: 'दोन चाकी', maxAmount: '₹५,००,०००', tenure: '१-५ वर्ष' },
        { type: 'चार चाकी (नवीन)', maxAmount: '₹५०,००,०००', tenure: '१-७ वर्ष' },
        { type: 'वापरलेली कार', maxAmount: '₹२५,००,०००', tenure: '१-५ वर्ष' },
        { type: 'व्यावसायिक वाहन', maxAmount: '₹१,००,००,०००', tenure: '१-१० वर्ष' }
      ] : [
        { type: 'Two-wheeler', maxAmount: '₹5,00,000', tenure: '1-5 years' },
        { type: 'Four-wheeler (New)', maxAmount: '₹50,00,000', tenure: '1-7 years' },
        { type: 'Used Car', maxAmount: '₹25,00,000', tenure: '1-5 years' },
        { type: 'Commercial Vehicle', maxAmount: '₹1,00,00,000', tenure: '1-10 years' }
      ]
    },
    'gold-loan': {
      title: 'Gold Loan',
      marathiTitle: 'गोल्ड लोन',
      subtitle: 'Instant funds against your gold',
      marathiSubtitle: 'तुमच्या सोन्यावर त्वरित रक्कम',
      color: 'from-amber-500 to-yellow-600',
      icon: <GiGoldBar />,
      description: isMarathi ? [
        'किमान दस्तऐवजासहित सोने दागिने वर त्वरित कर्ज',
        'विमा कव्हरसहित सोने सुरक्षित ठेवण',
        'पारदर्शक सोने मूल्यांकन प्रक्रिया',
        'लवचबादी परत्याप पर्याय'
      ] : [
        'Quick loan against gold ornaments with minimal documentation',
        'Gold safe custody with insurance coverage',
        'Transparent gold valuation process',
        'Flexible repayment options'
      ],
      loanTypes: isMarathi ? [
        {
          name: 'ईएमआय सोने कर्ज',
          interest: '०.६९% मासिक',
          amount: 'प्रति १०ग्रॅम ₹७५,००० पर्यंत',
          tenure: '१२ महिने',
          features: ['ईएमआय + व्याज भरता', 'निश्चित मासिक हप्ते', 'वेतनभोगींसाठी उपयुक्त']
        },
        {
          name: 'सोपे सोने कर्ज',
          interest: '०.८९% मासिक',
          amount: 'प्रति १०ग्रॅम ₹७५,००० पर्यंत',
          tenure: '१२ महिने',
          features: ['फक्त मासिक व्याज भरता', 'शेवटीवर मुद्दत भरता', 'व्यवसायासाठी लवचबादी']
        },
        {
          name: 'नियमित सोने कर्ज',
          interest: '०.८३% मासिक',
          amount: 'प्रति १०ग्रॅम ₹७५,००० पर्यंत',
          tenure: '१२ महिने',
          features: ['फक्त मासिक व्याज भरता', 'पूर्ण भरतावर सोने सोडणे', 'पारंपरिक पर्याय']
        }
      ] : [
        {
          name: 'EMI Gold Loan',
          interest: '0.69% monthly',
          amount: 'Up to ₹75,000 per 10gm',
          tenure: '12 months',
          features: ['EMI + interest payment', 'Fixed monthly installments', 'Suitable for salaried']
        },
        {
          name: 'Easy Gold Loan',
          interest: '0.89% monthly',
          amount: 'Up to ₹75,000 per 10gm',
          tenure: '12 months',
          features: ['Monthly interest payment', 'Principal repayment at end', 'Flexible for business']
        },
        {
          name: 'Regular Gold Loan',
          interest: '0.83% monthly',
          amount: 'Up to ₹75,000 per 10gm',
          tenure: '12 months',
          features: ['Monthly interest payment', 'Gold release on full payment', 'Traditional option']
        }
      ],
      eligibility: isMarathi ? [
        { title: 'वय मर्यादा', value: '१८ ते ७५ वर्ष', icon: <FaUserCheck /> },
        { title: 'सोन्याची शुद्धता', value: '१८के किंवा अधिक', icon: <GiGoldBar /> },
        { title: 'दस्तऐवजीकरण', value: 'किमान केवायसी', icon: <FaFileAlt /> },
        { title: 'सोने मालकी', value: 'आवश्यक', icon: <FaShieldAlt /> }
      ] : [
        { title: 'Age Limit', value: '18 to 75 years', icon: <FaUserCheck /> },
        { title: 'Gold Purity', value: '18K or above', icon: <GiGoldBar /> },
        { title: 'Documentation', value: 'Minimal KYC', icon: <FaFileAlt /> },
        { title: 'Gold Ownership', value: 'Required', icon: <FaShieldAlt /> }
      ],
      benefits: isMarathi ? [
        '२ तासात त्वरित मंजूरी',
        'किमान दस्तऐवज आवश्यक',
        'विमासहित सुरक्षित सोने ठेवण',
        'पूर्वभरतन शुल्क नाहीत',
        'पारदर्शक सोने मूल्यांकन'
      ] : [
        'Quick approval within 2 hours',
        'Minimal documentation required',
        'Safe gold storage with insurance',
        'No prepayment charges',
        'Transparent gold valuation'
      ],
      loanAmount: 'Up to 75% of gold value',
      tenure: '3 months to 3 years',
      process: isMarathi ? [
        'प्रमाणित मूल्यांकनकाराकडून सोने मूल्यांकन',
        'मूल्यांकनावर आधारित कर्ज मंजूरी',
        'सुरक्षित तिजोरीत सोने ठेवण',
        'दस्तऐवजीकरण आणि वितरण',
        'पूर्ण परत्यापावर सोने परत करणे'
      ] : [
        'Gold valuation by certified appraiser',
        'Loan sanction based on valuation',
        'Gold storage in secure vault',
        'Documentation and disbursement',
        'Gold return on full repayment'
      ]
    },
    'women-loan': {
      title: 'Women Loan',
      marathiTitle: 'महिला कर्ज',
      subtitle: 'Empowering women with financial independence',
      marathiSubtitle: 'आर्थिक स्वातंत्र्यासह महिलांना सशक्त बनवणे',
      color: 'from-pink-600 to-rose-700',
      icon: <FaHeart />,
      description: isMarathi ? [
        'फक्त महिलांसाठी विशेष रचीलेली कर्ज योजना',
        'मानक कर्जांपेक्षा कमी व्याज दर',
        'महिलांसाठी तयारलेली लवचबादी पर्याय',
        'किमान दस्तऐवजासहित त्वरित मंजूर प्रक्रिया'
      ] : [
        'Special loan schemes designed exclusively for women',
        'Lower interest rates compared to standard loans',
        'Flexible repayment options tailored for women',
        'Quick approval process with minimal documentation'
      ],
      specialFeatures: isMarathi ? [
        'महिलांसाठी ०.२५% कमी व्याज दर',
        'कुटुंब उत्पन्नावर आधारित अधिक कर्ज पात्रता',
        'लवचबादी संपत्रेक आवश्यकता',
        'महिला उद्योजकांसाठी विशेष योजना',
        'महिला अर्जदारांसाठी प्राधान्य प्रक्रिया'
      ] : [
        '0.25% lower interest rate for women',
        'Higher loan eligibility based on family income',
        'Flexible collateral requirements',
        'Special schemes for women entrepreneurs',
        'Priority processing for women applicants'
      ],
      eligibility: isMarathi ? [
        { title: 'लिंग', value: 'फक्त महिला अर्जदार', icon: <FaUserCheck /> },
        { title: 'वय श्रेणी', value: '२१ ते ६५ वर्ष', icon: <FaCalendarAlt /> },
        { title: 'किमान उत्पन्न', value: '₹१२,०००/महिना (वेतनभोगी)', icon: <FaRupeeSign /> },
        { title: 'व्यवसाय उत्पन्न', value: '₹३५,०००/महिना (स्वयं-रोजगार)', icon: <FaBusinessTime /> }
      ] : [
        { title: 'Gender', value: 'Women applicants only', icon: <FaUserCheck /> },
        { title: 'Age Range', value: '21 to 65 years', icon: <FaCalendarAlt /> },
        { title: 'Minimum Income', value: '₹12,000/month (salaried)', icon: <FaRupeeSign /> },
        { title: 'Business Income', value: '₹35,000/month (self-employed)', icon: <FaBusinessTime /> }
      ],
      documents: isMarathi ? [
        'आधार कार्ड, पॅन कार्ड, मतदार परिचयपत्र',
        'बँक विधाने (शेवटचे ६ महिने)',
        'उत्पन्न पुरावा (वेतन पर्चे/आयटीआर)',
        'पासपोर्ट आकार फोटो',
        'व्यवसाय नोंदणी (उद्योजकांसाठी)',
        'महिला ओळख पुरावा (लागू असल्यास)'
      ] : [
        'Aadhaar Card, PAN Card, Voter ID',
        'Bank statements (last 6 months)',
        'Income proof (salary slips/ITR)',
        'Passport size photographs',
        'Business registration (for entrepreneurs)',
        'Women identity proof (if applicable)'
      ],
      interestRate: '10% - 14%',
      loanAmount: 'Up to ₹10,00,000',
      tenure: 'Up to 36 months',
      benefits: isMarathi ? [
        'महिलांसाठी कमी व्याज दर',
        'अधिक कर्ज पात्रता',
        'लवचबादी परत्याप वेळापत्रक',
        'किमान दस्तऐवजीकरण',
        'प्राधान्य प्रक्रिया',
        'महिला उद्योजकांसाठी विशेष योजना'
      ] : [
        'Lower interest rates for women',
        'Higher loan eligibility',
        'Flexible repayment schedule',
        'Minimal documentation',
        'Priority processing',
        'Special schemes for women entrepreneurs'
      ],
      loanTypes: isMarathi ? [
        { name: 'महिला व्यवसाय कर्ज', desc: 'महिला उद्योजक आणि व्यवसाय मालकांसाठी', maxAmount: '₹१०,००,०००' },
        { name: 'महिला वैयक्तिक कर्ज', desc: 'वैयक्तिक गरजा आणि कुटुंब आवश्यकतांसाठी', maxAmount: '₹५,००,०००' },
        { name: 'महिला शैक्षणिक कर्ज', desc: 'उच्च शिक्षण आणि कौशल्य विकासासाठी', maxAmount: '₹१५,००,०००' },
        { name: 'महिला गृह कर्ज', desc: 'घर खरेदी आणि नूतनीकरणासाठी', maxAmount: '₹२५,००,०००' }
      ] : [
        { name: 'Women Business Loan', desc: 'For women entrepreneurs and business owners', maxAmount: '₹10,00,000' },
        { name: 'Women Personal Loan', desc: 'For personal needs and family requirements', maxAmount: '₹5,00,000' },
        { name: 'Women Education Loan', desc: 'For higher education and skill development', maxAmount: '₹15,00,000' },
        { name: 'Women Housing Loan', desc: 'For home purchase and renovation', maxAmount: '₹25,00,000' }
      ]
    },
    'education-loan': {
      title: 'Education Loan',
      marathiTitle: 'शैक्षणिक कर्ज',
      subtitle: 'Invest in your future education',
      marathiSubtitle: 'तुमच्या भविष्याच्या शिक्षणात गुंतवणे',
      color: 'from-indigo-600 to-purple-700',
      icon: <FaGraduationCap />,
      description: isMarathi ? [
        'विद्यार्थींसाठी संपूर्ण शैक्षण निधी',
        'शुल्क फी, पुस्तके आणि जीवन खर्चांसाठी कव्हर',
        'अभ्यास कालावधीत अध्ययन कालावधी',
        'कलम ८०ई अंतर्गत कर फायदे'
      ] : [
        'Comprehensive education funding for students',
        'Coverage for tuition fees, books, and living expenses',
        'Moratorium period during study duration',
        'Tax benefits under Section 80E'
      ],
      features: isMarathi ? [
        'भारत आणि परदेशात अभ्यासासाठी कर्ज',
        'सर्व शैक्षण संबंधित खर्चांसाठी कव्हर',
        'अभ्यास कालावधीत साधे व्याज',
        'अभ्यास पूर्ण झाल्यावर दीर्घ कर्ज परत्याप कालावधी',
        'व्याज भरलेल्यावर कर फायदे'
      ] : [
        'Loan for studies in India and abroad',
        'Coverage for all education-related expenses',
        'Simple interest during study period',
        'Long repayment tenure after course completion',
        'Tax benefits on interest paid'
      ],
      eligibility: isMarathi ? [
        { title: 'नागरिकत्व', value: 'भारतीय नागरिक', icon: <FaIdCard /> },
        { title: 'वय मर्यादा', value: '१६ ते ३५ वर्ष', icon: <FaUserCheck /> },
        { title: 'शैक्षणिक नोंद', value: 'चांगले शैक्षणिक प्रदर्शन', icon: <FaUniversity /> },
        { title: 'प्रवेश निश्चित', value: 'आवश्यक', icon: <FaFileContract /> }
      ] : [
        { title: 'Citizenship', value: 'Indian citizen', icon: <FaIdCard /> },
        { title: 'Age Limit', value: '16 to 35 years', icon: <FaUserCheck /> },
        { title: 'Academic Record', value: 'Good academic performance', icon: <FaUniversity /> },
        { title: 'Admission Confirmed', value: 'Required', icon: <FaFileContract /> }
      ],
      documents: isMarathi ? [
        'आधार कार्ड, पॅन कार्ड',
        'शैक्षणिक प्रमाणपत्र आणि गुणपत्रके',
        'प्रवेश निश्चिती पत्र',
        'संस्थेकडून फी रचना',
        'पालक/पालक उत्पन्न पुरावा',
        'बँक विधाने (शेवटचे ६ महिने)',
        'पासपोर्ट आकार फोटो'
      ] : [
        'Aadhaar Card, PAN Card',
        'Academic certificates and mark sheets',
        'Admission confirmation letter',
        'Fee structure from institution',
        'Parents/guardian income proof',
        'Bank statements (last 6 months)',
        'Passport size photographs'
      ],
      interestRate: '8% - 11%',
      loanAmount: 'Up to ₹50,00,000',
      tenure: 'Up to 15 years',
      benefits: isMarathi ? [
        'इतर कर्जांपेक्षा कमी व्याज दर',
        'कलम ८०ई अंतर्गत कर फायदे',
        'अभ्यास कालावधीत अध्ययन कालावधी',
        'लवचबादी परत्याप पर्याय',
        'सर्व शैक्षण खर्चांसाठी कव्हर',
        'काही मर्यादेपर्यंत संपत्रेक आवश्यक नाही'
      ] : [
        'Lower interest rates compared to other loans',
        'Tax benefits under Section 80E',
        'Moratorium during study period',
        'Flexible repayment options',
        'Coverage for all education expenses',
        'No collateral required up to certain limit'
      ],
      coveredExpenses: isMarathi ? [
        'शुल्क आणि महाविद्यालय फी',
        'परीक्षा आणि ग्रंथालय फी',
        'पुस्तके आणि साधने खर्च',
        'परदेशात अभ्यासासाठी प्रवास खर्च',
        'वसतिगृह आणि राहण्याचे खर्च',
        'लॅपटॉप आणि अभ्यास साहित्य'
      ] : [
        'Tuition and college fees',
        'Examination and library fees',
        'Books and equipment costs',
        'Travel expenses for studies abroad',
        'Hostel and accommodation charges',
        'Laptop and study materials'
      ],
      loanCategories: isMarathi ? [
        { category: 'पदव्युत्तर अभ्यास', maxAmount: '₹२०,००,०००', tenure: '१० वर्ष' },
        { category: 'पदव्युत्तर अभ्यास', maxAmount: '₹३०,००,०००', tenure: '१२ वर्ष' },
        { category: 'व्यावसायिक अभ्यासक्रम', maxAmount: '₹२५,००,०००', tenure: '१० वर्ष' },
        { category: 'परदेशात अभ्यास', maxAmount: '₹५०,००,०००', tenure: '१५ वर्ष' }
      ] : [
        { category: 'Undergraduate Studies', maxAmount: '₹20,00,000', tenure: '10 years' },
        { category: 'Postgraduate Studies', maxAmount: '₹30,00,000', tenure: '12 years' },
        { category: 'Professional Courses', maxAmount: '₹25,00,000', tenure: '10 years' },
        { category: 'Studies Abroad', maxAmount: '₹50,00,000', tenure: '15 years' }
      ]
    }
  };

  // Common documents for all loans
  const commonDocuments = isMarathi ? [
    { name: 'आधार कार्ड', icon: <FaIdCard />, mandatory: true },
    { name: 'पॅन कार्ड', icon: <FaRegCreditCard />, mandatory: true },
    { name: 'पत्ता पुरावा', icon: <FaMapMarkerAlt />, mandatory: true },
    { name: 'पासपोर्ट आकार फोटो', icon: <FaUserCheck />, mandatory: true },
    { name: 'बँक विधाने (६ महिने)', icon: <FaRegFileAlt />, mandatory: true },
    { name: 'उत्पन्न पुरावा', icon: <FaRegMoneyBillAlt />, mandatory: true },
    { name: 'मालमत्ता दस्तऐवज', icon: <FaLandmark />, mandatory: false },
    { name: 'वाहन दस्तऐवज', icon: <FaCar />, mandatory: false },
    { name: 'रोजगार पुरावा', icon: <FaBusinessTime />, mandatory: false },
    { name: 'व्यवसाय पुरावा', icon: <FaRegChartBar />, mandatory: false }
  ] : [
    { name: 'Aadhaar Card', icon: <FaIdCard />, mandatory: true },
    { name: 'PAN Card', icon: <FaRegCreditCard />, mandatory: true },
    { name: 'Address Proof', icon: <FaMapMarkerAlt />, mandatory: true },
    { name: 'Passport Size Photo', icon: <FaUserCheck />, mandatory: true },
    { name: 'Bank Statements (6 months)', icon: <FaRegFileAlt />, mandatory: true },
    { name: 'Income Proof', icon: <FaRegMoneyBillAlt />, mandatory: true },
    { name: 'Property Documents', icon: <FaLandmark />, mandatory: false },
    { name: 'Vehicle Documents', icon: <FaCar />, mandatory: false },
    { name: 'Employment Proof', icon: <FaBusinessTime />, mandatory: false },
    { name: 'Business Proof', icon: <FaRegChartBar />, mandatory: false }
  ];

  // Translations
  const translations = {
    en: {
      // Breadcrumb
      home: 'Home',
      loans: 'Loans',
      
      // Hero Section
      pageTitle: 'Loan Products',
      pageSubtitle: 'Financial support for every personal and business need',
      loanTypes: 'Loan Types',
      lowestInterest: 'Lowest Interest',
      maxLoan: 'Max Loan',
      maxTenure: 'Max Tenure',
      
      // Navigation
      personalLoan: 'Personal Loan',
      mortgageLoan: 'Mortgage Loan',
      homeLoan: 'Home Loan',
      vehicleLoan: 'Vehicle Loan',
      goldLoan: 'Gold Loan',
      womenLoan: 'Women Loan',
      educationLoan: 'Education Loan',
      
      // Section Headers
      description: 'Description',
      features: 'Features',
      eligibility: 'Eligibility',
      documents: 'Documents',
      benefits: 'Benefits',
      disadvantages: 'Disadvantages',
      interestRate: 'Interest Rate',
      loanAmount: 'Loan Amount',
      tenure: 'Tenure',
      
      // Loan Details
      loanDetails: 'Loan Details',
      maxTenure: 'Max Tenure',
      
      // Credit Score
      creditScoreInformation: 'Credit Score Information',
      idealCreditScore: 'Ideal Credit Score',
      
      // Types and Categories
      typesOfMortgageLoans: 'Types of Mortgage Loans',
      goldLoanTypes: 'Gold Loan Types',
      vehicleTypes: 'Vehicle Types',
      purpose: 'Purpose',
      specialFeaturesForWomen: 'Special Features for Women',
      coveredExpenses: 'Covered Expenses',
      womenLoanTypes: 'Women Loan Types',
      educationLoanCategories: 'Education Loan Categories',
      thingsToConsider: 'Things to Consider',
      
      // Common Documents
      commonLoanDocuments: 'Common Loan Documents',
      documentsRequired: 'Documents required for all loan applications',
      showAllDocuments: 'Show All Documents',
      showLessDocuments: 'Show Less Documents',
      mandatory: 'Mandatory',
      asRequired: 'As Required',
      
      // CTA Section
      applyForRightLoan: 'Apply for the Right',
      loanToday: 'Loan Today',
      getPersonalizedSolutions: 'Get personalized loan solutions with minimal documentation and quick approval',
      applyNow: 'Apply Now',
      visitNearestBranch: 'Visit Nearest Branch',
      approvalTime: 'Approval Time',
      transparent: 'Transparent',
      maxLoan: 'Max Loan',
      processingFee: 'Processing Fee',
      
      // Additional Labels
      interest: 'Interest',
      amount: 'Amount',
      featuresLabel: 'Features',
      maxAmount: 'Max Amount',
      
      // Loan specific content
      forEducationTravelMedical: 'For education, travel, medical expenses, marriage, etc.',
      forEducationTravelMedicalMr: 'शिक्षण, प्रवास, वैद्यकीय खर्च, लग्न, इत्यादीसाठी',
      
      // Personal Loan specific
      unsecuredLoan: 'Unsecured loan for personal needs without collateral requirement',
      quickDisbursal: 'Quick disbursal within 24-48 hours of approval',
      flexibleEndUse: 'Flexible end-use with no restrictions on usage',
      perfectForEmergencies: 'Perfect for emergencies and planned expenses',
      
      // Eligibility criteria
      citizenship: 'Citizenship',
      indianCitizen: 'Indian citizen',
      ageRange: 'Age Range',
      to60Years: '21 to 60 years',
      minimumIncome: 'Minimum Income',
      perMonthSalaried: '₹15,000/month (salaried)',
      perMonthSelfEmployed: '₹45,000/month (self-employed)',
      businessIncome: 'Business Income',
      
      // Credit Score
      creditScore: 'Credit Score',
      ideal: '750+',
      creditScoreDescription: 'Good credit score helps in faster loan approval',
      poor: 'Poor',
      fair: 'Fair',
      good: 'Good',
      excellent: 'Excellent',
      
      // Mortgage Loan specific
      lowerInterest: 'Lower interest compared to other loans',
      longRepayment: 'Long repayment tenure (up to 20 years)',
      higherLoanAmount: 'Higher loan amount available',
      flexibleEndUseOptions: 'Flexible end-use options',
      secureLoan: 'Secure loan against property with lower interest rates',
      loanAmountUpTo: 'Loan amount up to 60-70% of property value',
      suitableForBusiness: 'Suitable for business expansion, education, medical needs',
      
      // Mortgage Loan Types
      typesOfMortgageLoans: 'Types of Mortgage Loans',
      fixedMortgageLoan: 'Fixed Mortgage Loan',
      fixedInterestRate: 'Fixed interest rate for entire tenure',
      adjustableMortgageLoan: 'Adjustable Mortgage Loan',
      variableInterestRate: 'Variable interest rate as per market',
      simpleMortgage: 'Simple Mortgage',
      basicMortgage: 'Basic mortgage without registration',
      registeredMortgage: 'Registered Mortgage',
      formallyRegistered: 'Formally registered with authorities',
      conditionalSaleMortgage: 'Conditional Sale Mortgage',
      conditionalPropertyTransfer: 'Conditional property transfer',
      usufructuaryMortgage: 'Usufructuary Mortgage',
      lenderEnjoysProperty: 'Lender enjoys property benefits',
      
      // Home Loan specific
      purchaseHouseFlat: 'Purchase house/flat',
      constructHouse: 'Construct house',
      homeExtensionRenovation: 'Home extension/renovation',
      homeImprovement: 'Home improvement',
      balanceTransfer: 'Balance transfer from other banks',
      
      // Vehicle Loan specific
      loanForTwoWheeler: 'Loan for two-wheeler and four-wheeler',
      newAndSecondHand: 'New and second-hand vehicles',
      flexibleEmiOptions: 'Flexible EMI options',
      quickProcessing: 'Quick processing within 24 hours',
      onRoadFunding: '100% on-road funding',
      
      // Gold Loan specific
      instantFunds: 'Instant funds against your gold',
      minimalDocumentation: 'Quick loan against gold ornaments with minimal documentation',
      goldSafeCustody: 'Gold safe custody with insurance coverage',
      transparentValuation: 'Transparent gold valuation process',
      flexibleRepayment: 'Flexible repayment options',
      noPrepaymentCharges: 'No prepayment charges',
      
      // Gold Loan Types
      emiGoldLoan: 'EMI Gold Loan',
      monthlyInterestPayment: 'EMI + interest payment',
      fixedMonthlyInstallments: 'Fixed monthly installments',
      suitableForSalaried: 'Suitable for salaried',
      easyGoldLoan: 'Easy Gold Loan',
      monthlyInterestOnly: 'Monthly interest payment',
      principalRepaymentAtEnd: 'Principal repayment at end',
      flexibleForBusiness: 'Flexible for business',
      regularGoldLoan: 'Regular Gold Loan',
      goldReleaseOnFullPayment: 'Gold release on full payment',
      traditionalOption: 'Traditional option',
      
      // Women Loan specific
      specialLoanSchemes: 'Special loan schemes designed exclusively for women',
      lowerInterestRates: 'Lower interest rates compared to standard loans',
      flexibleRepaymentOptions: 'Flexible repayment options tailored for women',
      quickApprovalProcess: 'Quick approval process with minimal documentation',
      
      // Education Loan specific
      comprehensiveEducationFunding: 'Comprehensive education funding for students',
      coverageForTuitionFees: 'Coverage for tuition fees, books, and living expenses',
      moratoriumPeriod: 'Moratorium period during study duration',
      taxBenefits: 'Tax benefits under Section 80E',
      
      // Document section
      commonDocuments: 'Common Documents for All Loans',
      mandatory: 'Mandatory',
      optional: 'Optional',
      aadhaarCard: 'Aadhaar Card',
      panCard: 'PAN Card',
      addressProof: 'Address Proof',
      passportSizePhoto: 'Passport Size Photo',
      bankStatements: 'Bank Statements (6 months)',
      incomeProof: 'Income Proof',
      propertyDocuments: 'Property Documents',
      vehicleDocuments: 'Vehicle Documents',
      employmentProof: 'Employment Proof',
      businessProof: 'Business Proof',
      
      // Stats
      loanTypesAvailable: 'Loan Types Available',
      processingTime: 'Processing Time',
      approvalRate: 'Approval Rate'
    },
    mr: {
      // Breadcrumb
      home: 'होम',
      loans: 'कर्ज',
      
      // Hero Section
      pageTitle: 'कर्ज उत्पादने',
      pageSubtitle: 'प्रत्येक वैयक्तिक आणि व्यवसायाच्या गरजांसाठी आर्थिक सहाय्य',
      loanTypes: 'कर्ज प्रकार',
      lowestInterest: 'किमान व्याज',
      maxLoan: 'कमाल कर्ज',
      maxTenure: 'कमाल कालावधी',
      
      // Navigation
      personalLoan: 'वैयक्तिक कर्ज',
      mortgageLoan: 'तारण कर्ज',
      homeLoan: 'गृह कर्ज',
      vehicleLoan: 'वाहन कर्ज',
      goldLoan: 'गोल्ड लोन',
      womenLoan: 'महिला कर्ज',
      educationLoan: 'शिक्षण कर्ज',
      
      // Common sections
      description: 'वर्णन',
      features: 'वैशिष्ट्ये',
      eligibility: 'पात्रता',
      documents: 'दस्तऐवज',
      benefits: 'फायदे',
      disadvantages: 'तोटे',
      interestRate: 'व्याज दर',
      loanAmount: 'कर्ज रक्कम',
      tenure: 'कालावधी',
      
      // Loan specific content
      forEducationTravelMedical: 'शिक्षण, प्रवास, वैद्यकीय खर्च, लग्न, इत्यादीसाठी',
      forEducationTravelMedicalMr: 'शिक्षण, प्रवास, वैद्यकीय खर्च, लग्न, इत्यादीसाठी',
      
      // Personal Loan specific
      unsecuredLoan: 'संपत्रेक आवश्यक नसलेले वैयक्तिक गरजांसाठी कर्ज',
      quickDisbursal: 'मंजूरीनंतर २४-४८ तासात त्वरित वितरण',
      flexibleEndUse: 'वापरावर कोणत्या निर्बंधांसहित लवचबादी वापर',
      perfectForEmergencies: 'आणीतकारी आणि नियोजित खर्चांसाठी उत्तम',
      
      // Eligibility criteria
      citizenship: 'नागरिकत्व',
      indianCitizen: 'भारतीय नागरिक',
      ageRange: 'वय श्रेणी',
      to60Years: '२१ ते ६० वर्ष',
      minimumIncome: 'किमान उत्पन्न',
      perMonthSalaried: '₹१५,०००/महिना (वेतनभोगी)',
      perMonthSelfEmployed: '₹४५,०००/महिना (स्वयं-रोजगार)',
      businessIncome: 'व्यवसाय उत्पन्न',
      
      // Credit Score
      creditScore: 'क्रेडिट स्कोअर',
      ideal: '७५०+',
      creditScoreDescription: 'चांगला क्रेडिट स्कोअर कर्ज मंजूरीत करण्यास मदत करतो',
      poor: 'कमचा',
      fair: 'चांगला',
      good: 'चांगला',
      excellent: 'उत्कृष्ट',
      
      // Mortgage Loan specific
      lowerInterest: 'इतर कर्जांपेक्षा कमी व्याज दर',
      longRepayment: 'दीर्घ कर्ज परत्याप कालावधी (२० वर्षापर्यंत)',
      higherLoanAmount: 'अधिक कर्ज रक्कम उपलब्ध',
      flexibleEndUseOptions: 'लवचबादी वापराच्या लवचबादी पर्याय',
      secureLoan: 'मालमत्तेच्या तारणावर कमी व्याज दरासहित सुरक्षित कर्ज',
      loanAmountUpTo: 'मालमत्तेच्या किंमतीच्या ६०-७०% पर्यंत कर्ज रक्कम',
      suitableForBusiness: 'व्यवसाय विस्तार, शिक्षण, वैद्यकीय गरजांसाठी उपयुक्त',
      
      // Mortgage Loan Types
      typesOfMortgageLoans: 'तारण कर्ज प्रकार',
      fixedMortgageLoan: 'निश्चित तारण कर्ज',
      fixedInterestRate: 'संपूर्ण कालावधीसाठी निश्चित व्याज दर',
      adjustableMortgageLoan: 'समायोज्य तारण कर्ज',
      variableInterestRate: 'बाजारप्रमाणे बदलता व्याज दर',
      simpleMortgage: 'सोपे तारण कर्ज',
      basicMortgage: 'नोंदणीशिवाय तारण कर्ज',
      registeredMortgage: 'नोंदणीकृत तारण कर्ज',
      formallyRegistered: 'अधिकारींसहित औपचारिकपणे नोंदणीकृत',
      conditionalSaleMortgage: 'अटी विक्री तारण कर्ज',
      conditionalPropertyTransfer: 'अटी मालमत्ता हस्तांतरण',
      usufructuaryMortgage: 'उसुफ्रक्च्युअरी तारण कर्ज',
      lenderEnjoysProperty: 'देयदार मालमत्तेचे फायदे आनंदतो',
      
      // Home Loan specific
      purchaseHouseFlat: 'घर/फ्लॅट खरेदाना',
      constructHouse: 'घर बांधणे',
      homeExtensionRenovation: 'घराचा विस्तार/नूतनीकरण',
      homeImprovement: 'घर सुधार',
      balanceTransfer: 'इतर बँकांकडून शिल्ड बदलणे',
      
      // Vehicle Loan specific
      loanForTwoWheeler: 'दोन चाकी आणि चार चाकी वाहनांसाठी कर्ज',
      newAndSecondHand: 'नवीन आणि वापरलेली वाहने',
      flexibleEmiOptions: 'लवचबादी ईएमआय पर्याय',
      quickProcessing: '२४ तासात त्वरित प्रक्रिया',
      onRoadFunding: '१०% रोड फंडिंग',
      
      // Gold Loan specific
      instantFunds: 'तुमच्या सोन्यावर त्वरित रक्कम',
      minimalDocumentation: 'किमाल दस्तऐवजासहित सोने दागिने वर त्वरित कर्ज',
      goldSafeCustody: 'विमा कव्हरसहित सोने सुरक्षित ठेवण',
      transparentValuation: 'पारदर्शक सोने मूल्यांकन प्रक्रिया',
      flexibleRepayment: 'लवचबादी पर्याय',
      noPrepaymentCharges: 'पूर्वभरतन शुल्क नाहीत',
      
      // Gold Loan Types
      emiGoldLoan: 'ईएमआय सोने कर्ज',
      monthlyInterestPayment: 'ईएमआय + व्याज भरता',
      fixedMonthlyInstallments: 'निश्चित मासिक हप्ते',
      suitableForSalaried: 'वेतनभोगींसाठी उपयुक्त',
      easyGoldLoan: 'सोपे सोने कर्ज',
      monthlyInterestOnly: 'फक्त मासिक व्याज भरता',
      principalRepaymentAtEnd: 'शेवटीवर मुद्दत भरता',
      flexibleForBusiness: 'व्यवसायासाठी लवचबादी',
      regularGoldLoan: 'नियमित सोने कर्ज',
      goldReleaseOnFullPayment: 'पूर्ण भरतावर सोने सोडणे',
      traditionalOption: 'पारंपरिक पर्याय',
      
      // Women Loan specific
      specialLoanSchemes: 'फक्त महिलांसाठी विशेष रचीलेले कर्ज योजना',
      lowerInterestRates: 'मानक कर्जांपेक्षा कमी व्याज दर',
      flexibleRepaymentOptions: 'महिलांसाठी तयारलेली लवचबादी पर्याय',
      quickApprovalProcess: 'किमाल दस्तऐवजासहित त्वरित मंजूर प्रक्रिया',
      
      // Education Loan specific
      comprehensiveEducationFunding: 'विद्यार्थींसाठी संपूर्ण शैक्षण निधी',
      coverageForTuitionFees: 'शुल्क फी, पुस्तके आणि जीवन खर्चांसाठी कव्हर',
      moratoriumPeriod: 'अभ्यास कालावधीत अध्ययन कालावधी',
      taxBenefits: 'कलम ८०ई अंतर्गत कर कर फायदे',
      
      // Section Headers
      description: 'वर्णन',
      features: 'वैशिष्ट्ये',
      eligibility: 'पात्रता',
      documents: 'दस्तऐवज',
      benefits: 'फायदे',
      disadvantages: 'तोटे',
      interestRate: 'व्याज दर',
      loanAmount: 'कर्ज रक्कम',
      tenure: 'कालावधी',
      
      // Loan Details
      loanDetails: 'कर्ज तपशील',
      maxTenure: 'कमाल कालावधी',
      
      // Credit Score
      creditScoreInformation: 'क्रेडिट स्कोअर माहिती',
      idealCreditScore: 'आदर्श क्रेडिट स्कोअर',
      
      // Types and Categories
      typesOfMortgageLoans: 'तारण कर्ज प्रकार',
      goldLoanTypes: 'गोल्ड लोन प्रकार',
      vehicleTypes: 'वाहन प्रकार',
      purpose: 'उद्देश',
      specialFeaturesForWomen: 'महिलांसाठी विशेष वैशिष्ट्ये',
      coveredExpenses: 'समाविष्ट खर्च',
      womenLoanTypes: 'महिला कर्ज प्रकार',
      educationLoanCategories: 'शिक्षण कर्ज श्रेण्या',
      thingsToConsider: 'विचार करण्याची गोष्टी',
      
      // Common Documents
      commonLoanDocuments: 'सामान्य कर्ज दस्तऐवज',
      documentsRequired: 'सर्व कर्ज अर्जांसाठी आवश्यक दस्तऐवज',
      showAllDocuments: 'सर्व दस्तऐवज दाखवा',
      showLessDocuments: 'कमी दस्तऐवज दाखवा',
      mandatory: 'अनिवार्य',
      asRequired: 'आवश्यक तितके',
      
      // CTA Section
      applyForRightLoan: 'योग्य कर्जासाठी आज अर्ज करा',
      getPersonalizedSolutions: 'किमान दस्तऐवज आणि त्वरित मंजुरीसह वैयक्तिकृत कर्ज उपाय मिळवा',
      applyNow: 'आता अर्ज करा',
      visitNearestBranch: 'जवळच्या शाखेला भेट द्या',
      approvalTime: 'मंजूरी वेळ',
      transparent: 'पारदर्शक',
      maxLoan: 'कमाल कर्ज',
      processingFee: 'प्रक्रिया शुल्क',
      
      // Additional Labels
      interest: 'व्याज',
      amount: 'रक्कम',
      featuresLabel: 'वैशिष्ट्ये',
      maxAmount: 'कमाल रक्कम'
    }
  };

  const t = translations[language];

  // Loan navigation items
  const loanNavItems = [
    { id: 'personal-loan', label: t.personalLoan, marathi: t.personalLoan, icon: <FaHandHoldingUsd /> },
    { id: 'mortgage-loan', label: t.mortgageLoan, marathi: t.mortgageLoan, icon: <FaBuilding /> },
    { id: 'home-loan', label: t.homeLoan, marathi: t.homeLoan, icon: <GiHouseKeys /> },
    { id: 'vehicle-loan', label: t.vehicleLoan, marathi: t.vehicleLoan, icon: <FaCar /> },
    { id: 'gold-loan', label: t.goldLoan, marathi: t.goldLoan, icon: <GiGoldBar /> },
    { id: 'women-loan', label: t.womenLoan, marathi: t.womenLoan, icon: <FaHeart /> },
    { id: 'education-loan', label: t.educationLoan, marathi: t.educationLoan, icon: <FaGraduationCap /> }
  ];
  const scrollToLoan = (loanId) => {
    const element = document.getElementById(loanId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveLoan(loanId);
    }
  };

  // Handle hash-based navigation
  useEffect(() => {
    const hash = location.hash.replace('#', '');
    if (hash && loanData[hash]) {
      setActiveLoan(hash);
      setTimeout(() => scrollToLoan(hash), 100);
    }
  }, [location.hash]);

  // Toggle loan expansion
  const toggleLoanExpansion = (loanId) => {
    if (expandedLoan === loanId) {
      setExpandedLoan(null);
    } else {
      setExpandedLoan(loanId);
      scrollToLoan(loanId);
    }
  };

  const currentLoan = loanData[activeLoan];

  return (
    <div className="font-sans bg-gradient-to-b from-gray-50 to-white min-h-screen">
      {/* 1. Hero Banner Section */}
      <section className="relative h-[300px] sm:h-[350px] md:h-[400px] lg:h-[450px] overflow-hidden bg-gradient-to-r from-blue-900 via-blue-800 to-indigo-900">
        <div className="relative h-full flex flex-col justify-center px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto w-full">
            {/* Breadcrumb */}
            <nav className="flex items-center text-blue-100 text-xs sm:text-sm mb-4 sm:mb-6 lg:mb-8">
              <a href="/" className="flex items-center hover:text-white transition-colors">
                <FaHome className="mr-1 sm:mr-2 text-sm sm:text-base" />
                <span className="hidden xs:inline">{t.home}</span>
                <span className="xs:hidden">{t.home.slice(0, 3)}.</span>
              </a>
              <FaChevronRight className="mx-1 sm:mx-2 opacity-50 text-xs sm:text-sm" />
              <span className="font-semibold text-white text-xs sm:text-sm">{t.loans}</span>
            </nav>

            {/* Main Heading */}
            <div className="mb-6 sm:mb-8 lg:mb-10">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-3 sm:mb-4 lg:mb-6 leading-tight">
                {t.pageTitle}
              </h1>
              
              <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-blue-100 max-w-3xl mb-4 sm:mb-6 lg:mb-8 leading-relaxed">
                {t.pageSubtitle}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Sticky Loan Navigation */}
      <div className="sticky top-0 z-50 bg-white shadow-lg border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8">
          <div className="flex overflow-x-auto py-3 sm:py-4 space-x-2 sm:space-x-3 lg:space-x-4 scrollbar-hide">
            {loanNavItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToLoan(item.id)}
                className={`flex items-center px-3 sm:px-4 lg:px-6 py-2 sm:py-3 rounded-xl whitespace-nowrap transition-all duration-300 min-w-fit ${
                  activeLoan === item.id
                    ? `bg-gradient-to-r ${loanData[item.id]?.color || 'from-blue-600 to-indigo-700'} text-white shadow-lg transform -translate-y-0.5`
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <span className="mr-2 sm:mr-3 text-lg sm:text-xl">{item.icon}</span>
                <div className="text-left">
                  <div className="font-medium text-xs sm:text-sm lg:text-base">{item.label}</div>
                  <div className="text-xs opacity-90 hidden sm:block">{item.marathi}</div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8 py-8 sm:py-10 lg:py-12">
        <div className="grid grid-cols-1 gap-6 sm:gap-8">
          {/* Main Content - Loan Details */}
          <div className="col-span-1">
            {/* Loan Sections */}
            {loanNavItems.map((navItem) => (
              <section 
                key={navItem.id} 
                id={navItem.id} 
                className={`scroll-mt-20 sm:scroll-mt-24 lg:scroll-mt-28 mb-8 sm:mb-12 lg:mb-16 ${expandedLoan && expandedLoan !== navItem.id ? 'hidden lg:block' : ''}`}
              >
                <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg sm:shadow-xl overflow-hidden border border-gray-200">
                  {/* Loan Header */}
                  <div className={`bg-gradient-to-r ${loanData[navItem.id].color} p-4 sm:p-6 lg:p-8 text-white`}>
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex items-center mb-2 sm:mb-3">
                          <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-white/20 flex items-center justify-center mr-3 sm:mr-4">
                            <span className="text-lg sm:text-xl lg:text-2xl">{loanData[navItem.id].icon}</span>
                          </div>
                          <div>
                            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold">{loanData[navItem.id].title}</h2>
                            <p className="text-blue-100 text-sm sm:text-base">{loanData[navItem.id].marathiTitle}</p>
                          </div>
                        </div>
                        <p className="text-sm sm:text-base opacity-90">{loanData[navItem.id].subtitle}</p>
                        <p className="text-xs sm:text-sm opacity-80 mt-1">{loanData[navItem.id].marathiSubtitle}</p>
                      </div>
                      <div className="text-right sm:text-left lg:text-right">
                        <div className="text-2xl sm:text-3xl font-bold">{loanData[navItem.id].interestRate}</div>
                        <div className="text-xs sm:text-sm opacity-90">{t.interestRate}</div>
                      </div>
                    </div>
                  </div>

                  {/* Loan Content */}
                  <div className="p-4 sm:p-6 lg:p-8">
                    {/* Two Column Layout */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
                      {/* Left Column */}
                      <div>
                        {/* Description */}
                        {loanData[navItem.id].description && (
                          <div className="mb-6 sm:mb-8">
                            <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-3 sm:mb-4 flex items-center">
                              <FaInfoCircle className="text-blue-600 mr-2 sm:mr-3 text-sm sm:text-base" />
                              {t.description}
                            </h3>
                            <ul className="space-y-2 sm:space-y-3">
                              {loanData[navItem.id].description.map((desc, idx) => (
                                <li key={idx} className="flex items-start">
                                  <FaCheckCircle className="text-green-500 mt-0.5 sm:mt-1 mr-2 sm:mr-3 flex-shrink-0 text-sm sm:text-base" />
                                  <span className="text-gray-700 text-sm sm:text-base leading-relaxed">{desc}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}

                        {/* Specific Features per Loan Type */}
                        {navItem.id === 'mortgage-loan' && (
                          <div className="mb-6 sm:mb-8">
                            <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-3 sm:mb-4 flex items-center">
                              <FaList className="text-green-600 mr-2 sm:mr-3 text-sm sm:text-base" />
                              {t.typesOfMortgageLoans}
                            </h3>
                            <div className="space-y-2 sm:space-y-3">
                              {loanData[navItem.id].types.map((type, idx) => (
                                <div key={idx} className="bg-gray-50 p-3 sm:p-4 rounded-lg">
                                  <div className="font-semibold text-gray-800 text-sm sm:text-base">{type.name}</div>
                                  <div className="text-xs sm:text-sm text-gray-600 mt-1">{type.desc}</div>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}

                        {navItem.id === 'gold-loan' && (
                          <div className="mb-6 sm:mb-8">
                            <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-3 sm:mb-4 flex items-center">
                              <GiGoldBar className="text-amber-600 mr-2 sm:mr-3 text-sm sm:text-base" />
                              {t.goldLoanTypes}
                            </h3>
                            <div className="space-y-3 sm:space-y-4">
                              {loanData[navItem.id].loanTypes.map((type, idx) => (
                                <div key={idx} className="border border-amber-200 rounded-xl p-3 sm:p-4 bg-amber-50">
                                  <div className="font-bold text-gray-800 mb-2 text-sm sm:text-base">{type.name}</div>
                                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm">
                                    <div>
                                      <span className="font-medium">{t.interest}:</span> {type.interest}
                                    </div>
                                    <div>
                                      <span className="font-medium">{t.amount}:</span> {type.amount}
                                    </div>
                                    <div>
                                      <span className="font-medium">{t.tenure}:</span> {type.tenure}
                                    </div>
                                  </div>
                                  <div className="mt-2 sm:mt-3">
                                    <div className="text-xs sm:text-sm font-medium mb-1">{t.featuresLabel}:</div>
                                    <ul className="text-xs sm:text-sm text-gray-600 space-y-1">
                                      {type.features.map((feature, fIdx) => (
                                        <li key={fIdx} className="flex items-start">
                                          <FaCheckCircle className="text-green-500 text-xs mt-0.5 sm:mt-1 mr-1 sm:mr-2 flex-shrink-0" />
                                          <span className="leading-relaxed">{feature}</span>
                                        </li>
                                      ))}
                                    </ul>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}

                        {navItem.id === 'vehicle-loan' && (
                          <div className="mb-6 sm:mb-8">
                            <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-3 sm:mb-4 flex items-center">
                              <FaCar className="text-red-600 mr-2 sm:mr-3 text-sm sm:text-base" />
                              {t.vehicleTypes}
                            </h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                              {loanData[navItem.id].vehicleTypes.map((vehicle, idx) => (
                                <div key={idx} className="bg-gray-50 p-3 sm:p-4 rounded-lg">
                                  <div className="font-semibold text-gray-800 text-sm sm:text-base">{vehicle.type}</div>
                                  <div className="text-xs sm:text-sm text-gray-600">{t.maxAmount}: {vehicle.maxAmount}</div>
                                  <div className="text-xs sm:text-sm text-gray-600">{t.tenure}: {vehicle.tenure}</div>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}

                        {navItem.id === 'home-loan' && (
                          <div className="mb-6 sm:mb-8">
                            <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-3 sm:mb-4 flex items-center">
                              <GiHouseKeys className="text-purple-600 mr-2 sm:mr-3 text-sm sm:text-base" />
                              {t.purpose}
                            </h3>
                            <div className="space-y-1 sm:space-y-2">
                              {loanData[navItem.id].purpose.map((purpose, idx) => (
                                <div key={idx} className="flex items-center">
                                  <FaCheckCircle className="text-green-500 mr-2 sm:mr-3 flex-shrink-0 text-sm sm:text-base" />
                                  <span className="text-gray-700 text-sm sm:text-base">{purpose}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}

                        {navItem.id === 'women-loan' && (
                          <div className="mb-6 sm:mb-8">
                            <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-3 sm:mb-4 flex items-center">
                              <FaHeart className="text-pink-600 mr-2 sm:mr-3 text-sm sm:text-base" />
                              {t.specialFeaturesForWomen}
                            </h3>
                            <div className="space-y-1 sm:space-y-2">
                              {loanData[navItem.id].specialFeatures.map((feature, idx) => (
                                <div key={idx} className="flex items-center">
                                  <FaCheckCircle className="text-green-500 mr-2 sm:mr-3 flex-shrink-0 text-sm sm:text-base" />
                                  <span className="text-gray-700 text-sm sm:text-base">{feature}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}

                        {navItem.id === 'education-loan' && (
                          <div className="mb-6 sm:mb-8">
                            <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-3 sm:mb-4 flex items-center">
                              <FaGraduationCap className="text-indigo-600 mr-2 sm:mr-3 text-sm sm:text-base" />
                              {t.coveredExpenses}
                            </h3>
                            <div className="space-y-1 sm:space-y-2">
                              {loanData[navItem.id].coveredExpenses.map((expense, idx) => (
                                <div key={idx} className="flex items-center">
                                  <FaCheckCircle className="text-green-500 mr-2 sm:mr-3 flex-shrink-0 text-sm sm:text-base" />
                                  <span className="text-gray-700 text-sm sm:text-base">{expense}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>

                      {/* Right Column */}
                      <div>
                        {/* Eligibility */}
                        <div className="mb-6 sm:mb-8">
                          <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-3 sm:mb-4 flex items-center">
                            <FaUserCheck className="text-blue-600 mr-2 sm:mr-3 text-sm sm:text-base" />
                            {t.eligibility}
                          </h3>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                            {loanData[navItem.id].eligibility.map((item, idx) => (
                              <div key={idx} className="bg-blue-50 p-3 sm:p-4 rounded-lg">
                                <div className="flex items-center mb-2">
                                  <div className="text-blue-600 mr-2 text-sm sm:text-base">
                                    {item.icon}
                                  </div>
                                  <div className="text-xs sm:text-sm font-medium text-gray-600">{item.title}</div>
                                </div>
                                <div className="font-semibold text-gray-800 text-sm sm:text-base">{item.value}</div>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Credit Score Info for Personal Loan */}
                        {navItem.id === 'personal-loan' && (
                          <div className="mb-6 sm:mb-8">
                            <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-3 sm:mb-4 flex items-center">
                              <FaChartLine className="text-green-600 mr-2 sm:mr-3 text-sm sm:text-base" />
                              {t.creditScoreInformation}
                            </h3>
                            <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-4 sm:p-6 rounded-xl border border-green-200">
                              <div className="text-center mb-4 sm:mb-6">
                                <div className="text-2xl sm:text-3xl font-bold text-green-700">{loanData[navItem.id].creditScore.ideal}</div>
                                <div className="text-green-600 font-medium text-sm sm:text-base">{t.idealCreditScore}</div>
                                <p className="text-gray-600 mt-2 text-xs sm:text-sm leading-relaxed">{loanData[navItem.id].creditScore.description}</p>
                              </div>
                              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                                {loanData[navItem.id].creditScore.levels.map((level, idx) => (
                                  <div key={idx} className="text-center">
                                    <div className={`h-1.5 sm:h-2 w-full rounded-full ${level.color} mb-1 sm:mb-2`}></div>
                                    <div className="text-xs font-medium">{level.range}</div>
                                    <div className="text-xs text-gray-600">{level.label}</div>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>
                        )}

                        {/* Loan Details */}
                        <div className="mb-6 sm:mb-8">
                          <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-3 sm:mb-4 flex items-center">
                            <FaRupeeSign className="text-green-600 mr-2 sm:mr-3 text-sm sm:text-base" />
                            {t.loanDetails}
                          </h3>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                            <div className="bg-gray-50 p-3 sm:p-4 rounded-lg">
                              <div className="text-xs sm:text-sm text-gray-600 mb-1">{t.loanAmount}</div>
                              <div className="text-base sm:text-lg font-bold text-gray-800">{loanData[navItem.id].loanAmount}</div>
                            </div>
                            <div className="bg-gray-50 p-3 sm:p-4 rounded-lg">
                              <div className="text-xs sm:text-sm text-gray-600 mb-1">{t.maxTenure}</div>
                              <div className="text-base sm:text-lg font-bold text-gray-800">{loanData[navItem.id].tenure}</div>
                            </div>
                          </div>
                        </div>

                        {/* Benefits */}
                        <div className="mb-6 sm:mb-8">
                          <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-3 sm:mb-4 flex items-center">
                            <FaStar className="text-amber-500 mr-2 sm:mr-3 text-sm sm:text-base" />
                            {t.benefits}
                          </h3>
                          <div className="space-y-1 sm:space-y-2">
                            {loanData[navItem.id].benefits.map((benefit, idx) => (
                              <div key={idx} className="flex items-center">
                                <FaCheckCircle className="text-green-500 mr-2 sm:mr-3 flex-shrink-0 text-sm sm:text-base" />
                                <span className="text-gray-700 text-sm sm:text-base">{benefit}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Loan Types for Women Loan */}
                        {navItem.id === 'women-loan' && (
                          <div className="mb-6 sm:mb-8">
                            <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-3 sm:mb-4 flex items-center">
                              <FaList className="text-pink-600 mr-2 sm:mr-3 text-sm sm:text-base" />
                              {t.womenLoanTypes}
                            </h3>
                            <div className="space-y-2 sm:space-y-3">
                              {loanData[navItem.id].loanTypes.map((type, idx) => (
                                <div key={idx} className="bg-pink-50 p-3 sm:p-4 rounded-lg border border-pink-200">
                                  <div className="font-semibold text-gray-800 text-sm sm:text-base">{type.name}</div>
                                  <div className="text-xs sm:text-sm text-gray-600 mt-1">{type.desc}</div>
                                  <div className="text-xs sm:text-sm text-pink-600 font-medium mt-2">{t.maxAmount}: {type.maxAmount}</div>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}

                        {/* Loan Categories for Education Loan */}
                        {navItem.id === 'education-loan' && (
                          <div className="mb-6 sm:mb-8">
                            <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-3 sm:mb-4 flex items-center">
                              <FaUniversity className="text-indigo-600 mr-2 sm:mr-3 text-sm sm:text-base" />
                              {t.educationLoanCategories}
                            </h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                              {loanData[navItem.id].loanCategories.map((category, idx) => (
                                <div key={idx} className="bg-indigo-50 p-3 sm:p-4 rounded-lg">
                                  <div className="font-semibold text-gray-800 text-sm sm:text-base">{category.category}</div>
                                  <div className="text-xs sm:text-sm text-gray-600">{t.maxAmount}: {category.maxAmount}</div>
                                  <div className="text-xs sm:text-sm text-gray-600">{t.tenure}: {category.tenure}</div>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}

                        {/* Disadvantages for Personal Loan */}
                        {navItem.id === 'personal-loan' && loanData[navItem.id].disadvantages && (
                          <div className="mb-6 sm:mb-8">
                            <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-3 sm:mb-4 flex items-center">
                              <FaInfoCircle className="text-red-600 mr-2 sm:mr-3 text-sm sm:text-base" />
                              {t.thingsToConsider}
                            </h3>
                            <div className="space-y-1 sm:space-y-2">
                              {loanData[navItem.id].disadvantages.map((disadv, idx) => (
                                <div key={idx} className="flex items-center">
                                  <FaInfoCircle className="text-red-500 mr-2 sm:mr-3 flex-shrink-0 text-sm sm:text-base" />
                                  <span className="text-gray-700 text-sm sm:text-base">{disadv}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            ))}

            {/* 8. Common Documents Section */}
            <section className="scroll-mt-20 sm:scroll-mt-24 lg:scroll-mt-28 mb-8 sm:mb-12 lg:mb-16">
              <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl sm:rounded-2xl shadow-lg sm:shadow-2xl p-4 sm:p-6 lg:p-8 border border-gray-700">
                <div className="text-center mb-6 sm:mb-8 lg:mb-10">
                  <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2 sm:mb-4">{t.commonLoanDocuments}</h2>
                  <p className="text-gray-400 text-sm sm:text-base">{t.documentsRequired}</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 sm:gap-6 mb-6 sm:mb-8">
                  {commonDocuments.slice(0, showAllDocuments ? commonDocuments.length : 5).map((doc, idx) => (
                    <div 
                      key={idx} 
                      className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-xl p-4 sm:p-6 border border-gray-700 hover:border-blue-500 transition-all duration-300 group"
                    >
                      <div className="flex flex-col items-center text-center">
                        <div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-xl ${
                          doc.mandatory 
                            ? 'bg-gradient-to-r from-red-500 to-pink-600' 
                            : 'bg-gradient-to-r from-blue-500 to-cyan-600'
                        } flex items-center justify-center mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300`}>
                          <div className="text-white text-lg sm:text-2xl">
                            {doc.icon}
                          </div>
                        </div>
                        <h3 className="font-bold text-white text-sm sm:text-base lg:text-lg mb-2">{doc.name}</h3>
                        <span className={`text-xs px-2 sm:px-3 py-1 rounded-full ${
                          doc.mandatory 
                            ? 'bg-red-500/20 text-red-300' 
                            : 'bg-blue-500/20 text-blue-300'
                        }`}>
                          {doc.mandatory ? t.mandatory : t.asRequired}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="text-center">
                  <button
                    onClick={() => setShowAllDocuments(!showAllDocuments)}
                    className="text-blue-400 hover:text-blue-300 font-medium flex items-center justify-center mx-auto text-sm sm:text-base"
                  >
                    {showAllDocuments ? t.showLessDocuments : t.showAllDocuments}
                    <FaChevronDown className={`ml-2 transition-transform text-sm sm:text-base ${showAllDocuments ? 'rotate-180' : ''}`} />
                  </button>
                </div>
              </div>
            </section>
          </div>
      </div>

        {/* 9. Call-to-Action Section */}
        <section className="mt-8 sm:mt-12 lg:mt-16">
          <div className="relative overflow-hidden rounded-xl sm:rounded-2xl shadow-lg sm:shadow-2xl bg-gradient-to-r from-blue-900 via-blue-800 to-indigo-900">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0" style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
              }}></div>
            </div>

            <div className="relative p-6 sm:p-8 lg:p-12 text-center text-white z-10">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 leading-tight">
                  {t.applyForRightLoan} <span className="bg-gradient-to-r from-cyan-300 to-white bg-clip-text text-transparent">{t.loanToday}</span>
                </h2>
                <p className="text-base sm:text-lg lg:text-xl text-blue-100 mb-6 sm:mb-8 lg:mb-10 max-w-2xl mx-auto leading-relaxed">
                  {t.getPersonalizedSolutions}
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center">
                  <button 
                    onClick={() => navigate('/branch')}
                    className="bg-transparent border-2 border-white text-white px-6 sm:px-8 lg:px-10 py-3 sm:py-4 lg:py-5 rounded-full font-bold text-base sm:text-lg lg:text-xl hover:bg-white hover:bg-opacity-10 transition-all duration-300 shadow-lg"
                  >
                    <FaPhoneAlt className="inline mr-2" />
                    {t.visitNearestBranch}
                  </button>
                </div>
                
                <div className="mt-6 sm:mt-8 lg:mt-10 pt-4 sm:pt-6 lg:pt-8 border-t border-blue-300">
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
                    <div className="text-center">
                      <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-cyan-300">24 Hrs</div>
                      <div className="text-blue-200 text-xs sm:text-sm">{t.approvalTime}</div>
                    </div>
                    <div className="text-center">
                      <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-cyan-300">100%</div>
                      <div className="text-blue-200 text-xs sm:text-sm">{t.transparent}</div>
                    </div>
                    <div className="text-center">
                      <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-cyan-300">₹5 Cr</div>
                      <div className="text-blue-200 text-xs sm:text-sm">{t.maxLoan}</div>
                    </div>
                    <div className="text-center">
                      <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-cyan-300">0.5%</div>
                      <div className="text-blue-200 text-xs sm:text-sm">{t.processingFee}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Custom Styles */}
      <style jsx>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in {
          animation: fadeIn 0.5s ease-out;
        }
        
        /* Smooth scrolling */
        html {
          scroll-behavior: smooth;
        }
        
        /* Custom hover effects */
        .loan-card-hover {
          transition: all 0.3s ease;
        }
        
        .loan-card-hover:hover {
          transform: translateY(-4px);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
        }
        
        /* Gradient text animation */
        .gradient-text {
          background: linear-gradient(45deg, #06b6d4, #3b82f6, #8b5cf6);
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }
        
        @keyframes gradient {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
        
        /* Custom bullet points */
        .custom-bullet {
          position: relative;
          padding-left: 1.5rem;
        }
        
        .custom-bullet::before {
          content: '';
          position: absolute;
          left: 0;
          top: 0.7rem;
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: linear-gradient(45deg, #3b82f6, #06b6d4);
        }
        
        /* Mobile-specific touch interactions */
        @media (hover: none) and (pointer: coarse) {
          /* Touch-friendly tap targets */
          button, a {
            min-height: 44px;
            min-width: 44px;
          }
          
          /* Remove hover effects on touch devices */
          .loan-card-hover:hover {
            transform: none;
            box-shadow: none;
          }
          
          /* Add active state for touch feedback */
          button:active, a:active {
            transform: scale(0.98);
            transition: transform 0.1s ease;
          }
          
          /* Better touch scrolling */
          .overflow-x-auto {
            -webkit-overflow-scrolling: touch;
            scroll-snap-type: x mandatory;
          }
          
          .overflow-x-auto > * {
            scroll-snap-align: start;
          }
        }
        
        /* Responsive font sizes */
        @media (max-width: 640px) {
          body {
            font-size: 14px;
          }
        }
        
        @media (min-width: 641px) and (max-width: 1024px) {
          body {
            font-size: 15px;
          }
        }
        
        @media (min-width: 1025px) {
          body {
            font-size: 16px;
          }
        }
        
        /* Prevent horizontal overflow on small screens */
        @media (max-width: 640px) {
          .prevent-overflow {
            overflow-x: hidden;
          }
        }
        
        /* Improved mobile navigation */
        @media (max-width: 768px) {
          .sticky-nav {
            backdrop-filter: blur(10px);
            -webkit-backdrop-filter: blur(10px);
          }
        }
      `}</style>
    </div>
  );
};

export default Loan;
