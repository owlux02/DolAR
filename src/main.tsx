import { render } from 'preact';
import { App } from './app.tsx';
import { Nav } from './components/nav/nav.tsx';

import '@picocss/pico/css/pico.min.css';
import './index.css';

render(
	<>
		<Nav />
		<App />
	</>,
	document.getElementById('app')!,
);
