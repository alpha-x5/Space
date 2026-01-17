import { ReactNode } from 'react';
import { motion } from 'framer-motion';
import AnimatedShaderBackground from './animated-shader-background';

interface ScrollExpandMediaProps {
  mediaSrc: string;
  bgImageSrc: string;
  title?: string;
  children?: ReactNode;
  useAnimatedShader?: boolean;
}

const ScrollExpandMedia = ({
  mediaSrc,
  bgImageSrc,
  title,
  children,
  useAnimatedShader = false,
}: ScrollExpandMediaProps) => {
  const videoSize = 300; // Fixed circle size in pixels

  const firstWord = title ? title.split(' ')[0] : '';
  const restOfTitle = title ? title.split(' ').slice(1).join(' ') : '';

  return (
    <div className='relative overflow-x-hidden'>
      {useAnimatedShader && <AnimatedShaderBackground />}
      <section className='relative flex flex-col items-center justify-start min-h-[100dvh]'>
        <div className='relative w-full flex flex-col items-center min-h-[100dvh]'>
          {/* Animated Background */}
          {useAnimatedShader && <AnimatedShaderBackground />}
          
          {/* Static Background */}
          <motion.div 
            className='absolute inset-0 z-0 h-full'
            initial={{ opacity: 1 }}
            animate={{ opacity: useAnimatedShader ? 0 : 1 }}
            transition={{ type: 'tween', duration: 0 }}
          >
            <img
              src={bgImageSrc}
              alt='Background'
              className='w-screen h-screen object-cover object-center'
            />
            <div className='absolute inset-0 bg-gradient-to-b from-purple-900/20 via-black/40 to-teal-900/20' />
          </motion.div>

          <div className='container mx-auto flex flex-col items-center justify-start relative z-10'>
            {/* Hero section with flexbox layout */}
            <div className='flex items-center justify-between w-full h-[100dvh] relative gap-8 px-4'>
              {/* Left text container - Mission (top right aligned) */}
              <div className='flex flex-col items-end justify-start flex-1 pr-4' style={{ height: `${videoSize}px` }}>
                <h2 className='text-4xl md:text-5xl lg:text-6xl font-bold text-right text-transparent bg-gradient-to-r from-teal-300 to-purple-400 bg-clip-text whitespace-nowrap'>
                  {restOfTitle}
                </h2>
              </div>

              {/* Center video container - circle with cover fit */}
              <div
                className='flex-shrink-0 overflow-hidden z-20 rounded-full relative'
                style={{
                  width: `${videoSize}px`,
                  height: `${videoSize}px`,
                  boxShadow: '0px 0px 50px rgba(147, 51, 234, 0.3)',
                }}
              >
                <iframe
                  width={`${(videoSize * 16) / 9}`}
                  height='100%'
                  src={
                    mediaSrc.includes('embed')
                      ? mediaSrc +
                        (mediaSrc.includes('?') ? '&' : '?') +
                        'autoplay=1&mute=1&loop=1&controls=0&showinfo=0&rel=0&disablekb=1&modestbranding=1'
                      : mediaSrc.replace('watch?v=', 'embed/') +
                        '?autoplay=1&mute=1&loop=1&controls=0&showinfo=0&rel=0&disablekb=1&modestbranding=1&playlist=' +
                        mediaSrc.split('v=')[1]
                  }
                  frameBorder='0'
                  allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                  allowFullScreen
                  style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', display: 'block' }}
                />
              </div>

              {/* Right text container - SaktiSAT (bottom left aligned) */}
              <div className='flex flex-col items-start justify-end flex-1 pl-4' style={{ height: `${videoSize}px` }}>
                <h2 className='text-4xl md:text-5xl lg:text-6xl font-bold text-transparent bg-gradient-to-r from-purple-400 to-teal-300 bg-clip-text whitespace-nowrap'>
                  {firstWord}
                </h2>
              </div>
            </div>

            {/* Content section */}
            <section className='flex flex-col w-full px-8 py-10 md:px-16 lg:py-20'>
              {children}
            </section>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ScrollExpandMedia;