
import React, { useState } from 'react';
import { Play } from 'lucide-react';

const VIDEO_ID = 'SB34t8J_xKU';

const VideoSection: React.FC = () => {
  const [playing, setPlaying] = useState(false);

  return (
    <section className="px-6 -mt-10 relative z-20 max-w-4xl mx-auto">
      <div className="p-1 bg-white/5 rounded-2xl border border-white/10 backdrop-blur-md shadow-2xl">
        <div className="relative aspect-video rounded-xl overflow-hidden bg-zinc-900">
          {playing ? (
            <iframe
              className="absolute inset-0 w-full h-full"
              src={`https://www.youtube.com/embed/${VIDEO_ID}?autoplay=1&rel=0`}
              title="Como Faturar R$20K com IA"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          ) : (
            <button
              className="group w-full h-full relative flex items-center justify-center"
              onClick={() => setPlaying(true)}
              aria-label="Assistir vídeo"
            >
              <img
                alt="Thumbnail do vídeo"
                className="absolute inset-0 w-full h-full object-cover opacity-70 transition-transform duration-700 group-hover:scale-105"
                src={`https://img.youtube.com/vi/${VIDEO_ID}/maxresdefault.jpg`}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20" />

              <div className="flex shrink-0 items-center justify-center rounded-full w-20 h-20 bg-primary/90 text-background-dark shadow-[0_0_30px_rgba(70,236,19,0.5)] z-20 group-hover:scale-110 transition-transform active:scale-95">
                <Play className="w-10 h-10 fill-current ml-1" />
              </div>

              <div className="absolute inset-x-0 bottom-0 px-6 py-4 bg-gradient-to-t from-black to-transparent z-10">
                <div className="flex items-center justify-between">
                  <p className="text-white text-xs font-black tracking-tight uppercase">
                    COMO FATURAR R$20K COM IA
                  </p>
                </div>
              </div>
            </button>
          )}
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
