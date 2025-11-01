export default function About() {
  return (
    <div className="pt-32">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-green-900 mb-8">O nás</h1>
        
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-green-800 mb-4">Náš příběh a vize</h2>
          <p className="text-gray-700 mb-4">
            Jsme spolek nadšenců, kteří věří v harmoničtější soužití s přírodou a zvířaty. Pojďte se s námi seznámit.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-green-800 mb-4">Naše poslání</h2>
          <p className="text-gray-700 mb-4">
            Jsme samosprávná, dobrovolná a nepolitická nezisková organizace, jejímž hlavním cílem je pomáhat všem zvířatům. Usilujeme o osvětu v oblasti právní ochrany zvířat a aktivně chráníme životní prostředí. Naší vizí je vytvořit rodový statek, kde lidé, zvířata a příroda žijí ve vzájemné harmonii.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-green-800 mb-4">Kontakt</h2>
          <p className="text-gray-700">
            Adresa: Nová ves u Leštiny, 358 82 Česká Republika<br/>
            Email: <a href="mailto:info@nechmerust.org" className="text-green-700 hover:underline">info@nechmerust.org</a>
          </p>
        </section>
      </div>
    </div>
  );
}
