import { motion } from 'motion/react';
import { X } from 'lucide-react';

interface MerchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MerchModal({ isOpen, onClose }: MerchModalProps) {
  if (!isOpen) return null;

  const stores = [
    {
      name: 'CRIT Apparel',
      url: 'https://critapparel.com/products/sad-esports-jersey',
      icon: '👕',
      description: 'Premium gaming apparel and SaD Esports gear'
    },
    {
      name: 'Raven.gg',
      url: 'https://raven.gg',
      icon: '🛍️',
      description: 'Exclusive esports merchandise and collectibles'
    }
  ];

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-40" onClick={onClose} />
      )}
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={isOpen ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0, scale: 0.9, y: 20 }}
        exit={{ opacity: 0, scale: 0.9, y: 20 }}
        transition={{ duration: 0.2 }}
        className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-surface-container-lowest border-3 border-on-surface rounded-2xl shadow-[8px_8px_0px_0px_rgba(26,28,30,1)] p-8 max-w-md w-full mx-4 z-50"
      >
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-black text-on-surface">Shop Merch</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-surface-container-low rounded-lg transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5 text-on-surface" />
          </button>
        </div>

        <p className="text-sm font-semibold text-on-surface-variant mb-6">
          Choose your preferred store to browse exclusive SaD Esports merchandise:
        </p>

        <div className="flex flex-col gap-4">
          {stores.map((store) => (
            <a
              key={store.name}
              href={store.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-4 border-2 border-on-surface rounded-xl hover:bg-surface-container-low transition-all shadow-[3px_3px_0px_0px_rgba(26,28,30,1)] active:translate-y-0.5 cursor-pointer group"
            >
              <span className="text-3xl">{store.icon}</span>
              <div className="flex-1">
                <h3 className="font-black text-on-surface group-hover:text-primary transition-colors">
                  {store.name}
                </h3>
                <p className="text-xs font-semibold text-on-surface-variant">
                  {store.description}
                </p>
              </div>
              <span className="material-symbols-outlined text-primary group-hover:translate-x-1 transition-transform">
                arrow_forward
              </span>
            </a>
          ))}
        </div>

        <button
          onClick={onClose}
          className="w-full mt-6 py-2.5 border-2 border-on-surface rounded-lg font-black text-xs hover:bg-surface-container-low transition-colors cursor-pointer"
        >
          Cancel
        </button>
      </motion.div>
    </>
  );
}
