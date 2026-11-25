import React from 'react';
import CaseStudyLayout from '../../pages/CaseStudyLayout/CaseStudyLayout';
import visual1 from '../../assets/Multi-Doctor-Smart-Calendar.svg'

const CHEEZOO_MOBILE_DATA = {
  theme: 'cheezoo',
  category: 'Consumer & Creator Mobile App',
  eyebrow: 'Case Study 03 — iOS & Android Application',
  title: 'Cheezoo Mobile',
  tagline: 'On-the-Go Event Coordination, Live Shot-List Checklists & Instant Photo Sharing',
  overview: {
    product:
      'Cheezoo Mobile is the companion iOS and Android app for clients, guests, and photographers to manage live event schedules, check off shot lists on location, chat in real time, and share albums instantly.',
    problem:
      'During live events, hosts and photographers are away from laptops—making it difficult to track schedule changes, check weather updates, verify shot completion, or approve photo sharing in real time.',
    goal:
      'Translate Cheezoo’s two-sided ecosystem into a thumb-friendly mobile experience optimized for live event-day execution and rapid gallery browsing.',
    role: 'Lead Mobile UI/UX Designer',
    responsibilities: 'Mobile Navigation Architecture, Touch Ergonomics, Wireframing, Interactive Mobile Prototypes',
    duration: '2025 – 2026',
    platform: 'iOS & Android Native Mobile App',
    scope: '176+ Mobile Screens (Client, Guest & Photographer Modes)',
  },
  research: {
    summary:
      'Field observations of event photographers and coordinators showed that mobile usage spikes on the day of the event. Users needed one-handed access to shot checklists, venue map pins, group chat, and instant push notifications.',
    painPoints: [
      {
        title: 'Event-Day Schedule & Weather Shifts',
        description: 'Outdoor shoots require instant visibility into hourly weather forecasts and venue map directions on mobile.',
      },
      {
        title: 'Missed Must-Have Shots Under Pressure',
        description: 'Photographers needed a fast, tappable shot checklist during chaotic ceremonies rather than scrolling through long documents.',
      },
      {
        title: 'Clunky Mobile Onboarding & Role Switching',
        description: 'Users who both hire photographers and offer photography services needed frictionless mode switching without separate accounts.',
      },
      {
        title: 'Slow Mobile Gallery Curation',
        description: 'Selecting favorites for print orders or approving guest share requests needed intuitive mobile gestures and bottom sheets.',
      },
    ],
    persona: {
      name: 'Kabir Malhotra (Freelance Event Photographer)',
      demographics: '27 • Shoots 15+ weddings and corporate events per month',
      problemStatement:
        'Kabir Malhotra is an on-location event photographer who needs a mobile command app with live shot checklists, client group chat, and instant booking alerts because carrying paper shot lists and chasing approvals slows him down on shoot days.',
    },
  },
  designStart: {
    intro:
      'I structured the mobile app around a clean bottom tab bar, progressive onboarding with guest browsing mode, and thumb-reachable bottom sheets for rapid actions.',
    wireframes: [
      {
        title: 'Guest Onboarding & Radius Photographer Search',
        notes: 'Enabled instant guest exploration before OTP signup, paired with bottom-sheet filters for city radius, shoot date, budget, and ratings.',
        image: visual1,
      },
      {
        title: 'Live Event-Day Shot Checklist & Group Chat',
        notes: 'Designed a mobile event hub combining hourly weather cards, tap-to-navigate map pins, interactive shot-list checkboxes, and real-time group messaging.',
        image: null,
      },
    ],
    usabilityFindings: [
      {
        roundTitle: 'Round 1 Findings (On-Location Ergonomics)',
        points: [
          'Moving primary shot-list actions and chat inputs to the lower third of the screen improved one-handed usability.',
          'Adding a prominent "View Map" and "Hourly Weather" card at the top of the event screen prevented missed timing cues.',
        ],
      },
      {
        roundTitle: 'Round 2 Findings (Photographer Mode & Notifications)',
        points: [
          'Photographers appreciated an instant toggle in Profile Settings to switch between Client and Creator modes.',
          'Actionable push notifications for new job offers and consent requests reduced response times.',
        ],
      },
    ],
  },
  refining: {
    intro:
      'Every mobile screen adheres to native iOS/Android touch-target guidelines (minimum 44×44pt), smooth card transitions, and distraction-free full-bleed photo viewing.',
    mockups: [
      {
        title: 'Mobile Event Command & Weather Card',
        description: 'Displays multi-day event tabs, live weather forecast, venue coordinates, coordinator roster, and interactive shot-list progress.',
        image: null,
      },
      {
        title: 'Full-Bleed Gallery, Consent & Print Checkout',
        description: 'Features swipeable ceremony albums, instant owner-consent approval sheets, and a streamlined mobile print cart with Apple/Google Pay and Stripe.',
        image: null,
      },
    ],
    accessibility: [
      {
        title: '44pt Minimum Touch Targets',
        detail: 'All filter chips, shot-list checkboxes, and bottom-bar actions are sized and spaced for effortless one-handed tapping.',
      },
      {
        title: 'Dynamic Type & Readable Hierarchy',
        detail: 'Clear typographic scale separates ceremony headers, timestamps, and location metadata at a glance outdoors.',
      },
      {
        title: 'Haptic & Visual Feedback States',
        detail: 'Checking off shots, favoriting photos, and submitting consent approvals trigger clear visual confirmation states.',
      },
    ],
  },
  takeaways: {
    impact:
      'Designed a comprehensive 176-screen mobile application bridging pre-event booking, live shoot-day coordination, and post-event gallery commerce.',
    learned:
      'Designing for mobile field use requires stripping away desktop complexity—prioritizing contextual glanceability (weather, next shot, venue pin) over dense tables.',
    nextSteps: [
      'Add offline caching for shot lists and venue maps in low-connectivity wedding venues.',
      'Integrate live GPS arrival sharing for photographers on event morning.',
      'Launch instant QR-code gallery passes for wedding guests.',
    ],
  },
  nextProject: {
    title: 'Ekaaya Doc — Enterprise Healthcare SaaS',
    path: '/projects/ekaaya',
  },
};

export default function CheezooMobileCaseStudy() {
  return <CaseStudyLayout data={CHEEZOO_MOBILE_DATA} />;
}