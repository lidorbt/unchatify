import tailwindSCrollbar from 'tailwind-scrollbar'

export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        page: {
          light: '#ffffff',
          dark: '#1f1f1f',
        },
        primary: {
          light: '#4f46e5',
          dark: '#818cf8',
        },
      },
    }
  },

  plugins: [
    tailwindSCrollbar({ nocompatible: true }),
  ],
};
