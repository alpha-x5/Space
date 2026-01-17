import { motion } from 'framer-motion';
import { Rocket, Globe, Users } from 'lucide-react';

const MissionOverview = () => {
  return (
    <section className='min-h-screen bg-gradient-to-br from-black via-purple-900/20 to-teal-900/20 py-20 px-8'>
      <div className='max-w-6xl mx-auto'>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className='text-center mb-16'
        >
          <h2 className='text-5xl md:text-6xl font-bold text-transparent bg-gradient-to-r from-purple-400 to-teal-300 bg-clip-text mb-8'>
            MISSION OVERVIEW
          </h2>
          <p className='text-xl md:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed'>
            ShakthiSAT is a global mission to empower 12,000 girls from 108 countries through real-time satellite projects.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          viewport={{ once: true }}
          className='bg-gradient-to-r from-purple-900/30 to-teal-900/30 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-purple-500/20'
        >
          <p className='text-lg md:text-xl text-white/80 leading-relaxed mb-8'>
            The mission sets out on a bold journey to spark curiosity, courage, and a lifelong passion for STEM and space exploration in 12,000 brilliant young girls from 108 nations. United by a shared spirit of discovery, these future pioneers will step into the fascinating world of satellites, science, and innovation.
          </p>
          <p className='text-lg md:text-xl text-white/80 leading-relaxed'>
            ShakthiSAT isn't just a project — it's a global movement, opening doors to dreamers from every continent and every culture. Together, we explore the cosmos, break down barriers, and rise as the next generation of space leaders who will boldly shape the future among the stars.
          </p>
        </motion.div>

        <div className='grid md:grid-cols-3 gap-8 mt-16'>
          {[
            {
              icon: Users,
              number: '12,000',
              label: 'Girls Empowered',
              color: 'from-purple-400 to-purple-600'
            },
            {
              icon: Globe,
              number: '108',
              label: 'Countries United',
              color: 'from-teal-400 to-teal-600'
            },
            {
              icon: Rocket,
              number: '∞',
              label: 'Infinite Possibilities',
              color: 'from-purple-400 to-teal-400'
            }
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className='bg-black/40 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/20 text-center group cursor-pointer'
            >
              <div className={`w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-r ${item.color} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                <item.icon className='w-8 h-8 text-white' />
              </div>
              <h3 className='text-4xl font-bold text-white mb-2'>{item.number}</h3>
              <p className='text-purple-200'>{item.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MissionOverview;