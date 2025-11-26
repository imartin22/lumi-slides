import React from 'react';
import { TitleSlide } from '../components/TitleSlide';
import { ProcessFlow } from '../components/ProcessFlow';
import { SplitContent } from '../components/SplitContent';
import { ContentSlide } from '../components/ContentSlide';
import { SlideContainer } from '../components/SlideContainer';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FileText, Database, Code, GitMerge, AlertCircle, CheckSquare, Search, 
  Lightbulb, Rocket, Flag, FlaskConical, ExternalLink, AlertTriangle,
  CheckCircle, Clock, ArrowRight, Zap, MessageSquare, Image, Mic,
  Users, TrendingUp, Package, Sparkles, Target, Eye, Command, X, CornerDownLeft
} from 'lucide-react';

const LumiIcon = ({ className = "w-6 h-6" }) => (
  <img 
    src={`${import.meta.env.BASE_URL}lumi-icon.png`}
    alt="Lumi AI" 
    className={`object-contain ${className}`}
  />
);

// Static version of LumiCommandDemo for PDF export - always shows expanded state
const LumiCommandDemoPrint = () => {
  return (
    <div className="bg-white border border-gray-100 p-8 rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.02)] relative overflow-hidden h-full flex flex-col">
      <div className="absolute top-0 right-0 w-32 h-32 bg-fuchsia-50 rounded-bl-full -mr-8 -mt-8"></div>

      <div className="relative z-10 flex-1 flex flex-col">
        <div className="flex items-center gap-4 mb-6">
          <div className="w-12 h-12 bg-fuchsia-500 text-white rounded-xl flex items-center justify-center shadow-lg shadow-fuchsia-200">
            <Command size={24} strokeWidth={2} />
          </div>
          <h3 className="text-2xl font-bold text-tn-blue">Lumi Command</h3>
        </div>
        
        <p className="text-tn-text mb-6 text-sm leading-relaxed opacity-80">
          Interfaz global de comando (Cmd+L) para controlar Tiendanube desde cualquier lugar con lenguaje natural.
        </p>

        {/* Static Expanded Mockup for Print */}
        <div className="bg-white rounded-xl p-4 border border-gray-200 shadow-md mb-4 flex flex-col items-center justify-start min-h-[220px]">
          <div className="w-full p-[2px] rounded-full bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 shadow-sm relative z-20">
            <div className="flex items-center gap-3 p-3 bg-white rounded-full">
              <Search size={18} className="text-gray-400 ml-1" />
              <span className="flex-1 text-base text-gray-700 font-light">Buscar producto remera</span>
              <div className="flex gap-1 mr-1">
                <span className="text-[10px] text-gray-400 border border-gray-200 rounded px-1.5 bg-gray-50 font-medium">CMD</span>
                <span className="text-[10px] text-gray-400 border border-gray-200 rounded px-1.5 bg-gray-50 font-medium">L</span>
              </div>
            </div>
          </div>

          {/* Static expanded dropdown */}
          <div className="w-full mt-4 bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="p-2">
              <p className="text-[10px] uppercase tracking-wider text-gray-400 font-bold px-2 mb-1 mt-1">Resultados</p>
              <div className="space-y-0.5">
                <div className="flex items-center gap-3 px-2 py-1.5 bg-blue-50 rounded-lg">
                  <div className="w-6 h-6 bg-blue-100 text-blue-600 rounded flex items-center justify-center">
                    <Package size={14} />
                  </div>
                  <span className="text-sm text-blue-700 font-medium">Remera Básica Blanca</span>
                  <ArrowRight size={12} className="ml-auto text-blue-400" />
                </div>
                <div className="flex items-center gap-3 px-2 py-1.5 rounded-lg">
                  <div className="w-6 h-6 bg-blue-100 text-blue-600 rounded flex items-center justify-center">
                    <Package size={14} />
                  </div>
                  <span className="text-sm text-gray-700 font-medium">Remera Oversize Negra</span>
                  <ArrowRight size={12} className="ml-auto text-gray-300" />
                </div>
                <div className="flex items-center gap-3 px-2 py-1.5 rounded-lg">
                  <div className="w-6 h-6 bg-blue-100 text-blue-600 rounded flex items-center justify-center">
                    <Package size={14} />
                  </div>
                  <span className="text-sm text-gray-700 font-medium">Remera Estampada Summer</span>
                  <ArrowRight size={12} className="ml-auto text-gray-300" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-2 mt-auto">
          <p className="text-xs font-bold text-fuchsia-600 uppercase tracking-wide mb-2">Estado Actual</p>
          <ul className="text-xs text-gray-600 space-y-1.5">
            <li className="flex items-start gap-2">
              <div className="w-1 h-1 rounded-full bg-fuchsia-400 mt-1.5"></div>
              Planteando la idea & analizando problema real
            </li>
            <li className="flex items-start gap-2">
              <div className="w-1 h-1 rounded-full bg-fuchsia-400 mt-1.5"></div>
              Analizando navegación de Lumi Assistant
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

// Interactive version of LumiCommandDemo for screen display
const LumiCommandDemo = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [inputValue, setInputValue] = React.useState("");
  const [inlineValue, setInlineValue] = React.useState("");
  const [isInlineActive, setIsInlineActive] = React.useState(false);
  const inlineInputRef = React.useRef(null);

  React.useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'l') {
        e.preventDefault();
        setIsOpen(prev => !prev);
      }
      if (e.key === 'Escape') setIsOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  React.useEffect(() => {
    const handleClickOutside = (e) => {
        if (isInlineActive && !e.target.closest('.interactive-demo-area')) {
            setIsInlineActive(false);
        }
    }
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [isInlineActive]);

  return (
    <>
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="bg-white border border-gray-100 p-8 rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.02)] hover:shadow-[0_10px_40px_rgba(0,0,0,0.06)] hover:border-gray-200 transition-all group relative overflow-hidden h-full flex flex-col"
      >
        <div className="absolute top-0 right-0 w-32 h-32 bg-fuchsia-50 rounded-bl-full -mr-8 -mt-8 transition-transform group-hover:scale-110"></div>

        <div className="relative z-10 flex-1 flex flex-col">
          <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-fuchsia-500 text-white rounded-xl flex items-center justify-center shadow-lg shadow-fuchsia-200 group-hover:rotate-3 transition-transform">
              <Command size={24} strokeWidth={2} />
            </div>
            <h3 className="text-2xl font-bold text-tn-blue">Lumi Command</h3>
          </div>
          
          <p className="text-tn-text mb-8 text-sm leading-relaxed opacity-80">
            Interfaz global de comando (Cmd+L) para controlar Tiendanube desde cualquier lugar con lenguaje natural.
          </p>

            {/* Interactive Mockup Trigger */}
            <div 
              className={`bg-gray-50/50 rounded-xl p-4 border border-gray-100 shadow-inner mb-6 flex flex-col items-center justify-start transition-all cursor-text interactive-demo-area ${isInlineActive ? 'min-h-[260px] bg-white shadow-md' : 'min-h-[140px] hover:bg-white hover:shadow-md'}`}
              onClick={() => {
                  inlineInputRef.current?.focus();
                  setIsInlineActive(true);
              }}
            >
               <div className="w-full p-[2px] rounded-full bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 transform transition-transform shadow-sm relative z-20">
                    <div className="flex items-center gap-3 p-3 bg-white rounded-full">
                          <Search size={18} className="text-gray-400 ml-1" />
                          <input
                            ref={inlineInputRef}
                            type="text"
                            className="flex-1 text-base text-gray-700 outline-none placeholder:text-gray-400 font-light bg-transparent"
                            placeholder="Describe una acción..."
                            value={inlineValue}
                            onChange={(e) => setInlineValue(e.target.value)}
                          />
                          <div className="flex gap-1 mr-1">
                            <span className="text-[10px] text-gray-400 border border-gray-200 rounded px-1.5 bg-gray-50 font-medium">CMD</span>
                            <span className="text-[10px] text-gray-400 border border-gray-200 rounded px-1.5 bg-gray-50 font-medium">L</span>
                          </div>
                    </div>
               </div>

               <AnimatePresence>
                {isInlineActive && (
                    <motion.div 
                        initial={{ opacity: 0, y: -10, height: 0 }}
                        animate={{ opacity: 1, y: 0, height: 'auto' }}
                        exit={{ opacity: 0, y: -10, height: 0 }}
                        className="w-full mt-4 bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden"
                    >
                        <div className="p-2">
                            <p className="text-[10px] uppercase tracking-wider text-gray-400 font-bold px-2 mb-1 mt-1">Recent Searches</p>
                            <div className="space-y-0.5 mb-2">
                                <div className="flex items-center gap-3 px-2 py-1 hover:bg-gray-50 rounded-lg cursor-pointer text-sm text-gray-600 transition-colors">
                                    <Clock size={14} className="text-gray-400" />
                                    <span>Black Friday Sales</span>
                                </div>
                                <div className="flex items-center gap-3 px-2 py-1 hover:bg-gray-50 rounded-lg cursor-pointer text-sm text-gray-600 transition-colors">
                                    <Clock size={14} className="text-gray-400" />
                                    <span>Customer: Juan Perez</span>
                                </div>
                            </div>

                            <p className="text-[10px] uppercase tracking-wider text-gray-400 font-bold px-2 mb-1">Resources</p>
                            <div className="space-y-0.5">
                                <div className="flex items-center gap-3 px-2 py-1.5 hover:bg-blue-50 rounded-lg cursor-pointer group transition-colors">
                                    <div className="w-6 h-6 bg-blue-100 text-blue-600 rounded flex items-center justify-center group-hover:scale-110 transition-transform">
                                        <Package size={14} />
                                    </div>
                                    <span className="text-sm text-gray-700 group-hover:text-blue-700 font-medium">Products</span>
                                    <ArrowRight size={12} className="ml-auto text-gray-300 group-hover:text-blue-400" />
                                </div>
                                <div className="flex items-center gap-3 px-2 py-1.5 hover:bg-green-50 rounded-lg cursor-pointer group transition-colors">
                                    <div className="w-6 h-6 bg-green-100 text-green-600 rounded flex items-center justify-center group-hover:scale-110 transition-transform">
                                        <Users size={14} />
                                    </div>
                                    <span className="text-sm text-gray-700 group-hover:text-green-700 font-medium">Customers</span>
                                    <ArrowRight size={12} className="ml-auto text-gray-300 group-hover:text-green-400" />
                                </div>
                                <div className="flex items-center gap-3 px-2 py-1.5 hover:bg-amber-50 rounded-lg cursor-pointer group transition-colors">
                                    <div className="w-6 h-6 bg-amber-100 text-amber-600 rounded flex items-center justify-center group-hover:scale-110 transition-transform">
                                        <FileText size={14} />
                                    </div>
                                    <span className="text-sm text-gray-700 group-hover:text-amber-700 font-medium">Orders</span>
                                    <ArrowRight size={12} className="ml-auto text-gray-300 group-hover:text-amber-400" />
                                </div>
                            </div>
                        </div>
                    </motion.div>
                )}
               </AnimatePresence>
            </div>

          <div className="space-y-2 mt-auto">
            <p className="text-xs font-bold text-fuchsia-600 uppercase tracking-wide mb-2">Estado Actual</p>
            <ul className="text-xs text-gray-600 space-y-1.5">
              <li className="flex items-start gap-2">
                <div className="w-1 h-1 rounded-full bg-fuchsia-400 mt-1.5"></div>
                Planteando la idea & analizando problema real
              </li>
              <li className="flex items-start gap-2">
                <div className="w-1 h-1 rounded-full bg-fuchsia-400 mt-1.5"></div>
                Analizando navegación de Lumi Assistant (Navigation Flow)
              </li>
              <li className="flex items-start gap-2">
                <div className="w-1 h-1 rounded-full bg-fuchsia-400 mt-1.5"></div>
                Etapa incipiente de análisis de casos de uso
              </li>
            </ul>
          </div>
        </div>
      </motion.div>

      {/* Actual Modal Demo */}
      {isOpen && (
        <div 
          className="fixed inset-0 z-[9999] flex items-start justify-center pt-[15vh] bg-black/20 backdrop-blur-sm"
          onClick={() => setIsOpen(false)}
        >
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95 }}
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-2xl bg-white rounded-xl shadow-2xl overflow-hidden border border-gray-200/50 ring-1 ring-black/5"
          >
            <div className="flex items-center gap-4 p-4 border-b border-gray-100">
              <LumiIcon className="w-6 h-6" />
              <input 
                autoFocus
                type="text" 
                className="flex-1 text-lg outline-none text-gray-700 placeholder:text-gray-400 font-light bg-transparent"
                placeholder="Describe una acción..."
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
              />
              <button 
                onClick={() => setIsOpen(false)}
                className="p-1 hover:bg-gray-100 rounded text-gray-400 transition-colors"
              >
                <span className="text-[10px] border border-gray-200 rounded px-1.5 py-0.5">ESC</span>
              </button>
            </div>
            
            <div className="p-2 max-h-[400px] overflow-y-auto bg-gray-50/50">
              {inputValue.length === 0 ? (
                <div className="py-8 text-center text-gray-400 text-sm">
                  <p className="mb-2 font-medium text-gray-500">Sugerencias</p>
                  <div className="flex flex-wrap justify-center gap-2">
                    <span className="px-3 py-1 bg-white border border-gray-200 rounded-full shadow-sm text-xs hover:border-blue-300 cursor-pointer hover:text-blue-600 transition-colors">Crear producto</span>
                    <span className="px-3 py-1 bg-white border border-gray-200 rounded-full shadow-sm text-xs hover:border-blue-300 cursor-pointer hover:text-blue-600 transition-colors">Ver ventas</span>
                    <span className="px-3 py-1 bg-white border border-gray-200 rounded-full shadow-sm text-xs hover:border-blue-300 cursor-pointer hover:text-blue-600 transition-colors">Configurar envío</span>
                  </div>
                </div>
              ) : (
                <div className="space-y-1">
                   <div className="px-3 py-2 hover:bg-blue-50 rounded-lg cursor-pointer group flex items-center gap-3 transition-colors">
                      <div className="w-8 h-8 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center group-hover:bg-blue-200 group-hover:scale-110 transition-all">
                        <Package size={16} />
                      </div>
                      <div>
                        <div className="text-sm font-medium text-gray-700 group-hover:text-blue-700">Crear nuevo producto</div>
                        <div className="text-xs text-gray-400">Ir a Productos {'>'} Nuevo</div>
                      </div>
                      <div className="ml-auto">
                        <ArrowRight size={14} className="text-gray-300 group-hover:text-blue-400" />
                      </div>
                   </div>
                   <div className="px-3 py-2 hover:bg-green-50 rounded-lg cursor-pointer group flex items-center gap-3 transition-colors">
                      <div className="w-8 h-8 bg-green-100 text-green-600 rounded-lg flex items-center justify-center group-hover:bg-green-200 group-hover:scale-110 transition-all">
                        <TrendingUp size={16} />
                      </div>
                      <div>
                        <div className="text-sm font-medium text-gray-700 group-hover:text-green-700">Ver estadísticas de ventas</div>
                        <div className="text-xs text-gray-400">Ir a Estadísticas</div>
                      </div>
                      <div className="ml-auto">
                        <ArrowRight size={14} className="text-gray-300 group-hover:text-green-400" />
                      </div>
                   </div>
                </div>
              )}
            </div>
            
            <div className="px-4 py-2 bg-gray-50 border-t border-gray-100 flex justify-between items-center text-[10px] text-gray-400">
               <div className="flex gap-3">
                 <span className="flex items-center gap-1"><ArrowUpRight size={10}/> Seleccionar</span>
                 <span className="flex items-center gap-1"><CornerDownLeft size={10} className="transform rotate-90"/> Ejecutar</span>
               </div>
               <div className="flex items-center gap-1">
                 <LumiIcon className="w-3 h-3 opacity-50" />
                 <span>Lumi Command</span>
               </div>
            </div>
          </motion.div>
        </div>
      )}
    </>
  );
};

export const workflowPresentation = {
  id: "lumi-status-noviembre-2025",
  slides: [
    // 1. Title
    <SlideContainer key="title">
      <div className="h-full flex flex-col items-center justify-center text-center">
        <motion.div 
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-10"
        >
          <div className="w-32 h-32 bg-white rounded-[2rem] shadow-[0_20px_50px_rgba(0,0,0,0.05)] flex items-center justify-center border border-gray-100 relative overflow-hidden">
             <div className="absolute inset-0 bg-gradient-to-tr from-blue-50/30 via-transparent to-purple-50/30 opacity-50" />
            <LumiIcon className="w-16 h-16" />
          </div>
        </motion.div>
        
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <h1 className="text-7xl font-bold text-tn-blue mb-6 tracking-tight">
            Lumi: Update
          </h1>
          <div className="flex items-center justify-center gap-4 text-xl text-tn-text font-light tracking-wide">
            <span>Roadmap Q4 2025</span>
            <span className="w-1 h-1 rounded-full bg-gray-300" />
            <span>Noviembre 2025</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-16 flex gap-6"
        >
          <div className="px-5 py-2.5 rounded-full bg-white border border-gray-100 shadow-sm text-sm text-tn-text flex items-center gap-2.5">
            <div className="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.4)]" />
            Actions: Rollout
          </div>
          <div className="px-5 py-2.5 rounded-full bg-white border border-gray-100 shadow-sm text-sm text-tn-text flex items-center gap-2.5">
            <div className="w-2 h-2 rounded-full bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.4)]" />
            Assistant: Beta
          </div>
          <div className="px-5 py-2.5 rounded-full bg-white border border-gray-100 shadow-sm text-sm text-tn-text flex items-center gap-2.5">
            <div className="w-2 h-2 rounded-full bg-purple-500 shadow-[0_0_8px_rgba(168,85,247,0.4)]" />
            Studio: Discovery
          </div>
        </motion.div>
      </div>
    </SlideContainer>,

    // 2. El Proceso de Producto
    <SlideContainer key="flow">
      <div className="h-full flex flex-col">
        <div className="mb-8 text-center">
          <h2 className="text-4xl font-bold text-tn-blue mb-3 tracking-tight">El Proceso de Producto</h2>
          <p className="text-lg text-tn-text font-light">Dos vías de entrada → Un proceso de validación</p>
        </div>

        <div className="flex-1 flex items-center justify-center mb-8">
          
          <div className="flex items-center gap-16 z-10 w-full max-w-6xl justify-center relative">
            
            {/* Connector Lines (SVG) */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none z-0" style={{ overflow: 'visible' }}>
              {/* Feedback to Discovery */}
              <path d="M 256 60 C 290 60, 290 170, 320 170" fill="none" stroke="#E5E7EB" strokeWidth="3" strokeDasharray="8 8" />
              {/* Pitch to Discovery */}
              <path d="M 256 280 C 290 280, 290 170, 320 170" fill="none" stroke="#E5E7EB" strokeWidth="3" strokeDasharray="8 8" />
              {/* Discovery to Experiment */}
              <path d="M 544 170 L 608 170" fill="none" stroke="#CBD5E1" strokeWidth="4" />
              {/* Experiment to Learning */}
              <path d="M 832 170 L 896 170" fill="none" stroke="#CBD5E1" strokeWidth="4" />
            </svg>

            {/* Column 1: Inputs */}
            <div className="flex flex-col gap-24">
              {/* Feedback Node */}
              <motion.div 
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                className="w-64 p-6 bg-white rounded-2xl border border-red-100 shadow-sm flex items-center gap-4 relative"
              >
                <div className="w-12 h-12 bg-red-50 text-red-500 rounded-xl flex items-center justify-center shrink-0">
                  <AlertCircle size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-tn-blue">Feedback</h4>
                  <p className="text-xs text-tn-text opacity-70">Issues & Problems</p>
                </div>
                <div className="absolute -right-3 top-1/2 -translate-y-1/2 w-6 h-6 bg-white border border-red-100 rounded-full flex items-center justify-center text-red-300">
                  <ArrowRight size={14} />
                </div>
              </motion.div>

              {/* Pitch Node */}
              <motion.div 
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 }}
                className="w-64 p-6 bg-white rounded-2xl border border-indigo-100 shadow-sm flex items-center gap-4 relative"
              >
                <div className="w-12 h-12 bg-indigo-50 text-indigo-500 rounded-xl flex items-center justify-center shrink-0">
                  <Rocket size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-tn-blue">Pitch</h4>
                  <p className="text-xs text-tn-text opacity-70">Nuevas Apuestas</p>
                </div>
                <div className="absolute -right-3 top-1/2 -translate-y-1/2 w-6 h-6 bg-white border border-indigo-100 rounded-full flex items-center justify-center text-indigo-300">
                  <ArrowRight size={14} />
                </div>
              </motion.div>
            </div>

            {/* Column 2: Discovery */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="w-56 h-56 rounded-full bg-white border-8 border-purple-50 shadow-xl flex flex-col items-center justify-center text-center relative z-20"
            >
              <div className="w-16 h-16 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center mb-2">
                <Search size={32} />
              </div>
              <h3 className="text-xl font-bold text-tn-blue">Discovery</h3>
              <p className="text-sm text-tn-text opacity-60">Exploración</p>
            </motion.div>

            {/* Column 3: Experiment */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
              className="w-56 h-56 rounded-full bg-white border-8 border-amber-50 shadow-xl flex flex-col items-center justify-center text-center relative z-20"
            >
              <div className="w-16 h-16 bg-amber-100 text-amber-600 rounded-full flex items-center justify-center mb-2">
                <FlaskConical size={32} />
              </div>
              <h3 className="text-xl font-bold text-tn-blue">Experiment</h3>
              <p className="text-sm text-tn-text opacity-60">Ejecución Viva</p>
            </motion.div>

            {/* Column 4: Learning */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4 }}
              className="w-56 h-56 rounded-full bg-white border-8 border-green-50 shadow-xl flex flex-col items-center justify-center text-center relative z-20"
            >
              <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-2">
                <Lightbulb size={32} />
              </div>
              <h3 className="text-xl font-bold text-tn-blue">Learning</h3>
              <p className="text-sm text-tn-text opacity-60">Insights & Data</p>
            </motion.div>

          </div>
        </div>

        {/* Explanatory Grid */}
        <div className="grid grid-cols-4 gap-6">
            <div className="bg-gray-50 p-4 rounded-xl border border-gray-100">
                <h4 className="font-bold text-tn-blue mb-2 flex items-center gap-2 text-sm">
                    <GitMerge size={16} /> Entradas
                </h4>
                <ul className="text-xs text-tn-text space-y-2 opacity-80">
                    <li><strong>Pitch:</strong> Apuestas grandes (New Products). Requiere aprobación.</li>
                    <li><strong>Feedback:</strong> Bugs y mejoras iterativas (P0-P3).</li>
                </ul>
            </div>

            <div className="bg-purple-50 p-4 rounded-xl border border-purple-100">
                <h4 className="font-bold text-purple-700 mb-2 flex items-center gap-2 text-sm">
                    <Search size={16} /> Discovery
                </h4>
                <p className="text-xs text-purple-800 mb-1 font-medium">¿Vale la pena?</p>
                <p className="text-[10px] text-purple-700 opacity-80 leading-relaxed">
                  Validación de problema y solución vibe codeada. Salida: Go/No-Go.
                </p>
            </div>

            <div className="bg-amber-50 p-4 rounded-xl border border-amber-100">
                <h4 className="font-bold text-amber-700 mb-2 flex items-center gap-2 text-sm">
                    <FlaskConical size={16} /> Experiment (PRD)
                </h4>
                <p className="text-xs text-amber-800 mb-1 font-medium">Dev Handoff: Cerrado</p>
                <p className="text-[10px] text-amber-700 opacity-80 leading-relaxed">
                  Al entregar a Dev, el documento se <strong>cierra</strong>. Producto pasa a solo lectura. Dev ejecuta sin cambios. <span>Una vez desarrollado, se anuncia y se inicia con la eteapa de recopilación de insights del experiment.</span>
                </p>
            </div>

            <div className="bg-green-50 p-4 rounded-xl border border-green-100">
                <h4 className="font-bold text-green-700 mb-2 flex items-center gap-2 text-sm">
                    <Lightbulb size={16} /> Learning
                </h4>
                <p className="text-xs text-green-800 mb-1 font-medium">Insights & Data</p>
                <p className="text-[10px] text-green-700 opacity-80 leading-relaxed">
                  Análisis de adoption y retention. Si funciona, se gradúa. Si no, se descarta.
                </p>
            </div>
        </div>
      </div>
    </SlideContainer>,

    // 3. Los 3 Pilares (con links)
    <SlideContainer key="pillars">
      <div className="h-full flex flex-col">
        <div className="mb-12 text-center">
          <h2 className="text-4xl font-bold text-tn-blue mb-3">Los 3 Pilares Documentales</h2>
          <p className="text-lg text-tn-text font-light">El sistema operativo se divide en tres áreas de responsabilidad</p>
        </div>
        
        <div className="grid grid-cols-3 gap-8 flex-1 items-center px-4">
          {[
            { 
              title: "1. Tracking", 
              icon: Database, 
              color: "text-orange-500",
              bg: "bg-orange-50",
              desc: "Ingesta de caos, issues, feedback y estado de rollouts.",
              path: "Issues & Problems",
              link: "https://docs.google.com/spreadsheets/d/1TTYOUzjuOPawY74uuSyUie8u_QogeTzAbpRp08YPQjU/edit?gid=262839206#gid=262839206"
            },
            { 
              title: "2. Producto", 
              icon: Lightbulb, 
              color: "text-tn-blue",
              bg: "bg-tn-blue/5",
              desc: "Donde la magia ocurre. Discovery y Experimentos (PRDs vivos).",
              path: "Product Document",
              link: "https://docs.google.com/document/d/1j_K31_8jgwViiQV7Tr8VDR_j9UuJiseurc_G_CcqLeA/edit?tab=t.0#heading=h.8ym8uipo8iki"
            },
            { 
              title: "3. Dev Planning", 
              icon: Code, 
              color: "text-green-500",
              bg: "bg-green-50",
              desc: "Ejecución pura. Roadmaps congelados y sprints.",
              path: "Dev Team",
              link: "https://docs.google.com/document/d/1O9D_-SMyp_LM7e0G-cqKvjqoyfds1UoAgWAXDgZf45w/edit?tab=t.mhpf9wn8jsie"
            }
          ].map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              className="h-full max-h-[380px] p-8 rounded-2xl bg-white border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)] hover:border-gray-200 transition-all flex flex-col items-center text-center group"
            >
              <div className={`w-16 h-16 rounded-2xl ${item.bg} ${item.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                <item.icon size={32} strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-bold text-tn-blue mb-3">{item.title}</h3>
              <p className="text-tn-text text-sm leading-relaxed mb-auto opacity-80">{item.desc}</p>
              <a 
                href={item.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-2.5 bg-gray-50 hover:bg-tn-blue hover:text-white rounded-full text-xs font-medium text-gray-600 mt-8 transition-colors border border-gray-100 hover:border-tn-blue"
              >
                {item.path}
                <ExternalLink size={12} />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </SlideContainer>,

    // 4. Issues & Problems Actuales
    <SlideContainer key="issues">
      <div className="h-full flex flex-col">
        <div className="flex items-center gap-6 mb-10">
          <div className="w-16 h-16 bg-red-50 text-red-500 rounded-2xl flex items-center justify-center border border-red-100">
            <AlertTriangle size={32} strokeWidth={1.5} />
          </div>
          <div>
            <h2 className="text-4xl font-bold text-tn-blue tracking-tight">Issues & Problems Abiertos</h2>
            <p className="text-lg text-tn-text font-light mt-1">Testing Interno + Feedback de Beta Testers</p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-6 flex-1">
          {[
            { 
              id: "AS-003", 
              priority: "P0",
              priorityColor: "bg-red-500",
              title: "Navegación falta contexto", 
              desc: "Lumi alucina cuando intenta navegar. Falta contexto sobre las pantallas del admin.",
              status: "Active",
              type: "Issue",
              source: "Testing Interno"
            },
            { 
              id: "AS-005", 
              priority: "P0",
              priorityColor: "bg-red-500",
              title: "Crash por mensajes seguidos", 
              desc: "Bug: crash cuando se envían mensajes seguidos con session ID + nueva request.",
              status: "Active",
              type: "Issue",
              source: "Testing Interno"
            },
            { 
              id: "AS-004", 
              priority: "P1",
              priorityColor: "bg-orange-500",
              title: "Guardrail demasiado estricto", 
              desc: "El guardrail bloquea acciones válidas. Necesita ajuste de textos y UX.",
              status: "In Progress",
              type: "Problem",
              source: "Testing Interno"
            },
            { 
              id: "AS-006", 
              priority: "P1",
              priorityColor: "bg-orange-500",
              title: "Falta onboarding", 
              desc: "Users no entienden cómo funciona Lumi ni que necesitan estar en la categoría correcta.",
              status: "In Progress",
              type: "Problem",
              source: "Denimstuff + Testing"
            }
          ].map((issue, i) => (
           <motion.div 
              key={i}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1 }}
              className="bg-white border border-gray-100 p-6 rounded-2xl shadow-[0_2px_10px_rgba(0,0,0,0.02)] hover:shadow-[0_10px_30px_rgba(0,0,0,0.05)] hover:border-gray-200 transition-all"
            >
              <div className="flex items-center gap-2 mb-4 flex-wrap">
                <span className={`px-2.5 py-1 ${issue.priorityColor} text-white text-[10px] font-bold rounded-full shadow-sm tracking-wide`}>
                  {issue.priority}
                </span>
                <span className="text-[10px] font-mono text-gray-400 border border-gray-100 px-2 py-0.5 rounded bg-gray-50">{issue.id}</span>
                <span className={`text-[10px] font-medium px-2.5 py-1 rounded-full border ${issue.type === 'Issue' ? 'bg-red-50 text-red-600 border-red-100' : 'bg-amber-50 text-amber-600 border-amber-100'}`}>
                  {issue.type}
                </span>
                <span className="text-[10px] px-2 py-1 rounded-full bg-gray-50 text-gray-500 border border-gray-100 ml-auto">
                  {issue.source}
                </span>
              </div>
              <h4 className="font-bold text-tn-blue text-lg mb-2 leading-tight">{issue.title}</h4>
              <p className="text-sm text-tn-text opacity-80 leading-relaxed">{issue.desc}</p>
           </motion.div>
          ))}
        </div>
        
        <div className="mt-8 flex justify-end">
          <a 
            href="https://docs.google.com/spreadsheets/d/1TTYOUzjuOPawY74uuSyUie8u_QogeTzAbpRp08YPQjU/edit?gid=262839206#gid=262839206"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-xs font-medium text-tn-blue hover:text-tn-lightblue transition-colors bg-white border border-gray-100 px-4 py-2 rounded-full shadow-sm hover:shadow"
          >
            Ver todos los issues en Google Sheet <ExternalLink size={12} />
          </a>
        </div>
      </div>
    </SlideContainer>,

    // 5. Experiments Octubre - Pendiente Cierre
    <SlideContainer key="oct-experiments">
      <div className="h-full flex flex-col">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-5">
            <div className="w-16 h-16 bg-amber-50 text-amber-500 rounded-2xl flex items-center justify-center border border-amber-100">
              <Clock size={32} strokeWidth={1.5} />
            </div>
            <div>
              <h2 className="text-4xl font-bold text-tn-blue tracking-tight">Experiments Octubre</h2>
              <p className="text-lg text-tn-text font-light mt-1">Full Rollout → Esperando <span className="font-semibold text-amber-600">Deploy Lock</span></p>
            </div>
          </div>
          <div className="text-right">
            <p className="text-[10px] uppercase tracking-wider text-gray-400 font-semibold mb-1">Snapshot</p>
            <div className="px-3 py-1 bg-gray-50 rounded-lg border border-gray-100 text-sm font-semibold text-tn-blue">
              1-24 Nov 2025
            </div>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-4 flex-1">
          {[
            { 
              name: "Products from Images",
              desc: "Crear producto desde imágenes",
              product: "Actions",
              metric: "16.5K",
              metricLabel: "usos",
              prevMetric: "10.4K",
              growth: "+58%"
            },
            { 
              name: "SEO Brands & Tags",
              desc: "Optimización de SEO, marcas y tags",
              product: "Actions",
              metric: "161K",
              metricLabel: "usos",
              prevMetric: "167K",
              growth: "-3%"
            },
            { 
              name: "Category Suggest",
              desc: "Sugerencia de categorías",
              product: "Actions",
              metric: "18.7K",
              metricLabel: "usos",
              prevMetric: "13.8K",
              growth: "+35%"
            },
            { 
              name: "Category Descriptions",
              desc: "Descripciones SEO para categorías. Ajuste a Dev: Max 140 chars (detallado) / 70 chars (resumido).",
              product: "Actions",
              metric: "14.5K",
              metricLabel: "usos",
              prevMetric: "0.4K",
              growth: "+3500%"
            },
            { 
              name: "Smart Eraser",
              desc: "Borrado inteligente de objetos",
              product: "Studio",
              metric: "1.2K",
              metricLabel: "usos",
              prevMetric: "N/A",
              growth: "New"
            }
          ].map((exp, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 }}
              className={`p-5 rounded-2xl border transition-all hover:shadow-md ${
                exp.product === 'Studio' 
                  ? 'bg-purple-50/30 border-purple-100 hover:border-purple-200' 
                  : 'bg-amber-50/30 border-amber-100 hover:border-amber-200'
              }`}
            >
              <div className="flex items-center justify-between mb-3">
                <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full tracking-wide ${
                  exp.product === 'Studio' 
                    ? 'text-purple-600 bg-purple-100' 
                    : 'text-amber-600 bg-amber-100'
                }`}>
                  {exp.product.toUpperCase()}
                </span>
                {exp.prevMetric !== "N/A" && (
                  <span className={`text-[10px] font-medium px-2 py-0.5 rounded-full ${
                    exp.growth.startsWith('+') 
                      ? 'text-green-600 bg-green-50' 
                      : 'text-gray-500 bg-gray-50'
                  }`}>
                    {exp.growth} vs Oct
                  </span>
                )}
              </div>
              <h4 className="font-bold text-tn-blue text-base mb-1 leading-tight">{exp.name}</h4>
              <p className="text-xs text-tn-text mb-4 opacity-70">{exp.desc}</p>
              <div className={`flex items-baseline gap-1.5 pt-3 border-t ${
                exp.product === 'Studio' ? 'border-purple-100' : 'border-amber-100'
              }`}>
                <span className={`text-2xl font-black ${
                  exp.product === 'Studio' ? 'text-purple-600' : 'text-amber-600'
                }`}>{exp.metric}</span>
                <span className={`text-xs font-medium ${
                  exp.product === 'Studio' ? 'text-purple-400' : 'text-amber-400'
                }`}>
                  {exp.metricLabel}
                  {exp.prevMetric !== "N/A" && <span className="opacity-60 font-normal ml-1">(vs {exp.prevMetric})</span>}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-6 flex gap-4">
           <div className="flex-1 p-4 bg-blue-50 border border-blue-100 rounded-xl flex items-start gap-3">
              <Lightbulb size={20} className="text-blue-600 flex-shrink-0 mt-0.5" />
              <div>
                  <p className="text-blue-900 text-sm font-bold mb-1">Key Insight: One-Click to Content</p>
                  <p className="text-blue-800 text-xs leading-relaxed">
                      Features de "Unified Agents" con <strong>un solo click</strong> tienen mucha mayor adopción y valor percibido que flujos de múltiples pasos. 
                      El usuario prefiere contenido listo instantáneo.
                  </p>
              </div>
           </div>
           <div className="flex-1 p-4 bg-amber-50 border border-amber-100 rounded-xl flex items-center gap-3">
              <AlertTriangle size={20} className="text-amber-500 flex-shrink-0" />
              <p className="text-amber-900 text-xs font-light leading-relaxed">
                <strong className="font-semibold">Status:</strong> Digitalmente cerrados.<br/>
                Esperando fin del <strong>deploy lock</strong>.
              </p>
           </div>
        </div>
      </div>
    </SlideContainer>,

    // 6. Experiments Noviembre - Assistant
    <SlideContainer key="nov-experiments">
      <div className="h-full flex flex-col">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-5">
            <div className="w-16 h-16 bg-blue-50 text-blue-500 rounded-2xl flex items-center justify-center border border-blue-100">
              <LumiIcon className="w-8 h-8" />
            </div>
            <div>
              <h2 className="text-4xl font-bold text-tn-blue tracking-tight">Experiments Noviembre</h2>
              <p className="text-lg text-tn-text font-light mt-1">Foco total en <span className="font-semibold text-blue-600">Assistant Beta (V3)</span></p>
            </div>
          </div>
          <div className="text-right">
            <p className="text-[10px] uppercase tracking-wider text-gray-400 font-semibold mb-1">Snapshot</p>
            <div className="px-3 py-1 bg-gray-50 rounded-lg border border-gray-100 text-sm font-semibold text-tn-blue">
              1-24 Nov 2025
            </div>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-6 flex-1 min-h-0">
          {/* Columna Izquierda: Assistant + Navigation */}
          <div className="col-span-2 flex flex-col gap-6">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-tn-blue text-white p-6 rounded-3xl relative overflow-hidden shadow-lg flex-1 flex flex-col justify-between"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-blue-400 rounded-full opacity-10 blur-3xl -mr-16 -mt-16"></div>
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-purple-500 rounded-full opacity-10 blur-3xl -ml-16 -mb-16"></div>
              
              <div className="relative z-10">
                <div className="flex justify-between items-start mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center backdrop-blur-sm border border-white/10">
                      <LumiIcon className="w-6 h-6 brightness-0 invert" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold">Lumi Assistant Beta (V1 → V3)</h3>
                      <p className="text-blue-200 font-light">Asistente conversacional AI para gestión de productos</p>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <span className="px-3 py-1 bg-green-500/20 text-green-200 border border-green-500/30 rounded-full text-xs font-medium">V2 En Prod</span>
                    <a 
                      href="https://stratus.feat-lumi-voice-ai-0.nubestaging.com/admin/v2/dashboard"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-1 bg-yellow-500/20 text-yellow-200 border border-yellow-500/30 rounded-full text-xs font-medium hover:bg-yellow-500/30 transition-colors cursor-pointer flex items-center gap-2"
                    >
                      V3 En Feature Branch <ExternalLink size={12} />
                    </a>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-4 mb-4">
                  <div className="bg-white/5 border border-white/10 rounded-xl p-4 backdrop-blur-sm">
                    <p className="text-3xl font-black mb-1">48</p>
                    <p className="text-xs text-blue-200 uppercase tracking-wide font-semibold">Beta Testers</p>
                  </div>
                  <div className="bg-white/5 border border-white/10 rounded-xl p-4 backdrop-blur-sm">
                    <p className="text-3xl font-black mb-1">136</p>
                    <p className="text-xs text-blue-200 uppercase tracking-wide font-semibold">Mensajes/mes</p>
                  </div>
                  <div className="bg-white/5 border border-white/10 rounded-xl p-4 backdrop-blur-sm">
                    <p className="text-3xl font-black mb-1">10</p>
                    <p className="text-xs text-blue-200 uppercase tracking-wide font-semibold">Stores activas</p>
                  </div>
                </div>

                <div className="bg-white/10 border border-white/10 rounded-xl p-3 backdrop-blur-sm mb-6 flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center shrink-0">
                        <Eye size={16} />
                    </div>
                    <div>
                        <p className="text-[10px] text-blue-200 font-bold uppercase tracking-wider mb-0.5">Amplitude Insight (Suggest Funnel)</p>
                        <p className="text-xs text-white leading-tight">Presencia de Lumi en una pantalla sin contexto o sugerencias claras = <strong>Alto Abandono</strong>.</p>
                    </div>
                </div>

                <div className="flex items-center gap-3 pt-4 border-t border-white/10">
                  <a 
                    href="https://www.figma.com/design/cB66axoYLWFYNcCaJW88zu/Agente-de-IA?node-id=8563-46293"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 border border-white/10 text-xs font-medium flex items-center gap-2 text-blue-100 transition-colors"
                  >
                    <Mic size={14}/> Audio V3 <ExternalLink size={12} />
                  </a>
                  <a 
                    href="https://www.figma.com/design/cB66axoYLWFYNcCaJW88zu/Agente-de-IA?node-id=8563-46292"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 border border-white/10 text-xs font-medium flex items-center gap-2 text-blue-100 transition-colors"
                  >
                    <Image size={14}/> Images V3 <ExternalLink size={12} />
                  </a>
                  <a 
                    href="https://docs.google.com/spreadsheets/d/1NSfna8UdhEEq6xwY59106zRvz8AdunBXjRzQ7DMWxVw/edit?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ml-auto px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 border border-white/10 text-xs font-medium flex items-center gap-2 text-white transition-all"
                  >
                    <Users size={14}/> Beta Testers <ExternalLink size={12}/>
                  </a>
                </div>
              </div>
            </motion.div>

            <a 
              href="https://docs.google.com/document/d/1I_856Aavfgiujh5MmvHVzMLcVs78ldhaVNchq_-Eyxg/edit?tab=t.yy52utg3z5y2#heading=h.9jp90ju4a0lh"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white border-2 border-purple-100 p-5 rounded-2xl hover:border-purple-300 hover:shadow-md transition-all group relative overflow-hidden shrink-0"
            >
              <div className="absolute top-0 right-0 bg-purple-50 text-purple-600 text-[10px] font-bold px-2 py-1 rounded-bl-xl border-l border-b border-purple-100 uppercase tracking-wider">
                 High Priority
              </div>
              <div className="flex items-center gap-4 mb-3">
                <div className="w-10 h-10 bg-purple-50 text-purple-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Zap size={20} />
                </div>
              <div>
                <h4 className="font-bold text-tn-blue group-hover:text-purple-600 transition-colors">Navigation Flow</h4>
                <p className="text-sm text-tn-text opacity-70">Solución al abandono por falta de contexto</p>
              </div>
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-2.5 text-sm text-tn-text">
                  <CheckCircle size={16} className="text-green-500 flex-shrink-0" />
                  <span>✅ MDs de rutas listos</span>
                </div>
                <div className="flex items-center gap-2.5 text-sm text-tn-text">
                   <AlertCircle size={16} className="text-amber-500 flex-shrink-0" />
                  <span>⚠️ PMs: revisar cada ruta</span>
                </div>
                <div className="flex items-center gap-2 mt-3 text-xs font-medium text-purple-600 group-hover:translate-x-1 transition-transform">
                  Ver documento de rutas <ArrowRight size={12} />
                </div>
              </div>
            </a>
          </div>

          {/* Columna Derecha: Experiments List */}
          <div className="col-span-1 bg-gray-50 border border-gray-100 p-6 rounded-2xl flex flex-col overflow-hidden h-full">
            <h4 className="font-bold text-tn-blue mb-4 flex items-center gap-2 shrink-0">
              <FlaskConical size={18} className="text-gray-400" />
              Experiments Q4 2025
            </h4>
            <div className="space-y-3 overflow-y-auto pr-2 flex-1">
              {/* Credits & Feedback Loop - Activo */}
              <div className="p-3 bg-white rounded-xl border border-green-100 shadow-sm">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-green-500"></div>
                    <span className="text-sm font-medium text-tn-blue">Credits & Feedback Loop</span>
                  </div>
                  <span className="text-xs bg-green-50 text-green-600 px-2 py-1 rounded-md font-medium">Activo</span>
                </div>
                <div className="text-[10px] text-tn-text space-y-1 pl-5 border-l border-green-100 opacity-80">
                  <p>• 100% rollout feedback en Suggest Category</p>
                  <p>• 30% rollout feedback en Weight & Dimensions</p>
                </div>
              </div>
              {/* Historial Conversaciones - V4 Assistant - Design */}
              <div className="p-3 bg-white rounded-xl border border-amber-100 shadow-sm">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-amber-500"></div>
                    <span className="text-sm font-medium text-tn-blue">Historial Conversaciones</span>
                  </div>
                  <span className="text-xs bg-amber-50 text-amber-600 px-2 py-1 rounded-md font-medium">Design</span>
                </div>
                <div className="text-[10px] text-tn-text space-y-1 pl-5 border-l border-amber-100 opacity-80">
                  <p>• V4 Assistant</p>
                  <p>• Deadline: 2 dic 2025</p>
                </div>
              </div>
              {/* Fotoproducto - Blocked */}
              <div className="p-3 bg-white rounded-xl border border-red-100 shadow-sm">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-red-500"></div>
                    <span className="text-sm font-medium text-tn-blue">Fotoproducto</span>
                  </div>
                  <span className="text-xs bg-red-50 text-red-600 px-2 py-1 rounded-md font-medium">Blocked</span>
                </div>
                <div className="text-[10px] text-tn-text space-y-1 pl-5 border-l border-red-100 opacity-80">
                  <p>• Esperando PRD + prototipo</p>
                  <p>• Target: esta semana</p>
                </div>
              </div>
              {/* Bulk Actions - Blocked */}
              <div className="p-3 bg-white rounded-xl border border-red-100 shadow-sm">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-red-500"></div>
                    <span className="text-sm font-medium text-tn-blue">Bulk Actions</span>
                  </div>
                  <span className="text-xs bg-red-50 text-red-600 px-2 py-1 rounded-md font-medium">Blocked</span>
                </div>
                <div className="text-[10px] text-tn-text space-y-1 pl-5 border-l border-red-100 opacity-80">
                  <p>• Esperando PRD + prototipo</p>
                  <p>• Target: esta semana</p>
                </div>
              </div>
              {/* Product Related - Blocked */}
              <div className="p-3 bg-white rounded-xl border border-red-100 shadow-sm">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-red-500"></div>
                    <span className="text-sm font-medium text-tn-blue">Product Related</span>
                  </div>
                  <span className="text-xs bg-red-50 text-red-600 px-2 py-1 rounded-md font-medium">Blocked</span>
                </div>
                <div className="text-[10px] text-tn-text space-y-1 pl-5 border-l border-red-100 opacity-80">
                  <p>• Esperando PRD + prototipo</p>
                  <p>• Otro designer del equipo</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SlideContainer>,

    // 7. Discovery: Lumi Studio
    <SlideContainer key="discovery-studio">
      <div className="flex gap-10 h-full items-center">
        <div className="w-1/2 h-full">
           <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="relative h-full"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-purple-50 to-white rounded-[2rem] border border-purple-100/50 shadow-sm"></div>
            <div className="absolute -top-10 -left-10 w-64 h-64 bg-purple-200/20 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-pink-200/20 rounded-full blur-3xl"></div>
            
            <div className="relative p-10 h-full flex flex-col">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-16 h-16 bg-purple-500 text-white rounded-2xl flex items-center justify-center shadow-lg shadow-purple-200">
                  <LumiIcon className="w-8 h-8 brightness-0 invert" />
                </div>
                <div>
                  <span className="text-xs font-bold text-purple-600 bg-purple-50 px-3 py-1 rounded-full tracking-wider uppercase mb-1 inline-block">Discovery</span>
                  <h3 className="text-4xl font-bold text-tn-blue leading-tight">Lumi Studio</h3>
                </div>
              </div>

              <p className="text-tn-text text-lg leading-relaxed mb-8">
                Photo Content Creation con IA: generación de fotos de modelos y productos profesionales.
              </p>

              <div className="mt-auto bg-white/60 backdrop-blur-sm p-6 rounded-2xl border border-purple-100">
                <p className="text-xs font-bold text-purple-600 mb-4 uppercase tracking-wide">Beta Testers Activos</p>
                <div className="space-y-3">
                  <div className="flex items-center justify-between bg-white p-3 rounded-xl border border-purple-50 shadow-sm">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                        <CheckCircle size={16} />
                      </div>
                      <div>
                        <p className="text-sm font-bold text-tn-blue">Denimstoff</p>
                        <p className="text-[10px] text-gray-400">ID: 6828529 · AR · Moda</p>
                      </div>
                    </div>
                    <span className="text-[10px] font-medium bg-green-50 text-green-600 px-2 py-1 rounded-full">Testeando</span>
                  </div>

                  <div className="flex items-center justify-between bg-white p-3 rounded-xl border border-purple-50 shadow-sm">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                        <CheckCircle size={16} />
                      </div>
                      <div>
                        <p className="text-sm font-bold text-tn-blue">Irarte</p>
                        <p className="text-[10px] text-gray-400">ID: 440495 · AR · Enterprise</p>
                      </div>
                    </div>
                    <span className="text-xs font-medium bg-green-50 text-green-600 px-2 py-1 rounded-full">Testeando</span>
                  </div>

                  <div className="flex items-center justify-between bg-white p-3 rounded-xl border border-purple-50 shadow-sm opacity-80">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-amber-100 flex items-center justify-center text-amber-600">
                        <Clock size={16} />
                      </div>
                      <div>
                        <p className="text-sm font-bold text-tn-blue">Almacén de Toto</p>
                        <p className="text-[10px] text-gray-400">ID: 1021574 · Pendiente reunión</p>
                      </div>
                    </div>
                    <span className="text-[10px] font-medium bg-amber-50 text-amber-600 px-2 py-1 rounded-full">Probando</span>
                  </div>
                </div>
              </div>
            </div>
           </motion.div>
        </div>
        
        <div className="w-1/2">
          <h2 className="text-4xl font-bold text-tn-blue mb-8 tracking-tight">Estado del Discovery</h2>
          
          <div className="space-y-6">
            <div className="group">
              <h4 className="font-bold text-tn-blue mb-3 flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-gray-100 text-gray-600 flex items-center justify-center text-xs">1</span>
                Hipótesis en validación
              </h4>
              <div className="bg-gray-50 p-5 rounded-2xl border border-gray-100 text-tn-text text-sm leading-relaxed group-hover:bg-white group-hover:shadow-md transition-all">
                Los merchants gastan mucho tiempo y dinero en fotografía profesional. 
                ¿Puede la IA generativa resolver esto con calidad suficiente?
              </div>
            </div>

            <div className="group">
              <h4 className="font-bold text-tn-blue mb-3 flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center text-xs">2</span>
                Señales positivas
              </h4>
              <div className="bg-green-50/50 p-5 rounded-2xl border border-green-100 group-hover:bg-green-50 group-hover:shadow-md transition-all">
                <ul className="text-sm text-green-800 space-y-2">
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-green-500 mt-1.5"></div>
                    Merchants muestran interés real y willingness to pay
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-green-500 mt-1.5"></div>
                    Calidad de outputs mejorando drásticamente
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-green-500 mt-1.5"></div>
                    Casos de uso claros identificados (moda, accesorios)
                  </li>
                </ul>
              </div>
            </div>

            <div className="group">
              <h4 className="font-bold text-tn-blue mb-3 flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-amber-100 text-amber-600 flex items-center justify-center text-xs">3</span>
                Próximos pasos
              </h4>
              <div className="bg-amber-50/50 p-5 rounded-2xl border border-amber-100 group-hover:bg-amber-50 group-hover:shadow-md transition-all">
                <ul className="text-sm text-amber-800 space-y-2">
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-1.5"></div>
                    Foco: <strong>Upmarket de Moda</strong>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-1.5"></div>
                    Crear PRD de <strong>Fotoproduct</strong> (nuevo Action)
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-1.5"></div>
                    Desarrollar prototipo y validar willingness to pay
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SlideContainer>,

    // 8. Pitches en Proceso
    <SlideContainer key="pitches">
      <div className="h-full flex flex-col">
        <div className="flex items-center gap-6 mb-10">
          <div className="w-16 h-16 bg-indigo-50 text-indigo-500 rounded-2xl flex items-center justify-center border border-indigo-100">
            <Rocket size={32} strokeWidth={1.5} />
          </div>
          <div>
            <h2 className="text-4xl font-bold text-tn-blue tracking-tight">Pitches en Proceso</h2>
            <p className="text-lg text-tn-text font-light mt-1">Próximas apuestas grandes (aún no definidas)</p>
          </div>
        </div>
        
        <div className="grid grid-cols-2 gap-8 flex-1">
          {/* Plan Mode */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            className="bg-white border border-gray-100 p-8 rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.02)] hover:shadow-[0_10px_40px_rgba(0,0,0,0.06)] hover:border-gray-200 transition-all group relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-50 rounded-bl-full -mr-8 -mt-8 transition-transform group-hover:scale-110"></div>
            
            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-indigo-500 text-white rounded-xl flex items-center justify-center shadow-lg shadow-indigo-200 group-hover:rotate-3 transition-transform">
                  <Target size={24} strokeWidth={2} />
                </div>
                <h3 className="text-2xl font-bold text-tn-blue">Plan Mode</h3>
              </div>
              
              <p className="text-tn-text mb-8 text-sm leading-relaxed opacity-80">
                Lumi deja de ser reactivo y puede planificar y ejecutar múltiples tareas en secuencia para lograr un objetivo complejo.
              </p>

              {/* Mockup Plan Mode - Styled */}
              <div className="bg-gray-50 rounded-xl p-5 border border-gray-100 shadow-inner mb-8 group-hover:bg-white group-hover:shadow-md transition-all">
                 <div className="flex items-center gap-3 mb-4 border-b border-gray-200 pb-3">
                    <div className="w-8 h-8 rounded-lg bg-indigo-100 flex items-center justify-center text-indigo-600">
                        <Target size={16} />
                    </div>
                    <div>
                        <div className="text-xs font-bold text-tn-blue">Plan: Preparar Black Friday</div>
                        <div className="text-[10px] text-gray-500">3 de 5 tareas completadas</div>
                    </div>
                 </div>
                 <div className="space-y-2">
                    <div className="flex items-center gap-2">
                        <div className="w-4 h-4 rounded-full bg-green-100 border border-green-200 flex items-center justify-center">
                            <CheckCircle size={10} className="text-green-600" />
                        </div>
                        <span className="text-[10px] text-gray-400 line-through">Analizar stock bajo</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="w-4 h-4 rounded-full bg-green-100 border border-green-200 flex items-center justify-center">
                            <CheckCircle size={10} className="text-green-600" />
                        </div>
                        <span className="text-[10px] text-gray-400 line-through">Crear categoría "Ofertas"</span>
                    </div>
                     <div className="flex items-center gap-2 bg-white p-2 rounded-lg border border-indigo-100 shadow-sm">
                        <div className="w-4 h-4 rounded-full border-2 border-indigo-500 border-t-transparent animate-spin"></div>
                        <span className="text-xs font-medium text-indigo-700">Generando banners promocionales...</span>
                    </div>
                 </div>
                 <div className="mt-4 flex justify-end">
                    <button className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white text-[10px] font-bold px-3 py-1.5 rounded-lg shadow-md shadow-indigo-200 flex items-center gap-1.5">
                        <Zap size={10} fill="currentColor" /> Ejecutar Plan
                    </button>
                 </div>
              </div>

              <div className="space-y-2 mt-auto">
                <p className="text-xs font-bold text-indigo-600 uppercase tracking-wide mb-2">Estado Actual</p>
                <ul className="text-xs text-gray-600 space-y-1.5">
                  <li className="flex items-start gap-2">
                    <div className="w-1 h-1 rounded-full bg-indigo-400 mt-1.5"></div>
                    Analizando casos de uso potenciales (Lightspeed, Catálogo, Orders)
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1 h-1 rounded-full bg-indigo-400 mt-1.5"></div>
                    Evaluando tareas complejas vs acciones simples
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1 h-1 rounded-full bg-indigo-400 mt-1.5"></div>
                    Etapa incipiente de análisis
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Lumi Command */}
          <LumiCommandDemo />
        </div>
        
        <div className="mt-8 flex justify-center">
          <div className="inline-flex items-center gap-3 px-5 py-3 bg-gray-50 border border-gray-100 rounded-full text-sm text-gray-600">
            <AlertCircle size={16} className="text-gray-400" />
            <span>Ambos pitches requieren <strong>benchmark research</strong> y definición de use cases antes de development.</span>
          </div>
        </div>
      </div>
    </SlideContainer>,

    // 9. Insights & Learnings
    <SlideContainer key="insights">
      <div className="h-full flex flex-col">
        <div className="text-center mb-10">
          <h2 className="text-5xl font-black text-tn-blue mb-4">Key Insights</h2>
          <p className="text-xl text-tn-text">Aprendizajes del ciclo actual</p>
        </div>
        
        <div className="grid grid-cols-3 gap-6 flex-1">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-2xl border border-green-200"
            >
            <div className="w-12 h-12 bg-green-500 text-white rounded-xl flex items-center justify-center mb-4">
              <TrendingUp size={24} />
              </div>
            <h3 className="text-xl font-bold text-green-800 mb-3">Actions: One-Click</h3>
            <p className="text-sm text-green-700">
              <strong>Insight:</strong> Generar mucho contenido listo con 1 solo clic tiene 3x más adopción que flujos de múltiples pasos.
              Mutando a "Unified Agents Store".
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-2xl border border-blue-200"
          >
            <div className="w-12 h-12 bg-tn-blue text-white rounded-xl flex items-center justify-center mb-4">
              <MessageSquare size={24} />
            </div>
            <h3 className="text-xl font-bold text-tn-blue mb-3">Assistant: Contexto</h3>
            <p className="text-sm text-tn-text">
              <strong>Insight (Amplitude):</strong> Persistencia sin contexto genera abandono. 
              El usuario necesita saber qué puede hacer. Navigation Flow nace para resolver esto.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-2xl border border-purple-200"
          >
            <div className="w-12 h-12 bg-purple-500 text-white rounded-xl flex items-center justify-center mb-4">
              <LumiIcon className="w-6 h-6 brightness-0 invert" />
            </div>
            <h3 className="text-xl font-bold text-purple-800 mb-3">Studio: Explorando</h3>
            <p className="text-sm text-purple-700">
              Discovery activo con feedback positivo. Expandiendo grupo de testers esta semana. 
              Cross-testing con beta testers de Assistant.
            </p>
          </motion.div>
        </div>

      </div>
    </SlideContainer>,

    // 10. Próximos Pasos
    <SlideContainer key="next-steps">
      <div className="h-full flex flex-col justify-center items-center text-center">
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="max-w-3xl"
        >
          <h2 className="text-5xl font-black text-tn-blue mb-8">Próximos Pasos</h2>
          
          <div className="grid grid-cols-2 gap-6 text-left mb-10">
            <div className="bg-white border border-gray-200 p-6 rounded-xl">
              <h4 className="font-bold text-tn-blue mb-3 flex items-center gap-2">
                <span className="w-8 h-8 bg-red-500 text-white rounded-lg flex items-center justify-center text-sm">P0</span>
                Esta semana
              </h4>
              <ul className="space-y-2 text-sm text-tn-text">
                <li>• <strong>Studio:</strong> Prototipo <strong>Fotoproducto</strong></li>
                <li>• <strong>Navigation:</strong> Ordenar nomenclatura MDs</li>
                <li>• <strong>Assistant:</strong> Resolver P0s (crash, navegación) <span className="text-gray-400">[Equipo]</span></li>
              </ul>
            </div>

            <div className="bg-white border border-gray-200 p-6 rounded-xl">
              <h4 className="font-bold text-tn-blue mb-3 flex items-center gap-2">
                <span className="w-8 h-8 bg-orange-500 text-white rounded-lg flex items-center justify-center text-sm">P1</span>
                Esta semana
              </h4>
              <ul className="space-y-2 text-sm text-tn-text">
                <li>• <strong>Navigation:</strong> Ajustar contenido MDs</li>
                <li>• <strong>Navigation:</strong> Testear contexto dinámico (Green Sheep)</li>
                <li>• <strong>Assistant V3:</strong> Definir input limits (audio, texto, imagen)</li>
              </ul>
            </div>
         </div>

          <div className="grid grid-cols-1 gap-6 text-left mb-10">
            <div className="bg-gray-50 border border-gray-200 p-6 rounded-xl">
              <h4 className="font-bold text-tn-blue mb-3 flex items-center gap-2">
                <span className="w-8 h-8 bg-tn-blue text-white rounded-lg flex items-center justify-center text-sm">→</span>
                Post Deploy Lock
              </h4>
              <ul className="space-y-2 text-sm text-tn-text grid grid-cols-3 gap-4">
                <li>• Full Rollout experiments Octubre</li>
                <li>• Assistant V3 a producción beta</li>
                <li>• Avanzar pitches (Plan Mode, Command)</li>
              </ul>
            </div>
         </div>

          <div className="flex justify-center gap-4">
            <a 
              href="https://docs.google.com/document/d/1j_K31_8jgwViiQV7Tr8VDR_j9UuJiseurc_G_CcqLeA/edit?tab=t.0#heading=h.8ym8uipo8iki"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 bg-tn-blue text-white rounded-xl font-medium hover:bg-tn-blue/90 transition-colors"
            >
              Product Document <ExternalLink size={16} />
            </a>
            <a 
              href="https://docs.google.com/spreadsheets/d/1TTYOUzjuOPawY74uuSyUie8u_QogeTzAbpRp08YPQjU/edit?gid=262839206#gid=262839206"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 bg-white border border-gray-200 text-tn-blue rounded-xl font-medium hover:bg-gray-50 transition-colors"
            >
              Issues Tracking <ExternalLink size={16} />
            </a>
          </div>
        </motion.div>
      </div>
    </SlideContainer>
  ]
};

// Print version of Pitches slide with static LumiCommandDemo (expanded with text)
const PitchesSlidePrint = (
  <SlideContainer key="pitches-print" forPrint={true}>
    <div className="h-full flex flex-col">
      <div className="flex items-center gap-6 mb-10">
        <div className="w-16 h-16 bg-indigo-50 text-indigo-500 rounded-2xl flex items-center justify-center border border-indigo-100">
          <Rocket size={32} strokeWidth={1.5} />
        </div>
        <div>
          <h2 className="text-4xl font-bold text-tn-blue tracking-tight">Pitches en Proceso</h2>
          <p className="text-lg text-tn-text font-light mt-1">Próximas apuestas grandes (aún no definidas)</p>
        </div>
      </div>
      
      <div className="grid grid-cols-2 gap-8 flex-1">
        {/* Plan Mode - Static version */}
        <div className="bg-white border border-gray-100 p-8 rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.02)] relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-50 rounded-bl-full -mr-8 -mt-8"></div>
          
          <div className="relative z-10">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-indigo-500 text-white rounded-xl flex items-center justify-center shadow-lg shadow-indigo-200">
                <Target size={24} strokeWidth={2} />
              </div>
              <h3 className="text-2xl font-bold text-tn-blue">Plan Mode</h3>
            </div>
            
            <p className="text-tn-text mb-8 text-sm leading-relaxed opacity-80">
              Lumi deja de ser reactivo y puede planificar y ejecutar múltiples tareas en secuencia para lograr un objetivo complejo.
            </p>

            {/* Static Mockup Plan Mode */}
            <div className="bg-white rounded-xl p-5 border border-gray-200 shadow-md mb-8">
               <div className="flex items-center gap-3 mb-4 border-b border-gray-200 pb-3">
                  <div className="w-8 h-8 rounded-lg bg-indigo-100 flex items-center justify-center text-indigo-600">
                      <Target size={16} />
                  </div>
                  <div>
                      <div className="text-xs font-bold text-tn-blue">Plan: Preparar Black Friday</div>
                      <div className="text-[10px] text-gray-500">3 de 5 tareas completadas</div>
                  </div>
               </div>
               <div className="space-y-2">
                  <div className="flex items-center gap-2">
                      <div className="w-4 h-4 rounded-full bg-green-100 border border-green-200 flex items-center justify-center">
                          <CheckCircle size={10} className="text-green-600" />
                      </div>
                      <span className="text-[10px] text-gray-400 line-through">Analizar stock bajo</span>
                  </div>
                  <div className="flex items-center gap-2">
                      <div className="w-4 h-4 rounded-full bg-green-100 border border-green-200 flex items-center justify-center">
                          <CheckCircle size={10} className="text-green-600" />
                      </div>
                      <span className="text-[10px] text-gray-400 line-through">Crear categoría "Ofertas"</span>
                  </div>
                   <div className="flex items-center gap-2 bg-indigo-50 p-2 rounded-lg border border-indigo-100">
                      <div className="w-4 h-4 rounded-full bg-indigo-500 flex items-center justify-center">
                          <Zap size={8} className="text-white" />
                      </div>
                      <span className="text-xs font-medium text-indigo-700">Generando banners promocionales...</span>
                  </div>
               </div>
               <div className="mt-4 flex justify-end">
                  <div className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white text-[10px] font-bold px-3 py-1.5 rounded-lg shadow-md shadow-indigo-200 flex items-center gap-1.5">
                      <Zap size={10} fill="currentColor" /> Ejecutar Plan
                  </div>
               </div>
            </div>

            <div className="space-y-2 mt-auto">
              <p className="text-xs font-bold text-indigo-600 uppercase tracking-wide mb-2">Estado Actual</p>
              <ul className="text-xs text-gray-600 space-y-1.5">
                <li className="flex items-start gap-2">
                  <div className="w-1 h-1 rounded-full bg-indigo-400 mt-1.5"></div>
                  Analizando casos de uso potenciales
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1 h-1 rounded-full bg-indigo-400 mt-1.5"></div>
                  Etapa incipiente de análisis
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Lumi Command - Static Print version */}
        <LumiCommandDemoPrint />
      </div>
      
      <div className="mt-8 flex justify-center">
        <div className="inline-flex items-center gap-3 px-5 py-3 bg-gray-50 border border-gray-100 rounded-full text-sm text-gray-600">
          <AlertCircle size={16} className="text-gray-400" />
          <span>Ambos pitches requieren <strong>benchmark research</strong> y definición de use cases antes de development.</span>
        </div>
      </div>
    </div>
  </SlideContainer>
);

// Print slides - uses static versions of interactive components
export const workflowPrintSlides = [
  ...workflowPresentation.slides.slice(0, 7),  // Slides 0-6 (same as interactive)
  PitchesSlidePrint,                            // Slide 7 (Pitches with static LumiCommand)
  ...workflowPresentation.slides.slice(8)       // Slides 8-9 (same as interactive)
];
