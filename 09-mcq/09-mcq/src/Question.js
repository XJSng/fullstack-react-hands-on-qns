import React, {useState} from 'react';

export default function Question() {

    const [answer, setAnswer] = useState("");

    return (
        <section id="qns1">
        <h1>Question 1: Which island is Mount Faber, Singapore, located on?</h1>
        <ul>
          <li style={{
              listStyle: "none"
            }}>
            <input name="qns1answer"
            type="radio"
            value="A"
            checked={answer === "A"}
            onChange={() => {
              setAnswer("A")
          }}/><label>A. Palau Ubin</label>
          </li>
          <li style={{
              listStyle: "none"
            }}>
            <input name="qns1answer" type="radio" value="B" 
            checked={answer === "B"}
            onChange={() => {
              setAnswer("B")
          }}/><label>B. Palau Ujong</label>
          </li>
          <li style={{
              listStyle: "none"
            }}>
            <input name="qns1answer" type="radio" value="C"
            checked={answer === "C"}
            onChange={() => {
              setAnswer("C")
          }}/><label>C. Palau Tekong</label>
          </li>
          <li style={{
              listStyle: "none"
            }}>
            <input name="qns1answer" type="radio" value="D"
            
            checked={answer === "D"}
            onChange={() => {
              setAnswer("D")
          }}/><label>D. Saint John Island</label>
          </li>
        </ul>
      </section>
    )
}
