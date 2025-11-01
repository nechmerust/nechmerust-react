import { useLanguage } from '@/contexts/LanguageContext';

export default function About() {
  const { language } = useLanguage();

  return (
    <div className="pt-32 pb-12">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-5xl font-bold text-green-900 mb-8 text-center">
          {language === 'cs' ? 'O nás' : 'About Us'}
        </h1>

        <div className="prose prose-lg max-w-4xl mx-auto">
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-green-900 mb-4">
              {language === 'cs' ? 'Kdo jsme?' : 'Who are we?'}
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              {language === 'cs'
                ? 'Nech Mě Růst z.s. je nezisková organizace, která se věnuje péči o zvířata a vytváření harmonického prostředí v souladu s přírodou. Naše cesta začala s vízí vytvořit místo, kde se všichni - lidé, zvířata i příroda - mohou rozvíjet v souladu a lásce.'
                : 'Nech Me Rust z.s. is a non-profit organization dedicated to animal care and creating a harmonious environment in accordance with nature. Our journey began with a vision to create a place where everyone - people, animals and nature - can thrive in harmony and love.'}
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-green-900 mb-4">
              {language === 'cs' ? 'Naše poslání' : 'Our Mission'}
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              {language === 'cs'
                ? 'Věříme, že je možné žít v souladu s přírodou, s respektem k živým bytostem a v harmonii s ostatními lidmi. Naše cesta je cestou lásky, porozumění a transformace. Chceme vytvořit komunitu lidí, kteří sdílí naše hodnoty a jsou ochotni pracovat na lepší budoucnosti.'
                : 'We believe it is possible to live in harmony with nature, with respect for living beings and in harmony with other people. Our path is a path of love, understanding and transformation. We want to create a community of people who share our values and are willing to work for a better future.'}
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-green-900 mb-4">
              {language === 'cs' ? 'Naše zvířata' : 'Our Animals'}
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              {language === 'cs'
                ? 'Na naší Louce žijí desítky zvířat, která jsme přijali do péče. Každé z nich má svůj příběh, svou osobnost a své potřeby. Od velkých zvířat jako jsou koně a krávy, přes menší zvířata jako jsou psi a kočky, až po ptáky a další. Všichni jsou součástí naší velké rodiny.'
                : 'On our Meadow live dozens of animals that we have taken into our care. Each of them has its own story, personality and needs. From large animals like horses and cows, through smaller animals like dogs and cats, to birds and others. All are part of our big family.'}
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-green-900 mb-4">
              {language === 'cs' ? 'Jak nám můžete pomoci?' : 'How can you help us?'}
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              {language === 'cs'
                ? 'Existuje mnoho způsobů, jak nám můžete pomoci. Můžete se stát virtuálním patronem jednoho z našich zvířat, přispět finančně, nebo se zapojit do naší komunity. Každá pomoc je pro nás cenná.'
                : 'There are many ways you can help us. You can become a virtual patron of one of our animals, contribute financially, or get involved in our community. Every help is valuable to us.'}
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-green-900 mb-4">
              {language === 'cs' ? 'Kontaktujte nás' : 'Contact Us'}
            </h2>
            <p className="text-gray-700 leading-relaxed">
              {language === 'cs'
                ? 'Máte otázky nebo chcete se dozvědět více? Kontaktujte nás prostřednictvím formuláře na stránce Kontakt nebo nás navštivte na sociálních sítích.'
                : 'Have questions or want to learn more? Contact us through the form on the Contact page or visit us on social media.'}
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
