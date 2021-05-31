import SidebarPage from "../../components/SidebarPage"
import PastContinuous from "./past-verb-tenses/PastContinuous";
import PastPerfect from "./past-verb-tenses/PastPerfect";
import PastTenseVerbDefinition from "./past-verb-tenses/PastTenseVerbDefinition";
import SimplePast from "./past-verb-tenses/SimplePast";
import PastPerfectContinuous from "./past-verb-tenses/PastPerfectContinuous"

export default function PastTenseVerbs() {
    return (
        <SidebarPage links={
            [
                {
                    title: "Past Tense Verbs",
                    path: "/past-verb-tenses/past-tense",
                    component: PastTenseVerbDefinition 
                },  
                {
                    title: "Simple Past",
                    path: "/past-verb-tenses/simple-past",
                    component: SimplePast
                }, 
                {
                    title: "Past Continuous",
                    path: "/past-verb-tenses/past-continuous",
                    component: PastContinuous
                }, 
                {
                    title: "Past Perfect",
                    path: "/past-verb-tenses/past-perfect",
                    component: PastPerfect
                }, 
                {
                    title: "Past Perfect Continuous",
                    path: "/past-verb-tenses/past-perfect-continuous",
                    component: PastPerfectContinuous
                }, 
                
            ]
        } />
    )
}