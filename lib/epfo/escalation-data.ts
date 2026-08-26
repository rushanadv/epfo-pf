import type { Bilingual } from '@/lib/epfo/i18n'

export interface EscalationLevel {
  level: number
  icon: string
  title: Bilingual
  durationLabel: Bilingual
  minDays: number
  maxDays: number
  site?: string
  template?: string
  templateLabel?: Bilingual
  steps?: Bilingual[]
}

export const escalationLevels: EscalationLevel[] = [
  {
    level: 1,
    icon: '🏢',
    title: { en: 'Contact Employer/HR', hi: 'नियोक्ता/HR से संपर्क करें' },
    durationLabel: { en: 'For issues under 7 days', hi: '7 दिनों से कम के मामलों के लिए' },
    minDays: 0,
    maxDays: 7,
    templateLabel: { en: '📋 Copy Email Template', hi: '📋 ईमेल टेम्पलेट कॉपी करें' },
    template: `Subject: Urgent: EPFO Exit Date Update Required — UAN [YOUR UAN]

Dear [HR Contact Name],

I am writing to request an urgent update to my Date of Exit in the EPFO portal. My UAN is [YOUR UAN] and my last working day was [LAST WORKING DAY].

Without this update, I am unable to file my PF withdrawal claim. Please update my Date of Exit within the EPFO Employer Portal at the earliest, and confirm once done.

I would appreciate a response within 3 working days given the urgency.

Thank you,
[YOUR NAME]
[YOUR CONTACT NUMBER]`,
  },
  {
    level: 2,
    icon: '📞',
    title: { en: 'EPFO Helpline + UAN Grievance', hi: 'EPFO हेल्पलाइन + UAN शिकायत' },
    durationLabel: { en: 'For issues of 7–14 days', hi: '7–14 दिनों के मामलों के लिए' },
    minDays: 7,
    maxDays: 14,
    steps: [
      { en: 'Call 1800 118 005 (toll-free, Mon–Sat 9am–6pm)', hi: '1800 118 005 पर कॉल करें (टोल-फ्री, सोम–शनि सुबह 9 से शाम 6 बजे)' },
      { en: 'Note the ticket reference number', hi: 'टिकट संदर्भ संख्या नोट करें' },
      { en: 'Go to UAN Portal → Online Services → Raise a Grievance', hi: 'UAN पोर्टल → Online Services → Raise a Grievance पर जाएं' },
      { en: 'Attach: Claim ID, rejection screenshot, HR email', hi: 'संलग्न करें: दावा ID, अस्वीकृति स्क्रीनशॉट, HR ईमेल' },
    ],
  },
  {
    level: 3,
    icon: '📋',
    title: { en: 'EPFiGMS Formal Complaint', hi: 'EPFiGMS औपचारिक शिकायत' },
    durationLabel: { en: 'For issues of 14–30 days', hi: '14–30 दिनों के मामलों के लिए' },
    minDays: 14,
    maxDays: 30,
    site: 'epfigms.gov.in',
    templateLabel: { en: '📋 Copy Complaint Template', hi: '📋 शिकायत टेम्पलेट कॉपी करें' },
    template: `Grievance Category: EPF Withdrawal — [Rejection/Delay]
UAN: [YOUR UAN] | Claim ID: [CLAIM ID]
Date Filed: [DATE] | Current Status: [STATUS]

[Describe your issue in detail, and list all previous actions taken so far, including dates of employer emails, helpline calls, and prior grievances.]`,
  },
  {
    level: 4,
    icon: '🏛️',
    title: { en: 'CPGRAMS Escalation', hi: 'CPGRAMS एस्केलेशन' },
    durationLabel: { en: 'For issues of 30–60 days', hi: '30–60 दिनों के मामलों के लिए' },
    minDays: 30,
    maxDays: 60,
    site: 'pgportal.gov.in',
    steps: [
      { en: 'Go to pgportal.gov.in and register/login', hi: 'pgportal.gov.in पर जाएं और रजिस्टर/लॉगिन करें' },
      { en: 'Select Ministry: Ministry of Labour and Employment', hi: 'मंत्रालय चुनें: श्रम एवं रोजगार मंत्रालय' },
      { en: 'Select Department: EPFO', hi: 'विभाग चुनें: EPFO' },
      { en: 'Attach your EPFiGMS ticket number and all prior correspondence', hi: 'अपना EPFiGMS टिकट नंबर और सभी पूर्व पत्राचार संलग्न करें' },
      { en: 'Describe the delay and cite the timelines already breached', hi: 'देरी का वर्णन करें और पहले से टूटी हुई समय-सीमाओं का हवाला दें' },
      { en: 'Submit and save the CPGRAMS registration number', hi: 'जमा करें और CPGRAMS पंजीकरण संख्या सहेजें' },
    ],
  },
  {
    level: 5,
    icon: '⚖️',
    title: { en: 'RTI + Consumer Court', hi: 'RTI + उपभोक्ता न्यायालय' },
    durationLabel: { en: 'For issues over 60 days', hi: '60 दिनों से अधिक के मामलों के लिए' },
    minDays: 60,
    maxDays: 9999,
    templateLabel: { en: '📋 Copy RTI Draft', hi: '📋 RTI ड्राफ्ट कॉपी करें' },
    template: `To: CPIO, Regional PF Office, [City]
Sub: RTI under Section 6(1) RTI Act 2005 — UAN [UAN] Claim [ID]

Request:
1) Complete file noting for my claim
2) Name and designation of the dealing officer
3) Full rejection reason (not abbreviated)
4) All interdepartmental forwarding dates`,
  },
]

export const consumerCourtNote: Bilingual = {
  en: 'If delayed 90+ days with financial loss proof (bounced EMI, hospital bill) → District Consumer Commission | Fee: ₹200',
  hi: 'यदि 90+ दिनों की देरी के साथ आर्थिक नुकसान का प्रमाण है (बाउंस EMI, अस्पताल बिल) → जिला उपभोक्ता आयोग | फीस: ₹200',
}

export interface IssueType {
  id: string
  icon: string
  title: Bilingual
}

export const issueTypes: IssueType[] = [
  {
    id: 'exit-date',
    icon: '🏢',
    title: { en: 'Employer not updating exit date / approving claim', hi: 'नियोक्ता निकास तिथि अपडेट / दावा मंजूर नहीं कर रहा' },
  },
  {
    id: 'login',
    icon: '📱',
    title: { en: 'Cannot log in — OTP not received', hi: 'लॉगिन नहीं हो पा रहा — OTP नहीं मिला' },
  },
  {
    id: 'transfer',
    icon: '🔄',
    title: { en: 'Want to transfer PF after job change', hi: 'नौकरी बदलने के बाद PF ट्रांसफर करना है' },
  },
  {
    id: 'escalation',
    icon: '📋',
    title: { en: 'Claim rejected or stuck — need to escalate', hi: 'दावा अस्वीकृत या फँसा है — एस्केलेशन चाहिए' },
  },
]

export const durationOptions: { id: string; label: Bilingual; days: number }[] = [
  { id: 'lt7', label: { en: '<7 days', hi: '7 दिनों से कम' }, days: 3 },
  { id: '7-14', label: { en: '7–14 days', hi: '7–14 दिन' }, days: 10 },
  { id: '14-30', label: { en: '14–30 days', hi: '14–30 दिन' }, days: 20 },
  { id: '30-60', label: { en: '30–60 days', hi: '30–60 दिन' }, days: 45 },
  { id: '60plus', label: { en: '60+ days', hi: '60+ दिन' }, days: 90 },
]

export const transferSteps: Bilingual[] = [
  { en: 'Ensure your UAN is common across both old and new employers.', hi: 'सुनिश्चित करें कि आपका UAN पुराने और नए दोनों नियोक्ताओं के लिए एक ही है।' },
  { en: 'Complete KYC (Aadhaar, bank, PAN) and get it approved by your current employer.', hi: 'KYC (आधार, बैंक, PAN) पूरा करें और वर्तमान नियोक्ता से मंजूर करवाएं।' },
  { en: 'Log in to the Member Portal → Online Services → One Member One EPF Account (Transfer Request).', hi: 'मेंबर पोर्टल → Online Services → One Member One EPF Account (Transfer Request) पर लॉगिन करें।' },
  { en: 'Select the previous member ID/UAN, choose the attesting employer, and submit Form 13.', hi: 'पिछला सदस्य ID/UAN चुनें, सत्यापन करने वाले नियोक्ता को चुनें, और Form 13 जमा करें।' },
  { en: 'Track the transfer status under Track Claim Status; it typically completes in 15–20 working days.', hi: 'Track Claim Status में स्थानांतरण की स्थिति ट्रैक करें; यह सामान्यतः 15–20 कार्य दिवसों में पूरा होता है।' },
]
