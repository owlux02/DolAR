import styles from './loadingSpinner.module.css';

export function LoadingSpiner() {
	const { loaderContainer, loader } = styles;

	return (
		<div className={loaderContainer}>
			<span className={loader}></span>
			<strong>Cargando, espere por favor...</strong>
		</div>
	);
}
