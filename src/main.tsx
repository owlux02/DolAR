import { render } from 'preact';
import { Route, Switch } from 'wouter';
import { App } from './app.tsx';
import { Nav } from './components/nav/nav.tsx';
import { OtherCurrencies } from './pages/otherCurrencies/page.tsx';

import '@picocss/pico/css/pico.min.css';
import './index.css';
import { Conversor } from './pages/conversor/page.tsx';

render(
	<>
		<Nav />
		<Switch>
			<Route path="/" component={App} />

			<Route path="/otrasDivisas" component={OtherCurrencies} />
			<Route path="/conversor" component={Conversor} />

			{/* Default route in a switch */}
			<Route>404: No such page!</Route>
		</Switch>
	</>,
	document.getElementById('app')!,
);
