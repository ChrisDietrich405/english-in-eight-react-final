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

 
    const select = (answer, i) => {   //below when the function is invoked possibleAnswer is the argument that replaces answer
        
        // const answerSelected = {}
        // const correctAnswer = "correctAnswer" in answer && answer.correctAnswer == true;
        // answerSelected[i] = correctAnswer;
        // const newStateOfAnswers = { ...answers, ...answerSelected };
        
        // setAnswers(newStateOfAnswers);
        
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
                {props.questions.map((question, i) => <li> 
                    {question.title} 
                        <ul>
                            {question.possibleAnswers.map(possibleAnswer => {
                                return <li><input disabled={submitted} onClick={() => select(possibleAnswer, i) } name={"twoPossibleAnswers" + i} type="radio" className="radio"/>{possibleAnswer.title}</li>
                            })}
                        </ul>
                        {submitted == true  && <AnswerIcon isAnswered={i in answers} isAnsweredCorrectly={i in answers && answers[i]==true}/>}
                    </li>)}
                </ol>
                <button className="btn btn-primary">Check your answers</button>
                <button className="btn btn-secondary" type="reset">Reset</button>
            </form>
        </div>
    )

}