import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import {
  ArrowLeft,
  Building2,
  Lock,
  Server,
  Database,
  FileText,
  CheckCircle2,
  Boxes,
  Workflow,
  Radio,
  BarChart3,
  Car,
  Gavel,
  Warehouse,
  PackageCheck,
  Network,
  ShieldCheck,
  Ship,
  Code2,
  AlertCircle,
  Briefcase,
  Layers,
  FileSpreadsheet,
  Globe2,
  FileCheck2,
  Activity,
  Calendar,
  Eye,
  Play,
  BadgeDollarSign,
  Cpu,
  TrendingUp,
  Timer,
  Award,
  Zap,
  ArrowRight
} from 'lucide-react';
import { ProjectItem } from '../types/portfolio';

interface ProjectDetailPageProps {
  project: ProjectItem;
  onBack: () => void;
}

export const ProjectDetailPage: React.FC<ProjectDetailPageProps> = ({
  project,
  onBack
}) => {
  // Ensure we scroll to top on mount and when project changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [project.slug]);

  // Workflow icon resolver
  const getWorkflowIcon = (step: number, iconName?: string) => {
    switch (iconName) {
      case 'Car':
        return <Car className="w-5 h-5" />;
      case 'Calendar':
        return <Calendar className="w-5 h-5" />;
      case 'Eye':
        return <Eye className="w-5 h-5" />;
      case 'Play':
        return <Play className="w-5 h-5" />;
      case 'BadgeDollarSign':
        return <BadgeDollarSign className="w-5 h-5" />;
      case 'Cpu':
        return <Cpu className="w-5 h-5" />;
      case 'Activity':
        return <Activity className="w-5 h-5" />;
      case 'TrendingUp':
        return <TrendingUp className="w-5 h-5" />;
      case 'Timer':
        return <Timer className="w-5 h-5" />;
      case 'Award':
        return <Award className="w-5 h-5" />;
      case 'Gavel':
        return <Gavel className="w-5 h-5" />;
      case 'CheckCircle2':
        return <CheckCircle2 className="w-5 h-5" />;
      case 'Warehouse':
        return <Warehouse className="w-5 h-5" />;
      case 'Boxes':
        return <Boxes className="w-5 h-5" />;
      case 'PackageCheck':
        return <PackageCheck className="w-5 h-5" />;
      case 'FileText':
        return <FileText className="w-5 h-5" />;
      case 'Network':
        return <Network className="w-5 h-5" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-5 h-5" />;
      case 'Ship':
        return <Ship className="w-5 h-5" />;
      default:
        return <Workflow className="w-5 h-5" />;
    }
  };

  // Tech stack icon & category map
  const getTechDetails = (tech: string) => {
    switch (tech) {
      case 'Java 8':
        return {
          icon: <Code2 className="w-4 h-4 text-amber-600 dark:text-amber-400" />,
          category: 'Core Language',
          desc: 'Object-oriented backend business logic & core processing'
        };
      case 'Spring MVC':
        return {
          icon: <Server className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />,
          category: 'Web Framework',
          desc: 'Controllers, service layer orchestration & MVC lifecycle'
        };
      case 'Hibernate':
        return {
          icon: <Layers className="w-4 h-4 text-blue-600 dark:text-blue-400" />,
          category: 'ORM / Persistence',
          desc: 'Entity mappings, transaction management & HQL queries'
        };
      case 'MySQL':
        return {
          icon: <Database className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />,
          category: 'Relational Database',
          desc: 'Structured schema, relational data storage & query execution'
        };
      case 'Apache Kafka':
        return {
          icon: <Activity className="w-4 h-4 text-orange-600 dark:text-orange-400" />,
          category: 'Event-Driven Messaging',
          desc: 'Asynchronous communication & auction/bidding event processing'
        };
      case 'JasperReports':
        return {
          icon: <FileSpreadsheet className="w-4 h-4 text-rose-600 dark:text-rose-400" />,
          category: 'Enterprise Reporting',
          desc: 'Compiled dynamic reports, business documents & records'
        };
      case 'Web API Integration':
      case 'REST/API Integration':
        return {
          icon: <Radio className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />,
          category: 'Web Services & APIs',
          desc: 'Exchanging application data with related systems & workflows'
        };
      case 'Japanese Customs API':
        return {
          icon: <Globe2 className="w-4 h-4 text-violet-600 dark:text-violet-400" />,
          category: 'External Authority API',
          desc: 'Electronic declaration submission & clearance status handling'
        };
      default:
        return {
          icon: <Code2 className="w-4 h-4 text-slate-600 dark:text-slate-400" />,
          category: 'Technology',
          desc: 'Enterprise software component'
        };
    }
  };

  const getHighlightIcon = (iconName?: string, idx: number = 0) => {
    switch (iconName) {
      case 'Gavel':
        return <Gavel className="w-4 h-4" />;
      case 'Activity':
        return <Activity className="w-4 h-4" />;
      case 'Radio':
        return <Radio className="w-4 h-4" />;
      case 'Server':
        return <Server className="w-4 h-4" />;
      case 'Database':
        return <Database className="w-4 h-4" />;
      case 'BarChart3':
        return <BarChart3 className="w-4 h-4" />;
      case 'Building2':
        return <Building2 className="w-4 h-4" />;
      case 'Workflow':
        return <Workflow className="w-4 h-4" />;
      default:
        return idx % 2 === 0 ? <Server className="w-4 h-4" /> : <Activity className="w-4 h-4" />;
    }
  };

  const isOnlineAuction = project.id === 'online-vehicle-auction';
  const workflowTitle = isOnlineAuction ? 'Live Bidding Workflow' : 'Business Workflow';
  const workflowSubtitle = isOnlineAuction
    ? 'Real-time customer journey and bidding state progression from vehicle listing to winning bid processing and purchase.'
    : 'End-to-end operational stages from vehicle intake in Japan to international customs clearance and export.';

  return (
    <div id="project-detail-view" className="pt-28 pb-16 sm:pt-36 sm:pb-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Navigation & Breadcrumb Bar */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 pb-4 border-b border-slate-200 dark:border-slate-800"
        >
          <button
            id="back-to-portfolio-btn"
            onClick={onBack}
            className="inline-flex items-center gap-2 text-sm font-semibold text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors w-fit group cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span>Back to Portfolio</span>
          </button>

          {/* Breadcrumbs */}
          <nav aria-label="Breadcrumb" className="text-xs font-mono text-slate-500 dark:text-slate-400 flex items-center gap-2 overflow-x-auto whitespace-nowrap">
            <span className="cursor-pointer hover:underline" onClick={onBack}>Portfolio</span>
            <span>/</span>
            <span className="cursor-pointer hover:underline" onClick={onBack}>Projects</span>
            <span>/</span>
            <span className="text-slate-900 dark:text-slate-200 font-semibold">{project.title}</span>
          </nav>
        </motion.div>

        {/* Hero Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="bg-white dark:bg-slate-900 rounded-2xl p-6 sm:p-10 border border-slate-200 dark:border-slate-800 shadow-sm mb-10 relative overflow-hidden"
        >
          {/* Decorative background glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/5 dark:bg-blue-500/10 blur-3xl rounded-full pointer-events-none -mr-20 -mt-20" />

          {/* Type Badge */}
          <div className="flex flex-wrap items-center gap-2.5 mb-4">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-bold uppercase tracking-wider bg-blue-50 dark:bg-blue-950/70 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-800">
              <Building2 className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
              {project.typeLabel}
            </span>
            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-xs font-medium bg-amber-50 dark:bg-amber-950/50 text-amber-700 dark:text-amber-300 border border-amber-200 dark:border-amber-800">
              <Lock className="w-3 h-3" />
              Production Enterprise System
            </span>
          </div>

          <h1 className="text-2xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight mb-4">
            {project.title}
          </h1>

          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-4xl mb-6">
            {project.description}
          </p>

          {/* Key Meta Quick Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-6 border-t border-slate-100 dark:border-slate-800">
            <div className="p-3 rounded-lg bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-700/50">
              <span className="block text-[11px] font-mono uppercase text-slate-500 dark:text-slate-400">My Role</span>
              <span className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white">Java Developer</span>
            </div>
            <div className="p-3 rounded-lg bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-700/50">
              <span className="block text-[11px] font-mono uppercase text-slate-500 dark:text-slate-400">Domain</span>
              <span className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white">
                {isOnlineAuction ? 'Online Vehicle Auction' : 'Auction & Export Operations'}
              </span>
            </div>
            <div className="p-3 rounded-lg bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-700/50">
              <span className="block text-[11px] font-mono uppercase text-slate-500 dark:text-slate-400">
                {isOnlineAuction ? 'Event Messaging' : 'External Integration'}
              </span>
              <span className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white">
                {isOnlineAuction ? 'Apache Kafka' : 'Japanese Customs API'}
              </span>
            </div>
            <div className="p-3 rounded-lg bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-700/50">
              <span className="block text-[11px] font-mono uppercase text-slate-500 dark:text-slate-400">Core Backend</span>
              <span className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white">Java 8 • Spring MVC</span>
            </div>
          </div>
        </motion.div>

        <div className="space-y-10">

          {/* 1. Project Overview & Business Purpose */}
          <motion.section
            id="project-overview-section"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-20px' }}
            transition={{ duration: 0.4 }}
            className="bg-white dark:bg-slate-900 rounded-xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-2xs space-y-6"
          >
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="w-5 h-0.5 bg-blue-600 dark:bg-blue-400" />
                <span className="text-xs font-mono font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400">
                  Section 01
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white tracking-tight">
                Project Overview & Business Purpose
              </h2>
            </div>

            <div className="space-y-4 text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed">
              {isOnlineAuction ? (
                <>
                  <p>
                    This is an online vehicle auction platform that enables customers to browse available vehicles and participate in <strong className="text-slate-900 dark:text-white font-semibold">online auctions through live bidding</strong>.
                  </p>
                  <p>
                    Customers can participate in an active auction, place bids on vehicles, monitor current bidding activity, and purchase the vehicle when they successfully win the auction according to the business rules.
                  </p>
                  <p>
                    The platform provides an online environment for conducting vehicle auctions and connects customers with available vehicle listings through a digital bidding process.
                  </p>
                </>
              ) : (
                <>
                  <p>
                    The project is an enterprise application used to manage the <strong className="text-slate-900 dark:text-white font-semibold">vehicle auction and export process from Japan to international destinations</strong>, including Dubai and African markets.
                  </p>
                  <p>
                    The application manages vehicles through different operational stages, from vehicle processing and auction-related activities to yard operations, container booking, loading, export documentation, and customs clearance.
                  </p>
                  <p>
                    The system also integrates with <strong className="text-slate-900 dark:text-white font-semibold">Japanese Customs APIs</strong> to electronically submit required customs-related documents and receive customs clearance-related responses and information, supporting the entire operational workflow involved in preparing vehicles for international export.
                  </p>
                </>
              )}
            </div>

            {/* Visual Operational Flow / Scope Pill */}
            {isOnlineAuction ? (
              <div className="p-4 rounded-lg bg-slate-50 dark:bg-slate-800/70 border border-slate-200/80 dark:border-slate-700/80 flex flex-wrap items-center gap-3 text-xs font-medium text-slate-700 dark:text-slate-300">
                <span className="font-semibold text-slate-900 dark:text-white">Customer Auction Journey:</span>
                <span className="px-2.5 py-1 rounded bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-blue-600 dark:text-blue-400 font-mono">Vehicle Browse</span>
                <span>→</span>
                <span className="px-2.5 py-1 rounded bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-emerald-600 dark:text-emerald-400 font-mono">Live Bidding</span>
                <span>→</span>
                <span className="px-2.5 py-1 rounded bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-indigo-600 dark:text-indigo-400 font-mono">Bid Status Tracking</span>
                <span>→</span>
                <span className="px-2.5 py-1 rounded bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-cyan-600 dark:text-cyan-400 font-mono">Winning Bid Purchase</span>
              </div>
            ) : (
              <div className="p-4 rounded-lg bg-slate-50 dark:bg-slate-800/70 border border-slate-200/80 dark:border-slate-700/80 flex flex-wrap items-center gap-4 text-xs font-medium text-slate-700 dark:text-slate-300">
                <span className="font-semibold text-slate-900 dark:text-white">Export Routing Scope:</span>
                <span className="px-2.5 py-1 rounded bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-blue-600 dark:text-blue-400 font-mono">Japan (Origin)</span>
                <span>→</span>
                <span className="px-2.5 py-1 rounded bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-emerald-600 dark:text-emerald-400 font-mono">Dubai</span>
                <span>•</span>
                <span className="px-2.5 py-1 rounded bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-indigo-600 dark:text-indigo-400 font-mono">African Markets</span>
                <span>•</span>
                <span className="px-2.5 py-1 rounded bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 font-mono">Global Ports</span>
              </div>
            )}
          </motion.section>

          {/* 2. Key Functionalities */}
          <motion.section
            id="key-functionalities-section"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-20px' }}
            transition={{ duration: 0.4 }}
            className="bg-white dark:bg-slate-900 rounded-xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-2xs space-y-6"
          >
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="w-5 h-0.5 bg-blue-600 dark:bg-blue-400" />
                <span className="text-xs font-mono font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400">
                  Section 02
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white tracking-tight">
                Key Functionalities
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-1">
                Major functional modules supporting the digital platform operations and workflow.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
              {project.functionalities?.map((func, idx) => (
                <div
                  key={idx}
                  className="p-3.5 rounded-lg bg-slate-50/90 dark:bg-slate-800/70 border border-slate-200/80 dark:border-slate-700/70 flex items-start gap-3 hover:border-blue-300 dark:hover:border-blue-700 transition-colors"
                >
                  <div className="p-1.5 rounded bg-blue-100 dark:bg-blue-900/60 text-blue-600 dark:text-blue-400 mt-0.5 shrink-0">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-xs sm:text-sm font-semibold text-slate-900 dark:text-white">
                      {func}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </motion.section>

          {/* 3. Live Bidding / Business Workflow */}
          <motion.section
            id="business-workflow-section"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-20px' }}
            transition={{ duration: 0.4 }}
            className="bg-white dark:bg-slate-900 rounded-xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-2xs space-y-6"
          >
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="w-5 h-0.5 bg-blue-600 dark:bg-blue-400" />
                <span className="text-xs font-mono font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400">
                  Section 03
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white tracking-tight">
                {workflowTitle}
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-1">
                {workflowSubtitle}
              </p>
            </div>

            {/* Visual Workflow Pipeline */}
            <div className="relative">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-3.5">
                {project.workflow?.map((item, wIdx) => {
                  const totalSteps = project.workflow?.length || 10;
                  const isLast = item.step === totalSteps;

                  return (
                    <div
                      key={item.step}
                      className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/80 relative flex flex-col justify-between hover:border-blue-400 dark:hover:border-blue-600 transition-all hover:shadow-2xs group"
                    >
                      <div>
                        <div className="flex items-center justify-between mb-3">
                          <span className="w-6 h-6 rounded-full bg-blue-600 text-white dark:bg-blue-500 font-mono text-xs font-bold flex items-center justify-center">
                            {item.step}
                          </span>
                          <div className="p-2 rounded-lg bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800 group-hover:scale-110 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-all">
                            {getWorkflowIcon(item.step, item.iconName)}
                          </div>
                        </div>
                        <h3 className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white mb-1">
                          {item.title}
                        </h3>
                        <p className="text-[11px] text-slate-500 dark:text-slate-400 leading-snug">
                          {item.subtitle}
                        </p>
                      </div>

                      {!isLast ? (
                        <div className="mt-3 pt-2 border-t border-slate-200/60 dark:border-slate-700/60 text-[10px] font-mono text-slate-400 dark:text-slate-500 flex items-center justify-between">
                          <span>Stage {item.step}</span>
                          <span className="text-blue-500 font-bold">↓ Next</span>
                        </div>
                      ) : (
                        <div className="mt-3 pt-2 border-t border-emerald-200 dark:border-emerald-900/60 text-[10px] font-mono text-emerald-600 dark:text-emerald-400 font-semibold flex items-center justify-between">
                          <span>Final Stage</span>
                          <span>✓ Fulfillment</span>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </motion.section>

          {/* 4. Kafka / Event-Driven Processing (Rendered if eventProcessing exists) */}
          {project.eventProcessing && (
            <motion.section
              id="event-processing-section"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-20px' }}
              transition={{ duration: 0.4 }}
              className="bg-white dark:bg-slate-900 rounded-xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-2xs space-y-6"
            >
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-5 h-0.5 bg-orange-600 dark:bg-orange-400" />
                  <span className="text-xs font-mono font-semibold uppercase tracking-wider text-orange-600 dark:text-orange-400">
                    Event-Driven Architecture
                  </span>
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white tracking-tight">
                  {project.eventProcessing.title}
                </h2>
                {project.eventProcessing.subtitle && (
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-1">
                    {project.eventProcessing.subtitle}
                  </p>
                )}
              </div>

              <div className="p-5 rounded-xl bg-orange-50/50 dark:bg-orange-950/20 border border-orange-200/80 dark:border-orange-900/50 space-y-4">
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-orange-100 dark:bg-orange-900/60 text-orange-600 dark:text-orange-400 shrink-0">
                    <Activity className="w-5 h-5" />
                  </div>
                  <div className="space-y-2">
                    <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed font-medium">
                      The application uses <strong className="text-slate-900 dark:text-white font-semibold">Apache Kafka</strong> to support event-driven processing related to the online auction workflow.
                    </p>
                    <blockquote className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 italic border-l-2 border-orange-400 dark:border-orange-500 pl-3">
                      “Kafka is used to support asynchronous/event-driven communication between application components involved in auction and bidding-related processing.”
                    </blockquote>
                  </div>
                </div>

                {/* Visual Event Pipeline */}
                {project.eventProcessing.flow && (
                  <div className="pt-3 border-t border-orange-200/60 dark:border-orange-900/60">
                    <span className="block text-[11px] font-mono font-semibold uppercase tracking-wider text-slate-600 dark:text-slate-400 mb-3">
                      Event Flow Representation:
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-5 gap-2 items-center">
                      {project.eventProcessing.flow.map((flowItem, fIdx) => (
                        <React.Fragment key={fIdx}>
                          <div className="p-3 rounded-lg bg-white dark:bg-slate-900 border border-orange-200 dark:border-orange-800/80 text-center shadow-2xs">
                            <span className="text-xs font-bold text-slate-900 dark:text-white block font-mono">
                              {flowItem}
                            </span>
                          </div>
                          {fIdx < (project.eventProcessing?.flow?.length || 5) - 1 && (
                            <div className="hidden sm:flex justify-center text-orange-500">
                              <ArrowRight className="w-4 h-4" />
                            </div>
                          )}
                        </React.Fragment>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </motion.section>
          )}

          {/* 5. Web API Integration (Rendered if apiIntegration exists) */}
          {project.apiIntegration && (
            <motion.section
              id="api-integration-section"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-20px' }}
              transition={{ duration: 0.4 }}
              className="bg-white dark:bg-slate-900 rounded-xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-2xs space-y-6"
            >
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-5 h-0.5 bg-indigo-600 dark:bg-indigo-400" />
                  <span className="text-xs font-mono font-semibold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">
                    System Interoperability
                  </span>
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white tracking-tight">
                  {project.apiIntegration.title}
                </h2>
              </div>

              <div className="p-5 rounded-xl bg-indigo-50/50 dark:bg-indigo-950/20 border border-indigo-200/80 dark:border-indigo-900/50 space-y-3">
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-indigo-100 dark:bg-indigo-900/60 text-indigo-600 dark:text-indigo-400 shrink-0">
                    <Radio className="w-5 h-5" />
                  </div>
                  <div className="space-y-2">
                    <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed font-medium">
                      The application communicates with external/internal services through Web APIs to support required business functionality.
                    </p>
                    <blockquote className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 italic border-l-2 border-indigo-400 dark:border-indigo-500 pl-3">
                      “{project.apiIntegration.description}”
                    </blockquote>
                  </div>
                </div>
              </div>
            </motion.section>
          )}

          {/* 6. My Role & System Distinction */}
          <motion.section
            id="my-role-section"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-20px' }}
            transition={{ duration: 0.4 }}
            className="bg-white dark:bg-slate-900 rounded-xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-2xs space-y-6"
          >
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="w-5 h-0.5 bg-blue-600 dark:bg-blue-400" />
                <span className="text-xs font-mono font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400">
                  Role Breakdown
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white tracking-tight">
                My Role & Responsibility Scope
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-1">
                Clear distinction between overall application platform and individual technical engineering contributions.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Overall System Column */}
              <div className="p-5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/80 space-y-3">
                <div className="flex items-center gap-2 text-slate-900 dark:text-white font-bold text-sm">
                  <Building2 className="w-4 h-4 text-slate-600 dark:text-slate-400" />
                  <span>Platform Scope (Overall Application)</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  {project.myRoleDistinction?.systemOverview}
                </p>
              </div>

              {/* My Role Column */}
              <div className="p-5 rounded-xl bg-blue-50/60 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-800/80 space-y-3">
                <div className="flex items-center gap-2 text-blue-900 dark:text-blue-200 font-bold text-sm">
                  <Briefcase className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                  <span>My Role: {project.myRoleTitle}</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                  {project.myRoleDistinction?.myFocus}
                </p>
              </div>
            </div>
          </motion.section>

          {/* 7. My Contribution */}
          <motion.section
            id="my-contribution-section"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-20px' }}
            transition={{ duration: 0.4 }}
            className="bg-white dark:bg-slate-900 rounded-xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-2xs space-y-6"
          >
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="w-5 h-0.5 bg-blue-600 dark:bg-blue-400" />
                <span className="text-xs font-mono font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400">
                  Engineering Scope
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white tracking-tight">
                My Contribution
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-1">
                Specific technical modules, backend logic, data persistence, and workflows implemented and supported.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
              {project.myContributions?.map((contrib, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/70 flex items-start gap-3 hover:border-slate-300 dark:hover:border-slate-600 transition-colors"
                >
                  <div className="p-1.5 rounded-md bg-blue-100 dark:bg-blue-900/60 text-blue-600 dark:text-blue-400 shrink-0 mt-0.5">
                    <FileCheck2 className="w-4 h-4" />
                  </div>
                  <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                    {contrib}
                  </p>
                </div>
              ))}
            </div>
          </motion.section>

          {/* 8. Technology Stack */}
          <motion.section
            id="technology-stack-section"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-20px' }}
            transition={{ duration: 0.4 }}
            className="bg-white dark:bg-slate-900 rounded-xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-2xs space-y-6"
          >
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="w-5 h-0.5 bg-blue-600 dark:bg-blue-400" />
                <span className="text-xs font-mono font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400">
                  Tech Stack
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white tracking-tight">
                Technology Stack
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-1">
                Technologies and tools utilized in this production system.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {project.technologies.map((tech, idx) => {
                const details = getTechDetails(tech);
                return (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/80 flex flex-col justify-between hover:border-slate-300 dark:hover:border-slate-600 transition-colors"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-2">
                          <div className="p-2 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                            {details.icon}
                          </div>
                          <span className="text-sm font-bold text-slate-900 dark:text-white">
                            {tech}
                          </span>
                        </div>
                      </div>
                      <span className="inline-block text-[11px] font-mono font-semibold text-blue-600 dark:text-blue-400 mb-1">
                        {details.category}
                      </span>
                      <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                        {details.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.section>

          {/* 9. Technical Challenges */}
          <motion.section
            id="challenges-section"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-20px' }}
            transition={{ duration: 0.4 }}
            className="bg-white dark:bg-slate-900 rounded-xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-2xs space-y-6"
          >
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="w-5 h-0.5 bg-blue-600 dark:bg-blue-400" />
                <span className="text-xs font-mono font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400">
                  Engineering Insights
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white tracking-tight">
                Technical Challenges
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-1">
                Engineering considerations and workflow complexities navigated during development.
              </p>
            </div>

            <div className="space-y-3">
              {project.challenges?.map((challenge, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/70 flex items-start gap-3"
                >
                  <div className="p-1.5 rounded-md bg-amber-100 dark:bg-amber-950/70 text-amber-700 dark:text-amber-400 shrink-0 mt-0.5">
                    <AlertCircle className="w-4 h-4" />
                  </div>
                  <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed font-medium">
                    {challenge}
                  </p>
                </div>
              ))}
            </div>
          </motion.section>

          {/* 10. Project Highlights */}
          <motion.section
            id="highlights-section"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-20px' }}
            transition={{ duration: 0.4 }}
            className="bg-white dark:bg-slate-900 rounded-xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-2xs space-y-6"
          >
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="w-5 h-0.5 bg-blue-600 dark:bg-blue-400" />
                <span className="text-xs font-mono font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400">
                  Key Attributes
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white tracking-tight">
                Project Highlights
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {project.highlights?.map((highlight, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-xl bg-slate-50 dark:bg-slate-800/70 border border-slate-200/80 dark:border-slate-700/80 flex flex-col justify-between hover:border-slate-300 dark:hover:border-slate-600 transition-colors"
                >
                  <div>
                    <div className="w-8 h-8 rounded-lg bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 flex items-center justify-center mb-3">
                      {getHighlightIcon(highlight.iconName, idx)}
                    </div>
                    <h3 className="text-sm font-bold text-slate-900 dark:text-white mb-1.5">
                      {highlight.title}
                    </h3>
                    <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                      {highlight.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.section>

          {/* 11. Confidentiality Notice */}
          <motion.section
            id="confidentiality-notice-section"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-20px' }}
            transition={{ duration: 0.4 }}
            className="bg-amber-50/70 dark:bg-amber-950/30 rounded-2xl p-6 sm:p-8 border border-amber-200/80 dark:border-amber-900/60 relative overflow-hidden"
          >
            <div className="flex items-start gap-4">
              <div className="p-2.5 rounded-xl bg-amber-100 dark:bg-amber-900/60 text-amber-700 dark:text-amber-300 shrink-0">
                <Lock className="w-5 h-5" />
              </div>
              <div className="space-y-2">
                <h3 className="text-sm sm:text-base font-bold text-amber-900 dark:text-amber-200">
                  Confidentiality Notice
                </h3>
                <p className="text-xs sm:text-sm text-amber-800/90 dark:text-amber-300/90 leading-relaxed">
                  {project.confidentialityNotice}
                </p>
              </div>
            </div>
          </motion.section>

          {/* Bottom Action Footer */}
          <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-slate-200 dark:border-slate-800">
            <button
              onClick={onBack}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold text-slate-700 dark:text-slate-200 bg-white dark:bg-slate-900 hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800 transition-all shadow-2xs cursor-pointer w-full sm:w-auto justify-center"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Portfolio Projects</span>
            </button>
          </div>

        </div>

      </div>
    </div>
  );
};
