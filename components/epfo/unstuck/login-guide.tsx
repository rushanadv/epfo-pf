'use client'

import { useLanguage } from '@/lib/epfo/i18n'
import { SectionCard } from '@/components/epfo/section-card'

export function LoginGuide() {
  const { lang } = useLanguage()

  const steps =
    lang === 'en'
      ? [
          'OTP is sent to the mobile number linked with your Aadhaar — not necessarily your UAN mobile number.',
          'Check your Aadhaar-linked mobile via UIDAI (myaadhaar.uidai.gov.in) to confirm it is active.',
          'If the number is outdated, visit an Aadhaar Seva Kendra to update it (takes up to 72 hours to sync with EPFO).',
          'As an alternative, try logging in through the UMANG app, which sometimes uses a separate OTP flow.',
          'Still stuck? Call the EPFO helpline at 1800 118 005 (toll-free, Mon–Sat, 9am–6pm) for manual verification.',
        ]
      : [
          'OTP आपके आधार से जुड़े मोबाइल नंबर पर भेजा जाता है — जरूरी नहीं कि यह आपका UAN मोबाइल नंबर हो।',
          'UIDAI (myaadhaar.uidai.gov.in) पर जाकर जाँचें कि आपका आधार-लिंक्ड मोबाइल सक्रिय है।',
          'यदि नंबर पुराना है, तो आधार सेवा केंद्र जाकर उसे अपडेट करें (EPFO के साथ सिंक होने में 72 घंटे तक लग सकते हैं)।',
          'विकल्प के रूप में, UMANG ऐप से लॉगिन करने का प्रयास करें, जो कभी-कभी अलग OTP प्रक्रिया का उपयोग करता है।',
          'फिर भी समस्या बनी रहे? मैन्युअल सत्यापन के लिए EPFO हेल्पलाइन 1800 118 005 (टोल-फ्री, सोम–शनि, सुबह 9 से शाम 6) पर कॉल करें।',
        ]

  return (
    <SectionCard title={lang === 'en' ? 'Cannot Log In — OTP Not Received' : 'लॉगिन नहीं हो पा रहा — OTP नहीं मिला'}>
      <ol className="flex flex-col gap-2.5 text-sm leading-relaxed">
        {steps.map((step, i) => (
          <li key={i} className="flex gap-2">
            <span className="font-bold text-epfo-navy">{i + 1}.</span>
            <span>{step}</span>
          </li>
        ))}
      </ol>
    </SectionCard>
  )
}
