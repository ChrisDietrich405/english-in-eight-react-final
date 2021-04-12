import SidebarPage from "../../components/SidebarPage"
import SimplePresent from "./present-verb-tenses/SimplePresent";
import PresentContinuous from "./present-verb-tenses/PresentContinuous";


export default function PresentTenseVerbs() {
    return (
        <SidebarPage title="Present Tense Verbs@" links={
            [
                {
                    title: "Simple Present",
                    path: "/present-verb-tenses/simple-present",
                    component: SimplePresent
                }, 
                {
                    title: "Present Continuous", 
                    path: "/present-verb-tenses/present-continuous",
                    component: PresentContinuous
                }
            ]
        } />
    )
}