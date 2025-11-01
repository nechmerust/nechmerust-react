# Nech mě růst - Uživatelská příručka

## Přehled webu

Váš web Nech mě růst je nyní plně funkční React aplikace s moderním, responzivním designem. Web je přístupný na všech zařízeních (mobilní telefony, tablety, počítače) a je optimalizovaný pro všechny hlavní prohlížeče.

**Účel:** Prezentace neziskové organizace Nech mě růst z.s., která se věnuje péči o zvířata a vytváření harmonického prostředí v souladu s přírodou.

**Přístup:** Veřejný - web je přístupný všem bez nutnosti přihlášení.

---

## Powered by Manus

Váš web je postaven na moderní technologické stack:

- **Frontend:** React 19 + TypeScript + Tailwind CSS 4 - zajišťuje rychlý, interaktivní uživatelský zážitek
- **Backend:** Express 4 + tRPC 11 - bezpečné a typově bezpečné API
- **Databáze:** MySQL/TiDB - spolehlivé ukládání dat registrací na události
- **Autentifikace:** Manus OAuth - integrovaná správa uživatelů
- **Deployment:** Auto-scaling infrastruktura s globální CDN - garantuje rychlost a dostupnost

Všechny komponenty jsou optimalizovány pro výkon a bezpečnost.

---

## Používání vašeho webu

### 1. Procházení stránek

Web obsahuje následující hlavní sekce, kterým se můžete přesunout pomocí navigačního menu v horní části:

- **Domů** - Úvodní stránka s představením projektu a možnostmi podpory
- **O nás** - Více informací o organizaci a jejím poslání
- **Zvířecí obyvatelé** - Galerie zvířat, která se o ně staráte
- **Virtuální adopce** - Možnost stát se patronem zvířete
- **Události** - Seznam akcí a možnost registrace
- **Kontakt** - Kontaktní informace a adresa
- **Přispět kryptem** - Adresy pro příspěvky v kryptoměnách
- **GDPR** - Zásady ochrany osobních údajů

### 2. Registrace na události

Nejdůležitější funkcí je registrace na vaše akce:

1. Klikněte na "Události" v menu
2. Vyberte si událost, která vás zajímá
3. Klikněte na tlačítko "Registrovat"
4. Vyplňte formulář: jméno, email a volitelně poznámku
5. Klikněte "Odeslat registraci"
6. Registrace bude uložena v databázi a potvrzovací zpráva se zobrazí

Všechny registrace se automaticky ukládají do databáze a jsou dostupné v Management UI.

### 3. Jazykový přepínač

V pravém horním rohu naleznete tlačítko "EN" / "CZ" pro přepínání mezi angličtinou a češtinou. Váš výběr se automaticky uloží v prohlížeči.

### 4. Hamburger menu na mobilních zařízeních

Na mobilních zařízeních se menu skryje do ikony hamburger (tři čáry). Klikněte na ni pro otevření/zavření menu.

---

## Správa vašeho webu

Veškerou správu webu provádíte prostřednictvím Management UI v pravém panelu:

### Settings (Nastavení)
- **General:** Změňte název webu a logo
- **Domains:** Spravujte vlastní doménu nebo použijte automaticky vygenerovanou
- **Secrets:** Spravujte citlivé údaje (API klíče, hesla)

### Database (Databáze)
Zde vidíte všechny registrace na vaše události. Můžete si prohlédnout, kdo se registroval, jeho email a poznámky.

### Dashboard (Přehled)
Sledujte statistiky návštěvnosti a výkon vašeho webu.

### Publish (Publikovat)
Jakmile jste spokojeni se změnami, klikněte na "Publish" v horním panelu pro nasazení webu na produkci.

---

## Přidávání obsahu

### Změna textů a informací

Všechny texty na webu jsou uloženy přímo v React komponentách. Chcete-li změnit obsah:

1. Kontaktujte Manus AI s požadavkem na změnu
2. Uveďte, kterou stránku chcete změnit a jaký text
3. AI provede změnu a otestuje ji
4. Po schválení se změna publikuje

### Přidávání obrázků

Web má připravená místa pro obrázky:
- Hero obrázky na jednotlivých stránkách
- Fotografie zvířat v sekci "Zvířecí obyvatelé"
- Loga a ikony

Obrázky se ukládají do S3 úložiště a jsou automaticky optimalizovány.

---

## Další kroky

Pokud chcete:

- **Přidat novou stránku** - Kontaktujte Manus AI
- **Změnit design nebo barvy** - Manus AI může přizpůsobit vzhled
- **Integrovat email notifikace** - Nastavíme odesílání potvrzovacích emailů při registraci
- **Přidat analytics** - Nastavíme sledování návštěvnosti
- **Vytvořit admin panel** - Budete moci spravovat obsah bez technických znalostí

Mluvte s Manus AI kdykoli, když potřebujete změnu nebo novou funkci. Jsme zde, aby váš web fungoval perfektně!

---

## Technické poznámky

- Web je optimalizován pro všechny moderní prohlížeče (Chrome, Firefox, Safari, Edge)
- Všechny údaje jsou šifrovány a bezpečně uloženy
- Web je mobilní-first a plně responzivní
- Registrace na události jsou automaticky validovány a uloženy v databázi
- Všechny změny se automaticky nasazují na produkci
