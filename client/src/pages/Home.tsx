export default function Home() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center bg-gradient-to-br from-green-50 to-white">
        <div className="max-w-6xl mx-auto px-4 py-20 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-green-900 mb-6">
              Tvoříme prostor pro růst duše, srdce i přírody
            </h1>
            <p className="text-lg text-gray-700 mb-8">
              Nech Mě Růst z.s. je nezisková organizace s vizí tvorby rodového statku, kde žijeme v harmonii s přírodou, zvířaty i sebou navzájem
            </p>
            <div className="flex gap-4">
              <a href="/about" className="px-6 py-3 bg-green-700 text-white rounded-lg hover:bg-green-800 transition">
                Více o nás
              </a>
              <a href="/events" className="px-6 py-3 border-2 border-green-700 text-green-700 rounded-lg hover:bg-green-50 transition">
                Akce a události
              </a>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="w-64 h-64 bg-green-200 rounded-full flex items-center justify-center">
              <img src="/assets/logo-circle.png" alt="Logo" className="w-full h-full object-cover rounded-full" />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-green-900 mb-12">O projektu</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-4 text-gray-700">
              <p>
                Na Louce žijí zvířata, která jsme přijali do péče, a která u nás nacházejí bezpečný domov, dostatek krmiva a čisté, teplé místo k odpočinku. Každé zvíře má svůj příběh a my se snažíme zajistit jim co nejlepší život.
              </p>
              <p>
                Věříme, že způsob, jakým žijeme a jak zacházíme se světem kolem nás, má hluboký dopad na naše blaho i na zdraví celé planety. Proto se snažíme žít vědomě, s úctou k tradičním hodnotám, ale i s otevřeností k novým, udržitelným přístupům.
              </p>
              <p>
                Naším posláním je nejen vytvářet takové prostředí pro nás samotné, ale také inspirovat ostatní, sdílet naše zkušenosti a znalosti, a tím přispívat k širší společenské transformaci směrem k harmoničtějšímu vztahu s naším prostředím.
              </p>
            </div>
            <div className="bg-gray-200 rounded-lg h-96 flex items-center justify-center">
              <img src="/assets/about-image.webp" alt="O nás" className="w-full h-full object-cover rounded-lg" />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-green-900 mb-12">Naše hodnoty</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { icon: '❤️', title: 'Péče o zvířata', desc: 'Poskytování bezpečného a láskyplného domova pro zvířata' },
              { icon: '🌱', title: 'Soběstačnost', desc: 'Aktivní usilování o udržitelný a soběstačný způsob života' },
              { icon: '👥', title: 'Komunita', desc: 'Budování silné a podporující komunity kolem naší Louky' },
              { icon: '🍃', title: 'Soulad s přírodou', desc: 'Láskyplné propojení s přírodou a cesta života v jejím rytmu' },
            ].map((value, i) => (
              <div key={i} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-lg font-bold text-green-900 mb-2">{value.title}</h3>
                <p className="text-gray-600 text-sm">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Support Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-green-900 mb-12">Jak se zapojit?</h2>
          <p className="text-center text-gray-700 mb-8 max-w-2xl mx-auto">
            Existuje několik způsobů, jak nás můžete podpořit. Provoz Louky a péče o zvířata vyžaduje nemalé úsilí a finanční prostředky. Číslo našeho transparentního účtu je:
          </p>
          <div className="bg-green-50 p-8 rounded-lg mb-8 text-center">
            <p className="text-lg font-mono font-bold text-green-900">CZ49 2010 2002 6400 0000 5872</p>
            <p className="text-sm text-gray-600 mt-2">SWIFT: FIOBCZPP</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { label: 'Virtuální adopce', href: '/virtual-adoption' },
              { label: 'Přispět kryptem', href: '/crypto-donation' },
              { label: 'Přispět na darujme.cz', href: 'https://www.darujme.cz/projekt/1208852', external: true },
              { label: 'Nákup na nakrmnas.cz', href: 'https://www.nakrmnas.cz/nech-me-rust', external: true },
              { label: 'Naplň misku zdarma', href: 'https://clickandfeed.cz', external: true },
            ].map((btn, i) => (
              <a
                key={i}
                href={btn.href}
                target={btn.external ? '_blank' : undefined}
                rel={btn.external ? 'noopener noreferrer' : undefined}
                className="px-4 py-3 bg-green-700 text-white rounded-lg hover:bg-green-800 transition text-center"
              >
                {btn.label}
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
