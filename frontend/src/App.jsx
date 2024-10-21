import { useState } from 'react'
import profile from './assets/profile.png'
import './App.css'
import './index.css'; 
import yt from './assets/youtube.png'
import insta from './assets/instagram.png'
import x from './assets/x.jpg'
import lkd from './assets/linkedin.png'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className="flex flex-col justify-center items-center  "> 
      <div >
          <img src={profile} className="h-[200px] w-[200px] mt-[50px] ml-[15px] rounded-full" alt="profile" />
          <h2 className="text-[25px] font-bold">Shreyansh Agrawal</h2>
          <h3 className='text-[15px] font-semibold'>Newton School of Technology,<br/> Rishihood University, Sonipat</h3>
      </div>
      <h2 className='text-[25px] font-extrabold mt-[30px]'>Social Media</h2>
      
          <div className='flex flex-row h-[200px] w-[250px] flex-wrap gap-x-[80px] gap-y-[20px] mt-[20px]'>
              <img src={yt} className='h-[80px] w-[80px]'></img>
              <img src={insta} className='h-[80px] w-[80px]'></img>
              <img src={x} className='h-[80px] w-[80px] rounded-full'></img>
              <img src={lkd} className='h-[80px] w-[80px]'></img>
          </div>
          
          <div className='flex flex-col items-center'>
              <h2 className='font-bold text-[20px]'>About Me</h2>
              <h3 className='w-[330px] text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, cumque provident impedit asperiores expedita fuga sit ut eaque est et quam ipsa. Labore iusto nostrum illum ipsam voluptatem eaque veritatis.</h3>
          </div>
          <div>
            <button className='text-[20px] font-semibold bg-stone-500 rounded-md p-[8px] w-[300px] mt-[20px] mb-[20px]'>Subscribe to my Newsletter</button>
          </div>
      </div>
   
  </>
  
  )
}

export default App
