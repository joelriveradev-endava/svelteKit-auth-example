<script>
	import '../app.postcss'
	import { Header } from '../components';
</script>

<div class='container mx-auto'>
	<Header />
	
	<div class='p-8 lg:p-20'>
		<slot />
	</div>
</div>

