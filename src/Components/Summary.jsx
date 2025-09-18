import React from 'react'

const Summary = ({options,answers}) => {
    console.log(answers);
    console.log(options);
  return (
    <div className='wholeSum'>
        <h1>Summary</h1>
        <div className='SumBox'>
          {options.map((ele,index)=>{
           return(<div><h2 key={index}>{ele.question}</h2>
           <h2>Your Answers</h2>
           <h3 key={`${index}-your`}>{ele.optionSelect[answers[index]]}</h3>
           <h2>Correct Answer</h2>
           <h3 key={`${index}-correct`}>{ele.optionSelect[ele.answer]}</h3>
           <br/>
           <br/>
           <h3>Explanation:</h3><div key={`${index}-explain`}>{ele.explanation}</div>
           </div>);
          })}
        </div>
    </div>
  )
}

export default Summary