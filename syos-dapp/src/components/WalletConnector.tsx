import { useState } from 'react';

declare global {
  interface Window {
    solana?: any;
  }
}

export default function WalletConnector() {
  const [wallet, setWallet] = useState<string | null>(null);

  const connect = async () => {
    if (window.solana) {
      try {
        const resp = await window.solana.connect();
        setWallet(resp.publicKey.toString());
      } catch (err) {
        console.error(err);
      }
    } else {
      alert('Phantom wallet not found');
    }
  };

  return (
    <div className="p-4">
      {wallet ? (
        <p>Connected: {wallet}</p>
      ) : (
        <button
          onClick={connect}
          className="border px-4 py-2 hover:bg-cyber-neon hover:text-cyber-bg"
        >
          Connect Phantom
        </button>
      )}
    </div>
  );
}
