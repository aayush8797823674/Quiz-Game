import Head from 'next/head'
import MainHome from '@/components/Home/MainHome'
import GameModes from '@/components/Home/GameModes'
import Categories from '@/components/Home/Categories'
import { useEffect } from 'react'

export default function Main () {
	useEffect(() => {
		window.onbeforeunload = () => null
	}, [])

	return (
		<>
			<Head>
				<title>Quiz Lab — Aayush Anand</title>
				<meta
					name='description'
					content='Quiz Lab - Interactive Quiz Platform by Aayush Anand'
				/>
				<meta
					name='viewport'
					content='width=device-width, initial-scale=1'
				/>
			</Head>

			<div className='min-h-screen'>
				<MainHome />
				<GameModes />
				<Categories />
			</div>
		</>
	)
}
