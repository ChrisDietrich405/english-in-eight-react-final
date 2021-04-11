

export default function Home() {
    return (
        <div className="home">
            <div className="container">
                <h1>Welcome to <span className="title-span">English in Eight Minutes</span></h1>
                <p> This website offers English lessons you can complete in less than 8 minutes. Pick a topic, study a few
                    minutes, and then do the corresponding exercise. The focus is on English phrasal verbs, grammar, and
                    idiomatic expressions specific to <b> the United States. </b></p>
            </div>

            <section className="first-cards">


                <div className="phrasal-verbs-card">

                    <div className="phrasal-verbs-card-examples">
                        <div className="phrasal-verbs">
                            <div className="phrasal-verbs-icon">
                                <i className="far fa-comments fa-6x"></i>
                            </div>
                            <div className="phrasal-verbs-content">
                                <p className="phrasal-verbs-content-title">Phrasal Verbs</p>
                                <p className="phrasal-verbs-content-definition">Verb/Preposition combinations
                                    <br/>with a specific meaning</p>
                                <p className="phrasal-verbs-card-example">Get up, Look forward to, Speak out</p>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="idiomatic-expressions-card">
                    <div className="idiomatic-expressions-examples">
                        <div className="idiomatic-expressions">
                            <div>
                                <i className="far fa-comments fa-6x"></i>
                            </div>
                            <div className="phrasal-verbs-content">
                                <p className="idiomatic-expressions-title">Idiomatic Expressions</p>
                                <p className="idiomatic-expression-definition">Informal Expressions</p>
                                <p className="idiomatic-expressions-example">To wing it, Foolproof, Second wind</p>
                            </div>
                        </div>
                    </div>
                </div>

            </section>

            <section className="second-cards">
        
            
                <div className="noun-examples">
                    <i className="fas fa-tree"></i>
                    <p>Nouns</p>
                    <p><span className="noun-span">people, places and things</span></p>
                    <p>woman, tree, car</p>
                </div>


                <div className="verb-examples">
                    <i className="fas fa-running"></i>
                    <p>Verbs</p>
                    <p><span className="verb-span">action words</span></p>
                    <p>run, fight, sing</p>
                </div>


                <div className="adjective-examples">
                    <img src="/images/strong.png" className="strong-img" alt=""/>
                    <p>Adjectives</p>
                    <p><span className="adjective-span">describe nouns</span></p>
                    <p>smart, strong, funny</p>
                </div>

        
                <div className="adverb-examples">
                    <i className="fas fa-tree"></i>
                    <p>Adverbs</p>
                    <p><span className="adverb-span">describe adjectives</span></p>
                    <p>quickly, softly, slowly</p>
                </div>
        
    
            </section>
        </div>
    )
}