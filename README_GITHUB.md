# Nech mě růst - React Web Application

Moderní React aplikace pro neziskovou organizaci Nech mě růst zaměřenou na péči o zvířata a vytváření harmonického prostředí v souladu s přírodou.

## 🚀 Funkce

- **Bilingvní web** - Čeština a angličtina
- **Responzivní design** - Funguje na všech zařízeních
- **Zvířecí obyvatelé** - 21 zvířat s detailními popisy
- **Virtuální adopce** - Kompletní proces patronátu
- **Kryptoměny** - Přispívání pomocí Bitcoin, Ethereum, Cardano, BNB, Pi Network
- **Registrace na události** - Backend API pro registrace
- **Hamburger menu** - Mobilní navigace
- **Animace a efekty** - Hladké přechody a interakce

## 📋 Požadavky

- Node.js 18+
- pnpm (nebo npm/yarn)

## 🔧 Instalace a spuštění

### 1. Instalace závislostí
```bash
cd nechmerust-react
pnpm install
```

### 2. Spuštění vývojového serveru
```bash
pnpm dev
```

Server bude dostupný na `http://localhost:3000`

### 3. Build pro produkci
```bash
pnpm build
```

Výstup bude v `dist/` adresáři.

## 📁 Struktura projektu

```
nechmerust-react/
├── client/                 # Frontend React aplikace
│   ├── src/
│   │   ├── pages/         # Stránky (Home, Animals, Events, atd.)
│   │   ├── components/    # Reusable komponenty
│   │   ├── contexts/      # React contexts (Language, Theme)
│   │   ├── lib/           # Utility funkce a tRPC klient
│   │   └── App.tsx        # Hlavní komponenta
│   └── index.html
├── server/                # Backend
│   ├── routers.ts         # tRPC procedury
│   ├── db.ts              # Databázové funkce
│   └── _core/             # Framework core
├── drizzle/               # Databázové schéma
│   └── schema.ts
└── package.json
```

## 🎨 Stránky

1. **Domů** - Hero section s informacemi o projektu
2. **O nás** - Detailní popis organizace
3. **Zvířecí obyvatelé** - Galerie 21 zvířat
4. **Virtuální adopce** - Proces a informace o patronátu
5. **Události** - Registrace na akce
6. **Kontakt** - Kontaktní formulář
7. **Přispět kryptem** - 5 kryptoměn s adresami
8. **GDPR** - Ochrana osobních údajů

## 🌐 Jazykový přepínač

Kliknutím na tlačítko **EN/CZ** v navigaci přepínáte mezi jazyky. Volba se ukládá v localStorage.

## 🔐 Technologie

- **Frontend**: React 19, TypeScript, Tailwind CSS
- **Backend**: Express, tRPC
- **Databáze**: MySQL (Drizzle ORM)
- **Autentifikace**: Manus OAuth
- **Build**: Vite

## 📝 Obsah pro úpravu

### Texty a překlady
Všechny texty jsou v komponentách s jazykovou podporou:
```tsx
{language === 'cs' ? 'Český text' : 'English text'}
```

### Zvířata
Upravte seznam zvířat v `client/src/pages/Animals.tsx`

### Kryptoměny
Upravte seznam v `client/src/pages/CryptoDonation.tsx`

### Barvy a styling
Upravte Tailwind konfiguraci v `tailwind.config.js` a CSS proměnné v `client/src/index.css`

## 🚀 Nasazení

Projekt je připraven k nasazení na:
- Vercel
- Netlify
- GitHub Pages
- Vlastní server

## 📞 Kontakt

- Email: info@nechmerust.org
- Instagram: @nech_me_rust
- Facebook: Nech mě růst

## 📄 Licence

© 2025 Nech mě růst z.s. Všechna práva vyhrazena.

---

**Vytvořeno s ❤️ pro přírodou a zvířaty**
