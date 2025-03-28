// pages/index.tsx

const cities = [
  {
    name: "Dakar",
    specialty: "Sport wear et active wear",
    population: "3,650,000",
    production: "7,000,000 unités",
    directJobs: "5,000",
    indirectJobs: "5,000",
  },
  {
    name: "Thiès",
    specialty: "Costumes et tenues traditionnelles",
    population: "2,000,000",
    production: "2,700,000 unités",
    directJobs: "4,000",
    indirectJobs: "4,000",
  },
  {
    name: "Saint-Louis",
    specialty: "Uniformes (armée, police, etc.) + coton brut",
    population: "1,000,000",
    production: "2,300,000 unités",
    directJobs: "5,000",
    indirectJobs: "5,000",
  },
  {
    name: "Matam",
    specialty: "Robes, boubous, tenues de soirée",
    population: "700,000",
    production: "900,000 unités",
    directJobs: "1,300",
    indirectJobs: "1,300",
  },
  {
    name: "Fatick",
    specialty: "Vêtements pour enfants et layette",
    population: "850,000",
    production: "1,400,000 unités",
    directJobs: "1,000",
    indirectJobs: "1,000",
  },
  {
    name: "Louga",
    specialty: "Chemises pour tous",
    population: "1,000,000",
    production: "2,700,000 unités",
    directJobs: "2,000",
    indirectJobs: "2,000",
  },
  {
    name: "Diourbel",
    specialty: "Tenues professionnelles",
    population: "1,750,000",
    production: "1,150,000 unités",
    directJobs: "2,500",
    indirectJobs: "5,000",
  },
  {
    name: "Kaolack-Kaffrine",
    specialty: "Maille fine (jersey, molleton...)",
    population: "1,800,000",
    production: "6,500,000 unités",
    directJobs: "2,000",
    indirectJobs: "4,000",
  },
  {
    name: "Ziguinchor",
    specialty: "Pantalons pour toute la famille",
    population: "650,000",
    production: "1,800,000 unités",
    directJobs: "1,200",
    indirectJobs: "2,400",
  },
  {
    name: "Sédhiou",
    specialty: "Tenues de sport",
    population: "500,000",
    production: "1,000,000 unités",
    directJobs: "750",
    indirectJobs: "1,500",
  },
  {
    name: "Kolda",
    specialty: "Lingerie et maillots",
    population: "750,000",
    production: "700,000 unités",
    directJobs: "1,000",
    indirectJobs: "2,000",
  },
  {
    name: "Kédougou",
    specialty: "Linge de maison",
    population: "180,000",
    production: "1,400,000 unités",
    directJobs: "500",
    indirectJobs: "1,000",
  },
  {
    name: "Tambacounda",
    specialty: "Tenues médicales",
    population: "800,000",
    production: "3,000,000 unités",
    directJobs: "2,400",
    indirectJobs: "4,800",
  },
];

export default function Home() {
  return (
    <div className="bg-white text-gray-800 font-sans">
      <header className="p-6 border-b">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
          <h1 className="text-2xl font-bold">SEKOOX</h1>
          <p className="text-sm text-gray-500">L'industrie textile décentralisée du Sénégal</p>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 py-6 space-y-16">
        <section>
          <h2 className="text-xl font-semibold mb-2">Notre Vision</h2>
          <p>
            SEKOOX est le cœur stratégique de l’industrie textile du Sénégal, basé à Dakar. Il
            centralise la formation, la décision et la stratégie, tandis que la production est
            décentralisée dans 12 villes à travers le pays, chacune ayant une spécialisation unique.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">Avantages de la décentralisation</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Économiques : réduction des coûts, développement régional, diversification des risques</li>
            <li>Sociaux : emploi local, cohésion sociale, réduction des migrations internes</li>
            <li>Technologiques : innovation locale, transfert de savoir-faire</li>
            <li>Politiques : décentralisation du pouvoir économique, développement régional</li>
            <li>Environnementaux : réduction du CO₂, valorisation des ressources locales</li>
            <li>Infrastructurels : amélioration des services de base, infrastructures modernes</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-4">Les 12 villes de production</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {cities.map((city, index) => (
              <div key={index} className="border rounded-xl p-4 shadow">
                <h3 className="text-lg font-bold mb-1">{city.name}</h3>
                <p><strong>Spécialité :</strong> {city.specialty}</p>
                <p><strong>Population :</strong> {city.population}</p>
                <p><strong>Production annuelle :</strong> {city.production}</p>
                <p><strong>Emplois directs :</strong> {city.directJobs}</p>
                <p><strong>Emplois indirects :</strong> {city.indirectJobs}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="text-center">
          <h2 className="text-xl font-semibold mb-4">Rejoindre la Vision SEKOOX</h2>
          <p className="mb-4 max-w-2xl mx-auto">
            Ensemble, transformons l'industrie textile sénégalaise. Rejoignez SEKOOX pour une croissance partagée, durable et innovante.
          </p>
          <button className="bg-black text-white px-6 py-3 rounded-lg text-lg hover:bg-gray-800 transition">
            Je rejoins la vision
          </button>
        </section>
      </main>
    </div>
  );
}
