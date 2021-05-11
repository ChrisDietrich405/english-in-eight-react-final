import SidebarPage from "../../components/SidebarPage";
import PhrasalVerbs1 from "./phrasal-verbs-categories/PhrasalVerbs1";
import PhrasalVerbs2 from "./phrasal-verbs-categories/PhrasalVerbs2";
import PhrasalVerbs3 from "./phrasal-verbs-categories/PhrasalVerbs3";
import PhrasalVerbs4 from "./phrasal-verbs-categories/PhrasalVerbs4";
import PhrasalVerbsDefinition from "./phrasal-verbs-categories/PhrasalVerbsDefinition";

export default function PhrasalVerbs() {
    return <SidebarPage links={
        [
            {
                title: "Phrasal Verbs Definition",
                path: "/phrasal-verbs-categories/phrasal-verbs-definition",
                component: PhrasalVerbsDefinition
            },
            {
                title: "Phrasal Verbs Definition",
                path: "/phrasal-verbs-categories/phrasal-verbs-definition",
                component: PhrasalVerbsDefinition
            },
            {
                title: "Phrasal Verbs List One",
                path: "/phrasal-verbs-categories/phrasal-verbs1",
                component: PhrasalVerbs1
            },
            {
                title: "Phrasal Verbs List Two",
                path: "/phrasal-verbs-categories/phrasal-verbs2",
                component: PhrasalVerbs2
            },
            {
                title: "Phrasal Verbs List Three",
                path: "/phrasal-verbs-categories/phrasal-verbs3",
                component: PhrasalVerbs3
            },
            {
                title: "Phrasal Verbs List Four",
                path: "/phrasal-verbs-categories/phrasal-verbs4",
                component: PhrasalVerbs4
            },
        ]
    } />;
    
}