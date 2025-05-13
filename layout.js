import './globals.css';
import Link from 'next/link';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-900 text-gray-100 flex flex-col min-h-screen">
        <header className="bg-gray-800 shadow-md">
          <nav className="container mx-auto px-6 py-3 flex justify-between items-center">
            <Link href="/" className="text-2xl font-bold text-blue-400 hover:text-blue-300">
              P2P LendCo
            </Link>
            <div className="space-x-4">
              <Link href="/loans/apply" className="nav-link">
                Apply for Loan
              </Link>
              <Link href="/lender/preferences" className="nav-link">
                Lender Hub
              </Link>
              <Link href="/login" className="nav-link">
                Login
              </Link>
              <Link href="/register" className="btn-primary">
                Get Started
              </Link>
            </div>
          </nav>
        </header>
        <main className="flex-grow container mx-auto px-6 py-8">
          {children}
        </main>
        <footer className="bg-gray-800 text-gray-400 py-8 text-center">
          <p>&copy; {new Date().getFullYear()} P2P LendCo. All rights reserved.</p>
          <p className="text-sm">Inspired by modern lending platforms.</p>
        </footer>
      </body>
    </html>
  );
}

