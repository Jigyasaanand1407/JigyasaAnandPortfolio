import React, { useState } from 'react';
import {
  Layers,
  Sliders,
  Grid,
  Copy,
  Check,
  ChevronDown,
  X,
  Plus,
  ArrowRight,
  Code2,
  Component,
  Palette,
  FileCode2,
} from 'lucide-react';
import './DesignSystemCaseStudy.scss';

// Exact Pages from your Figma "Components Library - Platforms Code" sidebar
const FIGMA_PAGES = [
  'Accordions',
  'Avatar',
  'Breadcrumb',
  'Buttons',
  'Card',
  'Charts',
  'Checkbox',
  'Carousel',
  'Content Switcher',
  'Chip',
  'Code Snippet',
  'Date Picker',
  'Digital Stamp',
  'Dropdown Input',
  'Divider',
  'File upload',
  'Floating Button',
  'Filtration',
  'Inline Alert',
];

const COMPONENT_INVENTORY = [
  { name: 'Buttons', variants: '180+ Variants', category: 'Actions' },
  { name: 'Button-menu', variants: 'Split & Dropdown', category: 'Actions' },
  { name: 'Button-Close', variants: 'Modal & Dismiss', category: 'Actions' },
  { name: 'Floating Button', variants: 'FAB States', category: 'Actions' },
  { name: 'Dropdown Input', variants: 'Single & Multi', category: 'Forms' },
  { name: 'Date Picker', variants: 'Range & Single', category: 'Forms' },
  { name: 'Checkbox', variants: 'Checked / Indet.', category: 'Forms' },
  { name: 'File upload', variants: 'Dropzone & List', category: 'Forms' },
  { name: 'Filtration', variants: 'Query & Tags', category: 'Data' },
  { name: 'Charts', variants: 'Data Viz Tokens', category: 'Data' },
  { name: 'Card', variants: 'Elevated & Flat', category: 'Containers' },
  { name: 'Accordions', variants: 'Expand / Collapse', category: 'Containers' },
  { name: 'Carousel', variants: 'Media & Cards', category: 'Containers' },
  { name: 'Content Switcher', variants: 'Segmented Tabs', category: 'Navigation' },
  { name: 'Breadcrumb', variants: 'Hierarchy Path', category: 'Navigation' },
  { name: 'Chip & Digital Stamp', variants: 'Status Badges', category: 'Feedback' },
  { name: 'Inline Alert', variants: 'Info / Warn / Error', category: 'Feedback' },
  { name: 'Code Snippet', variants: 'Copyable Block', category: 'Developer' },
  { name: 'Avatar & Divider', variants: 'Identity & Rules', category: 'Foundation' },
];

const TOKEN_SPECS = [
  {
    token: '--surface-canvas-light',
    value: '#F4F5F7',
    role: 'Light mode Figma page & application canvas background',
  },
  {
    token: '--surface-canvas-dark',
    value: '#142E1C',
    role: 'Dark forest canvas for low-glare & high-contrast variant testing',
  },
  {
    token: '--brand-forest-primary',
    value: '#1F4A2C',
    role: 'Component documentation headers & primary interactive fill',
  },
  {
    token: '--intent-destructive',
    value: '#C92A2A',
    role: 'Destructive button row, delete confirmations, and error alerts',
  },
  {
    token: '--slot-leading-icon',
    value: 'Boolean: true | false',
    role: 'Toggles Leading Icon layer visibility without detaching instance',
  },
  {
    token: '--slot-trailing-icon',
    value: 'Boolean: true | false',
    role: 'Toggles Trailing Icon / Chevron layer visibility across variants',
  },
];

export default function DesignSystemCaseStudy() {
  const [selectedPage, setSelectedPage] = useState('Buttons');
  const [canvasSurface, setCanvasSurface] = useState('light'); // 'light' (#F4F5F7) | 'dark' (#142E1C)
  const [activeTab, setActiveTab] = useState('sandbox');
  const [copiedText, setCopiedText] = useState(null);

  // Interactive Variant Controls matching your Buttons Page
  const [componentType, setComponentType] = useState('Button'); // 'Button' | 'Button-menu' | 'Button-Close'
  const [intent, setIntent] = useState('primary'); // 'primary' | 'outline' | 'ghost' | 'danger'
  const [size, setSize] = useState('md');
  const [leadingIcon, setLeadingIcon] = useState(true);
  const [trailingIcon, setTrailingIcon] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);
  const [stageSurface, setStageSurface] = useState('light');

  const handleCopy = (val) => {
    if (navigator.clipboard) navigator.clipboard.writeText(val);
    setCopiedText(val);
    setTimeout(() => setCopiedText(null), 1500);
  };

  return (
    <div className="pl-ds-root">
      {/* Section 1: Hero & Interactive Figma File Preview */}
      <section className="pl-hero">
        <div className="pl-container pl-hero__grid">
          <div>
            <div className="pl-hero__badge">
              <Layers size={14} />
              <span>Multi-Platform Figma Component Library</span>
            </div>
            <h1 className="pl-hero__title">
              Components Library — <span>Platforms Code</span> Design System
            </h1>
            <p className="pl-hero__desc">
              A structured, page-per-component Figma design system built for cross-platform product
              teams. Every component family—from Buttons and Dropdown Inputs to Charts and
              Accordions—is documented with structured variant matrices, boolean icon slots, and
              Light/Dark surface parity.
            </p>

            <div className="pl-hero__tags">
              {[
                'Figma Component Library',
                'Variant Matrices',
                'Boolean Icon Slots',
                'Light & Dark Surfaces',
                'Auto Layout',
                'Platforms Code',
              ].map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>

            <div className="pl-hero__meta">
              <div>
                <span>Figma File</span>
                <strong>Components Library - Platforms Code</strong>
              </div>
              <div>
                <span>Architecture</span>
                <strong>20+ Dedicated Component Pages</strong>
              </div>
              <div>
                <span>Layer Structure</span>
                <strong>Boolean Leading/Trailing Slots</strong>
              </div>
            </div>
          </div>

          {/* Interactive Replica of Your Figma Workspace */}
          <div className="pl-figma-window">
            <div className="pl-figma-window__topbar">
              <div className="pl-file-title">
                <i />
                <span>Components Library - Platforms Code</span>
              </div>
              <div className="pl-surface-toggle">
                <button
                  className={canvasSurface === 'light' ? 'is-active' : ''}
                  onClick={() => setCanvasSurface('light')}
                >
                  Light (#F4F5F7)
                </button>
                <button
                  className={canvasSurface === 'dark' ? 'is-active' : ''}
                  onClick={() => setCanvasSurface('dark')}
                >
                  Dark Surface
                </button>
              </div>
            </div>

            <div className="pl-figma-window__workspace">
              {/* Left Pages List matching your Figma screenshot */}
              <div className="pl-figma-window__pages">
                <div className="pl-pages-label">COMPONENTS ({FIGMA_PAGES.length})</div>
                {FIGMA_PAGES.map((page) => (
                  <button
                    key={page}
                    className={selectedPage === page ? 'is-active' : ''}
                    onClick={() => setSelectedPage(page)}
                  >
                    <Component size={12} />
                    <span>{page}</span>
                  </button>
                ))}
              </div>

              {/* Right Figma Canvas with Forest Green Doc Headers */}
              <div className={`pl-figma-window__canvas canvas-${canvasSurface}`}>
                <div className="pl-doc-banner">
                  <small>PLATFORMS CODE • COMPONENT SPEC</small>
                  <h4>{selectedPage}</h4>
                  <p>
                    Master variant matrix covering Primary, Secondary, Destructive, and Disabled
                    states across Light & Dark surfaces.
                  </p>
                </div>

                {selectedPage === 'Buttons' ? (
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                    <div
                      style={{
                        border: '1px dashed rgba(100, 116, 139, 0.45)',
                        borderRadius: '10px',
                        padding: '12px',
                      }}
                    >
                      <div style={{ fontSize: '11px', fontWeight: 700, marginBottom: '8px', opacity: 0.75 }}>
                        ❖ Button • Primary & Destructive Matrix
                      </div>
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                        <button className="pl-sys-btn pl-sys-btn--primary pl-sys-btn--sm">
                          <Plus size={13} /> Primary Action
                        </button>
                        <button className="pl-sys-btn pl-sys-btn--outline pl-sys-btn--sm">
                          Secondary
                        </button>
                        <button className="pl-sys-btn pl-sys-btn--danger pl-sys-btn--sm">
                          Destructive
                        </button>
                        <button className="pl-sys-btn pl-sys-btn--primary pl-sys-btn--sm" disabled>
                          Disabled
                        </button>
                      </div>
                    </div>

                    <div
                      style={{
                        display: 'grid',
                        gridTemplateColumns: '1fr 1fr',
                        gap: '10px',
                      }}
                    >
                      <div
                        style={{
                          border: '1px dashed rgba(100, 116, 139, 0.45)',
                          borderRadius: '10px',
                          padding: '10px',
                        }}
                      >
                        <div style={{ fontSize: '10.5px', fontWeight: 700, marginBottom: '6px', opacity: 0.75 }}>
                          ❖ Button-menu
                        </div>
                        <button className="pl-sys-btn pl-sys-btn--primary pl-sys-btn--sm">
                          <span>Actions</span>
                          <ChevronDown size={13} />
                        </button>
                      </div>

                      <div
                        style={{
                          border: '1px dashed rgba(100, 116, 139, 0.45)',
                          borderRadius: '10px',
                          padding: '10px',
                        }}
                      >
                        <div style={{ fontSize: '10.5px', fontWeight: 700, marginBottom: '6px', opacity: 0.75 }}>
                          ❖ Button-Close
                        </div>
                        <button
                          className="pl-sys-btn pl-sys-btn--ghost pl-sys-btn--sm"
                          style={{ padding: '6px 8px' }}
                        >
                          <X size={14} />
                        </button>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div
                    style={{
                      border: '1px dashed rgba(100, 116, 139, 0.45)',
                      borderRadius: '10px',
                      padding: '16px',
                      fontSize: '12.5px',
                    }}
                  >
                    <strong>❖ {selectedPage} Component Set</strong>
                    <p style={{ marginTop: '6px', opacity: 0.8 }}>
                      Structured with Auto Layout, standardized padding tokens, and dual Light/Dark
                      surface variants ready for multi-platform product integration.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: How the Library is Structured */}
      <section className="pl-section">
        <div className="pl-container">
          <div className="pl-section__head">
            <div className="pl-kicker">01 / LIBRARY ARCHITECTURE</div>
            <h2>How "Components Library - Platforms Code" is Engineered</h2>
            <p>
              Built to eliminate duplicated UI components across multiple web and mobile projects
              while keeping developer handoff predictable.
            </p>
          </div>

          <div className="pl-cards-3">
            <div className="pl-info-card">
              <span className="pl-tag">01 • PAGE-PER-COMPONENT IA</span>
              <h3>Modular Left-Rail Taxonomy</h3>
              <p>
                Each UI primitive lives on its own dedicated Figma page (Buttons, Dropdown Input,
                Date Picker, Charts, Inline Alert) topped with a forest-green spec banner.
              </p>
              <div className="pl-layer-tree pl-mono">
                COMPONENTS
                <br />
                ├── Buttons (Button, Menu, Close)
                <br />
                ├── Dropdown Input & Date Picker
                <br />
                └── Charts, Card & Inline Alert
              </div>
            </div>

            <div className="pl-info-card">
              <span className="pl-tag">02 • BOOLEAN LAYER SLOTS</span>
              <h3>Zero-Detach Icon & State Control</h3>
              <p>
                Instead of exploding variant counts with duplicate icon combinations, layers use
                boolean visibility toggles for Leading Icon and Trailing Icon slots.
              </p>
              <div className="pl-layer-tree pl-mono">
                ❖ Button-menu
                <br />
                ├── ◇ Leading icon (Boolean)
                <br />
                ├── T Label
                <br />
                └── ◇ Trailing icon (Boolean)
              </div>
            </div>

            <div className="pl-info-card">
              <span className="pl-tag">03 • DUAL-SURFACE MATRIX</span>
              <h3>Light & Dark Contrast Validation</h3>
              <p>
                Every component matrix tests Primary Forest Green, Neutral, and Destructive Crimson
                states directly on both light (#F4F5F7) and dark forest surfaces.
              </p>
              <div className="pl-layer-tree pl-mono">
                Canvas Light: #F4F5F7
                <br />
                Brand Header: #1F4A2C
                <br />
                Destructive Row: #C92A2A
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Complete Component Inventory */}
      <section className="pl-section">
        <div className="pl-container">
          <div className="pl-section__head">
            <div className="pl-kicker">02 / SYSTEM COVERAGE</div>
            <h2>19 Core Component Families in the Library</h2>
            <p>
              Complete index of reusable building blocks powering your web and mobile design
              systems.
            </p>
          </div>

          <div className="pl-inventory-grid">
            {COMPONENT_INVENTORY.map((item) => (
              <div key={item.name} className="pl-comp-item">
                <span>
                  <Component size={14} color="var(--pl-accent)" />
                  {item.name}
                </span>
                <small>{item.variants}</small>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4: Interactive Button Matrix & Spec Workbench */}
      <section className="pl-section">
        <div className="pl-container">
          <div className="pl-section__head">
            <div className="pl-kicker">03 / INTERACTIVE SPEC WORKBENCH</div>
            <h2>Test the Buttons Matrix & Component Tokens</h2>
            <p>
              Switch between Button, Button-menu, and Button-Close, toggle Leading/Trailing icon
              slots, and test Light vs. Dark surfaces.
            </p>
          </div>

          <div className="pl-tabs">
            {[
              { id: 'sandbox', label: '1. Buttons Variant Matrix', icon: Sliders },
              { id: 'tokens', label: '2. Surface & Layer Specs', icon: Palette },
              { id: 'adoption', label: '3. Cross-Project Usage', icon: Grid },
            ].map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  className={`pl-tab ${activeTab === tab.id ? 'is-active' : ''}`}
                  onClick={() => setActiveTab(tab.id)}
                >
                  <Icon size={15} />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>

          <div className="pl-workbench">
            <div className="pl-workbench__head">
              <div>
                <h3>
                  {activeTab === 'sandbox' && 'Buttons Page — Interactive Variant & Slot Tester'}
                  {activeTab === 'tokens' && 'Color Surfaces & Figma Layer Property Tokens'}
                  {activeTab === 'adoption' && 'Multi-Project Adoption Across Portfolio Systems'}
                </h3>
                <p>
                  {activeTab === 'sandbox' &&
                    'Replicates the exact Button, Button-menu, and Button-Close structure from your Figma canvas.'}
                  {activeTab === 'tokens' &&
                    'Click any token or hex code to copy directly.'}
                  {activeTab === 'adoption' &&
                    'How this shared library accelerates consistency across enterprise and mobile apps.'}
                </p>
              </div>
              <span className="pl-pill-tag">Page: Buttons • #F4F5F7</span>
            </div>

            <div className="pl-workbench__body">
              {/* TAB 1: BUTTONS VARIANT SANDBOX */}
              {activeTab === 'sandbox' && (
                <div className="pl-sandbox-grid">
                  <div className={`pl-stage stage-${stageSurface}`}>
                    <div style={{ display: 'flex', gap: '8px', marginBottom: '6px' }}>
                      <button
                        className={`pl-ctrl-btn ${stageSurface === 'light' ? 'is-selected' : ''}`}
                        onClick={() => setStageSurface('light')}
                      >
                        Light Canvas (#F4F5F7)
                      </button>
                      <button
                        className={`pl-ctrl-btn ${stageSurface === 'dark' ? 'is-selected' : ''}`}
                        onClick={() => setStageSurface('dark')}
                      >
                        Dark Forest Surface
                      </button>
                    </div>

                    {componentType === 'Button' && (
                      <button
                        disabled={isDisabled}
                        className={`pl-sys-btn pl-sys-btn--${intent} pl-sys-btn--${size}`}
                      >
                        {leadingIcon && <Plus size={15} />}
                        <span>Save Changes</span>
                        {trailingIcon && <ArrowRight size={15} />}
                      </button>
                    )}

                    {componentType === 'Button-menu' && (
                      <button
                        disabled={isDisabled}
                        className={`pl-sys-btn pl-sys-btn--${intent} pl-sys-btn--${size}`}
                      >
                        {leadingIcon && <Layers size={15} />}
                        <span>Export Options</span>
                        <ChevronDown size={15} />
                      </button>
                    )}

                    {componentType === 'Button-Close' && (
                      <button
                        disabled={isDisabled}
                        className={`pl-sys-btn pl-sys-btn--${intent} pl-sys-btn--${size}`}
                        style={{ padding: size === 'sm' ? '6px' : size === 'lg' ? '12px' : '9px' }}
                        aria-label="Close"
                      >
                        <X size={size === 'lg' ? 18 : 15} />
                      </button>
                    )}

                    <div
                      style={{
                        width: '100%',
                        maxWidth: '430px',
                        background: 'var(--pl-bg-surface)',
                        color: 'var(--pl-text-primary)',
                        border: '1px solid var(--pl-border)',
                        borderRadius: '10px',
                        padding: '10px 14px',
                        fontSize: '12px',
                      }}
                    >
                      <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: 'var(--pl-text-muted)', marginBottom: '4px' }}>
                        <Code2 size={13} />
                        <span>Figma Instance Properties</span>
                      </div>
                      <code style={{ color: 'var(--pl-accent)' }}>
                        {`<${componentType} intent="${intent}" size="${size}" leadingIcon={${leadingIcon}} trailingIcon={${
                          componentType === 'Button-menu' ? true : trailingIcon
                        }}${isDisabled ? ' disabled' : ''} />`}
                      </code>
                    </div>
                  </div>

                  <div className="pl-controls">
                    <div style={{ fontSize: '11.5px', fontWeight: 700, color: 'var(--pl-text-muted)', textTransform: 'uppercase' }}>
                      Component Set (Buttons Page)
                    </div>
                    <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
                      {['Button', 'Button-menu', 'Button-Close'].map((comp) => (
                        <button
                          key={comp}
                          className={`pl-ctrl-btn ${componentType === comp ? 'is-selected' : ''}`}
                          onClick={() => setComponentType(comp)}
                        >
                          {comp}
                        </button>
                      ))}
                    </div>

                    <div style={{ fontSize: '11.5px', fontWeight: 700, color: 'var(--pl-text-muted)', textTransform: 'uppercase' }}>
                      Hierarchy & Semantic Row
                    </div>
                    <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
                      {[
                        { id: 'primary', label: 'Primary (#1F4A2C)' },
                        { id: 'outline', label: 'Outline' },
                        { id: 'ghost', label: 'Subtle' },
                        { id: 'danger', label: 'Destructive (#C92A2A)' },
                      ].map((row) => (
                        <button
                          key={row.id}
                          className={`pl-ctrl-btn ${intent === row.id ? 'is-selected' : ''}`}
                          onClick={() => setIntent(row.id)}
                        >
                          {row.label}
                        </button>
                      ))}
                    </div>

                    <div style={{ fontSize: '11.5px', fontWeight: 700, color: 'var(--pl-text-muted)', textTransform: 'uppercase' }}>
                      Size Scale
                    </div>
                    <div style={{ display: 'flex', gap: '6px' }}>
                      {['sm', 'md', 'lg'].map((sz) => (
                        <button
                          key={sz}
                          className={`pl-ctrl-btn ${size === sz ? 'is-selected' : ''}`}
                          onClick={() => setSize(sz)}
                        >
                          {sz.toUpperCase()}
                        </button>
                      ))}
                    </div>

                    <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap', paddingTop: '4px' }}>
                      <label style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '12.5px', cursor: 'pointer' }}>
                        <input
                          type="checkbox"
                          checked={leadingIcon}
                          onChange={(e) => setLeadingIcon(e.target.checked)}
                        />
                        Leading icon
                      </label>
                      <label style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '12.5px', cursor: 'pointer' }}>
                        <input
                          type="checkbox"
                          checked={trailingIcon}
                          onChange={(e) => setTrailingIcon(e.target.checked)}
                        />
                        Trailing icon
                      </label>
                      <label style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '12.5px', cursor: 'pointer' }}>
                        <input
                          type="checkbox"
                          checked={isDisabled}
                          onChange={(e) => setIsDisabled(e.target.checked)}
                        />
                        Disabled
                      </label>
                    </div>
                  </div>
                </div>
              )}

              {/* TAB 2: TOKEN SPECS */}
              {activeTab === 'tokens' && (
                <div className="pl-table-wrap">
                  <table>
                    <thead>
                      <tr>
                        <th>Token / Property</th>
                        <th>Value (Click to Copy)</th>
                        <th>Role in Figma Library</th>
                      </tr>
                    </thead>
                    <tbody>
                      {TOKEN_SPECS.map((item) => (
                        <tr key={item.token}>
                          <td className="pl-mono" style={{ fontWeight: 600 }}>
                            {item.token}
                          </td>
                          <td>
                            <button
                              onClick={() => handleCopy(item.value)}
                              style={{
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: '6px',
                                padding: '4px 9px',
                                borderRadius: '6px',
                                border: '1px solid var(--pl-border)',
                                background: 'var(--pl-bg-subtle)',
                                color: 'var(--pl-accent)',
                                fontFamily: 'JetBrains Mono, monospace',
                                fontSize: '12px',
                                cursor: 'pointer',
                              }}
                            >
                              {copiedText === item.value ? <Check size={12} /> : <Copy size={12} />}
                              <span>{copiedText === item.value ? 'Copied!' : item.value}</span>
                            </button>
                          </td>
                          <td style={{ color: 'var(--pl-text-secondary)' }}>{item.role}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}

              {/* TAB 3: CROSS-PROJECT ADOPTION */}
              {activeTab === 'adoption' && (
                <div className="pl-cards-3">
                  <div className="pl-info-card">
                    <span className="pl-tag">ENTERPRISE WEB</span>
                    <h3>KPH Healthcare Services</h3>
                    <p>
                      Leveraged the library's data tables, permission checkboxes, steppers, and
                      inline alerts across 60+ pharmacy operations screens.
                    </p>
                  </div>
                  <div className="pl-info-card">
                    <span className="pl-tag">CONSUMER WEB & MOBILE</span>
                    <h3>Cheezzo Web & Mobile</h3>
                    <p>
                      Reused Cards, Carousels, Chips, Content Switchers, and Floating Action
                      Buttons with project-specific brand fills.
                    </p>
                  </div>
                  <div className="pl-info-card">
                    <span className="pl-tag">DEVELOPER WORKFLOW</span>
                    <h3>Platforms Code Parity</h3>
                    <p>
                      Standardized prop names (<code>Leading icon</code>, <code>Trailing icon</code>
                      , <code>Button-menu</code>) so Figma layers map cleanly to React components.
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="pl-container pl-footer">
        <div>
          <strong>Components Library — Platforms Code</strong> • Multi-Project Figma Design System
        </div>
        <div>20+ Component Pages • Built with Figma Auto Layout & Responsive SCSS</div>
      </footer>
    </div>
  );
}