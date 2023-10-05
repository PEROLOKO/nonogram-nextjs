import Image from 'next/image'

export default function Home() {
  return (
    <main className="w-screen flex flex-col items-center">
      <h1 className='m-2 text-xl'>Nonogram by Henry</h1>
      <div className='m-2 flex'>
        <input type='text' className='w-10 mr-1'/><span>x</span><input type='text' className='w-10 ml-1'/>
      </div>
      <button className='m-2 bg-emerald-400 p-2 text-white rounded-lg'>New Game</button>
    </main>
  )
}
