
import { useEffect, useState } from 'react';
import './App.css'
import Nav from './Components/Nav';

function App() {
  const boxes = Array(25).fill(null); // Create an array with 25 null elements
  // const mineBoxNumber=Math.floor(Math.random() * (max - min + 1)) + min;
  const [mineData, setMineData] = useState({ numOfMines: 1, mineNum: [] })
  const { numOfMines, mineNum } = mineData
  const [openedBox, setOpenedBox] = useState([])
  useEffect(() => {
    setMine()
  }, [numOfMines])
  const setMine = () => {
    setOpenedBox([])
    let mineNo1 = Math.floor(Math.random() * 24 + 1);
    let mineNo2 = Math.floor(Math.random() * 24 + 1);
    let mineNo3 = Math.floor(Math.random() * 24 + 1);
    if (numOfMines == 3) {
      while (mineNo1 === mineNo2 || mineNo3 === mineNo2) {
        mineNo1 = Math.floor(Math.random() * 24 + 1);
        mineNo2 = Math.floor(Math.random() * 24 + 1);
        mineNo3 = Math.floor(Math.random() * 24 + 1);
      }
      setMineData({ ...mineData, mineNum: [mineNo1, mineNo2, mineNo3] })
    }
    else if (numOfMines == 2) {
      while (mineNo1 === mineNo2) {
        mineNo1 = Math.floor(Math.random() * 24 + 1);
        mineNo2 = Math.floor(Math.random() * 24 + 1);
      }
      setMineData({ ...mineData, mineNum: [mineNo1, mineNo2] })
    }
    else {
      setMineData({ ...mineData, mineNum: [mineNo1] })
    }
  }
  const checkBoxEntry = (num) => {
    if (mineNum?.includes(num)) {
      alert(`You Lost! Your final Score is ${openedBox?.length}`)
      setMine()
    }
    else if (openedBox.includes(num)) {
      alert('box already opened')
    }
    else {
      setOpenedBox((prev) => [...prev, num])
      console.log("continue")
    }
  }
  return (
    <>
      <Nav />
      <div className='grid place-content-center  h-screen'>
        <section className='text-white flex justify-between'>
          <div>
            Mines Count: <select value={numOfMines} onChange={(e) => setMineData({ ...mineData, numOfMines: e.target.value })} className='bg-white text-black rounded-md'>
              <option value={1} className='bg-white text-green-500'>1</option>
              <option value={2} className='bg-white text-yellow-500'>2</option>
              <option value={3} className='bg-white text-red-500'>3</option>
            </select>
          </div>
          <div>
            Your Score:<span className='text-green-500 font-semibold'>{openedBox?.length}</span>
          </div>
        </section>
        <div className='grid grid-cols-5 border-2 border-gray-500 p-3 rounded-md'>
          {boxes.map((_, index) => (
            <div key={index} onClick={(e) => checkBoxEntry(index)} className={`h-10 w-10 bg-slate-500 rounded-sm hover:scale-105 hover:cursor-pointer m-2`}>
              {
                openedBox.includes(index) ?
                  <h1 className='text-xl w-full h-full rounded-sm scale-105 bg-green-600  m-auto'>
                    💎
                  </h1> :
                  index === mineData && openedBox.includes(mineData) ?
                    <h1 className='text-xl block rounded-sm w-full h-full m-auto'>
                      💣
                    </h1> :
                    <>
                    </>
              }
            </div>
          ))}
        </div>

      </div>
    </>
  );
}

export default App
