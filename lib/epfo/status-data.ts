import type { Bilingual } from '@/lib/epfo/i18n'

export interface ClaimStatus {
  id: string
  label: Bilingual
  meaning: Bilingual
  action: Bilingual
  timeline: Bilingual
  escalateAfterDays: number | null
}

export const claimStatuses: ClaimStatus[] = [
  {
    id: 'fto-bank',
    label: {
      en: 'FTO is generated and payment confirmation is pending with the bank',
      hi: 'FTO जनरेट हो गया है और भुगतान की पुष्टि बैंक से लंबित है',
    },
    meaning: {
      en: 'Your claim is approved and payment instruction sent to your bank. Bank hasn\u2019t confirmed yet.',
      hi: 'दावा मंजूर है, बैंक को भुगतान निर्देश भेजा गया है। बैंक ने अभी पुष्टि नहीं की है।',
    },
    action: {
      en: 'Wait 3–5 working days then call your bank\u2019s NEFT helpline if money hasn\u2019t arrived.',
      hi: '3–5 कार्य दिवस प्रतीक्षा करें, फिर यदि पैसा नहीं आया तो अपने बैंक की NEFT हेल्पलाइन पर कॉल करें।',
    },
    timeline: { en: '3–7 working days', hi: '3–7 कार्य दिवस' },
    escalateAfterDays: null,
  },
  {
    id: 'under-examination',
    label: { en: 'Under examination', hi: 'जाँच के अंतर्गत' },
    meaning: {
      en: 'A field officer is manually reviewing your documents. Normal but slow.',
      hi: 'एक अधिकारी आपके दस्तावेज़ों की मैन्युअल जाँच कर रहा है। सामान्य लेकिन धीमी प्रक्रिया।',
    },
    action: {
      en: 'Raise an EPFiGMS grievance at epfigms.gov.in if unchanged after 15 days.',
      hi: 'यदि 15 दिनों बाद भी अपरिवर्तित रहे तो epfigms.gov.in पर EPFiGMS शिकायत दर्ज करें।',
    },
    timeline: { en: '5–20 working days', hi: '5–20 कार्य दिवस' },
    escalateAfterDays: 15,
  },
  {
    id: 'bank-inactive',
    label: { en: 'Beneficiary bank account inactive', hi: 'लाभार्थी बैंक खाता निष्क्रिय' },
    meaning: {
      en: 'Your registered bank account is dormant.',
      hi: 'आपका पंजीकृत बैंक खाता निष्क्रिय है।',
    },
    action: {
      en: 'Visit your bank with Aadhaar + passbook to reactivate. Then update bank details in UAN portal and re-submit claim within 30 days.',
      hi: 'बैंक जाएं और फिर UAN अपडेट करें। आधार + पासबुक के साथ बैंक जाकर खाता सक्रिय करें, फिर UAN पोर्टल में बैंक विवरण अपडेट करें और 30 दिनों के भीतर दावा फिर से जमा करें।',
    },
    timeline: { en: 'Bank: 1–3 days. Re-file: 15–20 days', hi: 'बैंक: 1–3 दिन। पुनः दाखिल: 15–20 दिन' },
    escalateAfterDays: null,
  },
  {
    id: 'eps-clarify',
    label: {
      en: 'EPS deducted but wages above ₹15,000. Please clarify EPS membership',
      hi: 'EPS कटा लेकिन वेतन ₹15,000 से अधिक। कृपया EPS सदस्यता स्पष्ट करें',
    },
    meaning: {
      en: 'Employer deducted EPS despite salary over ₹15,000.',
      hi: 'नियोक्ता ने ₹15,000 से अधिक वेतन होने के बावजूद EPS काटा।',
    },
    action: {
      en: 'Get signed HR declaration about your EPS membership and upload via UAN portal Documents Upload section. Then file EPFiGMS complaint.',
      hi: 'HR से EPS सदस्यता घोषणापत्र लें और UAN पोर्टल पर अपलोड करें। फिर EPFiGMS शिकायत दर्ज करें।',
    },
    timeline: { en: '10–30 days after document submission', hi: 'दस्तावेज़ जमा करने के 10–30 दिन बाद' },
    escalateAfterDays: 30,
  },
  {
    id: 'employer-attestation',
    label: { en: 'Employer attestation pending', hi: 'नियोक्ता सत्यापन लंबित' },
    meaning: {
      en: 'Your ex-employer hasn\u2019t approved your claim on their portal.',
      hi: 'नियोक्ता ने अभी मंजूरी नहीं दी।',
    },
    action: {
      en: 'Email HR with a 7-day deadline. EPFO can override employer approval after 30 days of inaction — file EPFiGMS to trigger this.',
      hi: '7 दिन की डेडलाइन के साथ HR को ईमेल करें। 30 दिनों की निष्क्रियता के बाद EPFO नियोक्ता मंजूरी को ओवरराइड कर सकता है — इसके लिए EPFiGMS दर्ज करें।',
    },
    timeline: { en: 'Up to 30 days', hi: '30 दिनों तक' },
    escalateAfterDays: 7,
  },
  {
    id: 'field-office',
    label: { en: 'Claim under process at Field Office', hi: 'क्षेत्रीय कार्यालय में दावा प्रक्रिया में' },
    meaning: {
      en: 'Claim is in a manual queue at your regional EPFO office.',
      hi: 'क्षेत्रीय कार्यालय में मैन्युअल प्रक्रिया में है।',
    },
    action: {
      en: 'If unchanged after 20 days, call EPFO helpline: 1800 118 005 (toll-free, Mon–Sat 9am–6pm).',
      hi: 'यदि 20 दिनों बाद भी अपरिवर्तित रहे तो EPFO हेल्पलाइन: 1800 118 005 पर कॉल करें (टोल-फ्री, सोम–शनि सुबह 9 से शाम 6 बजे)।',
    },
    timeline: { en: '10–30 working days', hi: '10–30 कार्य दिवस' },
    escalateAfterDays: 20,
  },
  {
    id: 'rejected-15g',
    label: { en: 'Rejected — Form 15G', hi: 'अस्वीकृत — Form 15G' },
    meaning: {
      en: 'Form 15G (TDS exemption) was missing or had errors. Required if withdrawal >₹50,000 and service <5 years.',
      hi: 'Form 15G नहीं था या गलत था। यह आवश्यक है यदि निकासी ₹50,000 से अधिक है और सेवा 5 वर्ष से कम है।',
    },
    action: {
      en: 'Download from incometax.gov.in, fill correctly with PAN, resubmit with claim.',
      hi: 'incometax.gov.in से डाउनलोड करें, PAN के साथ सही ढंग से भरें, दावे के साथ फिर से जमा करें।',
    },
    timeline: { en: '15–20 days after resubmission', hi: 'पुनः जमा करने के 15–20 दिन बाद' },
    escalateAfterDays: null,
  },
  {
    id: 'verification-pending',
    label: { en: 'Verification pending at field office', hi: 'क्षेत्रीय कार्यालय में सत्यापन लंबित' },
    meaning: {
      en: 'Physical document verification triggered — usually due to name/DOB mismatch.',
      hi: 'भौतिक जाँच शुरू हुई है — आमतौर पर नाम/जन्मतिथि में अंतर के कारण।',
    },
    action: {
      en: 'Visit nearest EPFO field office with originals: Aadhaar, PAN, passbook, relieving letter.',
      hi: 'निकटतम EPFO कार्यालय में मूल दस्तावेज़ों के साथ जाएं: आधार, PAN, पासबुक, रिलीविंग लेटर।',
    },
    timeline: { en: '15–45 days', hi: '15–45 दिन' },
    escalateAfterDays: 30,
  },
]
