import { defineConfig } from '@rsbuild/core'
import { pluginPug } from '@rsbuild/plugin-pug'

export default defineConfig({
	html: {
		template: './src/index.pug',
	  },
	plugins: [pluginPug()],
})
