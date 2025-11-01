import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';

export default function Home() {
  const { language } = useLanguage();

  const features = [
    {
      icon: '❤️',
      cs: 'Péče o zvířata',
      en: 'Animal Care',
      csDesc: 'Poskytujeme bezpečný domov a péči pro zvířata',
      enDesc: 'We provide a safe home and care for animals'
    },
    {
      icon: '🌱',
      cs: 'Soběstačnost',
      en: 'Self-sufficiency',
      csDesc: 'Aktivní uživatelé o udržitelný a soběstačný způsob života',
      enDesc: 'Active users for a sustainable way of life'
    },
    {
      icon: '👥',
      cs: 'Komunita',
      en: 'Community',
      csDesc: 'Budujeme silnou komunitu lidí s podobnými hodnotami',
      enDesc: 'Building a strong community of like-minded people'
    },
    {
      icon: '🌍',
      cs: 'Soulad s přírodou',
      en: 'Harmony with Nature',
      csDesc: 'Láskyplné propojení s přírodou a celou živou cestou',
      enDesc: 'Loving connection with nature and the entire living world'
    },
  ];

  const donations = [
    { method: 'Virtuální adopce', en: 'Virtual Adoption', link: '/virtual-adoption' },
    { method: 'Přispět kryptem', en: 'Donate with Crypto', link: '/crypto-donation' },
    { method: 'Nákup na Nakmnas.cz', en: 'Shop on Nakmnas.cz', link: '#' },
    { method: 'Příspěvek na darujme.cz', en: 'Donate on Darujme.cz', link: '#' },
  ];

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 to-green-100 py-12">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-8 items-center">
          <div className="fade-in">
            <h1 className="text-5xl md:text-6xl font-bold text-green-900 mb-6 leading-tight">
              {language === 'cs' 
                ? 'Tvořme prostor pro růst duše, srdce i přírody'
                : 'Create space for the growth of soul, heart and nature'}
            </h1>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              {language === 'cs'
                ? 'Nech Mě Růst z.s. je nezisková organizace s vizí tvorby rodového statku, kde žijeme v harmonii s přírodou, zvířaty i sebou navzájem'
                : 'Nech Me Rust z.s. is a non-profit organization with a vision of creating a family farm where we live in harmony with nature, animals and each other'}
            </p>
            <div className="flex gap-4">
              <a href="/about" className="px-6 py-3 bg-green-700 text-white rounded-lg hover:bg-green-800 transition font-medium">
                {language === 'cs' ? 'Více o nás' : 'Learn More'}
              </a>
              <a href="/animals" className="px-6 py-3 border-2 border-green-700 text-green-700 rounded-lg hover:bg-green-50 transition font-medium">
                {language === 'cs' ? 'Poznat zvířata' : 'Meet Animals'}
              </a>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="w-full h-96 bg-gradient-to-br from-green-200 to-green-300 rounded-2xl flex items-center justify-center shadow-xl">
              <div className="text-8xl">🌿</div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-green-900 mb-4 text-center">
            {language === 'cs' ? 'O projektu' : 'About the Project'}
          </h2>
          <div className="grid md:grid-cols-2 gap-8 items-center mt-12">
            <div className="hidden md:block">
              <div className="w-full h-96 bg-gradient-to-br from-gray-200 to-gray-300 rounded-2xl"></div>
            </div>
            <div>
              <p className="text-gray-700 mb-4 leading-relaxed">
                {language === 'cs'
                  ? 'Na Louce žijí zvířata, která jsme přijali do péče, která u nás nachází bezpečný domov, dostátek jídla i odpočinku. Každé zvířě má svůj příběh a my se snažíme mu dát to nejlepší.'
                  : 'On our Meadow live animals that we have taken into our care, who find a safe home with us, plenty of food and rest. Each animal has its own story and we try to give them the best.'}
              </p>
              <p className="text-gray-700 mb-4 leading-relaxed">
                {language === 'cs'
                  ? 'Věříme, že je možné žít v souladu s přírodou, s respektem k živým bytostem a v harmonii s ostatními lidmi. Naše cesta je cestou lásky, porozumění a transformace.'
                  : 'We believe it is possible to live in harmony with nature, with respect for living beings and in harmony with other people. Our path is a path of love, understanding and transformation.'}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-green-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-green-900 mb-12 text-center">
            {language === 'cs' ? 'Naše hodnoty' : 'Our Values'}
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, idx) => (
              <div key={idx} className="bg-white p-6 rounded-lg shadow-md hover-scale">
                <div className="text-5xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-green-900 mb-2">
                  {language === 'cs' ? feature.cs : feature.en}
                </h3>
                <p className="text-gray-700 text-sm">
                  {language === 'cs' ? feature.csDesc : feature.enDesc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How to Support Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-green-900 mb-4 text-center">
            {language === 'cs' ? 'Jak se zapojit?' : 'How to Get Involved?'}
          </h2>
          <p className="text-center text-gray-700 mb-12 max-w-2xl mx-auto">
            {language === 'cs'
              ? 'Existuje několik způsobů, jak nám můžete pomoci. Prosím, zvolte si ten, který vám vyhovuje.'
              : 'There are several ways you can help us. Please choose the one that works best for you.'}
          </p>
          
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {donations.map((item, idx) => (
              <a
                key={idx}
                href={item.link}
                className="p-6 bg-green-50 border-2 border-green-200 rounded-lg hover:border-green-700 hover:bg-green-100 transition text-center"
              >
                <h3 className="text-xl font-bold text-green-900">
                  {language === 'cs' ? item.method : item.en}
                </h3>
              </a>
            ))}
          </div>

          <div className="bg-green-100 p-8 rounded-lg text-center">
            <p className="text-gray-700 mb-4">
              {language === 'cs'
                ? 'Číslo účtu: CZ49 2010 2002 6400 0000 5872'
                : 'Account number: CZ49 2010 2002 6400 0000 5872'}
            </p>
            <p className="text-sm text-gray-600">SWIFT: FIOBCZPP</p>
          </div>
        </div>
      </section>
    </div>
  );
}
