import React, {useState} from "react";
let Paginator = ({onPageClick,totalPages,currPage})=>{

        let [currPortionNumber,setCurrPortionNumber] = useState(Math.ceil(currPage/10));
        let portionStart = 10*(currPortionNumber-1)+1;
        let portionEnd = 10*currPortionNumber;
        let arr = []
        const onPrevPageClick = () =>{
            setCurrPortionNumber(currPortionNumber-1)
        }
        const onNextPageClick = () =>{
            setCurrPortionNumber(currPortionNumber+1)
        }
        for(let i = portionStart; i<=portionEnd; i++){
            arr.push(i)
        }
       return  <ul className="friends__pages">
           {portionStart>1 && <button onClick={onPrevPageClick}> prev</button>}
            {arr.map(n => {
                console.log(currPage)
                return <li onClick={() => {onPageClick(n)}} style={n==currPage?{fontSize:'20px'}:{}} className="friends__page-link" key={n}>{n}</li>
            })}
           {portionEnd<totalPages && <button onClick={onNextPageClick}>next</button>}
        </ul>
}

export default Paginator;