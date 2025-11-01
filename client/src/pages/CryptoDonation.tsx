export default function CryptoDonation() {
  const cryptos = [
    { name: 'Bitcoin (BTC)', address: 'bc1qe2hae5fq447rw095krcwwmamwrwy0plkkrw8as' },
    { name: 'Ethereum (ETH)', address: '0x13ACe35dac602401da21F36348Dcf37b7Fef5389' },
    { name: 'Cardano (ADA)', address: 'addr1qx868v7umt2...' },
  ];

  return (
    <div className="pt-32">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-green-900 mb-8">Přispět kryptoměnou</h1>
        <p className="text-lg text-gray-700 mb-12">Podpořte nás libovolnou z těchto kryptoměn</p>

        <div className="grid md:grid-cols-2 gap-8">
          {cryptos.map((crypto, i) => (
            <div key={i} className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-green-900 mb-4">{crypto.name}</h3>
              <div className="bg-gray-100 p-4 rounded font-mono text-sm break-all mb-4">
                {crypto.address}
              </div>
              <button
                onClick={() => navigator.clipboard.writeText(crypto.address)}
                className="w-full px-4 py-2 bg-green-700 text-white rounded hover:bg-green-800 transition"
              >
                Kopírovat
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
