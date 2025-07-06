export default function TradeExecutor() {
  const handleTrade = () => {
    alert('Trade executed (placeholder)');
  };

  return (
    <div className="p-4">
      <button
        onClick={handleTrade}
        className="border px-4 py-2 hover:bg-cyber-neon hover:text-cyber-bg"
      >
        Execute Trade
      </button>
    </div>
  );
}
