import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { ChevronRight, Check, Building2, Globe, Rocket, Briefcase } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const staggerItem = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

interface Question {
  id: string;
  question: string;
  options: { value: string; label: string; icon?: React.ElementType }[];
}

const questions: Question[] = [
  {
    id: "stage",
    question: "What stage is your startup?",
    options: [
      { value: "idea", label: "Just an idea", icon: Rocket },
      { value: "mvp", label: "MVP / Prototype", icon: Building2 },
      { value: "revenue", label: "Generating revenue", icon: Briefcase },
      { value: "scaling", label: "Scaling", icon: Globe }
    ]
  },
  {
    id: "company",
    question: "Do you have a Bahrain company registered?",
    options: [
      { value: "yes", label: "Yes, already registered" },
      { value: "no", label: "No, not yet" },
      { value: "other", label: "Registered elsewhere" }
    ]
  },
  {
    id: "industry",
    question: "What industry is your startup in?",
    options: [
      { value: "fintech", label: "Fintech / Payments" },
      { value: "tech", label: "Technology / SaaS" },
      { value: "ecommerce", label: "E-commerce / Retail" },
      { value: "other", label: "Other" }
    ]
  },
  {
    id: "founder",
    question: "Where are you located?",
    options: [
      { value: "bahrain", label: "Based in Bahrain" },
      { value: "gcc", label: "Based in GCC" },
      { value: "international", label: "International" }
    ]
  }
];

interface ProgramRecommendation {
  name: string;
  match: string;
  description: string;
}

function getRecommendations(answers: Record<string, string>): ProgramRecommendation[] {
  const recommendations: ProgramRecommendation[] = [];

  // Tamkeen - good for most
  if (answers.stage !== "scaling") {
    recommendations.push({
      name: "Tamkeen Startup Support",
      match: "High Match",
      description: "Non-dilutive grants and training programs ideal for your stage."
    });
  }

  // FinTech Bay - fintech only
  if (answers.industry === "fintech") {
    recommendations.push({
      name: "FinTech Bay Accelerator",
      match: "Perfect Match",
      description: "Specialized fintech accelerator with regulatory sandbox access."
    });
  }

  // C5 - tech startups with traction
  if (answers.industry === "tech" && (answers.stage === "mvp" || answers.stage === "revenue")) {
    recommendations.push({
      name: "C5 Accelerate",
      match: "Good Match",
      description: "Intensive tech accelerator preparing you for investment."
    });
  }

  // If no recommendations, add Tamkeen as default
  if (recommendations.length === 0) {
    recommendations.push({
      name: "Tamkeen Startup Support",
      match: "Good Match",
      description: "Start with Tamkeen's business development support."
    });
  }

  return recommendations;
}

export function EligibilityChecker() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [showResults, setShowResults] = useState(false);

  const handleAnswer = (questionId: string, value: string) => {
    setAnswers(prev => ({ ...prev, [questionId]: value }));
    
    if (currentStep < questions.length - 1) {
      setCurrentStep(prev => prev + 1);
    } else {
      setShowResults(true);
    }
  };

  const resetQuiz = () => {
    setCurrentStep(0);
    setAnswers({});
    setShowResults(false);
  };

  const currentQuestion = questions[currentStep];
  const recommendations = getRecommendations(answers);

  return (
    <section ref={ref} className="py-20 md:py-28 bg-muted/30 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Header */}
          <div className="text-center mb-12">
            <motion.div variants={staggerItem}>
              <span className="section-badge">Eligibility Check</span>
            </motion.div>
            <motion.h2 variants={staggerItem} className="text-3xl md:text-4xl font-bold mt-4 mb-4">
              Are You Eligible for Bahrain's <span className="text-accent">Incubator Programs?</span>
            </motion.h2>
            <motion.p variants={staggerItem} className="text-muted-foreground max-w-2xl mx-auto">
              Answer 4 quick questions to discover which programs match your profile.
            </motion.p>
          </div>

          {/* Quiz Container */}
          <motion.div 
            variants={staggerItem}
            className="max-w-2xl mx-auto"
          >
            <div className="bg-background rounded-2xl border-2 border-border p-8 shadow-sm">
              <AnimatePresence mode="wait">
                {!showResults ? (
                  <motion.div
                    key={`question-${currentStep}`}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                  >
                    {/* Progress */}
                    <div className="flex items-center gap-2 mb-8">
                      {questions.map((_, index) => (
                        <div
                          key={index}
                          className={`h-2 flex-1 rounded-full transition-colors ${
                            index <= currentStep ? "bg-accent" : "bg-muted"
                          }`}
                        />
                      ))}
                    </div>

                    {/* Question */}
                    <p className="text-xs text-muted-foreground uppercase tracking-wide mb-2">
                      Question {currentStep + 1} of {questions.length}
                    </p>
                    <h3 className="text-xl md:text-2xl font-bold mb-8">
                      {currentQuestion.question}
                    </h3>

                    {/* Options */}
                    <div className="grid gap-3">
                      {currentQuestion.options.map((option) => (
                        <button
                          key={option.value}
                          onClick={() => handleAnswer(currentQuestion.id, option.value)}
                          className="flex items-center gap-4 p-4 rounded-xl border-2 border-border hover:border-accent hover:bg-accent/5 transition-all text-left group"
                        >
                          {option.icon && (
                            <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                              <option.icon className="w-5 h-5 text-accent" />
                            </div>
                          )}
                          <span className="font-medium flex-1">{option.label}</span>
                          <ChevronRight className="w-5 h-5 text-muted-foreground group-hover:text-accent transition-colors" />
                        </button>
                      ))}
                    </div>
                  </motion.div>
                ) : (
                  <motion.div
                    key="results"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                  >
                    {/* Results Header */}
                    <div className="text-center mb-8">
                      <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Check className="w-8 h-8 text-accent" />
                      </div>
                      <h3 className="text-2xl font-bold mb-2">Your Program Matches</h3>
                      <p className="text-muted-foreground">
                        Based on your answers, here are your recommended programs:
                      </p>
                    </div>

                    {/* Recommendations */}
                    <div className="space-y-4 mb-8">
                      {recommendations.map((program, index) => (
                        <div
                          key={index}
                          className="p-4 rounded-xl border-2 border-accent/30 bg-accent/5"
                        >
                          <div className="flex items-start justify-between mb-2">
                            <h4 className="font-bold">{program.name}</h4>
                            <span className="text-xs bg-accent text-accent-foreground px-2 py-1 rounded-full">
                              {program.match}
                            </span>
                          </div>
                          <p className="text-sm text-muted-foreground">
                            {program.description}
                          </p>
                        </div>
                      ))}
                    </div>

                    {/* CTAs */}
                    <div className="flex flex-col sm:flex-row gap-3">
                      <Button asChild className="flex-1">
                        <Link to="/free-consultation">
                          Get Expert Guidance
                          <ChevronRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                      <Button variant="outline" onClick={resetQuiz} className="flex-1">
                        Retake Quiz
                      </Button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
