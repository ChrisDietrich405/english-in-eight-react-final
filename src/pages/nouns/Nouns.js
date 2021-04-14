import SidebarPage from "../../components/SidebarPage"
import UncountableAndCountable from "./noun-categories/UncountableAndCountable";
import Collective from "./noun-categories/Collective";
import PossessivePronouns from "./noun-categories/PossessivePronouns";



export default function Nouns() {
    return (
        <SidebarPage title="Nouns" links={
            [
                {
                    title: "Uncountable and Countable",
                    path: "/noun-categories/uncountable-and-countable",
                    component: UncountableAndCountable
                }, 
                {
                    title: "Collective", 
                    path: "/noun-categories/collective",
                    component: Collective
                }, 
                {
                    title: "Possessive Pronouns",
                    path: "noun-categories/possessive-pronouns",
                    component: PossessivePronouns
                }
            ]
        } />
    )
}