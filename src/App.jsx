import Header from "../src/components/header"
import Main from "../src/components/main"

export default function App() {
  return (
    <>
      <Header />
      <Main />
    </>
  )
}






// import React from "react"

// export default function App() {
//     /**
//      * Challenge: 
//      * Create state to track our count value (initial value is 0)
//      * Don't forget to replace the hard-coded "0" with your new state
//      */
//     let [numClick, setNumClick] = React.useState("0")
    
//     function handleMinusClick() {
//         setNumClick(prevNumClick => prevNumClick - 1)
//     }
    
//     function handlePlusClick() {
//         setNumClick(function(prevNumClick) {
//           return prevNumClick + 1
//         })
//     }
    
//     return (
//         <main className="container">
//             <h1>How many times will Bob say "state" in this section?</h1>
//             <div className="counter">
//                 <button onClick={handleMinusClick} className="minus" aria-label="Decrease count">–</button>
//                 <h2 className="count">{numClick}</h2>
//                 <button onClick={handlePlusClick} className="plus" aria-label="Increase count">+</button>
//             </div>
//         </main>
//     )
// }
