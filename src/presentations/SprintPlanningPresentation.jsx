import React from 'react';
import { SlideContainer } from '../components/SlideContainer';
import { motion } from 'framer-motion';
import { 
  Calendar, CheckCircle, Clock, Pause, Play, 
  MessageSquare, Database, Search, Users, FileText,
  Zap, ExternalLink, ArrowRight, Package, BarChart3,
  Headphones, DollarSign, History, Layers, Image
} from 'lucide-react';

const LumiIcon = ({ className = "w-6 h-6" }) => (
  <img 
    src={`${import.meta.env.BASE_URL}lumi-icon.png`}
    alt="Lumi AI" 
    className={`object-contain ${className}`}
  />
);

// Status Badge Component
const StatusBadge = ({ status, children }) => {
  const styles = {
    'paused': 'bg-gray-100 text-gray-600 border-gray-200',
    'not-started': 'bg-amber-50 text-amber-600 border-amber-200',
    'in-progress': 'bg-blue-50 text-blue-600 border-blue-200',
    'completed': 'bg-green-50 text-green-600 border-green-200',
  };
  
  const icons = {
    'paused': <Pause size={10} />,
    'not-started': <Clock size={10} />,
    'in-progress': <Play size={10} />,
    'completed': <CheckCircle size={10} />,
  };

  return (
    <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-medium border ${styles[status]}`}>
      {icons[status]}
      {children}
    </span>
  );
};

// Task Item Component
const TaskItem = ({ title, status, children }) => (
  <div className="flex items-start gap-3 p-3 bg-white rounded-xl border border-gray-100 hover:border-gray-200 transition-colors">
    <div className="mt-0.5">
      <StatusBadge status={status}>{status === 'paused' ? 'Paused' : status === 'not-started' ? 'Not Started' : status === 'in-progress' ? 'In Progress' : 'Completed'}</StatusBadge>
    </div>
    <div className="flex-1">
      <p className="text-sm font-medium text-tn-blue">{title}</p>
      {children && <p className="text-xs text-gray-500 mt-1">{children}</p>}
    </div>
  </div>
);

export const sprintPlanningPresentation = {
  id: "sprint-planning-dic-2025",
  slides: [
    // Slide 1: Title
    <SlideContainer key="title">
      <div className="h-full flex flex-col items-center justify-center text-center">
        <motion.div 
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <div className="w-24 h-24 bg-white rounded-2xl shadow-lg flex items-center justify-center border border-gray-100">
            <LumiIcon className="w-12 h-12" />
          </div>
        </motion.div>
        
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <Calendar size={20} className="text-tn-blue" />
            <span className="text-sm font-medium text-tn-blue bg-blue-50 px-3 py-1 rounded-full">
              Dic 1 - Dic 15, 2025
            </span>
          </div>
          
          <h1 className="text-6xl font-bold text-tn-blue mb-4 tracking-tight">
            Sprint Planning
          </h1>
          
          <p className="text-xl text-tn-text font-light mb-8">
            Lumi Actions + Lumi Assistant
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="flex gap-4"
        >
          <div className="px-4 py-2 rounded-full bg-white border border-green-200 text-sm text-green-700 flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-green-500" />
            Actions: Bulk Actions
          </div>
          <div className="px-4 py-2 rounded-full bg-white border border-blue-200 text-sm text-blue-700 flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-blue-500" />
            Assistant: V4
          </div>
        </motion.div>
      </div>
    </SlideContainer>,

// Slide 2: Deuda Técnica + Issues P0
    <SlideContainer key="pending">
      <div className="h-full flex flex-col">
        {/* Header compacto */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-orange-500 text-white rounded-xl flex items-center justify-center shadow-lg shadow-red-200">
              <Clock size={24} />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-tn-blue">Pendientes + Issues P0</h2>
              <p className="text-tn-text font-light">Deuda técnica y bugs críticos</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="text-right">
              <p className="text-[10px] text-gray-400 uppercase tracking-wider">Issues abiertos</p>
              <p className="text-2xl font-black text-red-500">1</p>
            </div>
            <div className="w-px h-10 bg-gray-200" />
            <div className="text-right">
              <p className="text-[10px] text-gray-400 uppercase tracking-wider">Deuda técnica</p>
              <p className="text-2xl font-black text-gray-400">3</p>
            </div>
          </div>
        </div>

        <div className="flex-1 grid grid-cols-12 gap-5">
          {/* Columna izquierda: Issues P0 (más ancha) */}
          <div className="col-span-7 flex flex-col">
            <div className="flex items-center gap-2 mb-4">
              <span className="px-2.5 py-1 bg-red-500 text-white rounded-lg text-xs font-bold">P0</span>
              <h3 className="text-sm font-bold text-tn-blue">Issues Críticos - Assistant</h3>
            </div>
            
            <div className="flex-1 space-y-4">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white p-5 rounded-2xl border-l-4 border-l-amber-500 border border-gray-100 shadow-sm"
              >
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xs font-mono bg-gray-100 text-gray-600 px-2 py-0.5 rounded">AI-02</span>
                      <span className="text-xs font-bold text-amber-600 bg-amber-50 px-2 py-0.5 rounded-full">Under Review</span>
                    </div>
                    <h4 className="font-bold text-tn-blue">Time out por Session ID</h4>
                  </div>
                  <span className="text-xs text-gray-400">Nov 26</span>
                </div>
                <p className="text-sm text-gray-600 mb-4">
                  Se genera session ID con el primer mensaje y en algún punto se frena el agent mientras generaba, causando time out.
                </p>
                <div className="flex items-center gap-2">
                  <span className="text-[10px] text-gray-500 font-medium">Soluciones:</span>
                  <span className="text-xs bg-blue-50 text-blue-700 px-2.5 py-1 rounded-full border border-blue-100">No permitir mensaje al pausar</span>
                  <span className="text-xs bg-blue-50 text-blue-700 px-2.5 py-1 rounded-full border border-blue-100">Cancelar workflow</span>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="bg-white p-5 rounded-2xl border-l-4 border-l-green-500 border border-gray-100 shadow-sm"
              >
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xs font-mono bg-gray-100 text-gray-600 px-2 py-0.5 rounded">AI-01</span>
                      <span className="text-xs font-bold text-green-600 bg-green-50 px-2 py-0.5 rounded-full flex items-center gap-1">
                        <CheckCircle size={10} /> Solucionado
                      </span>
                    </div>
                    <h4 className="font-bold text-tn-blue">Time out en consultas complejas</h4>
                  </div>
                  <span className="text-xs text-gray-400">Oct 30</span>
                </div>
<p className="text-sm text-gray-600">
                Consultas que exceden 30s explotan. <span className="text-green-600 font-medium">Solucionado, falta deploy post lock.</span>
              </p>
              </motion.div>
            </div>
          </div>

          {/* Columna derecha: Deuda técnica (más angosta) */}
          <div className="col-span-5 flex flex-col">
            <h3 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-4">Deuda Sprint Anterior</h3>
            
            <div className="flex-1 bg-gray-50 rounded-2xl p-4 border border-gray-100 space-y-3">
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-9 h-9 bg-green-100 text-green-600 rounded-lg flex items-center justify-center">
                    <Package size={18} />
                  </div>
                  <div>
                    <h4 className="font-bold text-tn-blue text-sm">Feedback en Actions</h4>
                    <span className="text-[10px] text-gray-500">7 features sin persistencia</span>
                  </div>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {['SEO', 'Products from Images', 'Descripciones', 'Categorías', 'Imágenes', 'Google Shopping'].map((item, i) => (
                    <span key={i} className="text-[10px] bg-gray-100 text-gray-600 px-2 py-0.5 rounded">{item}</span>
                  ))}
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 }}
                className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm flex items-center gap-3"
              >
                <div className="w-9 h-9 bg-green-100 text-green-600 rounded-lg flex items-center justify-center">
                  <Package size={18} />
                </div>
                <div>
                  <h4 className="font-bold text-tn-blue text-sm">SEO CTAs</h4>
                  <p className="text-[11px] text-gray-500">Quitar CTAs de Title & Description</p>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm flex items-center gap-3"
              >
                <div className="w-9 h-9 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center">
                  <MessageSquare size={18} />
                </div>
                <div>
                  <h4 className="font-bold text-tn-blue text-sm">UI Assistant</h4>
                  <p className="text-[11px] text-gray-500">Highlight → Checkbox</p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </SlideContainer>,

    // Slide 3: New Sprint - Assistant V4
    <SlideContainer key="assistant-v4">
      <div className="h-full flex flex-col">
        <div className="flex items-center gap-4 mb-6">
          <div className="w-14 h-14 bg-blue-500 text-white rounded-2xl flex items-center justify-center shadow-lg shadow-blue-200">
            <LumiIcon className="w-7 h-7 brightness-0 invert" />
          </div>
          <div>
            <h2 className="text-4xl font-bold text-tn-blue">New Sprint: Assistant V4</h2>
            <p className="text-lg text-tn-text font-light">Histórico de conversaciones + Contexto expandido</p>
          </div>
        </div>

        <div className="flex-1 grid grid-cols-12 gap-5">
          {/* Columna izquierda: Histórico (MAIN FEATURE) */}
          <a 
            href="https://www.figma.com/design/cB66axoYLWFYNcCaJW88zu/Agente-de-IA?node-id=10294-65451&t=zSro3pXMICp4HnlE-1"
            target="_blank"
            rel="noopener noreferrer"
            className="col-span-5 block group"
          >
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="h-full bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-2xl border-2 border-green-200 hover:border-green-400 hover:shadow-xl transition-all cursor-pointer"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-[10px] font-bold text-green-600 bg-green-100 px-3 py-1 rounded-full uppercase tracking-wider">Main Feature V4</span>
                <ExternalLink size={16} className="text-green-300 group-hover:text-green-500 transition-colors" />
              </div>
              <div className="flex items-center gap-4 mb-4">
                <div className="w-14 h-14 bg-green-500 text-white rounded-xl flex items-center justify-center shadow-lg shadow-green-200 group-hover:scale-105 transition-transform">
                  <History size={28} />
                </div>
                <div>
                  <h4 className="font-bold text-tn-blue text-xl group-hover:text-green-600 transition-colors">Histórico de Conversaciones</h4>
                  <StatusBadge status="not-started">Not Started</StatusBadge>
                </div>
              </div>
              <p className="text-sm text-green-700 mb-5">
                Persistencia de conversaciones anteriores para retomar donde el merchant dejó.
              </p>
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-white/80 rounded-xl p-3 border border-green-100">
                  <p className="text-xs font-bold text-green-600 mb-2">Funcionalidades</p>
                  <ul className="text-xs text-gray-600 space-y-1.5">
                    <li className="flex items-center gap-2">
                      <div className="w-1 h-1 rounded-full bg-green-400" />
                      Sidebar con lista de chats
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1 h-1 rounded-full bg-green-400" />
                      Retomar con contexto completo
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1 h-1 rounded-full bg-green-400" />
                      Ver acciones ejecutadas
                    </li>
                  </ul>
                </div>
                <div className="bg-white/80 rounded-xl p-3 border border-green-100">
                  <p className="text-xs font-bold text-green-600 mb-2">Specs</p>
                  <ul className="text-xs text-gray-600 space-y-1.5">
                    <li className="flex items-center gap-2">
                      <div className="w-1 h-1 rounded-full bg-green-400" />
                      Retención: 30 días
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1 h-1 rounded-full bg-green-400" />
                      Ordenado por fecha
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1 h-1 rounded-full bg-green-400" />
                      Preview del último mensaje
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </a>

          {/* Columna derecha: 4 cards en grid 2x2 */}
          <div className="col-span-7 grid grid-cols-2 gap-4">
            {/* Contexto Dinámico */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-white p-5 rounded-xl border border-blue-100 hover:border-blue-200 transition-colors"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-blue-50 text-blue-500 rounded-lg flex items-center justify-center">
                  <Layers size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-tn-blue text-sm">Contexto Dinámico</h4>
                  <StatusBadge status="in-progress">In Progress</StatusBadge>
                </div>
              </div>
              <div className="flex gap-2 mb-2">
                <div className="flex items-center gap-1 text-[10px] text-green-600">
                  <CheckCircle size={10} />
                  <span>2 listos</span>
                </div>
                <div className="flex items-center gap-1 text-[10px] text-amber-600">
                  <Clock size={10} />
                  <span>4 pendientes</span>
                </div>
              </div>
              <ul className="text-[10px] text-gray-500 space-y-0.5">
                <li>Productos, Clientes, Órdenes, Promos</li>
              </ul>
            </motion.div>

            {/* Contexto Estático v2 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white p-5 rounded-xl border border-purple-100 hover:border-purple-200 transition-colors"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-purple-50 text-purple-500 rounded-lg flex items-center justify-center">
                  <Database size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-tn-blue text-sm">Contexto Estático v2</h4>
                  <StatusBadge status="not-started">Not Started</StatusBadge>
                </div>
              </div>
              <p className="text-xs text-gray-600 mb-2">
                RAG para responder desde cualquier pantalla.
              </p>
              <div className="flex flex-wrap gap-1">
                <span className="text-[10px] bg-purple-50 text-purple-600 px-2 py-0.5 rounded-full">Producto</span>
                <span className="text-[10px] bg-purple-50 text-purple-600 px-2 py-0.5 rounded-full">Cliente</span>
                <span className="text-[10px] bg-purple-50 text-purple-600 px-2 py-0.5 rounded-full">Orden</span>
              </div>
            </motion.div>

            {/* Handoff Support */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-white p-5 rounded-xl border border-pink-100 hover:border-pink-200 transition-colors"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-pink-50 text-pink-500 rounded-lg flex items-center justify-center">
                  <Headphones size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-tn-blue text-sm">Handoff a Support</h4>
                  <StatusBadge status="not-started">Not Started</StatusBadge>
                </div>
              </div>
              <p className="text-xs text-gray-600 mb-2">
                Derivar a soporte humano.
              </p>
              {/* Mini mockup del chip de ayuda */}
              <div className="flex items-center gap-2 bg-gray-50 rounded-md px-2 py-1.5 border border-gray-200">
                <MessageSquare size={12} className="text-tn-blue" />
                <span className="text-[10px] text-gray-600">Preguntar a un Gurú</span>
                <div className="w-3.5 h-3.5 bg-tn-blue rounded-full flex items-center justify-center ml-auto">
                  <span className="text-[7px] text-white font-bold">1</span>
                </div>
              </div>
            </motion.div>

            {/* Trackeo Costos */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-white p-5 rounded-xl border border-gray-200 hover:border-gray-300 transition-colors"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-gray-100 text-gray-500 rounded-lg flex items-center justify-center">
                  <DollarSign size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-tn-blue text-sm">Trackeo de Costos</h4>
                  <StatusBadge status="not-started">Not Started</StatusBadge>
                </div>
              </div>
              <p className="text-xs text-gray-600 mb-2">
                Costo por merchant desglosado.
              </p>
              <div className="flex items-center gap-1.5">
                <span className="text-[10px] bg-green-50 text-green-600 px-2 py-0.5 rounded-full border border-green-100">Actions</span>
                <span className="text-[10px] text-gray-400">+</span>
                <span className="text-[10px] bg-blue-50 text-blue-600 px-2 py-0.5 rounded-full border border-blue-100">Assistant</span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </SlideContainer>,

    // Slide 4: New Sprint - Actions
    <SlideContainer key="actions">
      <div className="h-full flex flex-col">
        <div className="flex items-center gap-4 mb-8">
          <div className="w-12 h-12 bg-green-500 text-white rounded-xl flex items-center justify-center">
            <Package size={24} />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-tn-blue">New Sprint: Actions</h2>
            <p className="text-tn-text font-light">Feature principal del sprint</p>
          </div>
        </div>

        <div className="flex-1 flex items-center justify-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="w-full max-w-2xl bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-3xl border-2 border-green-200"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-green-500 text-white rounded-2xl flex items-center justify-center shadow-lg shadow-green-200">
                <Zap size={32} />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-green-800">AI Bulk Actions</h3>
                <StatusBadge status="not-started">Not Started</StatusBadge>
              </div>
            </div>

            <p className="text-green-700 mb-6">
              Generación masiva de contenido AI para múltiples productos simultáneamente. 
              Primera feature premium de Lumi (gated por Plan B+).
            </p>

            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="bg-white/60 p-4 rounded-xl">
                <p className="text-xs font-bold text-green-600 uppercase mb-2">Capacidades</p>
                <ul className="text-sm text-green-800 space-y-1">
                  <li>• Descripciones</li>
                  <li>• SEO, Tags, Marca</li>
                  <li>• Peso y dimensiones</li>
                  <li>• Categorías, Alt text</li>
                </ul>
              </div>
              <div className="bg-white/60 p-4 rounded-xl">
                <p className="text-xs font-bold text-green-600 uppercase mb-2">Requisitos</p>
                <ul className="text-sm text-green-800 space-y-1">
                  <li>• TIER_2+ (150 créditos)</li>
                  <li>• Máx 25 productos/batch</li>
                  <li>• 1 crédito/producto</li>
                  <li>• Upsell para Plan A</li>
                </ul>
              </div>
            </div>

            <div className="pt-4 border-t border-green-200">
              <span className="text-xs text-green-600">
                PRD + Prototipo completados
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </SlideContainer>,

    // Slide 5: Discovery Abierto
    <SlideContainer key="discovery">
      <div className="h-full flex flex-col">
        <div className="flex items-center gap-4 mb-6">
          <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-indigo-500 text-white rounded-2xl flex items-center justify-center shadow-lg shadow-purple-200">
            <Search size={28} />
          </div>
          <div>
            <h2 className="text-4xl font-bold text-tn-blue">Discovery Abierto</h2>
            <p className="text-lg text-tn-text font-light">Exploraciones activas sin compromiso de desarrollo</p>
          </div>
        </div>

        <div className="flex-1 grid grid-cols-3 gap-6">
          {/* Discovery 1: Estadísticas / Negocio */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-gradient-to-br from-amber-50 to-orange-50 p-6 rounded-2xl border border-amber-200 flex flex-col"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-amber-500 text-white rounded-xl flex items-center justify-center shadow-md">
                <BarChart3 size={24} />
              </div>
              <div>
                <span className="text-[10px] font-bold text-amber-600 bg-amber-100 px-2 py-0.5 rounded-full uppercase">Discovery</span>
                <h4 className="font-bold text-tn-blue">Estadísticas / Negocio</h4>
              </div>
            </div>
            
            <p className="text-sm text-amber-800 mb-4 flex-1">
              Entender qué y cómo avanzar con datos de negocio del merchant en Lumi.
            </p>

            <div className="space-y-2">
              <p className="text-xs font-bold text-amber-700">Preguntas abiertas:</p>
              <ul className="text-xs text-amber-700 space-y-1.5">
                <li className="flex items-start gap-2">
                  <div className="w-1 h-1 rounded-full bg-amber-500 mt-1.5" />
                  ¿Cómo integrar datos de negocio?
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1 h-1 rounded-full bg-amber-500 mt-1.5" />
                  ¿Qué datos le interesan al merchant?
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1 h-1 rounded-full bg-amber-500 mt-1.5" />
                  ¿Necesita data de otras pantallas aparte de Stats?
                </li>
              </ul>
            </div>
          </motion.div>

          {/* Discovery 2: Nuevas capacidades Assistant */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-2xl border border-blue-200 flex flex-col"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-blue-500 text-white rounded-xl flex items-center justify-center shadow-md">
                <Zap size={24} />
              </div>
              <div>
                <span className="text-[10px] font-bold text-blue-600 bg-blue-100 px-2 py-0.5 rounded-full uppercase">Discovery</span>
                <h4 className="font-bold text-tn-blue">Nuevas Capacidades</h4>
              </div>
            </div>
            
            <p className="text-sm text-blue-800 mb-4 flex-1">
              Explorar qué más puede hacer Lumi Assistant para los merchants.
            </p>

            <div className="space-y-2">
              <p className="text-xs font-bold text-blue-700">Áreas de exploración:</p>
              <ul className="text-xs text-blue-700 space-y-1.5">
                <li className="flex items-start gap-2">
                  <div className="w-1 h-1 rounded-full bg-blue-500 mt-1.5" />
                  Acciones en bulk desde el chat
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1 h-1 rounded-full bg-blue-500 mt-1.5" />
                  Acciones fuera del scope de productos
                </li>
              </ul>
            </div>
          </motion.div>

          {/* Discovery 3: Fotoproducto */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-2xl border border-purple-200 flex flex-col"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-purple-500 text-white rounded-xl flex items-center justify-center shadow-md">
                <Image size={24} />
              </div>
              <div>
                <span className="text-[10px] font-bold text-purple-600 bg-purple-100 px-2 py-0.5 rounded-full uppercase">Discovery</span>
                <h4 className="font-bold text-tn-blue">Fotoproducto</h4>
              </div>
            </div>
            
            <p className="text-sm text-purple-800 mb-4 flex-1">
              Generación de fotos profesionales de productos con IA (modelos, fondos, lifestyle).
            </p>

            <div className="space-y-2">
              <p className="text-xs font-bold text-purple-700">Exploración:</p>
              <ul className="text-xs text-purple-700 space-y-1.5">
                <li className="flex items-start gap-2">
                  <div className="w-1 h-1 rounded-full bg-purple-500 mt-1.5" />
                  Integrar directamente al formulario de producto
                </li>
              </ul>
            </div>
          </motion.div>
        </div>

      </div>
    </SlideContainer>,

    // Slide 6: Links y Recursos
    <SlideContainer key="links">
      <div className="h-full flex flex-col items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center max-w-3xl"
        >
          <h2 className="text-4xl font-bold text-tn-blue mb-4">Documentación</h2>
          <p className="text-lg text-tn-text font-light mb-10">
            Links a roadmaps y documentación detallada
          </p>

          <div className="grid grid-cols-2 gap-6 mb-10">
            <a 
              href="https://docs.google.com/document/d/1O9D_-SMyp_LM7e0G-cqKvjqoyfds1UoAgWAXDgZf45w/edit?tab=t.i1jd8s3546wx#heading=h.9grlnmvwpud1"
              target="_blank"
              rel="noopener noreferrer"
              className="p-6 bg-white border-2 border-green-100 rounded-2xl hover:border-green-300 hover:shadow-lg transition-all group"
            >
              <div className="w-12 h-12 bg-green-50 text-green-500 rounded-xl flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform">
                <Package size={24} />
              </div>
              <h4 className="font-bold text-tn-blue mb-2">Actions Roadmap</h4>
              <p className="text-sm text-gray-500 mb-4">
                Spec técnica completa de AI Bulk Actions y features pendientes
              </p>
              <span className="inline-flex items-center gap-2 text-sm font-medium text-green-600">
                Ver roadmap <ExternalLink size={14} />
              </span>
            </a>

            <a 
              href="https://docs.google.com/document/d/1O9D_-SMyp_LM7e0G-cqKvjqoyfds1UoAgWAXDgZf45w/edit?tab=t.jlouonbjmdgc#heading=h.wsvoe9p2m11s"
              target="_blank"
              rel="noopener noreferrer"
              className="p-6 bg-white border-2 border-blue-100 rounded-2xl hover:border-blue-300 hover:shadow-lg transition-all group"
            >
              <div className="w-12 h-12 bg-blue-50 text-blue-500 rounded-xl flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform">
                <MessageSquare size={24} />
              </div>
              <h4 className="font-bold text-tn-blue mb-2">Assistant Roadmap</h4>
              <p className="text-sm text-gray-500 mb-4">
                V4 completo con contexto expandido, histórico y operaciones
              </p>
              <span className="inline-flex items-center gap-2 text-sm font-medium text-blue-600">
                Ver roadmap <ExternalLink size={14} />
              </span>
            </a>
          </div>

          <div className="p-4 bg-gray-50 rounded-xl border border-gray-100 inline-flex items-center gap-3">
            <Calendar size={18} className="text-gray-400" />
            <span className="text-sm text-gray-600">
              Sprint: <strong>Dic 1 - Dic 15, 2025</strong>
            </span>
          </div>
        </motion.div>
      </div>
    </SlideContainer>
  ]
};

// Print slides (same as interactive for this simple presentation)
export const sprintPlanningPrintSlides = sprintPlanningPresentation.slides;

