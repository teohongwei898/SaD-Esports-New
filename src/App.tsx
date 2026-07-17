{PARTNERS.map((partner) => {
  // 1. Define the inner card layout once
  const cardContent = (
    <div className="flex flex-col items-center text-center gap-6 h-full justify-between">
      <div className="flex flex-col items-center text-center gap-6">
        <div className="w-20 h-20 bg-slate-100 rounded-lg border-2 border-on-surface shadow-[2px_2px_0px_0px_rgba(26,28,30,1)] p-4 flex items-center justify-center">
          {partner.logoType === 'lightning' && (
            <div className="text-yellow-500 animate-pulse">
              <span className="material-symbols-outlined text-[48px] font-black">bolt</span>
            </div>
          )}
          {partner.logoType === 'mouse' && (
            <div className="text-slate-700">
              <span className="material-symbols-outlined text-[48px] font-black">mouse</span>
            </div>
          )}
          {partner.logoType === 'shoe' && (
            <div className="text-slate-600">
              <span className="material-symbols-outlined text-[48px] font-black">steps</span>
            </div>
          )}
          {partner.logoType === 'server' && (
            <div className="text-blue-600">
              <span className="material-symbols-outlined text-[48px] font-black">dns</span>
            </div>
          )}
          {partner.logoType === 'eye' && (
            <div className="text-emerald-600">
              <span className="material-symbols-outlined text-[48px] font-black">visibility</span>
            </div>
          )}
        </div>

        <div>
          <h3 className="text-lg font-black text-on-surface mb-2">{partner.name}</h3>
          <p className="text-xs font-semibold text-on-surface-variant leading-relaxed">
            {partner.description}
          </p>
        </div>
      </div>

      {partner.url && (
        <div className="text-xs font-black text-primary hover:underline mt-2 flex items-center gap-1">
          Visit Brand Website ↗
        </div>
      )}
    </div>
  );

  const baseClassName = "hard-shadow-card rounded-xl p-6 bg-surface-container-lowest border-3 border-on-surface block transition-transform duration-200";

  // 2. Render either an 'a' element or a 'div' element wrapping the content cleanly
  if (partner.url) {
    return (
      <a
        key={partner.id}
        href={partner.url}
        target="_blank"
        rel="noopener noreferrer"
        className={`${baseClassName} cursor-pointer hover:-translate-y-1`}
      >
        {cardContent}
      </a>
    );
  }

  return (
    <div key={partner.id} className={baseClassName}>
      {cardContent}
    </div>
  );
})}
