<script lang="ts">
	import NavItem from '$lib/components/nav/NavItem.svelte';
</script>

<div
	class="
    w-full md:h-full md:flex md:justify-center md:my-2 md:block
	hidden
"
>
	<nav
		class="
        bg-background md:p-1 md:sticky flex md:justify-between md:border md:rounded-lg md:h-fit md:w-fit
        fixed justify-end h-screen w-full
    "
	>
		<ul
			class="
            md:flex md:justify-center gap-2 md:static w-full
            absolute right-0 bottom-10
        "
		>
			<NavItem href="/" to="Home" />
			<NavItem href="/about" to="About" dropdown={true}>
				<NavItem href="/about/overview" to="Overview" />
				<NavItem href="/about/history" to="History" />
			</NavItem>
			<NavItem href="/events" to="Events" />
			<NavItem href="/people" to="People" />
			<NavItem href="/academics" to="Academics" dropdown={true}>
				<NavItem href="/academics/undergraduate" to="Undergraduate Program" />
				<NavItem href="/academics/graduate" to="Graduate Program" />
			</NavItem>
			<NavItem href="/research" to="Research" dropdown={true}>
				<NavItem href="/research/overview" to="Overview" />
				<NavItem href="/research/labs" to="Laboratories" dropdown={true} position="left-36 top-0">
					<NavItem href="/research/labs/ndsl" to="Networks and Distributed Systems Laboratory" />
					<NavItem
						href="/research/labs/cvmil"
						to="Computer Vision and Machine Intelligence Laboratory"
					/>
					<NavItem
						href="/research/labs/s3"
						to="Service Science and Software Engineering Laboratory"
					/>
					<NavItem href="/research/labs/acl" to="Algorithms and Complexity Laboratory" />
					<NavItem href="/research/labs/lcl" to="Logic and Computability Laboratory" />
					<NavItem href="/research/labs/wsl" to="Web Science Laboratory" />
					<NavItem href="/research/labs/csl" to="Computer Security Laboratory" />
					<NavItem href="/research/labs/smsl" to="System Modeling and Simulation Laboratory" />
					<NavItem href="/research/labs/scl" to="Scientific Computing Laboratory" />
				</NavItem>
				<NavItem href="/research/outputs" to="Featured Outputs" />
			</NavItem>
			<NavItem href="/students" to="Students" dropdown={true}>
				<NavItem href="/students/life" to="Organizations" />
				<NavItem href="/students/resources" to="Resources" />
			</NavItem>
			<NavItem href="/alumni" to="Alumni" />
			<NavItem href="/linkages" to="Linkages" dropdown={true} position="md:right-0 lg:left-0">
				<NavItem
					href="/linkages/partnerships"
					to="Partnerships"
					custom="md:flex md:justify-end md:p-0 lg:block lg:justify-start"
				/>
			</NavItem>
		</ul>
	</nav>
</div>
