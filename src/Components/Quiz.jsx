import React, { useState } from "react";
import Summary from "./Summary";
import { Link, useNavigate } from "react-router-dom";
import Home from "./Home";

const App = () => {
    const navigate = useNavigate();

    const logout = async ()=>{
        const result = await fetch("https://fullstack-backend-ole8.onrender.com/app/logOut",{
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include"
        });

        if(result.status==200){
            navigate('/')
        }
    }
  let options = [
    {
      question:
        " Q.1) Which of the following is true about the structure of a node in a singly linked list?",
      optionSelect: [
        "A) A node contains data and a pointer to the previous node.",
        "B) A node contains only data.",
        "C) A node contains data and a pointer to the next node.",
        "D) A node contains pointers to both previous and next nodes.",
      ],
      answer: [2],
      explanation: (<div><h3>In a singly linked list, each node contains two components:</h3>
        <ul>
            <li>Data: the actual value.</li>
            <li>Next: a pointer/reference to the next node in the sequence.</li>
        </ul>
        </div>
      ),
    },

    {
      question:
        " Q.2) What is the time complexity of inserting a node at the beginning of a singly linked list?",
      optionSelect: ["A) O(n)", "B) O(1)", "C) O(log n)", "D) O(n log n)"],
      answer: [1],
      explanation: 
      <div>
      <h3>Inserting at the beginning involves:</h3>
        <ol>
        <li>Creating a new node.</li>
        <li>Creating a new node.</li>
        <li>Updating the head to this new node.</li><br/>
        <h3>All these are constant-time operations.</h3>        
        </ol>
        
        </div>,
    },

    {
      question:
        " Q.3) In a Singly Linked List, how do you delete the last node?",
      optionSelect: [
        "A) Update the second last node’s next to NULL.",
        "B) Update the last node's data to NULL. ",
        "C) Update the head to NULL. ",
        "D) It is not possible to delete the last node.",
      ],
      answer: [0],
      explanation: <div><h3>We delete the last node in a singly linked list by setting the second last node’s next pointer to
    NULL.</h3></div>,
    },

    {
      question:
        " Q.4) What does the next pointer in a node of a Singly Linked List represent?",
      optionSelect: [
        "A) Points to the previous node.",
        "B) Points to the next node.",
        "C) Points to the head.",
        "D) Points to NULL.",
      ],
      answer: [1],
      explanation: <div>The next pointer stores the address of the next node in the sequence, enabling forward traversal.</div>,
    },
  ];

const[answer,selectAnswer]= useState([]);
const[i,setI] = useState(0);

  function answer_select(index){
    selectAnswer(prevAnswers=>[...prevAnswers,index]);
    setI(prev=>prev+1);
  }



  return (
    <>
    <div className="Quiz">
      <h1>Quiz</h1>
      <button onClick={logout} className="logout-btn">LogOut Account</button>
      { (i<options.length) ?(
        <div className="wholeBlock">
        

        <h2>{options[i].question}</h2>
        <div className="options" >
            {options[i].optionSelect.map((ele,index)=>{
              return(<button id="options_to_select" onClick={()=>{answer_select(index)}} key={index}>{ele}</button>)
            }
          )}
          
        </div>
      </div>)



      :(
          <Summary answers={answer} options={options}/>
        )
        }
        </div>
    </>
  );
};

export default App;
