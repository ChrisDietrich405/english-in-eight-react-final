import Sidebar from "../../components/SidebarPage"
import AdjectiveDefinition from "./adjective-categories/AdjectiveDefinition"
import PossessiveAdjectives from "./adjective-categories/PossessiveAdjectives"


export default function Adjectives() {
    return (
        <Sidebar links={
            [
                {
                    title: "Adjective Definition",
                    path: "/adjective-categories/adjective-definition",
                    component: AdjectiveDefinition
                },
                {
                    title: "Possessive Adjectives",
                    path: "/adjective-categories/possessive-adjective",
                    component: PossessiveAdjectives
                }, 


                
            ]
        } /> 
    )
}