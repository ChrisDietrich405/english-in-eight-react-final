// import "../../../styles/pages/images.scss"

export default function NounDefinition() {
    return(
        <>
            <div className="page-title">
                <h2>Nouns Definition</h2>
            </div>
            <div className="page-body">
                <p>A noun is a word that functions as the name of a specific object or set of objects, such as people, places or things </p>
            </div>
            <div className="noun-definition-pictures-container">
                <div className="noun-definition-pictures">
                    <img src="../../../images/person-nouns-definition.jpg" alt=""/>
                    <p>Person</p>
                    <p>(Terry Crews)</p>
                </div>
                <div className="noun-definition-pictures">
                    <img src="../../../images/place-nouns-definition.jpg" alt=""/>
                    <p>Place</p>
                    <p>(Taj Mahal)</p>
                </div>
                <div className="noun-definition-pictures">
                    <img src="../../../images/thing-nouns-definition.jpg" alt=""/>
                    <p>Thing</p>
                    <p>(IPhone)</p>
                </div>
            </div>

            
        </>
    )
}