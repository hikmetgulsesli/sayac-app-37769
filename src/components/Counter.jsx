import useCounter from '../hooks/useCounter'

export default function Counter() {
  const { count, increment, decrement, reset } = useCounter()

  return (
    <div className="min-h-screen bg-bg flex flex-col items-center justify-center gap-12">
      <span className="font-heading font-bold text-8xl text-accent tabular-nums transition-all duration-200">
        {count}
      </span>
      <div className="flex gap-6">
        <button
          onClick={increment}
          className="px-8 py-4 bg-green text-white font-bold uppercase rounded-xl text-xl
                     hover:opacity-90 active:scale-95 focus:ring-4 focus:ring-green/30
                     transition-all duration-150 min-w-[120px] min-h-[56px]"
        >
          Arttir
        </button>
        <button
          onClick={decrement}
          className="px-8 py-4 bg-red text-white font-bold uppercase rounded-xl text-xl
                     hover:opacity-90 active:scale-95 focus:ring-4 focus:ring-red/30
                     transition-all duration-150 min-w-[120px] min-h-[56px]"
        >
          Azalt
        </button>
        <button
          onClick={reset}
          className="px-8 py-4 bg-gray text-white font-bold uppercase rounded-xl text-xl
                     hover:opacity-90 active:scale-95 focus:ring-4 focus:ring-gray/30
                     transition-all duration-150 min-w-[120px] min-h-[56px]"
        >
          Sifirla
        </button>
      </div>
    </div>
  )
}
