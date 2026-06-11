# SPM & A-Level Tutor

A free, comprehensive tutoring and test prep website for SPM (Sijil Pelajaran Malaysia) and A-Level students. No login required, works offline after first load.

## Who It's For

Malaysian secondary school students preparing for SPM (Form 4/5), and international students preparing for Cambridge/Edexcel A-Levels.

## Features

- 7 SPM subjects: Mathematics, Additional Mathematics, Physics, Chemistry, Biology, English, Bahasa Malaysia
- 5 A-Level subjects: Mathematics, Physics, Chemistry, Biology, Economics
- Full topic lists for each subject with progress tracking (mark topics as studied)
- Interactive quiz mode with MCQ and short-answer questions
- Timed quizzes with grading (A+/A/B/C/D/F)
- Answer reveal + detailed explanations for every question
- Quiz history and average score tracking
- Curated free resource hub with past papers, notes, video lessons, and platforms
- Responsive design for mobile study

## Data Sources & Resources Linked

| Resource | URL | What it provides |
|----------|-----|-----------------|
| KPM / MOE | moe.gov.my | Official SPM past papers |
| Physics & Maths Tutor | physicsandmathstutor.com | A-Level notes + past papers |
| ExamSolutions | examsolutions.net | A-Level Math video solutions |
| ChemRevise | chemrevise.org | Free A-Level Chemistry notes |
| Khan Academy (Malay) | ms.khanacademy.org | Free practice with tracking |
| Save My Exams | savemyexams.com | Topic questions + mark schemes |
| PapaCambridge | pastpapers.papacambridge.com | Cambridge past papers |
| AfterSchool.my | afterschool.my | SPM past year papers |

## Getting Started

```bash
npm install
npm run dev
```

## Project Structure

```
src/
  components/
    SubjectSelector.jsx  - Subject card grid per level
    TopicList.jsx        - Topic list with study/quiz/notes buttons
    QuizMode.jsx         - Full quiz experience with timer and review
    ResourceHub.jsx      - Curated free resource links by type
  data/
    curriculum.js        - All subjects, topics, questions, and resource links
  utils/
    quiz.js              - Scoring, grading, localStorage persistence
  App.jsx                - Level/subject/tab navigation, progress overview
```

## Question Bank

The app includes a built-in question bank covering:
- SPM Mathematics, Physics, Chemistry
- A-Level Mathematics, Physics, Chemistry

All questions include detailed worked explanations.

## Planned Improvements

- Expand question bank to 50+ questions per subject
- Flashcard mode for vocabulary and formula memorisation
- Study schedule generator (set exam date, get daily study plan)
- Formula sheet reference pages per subject
- Worked past paper walkthroughs (video embeds)
- Parent dashboard to track child's progress
- Offline PWA support
- Bahasa Malaysia interface option
