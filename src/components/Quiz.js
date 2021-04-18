import { useState } from "react";
import { AiOutlineCheckCircle, AiOutlineCloseCircle }  from "react-icons/ai"



export default function Quiz(props) {

    const [answers, setAnswers] = useState({})
   
    const select = (answer, i) => {
            setAnswers({...answers, ...{[i]: ("correctAnswer" in answer && answer.correctAnswer)}})
    }
    
    const [submitted, setSubmitted] = useState(false) //if this is true the correct answers are already shown
    
    const submit = (e) => {
          e.preventDefault()
          setSubmitted(true)
    }

    return (
        <div className="quiz-container">
            <form onSubmit={submit}>
                <div className="quiz-title">
			    	<h4>{ props.title }</h4>
                </div>
                <ol>
                {props.questions.map((question, i) => <li> 
                    {question.title} {submitted  && ( i in answers && answers[i]==true ? <AiOutlineCheckCircle className="check"/> : <AiOutlineCloseCircle className="close"/>)}
                        <ul>
                            {question.possibleAnswers.map(possibleAnswer => {
                                return <li><input onClick={() => select(possibleAnswer, i) } name={"question" + i} type="radio"/>{possibleAnswer.title}</li>
                            })}
                        </ul>
                    </li>)}
                </ol>
                <button>Check your answers</button>
            </form>
        </div>
    )

}