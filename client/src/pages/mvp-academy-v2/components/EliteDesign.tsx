import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

export const MeshGradient: React.FC = () => (
  <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
    <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] bg-amber-500/5 blur-[120px] rounded-full animate-pulse" />
    <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] bg-blue-600/5 blur-[120px] rounded-full animate-pulse" style={{ animationDelay: '2s' }} />
    <div className="absolute top-[20%] right-[10%] w-[30%] h-[30%] bg-indigo-600/5 blur-[100px] rounded-full animate-pulse" style={{ animationDelay: '4s' }} />
    <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] mix-blend-overlay" />
  </div>
);

export const GlassCard: React.FC<{ children: React.ReactNode, className?: string }> = ({ children, className }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className={cn(
      "bg-slate-900/40 backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden",
      className
    )}
  >
    {children}
  </motion.div>
);

export const EliteButton: React.FC<{ 
  children: React.ReactNode, 
  className?: string, 
  variant?: 'primary' | 'outline' | 'ghost',
  onClick?: () => void
}> = ({ children, className, variant = 'primary', onClick }) => {
  const variants = {
    primary: "bg-gradient-to-r from-amber-500 to-amber-600 text-black hover:shadow-amber-500/25",
    outline: "border border-white/10 hover:bg-white/5 text-white",
    ghost: "text-slate-400 hover:text-amber-400 transition-colors"
  };

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className={cn(
        "px-8 py-4 rounded-full font-bold transition-all shadow-xl flex items-center justify-center gap-2",
        variants[variant],
        className
      )}
    >
      {children}
    </motion.button>
  );
};

export const SectionTitle: React.FC<{ 
  subtitle?: string, 
  title: string, 
  description?: string,
  centered?: boolean 
}> = ({ subtitle, title, description, centered = true }) => (
  <div className={cn("mb-20", centered ? "text-center" : "text-left")}>
    {subtitle && (
      <motion.span 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="text-amber-500 font-bold uppercase tracking-[0.3em] text-xs mb-4 block"
      >
        {subtitle}
      </motion.span>
    )}
    <motion.h2 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      className="text-4xl md:text-5xl font-medium tracking-tight text-white mb-6"
    >
      {title}
    </motion.h2>
    {description && (
      <motion.p 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed"
      >
        {description}
      </motion.p>
    )}
  </div>
);
