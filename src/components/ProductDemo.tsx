
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Play, Monitor, Smartphone, Zap } from "lucide-react";
import { AnimatedSection } from "./AnimatedSection";
import { motion } from "framer-motion";

const ProductDemo = () => {
  return (
    <AnimatedSection id="demo" className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            See Thryve in Action
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Watch how memories, prompts, and API exports work together to create your personal AI assistant.
          </p>
        </motion.div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <Card className="p-6 border-l-4 border-blue-500 bg-blue-50/50">
              <CardContent className="p-0">
                <div className="flex items-start gap-4">
                  <Monitor className="w-6 h-6 text-blue-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Chat with Memory Pane</h3>
                    <p className="text-gray-600">See how conversations build context automatically.</p>
                  </div>
                </div>
              </CardContent>
              </Card>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="p-6 border-l-4 border-purple-500 bg-purple-50/50">
              <CardContent className="p-0">
                <div className="flex items-start gap-4">
                  <Zap className="w-6 h-6 text-purple-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Export Panel with API</h3>
                    <p className="text-gray-600">Turn any conversation into a callable endpoint.</p>
                  </div>
                </div>
              </CardContent>
              </Card>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <Card className="p-6 border-l-4 border-green-500 bg-green-50/50">
              <CardContent className="p-0">
                <div className="flex items-start gap-4">
                  <Smartphone className="w-6 h-6 text-green-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Token Usage Dashboard</h3>
                    <p className="text-gray-600">Stay in control of costs with real-time monitoring.</p>
                  </div>
                </div>
              </CardContent>
              </Card>
            </motion.div>
          </div>
          
          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-tr from-blue-500 to-purple-600 p-1">
              <div className="relative rounded-xl overflow-hidden bg-gray-900">
                <img
                  src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&h=600&fit=crop"
                  alt="Product Demo"
                  className="w-full h-80 object-cover"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                  <Button
                    size="lg"
                    className="bg-white/20 backdrop-blur-sm hover:bg-white/30 border border-white/30"
                    onClick={() => window.open('https://youtu.be/AA44FDTMUMg', '_blank')}
                  >
                    <Play className="w-6 h-6 mr-2" />
                    Watch Demo (60s)
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default ProductDemo;
