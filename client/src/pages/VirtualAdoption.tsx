export default function VirtualAdoption() {
  return (
    <div className="pt-32">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-green-900 mb-8">Virtuální adopce</h1>
        
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-green-800 mb-4">Staňte se patronem zvířete</h2>
          <p className="text-gray-700 mb-4">
            Pokud jste si vždy přáli mít doma například krávu či ovce, ale okolnosti vám to nedovolily, patronát představuje ideální příležitost, jak si alespoň částečně splnit tento sen. Věříme, že sny se mají plnit, a to nejen o Vánocích.
          </p>
          <p className="text-gray-700">
            Jako patron budete mít možnost kdykoli navštívit zvíře, vzít ho na procházku nebo se s ním pomazlit.
          </p>
        </section>

        <div className="bg-green-50 p-8 rounded-lg">
          <h3 className="text-xl font-bold text-green-900 mb-4">Jak se stát patronem?</h3>
          <ol className="list-decimal list-inside space-y-2 text-gray-700">
            <li>Vyberte si zvíře, které se vám líbí</li>
            <li>Kontaktujte nás na info@nechmerust.org</li>
            <li>Domluvte si podmínky patronátu</li>
            <li>Navštěvujte své zvíře a sledujte jeho pokrok</li>
          </ol>
        </div>
      </div>
    </div>
  );
}
