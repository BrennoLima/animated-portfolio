import { useTheme } from '@emotion/react';
import React from 'react';

export const TorontoSVG = ({ width }) => {
	const theme = useTheme();
	return (
		<svg
			width={width}
			preserveAspectRatio='xMidYMid meet'
			viewBox='0 0 191 219'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
		>
			<path
				d='M189.708 122.998C189.724 147.204 180.428 170.489 163.745 188.028C147.062 205.567 124.271 216.016 100.094 217.21C98.5305 217.281 96.9674 217.322 95.384 217.322C93.8006 217.322 92.2375 217.322 90.6744 217.21C66.3187 215.998 43.3789 205.401 26.6677 187.641C9.95645 169.882 0.772679 146.341 1.04316 121.956C1.31365 97.5721 11.0174 74.2402 28.1184 56.8558C45.2195 39.4713 68.3888 29.3855 92.7653 28.7143C93.6382 28.7143 94.5111 28.7143 95.384 28.7143C96.2569 28.7143 97.1298 28.7143 98.0027 28.7143C122.556 29.3937 145.876 39.6253 163.002 57.2329C180.128 74.8405 189.709 98.4349 189.708 122.998Z'
				fill='white'
			/>
			<path
				d='M95.384 218.337C93.8615 218.337 92.339 218.337 90.6236 218.225C66.002 217.006 42.8098 206.297 25.9141 188.346C9.01835 170.394 -0.267288 146.597 0.00585971 121.946C0.279007 97.2961 10.0897 73.7098 27.3791 56.1375C44.6684 38.5651 68.0922 28.3727 92.7348 27.6994C94.4908 27.6385 96.267 27.6385 98.0433 27.6994C122.686 28.3744 146.109 38.5682 163.397 56.1414C180.685 73.7147 190.494 97.3012 190.766 121.951C191.038 146.601 181.751 170.398 164.855 188.349C147.958 206.299 124.766 217.007 100.144 218.225C98.429 218.296 96.9065 218.337 95.384 218.337ZM95.384 29.6888C94.5212 29.6888 93.6585 29.6888 92.8059 29.6888C68.6951 30.356 45.7794 40.3339 28.8654 57.5295C11.9514 74.7251 2.35317 97.8023 2.08403 121.921C1.8149 146.039 10.8957 169.325 27.4218 186.894C43.948 204.463 66.6353 214.949 90.7251 216.154C94.0036 216.307 96.8151 216.307 100.053 216.154C105.233 215.911 110.384 215.232 115.451 214.124C137.691 209.223 157.371 196.357 170.782 177.951C184.194 159.545 190.411 136.869 188.262 114.197C186.113 91.5246 175.746 70.4209 159.115 54.8624C142.484 39.3038 120.737 30.3647 97.9722 29.7294C97.1095 29.6989 96.2467 29.6888 95.384 29.6888Z'
				fill='#093F68'
			/>
			<path
				d='M95.384 1.0759L99.9819 86.2141H90.786L95.384 1.0759Z'
				fill={theme.palette.text.primary}
			/>
			<path
				d='M99.9819 87.2291H90.786C90.6476 87.23 90.5104 87.2025 90.383 87.1484C90.2556 87.0943 90.1406 87.0146 90.0451 86.9144C89.9496 86.8131 89.8761 86.6933 89.8289 86.5623C89.7818 86.4314 89.7621 86.2921 89.771 86.1532L94.369 1.015C94.369 0.745805 94.4759 0.487637 94.6663 0.297288C94.8566 0.106938 95.1148 0 95.384 0C95.6532 0 95.9113 0.106938 96.1017 0.297288C96.292 0.487637 96.399 0.745805 96.399 1.015L100.997 86.1532C101.006 86.2921 100.986 86.4314 100.939 86.5623C100.892 86.6933 100.818 86.8131 100.723 86.9144C100.627 87.0146 100.512 87.0943 100.385 87.1484C100.258 87.2025 100.12 87.23 99.9819 87.2291ZM91.8619 85.1991H98.9669L95.384 19.894L91.8619 85.1991Z'
				fill='#093F68'
			/>
			<path
				d='M99.9819 38.7527H90.786C90.5168 38.7527 90.2586 38.6458 90.0683 38.4554C89.8779 38.2651 89.771 38.0069 89.771 37.7377C89.771 37.4685 89.8779 37.2103 90.0683 37.02C90.2586 36.8296 90.5168 36.7227 90.786 36.7227H99.9819C100.251 36.7227 100.509 36.8296 100.7 37.02C100.89 37.2103 100.997 37.4685 100.997 37.7377C100.997 38.0069 100.89 38.2651 100.7 38.4554C100.509 38.6458 100.251 38.7527 99.9819 38.7527Z'
				fill='#093F68'
			/>
			<path
				d='M102.865 79.8298H87.9034C87.6342 79.8298 87.3761 79.7228 87.1857 79.5325C86.9954 79.3421 86.8884 79.0839 86.8884 78.8148C86.8884 78.5456 86.9954 78.2874 87.1857 78.097C87.3761 77.9067 87.6342 77.7998 87.9034 77.7998H102.865C103.134 77.7998 103.392 77.9067 103.582 78.097C103.773 78.2874 103.88 78.5456 103.88 78.8148C103.88 79.0839 103.773 79.3421 103.582 79.5325C103.392 79.7228 103.134 79.8298 102.865 79.8298Z'
				fill='#093F68'
			/>
			<path
				d='M101.271 68.5836H89.4969C89.2277 68.5836 88.9696 68.4766 88.7792 68.2863C88.5889 68.0959 88.4819 67.8377 88.4819 67.5686C88.4819 67.2994 88.5889 67.0412 88.7792 66.8508C88.9696 66.6605 89.2277 66.5536 89.4969 66.5536H101.271C101.54 66.5536 101.798 66.6605 101.989 66.8508C102.179 67.0412 102.286 67.2994 102.286 67.5686C102.286 67.8377 102.179 68.0959 101.989 68.2863C101.798 68.4766 101.54 68.5836 101.271 68.5836Z'
				fill='#093F68'
			/>
			<path
				d='M68.8722 100.404H121.896L113.847 95.1562H76.9211L68.8722 100.404Z'
				fill='#093F68'
			/>
			<path
				d='M121.896 101.419H68.8721C68.6456 101.428 68.4226 101.361 68.2387 101.228C68.0547 101.096 67.9204 100.906 67.8571 100.688C67.7952 100.479 67.8022 100.256 67.8772 100.051C67.9521 99.846 68.091 99.6709 68.2733 99.5512L76.3324 94.3037C76.4957 94.1981 76.686 94.1418 76.8805 94.1413H113.806C114.001 94.1418 114.191 94.1981 114.354 94.3037L122.413 99.5512C122.596 99.6709 122.735 99.846 122.809 100.051C122.884 100.256 122.891 100.479 122.83 100.688C122.77 100.892 122.648 101.073 122.48 101.204C122.313 101.335 122.108 101.41 121.896 101.419ZM72.2927 99.3888H118.475L113.542 96.1713H77.2256L72.2927 99.3888Z'
				fill='#093F68'
			/>
			<path
				d='M68.8722 119.689H121.896L113.847 124.936H76.9211L68.8722 119.689Z'
				fill='#093F68'
			/>
			<path
				d='M113.847 125.951H76.9211C76.7266 125.951 76.5364 125.894 76.373 125.789L68.3139 120.541C68.1317 120.422 67.9928 120.247 67.9178 120.042C67.8429 119.837 67.8358 119.614 67.8978 119.405C67.9611 119.187 68.0954 118.997 68.2793 118.864C68.4633 118.732 68.6863 118.665 68.9128 118.674H121.936C122.163 118.665 122.386 118.732 122.57 118.864C122.754 118.997 122.888 119.187 122.951 119.405C123.013 119.614 123.006 119.837 122.931 120.042C122.856 120.247 122.717 120.422 122.535 120.541L114.476 125.789C114.29 125.911 114.069 125.968 113.847 125.951ZM77.2256 123.921H113.542L118.475 120.704H72.2927L77.2256 123.921Z'
				fill='#093F68'
			/>
			<path
				d='M115.684 215.129C110.556 216.241 105.345 216.92 100.104 217.159C98.5406 217.23 96.9775 217.271 95.3941 217.271C93.8107 217.271 92.2476 217.271 90.6845 217.159C85.4434 216.92 80.2317 216.241 75.1042 215.129C85.4978 180.68 84.1682 134.944 84.1682 134.944H106.62C106.62 134.944 105.28 180.68 115.684 215.129Z'
				fill={theme.palette.text.primary}
			/>
			<path
				d='M95.3839 218.337C93.8614 218.337 92.3389 218.337 90.6236 218.225C85.3234 217.963 80.0543 217.26 74.8708 216.124C74.7357 216.093 74.6083 216.035 74.4966 215.953C74.3849 215.871 74.2912 215.767 74.2212 215.647C74.1488 215.526 74.1025 215.391 74.085 215.252C74.0675 215.112 74.0793 214.97 74.1197 214.835C84.3509 180.934 83.1532 135.472 83.143 135.015C83.1382 134.879 83.1609 134.743 83.2097 134.616C83.2586 134.489 83.3325 134.372 83.4272 134.274C83.5224 134.177 83.6362 134.1 83.7617 134.048C83.8873 133.996 84.022 133.969 84.158 133.97H106.61C106.746 133.969 106.881 133.996 107.006 134.048C107.132 134.1 107.245 134.177 107.341 134.274C107.435 134.372 107.509 134.489 107.558 134.616C107.607 134.743 107.63 134.879 107.625 135.015C107.625 135.472 106.417 180.944 116.648 214.835C116.689 214.97 116.7 215.112 116.683 215.252C116.665 215.391 116.619 215.526 116.547 215.647C116.477 215.767 116.383 215.871 116.271 215.953C116.16 216.035 116.032 216.093 115.897 216.124C110.714 217.26 105.444 217.963 100.144 218.225C98.4289 218.296 96.9064 218.337 95.3839 218.337ZM76.3831 214.348C81.1093 215.327 85.9044 215.938 90.7251 216.175C94.0035 216.327 96.8151 216.327 100.053 216.175C104.87 215.937 109.662 215.326 114.385 214.348C105.25 183.157 105.463 142.932 105.575 135.98H85.2339C85.305 142.953 85.5181 183.177 76.3831 214.348Z'
				fill='#093F68'
			/>
			<path
				d='M100.094 134.65V217.21C98.5305 217.281 96.9674 217.322 95.384 217.322C93.8006 217.322 92.2375 217.322 90.6744 217.21V134.65H100.094Z'
				fill={theme.palette.text.primary}
			/>
			<path
				d='M95.384 218.337C93.8615 218.337 92.339 218.337 90.6237 218.225C90.3634 218.212 90.1181 218.099 89.9385 217.91C89.759 217.721 89.6591 217.471 89.6594 217.21V134.65C89.6594 134.381 89.7664 134.123 89.9567 133.932C90.1471 133.742 90.4052 133.635 90.6744 133.635H100.094C100.363 133.635 100.621 133.742 100.811 133.932C101.002 134.123 101.109 134.381 101.109 134.65V217.21C101.109 217.471 101.009 217.721 100.83 217.91C100.65 218.099 100.405 218.212 100.144 218.225C98.429 218.296 96.9065 218.337 95.384 218.337ZM91.6894 216.236C94.2472 216.327 96.5208 216.327 99.0786 216.236V135.665H91.6894V216.236Z'
				fill='#093F68'
			/>
			<path
				d='M116.8 124.936H73.9675C71.9831 124.936 70.3744 126.545 70.3744 128.529V131.057C70.3744 133.041 71.9831 134.65 73.9675 134.65H116.8C118.785 134.65 120.394 133.041 120.394 131.057V128.529C120.394 126.545 118.785 124.936 116.8 124.936Z'
				fill={theme.palette.text.primary}
			/>
			<path
				d='M116.8 135.665H73.9675C72.7453 135.665 71.5732 135.179 70.709 134.315C69.8449 133.451 69.3594 132.279 69.3594 131.057V128.529C69.3621 127.308 69.8484 126.138 70.712 125.274C71.5756 124.41 72.7461 123.924 73.9675 123.921H116.8C118.022 123.924 119.192 124.41 120.056 125.274C120.92 126.138 121.406 127.308 121.409 128.529V131.057C121.409 132.279 120.923 133.451 120.059 134.315C119.195 135.179 118.023 135.665 116.8 135.665ZM73.9675 125.951C73.2837 125.951 72.628 126.223 72.1445 126.706C71.661 127.19 71.3894 127.846 71.3894 128.529V131.057C71.3894 131.741 71.661 132.396 72.1445 132.88C72.628 133.363 73.2837 133.635 73.9675 133.635H116.8C117.484 133.635 118.14 133.363 118.623 132.88C119.107 132.396 119.379 131.741 119.379 131.057V128.529C119.379 127.846 119.107 127.19 118.623 126.706C118.14 126.223 117.484 125.951 116.8 125.951H73.9675Z'
				fill='#093F68'
			/>
			<path
				d='M82.5849 86.0415H108.173C109.392 86.0415 110.562 86.526 111.424 87.3883C112.287 88.2505 112.771 89.4201 112.771 90.6395V95.1563H77.9869V90.6395C77.9869 89.4201 78.4714 88.2505 79.3337 87.3883C80.1959 86.526 81.3654 86.0415 82.5849 86.0415Z'
				fill={theme.palette.text.primary}
			/>
			<path
				d='M112.781 96.1713H77.9869C77.7177 96.1713 77.4596 96.0643 77.2692 95.874C77.0789 95.6836 76.9719 95.4254 76.9719 95.1563V90.6395C76.9719 89.1499 77.563 87.7212 78.6153 86.667C79.6676 85.6127 81.0953 85.0191 82.5849 85.0164H108.183C109.673 85.0191 111.1 85.6127 112.153 86.667C113.205 87.7212 113.796 89.1499 113.796 90.6395V95.1563C113.796 95.4254 113.689 95.6836 113.499 95.874C113.308 96.0643 113.05 96.1713 112.781 96.1713ZM79.0019 94.1413H111.766V90.6395C111.766 89.6883 111.389 88.7759 110.717 88.1024C110.046 87.4288 109.134 87.0491 108.183 87.0464H82.5849C81.6337 87.0491 80.7224 87.4288 80.0507 88.1024C79.3791 88.7759 79.0019 89.6883 79.0019 90.6395V94.1413Z'
				fill='#093F68'
			/>
			<path
				d='M86.4824 125.2C86.221 125.199 85.9702 125.097 85.782 124.916L80.23 119.679C80.0335 119.493 79.9188 119.237 79.9112 118.966C79.9036 118.696 80.0036 118.434 80.1894 118.237C80.3751 118.041 80.6313 117.926 80.9016 117.919C81.1719 117.911 81.4342 118.011 81.6307 118.197L87.1726 123.444C87.3616 123.634 87.4677 123.892 87.4677 124.16C87.4677 124.428 87.3616 124.685 87.1726 124.875C86.9935 125.069 86.7459 125.186 86.4824 125.2Z'
				fill='#093F68'
			/>
			<path
				d='M104.285 125.2C104.148 125.198 104.012 125.169 103.887 125.113C103.761 125.057 103.648 124.976 103.555 124.875C103.366 124.685 103.26 124.428 103.26 124.16C103.26 123.892 103.366 123.634 103.555 123.444L109.097 118.197C109.194 118.105 109.308 118.033 109.433 117.985C109.559 117.937 109.692 117.915 109.826 117.919C109.959 117.922 110.091 117.952 110.213 118.007C110.336 118.062 110.446 118.14 110.538 118.237C110.63 118.335 110.702 118.449 110.749 118.574C110.797 118.699 110.82 118.833 110.816 118.966C110.812 119.1 110.782 119.232 110.728 119.354C110.673 119.476 110.595 119.587 110.497 119.679L104.945 124.916C104.767 125.088 104.533 125.189 104.285 125.2Z'
				fill='#093F68'
			/>
			<path
				d='M95.384 125.2C95.1148 125.2 94.8567 125.093 94.6663 124.903C94.476 124.713 94.369 124.454 94.369 124.185V119.811C94.369 119.541 94.476 119.283 94.6663 119.093C94.8567 118.903 95.1148 118.796 95.384 118.796C95.6532 118.796 95.9114 118.903 96.1017 119.093C96.2921 119.283 96.399 119.541 96.399 119.811V124.185C96.399 124.454 96.2921 124.713 96.1017 124.903C95.9114 125.093 95.6532 125.2 95.384 125.2Z'
				fill='#093F68'
			/>
			<path
				d='M120.932 100.404H69.8466C68.1817 100.404 66.832 101.753 66.832 103.418V116.552C66.832 118.217 68.1817 119.567 69.8466 119.567H120.932C122.596 119.567 123.946 118.217 123.946 116.552V103.418C123.946 101.753 122.596 100.404 120.932 100.404Z'
				fill={theme.palette.text.primary}
			/>
			<path
				d='M120.932 120.582H69.8365C68.7597 120.582 67.727 120.154 66.9656 119.393C66.2042 118.631 65.7765 117.599 65.7765 116.522V103.327C65.7765 102.25 66.2042 101.218 66.9656 100.456C67.727 99.6948 68.7597 99.267 69.8365 99.267H120.932C122.008 99.267 123.041 99.6948 123.802 100.456C124.564 101.218 124.992 102.25 124.992 103.327V116.522C124.992 117.055 124.887 117.583 124.683 118.076C124.479 118.568 124.179 119.016 123.802 119.393C123.425 119.77 122.978 120.069 122.485 120.273C121.993 120.477 121.465 120.582 120.932 120.582ZM69.8365 101.419C69.2981 101.419 68.7818 101.633 68.4011 102.013C68.0204 102.394 67.8065 102.91 67.8065 103.449V116.644C67.8065 117.182 68.0204 117.699 68.4011 118.079C68.7818 118.46 69.2981 118.674 69.8365 118.674H120.932C121.47 118.674 121.986 118.46 122.367 118.079C122.748 117.699 122.962 117.182 122.962 116.644V103.449C122.962 102.91 122.748 102.394 122.367 102.013C121.986 101.633 121.47 101.419 120.932 101.419H69.8365Z'
				fill='#093F68'
			/>
			<path
				d='M126.413 107.976H64.1118C63.8426 107.976 63.5844 107.869 63.3941 107.678C63.2037 107.488 63.0968 107.23 63.0968 106.961C63.0968 106.692 63.2037 106.433 63.3941 106.243C63.5844 106.053 63.8426 105.946 64.1118 105.946H126.413C126.682 105.946 126.94 106.053 127.13 106.243C127.321 106.433 127.428 106.692 127.428 106.961C127.428 107.23 127.321 107.488 127.13 107.678C126.94 107.869 126.682 107.976 126.413 107.976Z'
				fill='#093F68'
			/>
			<path
				d='M126.413 114.025H64.1118C63.8426 114.025 63.5844 113.918 63.3941 113.728C63.2037 113.537 63.0968 113.279 63.0968 113.01C63.0968 112.741 63.2037 112.483 63.3941 112.292C63.5844 112.102 63.8426 111.995 64.1118 111.995H126.413C126.682 111.995 126.94 112.102 127.13 112.292C127.321 112.483 127.428 112.741 127.428 113.01C127.428 113.279 127.321 113.537 127.13 113.728C126.94 113.918 126.682 114.025 126.413 114.025Z'
				fill='#093F68'
			/>
			<path
				d='M64.2133 195.367H58.2147C57.9455 195.367 57.6873 195.26 57.497 195.07C57.3066 194.88 57.1997 194.621 57.1997 194.352V174.225H39.63C39.3608 174.225 39.1027 174.118 38.9123 173.927C38.722 173.737 38.615 173.479 38.615 173.21V161.08H25.217V178.924C25.217 179.193 25.1101 179.452 24.9197 179.642C24.7294 179.832 24.4712 179.939 24.202 179.939C23.9328 179.939 23.6746 179.832 23.4843 179.642C23.2939 179.452 23.187 179.193 23.187 178.924V160.065C23.187 159.796 23.2939 159.538 23.4843 159.348C23.6746 159.157 23.9328 159.05 24.202 159.05H39.63C39.8992 159.05 40.1574 159.157 40.3477 159.348C40.5381 159.538 40.645 159.796 40.645 160.065V172.195H58.2147C58.4839 172.195 58.742 172.302 58.9324 172.492C59.1227 172.682 59.2297 172.941 59.2297 173.21V193.337H63.1983V166.064C63.1983 165.795 63.3052 165.537 63.4956 165.346C63.6859 165.156 63.9441 165.049 64.2133 165.049H80.9304C81.1996 165.049 81.4577 165.156 81.6481 165.346C81.8384 165.537 81.9454 165.795 81.9454 166.064C81.9454 166.333 81.8384 166.591 81.6481 166.782C81.4577 166.972 81.1996 167.079 80.9304 167.079H65.2283V194.352C65.2283 194.621 65.1214 194.88 64.931 195.07C64.7407 195.26 64.4825 195.367 64.2133 195.367Z'
				fill='#DFEAEF'
			/>
			<path
				d='M141.374 192.454H132.239C131.969 192.454 131.711 192.347 131.521 192.157C131.331 191.966 131.224 191.708 131.224 191.439V186.303H120.394C120.124 186.303 119.866 186.196 119.676 186.006C119.486 185.816 119.379 185.557 119.379 185.288V177.808H112.781C112.512 177.808 112.254 177.701 112.063 177.51C111.873 177.32 111.766 177.062 111.766 176.793C111.766 176.523 111.873 176.265 112.063 176.075C112.254 175.885 112.512 175.778 112.781 175.778H120.394C120.663 175.778 120.921 175.885 121.111 176.075C121.302 176.265 121.409 176.523 121.409 176.793V184.263H132.229C132.498 184.263 132.756 184.37 132.946 184.56C133.137 184.751 133.244 185.009 133.244 185.278V190.414H140.349V170.012C140.349 169.743 140.455 169.485 140.646 169.295C140.836 169.104 141.094 168.997 141.364 168.997H163.694C163.963 168.997 164.221 169.104 164.411 169.295C164.602 169.485 164.708 169.743 164.708 170.012V180.731C164.708 181 164.602 181.258 164.411 181.449C164.221 181.639 163.963 181.746 163.694 181.746C163.424 181.746 163.166 181.639 162.976 181.449C162.785 181.258 162.679 181 162.679 180.731V171.027H142.379V191.439C142.379 191.707 142.273 191.963 142.085 192.153C141.897 192.343 141.641 192.451 141.374 192.454Z'
				fill='#DFEAEF'
			/>
			<path
				d='M50.2063 126.936H18.4469C14.7117 126.936 11.6769 124.48 11.6769 121.455C11.6769 119.141 13.4836 117.08 16.1429 116.309C16.8073 115.134 17.7616 114.149 18.9146 113.447C20.0677 112.745 21.3813 112.35 22.7302 112.3C23.4712 109.356 26.7192 107.164 30.5559 107.164C31.9569 107.116 33.3476 107.419 34.6011 108.047C35.8546 108.675 36.931 109.606 37.7319 110.757C39.3747 109.991 41.167 109.599 42.9795 109.61C48.0545 109.61 52.3276 112.584 53.1295 116.502C54.1997 116.839 55.1425 117.493 55.833 118.377C56.5235 119.262 56.9293 120.335 56.9966 121.455C56.9763 124.48 53.9415 126.936 50.2063 126.936ZM23.5828 114.289C20.9032 114.289 18.5078 115.619 17.8278 117.527C17.7677 117.684 17.6695 117.824 17.5419 117.934C17.4143 118.044 17.2614 118.12 17.097 118.156C15.067 118.593 13.7069 119.953 13.7069 121.455C13.7069 123.363 15.8282 124.906 18.4469 124.906H50.2063C52.825 124.906 54.9463 123.363 54.9463 121.455C54.9463 120.054 53.7283 118.765 51.9013 118.248C51.7047 118.191 51.5298 118.077 51.3993 117.919C51.2689 117.761 51.1892 117.568 51.1705 117.364C50.866 114.157 47.2628 111.64 42.9693 111.64C41.1502 111.619 39.36 112.096 37.7928 113.02C37.6647 113.098 37.5209 113.147 37.3717 113.163C37.2225 113.179 37.0717 113.161 36.9301 113.112C36.7872 113.061 36.6574 112.979 36.5503 112.872C36.4432 112.765 36.3614 112.635 36.3109 112.492C35.6207 110.554 33.2659 109.194 30.5457 109.194C27.3789 109.194 24.7704 111.021 24.5877 113.355C24.5672 113.61 24.4513 113.848 24.2632 114.021C24.075 114.194 23.8284 114.29 23.5727 114.289H23.5828Z'
				fill='#DFEAEF'
			/>
			<path
				d='M39.63 118.065C39.3882 118.068 39.1531 117.985 38.967 117.831C38.7809 117.676 38.6561 117.461 38.615 117.222C38.3594 115.961 37.6337 114.843 36.585 114.096C35.9175 113.762 35.1858 113.575 34.4396 113.549C33.6935 113.522 32.9504 113.657 32.2611 113.944C32.004 114.025 31.7254 114 31.4865 113.875C31.2476 113.751 31.068 113.536 30.9873 113.279C30.9065 113.022 30.9312 112.743 31.0559 112.504C31.1805 112.266 31.395 112.086 31.6521 112.005C32.5525 111.591 33.5371 111.392 34.5277 111.425C35.5183 111.458 36.4876 111.721 37.3586 112.194C38.2297 112.667 38.9784 113.336 39.5454 114.149C40.1123 114.962 40.4819 115.896 40.6247 116.877C40.648 117.009 40.6449 117.145 40.6156 117.275C40.5863 117.406 40.5313 117.53 40.4539 117.639C40.3766 117.749 40.2783 117.842 40.1647 117.913C40.0512 117.984 39.9246 118.033 39.7924 118.055L39.63 118.065Z'
				fill='#DFEAEF'
			/>
			<path
				d='M168.017 141.329H147.149C144.5 141.329 142.348 139.552 142.348 137.38C142.385 136.605 142.651 135.858 143.111 135.233C143.572 134.608 144.207 134.134 144.936 133.868C145.566 131.189 148.428 129.24 151.889 129.24C153.028 129.237 154.157 129.461 155.208 129.9C155.78 129.166 156.518 128.578 157.362 128.185C158.205 127.791 159.13 127.603 160.06 127.636C161.202 127.574 162.336 127.867 163.305 128.476C164.274 129.085 165.03 129.98 165.47 131.036C166.345 131.108 167.191 131.386 167.937 131.849C168.683 132.311 169.309 132.944 169.763 133.696C170.595 133.909 171.338 134.38 171.885 135.042C172.432 135.704 172.756 136.523 172.808 137.38C172.818 139.552 170.667 141.329 168.017 141.329ZM151.899 131.27C149.26 131.27 147.047 132.782 146.824 134.721C146.806 134.925 146.726 135.118 146.595 135.275C146.465 135.433 146.29 135.548 146.093 135.604C145.078 135.898 144.348 136.619 144.348 137.38C144.348 138.395 145.616 139.299 147.119 139.299H167.977C169.479 139.299 170.748 138.416 170.748 137.38C170.748 136.548 169.946 135.797 168.799 135.543C168.634 135.507 168.482 135.431 168.354 135.321C168.226 135.211 168.128 135.071 168.068 134.914C167.74 134.301 167.241 133.796 166.633 133.459C166.024 133.122 165.331 132.968 164.637 133.016C164.382 133.017 164.135 132.921 163.947 132.748C163.759 132.575 163.643 132.337 163.622 132.082C163.521 130.742 161.917 129.666 160.06 129.666C159.356 129.614 158.653 129.77 158.037 130.115C157.422 130.459 156.922 130.978 156.599 131.605C156.548 131.748 156.466 131.878 156.359 131.985C156.252 132.092 156.122 132.174 155.979 132.224C155.836 132.275 155.684 132.293 155.533 132.278C155.382 132.262 155.236 132.212 155.107 132.133C154.138 131.553 153.028 131.255 151.899 131.27Z'
				fill='#DFEAEF'
			/>
			<path
				d='M158.801 136.304C158.542 136.305 158.293 136.206 158.104 136.029C157.915 135.852 157.802 135.609 157.786 135.35C157.654 133.32 155.249 132.204 155.228 132.194C154.982 132.085 154.789 131.882 154.692 131.631C154.595 131.38 154.602 131.1 154.711 130.854C154.82 130.607 155.022 130.415 155.273 130.317C155.525 130.22 155.804 130.227 156.05 130.336C156.193 130.397 159.593 131.94 159.806 135.228C159.823 135.496 159.733 135.76 159.556 135.961C159.379 136.163 159.13 136.286 158.862 136.304H158.801Z'
				fill='#DFEAEF'
			/>
			<path
				d='M153.077 76.9573H123.368C119.835 76.9573 116.963 74.6228 116.963 71.7605C117.025 70.7049 117.406 69.693 118.055 68.8578C118.703 68.0226 119.589 67.4033 120.597 67.0814C121.358 63.4071 125.387 60.6057 130.127 60.6057C131.81 60.5788 133.477 60.9255 135.01 61.6207C135.768 60.5483 136.781 59.6809 137.957 59.0963C139.133 58.5117 140.436 58.2282 141.749 58.2712C145.352 58.2712 148.397 60.3012 149.128 63.0823C150.387 63.1368 151.612 63.51 152.688 64.1668C153.764 64.8236 154.655 65.7426 155.279 66.8378C156.411 67.0875 157.431 67.6973 158.187 68.5756C158.942 69.454 159.393 70.5536 159.471 71.7098C159.471 74.6228 156.609 76.9573 153.077 76.9573ZM130.127 62.6357C126.138 62.6357 122.799 64.9702 122.515 67.934C122.496 68.1376 122.417 68.3309 122.286 68.4885C122.156 68.6461 121.981 68.7606 121.784 68.817C120.12 69.2941 118.993 70.4816 118.993 71.7605C118.993 73.5063 120.962 74.9273 123.368 74.9273H153.077C155.482 74.9273 157.441 73.5063 157.441 71.7605C157.441 70.3801 156.162 69.1418 154.325 68.7155C154.161 68.6794 154.008 68.603 153.88 68.4932C153.753 68.3833 153.654 68.2435 153.594 68.0862C152.935 66.3303 150.742 65.1021 148.286 65.1021C148.03 65.1029 147.784 65.0072 147.595 64.8341C147.407 64.661 147.291 64.4232 147.271 64.1683C147.108 62.0165 144.693 60.3316 141.769 60.3316C139.262 60.3316 137.07 61.5801 136.441 63.3766C136.39 63.5195 136.309 63.6492 136.201 63.7564C136.094 63.8635 135.964 63.9453 135.822 63.9958C135.679 64.0468 135.526 64.0651 135.375 64.0493C135.224 64.0335 135.078 63.984 134.949 63.9044C133.49 63.0427 131.821 62.6034 130.127 62.6357Z'
				fill='#DFEAEF'
			/>
			<path
				d='M131.173 68.1877C130.931 68.1877 130.697 68.1013 130.513 67.9441C130.412 67.8575 130.329 67.7517 130.268 67.6329C130.208 67.5141 130.171 67.3845 130.161 67.2516C130.151 67.1188 130.166 66.9851 130.208 66.8584C130.249 66.7316 130.315 66.6142 130.402 66.5129C135.558 60.5041 141.12 64.6149 141.171 64.6656C141.29 64.7402 141.393 64.8388 141.473 64.9552C141.552 65.0716 141.606 65.2033 141.632 65.3419C141.658 65.4804 141.654 65.6228 141.622 65.76C141.59 65.8972 141.529 66.0261 141.444 66.1386C141.359 66.2511 141.252 66.3447 141.129 66.4134C141.006 66.4821 140.87 66.5244 140.729 66.5377C140.589 66.5509 140.448 66.5348 140.314 66.4904C140.18 66.4459 140.057 66.3741 139.953 66.2795C139.526 65.9649 135.761 63.3766 131.944 67.8325C131.849 67.9439 131.731 68.0333 131.598 68.0946C131.464 68.156 131.32 68.1877 131.173 68.1877Z'
				fill='#DFEAEF'
			/>
		</svg>
	);
};
