import SidebarPage from "../../components/SidebarPage"
import UncountableAndCountable from "./noun-categories/UncountableAndCountable";
import Collective from "./noun-categories/Collective";
import PossessivePronouns from "./noun-categories/PossessivePronouns";
import NounDefinition from "./noun-categories/NounDefinition";



export default function Nouns() {
    return (
        <SidebarPage title="Nouns" links={
            [
                {
                    title: "Noun Definition",
                    path: "/noun-categories/noun-definition",
                    component: NounDefinition
                }, 
                {
                    title: "Countable",
                    path: "/noun-categories/uncountable-and-countable",
                    component: UncountableAndCountable
                }, 
                {
                    title: "Collective", 
                    path: "/noun-categories/collective",
                    component: Collective
                }, 
                {
                    title: "Possessive",
                    path: "/noun-categories/possessive-pronouns",
                    component: PossessivePronouns
                }
            ]
        } />
    )
}