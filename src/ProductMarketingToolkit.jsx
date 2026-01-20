import React, { useState } from 'react';
import { ChevronRight, Download, Check, Sparkles, Target, FileText, CheckSquare, BookOpen } from 'lucide-react';

// ============================================================================
// MAIN APP COMPONENT
// ============================================================================

export default function ProductMarketingToolkit() {
  const [currentTool, setCurrentTool] = useState('home');

  const renderContent = () => {
    switch(currentTool) {
      case 'home': return <HomePage onNavigate={setCurrentTool} />;
      case 'framework': return <FrameworkSelector />;
      case 'messaging': return <MessagingGenerator />;
      case 'checklist': return <ChecklistBuilder />;
      case 'templates': return <CaseStudyLibrary />;
      default: return <HomePage onNavigate={setCurrentTool} />;
    }
  };

  return (
    <div className="app-container">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;600;700&family=Instrument+Sans:wght@400;500;600;700&display=swap');
        
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        :root {
          --primary-purple: #4A3B6B;
          --deep-navy: #1F2937;
          --accent-purple: #7C5CDB;
          --soft-cream: #F9F7F4;
          --warm-white: #FFFFFF;
          --text-primary: #1a1a1a;
          --text-secondary: #6B7280;
          --border-subtle: #E5E7EB;
          --shadow-sm: 0 1px 3px rgba(0,0,0,0.06);
          --shadow-md: 0 4px 12px rgba(74,59,107,0.08);
          --shadow-lg: 0 12px 32px rgba(74,59,107,0.12);
        }

        body {
          font-family: 'Instrument Sans', -apple-system, sans-serif;
          background: var(--soft-cream);
          color: var(--text-primary);
          line-height: 1.6;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }

        .app-container {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
        }

        /* ===== NAVIGATION ===== */
        .nav-bar {
          background: var(--warm-white);
          border-bottom: 1px solid var(--border-subtle);
          position: sticky;
          top: 0;
          z-index: 100;
          backdrop-filter: blur(12px);
          background: rgba(255,255,255,0.92);
        }

        .nav-content {
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 2rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          min-height: 72px;
        }

        .nav-logo {
          font-family: 'Cormorant Garamond', serif;
          font-size: 1.5rem;
          font-weight: 700;
          color: var(--primary-purple);
          cursor: pointer;
          letter-spacing: -0.02em;
          transition: opacity 0.2s ease;
        }

        .nav-logo:hover {
          opacity: 0.7;
        }

        .nav-links {
          display: flex;
          gap: 2rem;
          align-items: center;
        }

        .nav-link {
          font-size: 0.9rem;
          font-weight: 500;
          color: var(--text-secondary);
          cursor: pointer;
          transition: all 0.2s ease;
          padding: 0.5rem 0;
          border-bottom: 2px solid transparent;
          letter-spacing: 0.01em;
        }

        .nav-link:hover {
          color: var(--primary-purple);
          border-bottom-color: var(--accent-purple);
        }

        .nav-link.active {
          color: var(--primary-purple);
          border-bottom-color: var(--primary-purple);
        }

        /* ===== HOME PAGE ===== */
        .home-page {
          flex: 1;
          animation: fadeIn 0.6s ease-out;
        }

        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .hero-section {
          max-width: 1400px;
          margin: 0 auto;
          padding: 6rem 2rem 4rem;
          text-align: center;
        }

        .hero-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(2.5rem, 5vw, 4rem);
          font-weight: 700;
          color: var(--primary-purple);
          margin-bottom: 1.5rem;
          letter-spacing: -0.03em;
          line-height: 1.1;
          animation: slideUp 0.8s ease-out;
        }

        @keyframes slideUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .hero-subtitle {
          font-size: 1.25rem;
          color: var(--text-secondary);
          max-width: 700px;
          margin: 0 auto 1rem;
          line-height: 1.7;
          animation: slideUp 0.8s ease-out 0.1s backwards;
        }

        .hero-meta {
          font-size: 0.95rem;
          color: var(--text-secondary);
          font-weight: 500;
          animation: slideUp 0.8s ease-out 0.2s backwards;
        }

        .tools-grid {
          max-width: 1200px;
          margin: 0 auto;
          padding: 3rem 2rem 6rem;
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 2rem;
        }

        .tool-card {
          background: var(--warm-white);
          border: 1px solid var(--border-subtle);
          border-radius: 8px;
          padding: 2.5rem 2rem;
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          position: relative;
          overflow: hidden;
          animation: slideUp 0.6s ease-out backwards;
        }

        .tool-card:nth-child(1) { animation-delay: 0.1s; }
        .tool-card:nth-child(2) { animation-delay: 0.2s; }
        .tool-card:nth-child(3) { animation-delay: 0.3s; }
        .tool-card:nth-child(4) { animation-delay: 0.4s; }

        .tool-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 3px;
          background: linear-gradient(90deg, var(--accent-purple), var(--primary-purple));
          transform: scaleX(0);
          transition: transform 0.3s ease;
          transform-origin: left;
        }

        .tool-card:hover {
          transform: translateY(-4px);
          box-shadow: var(--shadow-lg);
          border-color: var(--accent-purple);
        }

        .tool-card:hover::before {
          transform: scaleX(1);
        }

        .tool-icon {
          width: 48px;
          height: 48px;
          border-radius: 8px;
          background: linear-gradient(135deg, var(--accent-purple), var(--primary-purple));
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 1.5rem;
          color: white;
        }

        .tool-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: 1.5rem;
          font-weight: 600;
          color: var(--primary-purple);
          margin-bottom: 0.75rem;
          letter-spacing: -0.01em;
        }

        .tool-description {
          font-size: 0.95rem;
          color: var(--text-secondary);
          line-height: 1.6;
          margin-bottom: 1.5rem;
        }

        .tool-cta {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          color: var(--accent-purple);
          font-weight: 600;
          font-size: 0.9rem;
          letter-spacing: 0.02em;
          text-transform: uppercase;
        }

        .tool-cta svg {
          transition: transform 0.3s ease;
        }

        .tool-card:hover .tool-cta svg {
          transform: translateX(4px);
        }

        /* ===== TOOL PAGES ===== */
        .tool-page {
          flex: 1;
          animation: fadeIn 0.5s ease-out;
        }

        .tool-header {
          background: linear-gradient(135deg, var(--primary-purple), var(--accent-purple));
          color: white;
          padding: 3rem 2rem;
          text-align: center;
        }

        .tool-header-content {
          max-width: 800px;
          margin: 0 auto;
        }

        .tool-header h1 {
          font-family: 'Cormorant Garamond', serif;
          font-size: 2.5rem;
          font-weight: 700;
          margin-bottom: 1rem;
          letter-spacing: -0.02em;
        }

        .tool-header p {
          font-size: 1.1rem;
          opacity: 0.95;
          line-height: 1.6;
        }

        .tool-content {
          max-width: 900px;
          margin: 0 auto;
          padding: 3rem 2rem 6rem;
        }

        /* ===== FORM ELEMENTS ===== */
        .form-section {
          background: var(--warm-white);
          border: 1px solid var(--border-subtle);
          border-radius: 8px;
          padding: 2.5rem;
          margin-bottom: 2rem;
        }

        .form-section h3 {
          font-family: 'Cormorant Garamond', serif;
          font-size: 1.5rem;
          font-weight: 600;
          color: var(--primary-purple);
          margin-bottom: 1.5rem;
          letter-spacing: -0.01em;
        }

        .form-group {
          margin-bottom: 1.5rem;
        }

        .form-label {
          display: block;
          font-size: 0.9rem;
          font-weight: 600;
          color: var(--text-primary);
          margin-bottom: 0.5rem;
          letter-spacing: 0.01em;
        }

        .form-input,
        .form-select,
        .form-textarea {
          width: 100%;
          padding: 0.875rem 1rem;
          border: 1.5px solid var(--border-subtle);
          border-radius: 6px;
          font-size: 0.95rem;
          font-family: 'Instrument Sans', sans-serif;
          transition: all 0.2s ease;
          background: var(--warm-white);
        }

        .form-input:focus,
        .form-select:focus,
        .form-textarea:focus {
          outline: none;
          border-color: var(--accent-purple);
          box-shadow: 0 0 0 3px rgba(124,92,219,0.1);
        }

        .form-textarea {
          resize: vertical;
          min-height: 100px;
          line-height: 1.6;
        }

        .radio-group {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }

        .radio-option {
          display: flex;
          align-items: flex-start;
          gap: 0.75rem;
          padding: 1rem;
          border: 1.5px solid var(--border-subtle);
          border-radius: 6px;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .radio-option:hover {
          border-color: var(--accent-purple);
          background: rgba(124,92,219,0.02);
        }

        .radio-option input[type="radio"] {
          margin-top: 0.2rem;
          accent-color: var(--accent-purple);
        }

        .radio-content {
          flex: 1;
        }

        .radio-title {
          font-weight: 600;
          color: var(--text-primary);
          margin-bottom: 0.25rem;
        }

        .radio-description {
          font-size: 0.875rem;
          color: var(--text-secondary);
          line-height: 1.5;
        }

        .button-primary {
          background: linear-gradient(135deg, var(--accent-purple), var(--primary-purple));
          color: white;
          padding: 1rem 2.5rem;
          border: none;
          border-radius: 6px;
          font-size: 1rem;
          font-weight: 600;
          letter-spacing: 0.02em;
          cursor: pointer;
          transition: all 0.3s ease;
          display: inline-flex;
          align-items: center;
          gap: 0.75rem;
          box-shadow: var(--shadow-sm);
        }

        .button-primary:hover {
          transform: translateY(-2px);
          box-shadow: var(--shadow-md);
        }

        .button-primary:active {
          transform: translateY(0);
        }

        /* ===== RESULTS ===== */
        .results-box {
          background: linear-gradient(135deg, rgba(124,92,219,0.05), rgba(74,59,107,0.05));
          border: 2px solid var(--accent-purple);
          border-radius: 8px;
          padding: 2.5rem;
          margin-top: 2rem;
          animation: fadeIn 0.5s ease-out;
        }

        .results-header {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-bottom: 1.5rem;
        }

        .results-icon {
          width: 56px;
          height: 56px;
          border-radius: 12px;
          background: linear-gradient(135deg, var(--accent-purple), var(--primary-purple));
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
        }

        .results-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: 1.75rem;
          font-weight: 700;
          color: var(--primary-purple);
          letter-spacing: -0.01em;
        }

        .results-content {
          line-height: 1.8;
        }

        .results-content h4 {
          font-weight: 600;
          color: var(--primary-purple);
          margin-top: 1.5rem;
          margin-bottom: 0.75rem;
        }

        .results-content ul {
          list-style: none;
          padding: 0;
        }

        .results-content li {
          padding-left: 1.5rem;
          position: relative;
          margin-bottom: 0.5rem;
        }

        .results-content li::before {
          content: '→';
          position: absolute;
          left: 0;
          color: var(--accent-purple);
          font-weight: 600;
        }

        .positioning-output {
          background: var(--warm-white);
          border-left: 4px solid var(--accent-purple);
          padding: 1.5rem;
          margin: 1.5rem 0;
          border-radius: 4px;
          font-size: 1.05rem;
          line-height: 1.8;
          font-style: italic;
        }

        .examples-section {
          margin-top: 2rem;
          padding-top: 2rem;
          border-top: 1px solid var(--border-subtle);
        }

        .example-card {
          background: var(--warm-white);
          padding: 1.5rem;
          border-radius: 6px;
          margin-bottom: 1rem;
          border-left: 3px solid var(--accent-purple);
        }

        .example-company {
          font-weight: 600;
          color: var(--primary-purple);
          margin-bottom: 0.5rem;
        }

        .example-text {
          color: var(--text-secondary);
          line-height: 1.7;
        }

        /* ===== CHECKLIST ===== */
        .checklist-section {
          margin-bottom: 2.5rem;
        }

        .checklist-week {
          font-family: 'Cormorant Garamond', serif;
          font-size: 1.25rem;
          font-weight: 600;
          color: var(--primary-purple);
          margin-bottom: 1rem;
          padding-bottom: 0.5rem;
          border-bottom: 2px solid var(--accent-purple);
        }

        .checklist-items {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }

        .checklist-item {
          display: flex;
          align-items: flex-start;
          gap: 1rem;
          padding: 1rem;
          background: var(--warm-white);
          border: 1px solid var(--border-subtle);
          border-radius: 6px;
          transition: all 0.2s ease;
        }

        .checklist-item:hover {
          border-color: var(--accent-purple);
          box-shadow: var(--shadow-sm);
        }

        .checklist-checkbox {
          width: 20px;
          height: 20px;
          margin-top: 0.15rem;
          accent-color: var(--accent-purple);
        }

        .checklist-text {
          flex: 1;
          color: var(--text-primary);
          line-height: 1.6;
        }

        /* ===== TEMPLATE LIBRARY ===== */
        .templates-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
          gap: 2rem;
        }

        .template-card {
          background: var(--warm-white);
          border: 1px solid var(--border-subtle);
          border-radius: 8px;
          overflow: hidden;
          transition: all 0.3s ease;
          cursor: pointer;
        }

        .template-card:hover {
          transform: translateY(-4px);
          box-shadow: var(--shadow-lg);
          border-color: var(--accent-purple);
        }

        .template-preview {
          height: 200px;
          background: linear-gradient(135deg, rgba(124,92,219,0.1), rgba(74,59,107,0.1));
          display: flex;
          align-items: center;
          justify-content: center;
          border-bottom: 1px solid var(--border-subtle);
        }

        .template-preview-icon {
          width: 64px;
          height: 64px;
          border-radius: 12px;
          background: linear-gradient(135deg, var(--accent-purple), var(--primary-purple));
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
        }

        .template-info {
          padding: 1.5rem;
        }

        .template-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: 1.25rem;
          font-weight: 600;
          color: var(--primary-purple);
          margin-bottom: 0.5rem;
        }

        .template-description {
          font-size: 0.9rem;
          color: var(--text-secondary);
          line-height: 1.6;
          margin-bottom: 1rem;
        }

        .template-actions {
          display: flex;
          gap: 0.75rem;
        }

        .button-secondary {
          flex: 1;
          padding: 0.625rem 1rem;
          border: 1.5px solid var(--border-subtle);
          background: var(--warm-white);
          border-radius: 6px;
          font-size: 0.875rem;
          font-weight: 600;
          color: var(--text-primary);
          cursor: pointer;
          transition: all 0.2s ease;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
        }

        .button-secondary:hover {
          border-color: var(--accent-purple);
          background: rgba(124,92,219,0.05);
          color: var(--accent-purple);
        }

        /* ===== MODAL ===== */
        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0,0,0,0.6);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1000;
          padding: 2rem;
          animation: fadeIn 0.2s ease-out;
          backdrop-filter: blur(4px);
        }

        .modal-content {
          background: var(--warm-white);
          border-radius: 12px;
          max-width: 800px;
          width: 100%;
          max-height: 85vh;
          overflow-y: auto;
          box-shadow: var(--shadow-lg);
          animation: slideUp 0.3s ease-out;
        }

        .modal-header {
          padding: 2rem;
          border-bottom: 1px solid var(--border-subtle);
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
        }

        .modal-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: 1.75rem;
          font-weight: 700;
          color: var(--primary-purple);
        }

        .modal-close {
          background: none;
          border: none;
          font-size: 1.5rem;
          color: var(--text-secondary);
          cursor: pointer;
          line-height: 1;
          padding: 0.25rem;
          transition: color 0.2s ease;
        }

        .modal-close:hover {
          color: var(--text-primary);
        }

        .modal-body {
          padding: 2rem;
        }

        .template-section {
          margin-bottom: 2rem;
        }

        .template-section-title {
          font-weight: 600;
          color: var(--primary-purple);
          margin-bottom: 0.75rem;
          font-size: 1.1rem;
        }

        .template-section-content {
          color: var(--text-secondary);
          line-height: 1.8;
          padding-left: 1rem;
          border-left: 3px solid var(--accent-purple);
          padding: 1rem;
          background: rgba(124,92,219,0.02);
          border-radius: 4px;
        }

        /* ===== RESPONSIVE ===== */
        @media (max-width: 768px) {
          .nav-links {
            display: none;
          }

          .hero-section {
            padding: 4rem 1.5rem 3rem;
          }

          .tools-grid {
            grid-template-columns: 1fr;
            padding: 2rem 1.5rem 4rem;
          }

          .tool-content {
            padding: 2rem 1.5rem 4rem;
          }

          .form-section {
            padding: 1.5rem;
          }

          .templates-grid {
            grid-template-columns: 1fr;
          }

          .button-primary {
            width: 100%;
            justify-content: center;
          }
        }

        @media print {
          .nav-bar,
          .button-primary,
          .button-secondary {
            display: none;
          }

          .checklist-item {
            break-inside: avoid;
          }
        }
      `}</style>

      <nav className="nav-bar">
        <div className="nav-content">
          <div className="nav-logo" onClick={() => setCurrentTool('home')}>
            PMM Toolkit
          </div>
          <div className="nav-links">
            <div 
              className={`nav-link ${currentTool === 'framework' ? 'active' : ''}`}
              onClick={() => setCurrentTool('framework')}
            >
              Framework Selector
            </div>
            <div 
              className={`nav-link ${currentTool === 'messaging' ? 'active' : ''}`}
              onClick={() => setCurrentTool('messaging')}
            >
              Messaging
            </div>
            <div 
              className={`nav-link ${currentTool === 'checklist' ? 'active' : ''}`}
              onClick={() => setCurrentTool('checklist')}
            >
              Checklist
            </div>
            <div 
              className={`nav-link ${currentTool === 'templates' ? 'active' : ''}`}
              onClick={() => setCurrentTool('templates')}
            >
              Templates
            </div>
          </div>
        </div>
      </nav>

      {renderContent()}
    </div>
  );
}

// ============================================================================
// HOME PAGE
// ============================================================================

function HomePage({ onNavigate }) {
  return (
    <div className="home-page">
      <div className="hero-section">
        <h1 className="hero-title">Product Marketing Toolkit</h1>
        <p className="hero-subtitle">
          Interactive tools to help product marketers make better decisions, craft compelling messaging, and execute successful launches.
        </p>
        <p className="hero-meta">
          Built for B2B SaaS product marketers at every stage
        </p>
      </div>

      <div className="tools-grid">
        <div className="tool-card" onClick={() => onNavigate('framework')}>
          <div className="tool-icon">
            <Target size={24} />
          </div>
          <h3 className="tool-title">Framework Selector</h3>
          <p className="tool-description">
            Answer a few questions to discover which go-to-market framework best fits your product, market, and resources.
          </p>
          <div className="tool-cta">
            Get Started <ChevronRight size={16} />
          </div>
        </div>

        <div className="tool-card" onClick={() => onNavigate('messaging')}>
          <div className="tool-icon">
            <Sparkles size={24} />
          </div>
          <h3 className="tool-title">Messaging Generator</h3>
          <p className="tool-description">
            Create crisp positioning statements using proven frameworks. See real examples from successful B2B SaaS companies.
          </p>
          <div className="tool-cta">
            Create Messaging <ChevronRight size={16} />
          </div>
        </div>

        <div className="tool-card" onClick={() => onNavigate('checklist')}>
          <div className="tool-icon">
            <CheckSquare size={24} />
          </div>
          <h3 className="tool-title">Launch Checklist</h3>
          <p className="tool-description">
            Generate a customized launch checklist based on your product type, timeline, and go-to-market motion.
          </p>
          <div className="tool-cta">
            Build Checklist <ChevronRight size={16} />
          </div>
        </div>

        <div className="tool-card" onClick={() => onNavigate('templates')}>
          <div className="tool-icon">
            <BookOpen size={24} />
          </div>
          <h3 className="tool-title">Case Study Templates</h3>
          <p className="tool-description">
            Browse 8 battle-tested case study templates for different audiences and formats. Preview and download.
          </p>
          <div className="tool-cta">
            View Templates <ChevronRight size={16} />
          </div>
        </div>
      </div>
    </div>
  );
}

// ============================================================================
// FRAMEWORK SELECTOR
// ============================================================================

function FrameworkSelector() {
  const [step, setStep] = useState(1);
  const [answers, setAnswers] = useState({
    productType: '',
    marketMaturity: '',
    companyStage: '',
    resources: ''
  });
  const [result, setResult] = useState(null);

  const handleAnswer = (field, value) => {
    setAnswers({ ...answers, [field]: value });
  };

  const calculateRecommendation = () => {
    // Logic to determine framework based on answers
    let framework = '';
    let explanation = '';
    let tactics = [];

    if (answers.productType === 'b2b-saas' && answers.companyStage === 'startup' && answers.resources === 'small') {
      framework = 'Product-Led Growth (PLG)';
      explanation = 'Given your B2B SaaS product, startup stage, and limited resources, PLG offers the most scalable approach. It allows users to experience value before committing to a sales conversation, reducing your customer acquisition costs while building a viral adoption engine.';
      tactics = [
        'Build a self-serve onboarding experience with clear value moments',
        'Implement freemium or free trial with conversion triggers',
        'Create in-app education and success milestones',
        'Track product-qualified leads (PQLs) for expansion',
        'Build virality into the product experience'
      ];
    } else if (answers.productType === 'b2b-saas' && answers.companyStage === 'enterprise' && answers.resources === 'large') {
      framework = 'Enterprise Sales-Led Growth';
      explanation = 'Your enterprise positioning, established company stage, and substantial resources make a sales-led approach ideal. This allows for customized solutions, high-touch relationships, and maximizing customer lifetime value through strategic accounts.';
      tactics = [
        'Develop account-based marketing (ABM) campaigns',
        'Create custom proof-of-concept programs',
        'Build executive alignment and multi-threading strategies',
        'Implement rigorous qualification (BANT/MEDDIC)',
        'Establish customer success and expansion teams'
      ];
    } else if (answers.marketMaturity === 'new-category') {
      framework = 'Category Creation';
      explanation = 'Since you\'re entering a new market category, your primary challenge is education and demand generation. Category creation helps you define the problem space and position your product as the inevitable solution.';
      tactics = [
        'Develop thought leadership content defining the new category',
        'Create educational resources explaining the problem',
        'Build analyst and influencer relationships',
        'Host events and communities around the category',
        'Partner with complementary solutions for ecosystem building'
      ];
    } else if (answers.resources === 'large' && answers.productType === 'b2c') {
      framework = 'Marketing-Led Growth';
      explanation = 'With substantial marketing resources and a B2C product, a marketing-led approach allows you to build brand awareness at scale and drive user acquisition through paid and organic channels.';
      tactics = [
        'Invest in brand campaigns and awareness channels',
        'Build content marketing engine for SEO and organic',
        'Implement performance marketing across channels',
        'Create viral social and referral programs',
        'Develop community and advocacy programs'
      ];
    } else {
      framework = 'Hybrid Sales-Assist Model';
      explanation = 'Based on your inputs, a hybrid approach combining product-led tactics with sales support offers the best balance. Users can self-serve for quick wins while sales engages for expansion and complex use cases.';
      tactics = [
        'Offer self-serve tier with clear upgrade path',
        'Trigger sales engagement at usage thresholds',
        'Build product tours and onboarding automation',
        'Create sales-enablement materials for conversion',
        'Implement customer success for retention and expansion'
      ];
    }

    setResult({ framework, explanation, tactics });
  };

  const handleSubmit = () => {
    calculateRecommendation();
  };

  const resetForm = () => {
    setStep(1);
    setAnswers({
      productType: '',
      marketMaturity: '',
      companyStage: '',
      resources: ''
    });
    setResult(null);
  };

  return (
    <div className="tool-page">
      <div className="tool-header">
        <div className="tool-header-content">
          <h1>Go-to-Market Framework Selector</h1>
          <p>
            Answer these questions to discover which GTM framework aligns best with your product, market position, and organizational capabilities.
          </p>
        </div>
      </div>

      <div className="tool-content">
        {!result ? (
          <>
            <div className="form-section">
              <h3>1. What type of product are you bringing to market?</h3>
              <div className="radio-group">
                <label className="radio-option">
                  <input 
                    type="radio" 
                    name="productType" 
                    value="b2b-saas"
                    checked={answers.productType === 'b2b-saas'}
                    onChange={(e) => handleAnswer('productType', e.target.value)}
                  />
                  <div className="radio-content">
                    <div className="radio-title">B2B SaaS</div>
                    <div className="radio-description">Cloud-based software for business customers</div>
                  </div>
                </label>
                <label className="radio-option">
                  <input 
                    type="radio" 
                    name="productType" 
                    value="b2c"
                    checked={answers.productType === 'b2c'}
                    onChange={(e) => handleAnswer('productType', e.target.value)}
                  />
                  <div className="radio-content">
                    <div className="radio-title">B2C / Consumer</div>
                    <div className="radio-description">Product or service for individual consumers</div>
                  </div>
                </label>
                <label className="radio-option">
                  <input 
                    type="radio" 
                    name="productType" 
                    value="hardware"
                    checked={answers.productType === 'hardware'}
                    onChange={(e) => handleAnswer('productType', e.target.value)}
                  />
                  <div className="radio-content">
                    <div className="radio-title">Hardware / Physical Product</div>
                    <div className="radio-description">Physical devices or equipment</div>
                  </div>
                </label>
                <label className="radio-option">
                  <input 
                    type="radio" 
                    name="productType" 
                    value="platform"
                    checked={answers.productType === 'platform'}
                    onChange={(e) => handleAnswer('productType', e.target.value)}
                  />
                  <div className="radio-content">
                    <div className="radio-title">Platform / Marketplace</div>
                    <div className="radio-description">Multi-sided platform connecting buyers and sellers</div>
                  </div>
                </label>
              </div>
            </div>

            <div className="form-section">
              <h3>2. How mature is your market category?</h3>
              <div className="radio-group">
                <label className="radio-option">
                  <input 
                    type="radio" 
                    name="marketMaturity" 
                    value="new-category"
                    checked={answers.marketMaturity === 'new-category'}
                    onChange={(e) => handleAnswer('marketMaturity', e.target.value)}
                  />
                  <div className="radio-content">
                    <div className="radio-title">New Category</div>
                    <div className="radio-description">Defining a new problem space, minimal existing awareness</div>
                  </div>
                </label>
                <label className="radio-option">
                  <input 
                    type="radio" 
                    name="marketMaturity" 
                    value="emerging"
                    checked={answers.marketMaturity === 'emerging'}
                    onChange={(e) => handleAnswer('marketMaturity', e.target.value)}
                  />
                  <div className="radio-content">
                    <div className="radio-title">Emerging Category</div>
                    <div className="radio-description">Growing awareness, early adopters entering market</div>
                  </div>
                </label>
                <label className="radio-option">
                  <input 
                    type="radio" 
                    name="marketMaturity" 
                    value="established"
                    checked={answers.marketMaturity === 'established'}
                    onChange={(e) => handleAnswer('marketMaturity', e.target.value)}
                  />
                  <div className="radio-content">
                    <div className="radio-title">Established / Crowded</div>
                    <div className="radio-description">Well-defined category with multiple competitors</div>
                  </div>
                </label>
              </div>
            </div>

            <div className="form-section">
              <h3>3. What stage is your company?</h3>
              <div className="radio-group">
                <label className="radio-option">
                  <input 
                    type="radio" 
                    name="companyStage" 
                    value="startup"
                    checked={answers.companyStage === 'startup'}
                    onChange={(e) => handleAnswer('companyStage', e.target.value)}
                  />
                  <div className="radio-content">
                    <div className="radio-title">Early-Stage / Startup</div>
                    <div className="radio-description">Pre-Series A or early Series A, finding product-market fit</div>
                  </div>
                </label>
                <label className="radio-option">
                  <input 
                    type="radio" 
                    name="companyStage" 
                    value="growth"
                    checked={answers.companyStage === 'growth'}
                    onChange={(e) => handleAnswer('companyStage', e.target.value)}
                  />
                  <div className="radio-content">
                    <div className="radio-title">Growth Stage</div>
                    <div className="radio-description">Series B+, scaling go-to-market operations</div>
                  </div>
                </label>
                <label className="radio-option">
                  <input 
                    type="radio" 
                    name="companyStage" 
                    value="enterprise"
                    checked={answers.companyStage === 'enterprise'}
                    onChange={(e) => handleAnswer('companyStage', e.target.value)}
                  />
                  <div className="radio-content">
                    <div className="radio-title">Enterprise / Established</div>
                    <div className="radio-description">Large organization with established operations</div>
                  </div>
                </label>
              </div>
            </div>

            <div className="form-section">
              <h3>4. What resources do you have available?</h3>
              <div className="radio-group">
                <label className="radio-option">
                  <input 
                    type="radio" 
                    name="resources" 
                    value="small"
                    checked={answers.resources === 'small'}
                    onChange={(e) => handleAnswer('resources', e.target.value)}
                  />
                  <div className="radio-content">
                    <div className="radio-title">Small Team / Limited Budget</div>
                    <div className="radio-description">1-2 marketers, limited sales team, <$500K budget</div>
                  </div>
                </label>
                <label className="radio-option">
                  <input 
                    type="radio" 
                    name="resources" 
                    value="medium"
                    checked={answers.resources === 'medium'}
                    onChange={(e) => handleAnswer('resources', e.target.value)}
                  />
                  <div className="radio-content">
                    <div className="radio-title">Medium Resources</div>
                    <div className="radio-description">3-10 person team, growing sales org, $500K-$2M budget</div>
                  </div>
                </label>
                <label className="radio-option">
                  <input 
                    type="radio" 
                    name="resources" 
                    value="large"
                    checked={answers.resources === 'large'}
                    onChange={(e) => handleAnswer('resources', e.target.value)}
                  />
                  <div className="radio-content">
                    <div className="radio-title">Substantial Resources</div>
                    <div className="radio-description">Large marketing/sales teams, $2M+ budget</div>
                  </div>
                </label>
              </div>
            </div>

            <button 
              className="button-primary"
              onClick={handleSubmit}
              disabled={!answers.productType || !answers.marketMaturity || !answers.companyStage || !answers.resources}
            >
              Get Framework Recommendation <ChevronRight size={20} />
            </button>
          </>
        ) : (
          <div className="results-box">
            <div className="results-header">
              <div className="results-icon">
                <Sparkles size={28} />
              </div>
              <div>
                <div className="results-title">{result.framework}</div>
              </div>
            </div>
            <div className="results-content">
              <p><strong>Why this framework fits:</strong></p>
              <p>{result.explanation}</p>
              
              <h4>Key Tactics to Implement:</h4>
              <ul>
                {result.tactics.map((tactic, index) => (
                  <li key={index}>{tactic}</li>
                ))}
              </ul>

              <button 
                className="button-primary"
                onClick={resetForm}
                style={{ marginTop: '2rem' }}
              >
                Start New Assessment
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

// ============================================================================
// MESSAGING GENERATOR
// ============================================================================

function MessagingGenerator() {
  const [formData, setFormData] = useState({
    target: '',
    problem: '',
    solution: '',
    differentiation: '',
    proof: ''
  });
  const [result, setResult] = useState(null);

  const handleChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
  };

  const generatePositioning = () => {
    const positioning = `For ${formData.target} who ${formData.problem}, ${formData.solution} is a solution that ${formData.differentiation}. Unlike alternatives, we ${formData.proof}.`;
    setResult(positioning);
  };

  const examples = [
    {
      company: 'Slack',
      positioning: 'For teams who need to collaborate effectively, Slack is a team communication platform that brings all your communication together in one place. Unlike email, we provide real-time messaging, integrations with your tools, and searchable conversation history.'
    },
    {
      company: 'Notion',
      positioning: 'For teams who juggle multiple tools for docs, wikis, and project management, Notion is an all-in-one workspace that combines notes, tasks, wikis, and databases. Unlike separate point solutions, we provide one flexible workspace that adapts to your workflow.'
    },
    {
      company: 'Figma',
      positioning: 'For design teams who need to collaborate in real-time, Figma is a browser-based design tool that enables simultaneous editing and instant feedback. Unlike desktop design software, we eliminate versioning issues and enable true collaborative design.'
    },
    {
      company: 'Datadog',
      positioning: 'For DevOps teams who need visibility into their infrastructure and applications, Datadog is a monitoring and analytics platform that provides unified visibility across your entire stack. Unlike siloed monitoring tools, we correlate metrics, traces, and logs in a single platform.'
    },
    {
      company: 'HubSpot',
      positioning: 'For growing businesses who need to align marketing, sales, and service, HubSpot is a CRM platform that provides tools for the entire customer journey. Unlike fragmented systems, we offer an integrated platform that grows with your business.'
    }
  ];

  return (
    <div className="tool-page">
      <div className="tool-header">
        <div className="tool-header-content">
          <h1>Messaging & Positioning Generator</h1>
          <p>
            Craft clear, compelling positioning statements using the proven framework. Fill in each component to generate your positioning statement.
          </p>
        </div>
      </div>

      <div className="tool-content">
        <div className="form-section">
          <h3>Build Your Positioning Statement</h3>
          
          <div className="form-group">
            <label className="form-label">Target Audience</label>
            <input 
              type="text"
              className="form-input"
              placeholder="e.g., B2B SaaS marketing teams, enterprise security leaders..."
              value={formData.target}
              onChange={(e) => handleChange('target', e.target.value)}
            />
          </div>

          <div className="form-group">
            <label className="form-label">Problem / Need</label>
            <textarea 
              className="form-textarea"
              placeholder="e.g., struggle to coordinate campaigns across channels, lack visibility into security threats..."
              value={formData.problem}
              onChange={(e) => handleChange('problem', e.target.value)}
            />
          </div>

          <div className="form-group">
            <label className="form-label">Solution / Product</label>
            <input 
              type="text"
              className="form-input"
              placeholder="e.g., [Product Name] is a marketing automation platform..."
              value={formData.solution}
              onChange={(e) => handleChange('solution', e.target.value)}
            />
          </div>

          <div className="form-group">
            <label className="form-label">Key Differentiation / Benefit</label>
            <textarea 
              className="form-textarea"
              placeholder="e.g., provides AI-powered campaign optimization, detects threats in real-time..."
              value={formData.differentiation}
              onChange={(e) => handleChange('differentiation', e.target.value)}
            />
          </div>

          <div className="form-group">
            <label className="form-label">Proof Points / Unlike Competitors</label>
            <textarea 
              className="form-textarea"
              placeholder="e.g., deliver 3x faster implementation, provide enterprise-grade security..."
              value={formData.proof}
              onChange={(e) => handleChange('proof', e.target.value)}
            />
          </div>

          <button 
            className="button-primary"
            onClick={generatePositioning}
            disabled={!formData.target || !formData.problem || !formData.solution || !formData.differentiation || !formData.proof}
          >
            Generate Positioning Statement <Sparkles size={20} />
          </button>
        </div>

        {result && (
          <div className="results-box">
            <div className="results-header">
              <div className="results-icon">
                <Check size={28} />
              </div>
              <div>
                <div className="results-title">Your Positioning Statement</div>
              </div>
            </div>
            <div className="positioning-output">
              {result}
            </div>
            <p style={{ marginTop: '1rem', color: 'var(--text-secondary)' }}>
              Tip: Test this positioning with customers, iterate based on feedback, and ensure it resonates across all your marketing materials.
            </p>
          </div>
        )}

        <div className="examples-section">
          <h3 style={{ fontFamily: 'Cormorant Garamond', fontSize: '1.75rem', marginBottom: '1.5rem', color: 'var(--primary-purple)' }}>
            Real-World Examples
          </h3>
          {examples.map((example, index) => (
            <div key={index} className="example-card">
              <div className="example-company">{example.company}</div>
              <div className="example-text">{example.positioning}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ============================================================================
// CHECKLIST BUILDER
// ============================================================================

function ChecklistBuilder() {
  const [config, setConfig] = useState({
    productType: '',
    gtmMotion: '',
    launchScale: '',
    timeline: ''
  });
  const [checklist, setChecklist] = useState(null);

  const generateChecklist = () => {
    // Generate comprehensive checklist based on configuration
    const weeks = [];
    
    if (config.timeline === '12-weeks') {
      weeks.push(
        {
          title: 'Weeks 1-2: Foundation & Research',
          items: [
            'Conduct competitive analysis and market research',
            'Define target personas and ideal customer profile (ICP)',
            'Establish success metrics and KPIs for launch',
            'Audit existing marketing assets and identify gaps',
            'Set up tracking and analytics infrastructure'
          ]
        },
        {
          title: 'Weeks 3-4: Messaging & Positioning',
          items: [
            'Develop core messaging framework and positioning',
            'Create value proposition and key differentiators',
            'Draft elevator pitch and sales talking points',
            'Conduct message testing with select customers',
            'Finalize product naming and branding guidelines'
          ]
        },
        {
          title: 'Weeks 5-6: Content Development',
          items: [
            'Create product website page or landing page',
            'Write product documentation and help center articles',
            'Develop sales enablement deck and one-pager',
            'Create demo video and product screenshots',
            'Draft blog posts and thought leadership content'
          ]
        },
        {
          title: 'Weeks 7-8: Campaign Planning',
          items: [
            'Build launch email sequences for different segments',
            'Create social media content calendar (4 weeks)',
            'Develop paid advertising creative and targeting',
            'Plan webinar or virtual launch event',
            'Coordinate with PR team on media outreach plan'
          ]
        },
        {
          title: 'Weeks 9-10: Sales Enablement',
          items: [
            'Conduct sales training and product certification',
            'Build competitive battlecards and objection handling',
            'Create customer success onboarding materials',
            'Develop pricing and packaging documentation',
            'Set up lead routing and qualification criteria'
          ]
        },
        {
          title: 'Weeks 11-12: Pre-Launch & Final Prep',
          items: [
            'Soft launch to beta customers and gather feedback',
            'QA all marketing materials and website pages',
            'Schedule and test all email campaigns',
            'Prepare launch day social media posts',
            'Brief customer support team on FAQs and known issues'
          ]
        },
        {
          title: 'Launch Day',
          items: [
            'Send launch announcement email to customer base',
            'Publish blog post and press release',
            'Post on all social media channels',
            'Monitor support channels and respond to questions',
            'Track early metrics and engagement'
          ]
        },
        {
          title: 'Post-Launch: Weeks 1-2',
          items: [
            'Analyze launch metrics vs goals (traffic, signups, MQLs)',
            'Conduct user interviews and gather feedback',
            'Optimize conversion funnels based on data',
            'Share launch results internally and with stakeholders',
            'Document lessons learned and iterate on messaging'
          ]
        }
      );
    } else if (config.timeline === '8-weeks') {
      weeks.push(
        {
          title: 'Weeks 1-2: Foundation',
          items: [
            'Define target audience and positioning',
            'Set launch metrics and goals',
            'Conduct competitive analysis',
            'Create core messaging framework'
          ]
        },
        {
          title: 'Weeks 3-4: Content Creation',
          items: [
            'Build product landing page',
            'Create sales enablement materials',
            'Develop launch email campaigns',
            'Write blog content and documentation'
          ]
        },
        {
          title: 'Weeks 5-6: Campaign Setup',
          items: [
            'Train sales team on positioning',
            'Set up paid advertising campaigns',
            'Plan social media content calendar',
            'Prepare customer success materials'
          ]
        },
        {
          title: 'Week 7: Pre-Launch',
          items: [
            'QA all materials and campaigns',
            'Soft launch to select customers',
            'Schedule launch communications',
            'Brief support team'
          ]
        },
        {
          title: 'Week 8: Launch & Initial Analysis',
          items: [
            'Execute launch day plan',
            'Monitor metrics and engagement',
            'Gather early feedback',
            'Optimize based on data'
          ]
        }
      );
    } else {
      weeks.push(
        {
          title: 'Weeks 1-2: Prep & Content',
          items: [
            'Define positioning and key messages',
            'Create landing page and core content',
            'Build email campaign',
            'Train sales team'
          ]
        },
        {
          title: 'Week 3: Pre-Launch',
          items: [
            'QA all materials',
            'Schedule communications',
            'Prepare support team',
            'Set up tracking'
          ]
        },
        {
          title: 'Week 4: Launch',
          items: [
            'Execute launch',
            'Monitor metrics',
            'Respond to feedback',
            'Analyze initial results'
          ]
        }
      );
    }

    setChecklist(weeks);
  };

  const handleDownload = () => {
    const text = checklist.map(week => 
      `${week.title}\n${week.items.map(item => `☐ ${item}`).join('\n')}\n\n`
    ).join('');
    
    const blob = new Blob([text], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'product-launch-checklist.txt';
    a.click();
  };

  return (
    <div className="tool-page">
      <div className="tool-header">
        <div className="tool-header-content">
          <h1>Product Launch Checklist Builder</h1>
          <p>
            Generate a customized launch checklist tailored to your product type, timeline, and go-to-market motion.
          </p>
        </div>
      </div>

      <div className="tool-content">
        {!checklist ? (
          <>
            <div className="form-section">
              <h3>Configure Your Launch</h3>
              
              <div className="form-group">
                <label className="form-label">Product Type</label>
                <select 
                  className="form-select"
                  value={config.productType}
                  onChange={(e) => setConfig({ ...config, productType: e.target.value })}
                >
                  <option value="">Select product type...</option>
                  <option value="new-product">New Product</option>
                  <option value="major-feature">Major Feature</option>
                  <option value="update">Product Update</option>
                </select>
              </div>

              <div className="form-group">
                <label className="form-label">Go-to-Market Motion</label>
                <select 
                  className="form-select"
                  value={config.gtmMotion}
                  onChange={(e) => setConfig({ ...config, gtmMotion: e.target.value })}
                >
                  <option value="">Select GTM motion...</option>
                  <option value="plg">Product-Led Growth</option>
                  <option value="sales-led">Sales-Led</option>
                  <option value="hybrid">Hybrid (PLG + Sales)</option>
                </select>
              </div>

              <div className="form-group">
                <label className="form-label">Launch Scale</label>
                <select 
                  className="form-select"
                  value={config.launchScale}
                  onChange={(e) => setConfig({ ...config, launchScale: e.target.value })}
                >
                  <option value="">Select launch scale...</option>
                  <option value="soft">Soft Launch (Limited audience)</option>
                  <option value="full">Full Launch (All customers)</option>
                </select>
              </div>

              <div className="form-group">
                <label className="form-label">Timeline</label>
                <select 
                  className="form-select"
                  value={config.timeline}
                  onChange={(e) => setConfig({ ...config, timeline: e.target.value })}
                >
                  <option value="">Select timeline...</option>
                  <option value="4-weeks">4 Weeks (Sprint)</option>
                  <option value="8-weeks">8 Weeks (Standard)</option>
                  <option value="12-weeks">12+ Weeks (Comprehensive)</option>
                </select>
              </div>

              <button 
                className="button-primary"
                onClick={generateChecklist}
                disabled={!config.productType || !config.gtmMotion || !config.launchScale || !config.timeline}
              >
                Generate Checklist <CheckSquare size={20} />
              </button>
            </div>
          </>
        ) : (
          <>
            <div className="form-section" style={{ marginBottom: '2rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
                <h3 style={{ margin: 0 }}>Your Launch Checklist</h3>
                <button className="button-primary" onClick={handleDownload}>
                  <Download size={18} />
                  Download Checklist
                </button>
              </div>
              <p style={{ color: 'var(--text-secondary)' }}>
                {config.productType === 'new-product' ? 'New Product' : config.productType === 'major-feature' ? 'Major Feature' : 'Product Update'} · {config.gtmMotion === 'plg' ? 'Product-Led' : config.gtmMotion === 'sales-led' ? 'Sales-Led' : 'Hybrid'} · {config.timeline === '4-weeks' ? '4 Week Timeline' : config.timeline === '8-weeks' ? '8 Week Timeline' : '12+ Week Timeline'}
              </p>
            </div>

            {checklist.map((week, index) => (
              <div key={index} className="checklist-section">
                <div className="checklist-week">{week.title}</div>
                <div className="checklist-items">
                  {week.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="checklist-item">
                      <input type="checkbox" className="checklist-checkbox" />
                      <div className="checklist-text">{item}</div>
                    </div>
                  ))}
                </div>
              </div>
            ))}

            <button 
              className="button-primary"
              onClick={() => {
                setChecklist(null);
                setConfig({ productType: '', gtmMotion: '', launchScale: '', timeline: '' });
              }}
              style={{ marginTop: '2rem' }}
            >
              Create New Checklist
            </button>
          </>
        )}
      </div>
    </div>
  );
}

// ============================================================================
// CASE STUDY LIBRARY
// ============================================================================

function CaseStudyLibrary() {
  const [selectedTemplate, setSelectedTemplate] = useState(null);

  const templates = [
    {
      id: 1,
      title: 'B2B SaaS Enterprise',
      description: 'Comprehensive case study format for enterprise customers, focusing on organizational transformation and ROI.',
      sections: [
        { title: 'Executive Summary', content: 'Brief overview of customer, challenge, solution, and key results (2-3 sentences)' },
        { title: 'About the Customer', content: 'Company background, industry, size, and relevant context' },
        { title: 'The Challenge', content: 'Detailed description of business problems and pain points they faced' },
        { title: 'Why [Your Company]', content: 'Selection criteria, evaluation process, and why they chose you' },
        { title: 'The Solution', content: 'How your product was implemented, key features used, and adoption process' },
        { title: 'Results & ROI', content: 'Quantifiable business outcomes with specific metrics and timeframes' },
        { title: 'Customer Quote', content: 'Authentic testimonial from executive stakeholder' },
        { title: 'Looking Ahead', content: 'Future plans and expansion opportunities' }
      ]
    },
    {
      id: 2,
      title: 'B2B SaaS SMB',
      description: 'Concise, benefit-focused template for small-to-medium business customers emphasizing speed and simplicity.',
      sections: [
        { title: 'Customer Snapshot', content: 'Company name, industry, team size, and location' },
        { title: 'The Problem', content: 'What wasn\'t working before (1-2 paragraphs)' },
        { title: 'The Solution', content: 'How your product solved their problem (1-2 paragraphs)' },
        { title: 'Key Results', content: '3-5 bullet points with specific metrics' },
        { title: 'Customer Testimonial', content: 'Quote from decision-maker or power user' },
        { title: 'Implementation Highlight', content: 'Speed of setup, ease of adoption, key success factor' }
      ]
    },
    {
      id: 3,
      title: 'Technical / Developer Audience',
      description: 'Technical deep-dive template for developer tools, APIs, or infrastructure products.',
      sections: [
        { title: 'Technical Overview', content: 'Company tech stack, scale, and technical challenges' },
        { title: 'The Technical Challenge', content: 'Specific technical problems, architecture constraints, or performance issues' },
        { title: 'Evaluation & Decision', content: 'Technical requirements, alternatives considered, and selection criteria' },
        { title: 'Implementation Details', content: 'Integration approach, code examples, and technical architecture' },
        { title: 'Performance Metrics', content: 'Technical KPIs: latency, throughput, error rates, uptime, etc.' },
        { title: 'Developer Experience', content: 'Quote from engineering team about DX, documentation, support' },
        { title: 'Technical Takeaways', content: 'Key learnings and recommendations for similar implementations' }
      ]
    },
    {
      id: 4,
      title: 'ROI-Focused',
      description: 'Numbers-heavy template emphasizing financial impact and business value, ideal for CFO/finance audiences.',
      sections: [
        { title: 'Business Context', content: 'Industry, company size, and revenue context' },
        { title: 'Initial Situation', content: 'Cost of existing solution or cost of the problem' },
        { title: 'Investment', content: 'Transparent about pricing, implementation costs, and timeline' },
        { title: 'Financial Impact', content: 'Hard cost savings, revenue increase, or efficiency gains' },
        { title: 'ROI Calculation', content: 'Clear breakdown: Investment vs. Return, payback period' },
        { title: 'Productivity Gains', content: 'Time saved, headcount efficiency, or redeployed resources' },
        { title: 'Risk Mitigation', content: 'Avoided costs, reduced compliance risk, or prevented downtime' },
        { title: 'CFO Quote', content: 'Testimonial from finance leader validating the business case' }
      ]
    },
    {
      id: 5,
      title: 'Transformation Story',
      description: 'Narrative-driven template highlighting organizational change and strategic impact.',
      sections: [
        { title: 'Before State', content: 'Paint a picture of life before: inefficiencies, manual processes, frustrations' },
        { title: 'The Catalyst', content: 'What triggered the need for change (growth, event, new leadership, etc.)' },
        { title: 'The Journey', content: 'Implementation story: challenges overcome, change management, adoption' },
        { title: 'After State', content: 'Describe the new reality: workflows, team dynamics, capabilities' },
        { title: 'Business Impact', content: 'Quantifiable outcomes and qualitative improvements' },
        { title: 'Team Transformation', content: 'How roles, responsibilities, or culture changed' },
        { title: 'Executive Reflection', content: 'Quote from leader on strategic impact' },
        { title: 'Advice for Others', content: 'Customer shares lessons learned and recommendations' }
      ]
    },
    {
      id: 6,
      title: 'Quick Win / Short Format',
      description: 'One-page format highlighting rapid implementation and immediate value.',
      sections: [
        { title: 'Company & Challenge', content: 'Who they are and what problem they needed to solve (2-3 sentences)' },
        { title: 'Fast Implementation', content: 'How quickly they got up and running' },
        { title: 'Immediate Results', content: '3-4 quick-hit metrics or wins within first 30-60 days' },
        { title: 'Customer Quote', content: 'Brief testimonial highlighting speed to value' },
        { title: 'What\'s Next', content: 'Plans for expansion or additional use cases' }
      ]
    },
    {
      id: 7,
      title: 'Multi-Product Use Case',
      description: 'Template for customers using multiple products or modules, showing platform value.',
      sections: [
        { title: 'Customer Profile', content: 'Company overview and complex challenges across functions' },
        { title: 'Initial Entry Point', content: 'First product adopted and initial problem solved' },
        { title: 'Expansion Journey', content: 'Timeline of additional products adopted and why' },
        { title: 'Product 1 Impact', content: 'Specific results from first product' },
        { title: 'Product 2 Impact', content: 'Specific results from second product' },
        { title: 'Product 3 Impact', content: 'Specific results from third product' },
        { title: 'Platform Synergies', content: 'How products work together, integrated workflows' },
        { title: 'Total Business Value', content: 'Cumulative impact across all products' }
      ]
    },
    {
      id: 8,
      title: 'Video-First Format',
      description: 'Structured template designed to accompany video case studies.',
      sections: [
        { title: 'Video Thumbnail / Teaser', content: 'Compelling still image and 1-sentence hook' },
        { title: 'Written Summary', content: 'Scannable overview for those who can\'t watch video' },
        { title: 'Featured Customer', content: 'Name, title, photo, and company context' },
        { title: 'Key Quotes from Video', content: 'Pull out 2-3 most impactful quotes as callouts' },
        { title: 'By the Numbers', content: 'Metrics display prominently (designed for social sharing)' },
        { title: 'Full Video Transcript', content: 'SEO-friendly transcript of the video interview' },
        { title: 'Related Resources', content: 'Links to relevant content, product pages, or similar stories' }
      ]
    }
  ];

  const handlePreview = (template) => {
    setSelectedTemplate(template);
  };

  const handleDownload = (template) => {
    const markdown = `# ${template.title}\n\n${template.description}\n\n---\n\n${template.sections.map(section => 
      `## ${section.title}\n\n${section.content}\n\n`
    ).join('')}`;
    
    const blob = new Blob([markdown], { type: 'text/markdown' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${template.title.toLowerCase().replace(/\s+/g, '-')}-template.md`;
    a.click();
  };

  return (
    <div className="tool-page">
      <div className="tool-header">
        <div className="tool-header-content">
          <h1>Case Study Template Library</h1>
          <p>
            Browse 8 proven case study templates for different scenarios, audiences, and formats. Preview the structure and download as markdown.
          </p>
        </div>
      </div>

      <div className="tool-content">
        <div className="templates-grid">
          {templates.map(template => (
            <div key={template.id} className="template-card">
              <div className="template-preview">
                <div className="template-preview-icon">
                  <FileText size={32} />
                </div>
              </div>
              <div className="template-info">
                <h3 className="template-title">{template.title}</h3>
                <p className="template-description">{template.description}</p>
                <div className="template-actions">
                  <button 
                    className="button-secondary"
                    onClick={() => handlePreview(template)}
                  >
                    Preview
                  </button>
                  <button 
                    className="button-secondary"
                    onClick={() => handleDownload(template)}
                  >
                    <Download size={16} />
                    Download
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedTemplate && (
        <div className="modal-overlay" onClick={() => setSelectedTemplate(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <div>
                <h2 className="modal-title">{selectedTemplate.title}</h2>
                <p style={{ color: 'var(--text-secondary)', marginTop: '0.5rem' }}>
                  {selectedTemplate.description}
                </p>
              </div>
              <button className="modal-close" onClick={() => setSelectedTemplate(null)}>
                ×
              </button>
            </div>
            <div className="modal-body">
              {selectedTemplate.sections.map((section, index) => (
                <div key={index} className="template-section">
                  <div className="template-section-title">{section.title}</div>
                  <div className="template-section-content">{section.content}</div>
                </div>
              ))}
              <button 
                className="button-primary"
                onClick={() => handleDownload(selectedTemplate)}
                style={{ width: '100%', marginTop: '1rem' }}
              >
                <Download size={20} />
                Download Template
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
