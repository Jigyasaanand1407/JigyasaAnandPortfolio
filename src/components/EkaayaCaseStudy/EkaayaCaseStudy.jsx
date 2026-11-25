import React from 'react';
import CaseStudyLayout from '../../pages/CaseStudyLayout/CaseStudyLayout';
import visual1 from '../../assets/Multi-Doctor-Smart-Calendar.svg'
import visual2 from '../../assets/patient-profile.svg'
import visual3 from '../../assets/Practice-dashboard.svg'
import visual4 from '../../assets/Practive-Settings.svg'

const EKAAYA_DATA = {
  theme: 'ekaaya',
  category: 'Enterprise Healthcare SaaS',
  eyebrow: 'Case Study 01 — Web SaaS Platform',
  title: 'Ekaaya Doc',
  tagline: 'Unified Clinic Management, EHR & Cashless OPD Platform for Multi-Specialty Practices',
  overview: {
    product:
      'Ekaaya Doc is an end-to-end clinical practice management web application designed for Indian doctors, clinic owners, and front-desk administrators to manage appointments, patient EMRs, lab orders, and GST-compliant billing.',
    problem:
      'Clinics juggle disconnected software for walk-in queues, paper prescriptions, diagnostic reports, and invoicing—causing front-desk bottlenecks and slowing down patient consultations.',
    goal:
      'Consolidate patient onboarding (with ABHA ID integration), multi-doctor scheduling, modular clinical charting, and automated billing into one high-speed workspace.',
    role: 'Lead UI/UX Designer',
    responsibilities: 'User Research, Information Architecture, Wireframing, Design System, Interactive Prototyping',
    duration: '2025 – 2026',
    platform: 'Desktop & Tablet Web SaaS',
    scope: '78+ Core Screens & 16-Module Settings Suite',
  },
  research: {
    summary:
      'I interviewed clinic receptionists, general physicians, and clinic administrators to observe daily OPD workflows. Initially, I assumed doctors needed extensive customization on every prescription; research revealed they actually wanted 1-click clinical templates and instant vitals access so they could stay focused on the patient.',
    painPoints: [
      {
        title: 'Walk-In vs. Online Queue Chaos',
        description: 'Receptionists lacked real-time visibility into waiting times, engaged consultations, and no-shows across multiple doctors.',
      },
      {
        title: 'Repetitive Clinical Data Entry',
        description: 'Physicians spent valuable consultation minutes re-typing common diagnoses, vitals, and lab panels for recurring conditions.',
      },
      {
        title: 'Fragmented Patient Records',
        description: 'Previous lab PDFs, family links, and insurance eligibility were buried across separate folders and manual registers.',
      },
      {
        title: 'Uncontrolled Staff Permissions',
        description: 'Clinic owners needed strict Role-Based Access Control (RBAC) so front-desk staff could bill without altering clinical notes.',
      },
    ],
    persona: {
      name: 'Dr. Arvind Mehta (Clinic Director & Physician)',
      demographics: '42 • Runs a 4-doctor multi-specialty outpatient clinic',
      problemStatement:
        'Dr. Arvind Mehta is a busy outpatient clinic director who needs a unified queue, charting, and billing dashboard because switching between manual registers and separate billing tools delays patient consultations and causes revenue leakage.',
    },
  },
  designStart: {
    intro:
      'I mapped the clinic lifecycle from patient token generation to post-visit invoicing, structuring the interface around a persistent left navigation rail and context-preserving slide-over drawers.',
    wireframes: [
      {
        title: 'Multi-Doctor Smart Calendar & Live Queue',
        notes: 'Combined Day/Week/Month calendar views with a live "Today\'s Schedule" sidebar showing Waiting, Engaged, and Done statuses with real-time wait timers.',
        image: visual1,
      },
      {
        title: 'Unified Patient Profile & Charting Drawer',
        notes: 'Designed a single-screen patient hub integrating ABHA ID lookup, vitals tracking, 1-click medical history tags, and reusable condition templates.',
        image: visual2,
      },
    ],
    usabilityFindings: [
      {
        roundTitle: 'Round 1 Findings (Front-Desk Triage)',
        points: [
          'Receptionists needed instant search by both Token Number and ABHA ID during peak morning hours.',
          'Adding a color-coded status pill (Waiting / Engaged / Done) reduced queue check-in errors.',
        ],
      },
      {
        roundTitle: 'Round 2 Findings (Physician Charting)',
        points: [
          'Doctors preferred slide-over drawers over full-page redirects when adding lab orders or prescriptions.',
          'Auto-populating invoice line items directly from completed procedures saved ~3 minutes per checkout.',
        ],
      },
    ],
  },
  refining: {
    intro:
      'The final high-fidelity UI balances high information density with calm clinical blue accents, clear typographic hierarchy, and strict visual separation between clinical and administrative actions.',
    mockups: [
      {
        title: 'Executive Practice Dashboard',
        description: 'Features KPI cards (Appointments, New Patients, Earnings), Patient Quota donut analytics, weekly OPD insurance sales charts, and an active patient quick-action table.',
        image: visual3,
      },
      {
        title: '16-Module RBAC & Practice Settings',
        description: 'Granular permission matrix for Owners, Admins, Doctors, and Receptionists alongside custom invoice prefixes, tax catalogs, and thermal printout formatting.',
        image: visual4,
      },
    ],
    accessibility: [
      {
        title: 'WCAG AA Contrast on Data Tables',
        detail: 'High-contrast slate typography and distinct semantic status badges ensure rapid readability under bright clinic lighting.',
      },
      {
        title: 'Keyboard-Friendly Data Entry',
        detail: 'Structured tab-order across vitals, drug catalogs, and billing fields allows rapid keyboard-first input during consultations.',
      },
      {
        title: 'Redundant Status Indicators',
        detail: 'Queue states and payment statuses combine color coding with explicit text labels and icons rather than relying on color alone.',
      },
    ],
  },
  takeaways: {
    impact:
      'Delivered a scalable 78-screen SaaS architecture capable of supporting solo practitioners and multi-doctor clinics with integrated cashless OPD workflows.',
    learned:
      'Designing for high-density healthcare environments taught me that speed comes from progressive disclosure—keeping daily actions 1 click away while tucking deep configuration into a structured settings engine.',
    nextSteps: [
      'Introduce voice-to-text clinical note dictation for faster hands-free charting.',
      'Design a companion patient mobile portal for viewing prescriptions and lab reports.',
      'Conduct longitudinal time-motion studies across live pilot clinics.',
    ],
  },
  nextProject: {
    title: 'Cheezoo — Web Photography Marketplace',
    path: '/projects/cheezoo-web',
  },
};

export default function EkaayaCaseStudy() {
  return <CaseStudyLayout data={EKAAYA_DATA} />;
}