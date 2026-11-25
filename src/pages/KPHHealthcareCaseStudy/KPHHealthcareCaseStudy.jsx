import React, { useState } from 'react';
import {
  LayoutDashboard,
  MessageSquare,
  CheckSquare,
  FolderOpen,
  Settings,
  ShieldCheck,
  Layers,
  Users,
  Plus,
  CheckCircle2,
  Clock,
  AlertCircle,
  FileText,
  Download,
  Copy,
  Check,
  Eye,
  EyeOff,
  Lock,
} from 'lucide-react';
import './KPHHealthcareCaseStudy.scss';

const INITIAL_TASKS = [
  {
    id: 'TSK-104',
    name: 'Q1 Controlled Substance Inventory Audit',
    end: 'Feb 16, 2025',
    status: 'Active',
    dept: 'Pharmacy',
  },
  {
    id: 'TSK-108',
    name: 'Cold-Chain Refrigerator Temp Log Compliance',
    end: 'Feb 14, 2025',
    status: 'Pending',
    dept: 'Pharmacy',
  },
  {
    id: 'TSK-112',
    name: 'Seasonal Immunization Endcap Display',
    end: 'Feb 20, 2025',
    status: 'Active',
    dept: 'Merchandise',
  },
  {
    id: 'TSK-115',
    name: 'Kinney Rewards Wellness Flyer Rollout',
    end: 'Feb 24, 2025',
    status: 'Pending',
    dept: 'Marketing',
  },
];

const MESSAGES_DATA = [
  {
    id: 1,
    sender: 'Jaydon Lipshutz',
    role: 'Regional Pharmacy Director',
    segment: 'Kinney Drugs',
    subject: 'Urgent: FDA Recall Lot #449-B Quarantine Protocol',
    time: '11:44 AM',
    priority: 'High Priority',
    body: 'Hi Bella, please audit shelf stock for Lot #449-B across Store #042 before 4:00 PM today. Quarantine affected units in Vault B and confirm count via the attached compliance checklist.',
  },
  {
    id: 2,
    sender: 'Desirae Carder',
    role: 'Divisional Operations Lead',
    segment: 'AristaCare',
    subject: 'Updated HIPAA Technician Onboarding SOP (v4.2)',
    time: 'Yesterday',
    priority: 'Normal',
    body: 'All Store Managers must ensure newly hired pharmacy technicians complete the updated HIPAA privacy module within 7 days of onboarding.',
  },
  {
    id: 3,
    sender: 'Lindsey Schleifer',
    role: 'Compliance Auditor',
    segment: 'ProAct',
    subject: 'Monthly Narcotics Reconciliation Sign-Off',
    time: 'Feb 06',
    priority: 'High Priority',
    body: 'Reminder: Dual-signature verification logs for Schedule II disbursements are due every Friday by 6:00 PM EST.',
  },
];

const RESOURCES_DATA = [
  {
    title: 'Schedule_II_Disbursement_SOP_2025.pdf',
    updated: 'Jan 18, 2025',
    category: 'Pharmacy',
    access: 'Store Managers & Pharmacists',
  },
  {
    title: 'Cold_Chain_Excursion_Response_Guide.xlsx',
    updated: 'Jan 24, 2025',
    category: 'Dairy',
    access: 'All Facility Staff',
  },
  {
    title: 'OTC_Allergy_Planogram_Spring25.pdf',
    updated: 'Feb 02, 2025',
    category: 'Medicine',
    access: 'Merchandise & Store Leads',
  },
  {
    title: 'HIPAA_Patient_Counseling_Checklist.pdf',
    updated: 'Feb 05, 2025',
    category: 'Pharmacy',
    access: 'KPH Network Wide',
  },
];

const PERMISSION_ROWS = [
  { feature: 'Send High Priority Broadcasts', superUser: true, kphAdmin: true, divAdmin: true, regMgr: true, storeMgr: false },
  { feature: 'Message Auditing & Read Receipts', superUser: true, kphAdmin: true, divAdmin: true, regMgr: false, storeMgr: false },
  { feature: 'Create Multi-Step Tasks & Surveys', superUser: true, kphAdmin: true, divAdmin: true, regMgr: true, storeMgr: true },
  { feature: 'Upload & Tag Network SOP Resources', superUser: true, kphAdmin: true, divAdmin: true, regMgr: false, storeMgr: false },
  { feature: 'Terminate / Provision Facility Users', superUser: true, kphAdmin: true, divAdmin: false, regMgr: false, storeMgr: false },
];

const JOURNEY_STEPS = [
  {
    step: '01 / DISCOVERY',
    title: 'Role & Hierarchy Mapping',
    short: 'Audited 6 user tiers from Store Managers to Super Users.',
    detail:
      'Mapped daily workflows across Kinney Drugs, AristaCare, Health Direct, and ProAct to eliminate duplicate reporting between regional leads and store pharmacists.',
  },
  {
    step: '02 / ARCHITECTURE',
    title: '5-Pillar Navigation IA',
    short: 'Unified Dashboard, Comms, Tasks, Resources & Settings.',
    detail:
      'Consolidated fragmented tools into a persistent left-rail workspace so store teams can switch from urgent recall alerts to SOP downloads in one click.',
  },
  {
    step: '03 / WIZARD UX',
    title: 'Conditional Stepper Flows',
    short: 'Dynamic 4-step vs. 5-step task & survey builder.',
    detail:
      'Introduced progressive disclosure: toggling "Associated Materials: No" automatically collapses the material upload step, reducing form completion time by ~35%.',
  },
  {
    step: '04 / UI SYSTEM',
    title: 'Dual-Theme Token System',
    short: 'High-contrast Light & Dark parity for long shifts.',
    detail:
      'Engineered semantic status colors and tabular numerals to keep dense multi-facility tables scannable without eye strain.',
  },
];

const COLOR_SWATCHES = [
  { name: 'KPH Deep Navy', hex: '#1A2756', role: 'Primary CTA & Nav' },
  { name: 'Clinical Canvas', hex: '#F8F9FB', role: 'App Surface' },
  { name: 'Compliance Emerald', hex: '#16A34A', role: 'Active State' },
  { name: 'Pending Amber', hex: '#D97706', role: 'Review Queue' },
  { name: 'Recall Crimson', hex: '#DC2626', role: 'High Priority' },
  { name: 'Back-Office Dark', hex: '#111827', role: 'Dark Mode Surface' },
];

export default function KPHHealthcareCaseStudy() {
  const [heroView, setHeroView] = useState('dashboard');
  const [showPassword, setShowPassword] = useState(false);
  const [activeJourney, setActiveJourney] = useState(0);
  const [copiedHex, setCopiedHex] = useState(null);

  const [activeModule, setActiveModule] = useState('dashboard');
  const [taskFilter, setTaskFilter] = useState('All');
  const [selectedSegment, setSelectedSegment] = useState('All');
  const [selectedMsg, setSelectedMsg] = useState(MESSAGES_DATA[0]);
  const [hasMaterials, setHasMaterials] = useState(true);
  const [wizardStep, setWizardStep] = useState(1);
  const [resourceCat, setResourceCat] = useState('All');
  const [permissions, setPermissions] = useState(PERMISSION_ROWS);

  const handleCopyHex = (hex) => {
    if (navigator.clipboard) navigator.clipboard.writeText(hex);
    setCopiedHex(hex);
    setTimeout(() => setCopiedHex(null), 1500);
  };

  const togglePermission = (rowIdx, roleKey) => {
    setPermissions((prev) =>
      prev.map((row, idx) => (idx === rowIdx ? { ...row, [roleKey]: !row[roleKey] } : row))
    );
  };

  const filteredTasks =
    taskFilter === 'All' ? INITIAL_TASKS : INITIAL_TASKS.filter((t) => t.status === taskFilter);

  const filteredMessages =
    selectedSegment === 'All'
      ? MESSAGES_DATA
      : MESSAGES_DATA.filter((m) => m.segment === selectedSegment);

  const filteredResources =
    resourceCat === 'All'
      ? RESOURCES_DATA
      : RESOURCES_DATA.filter((r) => r.category === resourceCat);

  const wizardStepsList = hasMaterials
    ? ['1. Task Details', '2. Add Material', '3. Add Survey', '4. Assignees', '5. Summary']
    : ['1. Task Details', '2. Add Survey', '3. Assignees', '4. Summary'];

  return (
    <div className="kph-cs-root">
      {/* Section 1: Hero */}
      <section id="kph-overview" className="kph-hero">
        <div className="kph-container kph-hero__grid">
          <div>
            <div className="kph-hero__badge">
              <ShieldCheck size={14} />
              <span>Enterprise Healthcare & Pharmacy Operations</span>
            </div>
            <h1 className="kph-hero__title">
              KPH Healthcare — <span>Unified Pharmacy Operations</span> Platform
            </h1>
            <p className="kph-hero__desc">
              Transforming fragmented store-level workflows across Kinney Drugs, AristaCare, Health
              Direct, and ProAct into a single high-clarity workspace for task orchestration,
              compliance surveys, and role-governed communications.
            </p>

            <div className="kph-hero__tags">
              {['Enterprise UX', 'SaaS Dashboard', 'Healthcare Ops', 'Design System', 'RBAC Matrix'].map(
                (tag) => (
                  <span key={tag}>{tag}</span>
                )
              )}
            </div>

            <div className="kph-hero__meta">
              <div>
                <span>Role</span>
                <strong>Lead UI/UX Designer</strong>
              </div>
              <div>
                <span>Scope</span>
                <strong>End-to-End Web App (60+ Screens)</strong>
              </div>
              <div>
                <span>Deliverables</span>
                <strong>IA, Flows, Dual-Theme System</strong>
              </div>
            </div>
          </div>

          {/* Interactive Hero Window */}
          <div className="kph-hero-window">
            <div className="kph-hero-window__bar">
              <div className="kph-dots">
                <i />
                <i />
                <i />
              </div>
              <span>kph-healthcare-ops.app</span>
              <div className="kph-switch">
                <button
                  className={heroView === 'dashboard' ? 'is-active' : ''}
                  onClick={() => setHeroView('dashboard')}
                >
                  Dashboard
                </button>
                <button
                  className={heroView === 'login' ? 'is-active' : ''}
                  onClick={() => setHeroView('login')}
                >
                  Auth Screen
                </button>
              </div>
            </div>

            {heroView === 'dashboard' ? (
              <div className="kph-hero-window__body">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px', flexWrap: 'wrap', gap: '8px' }}>
                  <div>
                    <div style={{ fontSize: '11px', color: 'var(--kph-text-muted)', fontWeight: 600 }}>
                      KINNEY DRUGS • STORE #042
                    </div>
                    <div style={{ fontFamily: 'Poppins', fontWeight: 700, fontSize: '16px' }}>
                      Hey Bella, track team progress here!
                    </div>
                  </div>
                  <span className="kph-pill kph-pill--active">● Store Manager</span>
                </div>

                <div className="kph-kpis">
                  <div className="kph-kpi">
                    <span>Active Tasks</span>
                    <strong>13</strong>
                  </div>
                  <div className="kph-kpi">
                    <span>Pending</span>
                    <strong>04</strong>
                  </div>
                  <div className="kph-kpi">
                    <span>Urgent Alerts</span>
                    <strong style={{ color: 'var(--kph-red)' }}>02</strong>
                  </div>
                </div>

                <div style={{ border: '1px solid var(--kph-border)', borderRadius: '12px', padding: '12px' }}>
                  <div style={{ fontSize: '11px', fontWeight: 700, color: 'var(--kph-text-muted)', marginBottom: '6px' }}>
                    PRIORITY STORE EXECUTION QUEUE
                  </div>
                  {INITIAL_TASKS.slice(0, 3).map((t) => (
                    <div
                      key={t.id}
                      style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        gap: '8px',
                        padding: '8px 0',
                        borderTop: '1px solid var(--kph-border)',
                        fontSize: '12px',
                      }}
                    >
                      <span style={{ fontWeight: 600 }}>{t.name}</span>
                      <span className={`kph-pill kph-pill--${t.status === 'Active' ? 'active' : 'pending'}`}>
                        {t.status}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <div className="kph-login-grid">
                <div style={{ background: '#1A2756', color: '#FFFFFF', padding: '22px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                  <div style={{ fontFamily: 'Poppins', fontWeight: 700, fontSize: '17px' }}>
                    KPH HEALTHCARE
                  </div>
                  <div style={{ margin: '16px 0' }}>
                    <h4 style={{ color: '#FFFFFF', fontSize: '17px', marginBottom: '6px' }}>
                      Start your Journey with Us.
                    </h4>
                    <p style={{ fontSize: '12px', color: '#CBD5E1' }}>
                      Discover unified pharmacy operations across every branch and regional division.
                    </p>
                  </div>
                  <div style={{ fontSize: '11px', color: '#94A3B8' }}>Dual-Theme Enterprise Portal</div>
                </div>
                <div style={{ padding: '22px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  <div style={{ fontSize: '12px', fontWeight: 600 }}>Username *</div>
                  <input
                    readOnly
                    value="bella.norton@kph.com"
                    style={{
                      padding: '8px 12px',
                      borderRadius: '9px',
                      border: '1px solid var(--kph-border)',
                      background: 'var(--kph-bg-subtle)',
                      color: 'var(--kph-text-primary)',
                      fontSize: '12px',
                    }}
                  />
                  <div style={{ fontSize: '12px', fontWeight: 600 }}>Password *</div>
                  <div style={{ position: 'relative' }}>
                    <input
                      readOnly
                      type={showPassword ? 'text' : 'password'}
                      value="••••••••••••"
                      style={{
                        width: '100%',
                        padding: '8px 34px 8px 12px',
                        borderRadius: '9px',
                        border: '1px solid var(--kph-border)',
                        background: 'var(--kph-bg-subtle)',
                        color: 'var(--kph-text-primary)',
                        fontSize: '12px',
                      }}
                    />
                    <button
                      onClick={() => setShowPassword(!showPassword)}
                      style={{
                        position: 'absolute',
                        right: '8px',
                        top: '50%',
                        transform: 'translateY(-50%)',
                        border: 'none',
                        background: 'transparent',
                        color: 'var(--kph-text-muted)',
                        cursor: 'pointer',
                      }}
                    >
                      {showPassword ? <EyeOff size={14} /> : <Eye size={14} />}
                    </button>
                  </div>
                  <button className="kph-btn kph-btn--primary" style={{ width: '100%', marginTop: '4px' }}>
                    Log In
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Section 2: Problem Statement */}
      <section id="kph-problem" className="kph-section">
        <div className="kph-container">
          <div className="kph-section__head">
            <div className="kph-kicker">01 / PROBLEM & STRATEGY</div>
            <h2>Solving Operational Bottlenecks Across Pharmacy Networks</h2>
            <p>
              Distributed healthcare retail branches struggled with disconnected task trackers,
              missed recall alerts, and rigid user permissions across multiple subsidiaries.
            </p>
          </div>

          <div className="kph-problem-grid">
            <div className="kph-problem-card">
              <div>
                <h3>Why Legacy Pharmacy Tools Failed Store Teams</h3>
                <p>
                  Store Managers like Bella Norton had to jump between email threads, paper binders,
                  and static spreadsheets to verify compliance audits across Pharmacy, Merchandise,
                  and Marketing departments.
                </p>
              </div>
              <div>
                <div style={{ fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.06em', color: '#94A3B8', marginBottom: '8px' }}>
                  SUPPORTED KPH NETWORK DIVISIONS
                </div>
                <div className="kph-divisions">
                  {['Kinney Drugs', 'AristaCare', 'Health Direct', 'ProAct', 'Kinney Homecare', 'Vertex'].map(
                    (div) => (
                      <span key={div}>{div}</span>
                    )
                  )}
                </div>
              </div>
            </div>

            <div className="kph-pillars">
              <div className="kph-pillar">
                <div className="kph-pillar__icon">
                  <LayoutDashboard size={19} />
                </div>
                <div>
                  <h4>Unified Store Command Center</h4>
                  <p>
                    Surfaces real-time Active, Pending, and Inactive task counts alongside High
                    Priority regional announcements in a single scannable dashboard.
                  </p>
                </div>
              </div>

              <div className="kph-pillar">
                <div className="kph-pillar__icon">
                  <Layers size={19} />
                </div>
                <div>
                  <h4>Conditional Task & Survey Wizard</h4>
                  <p>
                    Bundles SOP documents, per-file assignees, and custom compliance surveys into a
                    guided multi-step flow that adapts dynamically to task requirements.
                  </p>
                </div>
              </div>

              <div className="kph-pillar">
                <div className="kph-pillar__icon">
                  <Lock size={19} />
                </div>
                <div>
                  <h4>Granular Role-Based Governance</h4>
                  <p>
                    Enforces clean operational boundaries across 6 organizational tiers—from Super
                    Users and KPH Admins down to Divisional and Store Managers.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Design Journey */}
      <section id="kph-journey" className="kph-section">
        <div className="kph-container">
          <div className="kph-section__head">
            <div className="kph-kicker">02 / PROCESS</div>
            <h2>Breaking Down the KPH Design Journey</h2>
            <p>Click any phase below to explore key architectural decisions and UX breakthroughs.</p>
          </div>

          <div className="kph-journey-box">
            <div className="kph-journey-grid">
              {JOURNEY_STEPS.map((item, idx) => (
                <button
                  key={item.step}
                  className={`kph-journey-step ${activeJourney === idx ? 'is-active' : ''}`}
                  onClick={() => setActiveJourney(idx)}
                >
                  <small>{item.step}</small>
                  <h4>{item.title}</h4>
                  <p>{item.short}</p>
                </button>
              ))}
            </div>

            <div className="kph-journey-detail">
              <strong>{JOURNEY_STEPS[activeJourney].title}: </strong>
              <span>{JOURNEY_STEPS[activeJourney].detail}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Design System */}
      <section id="kph-system" className="kph-section">
        <div className="kph-container">
          <div className="kph-section__head">
            <div className="kph-kicker">03 / DESIGN SYSTEM</div>
            <h2>Built for High-Density Scannability & Dual-Theme Parity</h2>
            <p>Click any color swatch to copy its hex token.</p>
          </div>

          <div className="kph-ds-grid">
            <div className="kph-ds-card">
              <span className="kph-ds-card__label">Typography System</span>
              <div className="kph-aa">Aa</div>
              <h4 style={{ fontSize: '15px', marginBottom: '4px' }}>Poppins + Inter UI</h4>
              <p style={{ fontSize: '13px', color: 'var(--kph-text-secondary)', marginBottom: '12px' }}>
                Geometric display headings paired with high-legibility tabular UI numerals.
              </p>

              <div className="kph-type-row">
                <strong style={{ fontFamily: 'Poppins', fontSize: '15px' }}>Page Header</strong>
                <code>24px / SemiBold</code>
              </div>
              <div className="kph-type-row">
                <strong style={{ fontSize: '13.5px' }}>Section & Card Title</strong>
                <code>16px / SemiBold</code>
              </div>
              <div className="kph-type-row">
                <span>Data Table Cell</span>
                <code>13px / Regular</code>
              </div>
              <div className="kph-type-row" style={{ borderBottom: 'none' }}>
                <span style={{ fontSize: '11.5px', color: 'var(--kph-text-muted)' }}>Badge Metadata</span>
                <code>11.5px / Medium</code>
              </div>
            </div>

            <div className="kph-ds-card">
              <span className="kph-ds-card__label">Color Tokens (Click to Copy)</span>
              <div className="kph-swatches">
                {COLOR_SWATCHES.map((sw) => (
                  <div key={sw.hex} className="kph-swatch" onClick={() => handleCopyHex(sw.hex)}>
                    <div
                      className="kph-swatch__box"
                      style={{
                        backgroundColor: sw.hex,
                        border: sw.hex === '#F8F9FB' ? '1px solid #CBD5E1' : 'none',
                        color: sw.hex === '#F8F9FB' ? '#0F172A' : '#FFFFFF',
                      }}
                    >
                      {copiedHex === sw.hex ? <Check size={14} /> : <Copy size={13} />}
                    </div>
                    <div className="kph-swatch__name">{sw.name}</div>
                    <div className="kph-swatch__hex">
                      {copiedHex === sw.hex ? 'Copied!' : `${sw.hex} • ${sw.role}`}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="kph-ds-card" style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <span className="kph-ds-card__label">Semantic Status & Stepper Atoms</span>
              <p style={{ fontSize: '13px', color: 'var(--kph-text-secondary)' }}>
                Instant visual differentiation across task lifecycles and due-date urgency.
              </p>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                <span className="kph-pill kph-pill--active">
                  <CheckCircle2 size={12} /> Active
                </span>
                <span className="kph-pill kph-pill--pending">
                  <Clock size={12} /> Pending
                </span>
                <span className="kph-pill kph-pill--urgent">
                  <AlertCircle size={12} /> High Priority
                </span>
              </div>

              <div style={{ padding: '12px', borderRadius: '10px', background: 'var(--kph-bg-subtle)', border: '1px solid var(--kph-border)' }}>
                <div style={{ fontSize: '11px', fontWeight: 700, color: 'var(--kph-text-muted)', marginBottom: '6px' }}>
                  PROGRESSIVE STEPPER PATTERN
                </div>
                <div style={{ display: 'flex', gap: '6px', alignItems: 'center', fontSize: '11.5px', fontWeight: 600, flexWrap: 'wrap' }}>
                  <span style={{ color: 'var(--kph-green)' }}>✓ Step 1</span>
                  <span>→</span>
                  <span style={{ background: '#1A2756', color: '#fff', padding: '2px 8px', borderRadius: '6px' }}>
                    Step 2 Active
                  </span>
                  <span>→</span>
                  <span style={{ color: 'var(--kph-text-muted)' }}>Step 3</span>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '8px', marginTop: 'auto', flexWrap: 'wrap' }}>
                <button className="kph-btn kph-btn--primary">
                  <Plus size={14} /> Add Task
                </button>
                <button className="kph-btn kph-btn--ghost">Save Draft</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: Interactive Screen Showcase */}
      <section id="kph-screens" className="kph-section">
        <div className="kph-container">
          <div className="kph-section__head">
            <div className="kph-kicker">04 / INTERACTIVE FLOW SHOWCASE</div>
            <h2>Explore Key Product Modules</h2>
            <p>
              Switch across the 5 core workflows from the Figma prototype—complete with interactive
              filters, conditional stepper logic, and live permission toggles.
            </p>
          </div>

          <div className="kph-tabs">
            {[
              { id: 'dashboard', label: '1. Command Dashboard', icon: LayoutDashboard },
              { id: 'communications', label: '2. Store Communications', icon: MessageSquare },
              { id: 'wizard', label: '3. 5-Step Task & Survey Wizard', icon: CheckSquare },
              { id: 'resources', label: '4. SOP Resource Library', icon: FolderOpen },
              { id: 'permissions', label: '5. Role Permission Matrix', icon: Users },
            ].map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  className={`kph-tab ${activeModule === tab.id ? 'is-active' : ''}`}
                  onClick={() => setActiveModule(tab.id)}
                >
                  <Icon size={15} />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>

          <div className="kph-app-frame">
            <div className="kph-app-frame__head">
              <div>
                <h3>
                  {activeModule === 'dashboard' && 'Store Manager Command Center'}
                  {activeModule === 'communications' && 'Division-Segmented Communications & Audit Inbox'}
                  {activeModule === 'wizard' && 'Conditional 5-Step Task, Material & Survey Builder'}
                  {activeModule === 'resources' && 'Categorized SOP & Compliance Resource Repository'}
                  {activeModule === 'permissions' && 'Enterprise Role-Based Access Control (RBAC) Matrix'}
                </h3>
                <p>
                  {activeModule === 'dashboard' &&
                    'Combines live KPI counters, department task filtering, and an urgent broadcast feed.'}
                  {activeModule === 'communications' &&
                    'Filter broadcasts by KPH subsidiary (Kinney Drugs, AristaCare, ProAct) with priority tags.'}
                  {activeModule === 'wizard' &&
                    'Toggle "Associated Materials" below to watch the wizard dynamically adapt between 5 steps and 4 steps.'}
                  {activeModule === 'resources' &&
                    'Centralized document hub with category filtering and role-based access tags.'}
                  {activeModule === 'permissions' &&
                    'Interactive governance matrix across 5 organizational roles—click any checkbox to test.'}
                </p>
              </div>
              <span className="kph-frame-tag">
                {activeModule === 'dashboard' && 'Figma Frame: Page 03'}
                {activeModule === 'communications' && 'Figma Frames: Pages 07–10'}
                {activeModule === 'wizard' && 'Figma Frames: Pages 26–38'}
                {activeModule === 'resources' && 'Figma Frames: Pages 46–50'}
                {activeModule === 'permissions' && 'Figma Frame: Page 53'}
              </span>
            </div>

            <div className="kph-app-frame__shell">
              <aside className="kph-app-frame__rail">
                <div>
                  <div className="kph-rail-brand">
                    <span>kph</span>
                    <small>
                      HEALTHCARE
                      <br />
                      SERVICES, INC.
                    </small>
                  </div>

                  <div className="kph-rail-nav">
                    {[
                      { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
                      { id: 'communications', label: 'Communications', icon: MessageSquare },
                      { id: 'wizard', label: 'Tasks & Wizard', icon: CheckSquare },
                      { id: 'resources', label: 'Resources', icon: FolderOpen },
                      { id: 'permissions', label: 'Settings & Roles', icon: Settings },
                    ].map((item) => {
                      const Icon = item.icon;
                      return (
                        <button
                          key={item.id}
                          className={activeModule === item.id ? 'is-active' : ''}
                          onClick={() => setActiveModule(item.id)}
                        >
                          <Icon size={15} />
                          <span>{item.label}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                <div className="kph-rail-user">
                  <div className="kph-avatar">BN</div>
                  <div>
                    <strong>Bella Norton</strong>
                    <span>Store Manager • #042</span>
                  </div>
                </div>
              </aside>

              <main className="kph-app-frame__main">
                {/* MODULE 1: DASHBOARD */}
                {activeModule === 'dashboard' && (
                  <div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px', marginBottom: '16px' }}>
                      <div>
                        <h4 style={{ fontSize: '17px' }}>Hey Bella Norton</h4>
                        <p style={{ fontSize: '13px', color: 'var(--kph-text-secondary)' }}>
                          Track store compliance progress here—you are 88% toward your weekly goal!
                        </p>
                      </div>
                      <button className="kph-btn kph-btn--primary" onClick={() => setActiveModule('wizard')}>
                        <Plus size={14} /> Add Task
                      </button>
                    </div>

                    <div className="kph-kpis">
                      <div className="kph-kpi">
                        <span>Active Tasks</span>
                        <strong>13</strong>
                      </div>
                      <div className="kph-kpi">
                        <span>Pending Review</span>
                        <strong>04</strong>
                      </div>
                      <div className="kph-kpi">
                        <span>Completed This Week</span>
                        <strong style={{ color: 'var(--kph-green)' }}>29</strong>
                      </div>
                    </div>

                    <div className="kph-dash-split">
                      <div>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px', flexWrap: 'wrap', gap: '8px' }}>
                          <strong style={{ fontSize: '13.5px' }}>Assigned Store Tasks</strong>
                          <div style={{ display: 'flex', gap: '6px' }}>
                            {['All', 'Active', 'Pending'].map((st) => (
                              <button
                                key={st}
                                className={`kph-btn ${taskFilter === st ? 'kph-btn--primary' : 'kph-btn--ghost'}`}
                                style={{ padding: '4px 10px', fontSize: '11.5px' }}
                                onClick={() => setTaskFilter(st)}
                              >
                                {st}
                              </button>
                            ))}
                          </div>
                        </div>
                        <div className="kph-table-wrap">
                          <table>
                            <thead>
                              <tr>
                                <th>Task Name</th>
                                <th>Dept</th>
                                <th>Due Date</th>
                                <th>Status</th>
                              </tr>
                            </thead>
                            <tbody>
                              {filteredTasks.map((task) => (
                                <tr key={task.id}>
                                  <td style={{ fontWeight: 600 }}>{task.name}</td>
                                  <td>{task.dept}</td>
                                  <td>{task.end}</td>
                                  <td>
                                    <span
                                      className={`kph-pill kph-pill--${
                                        task.status === 'Active' ? 'active' : 'pending'
                                      }`}
                                    >
                                      {task.status}
                                    </span>
                                  </td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      </div>

                      <div style={{ border: '1px solid var(--kph-border)', borderRadius: '14px', padding: '14px' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
                          <strong style={{ fontSize: '13.5px' }}>High Priority Feed</strong>
                          <span className="kph-pill kph-pill--urgent">Live</span>
                        </div>
                        {MESSAGES_DATA.map((msg) => (
                          <div
                            key={msg.id}
                            onClick={() => {
                              setSelectedMsg(msg);
                              setActiveModule('communications');
                            }}
                            style={{
                              padding: '10px',
                              borderRadius: '10px',
                              background: 'var(--kph-bg-subtle)',
                              marginBottom: '8px',
                              cursor: 'pointer',
                            }}
                          >
                            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '11.5px', marginBottom: '3px' }}>
                              <strong>{msg.sender}</strong>
                              <span style={{ color: 'var(--kph-text-muted)' }}>{msg.time}</span>
                            </div>
                            <div style={{ fontSize: '12px', color: 'var(--kph-text-secondary)' }}>
                              {msg.subject}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {/* MODULE 2: COMMUNICATIONS */}
                {activeModule === 'communications' && (
                  <div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '10px', marginBottom: '14px' }}>
                      <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
                        {['All', 'Kinney Drugs', 'AristaCare', 'ProAct'].map((seg) => (
                          <button
                            key={seg}
                            className={`kph-btn ${selectedSegment === seg ? 'kph-btn--primary' : 'kph-btn--ghost'}`}
                            style={{ padding: '6px 12px', fontSize: '12px' }}
                            onClick={() => setSelectedSegment(seg)}
                          >
                            {seg}
                          </button>
                        ))}
                      </div>
                      <span style={{ fontSize: '12px', color: 'var(--kph-text-muted)' }}>
                        Showing {filteredMessages.length} division broadcasts
                      </span>
                    </div>

                    <div className="kph-comm-split">
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                        {filteredMessages.map((msg) => (
                          <div
                            key={msg.id}
                            onClick={() => setSelectedMsg(msg)}
                            style={{
                              padding: '12px',
                              borderRadius: '12px',
                              border: `1px solid ${
                                selectedMsg.id === msg.id ? 'var(--kph-navy)' : 'var(--kph-border)'
                              }`,
                              background:
                                selectedMsg.id === msg.id ? 'var(--kph-navy-soft)' : 'var(--kph-bg-subtle)',
                              cursor: 'pointer',
                            }}
                          >
                            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '11.5px', marginBottom: '4px' }}>
                              <strong>{msg.sender}</strong>
                              <span>{msg.time}</span>
                            </div>
                            <div style={{ fontSize: '12.5px', fontWeight: 600, marginBottom: '6px' }}>
                              {msg.subject}
                            </div>
                            <span
                              className={`kph-pill kph-pill--${
                                msg.priority === 'High Priority' ? 'urgent' : 'active'
                              }`}
                            >
                              {msg.priority}
                            </span>
                          </div>
                        ))}
                      </div>

                      <div style={{ border: '1px solid var(--kph-border)', borderRadius: '14px', padding: '18px' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '10px', paddingBottom: '12px', borderBottom: '1px solid var(--kph-border)', marginBottom: '14px' }}>
                          <div>
                            <span style={{ fontSize: '11px', fontWeight: 700, color: 'var(--kph-navy)' }}>
                              DIVISION: {selectedMsg.segment.toUpperCase()}
                            </span>
                            <h4 style={{ fontSize: '16px', marginTop: '2px' }}>{selectedMsg.subject}</h4>
                            <div style={{ fontSize: '12px', color: 'var(--kph-text-muted)', marginTop: '2px' }}>
                              From: {selectedMsg.sender} ({selectedMsg.role})
                            </div>
                          </div>
                          <span className="kph-pill kph-pill--urgent">{selectedMsg.priority}</span>
                        </div>
                        <p style={{ fontSize: '13.5px', color: 'var(--kph-text-secondary)', marginBottom: '18px' }}>
                          {selectedMsg.body}
                        </p>
                        <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                          <button className="kph-btn kph-btn--primary">Acknowledge & Reply</button>
                          <button className="kph-btn kph-btn--ghost">View Read Receipts (42/45 Stores)</button>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* MODULE 3: WIZARD */}
                {activeModule === 'wizard' && (
                  <div>
                    <div className="kph-stepper">
                      {wizardStepsList.map((label, idx) => {
                        const stepNum = idx + 1;
                        return (
                          <button
                            key={label}
                            className={
                              wizardStep === stepNum
                                ? 'is-active'
                                : wizardStep > stepNum
                                ? 'is-done'
                                : ''
                            }
                            onClick={() => setWizardStep(stepNum)}
                          >
                            {wizardStep > stepNum ? '✓ ' : ''}
                            {label}
                          </button>
                        );
                      })}
                    </div>

                    <div style={{ border: '1px solid var(--kph-border)', borderRadius: '14px', padding: '18px' }}>
                      <div className="kph-form-grid">
                        <div>
                          <label style={{ display: 'block', fontSize: '12px', fontWeight: 600, marginBottom: '5px' }}>
                            Task Title *
                          </label>
                          <input
                            readOnly
                            value="Q1 Controlled Substance Inventory Audit"
                            style={{
                              width: '100%',
                              padding: '8px 12px',
                              borderRadius: '9px',
                              border: '1px solid var(--kph-border)',
                              background: 'var(--kph-bg-subtle)',
                              color: 'var(--kph-text-primary)',
                              fontSize: '13px',
                            }}
                          />
                        </div>
                        <div>
                          <label style={{ display: 'block', fontSize: '12px', fontWeight: 600, marginBottom: '5px' }}>
                            Department *
                          </label>
                          <input
                            readOnly
                            value="Pharmacy Operations"
                            style={{
                              width: '100%',
                              padding: '8px 12px',
                              borderRadius: '9px',
                              border: '1px solid var(--kph-border)',
                              background: 'var(--kph-bg-subtle)',
                              color: 'var(--kph-text-primary)',
                              fontSize: '13px',
                            }}
                          />
                        </div>
                      </div>

                      <div
                        style={{
                          padding: '14px',
                          borderRadius: '12px',
                          background: 'var(--kph-navy-soft)',
                          marginBottom: '16px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                          flexWrap: 'wrap',
                          gap: '12px',
                        }}
                      >
                        <div>
                          <strong style={{ fontSize: '13px', color: 'var(--kph-navy)' }}>
                            Conditional UX Logic: Does this task have associated materials? *
                          </strong>
                          <p style={{ fontSize: '12px', color: 'var(--kph-text-secondary)' }}>
                            Toggling &ldquo;No&rdquo; dynamically removes Step 2 (Add Material) from the stepper above.
                          </p>
                        </div>
                        <div style={{ display: 'flex', gap: '8px' }}>
                          <button
                            className={`kph-btn ${hasMaterials ? 'kph-btn--primary' : 'kph-btn--ghost'}`}
                            onClick={() => {
                              setHasMaterials(true);
                              setWizardStep(1);
                            }}
                          >
                            Yes (5 Steps)
                          </button>
                          <button
                            className={`kph-btn ${!hasMaterials ? 'kph-btn--primary' : 'kph-btn--ghost'}`}
                            onClick={() => {
                              setHasMaterials(false);
                              setWizardStep(1);
                            }}
                          >
                            No (4 Steps)
                          </button>
                        </div>
                      </div>

                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '10px' }}>
                        <span style={{ fontSize: '12px', color: 'var(--kph-text-muted)' }}>
                          Active Step: <strong>{wizardStepsList[wizardStep - 1]}</strong>
                        </span>
                        <div style={{ display: 'flex', gap: '8px' }}>
                          <button
                            className="kph-btn kph-btn--ghost"
                            disabled={wizardStep === 1}
                            onClick={() => setWizardStep((s) => Math.max(1, s - 1))}
                          >
                            Previous
                          </button>
                          <button
                            className="kph-btn kph-btn--primary"
                            onClick={() =>
                              setWizardStep((s) => (s < wizardStepsList.length ? s + 1 : 1))
                            }
                          >
                            {wizardStep < wizardStepsList.length ? 'Continue →' : 'Assign Task ✓'}
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* MODULE 4: RESOURCES */}
                {activeModule === 'resources' && (
                  <div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '10px', marginBottom: '14px' }}>
                      <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
                        {['All', 'Pharmacy', 'Dairy', 'Medicine'].map((cat) => (
                          <button
                            key={cat}
                            className={`kph-btn ${resourceCat === cat ? 'kph-btn--primary' : 'kph-btn--ghost'}`}
                            style={{ padding: '6px 12px', fontSize: '12px' }}
                            onClick={() => setResourceCat(cat)}
                          >
                            {cat}
                          </button>
                        ))}
                      </div>
                      <button className="kph-btn kph-btn--primary">
                        <Plus size={14} /> Upload Resource
                      </button>
                    </div>

                    <div className="kph-table-wrap">
                      <table>
                        <thead>
                          <tr>
                            <th>Content Title</th>
                            <th>Category</th>
                            <th>Role Access</th>
                            <th>Last Updated</th>
                            <th>Action</th>
                          </tr>
                        </thead>
                        <tbody>
                          {filteredResources.map((res) => (
                            <tr key={res.title}>
                              <td style={{ fontWeight: 600, display: 'flex', alignItems: 'center', gap: '8px' }}>
                                <FileText size={14} />
                                {res.title}
                              </td>
                              <td>
                                <span className="kph-pill kph-pill--active">{res.category}</span>
                              </td>
                              <td style={{ fontSize: '12px', color: 'var(--kph-text-secondary)' }}>{res.access}</td>
                              <td>{res.updated}</td>
                              <td>
                                <button className="kph-btn kph-btn--ghost" style={{ padding: '5px 10px', fontSize: '11.5px' }}>
                                  <Download size={13} /> Download
                                </button>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                )}

                {/* MODULE 5: PERMISSION MATRIX */}
                {activeModule === 'permissions' && (
                  <div>
                    <div style={{ marginBottom: '12px' }}>
                      <h4 style={{ fontSize: '15px' }}>Enterprise Permission Matrix (Interactive)</h4>
                      <p style={{ fontSize: '12.5px', color: 'var(--kph-text-secondary)' }}>
                        Click any role checkbox to simulate governance updates across KPH user tiers.
                      </p>
                    </div>

                    <div className="kph-table-wrap">
                      <table>
                        <thead>
                          <tr>
                            <th>Permission Capability</th>
                            <th>Super User</th>
                            <th>KPH Admin</th>
                            <th>Divisional Admin</th>
                            <th>Regional Mgr</th>
                            <th>Store Mgr</th>
                          </tr>
                        </thead>
                        <tbody>
                          {permissions.map((row, rIdx) => (
                            <tr key={row.feature}>
                              <td style={{ fontWeight: 600 }}>{row.feature}</td>
                              {['superUser', 'kphAdmin', 'divAdmin', 'regMgr', 'storeMgr'].map((roleKey) => (
                                <td key={roleKey}>
                                  <input
                                    type="checkbox"
                                    checked={row[roleKey]}
                                    onChange={() => togglePermission(rIdx, roleKey)}
                                    style={{
                                      width: '16px',
                                      height: '16px',
                                      accentColor: '#1A2756',
                                      cursor: 'pointer',
                                    }}
                                  />
                                </td>
                              ))}
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                )}
              </main>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="kph-container kph-footer">
        <div>
          <strong>KPH Healthcare Services</strong> • Enterprise UI/UX Case Study
        </div>
        <div>Designed in Figma • Built with React & Responsive SCSS</div>
      </footer>
    </div>
  );
}