import React from 'react'

interface StoreFilterProps {
  tab: 'categories' | 'shops'
  lang: string
  regions: string[]
  filterRegion: string
  setFilterRegion: (v: string) => void
  // products
  filterMinPrice: string
  filterMaxPrice: string
  setFilterMinPrice: (v: string) => void
  setFilterMaxPrice: (v: string) => void
  // shops
  filterMinKm: string
  filterMaxKm: string
  setFilterMinKm: (v: string) => void
  setFilterMaxKm: (v: string) => void
  userCoords: { lat: number; lon: number } | null
  hasFilter: boolean
  resetAll: () => void
  searchActive?: boolean // true when searching (for showing price filter)
}

const XIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-3 h-3">
    <path d="M6.28 5.22a.75.75 0 0 0-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 1 0 1.06 1.06L10 11.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L11.06 10l3.72-3.72a.75.75 0 0 0-1.06-1.06L10 8.94 6.28 5.22Z" />
  </svg>
)

function NumInput({
  value,
  onChange,
  placeholder,
}: {
  value: string
  onChange: (v: string) => void
  placeholder: string
}) {
  const fmt = (v: string) => {
    const r = v.replace(/\D/g, '')
    return r ? r.replace(/\B(?=(\d{3})+(?!\d))/g, '.') : ''
  }
  return (
    <div className="relative">
      <input
        type="text"
        inputMode="numeric"
        value={value}
        onChange={e => onChange(fmt(e.target.value))}
        placeholder={placeholder}
        className="w-24 pl-2.5 pr-6 py-1.5 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 placeholder-slate-400 text-xs font-medium focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/20 transition-all"
      />
      {value && (
        <button
          onClick={() => onChange('')}
          className="absolute right-1.5 top-1/2 -translate-y-1/2 text-slate-300 hover:text-red-400"
        >
          <XIcon />
        </button>
      )}
    </div>
  )
}

export default function StoreFilter({
  tab,
  lang,
  regions,
  filterRegion,
  setFilterRegion,
  filterMinPrice,
  filterMaxPrice,
  setFilterMinPrice,
  setFilterMaxPrice,
  filterMinKm,
  filterMaxKm,
  setFilterMinKm,
  setFilterMaxKm,
  userCoords,
  hasFilter,
  resetAll,
  searchActive,
}: StoreFilterProps) {
  const showPrice = tab === 'categories' && searchActive
  const showKm = tab === 'shops'

  return (
    <div className="py-2 border-t border-slate-100 dark:border-slate-800">
      {/* Row 1 — Region chips */}
      {regions.length > 0 && (
        <div
          className="flex items-center gap-1.5 overflow-x-auto pb-2"
          style={{ scrollbarWidth: 'none' }}
        >
          <button
            onClick={() => setFilterRegion('')}
            className={`flex-shrink-0 h-7 px-3 rounded-full text-xs font-semibold transition-all ${
              !filterRegion
                ? 'bg-primary text-white shadow-sm'
                : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-primary/10 hover:text-primary'
            }`}
          >
            {lang === 'ru' ? 'Все' : 'Barchasi'}
          </button>
          {regions.map(r => (
            <button
              key={r}
              onClick={() => setFilterRegion(filterRegion === r ? '' : r)}
              className={`flex-shrink-0 h-7 px-3 rounded-full text-xs font-semibold transition-all ${
                filterRegion === r
                  ? 'bg-primary text-white shadow-sm'
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-primary/10 hover:text-primary'
              }`}
            >
              {r}
            </button>
          ))}
        </div>
      )}

      {/* Row 2 — Numeric filters */}
      {(showPrice || showKm) && (
        <div className="flex items-center gap-2 flex-wrap">
          {/* Shops: km */}
          {showKm && (
            <>
              <span className="text-xs text-slate-400 font-medium whitespace-nowrap">
                {lang === 'ru' ? 'Расстояние:' : 'Masofa:'}
              </span>
              <NumInput
                value={filterMinKm}
                onChange={setFilterMinKm}
                placeholder={lang === 'ru' ? 'Мин' : 'Min'}
              />
              <span className="text-slate-300 text-xs">—</span>
              <NumInput
                value={filterMaxKm}
                onChange={setFilterMaxKm}
                placeholder={lang === 'ru' ? 'Макс' : 'Max'}
              />
              <span className="text-xs text-slate-500 font-medium">km</span>
              {!userCoords && (filterMinKm || filterMaxKm) && (
                <span className="text-[10px] text-amber-400">
                  {lang === 'ru' ? '(нужна геолокация)' : '(joylashuv kerak)'}
                </span>
              )}
            </>
          )}

          {/* Products: price */}
          {showPrice && (
            <>
              <span className="text-xs text-slate-400 font-medium whitespace-nowrap">
                {lang === 'ru' ? 'Цена:' : 'Narx:'}
              </span>
              <NumInput
                value={filterMinPrice}
                onChange={setFilterMinPrice}
                placeholder={lang === 'ru' ? 'Мин' : 'Min'}
              />
              <span className="text-slate-300 text-xs">—</span>
              <NumInput
                value={filterMaxPrice}
                onChange={setFilterMaxPrice}
                placeholder={lang === 'ru' ? 'Макс' : 'Max'}
              />
              <span className="text-xs text-slate-500 font-medium">
                {lang === 'ru' ? 'сум' : "so'm"}
              </span>
            </>
          )}

          {/* Reset */}
          {hasFilter && (
            <button
              onClick={resetAll}
              className="flex items-center gap-1 h-7 px-2.5 rounded-lg bg-red-50 dark:bg-red-900/20 text-red-400 hover:text-red-600 hover:bg-red-100 dark:hover:bg-red-900/40 text-xs font-semibold transition-all ml-auto"
            >
              <XIcon />
              {lang === 'ru' ? 'Сбросить' : 'Tozalash'}
            </button>
          )}
        </div>
      )}

      {/* Reset when only region selected (no numeric row) */}
      {!showPrice && !showKm && hasFilter && (
        <button
          onClick={resetAll}
          className="flex items-center gap-1 h-7 px-2.5 rounded-lg bg-red-50 dark:bg-red-900/20 text-red-400 hover:text-red-600 text-xs font-semibold transition-all"
        >
          <XIcon />
          {lang === 'ru' ? 'Сбросить' : 'Tozalash'}
        </button>
      )}
    </div>
  )
}
