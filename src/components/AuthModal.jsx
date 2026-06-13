import { useState } from 'react';
import { signup, login } from '../utils/auth';

export default function AuthModal({ onClose, onSuccess }) {
  const [mode, setMode] = useState('signup');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  function submit(e) {
    e.preventDefault();
    setError('');
    const result = mode === 'signup' ? signup(email, password) : login(email, password);
    if (result.error) { setError(result.error); return; }
    onSuccess?.();
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/20 backdrop-blur-sm">
      <div className="bg-white rounded-2xl shadow-xl w-full max-w-sm mx-4 p-8">
        <div className="mb-6">
          <h2 className="text-lg font-semibold text-gray-900">
            {mode === 'signup' ? 'Create a free account' : 'Welcome back'}
          </h2>
          <p className="text-sm text-gray-400 mt-1">
            {mode === 'signup' ? 'Sign up to unlock bulk downloads.' : 'Sign in to continue.'}
          </p>
        </div>
        <form onSubmit={submit} className="space-y-3">
          <input
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            placeholder="Email"
            className="w-full border border-gray-200 rounded-lg px-3.5 py-2.5 text-sm outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-50 transition"
          />
          <input
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            placeholder="Password"
            className="w-full border border-gray-200 rounded-lg px-3.5 py-2.5 text-sm outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-50 transition"
          />
          {error && <p className="text-xs text-red-500">{error}</p>}
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white rounded-lg py-2.5 text-sm font-medium transition-colors"
          >
            {mode === 'signup' ? 'Create account' : 'Sign in'}
          </button>
        </form>
        <p className="text-center text-xs text-gray-400 mt-4">
          {mode === 'signup' ? 'Already have an account?' : "Don't have an account?"}{' '}
          <button
            className="text-blue-600 hover:underline"
            onClick={() => { setMode(mode === 'signup' ? 'login' : 'signup'); setError(''); }}
          >
            {mode === 'signup' ? 'Sign in' : 'Sign up'}
          </button>
        </p>
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-300 hover:text-gray-600 transition-colors text-lg"
        >
          ×
        </button>
      </div>
    </div>
  );
}
