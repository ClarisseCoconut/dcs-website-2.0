<script lang="ts">
	import * as Card from '$lib/@shadcn-svelte/ui/card';
	import { Image } from 'lucide-svelte';
	import { PUBLIC_APIURL } from '$env/static/public';
	import type { Partnership } from '$lib/models/partnerships';

	export let partner: Partnership;
	$: ({ display_image, name, description } = partner);
</script>

<Card.Root class="card h-[286px] w-[376px] border-0">
	<Card.Content class="card h-full w-full p-4">
		<div class="flex">
			{#if display_image}
				<div class="h-32 w-32">
					<img src="{PUBLIC_APIURL}/assets/{display_image}" alt={name} />
				</div>
			{:else}
				<div class="flex h-32 w-32 items-center justify-center rounded-full bg-secondary">
					<Image class="h-10 w-10 text-background" />
				</div>
			{/if}
		</div>

		<div class="flex h-full w-full grow flex-col pt-1 *:mt-2">
			<p class="text-xl font-bold text-primary">{name}</p>
			<p class="line-clamp-3 text-sm text-secondary">{description}</p>
		</div>
	</Card.Content>
</Card.Root>
