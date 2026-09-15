// Mirrors src/common/styles/_palettes.scss
// Each palette has 5 colors in order: c1, c2, c3, c4, c5

export const PALETTES: Record<number, string[]> = {
    1: ['#594747', '#402d3f', '#f2e3d0', '#d9c2a7', '#a6756a'],
    2: ['#962d2e', '#d9b991', '#a66e4e', '#731919', '#d9d9d9'],
    3: ['#4a4933', '#6b6b47', '#9a9180', '#bab1a2', '#f5f8e5'],
    4: ['#384001', '#b3bf5a', '#f2f2eb', '#fee0ef', '#8c8072'],
    5: ['#bfccd5', '#f1b5ad', '#427196', '#ede9d1', '#dd5468'],
    6: ['#4a5b5b', '#99bbb1', '#e9ecdb', '#d7c8b2', '#edebed'],
    7: ['#a3db61', '#657535', '#91a663', '#aac238', '#ccd99c'],
    8: ['#d9d9d9', '#d9cf9c', '#d9b752', '#d99559', '#8c564a'],
}

export function getPaletteColors(paletteNumber: number): string[] {
    return PALETTES[paletteNumber] ?? PALETTES[8]
}
