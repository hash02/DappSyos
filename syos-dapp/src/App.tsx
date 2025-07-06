import PriceFetcher from './components/PriceFetcher';
import WalletConnector from './components/WalletConnector';
import DriftChart from './components/DriftChart';
import TradeExecutor from './components/TradeExecutor';
import './index.css';

export default function App() {
  return (
    <div className="min-h-screen p-4 space-y-6 bg-cyber-bg text-cyber-neon">
      <h1 className="text-3xl font-bold text-center">SYOS Dashboard</h1>
      <WalletConnector />
      <PriceFetcher />
      <DriftChart />
      <TradeExecutor />
    </div>
  );
}
