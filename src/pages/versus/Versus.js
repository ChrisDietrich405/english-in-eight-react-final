import SidebarPage  from "../../components/SidebarPage";
import RememberVersusRemind from "./versus-categories/RememberVersusRemind";
import SayVersusTell from "./versus-categories/SayVersusTell";
import SpeakVersusTalk from "./versus-categories/SpeakVersusTalk";
import VersusDefinition from "./versus-categories/VersusDefinition";


export default function Versus() {
    return <SidebarPage links={
            [
                {
                    title: "Versus Definition",
                    path: "/versus-expressions/versus-definition",
                    component: VersusDefinition
                },
                {
                    title: "Remember Versus Remind",
                    path: "/versus-expressions/remember-versus-remind",
                    component: RememberVersusRemind
                },
                {
                    title: "Say Versus Tell",
                    path: "/versus-expressions/say-versus-tell",
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
