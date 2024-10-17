 
import './App.css'
import Counter from './counter';
import Friends from './Friends';
import Team from './Team';
import Users from './Users';

function App() {
 const clickHandler =()=>{
  alert('You have to clicked.')
 }
 const threeHandler=(num)=>{
  alert(num+3);
 }
  return (
    <>
      <h1>React Core concept two</h1>
      <Friends></Friends>
      <Users></Users>
      <Team></Team>
      <Counter></Counter>
      <button onClick={clickHandler}>Click Me</button>
      <button onClick={()=>{alert('2 no button clicked.')}}>Click2</button>
      <button onClick={()=>{threeHandler(3)}}>Three</button>
    </>
  )
}

export default App
