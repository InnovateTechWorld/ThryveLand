
import { Card, CardContent } from "@/components/ui/card";
import { UserPlus, Brain, Share2 } from "lucide-react";
import { AnimatedSection } from "./AnimatedSection";
import { motion } from "framer-motion";

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.5,
    },
  }),
};

const steps = [
  {
    step: "1",
    icon: UserPlus,
    title: "Sign up & start chatting",
    description: "Use free models or better with paid credits.",
    gradient: "from-blue-500 to-cyan-500"
  },
  {
    step: "2",
    icon: Brain,
    title: "Memory & prompts work in background",
    description: "Facts auto-saved, prompts personalized.",
    gradient: "from-purple-500 to-pink-500"
  },
  {
    step: "3",
    icon: Share2,
    title: "Export to use your AI brain anywhere",
    description: "Generate shareable API endpoints or embed elsewhere.",
    gradient: "from-green-500 to-emerald-500"
  }
];

const HowItWorks = () => {
  return (
    <AnimatedSection className="py-24 bg-gradient-to-br from-slate-50 to-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            How It Works
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Get started in 3 simple steps. No complex setup required.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="relative"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              custom={index}
              viewport={{ once: true, margin: "-50px" }}
            >
              <Card className="text-center p-8 bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                <CardContent className="p-0">
                  <div className={`w-16 h-16 mx-auto rounded-2xl bg-gradient-to-r ${step.gradient} flex items-center justify-center mb-6`}>
                    <step.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className={`inline-flex items-center justify-center w-8 h-8 rounded-full bg-gradient-to-r ${step.gradient} text-white font-bold text-sm mb-4`}>
                    {step.step}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </CardContent>
              </Card>
              
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-gray-300 to-gray-400 transform -translate-y-1/2"></div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
};

export default HowItWorks;
