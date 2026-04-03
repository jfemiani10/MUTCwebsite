// Prepend Vite's base URL so public-folder assets resolve correctly
// on any deploy path (e.g. /MUTCwebsite/ on GitHub Pages).
export const asset = (file) => `${import.meta.env.BASE_URL}${file}`
