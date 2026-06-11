export const FORMULA_SHEETS = {
  'spm-physics': {
    name: 'SPM Physics',
    sections: [
      {
        title: 'Forces & Motion',
        formulas: [
          { name: 'Speed', formula: 'v = d / t', note: 'v = speed, d = distance, t = time' },
          { name: 'Acceleration', formula: 'a = (v - u) / t', note: 'u = initial velocity, v = final velocity' },
          { name: "Newton's 2nd Law", formula: 'F = ma', note: 'F = force (N), m = mass (kg), a = acceleration (m/s²)' },
          { name: 'Weight', formula: 'W = mg', note: 'g = 9.81 m/s² (or 10 m/s² for SPM)' },
          { name: 'Kinematic (v²)', formula: 'v² = u² + 2as', note: 's = displacement (m)' },
          { name: 'Momentum', formula: 'p = mv', note: 'Conservation: p₁ = p₂' },
        ],
      },
      {
        title: 'Energy & Work',
        formulas: [
          { name: 'Work', formula: 'W = Fs cos θ', note: 'F = force, s = displacement, θ = angle' },
          { name: 'Kinetic Energy', formula: 'KE = ½mv²', note: '' },
          { name: 'Potential Energy', formula: 'PE = mgh', note: 'h = height above reference' },
          { name: 'Power', formula: 'P = W / t = Fv', note: 'SI unit: Watt (W)' },
          { name: 'Efficiency', formula: 'η = (useful output / total input) × 100%', note: '' },
        ],
      },
      {
        title: 'Pressure',
        formulas: [
          { name: 'Pressure', formula: 'P = F / A', note: 'SI unit: Pascal (Pa = N/m²)' },
          { name: 'Liquid Pressure', formula: 'P = ρgh', note: 'ρ = density, g = 9.81, h = depth' },
          { name: "Boyle's Law", formula: 'P₁V₁ = P₂V₂', note: 'Constant temperature' },
        ],
      },
      {
        title: 'Electricity',
        formulas: [
          { name: "Ohm's Law", formula: 'V = IR', note: 'V = voltage (V), I = current (A), R = resistance (Ω)' },
          { name: 'Power', formula: 'P = IV = I²R = V²/R', note: '' },
          { name: 'Resistors in Series', formula: 'R_total = R₁ + R₂ + ...', note: '' },
          { name: 'Resistors in Parallel', formula: '1/R = 1/R₁ + 1/R₂ + ...', note: '' },
          { name: 'Charge', formula: 'Q = It', note: 'Q = charge (C), I = current, t = time' },
          { name: 'Electrical Energy', formula: 'E = QV = IVt', note: '' },
        ],
      },
      {
        title: 'Waves',
        formulas: [
          { name: 'Wave Speed', formula: 'v = fλ', note: 'f = frequency (Hz), λ = wavelength (m)' },
          { name: 'Period', formula: 'T = 1/f', note: 'T = period (s)' },
          { name: 'Snell\'s Law', formula: 'n₁ sin θ₁ = n₂ sin θ₂', note: 'n = refractive index' },
          { name: 'Refractive Index', formula: 'n = c/v = sin i / sin r', note: 'c = 3×10⁸ m/s' },
        ],
      },
    ],
  },
  'spm-addmath': {
    name: 'SPM Additional Mathematics',
    sections: [
      {
        title: 'Quadratic',
        formulas: [
          { name: 'Quadratic Formula', formula: 'x = (-b ± √(b²-4ac)) / 2a', note: 'For ax² + bx + c = 0' },
          { name: 'Discriminant', formula: 'Δ = b² - 4ac', note: 'Δ > 0: 2 real roots; Δ = 0: 1 root; Δ < 0: no real roots' },
          { name: 'Sum of roots', formula: 'α + β = -b/a', note: '' },
          { name: 'Product of roots', formula: 'αβ = c/a', note: '' },
        ],
      },
      {
        title: 'Calculus',
        formulas: [
          { name: 'Power Rule (diff)', formula: 'd/dx(xⁿ) = nxⁿ⁻¹', note: '' },
          { name: 'Chain Rule', formula: 'dy/dx = (dy/du)(du/dx)', note: '' },
          { name: 'Integration', formula: '∫xⁿ dx = xⁿ⁺¹/(n+1) + C', note: 'n ≠ -1' },
          { name: 'Area under curve', formula: 'A = ∫ₐᵇ f(x) dx', note: '' },
          { name: 'Gradient of tangent', formula: 'dy/dx at x = a', note: '' },
        ],
      },
      {
        title: 'Trigonometry',
        formulas: [
          { name: 'sin rule', formula: 'a/sin A = b/sin B = c/sin C', note: '' },
          { name: 'cos rule', formula: 'a² = b² + c² - 2bc cos A', note: '' },
          { name: 'Area of triangle', formula: 'A = ½ab sin C', note: '' },
          { name: 'Pythagorean identity', formula: 'sin²θ + cos²θ = 1', note: '' },
        ],
      },
      {
        title: 'Statistics',
        formulas: [
          { name: 'Mean', formula: 'x̄ = Σfx / Σf', note: 'For grouped data' },
          { name: 'Standard Deviation', formula: 'σ = √(Σf(x-x̄)² / Σf)', note: '' },
          { name: 'Permutations', formula: 'ⁿPᵣ = n! / (n-r)!', note: '' },
          { name: 'Combinations', formula: 'ⁿCᵣ = n! / (r!(n-r)!)', note: '' },
        ],
      },
    ],
  },
  'al-math': {
    name: 'A-Level Mathematics',
    sections: [
      {
        title: 'Pure — Differentiation',
        formulas: [
          { name: 'Product Rule', formula: 'd/dx(uv) = u(dv/dx) + v(du/dx)', note: '' },
          { name: 'Quotient Rule', formula: 'd/dx(u/v) = (v·du/dx - u·dv/dx) / v²', note: '' },
          { name: 'd/dx(eˣ)', formula: 'eˣ', note: '' },
          { name: 'd/dx(ln x)', formula: '1/x', note: '' },
          { name: 'd/dx(sin x)', formula: 'cos x', note: 'x in radians' },
          { name: 'd/dx(cos x)', formula: '-sin x', note: '' },
        ],
      },
      {
        title: 'Pure — Integration',
        formulas: [
          { name: '∫eˣ dx', formula: 'eˣ + C', note: '' },
          { name: '∫1/x dx', formula: 'ln|x| + C', note: '' },
          { name: '∫sin x dx', formula: '-cos x + C', note: '' },
          { name: '∫cos x dx', formula: 'sin x + C', note: '' },
          { name: 'Integration by parts', formula: '∫u dv = uv - ∫v du', note: '' },
          { name: 'Trapezium rule', formula: 'A ≈ ½h[y₀ + 2(y₁+...+yₙ₋₁) + yₙ]', note: 'h = (b-a)/n' },
        ],
      },
      {
        title: 'Statistics',
        formulas: [
          { name: 'Normal distribution', formula: 'Z = (X - μ) / σ', note: 'Standardisation' },
          { name: 'Binomial P(X=r)', formula: 'ⁿCᵣ × pʳ × (1-p)ⁿ⁻ʳ', note: '' },
          { name: 'E(X) Binomial', formula: 'np', note: '' },
          { name: 'Var(X) Binomial', formula: 'np(1-p)', note: '' },
        ],
      },
    ],
  },
  'al-physics': {
    name: 'A-Level Physics',
    sections: [
      {
        title: 'Mechanics',
        formulas: [
          { name: 'Gravitational PE', formula: 'ΔEₚ = mgΔh', note: '' },
          { name: 'Centripetal accel.', formula: 'a = v²/r = ω²r', note: '' },
          { name: 'Centripetal force', formula: 'F = mv²/r', note: '' },
          { name: "Kepler's 3rd", formula: 'T² ∝ r³', note: 'T²/r³ = 4π²/GM' },
        ],
      },
      {
        title: 'Electricity & Magnetism',
        formulas: [
          { name: 'Capacitor energy', formula: 'E = ½CV² = Q²/2C', note: '' },
          { name: 'Capacitors in series', formula: '1/C = 1/C₁ + 1/C₂', note: '' },
          { name: 'Faraday\'s Law', formula: 'EMF = -N dΦ/dt', note: 'Φ = magnetic flux (Wb)' },
          { name: 'Force on conductor', formula: 'F = BIl sin θ', note: '' },
        ],
      },
      {
        title: 'Quantum & Nuclear',
        formulas: [
          { name: 'Photon energy', formula: 'E = hf = hc/λ', note: 'h = 6.63×10⁻³⁴ J·s' },
          { name: 'de Broglie', formula: 'λ = h/mv = h/p', note: '' },
          { name: 'Radioactive decay', formula: 'N = N₀ e^(-λt)', note: 'λ = decay constant' },
          { name: 'Half-life', formula: 't½ = ln2 / λ = 0.693/λ', note: '' },
          { name: 'Mass-energy', formula: 'E = mc²', note: 'c = 3×10⁸ m/s' },
        ],
      },
    ],
  },
};
