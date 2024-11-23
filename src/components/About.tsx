import React from 'react';
import { Award, Users, Clock, Utensils } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
          className="text-center mb-16"
        >
          <motion.h2 variants={itemVariants} className="text-4xl font-bold text-gray-900 mb-4">
            Our Story
          </motion.h2>
          <motion.p variants={itemVariants} className="text-gray-600 max-w-2xl mx-auto">
            Since 1970, La Maison has been serving exceptional French cuisine, 
            combining traditional techniques with modern innovation.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
          className="grid md:grid-cols-2 gap-12 items-center mb-20"
        >
          <motion.div variants={itemVariants} className="space-y-6">
            <h3 className="text-2xl font-semibold text-gray-900">A Legacy of Excellence</h3>
            <p className="text-gray-600">
              Founded by renowned Chef Pierre Dubois, La Maison has established itself as 
              a cornerstone of French gastronomy. Our commitment to quality and authenticity 
              has earned us numerous accolades and a loyal following of food enthusiasts.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 bg-amber-50 rounded-lg">
                <Award className="w-8 h-8 text-amber-600 mb-2" />
                <h4 className="font-semibold">Michelin Stars</h4>
                <p className="text-sm text-gray-600">3 consecutive years</p>
              </div>
              <div className="p-4 bg-amber-50 rounded-lg">
                <Users className="w-8 h-8 text-amber-600 mb-2" />
                <h4 className="font-semibold">Happy Guests</h4>
                <p className="text-sm text-gray-600">50,000+ served</p>
              </div>
            </div>
          </motion.div>
          <motion.div variants={itemVariants} className="grid grid-cols-2 gap-4">
            <img
              src="https://parkmallsetif-dz.com/wp-content/uploads/2024/02/DSC09287-scaled.jpg"
              alt="Restaurant interior"
              className="rounded-lg w-full h-64 object-cover"
            />
            <img
              src="https://parkmallsetif-dz.com/wp-content/uploads/2024/02/DSC09287-scaled.jpg"
              alt="Chef preparing food"
              className="rounded-lg w-full h-64 object-cover mt-8"
            />
          </motion.div>
        </motion.div>

        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
          className="grid md:grid-cols-3 gap-8"
        >
          {[
            {
              icon: Clock,
              title: "Opening Hours",
              content: "Mon-Fri: 12pm - 11pm\nSat-Sun: 11am - 11pm"
            },
            {
              icon: Utensils,
              title: "Private Events",
              content: "Host your special occasions\nin our elegant private dining rooms"
            },
            {
              icon: Award,
              title: "Fine Dining",
              content: "Experience exceptional cuisine\nin an elegant atmosphere"
            }
          ].map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="text-center p-6 bg-gray-50 rounded-lg hover:shadow-md transition-shadow"
            >
              <feature.icon className="w-12 h-12 text-amber-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600 whitespace-pre-line">{feature.content}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;