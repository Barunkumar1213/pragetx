module.exports = {
  content: ['./index.html','./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#2563EB', /* blue-600 */
        primary2: '#06B6D4', /* cyan-500 */
      },
      backgroundImage: {
        'hero-dot': "radial-gradient(rgba(2,6,23,0.06) 1px, transparent 1px)",
      },
      backgroundSize: {
        'dot': '16px 16px',
      }
    }
  },
  plugins: [],
}
