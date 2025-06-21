import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Sparkles, Zap } from "lucide-react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50 pt-20 pb-32">
      {/* Grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div>
      
      {/* Animated floating bubbles */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Large bubbles */}
        <div className="absolute top-10 left-1/4 w-64 h-64 bg-blue-400/20 rounded-full blur-2xl animate-float-slow"></div>
        <div className="absolute -top-20 right-1/4 w-72 h-72 bg-purple-400/20 rounded-full blur-2xl animate-float-medium"></div>
        
        {/* Medium bubbles */}
        <div className="absolute top-40 left-10 w-40 h-40 bg-cyan-400/30 rounded-full blur-xl animate-float-fast"></div>
        <div className="absolute top-60 right-20 w-48 h-48 bg-indigo-400/30 rounded-full blur-xl animate-float-medium"></div>
        <div className="absolute bottom-40 left-1/3 w-36 h-36 bg-blue-400/30 rounded-full blur-xl animate-float-slow"></div>
        
        {/* Small bubbles */}
        <div className="absolute top-20 right-1/3 w-20 h-20 bg-purple-400/40 rounded-full blur-md animate-float-fast"></div>
        <div className="absolute bottom-32 left-1/4 w-24 h-24 bg-cyan-400/40 rounded-full blur-md animate-float-medium"></div>
        <div className="absolute top-1/2 right-1/4 w-16 h-16 bg-blue-400/40 rounded-full blur-md animate-float-fast"></div>
        
        {/* Tiny bubbles */}
        <div className="absolute top-1/4 left-1/2 w-8 h-8 bg-indigo-400/50 rounded-full blur-sm animate-float-faster"></div>
        <div className="absolute bottom-1/3 right-1/3 w-6 h-6 bg-purple-400/50 rounded-full blur-sm animate-float-faster"></div>
        <div className="absolute top-2/3 left-1/3 w-10 h-10 bg-blue-400/50 rounded-full blur-sm animate-float-faster"></div>
        <div className="absolute bottom-1/4 right-1/2 w-12 h-12 bg-cyan-400/50 rounded-full blur-sm animate-float-faster"></div>
      </div>
      
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          className="mx-auto max-w-4xl text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <Badge variant="secondary" className="mb-6 px-4 py-2 text-sm font-medium bg-blue-50 text-blue-700 border-blue-200">
            <Sparkles className="w-4 h-4 mr-2" />
            Your AI Memory Starts Here
          </Badge>
          
          <h1 className="text-5xl font-bold tracking-tight text-gray-900 sm:text-7xl lg:text-8xl">
            Talk to Any AI.{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Save Your Memory.
            </span>{" "}
            Export Your Intelligence.
          </h1>
          
          <p className="mt-6 text-xl leading-8 text-gray-600 max-w-3xl mx-auto">
            Chat with multiple AI models, automatically store & edit memories, and turn conversations into API endpoints — all in one place.
          </p>
          
          <motion.div
            className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 px-8 py-4 text-lg font-semibold"
              onClick={() => window.location.href = 'https://app.getthryve.live'}
            >
              Start for Free
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="px-8 py-4 text-lg font-semibold"
              onClick={() => document.getElementById('demo')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <Zap className="mr-2 h-5 w-5" />
              Watch Demo
            </Button>
          </motion.div>
          
          <p className="mt-4 text-sm text-gray-500">
            No credit card, no commitment — upgrade anytime.
          </p>
        </motion.div>
        
        <motion.div
          className="mt-16 relative"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="mx-auto max-w-5xl">
            <div className="relative rounded-2xl bg-white/80 backdrop-blur-sm border border-gray-200 shadow-2xl p-8">
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-50/50 to-purple-50/50 rounded-2xl"></div>
              <div className="relative">
                <img
                  src="/thryve.png"
                  alt="Thryve AI Platform Dashboard"
                  className="w-full rounded-xl shadow-lg"
                />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
