import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    coverage: {
      enabled: true,
      provider: 'istanbul', // or 'istanbul' for Istanbul
      reporter: ['text', 'json', 'html'],
      include: ['src/**/*'],
      exclude: ['tests/**/*']
    },
  },
})
