import { motion } from 'framer-motion';
import { Globe as Globe2, Zap, Users as Users2 } from 'lucide-react';

const Why108Countries = () => {
  return (
    <section className='min-h-screen bg-gradient-to-br from-purple-900/10 via-black to-teal-900/10 py-20 px-8'>
      <div className='max-w-6xl mx-auto'>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className='text-center mb-16'
        >
          <h2 className='text-5xl md:text-6xl font-bold text-transparent bg-gradient-to-r from-purple-400 to-teal-400 bg-clip-text mb-8'>
            WHY 108 COUNTRIES?
          </h2>
        </motion.div>

        <div className='grid lg:grid-cols-2 gap-16 items-center'>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className='space-y-8'
          >
            <p className='text-lg md:text-xl text-white/80 leading-relaxed'>
              The number 108 carries deep cultural, scientific, and spiritual significance across civilizations—symbolizing completeness, cosmic harmony, and unity.
            </p>
            <p className='text-lg md:text-xl text-white/80 leading-relaxed'>
              Bringing together 108 nations in a shared mission sparks innovation through diversity, strengthens collaboration, and builds a future where humanity learns, explores, and grows together among the stars.
            </p>

            <div className='bg-gradient-to-r from-purple-500/20 to-teal-500/20 backdrop-blur-sm rounded-2xl p-6 border border-purple-400/20'>
              <p className='text-xl font-semibold text-transparent bg-gradient-to-r from-purple-300 to-teal-300 bg-clip-text'>
                By uniting 108 countries, we celebrate diversity as a force multiplier—proving that breakthroughs flourish when perspectives merge, borders fade, and the cosmos becomes a shared destination rather than a distant dream.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className='relative'
          >
            <div className='bg-gradient-to-br from-purple-900/40 to-teal-900/40 backdrop-blur-sm rounded-3xl p-8 border border-purple-500/20'>
              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                whileInView={{ scale: 1, rotate: 0 }}
                transition={{ duration: 1, delay: 0.3 }}
                viewport={{ once: true }}
                className='w-40 h-40 mx-auto mb-8 rounded-full bg-gradient-to-r from-purple-400 to-teal-400 flex items-center justify-center relative overflow-hidden'
              >
                <span className='text-6xl font-bold text-white z-10'>108</span>
                <div className='absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent rotate-45 animate-pulse'></div>
              </motion.div>

              <div className='space-y-6'>
                {[
                  { icon: Globe2, title: 'Cosmic Harmony', desc: 'Cultural & spiritual significance' },
                  { icon: Zap, title: 'Innovation Through Diversity', desc: 'Unique perspectives unite' },
                  { icon: Users2, title: 'Global Collaboration', desc: 'Humanity learning together' }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
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

export default Why108Countries;