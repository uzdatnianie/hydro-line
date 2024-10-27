import { defineConfig, presetUno, presetWebFonts, transformerDirectives } from 'unocss';

export default defineConfig({
    presets: [presetUno(), presetWebFonts({
        provider: 'google',
        fonts: {
            kumbh: {
                name: 'Kumbh Sans',
                weights: ['400', '600', '800'],
            },
        }
    })],
    rules: [
        ['page-bg', { 'background-image': 'linear-gradient(180deg, #1d242e 0%, #1d2f40 100%)' }],
        ['bluegrad-bg', { 'background-image': 'linear-gradient(90deg, rgba(255,255,255,0.3) 0%, rgba(29,83,128,0.6) 100%)' }],
    ],
    theme: {
        colors: {
            primary: '#ebf7fd',
            accent: '#7bc3ff',
            blue: '#2B7CBF',
        }
    },
    transformers: [transformerDirectives()],
});