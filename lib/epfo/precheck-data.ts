import type { Bilingual } from '@/lib/epfo/i18n'

export interface ClaimType {
  id: string
  icon: string
  title: Bilingual
  forms: string[]
  checklist: Bilingual[]
  processingTime: Bilingual
  note: Bilingual
}

export const claimTypes: ClaimType[] = [
  {
    id: 'full-settlement',
    icon: '🚪',
    title: { en: 'Full Settlement — Resignation/Layoff', hi: 'पूर्ण भुगतान — इस्तीफा/छंटनी' },
    forms: ['Form 19', 'Form 10C'],
    checklist: [
      { en: 'Aadhaar-linked UAN with KYC approved', hi: 'आधार-लिंक्ड UAN जिसकी KYC मंजूर हो' },
      { en: 'Date of Exit updated by employer', hi: 'नियोक्ता द्वारा अपडेट की गई निकास तिथि' },
      { en: 'Bank account KYC approved (IFSC + account number)', hi: 'बैंक खाता KYC मंजूर (IFSC + खाता संख्या)' },
      { en: 'Name matches across Aadhaar, EPFO & bank passbook', hi: 'आधार, EPFO और बैंक पासबुक में नाम एक समान' },
      { en: 'PAN linked (if service is less than 5 years)', hi: 'PAN लिंक (यदि सेवा 5 वर्ष से कम है)' },
      { en: 'Cancelled cheque / passbook first page scan', hi: 'रद्द चेक / पासबुक पहला पृष्ठ स्कैन' },
      { en: 'Form 15G attached if withdrawal exceeds ₹50,000', hi: 'यदि निकासी ₹50,000 से अधिक है तो Form 15G संलग्न करें' },
    ],
    processingTime: { en: '⏱ Estimated: 15–30 working days', hi: '⏱ अनुमानित: 15–30 कार्य दिवस' },
    note: {
      en: 'Full settlement combines PF (Form 19) and pension withdrawal (Form 10C). Both are filed together as a single composite claim.',
      hi: 'पूर्ण भुगतान में PF (Form 19) और पेंशन निकासी (Form 10C) दोनों शामिल हैं। दोनों एक साथ एक संयुक्त दावे के रूप में दाखिल किए जाते हैं।',
    },
  },
  {
    id: 'retirement',
    icon: '🏅',
    title: { en: 'Retirement Settlement', hi: 'सेवानिवृत्ति भुगतान' },
    forms: ['Form 19', 'Form 10D'],
    checklist: [
      { en: 'Aadhaar-linked UAN with KYC approved', hi: 'आधार-लिंक्ड UAN जिसकी KYC मंजूर हो' },
      { en: 'Date of Exit updated by employer', hi: 'नियोक्ता द्वारा अपडेट की गई निकास तिथि' },
      { en: 'Bank account KYC approved (IFSC + account number)', hi: 'बैंक खाता KYC मंजूर (IFSC + खाता संख्या)' },
      { en: 'Name matches across Aadhaar, EPFO & bank passbook', hi: 'आधार, EPFO और बैंक पासबुक में नाम एक समान' },
      { en: 'Age proof confirming 58 years or above', hi: '58 वर्ष या अधिक आयु का प्रमाण' },
      { en: 'Scheme Certificate (if opting for deferred pension)', hi: 'स्कीम सर्टिफिकेट (यदि विलंबित पेंशन चाहते हैं)' },
      { en: 'Cancelled cheque / passbook first page scan', hi: 'रद्द चेक / पासबुक पहला पृष्ठ स्कैन' },
    ],
    processingTime: { en: '⏱ Estimated: 20–30 working days', hi: '⏱ अनुमानित: 20–30 कार्य दिवस' },
    note: {
      en: 'Form 10D pension processing runs on a separate track from your PF (Form 19) settlement and may take longer to reflect.',
      hi: 'Form 10D पेंशन प्रक्रिया आपके PF (Form 19) भुगतान से अलग ट्रैक पर चलती है और दिखने में अधिक समय ले सकती है।',
    },
  },
  {
    id: 'medical',
    icon: '🏥',
    title: { en: 'Medical Emergency Advance', hi: 'चिकित्सा आपातकालीन अग्रिम' },
    forms: ['Form 31'],
    checklist: [
      { en: 'Aadhaar-linked UAN with KYC approved', hi: 'आधार-लिंक्ड UAN जिसकी KYC मंजूर हो' },
      { en: 'Bank account KYC approved', hi: 'बैंक खाता KYC मंजूर' },
      { en: 'Hospital admission proof / discharge summary', hi: 'अस्पताल भर्ती प्रमाण / डिस्चार्ज सारांश' },
      { en: 'Doctor certificate confirming the illness', hi: 'बीमारी की पुष्टि करने वाला डॉक्टर प्रमाणपत्र' },
      { en: 'Estimated cost of treatment', hi: 'उपचार की अनुमानित लागत' },
      { en: 'Employer certification not mandatory (self-declaration allowed)', hi: 'नियोक्ता प्रमाणन अनिवार्य नहीं (स्व-घोषणा स्वीकार्य)' },
      { en: 'Name matches across Aadhaar, EPFO & bank passbook', hi: 'आधार, EPFO और बैंक पासबुक में नाम एक समान' },
    ],
    processingTime: { en: '⏱ Estimated: 3–7 working days (fast-track)', hi: '⏱ अनुमानित: 3–7 कार्य दिवस (तेज़ प्रक्रिया)' },
    note: {
      en: 'Medical advances are fast-tracked and can be filed without employer approval — no minimum service period required.',
      hi: 'चिकित्सा अग्रिम तेज़ी से संसाधित होते हैं और नियोक्ता की मंजूरी के बिना दाखिल किए जा सकते हैं — कोई न्यूनतम सेवा अवधि आवश्यक नहीं।',
    },
  },
  {
    id: 'housing',
    icon: '🏠',
    title: { en: 'Housing Advance', hi: 'आवास अग्रिम' },
    forms: ['Form 31'],
    checklist: [
      { en: 'Aadhaar-linked UAN with KYC approved', hi: 'आधार-लिंक्ड UAN जिसकी KYC मंजूर हो' },
      { en: 'Bank account KYC approved', hi: 'बैंक खाता KYC मंजूर' },
      { en: 'Minimum 5 years of service completed', hi: 'न्यूनतम 5 वर्ष की सेवा पूर्ण' },
      { en: 'Property documents / allotment letter / sale agreement', hi: 'संपत्ति दस्तावेज़ / आवंटन पत्र / बिक्री समझौता' },
      { en: 'Declaration that the property is in member/spouse name', hi: 'घोषणा कि संपत्ति सदस्य/पति-पत्नी के नाम पर है' },
      { en: 'Name matches across Aadhaar, EPFO & bank passbook', hi: 'आधार, EPFO और बैंक पासबुक में नाम एक समान' },
      { en: 'No prior housing advance availed for the same purpose', hi: 'इस उद्देश्य के लिए पहले कोई आवास अग्रिम नहीं लिया गया' },
    ],
    processingTime: { en: '⏱ Estimated: 15–20 working days', hi: '⏱ अनुमानित: 15–20 कार्य दिवस' },
    note: {
      en: 'Housing advances require 5 years of continuous membership and can only be availed a limited number of times in your career.',
      hi: 'आवास अग्रिम के लिए 5 वर्ष की निरंतर सदस्यता आवश्यक है और यह आपके कार्यकाल में सीमित बार ही लिया जा सकता है।',
    },
  },
  {
    id: 'marriage-education',
    icon: '🎓',
    title: { en: 'Marriage / Education Advance', hi: 'विवाह / शिक्षा अग्रिम' },
    forms: ['Form 31'],
    checklist: [
      { en: 'Aadhaar-linked UAN with KYC approved', hi: 'आधार-लिंक्ड UAN जिसकी KYC मंजूर हो' },
      { en: 'Bank account KYC approved', hi: 'बैंक खाता KYC मंजूर' },
      { en: 'Minimum 7 years of service completed', hi: 'न्यूनतम 7 वर्ष की सेवा पूर्ण' },
      { en: 'Invitation card / admission letter as proof', hi: 'प्रमाण के रूप में निमंत्रण पत्र / प्रवेश पत्र' },
      { en: 'Relationship proof (self, children, or sibling)', hi: 'रिश्ते का प्रमाण (स्वयं, बच्चे या भाई-बहन)' },
      { en: 'Name matches across Aadhaar, EPFO & bank passbook', hi: 'आधार, EPFO और बैंक पासबुक में नाम एक समान' },
      { en: 'Declaration of number of advances already availed (max 3)', hi: 'पहले लिए गए अग्रिमों की संख्या की घोषणा (अधिकतम 3)' },
    ],
    processingTime: { en: '⏱ Estimated: 10–15 working days', hi: '⏱ अनुमानित: 10–15 कार्य दिवस' },
    note: {
      en: 'This advance can be availed up to 3 times across your career, for your own or your children/siblings marriage or education.',
      hi: 'यह अग्रिम आपके कार्यकाल में अधिकतम 3 बार, स्वयं या बच्चों/भाई-बहन की शादी या शिक्षा के लिए लिया जा सकता है।',
    },
  },
  {
    id: 'pension-only',
    icon: '💰',
    title: { en: 'Pension Withdrawal Only', hi: 'केवल पेंशन निकासी' },
    forms: ['Form 10C'],
    checklist: [
      { en: 'Aadhaar-linked UAN with KYC approved', hi: 'आधार-लिंक्ड UAN जिसकी KYC मंजूर हो' },
      { en: 'Date of Exit updated by employer', hi: 'नियोक्ता द्वारा अपडेट की गई निकास तिथि' },
      { en: 'Bank account KYC approved', hi: 'बैंक खाता KYC मंजूर' },
      { en: 'Total pensionable service is less than 10 years', hi: 'कुल पेंशन योग्य सेवा 10 वर्ष से कम है' },
      { en: 'Name matches across Aadhaar, EPFO & bank passbook', hi: 'आधार, EPFO और बैंक पासबुक में नाम एक समान' },
      { en: 'Not currently employed in an EPF-covered establishment', hi: 'वर्तमान में किसी EPF-कवर संस्थान में कार्यरत नहीं' },
      { en: 'Composite claim declaration form signed', hi: 'संयुक्त दावा घोषणा फॉर्म पर हस्ताक्षरित' },
    ],
    processingTime: { en: '⏱ Estimated: 15–25 working days', hi: '⏱ अनुमानित: 15–25 कार्य दिवस' },
    note: {
      en: 'If your pensionable service is 10 years or more, you cannot withdraw pension — you must take a Scheme Certificate instead.',
      hi: 'यदि आपकी पेंशन योग्य सेवा 10 वर्ष या अधिक है, तो आप पेंशन नहीं निकाल सकते — इसके बजाय आपको स्कीम सर्टिफिकेट लेना होगा।',
    },
  },
]

export interface EligibilityQuestion {
  id: string
  question: Bilingual
  onFail: {
    severity: 'fail' | 'warn'
    message: Bilingual
  }
}

export const eligibilityQuestions: EligibilityQuestion[] = [
  {
    id: 'kyc',
    question: {
      en: 'Is your Aadhaar linked and KYC Approved in your UAN account?',
      hi: 'क्या आपका आधार लिंक है और UAN खाते में KYC मंजूर है?',
    },
    onFail: {
      severity: 'fail',
      message: {
        en: '❌ Claim will be rejected. Go to UAN Portal → KYC → Add Aadhaar. Employer must approve (3–7 days). Do not file until status shows Approved.',
        hi: '❌ दावा अस्वीकार होगा। UAN पोर्टल → KYC → आधार जोड़ें। नियोक्ता को मंजूरी देनी होगी (3–7 दिन)। स्थिति "Approved" दिखने तक दावा न करें।',
      },
    },
  },
  {
    id: 'exit-date',
    question: {
      en: 'Has your employer updated your Date of Exit in EPFO?',
      hi: 'क्या आपके नियोक्ता ने EPFO में आपकी निकास तिथि अपडेट की है?',
    },
    onFail: {
      severity: 'fail',
      message: {
        en: '❌ Without exit date, claim cannot proceed. Email HR immediately. If 2+ months since last salary — you can self-mark exit at UAN Portal → Manage → Mark Exit.',
        hi: '❌ निकास तिथि के बिना दावा नहीं होगा। HR को तुरंत ईमेल करें। यदि पिछली सैलरी के 2+ महीने हो गए हैं — आप UAN पोर्टल → Manage → Mark Exit से स्वयं निकास दर्ज कर सकते हैं।',
      },
    },
  },
  {
    id: 'name-match',
    question: {
      en: 'Does your name in EPFO exactly match your Aadhaar AND bank passbook?',
      hi: 'क्या EPFO में आपका नाम आधार और बैंक पासबुक से पूरी तरह मेल खाता है?',
    },
    onFail: {
      severity: 'fail',
      message: {
        en: '❌ Name mismatch is the #1 rejection cause. (A) Aadhaar wrong → fix at UIDAI; (B) EPFO name wrong → employer updates via Employer Portal; (C) Bank name wrong → visit branch. All three must be IDENTICAL.',
        hi: '❌ नाम में अंतर सबसे बड़ी वजह है। (A) आधार गलत → UIDAI पर सुधारें; (B) EPFO नाम गलत → नियोक्ता Employer Portal से अपडेट करे; (C) बैंक नाम गलत → शाखा जाएं। तीनों में नाम बिल्कुल एक समान होना चाहिए।',
      },
    },
  },
  {
    id: 'mobile-match',
    question: {
      en: 'Is your UAN mobile number the same as your Aadhaar-linked mobile?',
      hi: 'क्या आपका UAN मोबाइल नंबर आधार-लिंक्ड मोबाइल के समान है?',
    },
    onFail: {
      severity: 'warn',
      message: {
        en: '⚠️ OTP goes to Aadhaar mobile, not UAN mobile. Update Aadhaar mobile at UIDAI Seva Kendra (72hrs to sync). Or use UMANG app.',
        hi: '⚠️ OTP आधार मोबाइल पर आता है, UAN मोबाइल पर नहीं। UIDAI सेवा केंद्र पर आधार मोबाइल अपडेट करें (सिंक होने में 72 घंटे)। या UMANG ऐप का उपयोग करें।',
      },
    },
  },
  {
    id: 'bank-kyc',
    question: {
      en: 'Is your bank account KYC Approved in your UAN profile?',
      hi: 'क्या आपके UAN प्रोफ़ाइल में बैंक खाता KYC मंजूर है?',
    },
    onFail: {
      severity: 'fail',
      message: {
        en: '❌ Payment will fail. UAN Portal → KYC → add bank account + IFSC. Employer must approve. Account must be INDIVIDUAL or joint with spouse ONLY — not with parent.',
        hi: '❌ भुगतान विफल होगा। UAN पोर्टल → KYC → बैंक खाता + IFSC जोड़ें। नियोक्ता को मंजूरी देनी होगी। खाता केवल व्यक्तिगत या पति/पत्नी के साथ संयुक्त होना चाहिए — माता-पिता के साथ नहीं।',
      },
    },
  },
]
