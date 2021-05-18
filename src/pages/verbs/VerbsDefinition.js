import SidebarPage from "../../components/SidebarPage"
import PresentTenseVerbDefinition from "./present-verb-tenses/PresentTenseVerbDefinition"
import VerbsDef from "./verbs-definition/VerbsDef"



export default function VerbsDefinition() {
    return (
        <SidebarPage links={
            [
                {
                    title: "Verbs Definition",
                    path: "/verbs-definition/verbs-def",
                    component: VerbsDef 
                },
                {
                    title: "Present Tense Verbs",
                    path: "/verbs-definition/present-tense",
                    component: PresentTenseVerbDefinition 
                },  
            ]
        } />
    )
}