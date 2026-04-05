import { motion } from 'framer-motion';
import { Check, MessageCircle, Github, Calendar, ArrowRight, Sparkles } from 'lucide-react';

const WHATSAPP_GROUP_URL = 'https://chat.whatsapp.com/PLACEHOLDER_GROUP_LINK';
const GITHUB_REPO_URL = 'https://github.com/phthecreator/bunker-ia';

export default function BunkerSucesso() {
  return (
    <div className="bg-[#0D1117] min-h-screen text-[#FDF5E6] flex items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="max-w-lg w-full text-center"
      >
        {/* Success icon */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
          className="w-20 h-20 rounded-full bg-[#00E5FF]/10 border-2 border-[#00E5FF]/30 flex items-center justify-center mx-auto mb-8"
        >
          <Check className="w-10 h-10 text-[#00E5FF]" />
        </motion.div>

        {/* Welcome */}
        <h1 className="text-3xl sm:text-4xl font-bold mb-3">
          Bem-vindo ao{' '}
          <span className="text-[#00E5FF]" style={{ textShadow: '0 0 30px rgba(0,229,255,0.4)' }}>
            Bunker da IA
          </span>
        </h1>
        <p className="text-[#FDF5E6]/50 mb-10">
          Pagamento confirmado. Seu acesso está ativo.
        </p>

        {/* Next steps */}
        <div className="space-y-4 mb-10 text-left">
          <StepCard
            icon={MessageCircle}
            title="Entre no grupo do WhatsApp"
            desc="Grupo exclusivo com Pedro, Murillo e os outros membros."
            href={WHATSAPP_GROUP_URL}
            cta="Entrar no grupo"
            delay={0.3}
          />
          <StepCard
            icon={Github}
            title="Acesse o GitHub privado"
            desc="Repositório com squads, templates e materiais."
            href={GITHUB_REPO_URL}
            cta="Acessar repositório"
            delay={0.4}
          />
          <StepCard
            icon={Calendar}
            title="Próxima call ao vivo"
            desc="Toda semana nos encontramos. Fique ligado no grupo pra data/hora."
            delay={0.5}
          />
        </div>

        {/* Bottom note */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="flex items-center justify-center gap-2 text-[#FDF5E6]/30 text-xs"
        >
          <Sparkles className="w-3 h-3" />
          <span>Qualquer dúvida, manda no grupo. A gente responde rápido.</span>
        </motion.div>
      </motion.div>
    </div>
  );
}

function StepCard({ icon: Icon, title, desc, href, cta, delay = 0 }: {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  desc: string;
  href?: string;
  cta?: string;
  delay?: number;
}) {
  const content = (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay, duration: 0.5 }}
      className="flex items-start gap-4 p-5 rounded-xl bg-[#FDF5E6]/[0.02] border border-[#FDF5E6]/[0.06] backdrop-blur-sm hover:border-[#00E5FF]/20 transition-colors duration-300"
    >
      <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-[#00E5FF]/[0.08] flex items-center justify-center">
        <Icon className="w-5 h-5 text-[#00E5FF]" />
      </div>
      <div className="flex-1">
        <h3 className="text-[#FDF5E6] font-semibold mb-1">{title}</h3>
        <p className="text-[#FDF5E6]/50 text-sm leading-relaxed">{desc}</p>
        {cta && (
          <span className="inline-flex items-center gap-1 text-[#00E5FF] text-sm font-medium mt-2">
            {cta} <ArrowRight className="w-3 h-3" />
          </span>
        )}
      </div>
    </motion.div>
  );

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer">
        {content}
      </a>
    );
  }

  return content;
}
