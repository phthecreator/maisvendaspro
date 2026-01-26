
import React from 'react';
import { Play } from 'lucide-react';

const VideoSection: React.FC = () => {
  return (
    <section className="px-6 -mt-10 relative z-20 max-w-4xl mx-auto">
      <div className="p-1 bg-white/5 rounded-2xl border border-white/10 backdrop-blur-md shadow-2xl">
        <div className="relative flex items-center justify-center bg-zinc-900 aspect-video rounded-xl overflow-hidden group">
          <img 
            alt="Video Background" 
            className="absolute inset-0 w-full h-full object-cover opacity-50 transition-transform duration-700 group-hover:scale-105" 
            src="https://picsum.photos/seed/ai-tech/1200/800"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20"></div>
          
          <button className="flex shrink-0 items-center justify-center rounded-full w-20 h-20 bg-primary/90 text-background-dark shadow-[0_0_30px_rgba(70,236,19,0.5)] z-20 hover:scale-110 transition-transform active:scale-95">
            <Play className="w-10 h-10 fill-current ml-1" />
          </button>
          
          <div className="absolute inset-x-0 bottom-0 px-6 py-4 bg-gradient-to-t from-black to-transparent">
            <div className="flex h-1.5 items-center justify-center mb-3">
              <div className="h-full flex-[0.7] rounded-full bg-primary shadow-[0_0_10px_#46ec13]"></div>
              <div className="h-full flex-[0.3] rounded-full bg-white/20"></div>
            </div>
            <div className="flex items-center justify-between">
              <p className="text-white text-xs font-black tracking-tight uppercase">
                COMO FATURAR R$20K COM IA
              </p>
              <p className="text-white/60 text-[10px] font-bold">04:20</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
