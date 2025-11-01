import { useLanguage } from '@/contexts/LanguageContext';

const animals = [
  { name: 'Karel', cs: 'Hravý osel s velkým srdcem a lehce kousavou povahou.', en: 'A playful donkey with a large heart and a slightly biting nature.' },
  { name: 'Yakul', cs: 'Mladý muflon co miluje teplé mléko.', en: 'A young mouflon that loves warm milk.' },
  { name: 'Avala', cs: 'Mazlivá kráva, která miluje běhání po louce.', en: 'A cuddly cow who loves running around the meadow.' },
  { name: 'Princezna', cs: 'Princezna je ušlechtilá černá kříženka divočáka, jejíž veškerá královská noblesa se při prvním zakručení v břiše okamžitě promění v nezastavitelnou slintavou potopu.', en: 'Princess is a noble black wild boar crossbreed, whose royal nobility immediately turns into an unstoppable flood of drool at the first growl in her belly.' },
  { name: 'Květa', cs: 'Klidná kravka co má ráda svůj klid a je věrnou společnicí Avalky.', en: 'A calm cow who likes her peace and quiet and is Avalky\'s faithful companion.' },
  { name: 'Riky', cs: 'Hravý pes, který hlídá celou Louky.', en: 'A playful dog who guards the entire Meadow.' },
  { name: 'Flíček', cs: 'Prasík co má rád drbání na bříšku.', en: 'A pig who likes to have his belly rubbed.' },
  { name: 'List', cs: 'Rozverné štěně, které moc rádo zkoumá a ochutnává.', en: 'A playful puppy who loves to explore and taste everything.' },
  { name: 'Atila', cs: 'Věrná kamarádka a velká milovnice jídla.', en: 'A loyal friend and a great food lover.' },
  { name: 'Pogo', cs: 'Energická ovčí kamarádka.', en: 'An energetic sheep friend.' },
  { name: 'Kulich', cs: 'Milý a přátelský obyvatel naší Louky.', en: 'Sweet and friendly resident of our Meadow.' },
  { name: 'Eduard', cs: 'Důstojný a klidný člen naší zvířecí rodiny.', en: 'Dignified and calm member of our animal family.' },
  { name: 'Emil', cs: 'Bezrohý(už) obyvatel Louky. Nehne se od Amálky.', en: 'A hornless (already) resident of our Meadow. He doesn\'t move from Amálka.' },
  { name: 'Amálka', cs: 'Jemná a láskyplná obyvatelka naší Louky. Nehne se od Emila.', en: 'Gentle and loving resident of our Meadow. She doesn\'t move from Emil.' },
  { name: 'Končí', cs: 'Zvědavý a aktivní člen naší komunity.', en: 'Curious and active member of our community.' },
  { name: 'Lucinka', cs: 'Veselá a přátelská obyvatelka naší Louky.', en: 'Cheerful and friendly resident of our Meadow.' },
  { name: 'Roman', cs: 'Nejsvalnatější kocour na celém světě.', en: 'The most muscular cat in the whole world.' },
  { name: 'Máša', cs: 'Luční modrooká blondýna.', en: 'A meadow blue-eyed blonde.' },
  { name: 'Patricie', cs: 'Nejumňoukanější kočka na celém světě.', en: 'The meekest cat in the whole world.' },
  { name: 'Safír', cs: 'Nejchundelatější kocour na celém světě.', en: 'The shaggiest cat in the whole world.' },
  { name: 'Holoubci', cs: 'Krásní ptáci, kteří přinášejí klid a harmonii.', en: 'Beautiful birds that bring peace and harmony.' },
];

export default function Animals() {
  const { language } = useLanguage();

  return (
    <div className="pt-32 pb-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-green-900 mb-4">
            {language === 'cs' ? 'Naši zvířecí obyvatelé' : 'Our Animal Residents'}
          </h1>
          <p className="text-xl text-gray-700">
            {language === 'cs' 
              ? 'Poznávejte naše zvířecí přátele, kteří našli na naší Louce svůj domov'
              : 'Meet our animal friends who have found their home on our Meadow'}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {animals.map((animal) => (
            <div
              key={animal.name}
              className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group"
            >
              <div className="bg-gradient-to-br from-green-100 to-green-200 h-48 flex items-center justify-center group-hover:from-green-200 group-hover:to-green-300 transition-all duration-300">
                <div className="text-6xl">🐾</div>
              </div>
              
              <div className="p-6">
                <h3 className="text-2xl font-bold text-green-900 mb-2">{animal.name}</h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  {language === 'cs' ? animal.cs : animal.en}
                </p>
                <a
                  href="/virtual-adoption"
                  className="inline-block mt-4 px-4 py-2 bg-green-700 text-white rounded hover:bg-green-800 transition-colors text-sm font-medium"
                >
                  {language === 'cs' ? 'Adoptovat virtuálně' : 'Adopt Virtually'}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
