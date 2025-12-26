import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
	return (
		<Html lang="en">
			<Head>
				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link rel="preconnect" href="https://fonts.gstatic.com" />
				<link
					href="https://fonts.googleapis.com/css2?family=Baloo+2:wght@400..800&display=swap"
					rel="stylesheet"
				/>

				{/* open graph */}
				<meta property="og:type" content="website" />
				<meta property="og:site_name" content="EatFresh" />
				<meta property="og:title" content="EatFresh - Your everyday meal freshly made" key="title" />
				<meta
					property="og:description"
					content="Your everyday meals freshly made just for you.
"
				/>
				<meta property="og:url" content="https://lily-pad-website-tau.vercel.app/" />
				<meta property="og:author" name="Afolabi Babatunde Joseph" />
				<meta property="og:author" name="Ehizojie Ihayere" />
			</Head>
			<body className="antialiased">
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}
