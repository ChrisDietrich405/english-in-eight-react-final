import { useState } from "react";
import { AiOutlineCheckCircle, AiOutlineCloseCircle }  from "react-icons/ai"
import "../styles/components/quiz.scss"



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
                    {question.title} {submitted == true  && ( i in answers && answers[i]==true ? <AiOutlineCheckCircle className="check"/> : <AiOutlineCloseCircle className="close"/>)}
                        <ul>
                            {question.possibleAnswers.map(possibleAnswer => {
                                return <li><input onClick={() => select(possibleAnswer, i) } name={"twoPossibleAnswers" + i} type="radio" className="radio"/>{possibleAnswer.title}</li>
                            })}
                        </ul>
                    </li>)}
                </ol>
                <button className="btn btn-primary">Check your answers</button>
                <button className="btn btn-secondary" type="reset">Reset</button>
            </form>
        </div>
    )

}