import SidebarPage from "../../components/SidebarPage"
import FutureContinuous from "./future-verb-tenses/FutureContinuous";
import FuturePerfect from "./future-verb-tenses/FuturePerfect";
import FutureTenseVerbDefinition from "./future-verb-tenses/FutureTenseVerbDefinition";
import FutureSimple from "./future-verb-tenses/FutureSimple";
import FuturePerfectContinuous from "./future-verb-tenses/FuturePerfectContinuous"

export default function PastTenseVerbs() {
    return (
        <SidebarPage links={
            [
                {
                    title: "Future Tense Verbs",
                    path: "/future-verb-tenses/past-tense",
                    component: FutureTenseVerbDefinition 
                },  
                {
                    title: "Future Simple",
                    path: "/future-verb-tenses/simple-future",
                    component: FutureSimple
                }, 
                {
                    title: "Future Continuous",
                    path: "/future-verb-tenses/future-continuous",
                    component: FutureContinuous
                }, 
                {
                    title: "Future Perfect",
                    path: "/future-verb-tenses/future-perfect",
                    component: FuturePerfect
                }, 
                {
                    title: "Future Perfect Continuous",
                    path: "/future-verb-tenses/future-perfect-continuous",
                    component: FuturePerfectContinuous
                }, 
                
            ]
        } />
    )
}