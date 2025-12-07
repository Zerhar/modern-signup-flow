# Modern React Sign-Up Form

A production-grade registration flow demonstrating scalable frontend patterns.

## Key Features
* **Type-Safety:** 100% TypeScript with strict schemas.
* **Performance:** React Hook Form for minimal re-renders.
* **Styling:** Hybrid approach using Tailwind CSS (layout) & Material UI (components).
* **Dark Mode:** Context-based theme switching.
* **Validation:** Yup schema validation with password strength requirements.
* **Testing:** Integration tests using Vitest & React Testing Library.

## Tech Stack
* **Core:** React 18, TypeScript, Vite
* **Forms:** React Hook Form, Yup
* **UI:** Tailwind CSS, Material UI, Framer Motion
* **Testing:** Vitest, React Testing Library

## Getting Started
```bash
# 1. Clone repo & install
git clone https://github.com/Zerhar/modern-signup-flow.git
cd modern-signup-flow
npm install

# 2. Run development server
npm run dev

# 3. Running Tests
npm test
```

## Project Structure
```
src/
├── components/   # Generic UI wrappers (FormInput, ThemeToggle)
├── context/      # Global ThemeContext
├── hooks/        # Business logic separation (useSignUp)
├── schemas/      # Yup validation schemas
├── types/        # TypeScript interfaces
└── App.tsx       # Layout composition
```

## Architecture Notes

**Generic Components:** Input fields utilize generic types (`<FormInput<T> />`) to ensure strict type checking against the form schema.

**Separation of Concerns:** Business logic and API simulation are isolated in `useSignUp.ts` to keep UI components pure.