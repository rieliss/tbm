export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-100 py-6 px-4">
      <div className="container mx-auto max-w-5xl text-center text-gray-600 text-sm">
        <p>© {currentYear} Alexander Alexiev. All rights reserved.</p>
      </div>
    </footer>
  );
}
