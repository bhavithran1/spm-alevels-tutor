// SPM and A-Level curriculum data with topics and practice questions

export const LEVELS = {
  spm: {
    label: 'SPM',
    description: 'Sijil Pelajaran Malaysia (Form 4 & 5)',
    color: '#0ea5e9',
  },
  alevels: {
    label: 'A-Levels',
    description: 'Advanced Level (AS & A2)',
    color: '#8b5cf6',
  },
};

export const SUBJECTS = {
  spm: [
    {
      id: 'spm-math', name: 'Mathematics', icon: '📐', topics: [
        'Numbers and Operations', 'Patterns and Sequences', 'Fractions, Decimals, Percentages',
        'Ratios and Proportions', 'Algebra', 'Linear Equations', 'Quadratic Expressions',
        'Sets', 'Geometry', 'Pythagoras Theorem', 'Coordinate Geometry', 'Statistics',
        'Probability', 'Trigonometry', 'Matrices', 'Vectors',
      ],
    },
    {
      id: 'spm-addmath', name: 'Additional Mathematics', icon: '📊', topics: [
        'Functions', 'Quadratic Functions', 'Systems of Equations', 'Indices & Logarithms',
        'Progressions', 'Linear Law', 'Coordinate Geometry', 'Vectors', 'Trigonometric Functions',
        'Permutations & Combinations', 'Probability Distributions', 'Calculus (Differentiation)',
        'Calculus (Integration)', 'Kinematics',
      ],
    },
    {
      id: 'spm-physics', name: 'Physics', icon: '⚡', topics: [
        'Measurement', 'Forces & Motion', 'Gravity', 'Pressure', 'Heat', 'Light',
        'Waves', 'Electricity', 'Electromagnetism', 'Nuclear Physics', 'Electronics',
      ],
    },
    {
      id: 'spm-chemistry', name: 'Chemistry', icon: '⚗️', topics: [
        'Matter', 'Atomic Structure', 'Chemical Formulae', 'Periodic Table',
        'Chemical Bonds', 'Electrochemistry', 'Acids, Bases and Salts',
        'Manufactured Substances', 'Carbon Compounds', 'Rate of Reaction',
        'Oxidation and Reduction', 'Thermochemistry',
      ],
    },
    {
      id: 'spm-biology', name: 'Biology', icon: '🧬', topics: [
        'Cell Structure', 'Cell Division', 'Nutrition', 'Respiration',
        'Transport', 'Coordination', 'Reproduction', 'Growth', 'Inheritance',
        'Variation', 'Ecosystem', 'Microorganisms', 'Biotechnology',
      ],
    },
    {
      id: 'spm-english', name: 'English', icon: '📝', topics: [
        'Grammar', 'Vocabulary', 'Reading Comprehension', 'Essay Writing',
        'Summary Writing', 'Literature (Poems)', 'Literature (Short Stories)',
        'Literature (Novels)', 'Directed Writing', 'Continuous Writing',
      ],
    },
    {
      id: 'spm-bm', name: 'Bahasa Malaysia', icon: '🇲🇾', topics: [
        'Tatabahasa', 'Kosa Kata', 'Pemahaman', 'Rumusan',
        'Karangan Berformat', 'Karangan Berkelanjutan', 'Kesusasteraan',
      ],
    },
  ],
  alevels: [
    {
      id: 'al-math', name: 'Mathematics', icon: '📐', topics: [
        'Pure 1: Algebra', 'Pure 1: Coordinate Geometry', 'Pure 1: Sequences',
        'Pure 1: Trigonometry', 'Pure 1: Calculus', 'Pure 2: Algebra & Functions',
        'Pure 2: Further Calculus', 'Pure 2: Trigonometry', 'Pure 2: Differential Equations',
        'Statistics: Probability', 'Statistics: Distributions', 'Statistics: Hypothesis Testing',
        'Mechanics: Kinematics', 'Mechanics: Forces', 'Mechanics: Moments',
      ],
    },
    {
      id: 'al-physics', name: 'Physics', icon: '⚡', topics: [
        'Physical Quantities', 'Kinematics', 'Dynamics', 'Forces', 'Work & Energy',
        'Momentum', 'Matter & Materials', 'Waves', 'Superposition', 'Electric Fields',
        'Current Electricity', 'Capacitance', 'Magnetic Fields', 'Electromagnetic Induction',
        'Alternating Currents', 'Quantum Physics', 'Nuclear Physics', 'Astronomy',
      ],
    },
    {
      id: 'al-chemistry', name: 'Chemistry', icon: '⚗️', topics: [
        'Atomic Structure', 'Chemical Bonding', 'Periodicity', 'Chemical Energetics',
        'Electrochemistry', 'Equilibria', 'Reaction Kinetics', 'Organic Chemistry: Alkanes',
        'Organic Chemistry: Alkenes', 'Organic Chemistry: Halogenoalkanes',
        'Organic Chemistry: Alcohols', 'Organic Chemistry: Carbonyl Compounds',
        'Organic Chemistry: Carboxylic Acids', 'Analytical Techniques',
      ],
    },
    {
      id: 'al-biology', name: 'Biology', icon: '🧬', topics: [
        'Cell Structure', 'Biological Molecules', 'Enzymes', 'Cell Membranes',
        'Cell Division', 'Nucleic Acids', 'Protein Synthesis', 'Genetic Information',
        'Transport in Plants', 'Transport in Animals', 'Immunity', 'Gas Exchange',
        'Excretion', 'Hormones', 'Nervous System', 'Muscles', 'Homeostasis',
        'Photosynthesis', 'Respiration', 'Genetics', 'Ecology', 'Evolution',
      ],
    },
    {
      id: 'al-economics', name: 'Economics', icon: '📈', topics: [
        'Demand & Supply', 'Elasticity', 'Market Structures', 'Market Failure',
        'Government Intervention', 'National Income', 'Money & Banking',
        'Unemployment', 'Inflation', 'International Trade', 'Balance of Payments',
        'Development Economics',
      ],
    },
  ],
};

export const QUESTION_BANK = {
  'spm-math': [
    {
      id: 'spm-math-1', topic: 'Quadratic Expressions', difficulty: 'medium',
      question: 'Solve the quadratic equation 2x² + 5x − 3 = 0.',
      type: 'short-answer',
      answer: 'x = 1/2 or x = −3',
      explanation: 'Using the quadratic formula: x = (−5 ± √(25 + 24)) / 4 = (−5 ± 7) / 4. So x = 2/4 = 1/2 or x = −12/4 = −3.',
      marks: 3,
    },
    {
      id: 'spm-math-2', topic: 'Probability', difficulty: 'easy',
      question: 'A bag contains 5 red balls and 3 blue balls. A ball is picked at random. What is the probability of picking a blue ball?',
      type: 'mcq',
      options: ['3/8', '5/8', '3/5', '1/3'],
      answer: '3/8',
      explanation: 'Probability = Number of blue balls / Total balls = 3 / (5+3) = 3/8',
      marks: 2,
    },
    {
      id: 'spm-math-3', topic: 'Geometry', difficulty: 'medium',
      question: 'A right-angled triangle has legs of length 6 cm and 8 cm. Find the length of the hypotenuse.',
      type: 'short-answer',
      answer: '10 cm',
      explanation: 'Using Pythagoras theorem: hypotenuse² = 6² + 8² = 36 + 64 = 100. Therefore hypotenuse = 10 cm.',
      marks: 3,
    },
    {
      id: 'spm-math-4', topic: 'Statistics', difficulty: 'easy',
      question: 'The marks scored by 5 students are: 60, 75, 80, 55, 90. Calculate the mean mark.',
      type: 'short-answer',
      answer: '72',
      explanation: 'Mean = Sum / Count = (60+75+80+55+90) / 5 = 360 / 5 = 72',
      marks: 2,
    },
    {
      id: 'spm-math-5', topic: 'Algebra', difficulty: 'hard',
      question: 'Simplify: (3x²y³)² ÷ (9x³y²)',
      type: 'short-answer',
      answer: 'xy⁴',
      explanation: 'Numerator: (3x²y³)² = 9x⁴y⁶. Dividing: 9x⁴y⁶ ÷ 9x³y² = x^(4-3) · y^(6-2) = xy⁴',
      marks: 4,
    },
  ],
  'spm-physics': [
    {
      id: 'spm-phy-1', topic: 'Forces & Motion', difficulty: 'medium',
      question: 'A car travels 120 km in 2 hours. Calculate its average speed in m/s.',
      type: 'short-answer',
      answer: '16.67 m/s',
      explanation: 'Speed = Distance / Time = 120,000 m / 7200 s = 16.67 m/s',
      marks: 3,
    },
    {
      id: 'spm-phy-2', topic: 'Pressure', difficulty: 'easy',
      question: 'Which of the following correctly defines pressure?',
      type: 'mcq',
      options: ['Force × Area', 'Force / Area', 'Area / Force', 'Mass × Acceleration'],
      answer: 'Force / Area',
      explanation: 'Pressure = Force / Area. The SI unit is Pascal (Pa) = N/m²',
      marks: 1,
    },
    {
      id: 'spm-phy-3', topic: 'Electricity', difficulty: 'medium',
      question: 'A resistor of 4Ω is connected to a 12V battery. Calculate the current flowing through it.',
      type: 'short-answer',
      answer: '3 A',
      explanation: 'Using Ohm\'s Law: I = V/R = 12/4 = 3 A',
      marks: 3,
    },
  ],
  'spm-chemistry': [
    {
      id: 'spm-chem-1', topic: 'Atomic Structure', difficulty: 'easy',
      question: 'An element has atomic number 11 and mass number 23. How many neutrons does it have?',
      type: 'short-answer',
      answer: '12',
      explanation: 'Neutrons = Mass number − Atomic number = 23 − 11 = 12',
      marks: 2,
    },
    {
      id: 'spm-chem-2', topic: 'Acids, Bases and Salts', difficulty: 'medium',
      question: 'What is the product when hydrochloric acid reacts with sodium hydroxide?',
      type: 'mcq',
      options: ['NaCl + H₂O', 'NaOH + HCl', 'Na₂O + H₂O', 'NaH + Cl₂'],
      answer: 'NaCl + H₂O',
      explanation: 'HCl + NaOH → NaCl + H₂O. This is a neutralization reaction producing salt and water.',
      marks: 2,
    },
  ],
  'al-math': [
    {
      id: 'al-math-1', topic: 'Pure 1: Calculus', difficulty: 'medium',
      question: 'Differentiate y = 3x⁴ − 2x³ + 5x − 7 with respect to x.',
      type: 'short-answer',
      answer: 'dy/dx = 12x³ − 6x² + 5',
      explanation: 'Apply the power rule to each term: d/dx(3x⁴) = 12x³, d/dx(−2x³) = −6x², d/dx(5x) = 5, d/dx(−7) = 0.',
      marks: 3,
    },
    {
      id: 'al-math-2', topic: 'Statistics: Probability', difficulty: 'hard',
      question: 'Given P(A) = 0.4, P(B) = 0.3, and A and B are independent, find P(A ∪ B).',
      type: 'short-answer',
      answer: '0.58',
      explanation: 'P(A ∩ B) = P(A)×P(B) = 0.12 (independent). P(A∪B) = P(A)+P(B)−P(A∩B) = 0.4+0.3−0.12 = 0.58',
      marks: 4,
    },
  ],
  'al-physics': [
    {
      id: 'al-phy-1', topic: 'Quantum Physics', difficulty: 'hard',
      question: 'Calculate the de Broglie wavelength of an electron travelling at 2×10⁶ m/s. (mₑ = 9.11×10⁻³¹ kg, h = 6.63×10⁻³⁴ J·s)',
      type: 'short-answer',
      answer: '3.64 × 10⁻¹⁰ m',
      explanation: 'λ = h/(mv) = 6.63×10⁻³⁴ / (9.11×10⁻³¹ × 2×10⁶) = 6.63×10⁻³⁴ / 1.822×10⁻²⁴ = 3.64×10⁻¹⁰ m',
      marks: 4,
    },
    {
      id: 'al-phy-2', topic: 'Kinematics', difficulty: 'medium',
      question: 'A ball is thrown vertically upward at 20 m/s. Calculate the maximum height reached. (g = 10 m/s²)',
      type: 'short-answer',
      answer: '20 m',
      explanation: 'Using v² = u² − 2gh: at max height, v = 0. 0 = 400 − 20h, so h = 400/20 = 20 m',
      marks: 3,
    },
  ],
  'al-chemistry': [
    {
      id: 'al-chem-1', topic: 'Equilibria', difficulty: 'medium',
      question: 'State Le Chatelier\'s principle and explain what happens to the equilibrium N₂ + 3H₂ ⇌ 2NH₃ when pressure is increased.',
      type: 'short-answer',
      answer: 'Equilibrium shifts right (towards fewer moles of gas) to produce more NH₃.',
      explanation: 'Le Chatelier: a system at equilibrium shifts to oppose the applied change. Increasing pressure favours the side with fewer gas moles (right side: 2 moles vs left: 4 moles).',
      marks: 4,
    },
  ],
};

export const RESOURCES = [
  // SPM Resources
  { level: 'spm', subject: 'all', title: 'KPM Past Year Papers', url: 'https://www.moe.gov.my', type: 'official', icon: '🏛️', desc: 'Official Ministry of Education past papers' },
  { level: 'spm', subject: 'all', title: 'Nota Ringkas SPM', url: 'https://cikgurozaini.blogspot.com', type: 'notes', icon: '📓', desc: 'Popular free SPM notes blog' },
  { level: 'spm', subject: 'spm-math', title: 'SPM Math Past Papers', url: 'https://www.afterschool.my/spm-past-year-papers', type: 'papers', icon: '📋', desc: 'Complete past year papers with answers' },
  { level: 'spm', subject: 'spm-addmath', title: 'Add Math Formula Sheet', url: 'https://www.moe.gov.my', type: 'reference', icon: '📐', desc: 'Official SPM Additional Mathematics formula list' },
  { level: 'spm', subject: 'all', title: 'ClickView SPM Video Lessons', url: 'https://www.clickview.com.my', type: 'video', icon: '🎬', desc: 'Video lessons by Malaysian teachers' },
  { level: 'spm', subject: 'all', title: 'Khan Academy (Malay support)', url: 'https://ms.khanacademy.org', type: 'platform', icon: '🎓', desc: 'Free practice with progress tracking' },
  // A-Level Resources
  { level: 'alevels', subject: 'all', title: 'Cambridge Past Papers', url: 'https://pastpapers.papacambridge.com', type: 'papers', icon: '📋', desc: 'CIE/Cambridge past papers 2000–present' },
  { level: 'alevels', subject: 'all', title: 'Edexcel Past Papers', url: 'https://www.physicsandmathstutor.com', type: 'papers', icon: '📋', desc: 'PMT — A-Level past papers and solutions' },
  { level: 'alevels', subject: 'al-math', title: 'ExamSolutions', url: 'https://www.examsolutions.net', type: 'video', icon: '🎬', desc: 'A-Level Math video solutions by topic' },
  { level: 'alevels', subject: 'al-physics', title: 'Physics & Maths Tutor', url: 'https://www.physicsandmathstutor.com', type: 'notes', icon: '📓', desc: 'Revision notes + topic questions for all A-Level subjects' },
  { level: 'alevels', subject: 'al-chemistry', title: 'Chemrevise (Neil Goalby)', url: 'https://chemrevise.org', type: 'notes', icon: '📓', desc: 'Free high-quality A-Level Chemistry revision notes' },
  { level: 'alevels', subject: 'al-biology', title: 'Biology Online (Revision World)', url: 'https://revisionworld.com/a2-level-level-revision/biology', type: 'notes', icon: '🧬', desc: 'Structured A-Level Biology revision' },
  { level: 'alevels', subject: 'all', title: 'Save My Exams', url: 'https://www.savemyexams.com', type: 'platform', icon: '🎓', desc: 'Topic questions + mark schemes (free tier available)' },
  { level: 'alevels', subject: 'all', title: 'GCSEPod / AQA / OCR resources', url: 'https://www.gcsepod.com', type: 'video', icon: '🎬', desc: 'Short video lessons by topic' },
];
