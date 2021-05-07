import SidebarPage from "../../components/SidebarPage"
import SimplePresent from "./present-verb-tenses/SimplePresent";
import PresentContinuous from "./present-verb-tenses/PresentContinuous";
import PresentPerfect from "./present-verb-tenses/PresentPerfect";
import PresentPerfectContinuous from "./present-verb-tenses/PresentPerfectContinuous";
import VerbDefinition from "./present-verb-tenses/PresentTense"


export default function PresentTenseVerbs() {
    return (
        <SidebarPage title="Present" links={
            [
                {
                    title: "Verbs",
                    path: "/present-verb-tenses/present-tense",
                    component: VerbDefinition 
                }, 
                {
                    title: "Simple",
                    path: "/present-verb-tenses/simple-present",
                    component: SimplePresent
                }, 
                {
                    title: "Continuous", 
                    path: "/present-verb-tenses/present-continuous",
                    component: PresentContinuous
                }, 
                {
                    title: "Perfect",
                    path: "present-verb-tenses/present-perfect",
                    component: PresentPerfect
                },
                {
                    title: "Perfect Continuous",
                    path: "present-verb-tenses/present-perfect-continuous",
                    component: PresentPerfectContinuous
                } 
            ]
        } />
    )
}














