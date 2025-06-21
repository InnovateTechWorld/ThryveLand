
import { Badge } from "@/components/ui/badge";
import { Star } from "lucide-react";

const SocialProof = () => {
  return (
    <section className="py-16 bg-white border-y border-gray-100">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            Trusted by creators, founders, and AI enthusiasts
          </h2>
          <div className="flex items-center justify-center gap-2 mb-6">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <span className="text-gray-600 font-medium">5.0 from 2,847 users</span>
          </div>
          
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-6 max-w-2xl mx-auto">
            <blockquote className="text-lg font-medium text-gray-900 italic">
              "Thryve doubled my writing speed and never forgot my style."
            </blockquote>
            <cite className="mt-3 block text-sm text-gray-600 font-semibold">
              — Jane Doe, Indie Author
            </cite>
          </div>
          
          <Badge variant="outline" className="mt-6 px-4 py-2 text-sm font-medium bg-red-50 text-red-700 border-red-200">
            🔥 Your memory is powerful — don't lose it.
          </Badge>
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
