export interface NuxtAppConfig {
  /** title name */
  name?: string
  /** description */
  description?: string
}

export default defineAppConfig({
  config: {
    name: 'Nuxt 3 Starter Template',
    description:
      'a starter template for Nuxt 3 with minimalist UI components design, and more.',
  } as NuxtAppConfig
})