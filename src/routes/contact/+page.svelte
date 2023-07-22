<script>
	import { Github, Mail } from "lucide-svelte";
</script>

<h1>Contact</h1>

<ul>
	<li><Mail /> <span>jungin.rhee@cp.kaist.ac.kr</span></li>
	<li>
		<Github /> <span><a href="https://github.com/jirheee">jirheee</a></span>
	</li>
</ul>

<style>
	ul > * {
		display: flex;
		gap: var(--size-2);
	}
</style>
