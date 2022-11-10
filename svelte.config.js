import adapter from '@sveltejs/adapter-node';
import preprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess:
		preprocess({ 
			postcss: true,
			typescript: true
		}),

	kit: {
		adapter: adapter({
		out: 'build',
		// default options are shown. On some platforms these options are set automatically — see below
		pages: 'build',
		assets: 'build',
		fallback: null,
		precompress: false,
		strict: true
		})
	}
};

export default config;
