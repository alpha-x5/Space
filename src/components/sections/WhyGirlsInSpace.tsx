import { motion } from 'framer-motion';
import { Sparkles, Target, Infinity } from 'lucide-react';

const WhyGirlsInSpace = () => {
  return (
    <section className='min-h-screen bg-gradient-to-tr from-teal-900/10 via-black to-purple-900/10 py-20 px-8'>
      <div className='max-w-6xl mx-auto'>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className='text-center mb-16'
        >
          <h2 className='text-5xl md:text-6xl font-bold text-transparent bg-gradient-to-r from-teal-400 to-purple-400 bg-clip-text mb-8'>
            WHY GIRLS IN SPACE?
          </h2>
        </motion.div>

        <div className='grid lg:grid-cols-2 gap-16 items-center'>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className='relative'
          >
            <div className='bg-gradient-to-br from-teal-900/40 to-purple-900/40 backdrop-blur-sm rounded-3xl p-12 border border-teal-500/20 text-center'>
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true }}
                className='w-32 h-32 mx-auto mb-8 rounded-full bg-gradient-to-r from-teal-400 to-purple-400 flex items-center justify-center'
              >
                <span className='text-6xl font-bold text-white'>11%</span>
              </motion.div>
              <p className='text-xl text-white/90 leading-relaxed'>
                Of all astronauts launched to space have been women.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className='space-y-8'
          >
            <p className='text-lg md:text-xl text-white/80 leading-relaxed'>
              The gender gap in space and STEM fields remains significant. ShakthiSAT is our answer—an initiative to ignite passion, nurture leadership, and dismantle limits.
            </p>
            <p className='text-lg md:text-xl text-white/80 leading-relaxed'>
              Empowering girls in space fuels imagination, unlocks hidden potential, and opens pathways to shape humanity's future among the stars.
            </p>

            <div className='bg-gradient-to-r from-purple-500/20 to-teal-500/20 backdrop-blur-sm rounded-2xl p-6 border border-purple-400/20'>
              <p className='text-xl font-semibold text-transparent bg-gradient-to-r from-teal-300 to-purple-300 bg-clip-text text-center'>
                We believe in equal access to infinity — every girl deserves the chance to reach beyond the sky.
              </p>
            </div>

            <div className='grid grid-cols-1 gap-4'>
              {[
                { icon: Sparkles, title: 'Ignite Passion', desc: 'Spark curiosity and wonder' },
                { icon: Target, title: 'Nurture Leadership', desc: 'Build confidence and skills' },
                { icon: Infinity, title: 'Dismantle Limits', desc: 'Break barriers and stereotypes' }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className='flex items-center space-x-4 group cursor-pointer hover:bg-white/5 rounded-xl p-4 transition-colors'
                >
                  <div className='w-10 h-10 rounded-full bg-gradient-to-r from-teal-500 to-purple-500 flex items-center justify-center group-hover:scale-110 transition-transform'>
                    <item.icon className='w-5 h-5 text-white' />
                  </div>
                  <div>
                    <h4 className='text-white font-semibold'>{item.title}</h4>
                    <p className='text-teal-200 text-sm'>{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyGirlsInSpace;