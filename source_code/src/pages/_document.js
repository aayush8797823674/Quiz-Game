import { Html, Head, Main, NextScript } from 'next/document'

export default function Document () {
	return (
		<Html lang="en">
			<Head>
				<meta charSet="UTF-8" />
				<link rel="icon" href="/favicon.svg" />

				{/* <!-- Meta --> */}
				<meta name="author" content="Aayush Anand" />
				<meta name="theme-color" content="#0f172a" />
				<meta name="description" content="Quiz Lab by Aayush Anand — a polished trivia experience with curated categories, multiple game modes, and an offline-ready gameplay flow." />
				<meta name="robots" content="index, follow" />

				{/* <!-- Open Graph --> */}
				<meta property="og:title" content="Quiz Lab by Aayush Anand" />
				<meta property="og:type" content="website" />
				<meta property="og:image" content="https://aayush-anand.dev/quiz-lab-share.png" />
				<meta property="og:url" content="https://aayush-anand.dev/quiz-lab" />
				<meta property="og:description" content="Quiz Lab by Aayush Anand — a polished trivia experience with curated categories, multiple game modes, and an offline-ready gameplay flow." />

				{/* <!-- Twitter --> */}
				<meta name="twitter:card" content="summary_large_image" />
				<meta name="twitter:site" content="@AayushAnandDev" />
				<meta name="twitter:creator" content="@AayushAnandDev" />
				<meta name="twitter:title" content="Quiz Lab by Aayush Anand" />
				<meta name="twitter:description" content="Quiz Lab by Aayush Anand — a polished trivia experience with curated categories, multiple game modes, and an offline-ready gameplay flow." />
				<meta name="twitter:image" content="https://aayush-anand.dev/quiz-lab-share.png" />
			</Head>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	)
}
