import tailwindSCrollbar from 'tailwind-scrollbar'

// tailwind.config.js
export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [
    tailwindSCrollbar(),
  ],
};
