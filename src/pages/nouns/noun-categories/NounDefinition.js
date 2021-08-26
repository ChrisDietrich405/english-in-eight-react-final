// import "../../../styles/pages/images.scss"

export default function NounDefinition() {
    return(
        <>
            <div className="page-title">
                <h2>Noun Definition</h2>
            </div>
            <div className="page-body">
                <p className="grammar-explanation-paragraph">A noun is a word that functions as the name of a specific object or set of objects, such as people, places or things </p>
            </div>
            <div className="definition-pictures-container">
                <div className="definition-pictures">
                    <img src="../../../images/person-nouns-definition.jpg" alt="Picture of actor Terry Crews"/>
                    <p>Person</p>
                    <p aria-hidden="true">(Terry Crews)</p>
                </div>
                <div className="definition-pictures">
                    <img src="../../../images/place-nouns-definition.jpg" alt="Picture of the Taj Mahal"/>
                    <p>Place</p>
                    <p aria-hidden="true">(Taj Mahal)</p>
                </div>
                <div className="definition-pictures">
                    <img src="../../../images/thing-nouns-definition.jpg" alt="Picture of IPhone"/>
                    <p>Thing</p>
                    <p aria-hidden="true">(IPhone)</p>
                </div>
            </div>

            
        </>
    )
}