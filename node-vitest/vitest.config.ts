import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    coverage: {
      provider: 'v8', // or 'istanbul' for Istanbul
      reporter: ['text', 'json', 'html'],
      include: ['src/**/*'],
      exclude: ['tests/**/*']
    },
  },
})
