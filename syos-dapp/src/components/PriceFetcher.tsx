import { useEffect, useState } from 'react';

interface Prices {
  BTC?: number;
  ETH?: number;
  SOL?: number;
}

export default function PriceFetcher() {
  const [prices, setPrices] = useState<Prices>({});

  useEffect(() => {
    const fetchPrices = async () => {
      try {
        const res = await fetch(
          'https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,solana&vs_currencies=usd'
        );
        const data = await res.json();
        setPrices({
          BTC: data.bitcoin.usd,
          ETH: data.ethereum.usd,
          SOL: data.solana.usd,
        });
      } catch (err) {
        console.error(err);
      }
    };
    fetchPrices();
    const id = setInterval(fetchPrices, 60000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="p-4 grid grid-cols-3 gap-4 text-center">
      {['BTC', 'ETH', 'SOL'].map((sym) => (
        <div key={sym}>
          <p className="text-lg">{sym}</p>
          <p className="text-xl font-bold">
            {prices[sym as keyof Prices] ? `$${prices[sym as keyof Prices]}` : '...'}
          </p>
        </div>
      ))}
    </div>
  );
}
