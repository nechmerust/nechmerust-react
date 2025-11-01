import { useLanguage } from '@/contexts/LanguageContext';
import { CheckCircle } from 'lucide-react';

export default function VirtualAdoption() {
  const { language } = useLanguage();

  const steps = [
    {
      number: 1,
      cs: 'Výběr zvířete',
      en: 'Animal Selection',
      csDesc: 'Vyberte si zvíře, které vás zaujme.',
      enDesc: 'Choose an animal that interests you.',
    },
    {
      number: 2,
      cs: 'Projev zájmu',
      en: 'Expression of Interest',
      csDesc: 'Kontaktujte nás s projevem zájmu o patronát.',
      enDesc: 'Contact us with your interest in patronage.',
    },
    {
      number: 3,
      cs: 'Nastavení trvalého příkazu',
      en: 'Setting up Standing Order',
      csDesc: 'Nastavte trvalý příkaz na náš transparentní účet. Do poznámky můžete uvést, pro které zvíře je příspěvek určen.',
      enDesc: 'Set up a standing order to our transparent account. In the note, you can specify which animal the contribution is for.',
    },
    {
      number: 4,
      cs: 'Certifikace',
      en: 'Certification',
      csDesc: 'Vystavíme vám certifikát potvrzující nabytí patronátu.',
      enDesc: 'We will issue you a certificate confirming the acquisition of patronage.',
    },
  ];

  return (
    <div className="pt-32 pb-12">
      <div className="max-w-6xl mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-green-900 mb-4">
            {language === 'cs' ? 'Virtuální adopce' : 'Virtual Adoption'}
          </h1>
          <p className="text-xl text-gray-700">
            {language === 'cs'
              ? 'Staňte se patronem zvířete, které si oblíbíte'
              : 'Become a patron of an animal you love'}
          </p>
        </div>

        {/* Adoption Info Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-green-900 mb-8 text-center">
            {language === 'cs' ? 'Staňte se patronem' : 'Become a patron'}
          </h2>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-gray-700 leading-relaxed mb-6">
                {language === 'cs'
                  ? 'Pokud jste si vždy přáli mít doma například krávu či ovce, ale okolnosti vám to nedovolily, patronát představuje ideální příležitost, jak si alespoň částečně splnit tento sen. Věříme, že sny se mají plnit, a to nejen o Vánocích.'
                  : 'If you have always wanted to have a cow or sheep at home, but circumstances did not allow it, patronage represents an ideal opportunity to at least partially fulfill this dream. We believe that dreams should come true, not just at Christmas.'}
              </p>

              <p className="text-gray-700 leading-relaxed">
                {language === 'cs'
                  ? 'Jako patron budete mít možnost kdykoli navštívit zvíře, vzít ho na procházku nebo se s ním pomazlit. Tyto interakce jsou prospěšné jak pro vás, tak pro zvířata. V případě, že vám bude chybět přímý kontakt, můžeme vám zaslat aktuální fotografie či videa, abyste měli přehled o tom, jak se vašemu patronovanému zvířeti daří.'
                  : 'As a patron, you will have the opportunity to visit the animal at any time, take it for a walk or cuddle with it. These interactions are beneficial for both you and the animals. If you miss direct contact, we can send you current photos or videos so you can keep track of how your sponsored animal is doing.'}
              </p>
            </div>

            <div className="bg-gradient-to-br from-green-100 to-green-200 rounded-lg h-96 flex items-center justify-center">
              <div className="text-8xl">🐑</div>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-green-900 mb-12 text-center">
            {language === 'cs' ? 'Proces patronátu' : 'Patronage Process'}
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, idx) => (
              <div key={idx} className="relative">
                {/* Step Card */}
                <div className="bg-white rounded-lg shadow-md p-6 h-full">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-green-700 text-white font-bold text-lg mb-4 mx-auto">
                    {step.number}
                  </div>

                  <h3 className="text-lg font-bold text-green-900 mb-3 text-center">
                    {language === 'cs' ? step.cs : step.en}
                  </h3>

                  <p className="text-gray-700 text-sm text-center">
                    {language === 'cs' ? step.csDesc : step.enDesc}
                  </p>
                </div>

                {/* Connector Line */}
                {idx < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5 bg-green-300 transform -translate-y-1/2"></div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Account Section */}
        <section className="bg-green-50 border-2 border-green-200 rounded-lg p-8 mb-16">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-green-900 mb-6">
              {language === 'cs' ? 'Transparentní účet' : 'Transparent Account'}
            </h2>

            <div className="bg-white rounded-lg p-6 mb-6 inline-block">
              <p className="text-gray-600 text-sm mb-2">
                {language === 'cs' ? 'Číslo účtu:' : 'Account number:'}
              </p>
              <p className="text-2xl font-bold text-green-900 font-mono">2002645872 / 2010</p>
              <p className="text-gray-600 text-sm mt-2">Fio banka</p>
            </div>

            <p className="text-gray-700 mb-4">
              <a
                href="https://ib.fio.cz/ib/transparent?a=2002645872"
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-700 hover:text-green-900 font-semibold underline"
              >
                {language === 'cs' ? 'Zobrazit transparentní účet' : 'View transparent account'}
              </a>
            </p>

            <div className="bg-blue-50 border-l-4 border-blue-500 p-4 text-left max-w-2xl mx-auto">
              <p className="text-gray-700">
                <strong>{language === 'cs' ? 'Důležité:' : 'Important:'}</strong>{' '}
                {language === 'cs'
                  ? 'Do poznámky uveďte jméno zvířete, kterého chcete adoptovat.'
                  : 'In the note, please specify the name of the animal you want to adopt.'}
              </p>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-green-900 mb-8 text-center">
            {language === 'cs' ? 'Výhody patronátu' : 'Benefits of Patronage'}
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                cs: 'Přímý kontakt se zvířetem',
                en: 'Direct contact with the animal',
                icon: '🤝',
              },
              {
                cs: 'Fotografie a videa',
                en: 'Photos and videos',
                icon: '📸',
              },
              {
                cs: 'Certifikát patronátu',
                en: 'Patronage certificate',
                icon: '📜',
              },
              {
                cs: 'Pocit pomoci přírodě',
                en: 'Feeling of helping nature',
                icon: '🌿',
              },
            ].map((benefit, idx) => (
              <div key={idx} className="flex items-start gap-4 bg-white p-6 rounded-lg shadow-md">
                <div className="text-4xl">{benefit.icon}</div>
                <div>
                  <h3 className="font-bold text-green-900">
                    {language === 'cs' ? benefit.cs : benefit.en}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-green-700 to-green-900 text-white rounded-lg p-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            {language === 'cs' ? 'Připraveni se stát patronem?' : 'Ready to become a patron?'}
          </h2>
          <p className="mb-6 text-green-100">
            {language === 'cs'
              ? 'Vyberte si zvíře z naší stránky zvířecích obyvatel a kontaktujte nás.'
              : 'Choose an animal from our animal residents page and contact us.'}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/animals"
              className="px-6 py-3 bg-white text-green-700 rounded-lg hover:bg-gray-100 transition-colors font-bold"
            >
              {language === 'cs' ? 'Poznat zvířata' : 'Meet Animals'}
            </a>
            <a
              href="/contact"
              className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-800 transition-colors font-bold border-2 border-white"
            >
              {language === 'cs' ? 'Kontaktovat nás' : 'Contact Us'}
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}
