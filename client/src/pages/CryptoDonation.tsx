import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Copy, Check } from 'lucide-react';

interface CryptoData {
  name: string;
  symbol: string;
  csDesc: string;
  enDesc: string;
  address: string;
  icon: string;
  hasLink?: boolean;
  linkUrl?: string;
  linkText?: { cs: string; en: string };
}

const cryptoList: CryptoData[] = [
  {
    name: 'Bitcoin',
    symbol: 'BTC',
    csDesc: 'Bitcoin je první a nejznámější kryptoměna.',
    enDesc: 'Bitcoin is the first and most well-known cryptocurrency.',
    address: 'bc1qe2hae5fq447rw095krcwwmamwrwy0plkkrw8as',
    icon: '₿',
  },
  {
    name: 'Ethereum',
    symbol: 'ETH',
    csDesc: 'Ethereum je druhá nejrozšířenější kryptoměna.',
    enDesc: 'Ethereum is the second most widespread cryptocurrency.',
    address: '0x13ACe35dac602401da21F36348Dcf37b7Fef5389',
    icon: 'Ξ',
  },
  {
    name: 'Cardano',
    symbol: 'ADA',
    csDesc: 'Cardano je moderní proof-of-stake blockchain.',
    enDesc: 'Cardano is a modern proof-of-stake blockchain.',
    address: 'addr1qx868v7umt2da0td3l7nsa990fwag37lllt82m4espzmnczscqvg9wk7adqdma8zcw60x2ru5uck9t0hr5far84c654sn4jxn4',
    icon: '◆',
  },
  {
    name: 'Binance Coin',
    symbol: 'BNB',
    csDesc: 'Binance Coin je kryptoměna burzy Binance.',
    enDesc: 'Binance Coin is the cryptocurrency of Binance exchange.',
    address: '0x13ACe35dac602401da21F36348Dcf37b7Fef5389',
    icon: '◆',
  },
  {
    name: 'Pi Network',
    symbol: 'Pi',
    csDesc: 'Pi Network je mobilní kryptoměna.',
    enDesc: 'Pi Network is a mobile cryptocurrency.',
    address: 'GDFQXJ2VMVH6MAJMZHJG4W57WHEZ26HFC42NHAVV4W7H56SEUVDAZMM6',
    icon: 'π',
    hasLink: true,
    linkUrl: 'https://minepi.com/bhaktidas108',
    linkText: { cs: 'Těžit Pi', en: 'Mine Pi' },
  },
];

export default function CryptoDonation() {
  const { language } = useLanguage();
  const [expandedCrypto, setExpandedCrypto] = useState<string | null>(null);
  const [copiedAddress, setCopiedAddress] = useState<string | null>(null);

  const toggleExpand = (symbol: string) => {
    setExpandedCrypto(expandedCrypto === symbol ? null : symbol);
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedAddress(text);
    setTimeout(() => setCopiedAddress(null), 2000);
  };

  return (
    <div className="pt-32 pb-12">
      <div className="max-w-6xl mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-green-900 mb-4">
            {language === 'cs' ? 'Přispět kryptoměnou' : 'Donate with Cryptocurrency'}
          </h1>
          <p className="text-xl text-gray-700">
            {language === 'cs'
              ? 'Podpořte nás libovolnou z těchto kryptoměn'
              : 'Support us with any of these cryptocurrencies'}
          </p>
        </div>

        {/* Crypto Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {cryptoList.map((crypto) => (
            <div
              key={crypto.symbol}
              className="bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden"
            >
              {/* Card Header */}
              <div className="bg-gradient-to-r from-green-50 to-green-100 p-6 text-center">
                <div className="text-5xl mb-3">{crypto.icon}</div>
                <h3 className="text-2xl font-bold text-green-900">{crypto.name}</h3>
                <p className="text-sm text-gray-600 mt-1">({crypto.symbol})</p>
              </div>

              {/* Card Body */}
              <div className="p-6">
                <p className="text-gray-700 text-sm mb-4">
                  {language === 'cs' ? crypto.csDesc : crypto.enDesc}
                </p>

                <button
                  onClick={() => toggleExpand(crypto.symbol)}
                  className="w-full px-4 py-2 bg-green-700 text-white rounded hover:bg-green-800 transition-colors font-medium mb-3"
                >
                  {expandedCrypto === crypto.symbol
                    ? language === 'cs'
                      ? 'Skrýt'
                      : 'Hide'
                    : language === 'cs'
                    ? 'Více'
                    : 'More'}
                </button>

                {crypto.hasLink && (
                  <a
                    href={crypto.linkUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full block px-4 py-2 bg-yellow-500 text-gray-900 rounded hover:bg-yellow-600 transition-colors font-medium text-center"
                  >
                    {language === 'cs' ? crypto.linkText?.cs : crypto.linkText?.en}
                  </a>
                )}
              </div>

              {/* Expanded Info */}
              {expandedCrypto === crypto.symbol && (
                <div className="border-t border-gray-200 p-6 bg-gray-50">
                  <div className="mb-4">
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      {language === 'cs' ? 'Adresa pro příspěvek:' : 'Donation address:'}
                    </label>
                    <div className="relative">
                      <div className="bg-white border-2 border-gray-300 rounded p-3 pr-10 break-all text-xs font-mono text-gray-800">
                        {crypto.address}
                      </div>
                      <button
                        onClick={() => copyToClipboard(crypto.address)}
                        className="absolute right-2 top-1/2 -translate-y-1/2 p-2 hover:bg-gray-200 rounded transition-colors"
                        title={language === 'cs' ? 'Kopírovat' : 'Copy'}
                      >
                        {copiedAddress === crypto.address ? (
                          <Check size={18} className="text-green-600" />
                        ) : (
                          <Copy size={18} className="text-gray-600" />
                        )}
                      </button>
                    </div>
                    {copiedAddress === crypto.address && (
                      <p className="text-xs text-green-600 mt-2">
                        {language === 'cs' ? '✓ Zkopírováno!' : '✓ Copied!'}
                      </p>
                    )}
                  </div>

                  {crypto.symbol === 'Pi' && (
                    <p className="text-xs text-gray-600 mt-3">
                      {language === 'cs'
                        ? 'Chcete-li těžit Pi, použijte odkaz výše.'
                        : 'To mine Pi, use the link above.'}
                    </p>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Info Box */}
        <div className="bg-green-50 border-2 border-green-200 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold text-green-900 mb-4">
            {language === 'cs' ? 'Děkujeme za vaši podporu!' : 'Thank you for your support!'}
          </h2>
          <p className="text-gray-700 mb-4">
            {language === 'cs'
              ? 'Každý příspěvek nám pomáhá pečovat o naše zvířata a rozvíjet náš projekt.'
              : 'Every contribution helps us care for our animals and develop our project.'}
          </p>
          <p className="text-sm text-gray-600">
            {language === 'cs'
              ? 'Máte otázky? Kontaktujte nás na '
              : 'Have questions? Contact us at '}
            <a href="mailto:info@nechmerust.org" className="text-green-700 hover:text-green-900 font-semibold">
              info@nechmerust.org
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
