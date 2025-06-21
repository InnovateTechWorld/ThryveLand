
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, Zap, Crown, Rocket } from "lucide-react";
import { AnimatedSection } from "./AnimatedSection";
import { motion } from "framer-motion";

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 30,
    scale: 0.95
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1
  }
};

const plans = [
  {
    name: "Free",
    subtitle: "Starter",
    price: "$0",
    period: "forever",
    icon: Zap,
    features: [
      "Access free models",
      "10 memories",
      "2 session-APIs",
      "1 context-API",
      "Community support"
    ],
    cta: "Get Started",
    popular: false,
    gradient: "from-gray-500 to-gray-600"
  },
  {
    name: "Pro",
    subtitle: "Most Popular",
    price: "$15",
    period: "/month",
    icon: Crown,
    features: [
      "$8 in tokens included",
      "30 memories",
      "15 session-APIs",
      "Unlimited context-API",
      "Access to all models",
      "Priority support"
    ],
    cta: "Upgrade to Pro",
    popular: true,
    gradient: "from-blue-500 to-purple-600"
  },
  {
    name: "Power",
    subtitle: "For Power Users",
    price: "$25",
    period: "/month",
    icon: Rocket,
    features: [
      "$20 in tokens included",
      "50 memories",
      "Unlimited session-APIs",
      "Unlimited context-API",
      "Access to all models",
      "Dedicated support"
    ],
    cta: "Upgrade to Power",
    popular: false,
    gradient: "from-purple-500 to-pink-600"
  }
];

const Pricing = () => {
  return (
    <AnimatedSection className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Choose Your Plan
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Start free and scale as you grow. All plans include core features with generous limits.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              transition={{
                duration: 0.6,
                delay: index * 0.2,
                ease: "easeOut"
              }}
              viewport={{ once: true, margin: "-50px" }}
            >
              <Card className={`relative ${plan.popular ? 'ring-2 ring-blue-500 shadow-2xl scale-105' : 'shadow-lg'} transition-all duration-300 hover:shadow-xl bg-white border-0`}>
              {plan.popular && (
                <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-1">
                  Most Popular
                </Badge>
              )}
              
              <CardHeader className="text-center pb-8 pt-8">
                <div className={`w-16 h-16 mx-auto rounded-2xl bg-gradient-to-r ${plan.gradient} flex items-center justify-center mb-4`}>
                  <plan.icon className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-2xl font-bold text-gray-900">
                  {plan.name}
                </CardTitle>
                <p className="text-sm text-gray-600 font-medium">
                  {plan.subtitle}
                </p>
                <div className="mt-4">
                  <span className="text-4xl font-bold text-gray-900">
                    {plan.price}
                  </span>
                  <span className="text-gray-600 ml-1">
                    {plan.period}
                  </span>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-4 pb-8">
                <ul className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button
                  className={`w-full mt-8 ${plan.popular ? 'bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700' : 'bg-gray-900 hover:bg-gray-800'} text-white`}
                  size="lg"
                  onClick={() => window.location.href = 'https://app.getthryve.live'}
                >
                  {plan.cta}
                </Button>
              </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-gray-600">
            All plans include our core AI memory features. Upgrade or downgrade anytime.
          </p>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default Pricing;
