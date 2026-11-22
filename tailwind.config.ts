import type { Config } from 'tailwindcss';
export default { content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'], theme: { extend: { colors: { ink: '#17211d', forest: '#176b4d', mint: '#eaf5ef' }, boxShadow: { soft: '0 12px 35px rgba(20,45,34,.08)' } } }, plugins: [] } satisfies Config;
