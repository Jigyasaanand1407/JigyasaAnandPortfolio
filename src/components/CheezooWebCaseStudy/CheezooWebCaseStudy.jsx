import React from 'react';
import CaseStudyLayout from '../../pages/CaseStudyLayout/CaseStudyLayout';

const CHEEZOO_WEB_DATA = {
  theme: 'cheezoo',
  category: 'Two-Sided Marketplace & SaaS',
  eyebrow: 'Case Study 02 — Responsive Web Platform',
  title: 'Cheezoo Web',
  tagline: 'Event Photography Marketplace, Collaborative Shot-List Planner & Print Store',
  overview: {
    product:
      'Cheezoo Web is a two-sided marketplace and collaborative event workspace where event hosts discover vetted photographers, co-plan multi-day shot lists, manage gallery sharing consent, and order physical prints.',
    problem:
      'Booking event photographers suffers from opaque package pricing, scattered shot-list spreadsheets, and expiring third-party download links—while photographers lack structured tools for multi-day schedules and print upsells.',
    goal:
      'Create an end-to-end web platform that pairs transparent tiered booking with a collaborative event command center and subscription-backed photo commerce.',
    role: 'Lead Product Designer',
    responsibilities: 'Marketplace Architecture, Dual-Role Flows, Wireframing, Component Library, Prototyping',
    duration: '2025 – 2026',
    platform: 'Responsive Web Application',
    scope: '105+ Web Screens (Client & Photographer Portals)',
  },
  research: {
    summary:
      'Through interviews with wedding/event hosts and freelance photographers, I uncovered that booking is only 20% of the friction. The biggest stress happens during pre-event coordination (aligning on must-have ceremony shots) and post-event privacy control.',
    painPoints: [
      {
        title: 'Opaque Package Comparisons',
        description: 'Clients struggled to compare hourly rates, deliverable photo counts, and turnaround times across photographers.',
      },
      {
        title: 'Disconnected Shot-List Coordination',
        description: 'Must-have ceremony shots were lost across WhatsApp messages and PDFs between hosts, coordinators, and photographers.',
      },
      {
        title: 'Uncontrolled Photo Sharing',
        description: 'Event owners lacked a way to approve or restrict whether guests or photographers could publicly share specific albums.',
      },
      {
        title: 'Photographer Payout & KYC Friction',
        description: 'Creators needed clear Stripe Connect onboarding, custom availability windows, and automated cancellation policies.',
      },
    ],
    persona: {
      name: 'Riya Kapoor (Event Host & Bride-to-Be)',
      demographics: '29 • Planning a 3-day destination wedding',
      problemStatement:
        'Riya Kapoor is an event organizer who needs a transparent photography marketplace with shared multi-day shot lists and consent-controlled galleries because coordinating vendors and family photo lists across separate apps is overwhelming.',
    },
  },
  designStart: {
    intro:
      'I designed a dual-role architecture allowing seamless switching between Client Mode and Photographer Studio Mode, anchored by an interactive multi-day Event Command Center.',
    wireframes: [
      {
        title: 'Tiered Package Discovery & Checkout',
        notes: 'Structured photographer profiles around standardized Silver, Gold, and Platinum tiers with clear hours, edited photo counts, coupon support, and Stripe checkout.',
        image: null,
      },
      {
        title: 'Multi-Day Shot-List & Event Workspace',
        notes: 'Built a collaborative timeline where hosts, coordinators, and photographers import ceremony templates, pin venue maps, and track local weather forecasts.',
        image: null,
      },
    ],
    usabilityFindings: [
      {
        roundTitle: 'Round 1 Findings (Client Discovery & Planning)',
        points: [
          'Adding reusable ceremony shot-list templates (Entrance, Vows, Family Portraits) cut event setup time in half.',
          'Separating invite roles into "Friend" (view/share) vs. "Coordinator" (edit shot lists) prevented accidental edits.',
        ],
      },
      {
        roundTitle: 'Round 2 Findings (Gallery & Print Store)',
        points: [
          'Introducing an explicit Owner Consent approval modal built strong trust around private event albums.',
          'Inline print size and material previews increased print-cart completion during testing.',
        ],
      },
    ],
  },
  refining: {
    intro:
      'The visual system uses a clean editorial monochrome palette so high-resolution event photography remains the undisputed focal point across galleries, profiles, and print previews.',
    mockups: [
      {
        title: 'Ceremony-Categorized Gallery & Consent Hub',
        description: 'Organizes delivered photos by event segment with one-click favoriting, third-party share consent toggles, and direct print ordering.',
        image: null,
      },
      {
        title: 'Photographer Studio & Stripe KYC Portal',
        description: 'Equips creators with government ID verification, weekly/date-specific availability calendars, custom package builders, and payout tracking.',
        image: null,
      },
    ],
    accessibility: [
      {
        title: 'Editorial High-Contrast Monochrome UI',
        detail: 'Crisp charcoal and pure white surfaces guarantee AAA text legibility without clashing with colorful event photography.',
      },
      {
        title: 'Clear Multi-Step Progress Indicators',
        detail: 'Booking, KYC verification, and print checkout flows display explicit step trackers and persistent summary sidebars.',
      },
      {
        title: 'Descriptive Alt & Ceremony Tagging',
        detail: 'Structured album sections and labeled action buttons support screen-reader navigation across large photo galleries.',
      },
    ],
  },
  takeaways: {
    impact:
      'Unified marketplace discovery, collaborative event planning, and post-event print commerce into a cohesive 105-screen web ecosystem.',
    learned:
      'Two-sided marketplaces succeed when both sides gain workflow tools—giving photographers a real studio management suite made the platform indispensable beyond lead generation.',
    nextSteps: [
      'Add AI-assisted face grouping so guests can instantly filter galleries for their own photos.',
      'Introduce dynamic seasonal pricing rules for peak wedding dates.',
      'Expand the print store with custom hardcover photo book layouts.',
    ],
  },
  nextProject: {
    title: 'Cheezoo — iOS & Android Mobile App',
    path: '/projects/cheezoo-mobile',
  },
};

export default function CheezooWebCaseStudy() {
  return <CaseStudyLayout data={CHEEZOO_WEB_DATA} />;
}