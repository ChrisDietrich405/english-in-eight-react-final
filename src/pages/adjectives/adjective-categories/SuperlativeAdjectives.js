import Quiz from "../../../components/Quiz"

export default function SuperlativeAdjectives() {
    return (
        <div className="superlative-adjectives">
            <div className="page-title">
                <h2>Superlative Adjectives</h2>
            </div>
            <div className="page-body">
                <p className="grammar-explanation-paragraph">To make the superlative form (like 'biggest' or 'most expensive'), first we need to know how many syllables are in the adjective.</p>
            </div>
            <div className="page-body">
                <p>Adjectives with one syllable</p>
                <p>Usually if an adjective has only one syllable, we add 'est' to make the superlative form.</p>
                <ul className="page-examples">
                    <li>clean → cleanest</li>
                    <li>small → smallest</li>
                    <li>young → youngest</li>
                    <li>tall → tallest</li>

                </ul>
                <p>There are some spelling changes. If there is one vowel followed by one consonant at the end of the adjective, we often double the consonant.</p>
                <ul className="page-examples">
                    <li>wet → wettest</li>
                    <li>big → biggest</li>
                    <li>hot → hottest</li>
                    <li>thin → thinnest</li>
                </ul>
                <p>If the adjective ends in 'y', this often changes to 'i'.</p>
                <ul className="page-examples">
                    <li>dry → driest</li>
                    <li>busy → busiest</li>   
                </ul>
                <p>If the adjective ends in 'e', we don't add another 'e', just 'r'.</p>
                <ul className="page-examples">
                    <li>nice → nicest</li>
                    <li>large → largest</li>   
                </ul>
                <p>There are a few adjectives that we have to use'most' with, even though they only have one syllable. We CAN'T add 'er' or 'est'.</p>
                <ul className="page-examples">
                    <li>fun → most fun (NOT  funnest)</li>
                    <li>real → most real (NOT realest)</li> 
                    <li>right → most right (NOT rightest)</li>
                    <li>wrong → most wrong (NOT wrongest)</li>    
                </ul>
                <p>Adjectives with two syllables</p>
                <p>For adjectives with two syllables we generally use 'most'.</p>
                <ul className="page-examples">
                    <li>careful → most careful</li>
                    <li>bored → most bored</li>     
                </ul>
                <p>But some two syllable adjectives can take  'est'. It's also fine to use 'most' (for the superlative).</p>
                <ul className="page-examples">
                    <li>clever → cleverest</li>
                    <li>simple → simplest</li>   
                    <li>narrow → narrowest</li>
                    <li>quiet → quietest</li>   
                </ul>
                <p>Adjectives with two syllables that end in 'y' usually can add or 'est' (y generally changes to i). It's also fine to use 'more' or 'most'.</p>
                <ul className="page-examples">
                    <li>dirty → dirtiest</li>
                    <li>pretty → prettiest</li>   
                    <li>happy → happiest</li>
                    <li>ugly → ugliest</li>   
                </ul>
                <p>Adjectives with more than two syllables</p>
                <p>Adjectives with more than two syllables can only make their superlative by using 'most'.</p>
                <ul className="page-examples">
                    <li>beautiful → most beautiful</li>
                    <li>intelligent → most intelligent</li>   
                    <li>interesting → more most interesting</li>
                    <li>expensive → most expensive</li>   
                </ul>
                <p>Irregular adjectives</p>
                <p>There are also some irregular adjectives. We just need to learn these forms.</p>
                <ul className="page-examples">
                    <li>good →  best</li>
                    <li>bad → worst</li>   
                    <li>far →  furthest</li>
                    <li>little → least</li>   
                    <li>much → most</li>   
                </ul>
            </div>
            <Quiz title="Quiz" questions={[
                {
                    title: "Dolphins are the ________________________(intelligent) animals",
                    possibleAnswers: [
                        {title: "most intelligent", correctAnswer: true},
                        {title: "intelligentest"},
                    ],
                    userAnswer: "",
                },
                {
                    title: "Nia is the ___________________ (old) daughter.",
                    possibleAnswers: [
                        {title: "oldest", correctAnswer: true},
                        {title: "most old"},
                    ],
                    userAnswer: "",
                },
                {
                    title: "Samantha is the _______________ (quiet) person in the class.",
                    possibleAnswers: [
                        {title: "quitest"},
                        {title: "quietest", correctAnswer: true},
                    ],
                    userAnswer: "",
                },
                {
                    title: "Whales are the ________________ (large) animals.",
                    possibleAnswers: [
                        {title: "most large"},
                        {title: "largest", correctAnswer: true},
                    ],
                    userAnswer: "",
                },
                {
                    title: "My Latin class is my ______________ (boring) class. ",
                    possibleAnswers: [
                        {title: "most boring", correctAnswer: true},
                        {title: "boringest"},
                    ],
                    userAnswer: "",
                },
                {
                    title: "The streets here are the _______________ (narrow) in the city.",
                    possibleAnswers: [
                        {title: "narrowest", correctAnswer: true},
                        {title: "narroest"},
                    ],
                    userAnswer: "",
                },
                {
                    title: "Malcolm is the _______________ (busy) man I know.",
                    possibleAnswers: [
                        {title: "busiest", correctAnswer: true},
                        {title: "busyest"},
                    ],
                    userAnswer: "",
                },
                {
                    title: "Demetrius is the ________________ (ambitious) director at his company.",
                    possibleAnswers: [
                        {title: "ambitiousest"},
                        {title: "most ambitious", correctAnswer: true},
                    ],
                    userAnswer: "",
                },
                {
                    title: "My garden is the  ________________  (colorful) garden in my neighborhood.",
                    possibleAnswers: [
                        {title: "colorfulest"},
                        {title: "most colorful", correctAnswer: true},
                    ],
                    userAnswer: "",
                },
                {
                    title: "His house is the _______________ (comfortable) house I’ve ever been in.",
                    possibleAnswers: [
                        {title: "most comfortable", correctAnswer: true},
                        {title: "comfortableist"}
                    ],
                    userAnswer: "",
                },
                
            ]}></Quiz>

        </div>
    )
}