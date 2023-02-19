import s from './Loader.module.css'

export const Loader = () => (
  <div className={s.container}>
    <svg className={s.loader} viewBox="0 0 50 50">
      <defs>
        <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#fff" />
          <stop offset="100%" stopColor="#512DE4" />
        </linearGradient>
      </defs>
      <circle
              cx="25"
              cy="25"
              r="20"
              fill='none'
              strokeWidth="5"
              strokeLinecap='round'
              stroke='url(#gradient)'
      ></circle>
    </svg>
  </div>
)
