import Head from 'next/head'
import MainHome from '@/components/Home/MainHome'
import GameModes from '@/components/Home/GameModes'
import Categories from '@/components/Home/Categories'
import { useEffect } from 'react'

export default function Main () {
	useEffect(() => { window.onbeforeunload = () => null }, [])

	return (
		<>
			<Head>
				<title>Quiz Lab — Aayush Anand</title>
            grid-template-columns: 1.4fr 1fr;
          }
			  `}
			</style>
		</>
	)
}
