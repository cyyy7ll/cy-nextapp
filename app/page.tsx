import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Navigation */}
      <nav className="flex items-center justify-between px-8 py-4 bg-white border-b border-zinc-200 dark:bg-zinc-950 dark:border-zinc-800">
        <div className="text-xl font-bold text-zinc-900 dark:text-zinc-50">
          MyApp
        </div>
        <div className="flex items-center gap-4">
          <Link 
            href="/login"
            className="px-4 py-2 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-50 transition-colors"
          >
            Login
          </Link>
          <Link 
            href="/signup"
            className="px-4 py-2 bg-zinc-900 text-white rounded-lg hover:bg-zinc-700 dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-200 transition-colors"
          >
            Sign Up
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="flex-1 flex flex-col items-center justify-center px-8 py-20 bg-zinc-50 dark:bg-black">
        <div className="max-w-3xl text-center">
          <h1 className="text-5xl font-bold text-zinc-900 dark:text-zinc-50 mb-6 leading-tight">
            Build Something Amazing Today
          </h1>
          <p className="text-xl text-zinc-600 dark:text-zinc-400 mb-10 leading-relaxed">
            Get started with our powerful platform. Create an account to unlock 
            full access to all features and tools.
          </p>
          <div className="flex gap-4 justify-center">
            <Link 
              href="/signup"
              className="px-6 py-3 bg-zinc-900 text-white rounded-lg font-medium hover:bg-zinc-700 dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-200 transition-colors"
            >
              Get Started
            </Link>
            <Link 
              href="/login"
              className="px-6 py-3 border border-zinc-300 text-zinc-700 rounded-lg font-medium hover:bg-zinc-100 dark:border-zinc-700 dark:text-zinc-300 dark:hover:bg-zinc-800 transition-colors"
            >
              Sign In
            </Link>
          </div>
        </div>

        {/* Features */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl">
          <div className="p-6 bg-white dark:bg-zinc-900 rounded-xl border border-zinc-200 dark:border-zinc-800">
            <div className="text-2xl mb-3">🚀</div>
            <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50 mb-2">
              Fast Performance
            </h3>
            <p className="text-zinc-600 dark:text-zinc-400">
              Lightning fast speed with optimized code and modern architecture.
            </p>
          </div>
          <div className="p-6 bg-white dark:bg-zinc-900 rounded-xl border border-zinc-200 dark:border-zinc-800">
            <div className="text-2xl mb-3">🔒</div>
            <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50 mb-2">
              Secure
            </h3>
            <p className="text-zinc-600 dark:text-zinc-400">
              Your data is protected with enterprise-grade security.
            </p>
          </div>
          <div className="p-6 bg-white dark:bg-zinc-900 rounded-xl border border-zinc-200 dark:border-zinc-800">
            <div className="text-2xl mb-3">💎</div>
            <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50 mb-2">
              Reliable
            </h3>
            <p className="text-zinc-600 dark:text-zinc-400">
              99.9% uptime with robust infrastructure you can trust.
            </p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="px-8 py-6 bg-white border-t border-zinc-200 dark:bg-zinc-950 dark:border-zinc-800">
        <div className="text-center text-zinc-500 dark:text-zinc-400">
          © 2026 MyApp. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
        </div>
      </main>
    </div>
  );
}
