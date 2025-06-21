
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

const CtaSection = () => {
  return (
    <motion.section
      className="py-24 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 relative overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff1a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff1a_1px,transparent_1px)] bg-[size:14px_24px]"></div>
      
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-sm mb-8">
            <Sparkles className="w-8 h-8 text-white" />
          </div>
          
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to start retaining your AI memory?
          </h2>
          
          <p className="text-xl text-white/90 max-w-2xl mx-auto mb-10">
            Join thousands of creators who never lose context again. Start building your AI memory today.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              size="lg"
              className="bg-white text-gray-900 hover:bg-gray-100 px-8 py-4 text-lg font-semibold"
              onClick={() => window.location.href = 'https://app.getthryve.live'}
            >
              Start Free — No Card Needed
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-white/30 text-white hover:bg-white/10 px-8 py-4 text-lg font-semibold"
              onClick={() => window.location.href = 'mailto:sales@getthryve.live'}
            >
              Talk to Sales
            </Button>
          </div>
          
          <p className="mt-6 text-white/80 text-sm">
            Free plan available • Upgrade anytime • Cancel anytime
          </p>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default CtaSection;
