import { createRoot } from 'react-dom/client';
import config from '../config';
import { App } from './appComponent';
import styles from './style.module.scss';
const rootElement = document.getElementById('root');
if (rootElement) {
	const root = createRoot(rootElement);
	root.render(
		<>
			<div>
				<table>
					<thead>
						<tr>
							<th>API_URL</th>
							<th>TECNOLOGÍAS</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>{config.API_BASE}</td>
							<td>
								<ul className={styles.resetListado}>
									<li>vite@5.3.4</li>
									<li>sass@1.77.8</li>
									<li>react@18.3.1</li>
									<li>typescript@5.5.4</li>
								</ul>
							</td>
						</tr>
					</tbody>
				</table>
			</div>
			<div className={styles.container}>
				<h1 className={styles.background}> VITE TEMPLATE</h1>
				<App />
			</div>
		</>
	);
}
