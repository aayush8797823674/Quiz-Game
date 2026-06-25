import categories from '@/assets/categories.json'
import PageFooter from '../PageFooter'
import playSound from '@/helpers/playSound'

export default function MainHome () {
	function handleTitleHover (e) {
		e.target.classList.add('jello-vertical')
		e.target.style.color = categories[Math.floor(Math.random() * categories.length)].color
		e.target.addEventListener('animationend', () => e.target.classList.remove('jello-vertical'))
	}

	const handleTitleLeave = (e) => (e.target.style.color = 'white')

	function handlePlay () {
		playSound('pop')
		document.getElementById('newGameDialog')?.showModal()
	}

	return (
		<main className='mainHome max-w-6xl relative mx-auto w-full min-h-[25rem] flex gap-4 flex-col justify-between items-center px-5 md:px-10 py-20 lg:col-start-2 lg:row-start-1 lg:row-end-3 text-center text-white'>
			<article>
				<h1 className='text-7xl sm:text-8xl font-semibold w-full uppercase z-10 relative tracking-tighter'>
					Quiz Lab
				</h1>
				<div className='bg-[#0f172a] absolute w-full lg:w-[41.7vw] h-40 top-16 left-0' />
				<p className='mb-4 relative text-lg sm:text-xl max-w-3xl mx-auto'>
					Aayush Anand’s portfolio-grade quiz experience for knowledge builders, casual players, and fast-paced challenge seekers.
				</p>
				<p className='mb-20 relative text-sm text-slate-300 max-w-2xl mx-auto'>
					Choose a mode, customize your topics, and enjoy intelligent fallback behavior whether you are online or offline.
				</p>
			</article>
			<button onClick={handlePlay} id='play' className='btn-primary uppercase px-6 py-4 text-lg max-w-md w-full mx-auto mt-6'>
				Launch game
			</button>
			<PageFooter />
		</main>
