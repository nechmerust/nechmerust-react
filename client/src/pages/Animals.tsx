export default function Animals() {
  const animals = [
    { name: 'Karel', desc: 'Hravý osel s velkým srdcem a lehce kousavou povahou.' },
    { name: 'Yakul', desc: 'Mladý muflon co miluje teplé mléko.' },
    { name: 'Avala', desc: 'Mazlivá kráva, která miluje běhání po louce.' },
    { name: 'Princezna', desc: 'Ušlechtilá černá kříženka divočáka s královskou noblestou.' },
  ];

  return (
    <div className="pt-32">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-green-900 mb-4">Zvířecí obyvatelé</h1>
        <p className="text-lg text-gray-700 mb-12">Poznávejte naše zvířecí přátele, kteří našli na naší Louce svůj domov</p>
        
        <div className="grid md:grid-cols-2 gap-8">
          {animals.map((animal, i) => (
            <div key={i} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
              <div className="w-full h-48 bg-gray-200 rounded-lg mb-4 flex items-center justify-center">
                <img src={`/assets/animal-${i + 1}.webp`} alt={animal.name} className="w-full h-full object-cover rounded-lg" />
              </div>
              <h3 className="text-2xl font-bold text-green-900 mb-2">{animal.name}</h3>
              <p className="text-gray-700 mb-4">{animal.desc}</p>
              <a href="/virtual-adoption" className="inline-block px-4 py-2 bg-green-700 text-white rounded hover:bg-green-800 transition">
                Adoptovat virtuálně
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
