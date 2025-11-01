export default function Contact() {
  return (
    <div className="pt-32">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-green-900 mb-8">Kontakt</h1>
        
        <div className="grid md:grid-cols-2 gap-12">
          <section>
            <h2 className="text-2xl font-bold text-green-800 mb-4">Spojte se s námi</h2>
            <div className="space-y-6">
              <div>
                <h3 className="font-bold text-green-900 mb-2">Adresa</h3>
                <p className="text-gray-700">
                  Nová ves u Leštiny<br/>
                  358 82 Česká Republika
                </p>
              </div>
              <div>
                <h3 className="font-bold text-green-900 mb-2">Email</h3>
                <a href="mailto:info@nechmerust.org" className="text-green-700 hover:underline">
                  info@nechmerust.org
                </a>
              </div>
              <div>
                <h3 className="font-bold text-green-900 mb-2">Návštěvy</h3>
                <p className="text-gray-700">
                  Po domluvě. Kontaktujte nás 48h předem.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-green-800 mb-4">Plánujete návštěvu?</h2>
            <p className="text-gray-700">
              Rádi vítáme návštěvníky na naší Louce! Kontaktujte nás prosím alespoň 48 hodin předem a domluvte si termín návštěvy. Pomůže nám to zajistit, aby se zvířata cítila dobře a abychom vám mohli poskytnout co nejlepší zážitek.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
