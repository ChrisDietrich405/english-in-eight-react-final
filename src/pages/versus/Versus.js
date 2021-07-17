import SidebarPage from "../../components/SidebarPage";
import RememberVersusRemind from "./versus-categories/RememberVersusRemind";
import SayVersusTell from "./versus-categories/PhrasalVerbs1";
import SpeakVersusTalk from "./versus-categories/SpeakVersusTalk";
import VersusDefinition from "./versus-categories/VersusDefinition";
import PhrasalVerbs1 from "./versus-categories/PhrasalVerbs1";


export default function Versus() {
    return <SidebarPage links={
            [
                {
                    title: "Versus Definition",
                    path: "/versus-categories/versus-definition",
                    component: VersusDefinition
                },
                {
                    title: "Remember Versus Remind",
                    path: "/versus-categories/remember-versus-remind",
                    component: RememberVersusRemind
                },
                {
                    title: "Phrasal",
                    path: "./versus-categories/PhrasalVerbs1",
                    component: PhrasalVerbs1
                },
                {
                    title: "Say Versus Tell",
                    path: "/versus-categories/say-versus-tell",
                    component: SayVersusTell
                },
                {
                    title: "Speak Versus Talk",
                    path: "/versus-expressions/speak-versus-talk",
                    component: SpeakVersusTalk
                },
            ]
        } />;
}
