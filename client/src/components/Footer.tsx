export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-100 border-t border-gray-200 mt-16">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="text-center text-gray-600 text-sm">
          <p>© {currentYear} Nech mě růst z.s. Všechna práva vyhrazena. • Napsáno s láskou k přírodě a zvířatům.</p>
        </div>
        <div className="flex justify-center gap-6 mt-4">
          <a href="https://www.instagram.com/nech_me_rust" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-pink-600">
            Instagram
          </a>
          <a href="https://www.facebook.com/share/1BDFbAxfFf/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600">
            Facebook
          </a>
          <a href="mailto:info@nechmerust.org" className="text-gray-600 hover:text-green-700">
            Email
          </a>
          <a href="/privacy" className="text-gray-600 hover:text-green-700">
            GDPR
          </a>
        </div>
      </div>
    </footer>
  );
}
