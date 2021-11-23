import { useState } from "react";
import { AiOutlineCheckCircle, AiOutlineCloseCircle, AiOutlineQuestionCircle }  from "react-icons/ai"
import "../styles/components/quiz.scss"

function AnswerIcon({isAnswered, isAnsweredCorrectly}) {  //this is component. components are returned in the JSX code
    if(!isAnswered) {     //is Answered and is AnsweredCorrectly are props 
        return <><AiOutlineQuestionCircle/> <span>Not answered</span></> 
    } else if(isAnsweredCorrectly) {
        return <AiOutlineCheckCircle className="check"/>
    } else {
        return <AiOutlineCloseCircle className="close"/>
    }
}

export default function Quiz(props) {

    const [answers, setAnswers] = useState({})

 
    const select = (answer, i) => {  
        setAnswers({ ...answers, ...{ [i]: ("correctAnswer" in answer && answer.correctAnswer) } })
    }
    
    const [submitted, setSubmitted] = useState(false) //if this is true the correct answers are already shown
    
    const submit = (e) => {
          e.preventDefault()
          setSubmitted(true)
    }

    const reset = (e) => {
        setAnswers({})
        setSubmitted(false)
    }

    return (
        <div className="quiz-container">
            <form onSubmit={submit} onReset={reset}>
                <div className="quiz-title">
			    	<h4>{ props.title }</h4>
                </div>
                <ol>
                {props.questions.map((question, i) => 
                    <li className="questions-and-answers"> 
                    {question.title} 
                        <ul>
                            {question.possibleAnswers.map(possibleAnswer => {
                                return <li><input disabled={submitted} onClick={() => select(possibleAnswer, i) } name={"twoPossibleAnswers" + i} type="radio" className="radio"/>{possibleAnswer.title}</li>
                            })}
                        </ul>
                        <div className="answer">
                        {submitted == true  && <AnswerIcon className="answer-icon" isAnswered={i in answers}  isAnsweredCorrectly={i in answers && answers[i]==true}/>}
                        </div>
                    </li>)}
                </ol>
                <div className="quiz-buttons">
                    <button className="btn btn-primary">Check your answers</button>
                    <button className="btn btn-secondary" type="reset">Reset</button>
                </div>
            </form>
        </div>
    )

}