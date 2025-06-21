
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";
import { AnimatedSection } from "./AnimatedSection";
import { motion } from "framer-motion";

const featureVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.5,
    },
  }),
};

const features = [
  {
    feature: "Shared Memory",
    benefit: "No context lost across chats"
  },
  {
    feature: "Custom Prompts",
    benefit: "Personalize AI behavior"
  },
  {
    feature: "Export as API",
    benefit: "Integrate AI logic in other tools"
  },
  {
    feature: "Token Usage Monitor",
    benefit: "Stay in control of costs"
  },
  {
    feature: "Multi‑Model Support",
    benefit: "Choose the best AI for each task"
  }
];

const Features = () => {
  return (
    <AnimatedSection className="py-24 bg-gradient-to-br from-slate-50 to-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Features That Matter
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Every feature designed to make your AI interactions more powerful and meaningful.
          </p>
        </div>
        
        <Card className="max-w-4xl mx-auto bg-white/80 backdrop-blur-sm border-0 shadow-xl">
          <CardHeader className="text-center pb-8">
            <CardTitle className="text-2xl font-semibold text-gray-900">
              Feature vs. Benefit Breakdown
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {features.map((item, index) => (
                <motion.div
                  key={index}
                  className={`flex items-center justify-between p-6 rounded-xl ${index % 2 === 0 ? 'bg-blue-50/50' : 'bg-purple-50/50'}`}
                  variants={featureVariants}
                  initial="hidden"
                  whileInView="visible"
                  custom={index}
                  viewport={{ once: true, margin: "-50px" }}
                >
                  <div className="flex items-center gap-4">
                    <div className={`w-10 h-10 rounded-full ${index % 2 === 0 ? 'bg-blue-500' : 'bg-purple-500'} flex items-center justify-center`}>
                      <Check className="w-5 h-5 text-white" />
                    </div>
                    <span className="font-semibold text-gray-900 text-lg">
                      {item.feature}
                    </span>
                  </div>
                  <span className="text-gray-600 font-medium">
                    {item.benefit}
                  </span>
                </motion.div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </AnimatedSection>
  );
};

export default Features;
