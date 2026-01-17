import { motion } from 'framer-motion';
import { Heart, Badge as Bridge, Star } from 'lucide-react';

const WhatIsShakthiSat = () => {
  return (
    <section className='min-h-screen bg-gradient-to-bl from-purple-900/10 via-black to-teal-900/10 py-20 px-8'>
      <div className='max-w-6xl mx-auto'>
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className='mb-16'
        >
          <h2 className='text-2xl md:text-3xl text-teal-300 font-medium mb-4'>
            WHAT IS MISSION
          </h2>
          <h3 className='text-5xl md:text-7xl font-bold text-transparent bg-gradient-to-r from-purple-400 to-teal-300 bg-clip-text mb-8'>
            "ShakthiSAT" ?
          </h3>
        </motion.div>

        <div className='grid lg:grid-cols-2 gap-12 items-center'>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className='space-y-6'
          >
            <p className='text-lg md:text-xl text-white/80 leading-relaxed'>
              ShakthiSAT represents more than a satellite mission—it's a philosophy of building bridges across cultures through STEM and space collaboration.
            </p>
            <p className='text-lg md:text-xl text-white/80 leading-relaxed'>
              It stands as a beacon of hope, dedicated to fostering unparalleled international cooperation and unity across the globe.
            </p>
            <p className='text-lg md:text-xl text-white/80 leading-relaxed'>
              ShakthiSAT sparks a shared sense of purpose, reminding us that discovery becomes richer when humanity learns, builds, and reaches upward together.
            </p>
            <p className='text-lg md:text-xl text-white/80 leading-relaxed'>
              With every step forward, the mission reinforces the belief that space is not the privilege of a few, but a frontier that belongs to all.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className='relative'
          >
            <div className='bg-gradient-to-br from-purple-900/40 to-teal-900/40 backdrop-blur-sm rounded-3xl p-8 border border-purple-500/20'>
              <div className='grid grid-cols-1 gap-6'>
                {[
                  { icon: Heart, title: 'Beacon of Hope', desc: 'Fostering international cooperation' },
                  { icon: Bridge, title: 'Building Bridges', desc: 'Connecting cultures through STEM' },
                  { icon: Star, title: 'Shared Purpose', desc: 'Discovery enriched by unity' }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                    viewport={{ once: true }}
                    className='flex items-center space-x-4 group'
                  >
                    <div className='w-12 h-12 rounded-full bg-gradient-to-r from-purple-500 to-teal-500 flex items-center justify-center group-hover:scale-110 transition-transform'>
                      <item.icon className='w-6 h-6 text-white' />
                    </div>
                    <div>
                      <h4 className='text-white font-semibold'>{item.title}</h4>
                      <p className='text-purple-200 text-sm'>{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhatIsShakthiSat;