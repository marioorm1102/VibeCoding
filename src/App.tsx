/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'motion/react';
import { 
  Zap, 
  Code2, 
  Sparkles, 
  Cpu, 
  Layers, 
  ChevronRight,
  Terminal,
  Wind,
  Search,
  Wrench,
  ArrowLeftRight,
  MessageSquare,
  ArrowLeft,
  Box,
  Image as ImageIcon
} from 'lucide-react';
import screenshotDefinicion from './assets/Screenshot_20260413_110446_Google.jpg';
import screenshotEvolucion from './assets/Screenshot_20260413_110657_Chrome.jpg';

// --- Components ---

const Navbar = ({ onOpenInspiracion }: { onOpenInspiracion: () => void }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/90 backdrop-blur-md border-b border-black/5">
      <div className="max-w-7xl mx-auto px-6 py-4 md:py-8 flex justify-between items-center">
        {/* Brand/Logo - Removed as requested */}
        <div className="flex items-center gap-2">
          {/* Empty div to maintain layout if needed, or just remove */}
        </div>

        {/* Desktop Menu (Centered) */}
        <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 gap-8 text-xs font-mono uppercase tracking-widest text-black">
          <a href="#definicion" className="hover:text-vibe-purple transition-colors">Definición</a>
          <a href="#herramientas" className="hover:text-vibe-purple transition-colors">Herramientas</a>
          <a href="#paradigma" className="hover:text-vibe-purple transition-colors">Paradigma</a>
          <a href="#conclusion" className="hover:text-vibe-purple transition-colors">Conclusión</a>
        </div>

        {/* Right Side: Inspiracion (Desktop) */}
        <div className="hidden md:flex">
          <button 
            onClick={onOpenInspiracion}
            className="text-xs font-mono uppercase tracking-widest text-vibe-purple hover:text-black transition-colors font-bold"
          >
            Inspiración
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 text-black"
          aria-label="Menu"
        >
          <div className="w-6 h-0.5 bg-black mb-1.5" />
          <div className="w-6 h-0.5 bg-black mb-1.5" />
          <div className="w-6 h-0.5 bg-black" />
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden absolute top-full left-0 w-full bg-white border-b border-black/5 px-6 py-8 flex flex-col gap-6 text-sm font-mono uppercase tracking-widest text-black"
          >
            <a href="#definicion" onClick={() => setIsOpen(false)} className="py-2 border-b border-black/5">Definición</a>
            <a href="#herramientas" onClick={() => setIsOpen(false)} className="py-2 border-b border-black/5">Herramientas</a>
            <a href="#paradigma" onClick={() => setIsOpen(false)} className="py-2 border-b border-black/5">Paradigma</a>
            <a href="#conclusion" onClick={() => setIsOpen(false)} className="py-2 border-b border-black/5">Conclusión</a>
            <button 
              onClick={() => {
                setIsOpen(false);
                onOpenInspiracion();
              }} 
              className="py-2 border-b border-black/5 text-left text-vibe-purple font-bold"
            >
              Inspiración
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 100]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <section 
      style={{ height: '361.333px', marginTop: '42px', marginBottom: '-62px' }}
      className="relative flex flex-col justify-center items-center overflow-hidden px-6 bg-white"
    >
      <motion.div 
        style={{ y: y1, opacity }}
        className="absolute inset-0 z-0 pointer-events-none"
      >
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-vibe-purple/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-vibe-neon/10 blur-[120px] rounded-full" />
      </motion.div>

      <div className="z-10 text-center">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-display font-bold tracking-tight text-black"
        >
          Vibe <br />
          Coding
        </motion.h1>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4"
      >
      </motion.div>
    </section>
  );
};

const DefinicionSection = () => {
  return (
    <section id="definicion" className="py-20 md:py-32 px-6 max-w-7xl mx-auto border-t border-black/5">
      <div className="mb-12 md:mb-20">
        <p className="font-mono text-vibe-purple text-[10px] md:text-xs uppercase tracking-[0.3em] mb-4">¿Qué es el vibe coding?</p>
        <h2 className="text-3xl md:text-6xl font-bold uppercase tracking-tighter text-black">Definición y Origen</h2>
      </div>
      
      <div className="max-w-4xl space-y-8 text-lg md:text-xl font-normal text-black leading-relaxed">
        <p>
          El vibe coding es una nueva herramienta de programación que ha surgido gracias al avance de la IA. Ahora, al programar utilizando esta herramienta, el humano o programador es realmente el director que da instrucciones acerca de cómo quiere que evolucione su proyecto. Estas instrucciones son interpretadas por un agente de IA que las analiza y las implementa en el código del proyecto; es decir, realiza la tarea del programador.
        </p>
        <p>
          Esto cambia drásticamente la idea de programar al dividir al programador en dos partes: la creativa e instructora (que es la que mantiene el ser humano) y la lógica y técnica (que pasa a manos del agente de inteligencia artificial). 
        </p>

        <p>
          Todo esto comenzó cuando OpenAI y GitHub se unieron allá por 2021, dando una oportunidad a la empresa de IA para acceder a todo el código que necesitaba para entender la programación. Así, con la llegada de ChatGPT, se hizo posible la programación asistida, ya que un agente podía ayudarte a entender código o a programar.
        </p>
        <p>
          Finalmente, surgió el "vibe coding" con modelos como Cursor, donde la IA no solo te ayudaba con el código, sino que tenía acceso completo a todas las entrañas de tu app y control total sobre todo.
        </p>
        <p>
          El origen de este término se remonta a febrero de 2025, momento en el que Andrej Karpathy, una personalidad muy conocida en el mundo de la IA, afirmó en un post en la red social X que, con los nuevos agentes como Claude 3.5 Sonnet o las nuevas herramientas de IA en la programación, ya no se estaba programando realmente, sino que simplemente se estaban moviendo y diciendo cosas y, de una manera casi mágica, todo funcionaba.
        </p>
      </div>
    </section>
  );
};

const FirebaseLogo = ({ className = "w-8 h-8" }: { className?: string }) => (
  <svg viewBox="0 0 32 32" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M5.92 24.16L14.48 3.2C14.64 2.8 15.04 2.56 15.44 2.56C15.84 2.56 16.24 2.8 16.4 3.2L18.88 7.84L5.92 24.16Z" fill="url(#firebase-grad-1)"/>
    <path d="M26.08 24.16L16.4 5.68C16.24 5.36 15.84 5.12 15.44 5.12C15.04 5.12 14.64 5.36 14.48 5.68L5.92 24.16H26.08Z" fill="url(#firebase-grad-2)"/>
    <path d="M16.4 29.44C16.08 29.76 15.6 29.84 15.2 29.68L5.92 24.16L16.4 5.68V29.44Z" fill="url(#firebase-grad-3)"/>
    <defs>
      <linearGradient id="firebase-grad-1" x1="11.16" y1="3.2" x2="11.16" y2="24.16" gradientUnits="userSpaceOnUse">
        <stop stopColor="#FFD600"/>
        <stop offset="1" stopColor="#FFCA28"/>
      </linearGradient>
      <linearGradient id="firebase-grad-2" x1="16" y1="5.12" x2="16" y2="24.16" gradientUnits="userSpaceOnUse">
        <stop stopColor="#FFA000"/>
        <stop offset="1" stopColor="#FF8F00"/>
      </linearGradient>
      <linearGradient id="firebase-grad-3" x1="11.16" y1="5.68" x2="11.16" y2="29.68" gradientUnits="userSpaceOnUse">
        <stop stopColor="#F57C00"/>
        <stop offset="1" stopColor="#E65100"/>
      </linearGradient>
    </defs>
  </svg>
);

const GeminiLogo = ({ className = "w-8 h-8" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2C12 2 13 9 22 12C13 15 12 22 12 22C12 22 11 15 2 12C11 9 12 2 12 2Z" fill="url(#gemini-grad)" />
    <defs>
      <linearGradient id="gemini-grad" x1="2" y1="2" x2="22" y2="22" gradientUnits="userSpaceOnUse">
        <stop stopColor="#4285F4"/>
        <stop offset="0.5" stopColor="#9B72CB"/>
        <stop offset="1" stopColor="#D96570"/>
      </linearGradient>
    </defs>
  </svg>
);

const AIStudioLogo = ({ className = "w-8 h-8" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2C12 2 13 9 22 12C13 15 12 22 12 22C12 22 11 15 2 12C11 9 12 2 12 2Z" fill="black" />
  </svg>
);

const VoidLogo = ({ className = "w-8 h-8" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Cara superior */}
    <path d="M12 2L20.66 7V17L12 22L3.34 17V7L12 2Z" fill="none" />
    <path d="M12 2L20.66 7L12 12L3.34 7L12 2Z" fill="#333333" />
    {/* Cara izquierda */}
    <path d="M3.34 7L12 12V22L3.34 17V7Z" fill="#111111" />
    {/* Cara derecha */}
    <path d="M12 12L20.66 7V17L12 22V12Z" fill="#222222" />
  </svg>
);

const AntigravityLogo = ({ className = "w-8 h-8" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 3L3 8L12 13L21 8L12 3Z" fill="url(#anti-grad-1)" />
    <path d="M3 12L12 17L21 12" stroke="url(#anti-grad-2)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M3 16L12 21L21 16" stroke="url(#anti-grad-3)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <defs>
      <linearGradient id="anti-grad-1" x1="3" y1="3" x2="21" y2="13" gradientUnits="userSpaceOnUse">
        <stop stopColor="#6366F1"/>
        <stop offset="1" stopColor="#A855F7"/>
      </linearGradient>
      <linearGradient id="anti-grad-2" x1="3" y1="12" x2="21" y2="17" gradientUnits="userSpaceOnUse">
        <stop stopColor="#6366F1"/>
        <stop offset="1" stopColor="#A855F7"/>
      </linearGradient>
      <linearGradient id="anti-grad-3" x1="3" y1="16" x2="21" y2="21" gradientUnits="userSpaceOnUse">
        <stop stopColor="#6366F1"/>
        <stop offset="1" stopColor="#A855F7"/>
      </linearGradient>
    </defs>
  </svg>
);

const HerramientasSection = () => {
  const [selectedTool, setSelectedTool] = useState<string | null>(null);

  const tools = [
    {
      id: 'gemini',
      title: 'Gemini Code Assist',
      description: 'Las dos aplicaciones esenciales que ha desplegado Google con ayuda de su IA Gemini.',
      icon: <GeminiLogo className="w-5 h-5 md:w-6 md:h-6" />,
      content: (
        <div className="space-y-12">
          <div className="flex flex-col md:flex-row items-center gap-8 mb-12">
            <div className="w-24 h-24 md:w-32 md:h-32 rounded-3xl bg-vibe-purple/10 flex items-center justify-center p-6 text-vibe-purple">
              <GeminiLogo className="w-full h-full" />
            </div>
            <div className="text-center md:text-left">
              <h2 className="text-3xl md:text-5xl font-bold text-black uppercase tracking-tighter">Gemini Code Assist</h2>
              <p className="text-vibe-purple font-mono text-sm uppercase tracking-widest mt-2">La IA de Google al servicio del código</p>
            </div>
          </div>

          <div>
            <div className="flex items-center gap-4 mb-6">
              <FirebaseLogo />
              <h3 className="text-2xl md:text-4xl font-bold text-black uppercase tracking-tight">Firebase Studio</h3>
            </div>
            <div className="space-y-6 text-lg md:text-xl text-gray-800 leading-relaxed">
              <p>
                Personalmente conozco muy bien este entorno, ya que he trabajado con él durante varios meses. Inicialmente se llamaba Project IDX, pero pasó a llamarse Firebase Studio debido al entorno en el que estaba situado.
              </p>
              <p>
                Se trataba de una especie de aplicación web que funcionaba dentro de Firebase Cloud (un entorno encargado de albergar distintos servicios de Google en la nube, como el hosting de cuentas) en la que disponías de un entorno completo de programación (muy similar a VS Code) con una vista previa que mostraba cómo funcionaba tu proyecto.
              </p>
              <p>
                Hasta ese punto era un simple gestor de código, pero lo innovador residía en su chat, donde podías hablar con un modelo de Gemini para pedirle que implementara las funciones que desearas en tu proyecto. Básicamente, contabas con Gemini como programador, lo cual fue increíble para mí, ya que me permitió desarrollar aplicaciones que llevaba tiempo imaginando a pesar de tener pocos conocimientos de programación.
              </p>
              <p>
                Así fue como Google estableció las bases de su propio Vibe Coding, permitiendo programar en multitud de lenguajes a miles de usuarios que se iniciaban en el mundo de la informática.
              </p>
              <p>
                Los usuarios estábamos bastante satisfechos con este método ya que, a pesar de sus pequeños fallos, era totalmente gratuito. De todos modos, Firebase Studio solo fue un proyecto experimental de Google; en sus últimos días convivió con Google Antigravity y Google AI Studio, de los cuales hablaremos a continuación.
              </p>
            </div>
          </div>

          <div className="pt-12 border-t border-black/5">
            <div className="flex items-center gap-4 mb-6">
              <AIStudioLogo />
              <h3 className="text-2xl md:text-4xl font-bold text-black uppercase tracking-tight">Google AI Studio</h3>
            </div>
            <div className="space-y-6 text-lg md:text-xl text-gray-800 leading-relaxed">
              <p>
                Esta aplicación web surgió casi al mismo tiempo que Firebase Studio bajo el nombre de MakerSuite, el cual cambió con el lanzamiento de Gemini. Además, esta no es su única similitud con Firebase Studio, ya que eran básicamente lo mismo, aunque Google AI Studio fue concebida como una herramienta de prototipado rápido para probar modelos de IA.
              </p>
              <p>
                Exacto, modelos: a diferencia de Firebase Studio, aquí siempre se han podido utilizar modelos distintos para probar cuál se ajusta mejor a tus necesidades.
              </p>
              <p>
                Mientras que Firebase Studio estaba más centrado en la conectividad con los servicios de Google, este proyecto se enfoca más en integrar la IA dentro de los proyectos de los usuarios. Por ello, es común encontrar aplicaciones creadas con AI Studio que son, básicamente, versiones de Gemini personalizadas para tareas específicas.
              </p>
              <p>
                Si Google AI Studio sigue vigente hoy en día es por su facilidad de uso al ejecutarse en la nube y por su gran conectividad con todo lo que Google ofrece, ya sean modelos de IA, datos de Maps o transcripción de audio, entre otros ejemplos.
              </p>
            </div>
          </div>

          <div className="pt-12 border-t border-black/5">
            <div className="flex items-center gap-4 mb-6">
              <AntigravityLogo />
              <h3 className="text-2xl md:text-4xl font-bold text-black uppercase tracking-tight">Antigravity</h3>
            </div>
            <div className="space-y-6 text-lg md:text-xl text-gray-800 leading-relaxed">
              <p>
                Google Antigravity es uno de los servicios de Vibe Coding más reconocidos actualmente, y esto se debe a su gran potencial. A diferencia de los proyectos mencionados anteriormente, Antigravity no reside en la nube, sino que requiere instalación. Esto se debe a su naturaleza como editor de código.
              </p>
              <p>
                Su interfaz es, literalmente, un VS Code que aúna todo lo mencionado previamente de los otros modelos y mucho más. Antigravity ofrece una gran variedad de agentes de IA, incluyendo GPT o Claude, ajenos a Google.
              </p>
              <p>
                A pesar de ofrecer opciones de pago, al igual que AI Studio, cuenta con una cuota gratuita más que suficiente para proyectos sencillos con sus modelos. Una de las opciones más punteras e innovadoras que ofrece Antigravity es la de los agentes paralelos, mediante la cual puedes tener a más de un agente procesando una o más peticiones a la vez, ofreciendo una velocidad y exactitud imposibles de conseguir con otros modelos.
              </p>
              <p>
                Además, Antigravity se encarga de revisar y buscar sus propios errores, ejecutando los comandos necesarios para garantizar tu comodidad en todo momento.
              </p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'void',
      title: 'Void',
      description: 'Un editor de código de código abierto diseñado para ser una alternativa a Cursor',
      icon: <VoidLogo className="w-5 h-5 md:w-6 md:h-6" />,
      content: (
        <div className="space-y-12">
          <div className="flex flex-col md:flex-row items-center gap-8 mb-12">
            <div className="w-24 h-24 md:w-32 md:h-32 rounded-3xl bg-black/5 flex items-center justify-center p-6">
              <VoidLogo className="w-full h-full" />
            </div>
            <div className="text-center md:text-left">
              <h2 className="text-3xl md:text-5xl font-bold text-black uppercase tracking-tighter">Void</h2>
              <p className="text-gray-500 font-mono text-sm uppercase tracking-widest mt-2">El editor open-source para vibe coding</p>
            </div>
          </div>
          <div className="space-y-8">
            <p className="text-lg md:text-xl text-gray-800 leading-relaxed">
              Void es un editor completo de código abierto presentado como un fork de VS Code, al igual que Antigravity o Cursor. De hecho, se posiciona como una poderosa alternativa a este último.
            </p>
            <p className="text-lg md:text-xl text-gray-800 leading-relaxed">
              Al ser de código abierto, todo su código fuente se encuentra en GitHub, donde sus numerosos colaboradores pueden aportar sus conocimientos y mejoras. Así es como Void pretende democratizar el vibe coding y hacerlo más libre y transparente.
            </p>
            <p className="text-lg md:text-xl text-gray-800 leading-relaxed">
              Presenta todas las funciones que tiene Cursor, como el autocompletado de líneas mediante un agente fantasma ultrarrápido, la posibilidad de realizar consultas sobre elementos concretos a un agente y un chat que destaca por permitir conectar cualquier modelo a través de APIs, ofreciendo así la libertad y utilidad que caracteriza a un IDE como Void.
            </p>
            <p className="text-lg md:text-xl text-gray-800 leading-relaxed">
              Lamentablemente, su desarrollo se encuentra actualmente en pausa mientras sus creadores exploran nuevas opciones, pero planean salir de esta fase para presentarse como la joya oculta del vibe coding.
            </p>
            <p className="text-lg md:text-xl text-gray-800 leading-relaxed">
              Es genial ver cómo la comunidad del software libre sigue interviniendo en temas de actualidad que van a revolucionar la programación, como es el caso del vibe coding.
            </p>
            <p className="text-lg md:text-xl text-gray-800 leading-relaxed">
              Por suerte, al tener su código fuente disponible, en caso de ser abandonado podría ser retomado por cualquier otro grupo de interesados en el proyecto.
            </p>
          </div>
        </div>
      )
    }
  ];

  return (
    <section id="herramientas" className="py-20 md:py-32 px-6 bg-black/[0.02] relative">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12 md:mb-20">
          <p className="font-mono text-vibe-purple text-[10px] md:text-xs uppercase tracking-[0.3em] mb-4">Tecnología de Vanguardia</p>
          <h2 className="text-3xl md:text-6xl font-bold uppercase tracking-tighter text-black">Herramientas</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {tools.map((tool) => (
            <button
              key={tool.id}
              onClick={() => setSelectedTool(tool.id)}
              className="glass-card p-6 md:p-8 border border-black/5 bg-white text-left transition-all hover:border-vibe-purple/30 group"
            >
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-vibe-purple/10 flex items-center justify-center text-vibe-purple mb-6 group-hover:bg-vibe-purple group-hover:text-white transition-colors">
                {tool.icon}
              </div>
              <h3 className="text-lg md:text-xl font-bold mb-4 uppercase tracking-tight text-black">{tool.title}</h3>
              <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                {tool.description}
              </p>
            </button>
          ))}
        </div>

        <div className="mt-20 pt-12 border-t border-black/5">
          <button 
            onClick={() => setSelectedTool('conclusion-herramientas')}
            className="w-full glass-card p-8 md:p-12 border border-vibe-purple/20 bg-white text-center transition-all hover:border-vibe-purple/50 group"
          >
            <p className="font-mono text-vibe-purple text-xs uppercase tracking-widest mb-4">Reflexión Final</p>
            <h3 className="text-2xl md:text-4xl font-bold text-black uppercase tracking-tighter mb-4">¿Por qué estas herramientas?</h3>
            <p className="text-gray-500 text-sm md:text-base uppercase tracking-widest">Haz clic para leer mi elección personal</p>
          </button>
        </div>
      </div>

      <AnimatePresence>
        {selectedTool === 'conclusion-herramientas' && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[60] bg-white overflow-y-auto"
          >
            <div className="max-w-4xl mx-auto px-6 py-20 md:py-32">
              <button
                onClick={() => setSelectedTool(null)}
                className="mb-12 flex items-center gap-2 text-vibe-purple font-mono text-xs uppercase tracking-widest hover:gap-4 transition-all"
              >
                <ArrowLeft className="w-4 h-4" /> Volver a herramientas
              </button>
              
              <div className="space-y-8">
                <div className="flex flex-col md:flex-row items-center gap-8 mb-12">
                  <div className="w-24 h-24 md:w-32 md:h-32 rounded-3xl bg-vibe-purple/10 flex items-center justify-center p-6 text-vibe-purple">
                    <MessageSquare className="w-full h-full" />
                  </div>
                  <div className="text-center md:text-left">
                    <h2 className="text-3xl md:text-5xl font-bold text-black uppercase tracking-tighter">Mi Elección</h2>
                    <p className="text-vibe-purple font-mono text-sm uppercase tracking-widest mt-2">Justificación técnica y personal</p>
                  </div>
                </div>
                
                <div className="space-y-6 text-lg md:text-xl text-gray-800 leading-relaxed">
                  <p>
                    Al observar las opciones actuales, es evidente que existen herramientas asombrosas como Cursor, Windsurf o Claude Code. Sin embargo, he decidido decantarme por Google debido a su sencillez de uso y a la generosidad de sus cuotas gratuitas. Al mismo tiempo, he incluido a Void para demostrar que existen alternativas éticas y transparentes en este ecosistema.
                  </p>
                  <p>
                    A pesar de todo lo que he investigado sobre Void, aún no he podido probarlo personalmente debido a unos pequeños problemas técnicos con mi portátil. Por esta razón, opté por crear esta web utilizando Google AI Studio; al ser una herramienta basada en la nube, se ajustaba perfectamente a mis necesidades para un proyecto de esta envergadura, sin requerir el pago por modelos de última generación.
                  </p>
                  <p>
                    Sinceramente, la herramienta que más ha captado mi atención —y mi favorita a pesar de no haberla testado todavía— es Void. Por lo que he podido ver, es básicamente un clon funcional de IDEs tan potentes como Cursor, pero con la ventaja de ser totalmente gratuito (siempre que utilices tus propias APIs, muchas de las cuales son gratis) y, sobre todo, libre.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {selectedTool && selectedTool !== 'conclusion-herramientas' && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[60] bg-white overflow-y-auto"
          >
            <div className="max-w-4xl mx-auto px-6 py-20 md:py-32">
              <button
                onClick={() => setSelectedTool(null)}
                className="mb-12 flex items-center gap-2 text-vibe-purple font-mono text-xs uppercase tracking-widest hover:gap-4 transition-all"
              >
                <ArrowLeft className="w-4 h-4" /> Volver a herramientas
              </button>
              
              {tools.find(t => t.id === selectedTool)?.content}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

const ParadigmaSection = () => {
  const [mode, setMode] = useState<'tradicional' | 'asistida'>('asistida');

  return (
    <section id="paradigma" className="py-20 md:py-32 px-6 relative overflow-hidden bg-white border-t border-black/5">
      <div className="max-w-4xl mx-auto relative z-10 text-center">
        <p className="font-mono text-vibe-purple text-[10px] md:text-xs uppercase tracking-[0.3em] mb-4">Evolución del Desarrollo</p>
        <h2 className="text-3xl md:text-6xl font-bold uppercase mb-8 md:mb-12 tracking-tighter text-black">
          Cambio de Paradigma
        </h2>

        <div className="flex flex-col sm:flex-row justify-center gap-3 md:gap-4 mb-12 md:mb-16">
          <button 
            onClick={() => setMode('tradicional')}
            className={`px-6 md:px-8 py-3 md:py-4 rounded-full font-mono text-[10px] md:text-xs uppercase tracking-widest transition-all ${mode === 'tradicional' ? 'bg-black text-white' : 'border border-black/10 text-black hover:border-black'}`}
          >
            <Terminal className="w-3 h-3 md:w-4 md:h-4 inline-block mr-2" /> Tradicional
          </button>
          <button 
            onClick={() => setMode('asistida')}
            className={`px-6 md:px-8 py-3 md:py-4 rounded-full font-mono text-[10px] md:text-xs uppercase tracking-widest transition-all ${mode === 'asistida' ? 'bg-vibe-purple text-white' : 'border border-black/10 text-black hover:border-vibe-purple'}`}
          >
            <Sparkles className="w-3 h-3 md:w-4 md:h-4 inline-block mr-2" /> Asistida (IA)
          </button>
        </div>

        <div className={`p-6 md:p-12 transition-all duration-500 ${mode === 'tradicional' ? 'brutal-border bg-white text-black' : 'glass-card bg-black/10 text-black font-medium'}`}>
          <div className="space-y-6 md:space-y-8 text-left">
            {mode === 'tradicional' ? (
              <>
                <p className="text-lg md:text-2xl leading-relaxed">
                  En la programación tradicional, el programador debe escribir todo manualmente, por lo que pierde gran parte de su tiempo lidiando con la sintaxis. Es un camino duro: aprender a programar requiere mucho tiempo y esfuerzo solo para entender lo básico de un lenguaje antes de poder crear algo funcional.
                </p>
                <p className="text-lg md:text-2xl leading-relaxed">
                  Los errores suelen ser de lógica o de redacción propia, lo que hace que dar con la solución pueda ser un proceso muy costoso. Sin embargo, aunque el desarrollo sea más lento, el control sobre cada detalle del proyecto es total, algo que se refleja directamente en la calidad final.
                </p>
                <div className="pt-6 border-t border-black/5">
                  <p className="text-[10px] md:text-sm font-mono uppercase tracking-widest text-black/40 mb-2">
                    Habilidades requeridas
                  </p>
                  <p className="text-base md:text-lg font-medium">
                    Memorización masiva de procedimientos, estructuras y sintaxis complejas.
                  </p>
                </div>
              </>
            ) : (
              <>
                <p className="text-lg md:text-2xl leading-relaxed">
                  En la programación asistida, el programador se centra en la intención de lo que busca en su proyecto, describiendo sus objetivos y dejando la sintaxis a la IA; de este modo, el programador se presenta como un arquitecto. Para el aprendizaje, no se requiere ser una persona entendida ni con experiencia previa, ya que principalmente se buscan ideas y creatividad, siempre acompañadas de criterio.
                </p>
                <p className="text-lg md:text-2xl leading-relaxed">
                  Para la resolución de problemas, la IA puede encargarse de la solución, pero lo más seguro es revisarlo uno mismo debido a la posibilidad de error. El desarrollo es extremadamente veloz, sobre todo en tareas repetitivas o de autocompletado, aunque al delegar parte del trabajo a la IA, se pierde el control total sobre el código.
                </p>
                <div className="pt-6 border-t border-black/5">
                  <p className="text-[10px] md:text-sm font-mono uppercase tracking-widest text-vibe-purple/60 mb-2">
                    Habilidades necesarias
                  </p>
                  <p className="text-base md:text-lg font-medium">
                    Creatividad, comunicación clara y un pensamiento crítico para evaluar la validez de los resultados.
                  </p>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

const InspiracionSection = ({ onClose }: { onClose: () => void }) => {
  const [selectedScreenshot, setSelectedScreenshot] = useState<string | null>(null);

  const items = [
    {
      id: 'definicion',
      title: "Definición y origen",
      image: screenshotDefinicion
    },
    {
      id: 'evolucion',
      title: "Evolución del programador",
      image: screenshotEvolucion
    }
  ];

  return (
    <motion.div 
      initial={{ opacity: 0, x: '100%' }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: '100%' }}
      transition={{ type: 'spring', damping: 25, stiffness: 200 }}
      className="fixed inset-0 z-[70] bg-white overflow-y-auto"
    >
      <div className="max-w-7xl mx-auto px-6 py-20 md:py-32">
        <button
          onClick={onClose}
          className="mb-12 flex items-center gap-2 text-vibe-purple font-mono text-xs uppercase tracking-widest hover:gap-4 transition-all"
        >
          <ArrowLeft className="w-4 h-4" /> Volver a la página
        </button>

        <div className="mb-12 md:mb-20">
          <p className="font-mono text-vibe-purple text-[10px] md:text-xs uppercase tracking-[0.3em] mb-4">Proceso Creativo</p>
          <h2 className="text-3xl md:text-6xl font-bold uppercase tracking-tighter text-black">Inspiración</h2>
          <p className="mt-6 text-lg text-gray-600 max-w-2xl">
            Pinchando aquí verás capturas de pantalla de la información que me ha dado la IA sobre los siguientes aspectos.
          </p>
        </div>

        <div className="flex flex-col gap-6 max-w-xl">
          {items.map((item) => (
            <button 
              key={item.id}
              onClick={() => setSelectedScreenshot(item.image)}
              className="glass-card p-8 border border-black/5 bg-white text-left transition-all hover:border-vibe-purple/30 group flex justify-between items-center"
            >
              <span className="text-xl font-bold uppercase tracking-tight text-black">{item.title}</span>
              <ChevronRight className="w-6 h-6 text-vibe-purple group-hover:translate-x-2 transition-transform" />
            </button>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedScreenshot && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[80] bg-black/90 flex items-center justify-center p-4 md:p-10"
            onClick={() => setSelectedScreenshot(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-5xl w-full max-h-full flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedScreenshot(null)}
                className="absolute -top-12 right-0 text-white font-mono text-xs uppercase tracking-widest flex items-center gap-2 hover:text-vibe-neon transition-colors"
              >
                Cerrar <ArrowLeft className="w-4 h-4 rotate-180" />
              </button>
              <img 
                src={selectedScreenshot} 
                alt="Captura de pantalla" 
                className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl border border-white/10"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const ConclusionSection = () => {
  return (
    <section id="conclusion" className="py-20 md:py-32 px-6 max-w-5xl mx-auto">
      <div className="text-center mb-12 md:mb-16">
        <div className="w-12 h-12 md:w-16 md:h-16 bg-vibe-purple/10 rounded-full flex items-center justify-center text-vibe-purple mx-auto mb-6">
          <MessageSquare className="w-6 h-6 md:w-8 md:h-8" />
        </div>
        <h2 className="text-3xl md:text-6xl font-bold uppercase tracking-tighter text-black mb-6">Conclusión Crítica</h2>
        <p className="text-lg md:text-xl text-vibe-purple font-mono uppercase tracking-widest font-bold">Opinión Personal</p>
      </div>

        <div className="glass-card p-6 md:p-12 border-2 border-vibe-purple/20 bg-white/50">
          <p className="text-xl md:text-3xl text-black font-bold leading-tight mb-8 md:mb-12 text-center uppercase tracking-tighter">
            ¿Va la IA a sustituir a los programadores a corto plazo?
          </p>
          <div className="space-y-6 text-lg md:text-xl text-gray-800 leading-relaxed">
            <p>
              A corto plazo, no creo que el trabajo del programador como tal desaparezca debido a la IA, ya que esta aún no es perfecta y requiere de un ser humano que supervise y corrija sus errores. Además, la IA —al menos de momento— necesita de "prompts" o instrucciones precisas que solo una persona puede proporcionar.
            </p>
            <p>
              Por ello, aunque es posible que el rol del programador tradicional —aquel que domina un lenguaje y dedica sus días exclusivamente a escribir código— se desvanezca, es muy probable que este evolucione hacia la figura de un director. Este nuevo perfil poseerá las habilidades necesarias para guiar estratégicamente a su agente de IA hacia la consecución del trabajo deseado.
            </p>
            <p>
              Además, me gustaría añadir que el Vibe Coding ha supuesto una revolución, ya que ahora una sola persona puede desarrollar proyectos que antes era impensable hacer en solitario debido a la cantidad de código que requiere escribir.
            </p>
          </div>
        </div>
    </section>
  );
};

const Footer = () => (
  <footer className="py-20 px-6 border-t border-black/5 bg-white">
    <div className="max-w-7xl mx-auto flex justify-center items-center">
      <p className="text-[10px] font-mono uppercase tracking-[0.3em] text-black font-bold text-center">
        Mario Ormeño Navarro, 2026
      </p>
    </div>
  </footer>
);

export default function App() {
  const [isInspiracionOpen, setIsInspiracionOpen] = useState(false);

  return (
    <div className="min-h-screen selection:bg-vibe-neon selection:text-vibe-dark bg-white">
      <Navbar onOpenInspiracion={() => setIsInspiracionOpen(true)} />
      
      <main>
        <Hero />
        <DefinicionSection />
        <HerramientasSection />
        <ParadigmaSection />
        <ConclusionSection />
      </main>

      <AnimatePresence>
        {isInspiracionOpen && (
          <InspiracionSection onClose={() => setIsInspiracionOpen(false)} />
        )}
      </AnimatePresence>

      <Footer />
      
      <style>{`
        .stroke-text-dark {
          -webkit-text-stroke: 1px rgba(0,0,0,0.3);
        }
        html {
          scroll-behavior: smooth;
        }
      `}</style>
    </div>
  );
}
