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
    theme: {
        colors: {
            primary: '#ebf7fd',
            accent: '#7bc3ff',
        }
    },
    transformers: [transformerDirectives()],
});