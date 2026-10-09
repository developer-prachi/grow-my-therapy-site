/**
 * All homepage copy lives here, in one file, so the whole site can be
 * re-written without touching layout code.
 *
 * Single source of truth: Dr. Maya Reynolds' profile (Google Doc).
 * Every line below comes from that profile. Nothing is invented
 * (no phone, email, pricing, insurance or credentials beyond what it states).
 */

export const therapist = {
  name: "Dr. Maya Reynolds, PsyD",
  shortName: "Dr. Maya Reynolds",
  title: "Licensed Clinical Psychologist",
  city: "Santa Monica",
  region: "CA",
  regionLong: "California",
  address: {
    street: "123th Street 45 W", // spelled exactly as in the profile
    city: "Santa Monica",
    region: "CA",
    zip: "90401",
  },
} as const;

export const seo = {
  title: "Anxiety & Trauma Therapy in Santa Monica, CA | Dr. Maya Reynolds, PsyD",
  description:
    "Dr. Maya Reynolds, PsyD is a licensed clinical psychologist in Santa Monica, CA offering anxiety, panic, trauma, EMDR and burnout therapy for adults, in person or by secure telehealth across California.",
  keywords: [
    "anxiety therapy Santa Monica",
    "trauma therapy Santa Monica CA",
    "EMDR therapist Santa Monica",
    "burnout counseling Santa Monica",
    "licensed clinical psychologist Santa Monica",
    "online therapy California",
  ],
} as const;

/** Same structure as the original header: 5 text items (3 with dropdowns) + an outlined button. */
export const nav = {
  links: [
    { label: "About", href: "/#about" },
    {
      label: "Specialties",
      href: "/#specialties",
      // each option scrolls to its OWN target (ids live in `specialties.items` / `methodAnchors` below)
      children: [
        { label: "Anxiety & Panic", href: "/#anxiety-panic" },
        { label: "Trauma & EMDR", href: "/#trauma-emdr" },
        { label: "Burnout Support", href: "/#burnout-support" },
      ],
    },
    {
      label: "Methods",
      href: "/#methods",
      children: [
        { label: "CBT", href: "/#cbt" },
        { label: "EMDR", href: "/#emdr" },
        { label: "Mindfulness", href: "/#mindfulness" },
        { label: "Body-oriented", href: "/#body-oriented" },
      ],
    },
    { label: "Our Office", href: "/#office" },
    { label: "FAQs", href: "/faqs" },
  ],
  cta: { label: "Contact", href: "/#contact" },
} as const;

export const hero = {
  eyebrow: "In-person and online therapy in Santa Monica & across CA",
  // H1: main specialty and location (SEO), with a script accent word
  headlineBefore: "Anxiety & trauma therapy in Santa Monica, CA to",
  headlineScript: "heal",
  headlineAfter: ".",
  sub: "Practical tools and real depth for adults dealing with anxiety, panic, trauma, and burnout.",
  cta: { label: "Schedule a session", href: "#contact" },
  imageAlt:
    "Terracotta pot with a green plant on a sunlit windowsill beside a sheer curtain in a calm, quiet room",
} as const;

export const intro = {
  headline: "You seem to have it all together, but inside you’re exhausted.",
  // shown in uppercase by CSS, but stored in sentence case for accessibility
  lead: "At my Santa Monica practice, therapy is a space to slow down and reconnect.",
  textA:
    "Many of the adults I work with are high-achieving, thoughtful, and self-aware, yet feel exhausted, stuck in overthinking, or emotionally on edge. They look “functional” on the outside while quietly bracing for something to go wrong, with tension in the body.",
  textB:
    "If earlier life experiences are still affecting your relationships, your confidence, or your sense of safety, you’re not alone. First and foremost, I believe you should feel respected and understood. Many are entrepreneurs, creatives, or professionals who feel disconnected after years of pushing through stress. Together we’ll work at a pace that feels steady, supportive, and right for you.",
  imageAlt: "Tall eucalyptus tree reaching toward a bright sun flare in a soft sky",
} as const;

export const whoIHelp = {
  headlineBefore: "Who I",
  headlineScript: "help",
  items: [
    {
      title: "Professionals",
      text: "You’re capable and self-aware, but constant worry and overthinking leave you drained. Therapy gives you practical tools and space to feel steadier, in your mind and in your body.",
      imageAlt: "Calm home office with a wooden desk, ergonomic chair, plants and natural light",
    },
    {
      title: "Entrepreneurs",
      text: "After years of pushing through stress, it’s easy to feel disconnected from yourself. Burnout and perfectionism are common, and therapy becomes a space to slow down, reconnect, and build more sustainable ways to live and work.",
      imageAlt:
        "Bright artist’s studio with a large window, a worktable and a terracotta-orange chair",
    },
    {
      title: "Trauma healing",
      text: "Whether it began with one event or long-standing patterns from childhood, relationships, or chronic stress, we move carefully, with safety and stabilization first, so you feel more regulated in daily life, not only in session.",
      imageAlt: "Hands wrapped around a warm mug, a moment of comfort and safety",
    },
  ],
} as const;

export const quote = {
  before: "You deserve a place where you feel respected, understood, and involved.",
  italic: "You don’t have to keep bracing alone.",
  imageAlt: "Soft waves rolling onto a quiet shoreline at dusk",
} as const;

export const expertise = {
  headlineBefore: "Areas of",
  headlineScript: "expertise",
  columns: [
    ["Anxiety", "Panic", "Trauma", "Complex trauma", "Burnout", "Perfectionism"],
    [
      "Chronic stress",
      "Overthinking",
      "Difficulty sleeping",
      "Tension in the body",
      "Confidence & relationships",
      "…and more.",
    ],
  ],
} as const;

export const about = {
  eyebrow: "Meet your therapist",
  headline: "Hi, I’m Dr. Maya Reynolds.",
  lead: "A licensed clinical psychologist in Santa Monica, helping adults overwhelmed by anxiety, stress, and burnout.",
  textA:
    "I take a warm, collaborative, and grounded approach to therapy. Sessions are structured enough to feel supportive, while leaving space for reflection and depth. I integrate CBT, EMDR, mindfulness-based practices, and body-oriented techniques to help you understand both the emotional and physiological sides of what you’re experiencing. Safety and stabilization come first.",
  textB:
    "I believe therapy works best when you feel respected, understood, and actively involved. My goal is not just symptom relief, but helping you develop insight, resilience, and a stronger relationship with yourself. If you’re looking for a therapist who combines practical tools with depth-oriented work, and who understands the realities of a fast-paced life, I may be a good fit. Therapy can become a space to slow down, reconnect, and develop more sustainable ways of living and working.",
  cta: { label: "Read common questions", href: "/faqs" },
  imageAlt: "Portrait of Dr. Maya Reynolds, PsyD, licensed clinical psychologist in Santa Monica, CA",
} as const;

/**
 * The four method names inside the bio paragraph (`about.textA`) become scroll targets
 * for the "Methods" dropdown. Listed in the order they appear in that sentence.
 */
export const methodAnchors = [
  { id: "cbt", match: "CBT" },
  { id: "emdr", match: "EMDR" },
  { id: "mindfulness", match: "mindfulness-based practices" },
  { id: "body-oriented", match: "body-oriented techniques" },
] as const;

export const honoring = {
  before: "Making peace with the past you’ve carried",
  script: "&",
  after: "building a steadier future.",
  imageAlt: "Pale sun above a calm ocean horizon, a steady path forward",
} as const;

export const specialties = {
  headlineBefore: "My",
  headlineScript: "specialties",
  headlineAfter: "include…",
  cta: "Book a session",
  items: [
    {
      id: "anxiety-panic",
      title: "Anxiety & Panic",
      text: "Constant worry, a racing mind, tension in your body, and trouble sleeping can leave you always on edge. With CBT, mindfulness, and body-oriented techniques, we’ll work with both thoughts and physical sensations so you feel calmer, more in control, and less on edge.",
    },
    {
      id: "trauma-emdr",
      title: "Trauma & EMDR",
      text: "Whether it began with one event or long-standing patterns from childhood, relationships, or chronic stress, we’ll go at a careful pace. With EMDR and a focus on safety and stabilization, you’ll feel more regulated in daily life, not just during sessions, and more grounded.",
    },
    {
      id: "burnout-support",
      title: "Burnout Support",
      text: "Years of pushing through stress can leave professionals, entrepreneurs, and creatives feeling disconnected from themselves. Therapy is a space to slow down, ease high internal pressure, reconnect with yourself, and find more sustainable ways to live and work.",
    },
  ],
} as const;

export const office = {
  eyebrow: "Our office",
  headlineBefore: "A",
  headlineScript: "calm",
  headlineAfter: ", private space in Santa Monica",
  text: [
    "My Santa Monica office is a quiet, private space designed to feel calm and grounding, with natural light and a comfortable, uncluttered environment. Clients often share that the space itself helps them feel more at ease when they arrive.",
    "Prefer to meet from home? I also offer secure telehealth sessions for clients located in California, so you can choose the setting that feels most comfortable.",
  ],
  features: [
    { label: "Quiet & private", detail: "A space designed for calm" },
    { label: "Natural light", detail: "Comfortable and uncluttered" },
    { label: "In person or online", detail: "Secure telehealth across CA" },
  ],
  location: "Visit my office",
  images: [
    {
      src: "/images/office-1.jpg",
      alt: "Therapy office in Santa Monica with sunlit tall windows, exposed brick, a soft grey sofa and a warm wood floor",
    },
    {
      src: "/images/office-2.jpg",
      alt: "Calm counseling room with a grey sofa, olive tree and bookshelf in soft natural light",
    },
  ],
} as const;

export const cta = {
  eyebrow: "Therapy in Santa Monica",
  headlineBefore: "Therapy that fits your busy, fast-paced",
  headlineScript: "life",
  headlineAfter: ".",
  text: [
    "If you’re looking for a therapist who combines practical tools with depth-oriented work, I may be a good fit. I offer in-person therapy from my Santa Monica office and secure telehealth for clients located in California, so you can choose the setting that feels most comfortable. Sessions feel supportive, with room for reflection. Many clients tell me the space itself helps them feel more at ease when they arrive.",
    "Use the button below to reach out and get started.",
  ],
  button: { label: "Begin therapy", href: "#contact" },
} as const;

export const footer = {
  blurb:
    "I offer in-person therapy from my Santa Monica office and secure telehealth sessions for clients located in California, whichever works best for you. Getting started is simple.",
  navigateTitle: "Navigate",
  navigate: [
    { label: "Home", href: "/" },
    { label: "About", href: "/#about" },
    { label: "FAQs", href: "/faqs" },
    { label: "Contact", href: "/#contact" },
  ],
  specialtiesTitle: "Specialties",
  specialties: [
    { label: "Anxiety & Panic", href: "/#anxiety-panic" },
    { label: "Trauma & EMDR", href: "/#trauma-emdr" },
    { label: "Burnout Support", href: "/#burnout-support" },
  ],
  contactTitle: "Contact",
  contactCta: "Send a message",
  serving: "Serving adults in Santa Monica and, via secure telehealth, across California.",
  legal: "© 2026 Dr. Maya Reynolds, PsyD | Licensed Clinical Psychologist | CA",
} as const;

/**
 * The "Request a session" pop-up opened by every Contact / Book button.
 * The profile has no phone or email, so nothing is invented: this is a front-end-only form
 * (nothing is sent anywhere) and it says so. Session types come straight from the profile.
 */
export const contactDialog = {
  eyebrow: "Request a session",
  title: "Let’s talk about what you need",
  intro:
    "I offer in-person therapy from my Santa Monica office and secure telehealth for clients located in California.",
  nameLabel: "Your name",
  emailLabel: "Email",
  modeLabel: "How would you like to meet?",
  modes: [
    "In person at my Santa Monica office",
    "Secure telehealth, within California",
    "I’m not sure yet",
  ],
  messageLabel: "Anything you’d like me to know? (optional)",
  submit: "Send message",
  draftNote: "Draft preview: this form isn’t connected yet, so nothing is sent.",
  sentTitle: "Thank you",
  sentText:
    "This is a draft website, so your message hasn’t been sent anywhere. Once Dr. Reynolds connects her email or booking tool, requests will reach her directly.",
  close: "Close",
} as const;

export const faqs = {
  title: "Questions?",
  intro: "Common questions about anxiety and trauma therapy in Santa Monica, CA.",
  moreBefore: "If you don’t see your question here, feel free to",
  moreLink: "reach out",
  moreAfter: " and I’ll be glad to help.",
  items: [
    {
      q: "Do you offer in-person therapy in Santa Monica?",
      a: "Yes. I see clients in person at my Santa Monica, California office. It’s a quiet, private space with natural light and a comfortable, uncluttered environment.",
    },
    {
      q: "Is online therapy available?",
      a: "Yes. I offer secure telehealth sessions for clients located in California, so you can choose the setting that feels most comfortable.",
    },
    {
      q: "Who do you work with?",
      a: "I work with adults who feel overwhelmed by anxiety, stress, or the lingering effects of past experiences. Many of my clients are high-achieving, thoughtful, and self-aware. Many are also entrepreneurs, creatives, or professionals who feel exhausted, stuck in overthinking, or emotionally on edge.",
    },
    {
      q: "What do you help with?",
      a: "My work often focuses on anxiety, panic, trauma, and burnout. I also support clients dealing with perfectionism and high internal pressure, as well as the impact of earlier life experiences on relationships, confidence, and sense of safety.",
    },
    {
      q: "What types of therapy do you use?",
      a: "I integrate evidence-based methods such as cognitive-behavioral therapy (CBT), EMDR, mindfulness-based practices, and body-oriented techniques, so we can work with both the emotional and the physiological sides of what you’re experiencing.",
    },
    {
      q: "How do you approach trauma therapy?",
      a: "I work with adults who have experienced single-incident trauma as well as more complex, long-standing patterns that may stem from childhood, relationships, or chronic stress. The work is paced carefully, with an emphasis on safety and stabilization, and on helping you feel more regulated in your daily life, not just during sessions.",
    },
    {
      q: "What can I expect in a session?",
      a: "My approach is warm, collaborative, and grounded. Sessions are structured enough to feel supportive, while leaving space for reflection and depth. You’ll be respected, understood, and actively involved in the process.",
    },
    {
      q: "Is therapy with you a good fit for me?",
      a: "If you’re looking for a therapist who combines practical tools with depth-oriented work, and who understands the realities of living and working in a fast-paced environment, I may be a good fit.",
    },
  ],
} as const;
