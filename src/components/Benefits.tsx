
import { Card, CardContent } from "@/components/ui/card";
import { MessageSquare, Brain, Plug, Settings } from "lucide-react";

const benefits = [
  {
    icon: MessageSquare,
    title: "Multi‑Model Chat",
    description: "Switch between GPT‑4, Claude, Gemini & more — without losing context.",
    gradient: "from-blue-500 to-cyan-500"
  },
  {
    icon: Brain,
    title: "Auto Memory Keeper",
    description: "Your AI remembers what matters. No manual saving.",
    gradient: "from-purple-500 to-pink-500"
  },
  {
    icon: Plug,
    title: "Export as API",
    description: "Turn chats & profiles into endpoints your tools can call.",
    gradient: "from-green-500 to-emerald-500"
  },
  {
    icon: Settings,
    title: "Custom Prompts",
    description: "Personalize every interaction with editable system prompts.",
    gradient: "from-orange-500 to-red-500"
  }
];

const Benefits = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-slate-50 to-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Everything you need to supercharge your AI workflow
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Built for creators who need their AI to remember, adapt, and integrate seamlessly with their tools.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <Card key={index} className="relative group hover:shadow-xl transition-all duration-300 border-0 bg-white/60 backdrop-blur-sm">
              <CardContent className="p-8">
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-r ${benefit.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <benefit.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {benefit.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
