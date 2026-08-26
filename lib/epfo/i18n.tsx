'use client'

import { createContext, useContext, useMemo, useState, type ReactNode } from 'react'

export type Lang = 'en' | 'hi'

export interface Bilingual {
  en: string
  hi: string
}

const commonStrings = {
  appName: { en: 'EPFO PF Withdrawal Assist', hi: 'ईपीएफओ पीएफ निकासी सहायता' },
  portalSubtitle: {
    en: "Employees' Provident Fund Organisation",
    hi: 'कर्मचारी भविष्य निधि संगठन',
  },
  back: { en: '← Back', hi: '← वापस' },
  home: { en: 'Home', hi: 'होम' },
  footerLine1: {
    en: 'Ministry of Labour & Employment | Government of India',
    hi: 'श्रम एवं रोजगार मंत्रालय | भारत सरकार',
  },
  footerDisclaimer: {
    en: 'Demonstration tool. Not affiliated with EPFO.',
    hi: 'यह एक प्रदर्शन उपकरण है। EPFO से संबद्ध नहीं है।',
  },
  copy: { en: 'Copy', hi: 'कॉपी करें' },
  copied: { en: 'Copied!', hi: 'कॉपी हो गया!' },
  yes: { en: 'Yes', hi: 'हाँ' },
  no: { en: 'No', hi: 'नहीं' },
  proceed: { en: 'Proceed to Eligibility Check →', hi: 'पात्रता जाँच पर जाएँ →' },
  next: { en: 'Next →', hi: 'आगे →' },
  ticker: {
    en: '⚡ New: EPFO 3.0 launched — but 22% of claims still get rejected. Check your readiness before filing.',
    hi: '⚡ नया: EPFO 3.0 लॉन्च हुआ — लेकिन 22% दावे अब भी अस्वीकार होते हैं। दावा करने से पहले अपनी तैयारी जाँचें।',
  },
  statsBar: {
    en: '1.74 Cr claims rejected in FY 2024–25 | 22% rejection rate | Most rejections are preventable',
    hi: '1.74 करोड़ दावे FY 2024–25 में अस्वीकार हुए | 22% अस्वीकृति दर | अधिकांश अस्वीकृतियाँ रोकी जा सकती हैं',
  },
  card1Title: { en: 'Pre-Submission Check', hi: 'दावा-पूर्व जाँच' },
  card1Desc: {
    en: 'Verify your KYC, exit date & eligibility before filing',
    hi: 'दावा करने से पहले अपनी KYC, निकास तिथि और पात्रता जाँचें',
  },
  card1Btn: { en: 'Check Now →', hi: 'अभी जाँचें →' },
  card2Title: { en: 'Claim Status Explained', hi: 'दावा स्थिति की जानकारी' },
  card2Desc: {
    en: 'Understand what your status message actually means',
    hi: 'जानें आपकी स्थिति संदेश का वास्तविक अर्थ क्या है',
  },
  card2Btn: { en: 'Look Up Status →', hi: 'स्थिति देखें →' },
  card3Title: { en: 'Claim Stuck? Get Help', hi: 'दावा फँसा है? मदद लें' },
  card3Desc: {
    en: 'Employer not responding? Login issues? Use the escalation guide',
    hi: 'नियोक्ता जवाब नहीं दे रहा? लॉगिन समस्या? एस्केलेशन गाइड का उपयोग करें',
  },
  card3Btn: { en: 'Get Unstuck →', hi: 'समाधान पाएँ →' },
  precheckTitle: { en: 'Member Pre-Submission Checklist', hi: 'सदस्य दावा-पूर्व जाँच-सूची' },
  step1Title: { en: 'Select Your Claim Type', hi: 'अपना दावा प्रकार चुनें' },
  documentChecklist: { en: 'Document Checklist', hi: 'दस्तावेज़ जाँच-सूची' },
  processingTime: { en: 'Estimated Processing Time', hi: 'अनुमानित प्रक्रिया समय' },
  formsRequired: { en: 'Forms Required', hi: 'आवश्यक फॉर्म' },
  step2of2: { en: 'Step 2 of 2', hi: 'चरण 2 का 2' },
  question: { en: 'Question', hi: 'प्रश्न' },
  resultEligible: { en: '✅ ELIGIBLE TO FILE', hi: '✅ दावा करने के लिए योग्य' },
  resultAction: { en: '⚠️ ACTION REQUIRED BEFORE FILING', hi: '⚠️ दावा करने से पहले कार्रवाई आवश्यक' },
  copyAllFixes: { en: '📋 Copy All Fix Instructions', hi: '📋 सभी सुधार निर्देश कॉपी करें' },
  startOver: { en: 'Start Over', hi: 'फिर से शुरू करें' },
  statusTranslatorTitle: { en: 'Claim Status Decoder', hi: 'दावा स्थिति डिकोडर' },
  statusTranslatorSub: {
    en: 'Select the status shown on your EPFO portal:',
    hi: 'आपके EPFO पोर्टल पर दिखाई गई स्थिति चुनें:',
  },
  meaningLabel: { en: 'What this means:', hi: 'इसका अर्थ:' },
  actionLabel: { en: 'What to do:', hi: 'क्या करें:' },
  timelineLabel: { en: '⏱ Timeline:', hi: '⏱ समय-सीमा:' },
  escalateHint: {
    en: 'If unchanged after {days} days → go to Escalation Guide →',
    hi: '{days} दिनों बाद भी अपरिवर्तित रहने पर → एस्केलेशन गाइड पर जाएँ →',
  },
  unstuckTitle: { en: 'Grievance & Escalation Guide', hi: 'शिकायत एवं एस्केलेशन गाइड' },
  badgeInProgress: { en: 'IN PROGRESS', hi: 'प्रगति में' },
  badgeActionNeeded: { en: 'ACTION NEEDED', hi: 'कार्रवाई आवश्यक' },
  badgeUrgent: { en: 'URGENT', hi: 'तत्काल' },
}

export type CommonKey = keyof typeof commonStrings

interface LanguageContextValue {
  lang: Lang
  setLang: (lang: Lang) => void
  toggleLang: () => void
  t: (key: CommonKey) => string
  tb: (bilingual: Bilingual) => string
}

const LanguageContext = createContext<LanguageContextValue | null>(null)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>('en')

  const value = useMemo<LanguageContextValue>(() => {
    const tb = (bilingual: Bilingual) => bilingual[lang]
    const t = (key: CommonKey) => commonStrings[key][lang]
    return {
      lang,
      setLang,
      toggleLang: () => setLang((prev) => (prev === 'en' ? 'hi' : 'en')),
      t,
      tb,
    }
  }, [lang])

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const ctx = useContext(LanguageContext)
  if (!ctx) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return ctx
}
