<script lang="ts">
	import { util } from '$site/util';

	let name: string = 'friend';
	let isBrowser = util.isBrowser();
</script>

<h1>Hello {name}!</h1>
<h2>Is browser: {isBrowser}!</h2>
