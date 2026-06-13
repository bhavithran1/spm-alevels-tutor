import { useState } from 'react';
import { getUser, logout } from '../utils/auth';
import AuthModal from './AuthModal';

export default function Header({ onAuthChange }) {
  const user = getUser();
  const [showAuth, setShowAuth] = useState(false);

  function handleLogout() {
    logout();
    onAuthChange?.();
  }

  return (
    <>
      <header className="sticky top-0 z-30 bg-white border-b border-gray-100">
        <div className="max-w-5xl mx-auto px-5 h-14 flex items-center justify-between">
          <a href="/" className="flex items-center gap-2.5 group">
            <div className="w-7 h-7 rounded bg-blue-600 flex items-center justify-center">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3 12L8 4L13 12H3Z" fill="white" />
              </svg>
            </div>
            <span className="font-semibold text-gray-900 text-sm tracking-tight">A-Level Papers</span>
          </a>
          <nav className="flex items-center gap-6">
            <a href="#papers" className="text-sm text-gray-500 hover:text-gray-900 transition-colors">Papers</a>
            <a href="#about" className="text-sm text-gray-500 hover:text-gray-900 transition-colors">About</a>
            {user ? (
              <div className="flex items-center gap-3">
                <span className="text-xs text-gray-400">{user.email}</span>
                <button
                  onClick={handleLogout}
                  className="text-sm text-gray-500 hover:text-gray-900 transition-colors"
                >
                  Sign out
                </button>
              </div>
            ) : (
              <button
                onClick={() => setShowAuth(true)}
                className="text-sm bg-blue-600 hover:bg-blue-700 text-white px-4 py-1.5 rounded-full transition-colors font-medium"
              >
                Sign in
              </button>
            )}
          </nav>
        </div>
      </header>
      {showAuth && (
        <AuthModal
          onClose={() => setShowAuth(false)}
          onSuccess={() => { setShowAuth(false); onAuthChange?.(); }}
        />
      )}
    </>
  );
}
