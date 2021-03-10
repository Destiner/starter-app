<template>
	<div>
		<h1>Main page</h1>
		<div>Latest block on Ethereum: {{ block }}</div>
	</div>
</template>

<script lang="ts">
import { ref, defineComponent, onMounted } from 'vue';

import Banner from '@/components/Banner.vue';

export default defineComponent({
	setup() {
		const block = ref('0');

		async function getLatestBlock(): Promise<string> {
			const url = 'https://api.etherscan.io/api?module=block&action=getblocknobytime&timestamp=1578638524&closest=before&apikey=IIMQH3GC81HQYSFTZCW4AKHDFSWKYPV6C1';
			const data = await fetch(url);
			const json = await data.json();
			const block = json.result;
			return block;
		}

		onMounted(async () => {
			block.value = await getLatestBlock();
		});

		return {
			block,
		};
	},
});
</script>
