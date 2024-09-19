<div class="blob-wrapper">
	<slot />
	<svg
		style:transform={`translate3d(10px, 110px, 0)`}
		width="987"
		height="372"
		viewBox="0 0 1150 372"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		class="blobby"
	>
		<g opacity="0.3" filter="url(#filter0_f_1816_12796)">
			<path
				d="M150.846 -122.033C144.346 -261.249 172.355 -210.26 338.356 -182.12C504.356 -153.981 669.024 -381.392 774.179 -233.719C944.855 5.96924 941.169 115.167 726.169 204.521C511.169 293.876 157.346 17.1828 150.846 -122.033Z"
				fill="var(--r_blobby, var(--primary))"
			/>
		</g>
		<defs>
			<filter
				id="filter0_f_1816_12796"
				x="0"
				y="-434"
				width="1045.45"
				height="805.936"
				filterUnits="userSpaceOnUse"
				color-interpolation-filters="sRGB"
			>
				<feFlood flood-opacity="0" result="BackgroundImageFix" />
				<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
				<feGaussianBlur stdDeviation="75" result="effect1_foregroundBlur_1816_12796" />
			</filter>
		</defs>
	</svg>
</div>

<style>
	@keyframes blobby {
		0% {
			opacity: 0.5;
		}
		100% {
			opacity: 1;
		}
	}

	.blob-wrapper {
		position: relative;
	}

	.blobby {
		position: absolute;
		top: -300px;
		pointer-events: none;
		right: -100px;
		width: 1000px;
		height: 1000px;
		animation: blobby 6s ease-in-out alternate infinite;
	}
</style>
