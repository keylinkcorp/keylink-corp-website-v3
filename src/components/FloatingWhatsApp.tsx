import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X } from "lucide-react";

export function FloatingWhatsApp() {
  const [isOpen, setIsOpen] = useState(false);
  const whatsappNumber = "+97317000000";
  const defaultMessage = "Hello! I'm interested in company formation services in Bahrain.";

  const handleWhatsAppClick = () => {
    const url = `https://wa.me/${whatsappNumber.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(defaultMessage)}`;
    window.open(url, '_blank');
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ duration: 0.2 }}
            className="absolute bottom-20 right-0 w-72 bg-white rounded-2xl shadow-md border border-border overflow-hidden"
          >
            <div className="bg-[#25D366] p-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                  <MessageCircle className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-white font-semibold text-sm">Keylink Corp</p>
                  <p className="text-white/80 text-xs">Typically replies within minutes</p>
                </div>
              </div>
            </div>
            <div className="p-4 bg-[#E5DDD5]">
              <div className="bg-white p-3 rounded-lg shadow-sm max-w-[85%]">
                <p className="text-sm text-gray-700">
                  👋 Hi there! How can we help you start your business in Bahrain today?
                </p>
                <p className="text-[10px] text-gray-400 text-right mt-1">Just now</p>
              </div>
            </div>
            <div className="p-4 bg-white">
              <button
                onClick={handleWhatsAppClick}
                className="w-full bg-[#25D366] hover:bg-[#20BD5A] text-white font-semibold py-3 px-4 rounded-lg transition-colors flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-5 h-5" />
                Start Chat
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="relative w-14 h-14 bg-[#25D366] hover:bg-[#20BD5A] rounded-full shadow-sm flex items-center justify-center transition-colors"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.2 }}>
              <X className="w-6 h-6 text-white" />
            </motion.div>
          ) : (
            <motion.div key="open" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.2 }}>
              <MessageCircle className="w-6 h-6 text-white" />
            </motion.div>
          )}
        </AnimatePresence>
        {!isOpen && (
          <motion.span
            className="absolute inset-0 rounded-full bg-[#25D366]"
            initial={{ scale: 1, opacity: 0.5 }}
            animate={{ scale: 1.5, opacity: 0 }}
            transition={{ duration: 1.5, repeat: Infinity, repeatType: "loop" }}
          />
        )}
      </motion.button>
    </div>
  );
}
