const KEY = 'alevel_user';

export function getUser() {
  try { return JSON.parse(localStorage.getItem(KEY)); } catch { return null; }
}

export function signup(email, password) {
  if (!email || !password) return { error: 'Email and password are required.' };
  if (password.length < 6) return { error: 'Password must be at least 6 characters.' };
  const user = { email, createdAt: Date.now() };
  localStorage.setItem(KEY, JSON.stringify(user));
  return { user };
}

export function login(email, password) {
  if (!email || !password) return { error: 'Email and password are required.' };
  // Lookup stored user by email
  const stored = getUser();
  if (!stored || stored.email !== email) return { error: 'No account found for this email.' };
  // For this static demo we can't verify password - trust localStorage session
  return { user: stored };
}

export function logout() {
  localStorage.removeItem(KEY);
}
