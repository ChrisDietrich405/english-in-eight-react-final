import SidebarPage from "../../components/SidebarPage"
import SimplePresent from "./present-verb-tenses/SimplePresent";
import PresentContinuous from "./present-verb-tenses/PresentContinuous";
import PresentPerfect from "./present-verb-tenses/PresentPerfect";
import PresentPerfectContinuous from "./present-verb-tenses/PresentPerfectContinuous";
import VerbDefinition from "./present-verb-tenses/VerbDefinition"


export default function PresentTenseVerbs() {
    return (
        <SidebarPage title="Present Tense Verbs" links={
            [
                {
                    title: "Verbs",
                    path: "/present-verb-tenses/verb-definition",
                    component: VerbDefinition 
                }, 
                {
                    title: "Simple Present",
                    path: "/present-verb-tenses/simple-present",
                    component: SimplePresent
                }, 
                {
                    title: "Present Continuous", 
                    path: "/present-verb-tenses/present-continuous",
                    component: PresentContinuous
                }, 
                {
                    title: "Present Perfect",
                    path: "present-verb-tenses/present-perfect",
                    component: PresentPerfect
                },
                {
                    title: "Present Perfect Continuous",
                    path: "present-verb-tenses/present-perfect-continuous",
                    component: PresentPerfectContinuous
                } 
            ]
        } />
    )
}














