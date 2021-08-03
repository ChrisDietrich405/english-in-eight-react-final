import SidebarPage from "../../components/SidebarPage";
import RememberVersusRemind from "./versus-categories/RememberVersusRemind";
import AllVersusEvery from "./versus-categories/AllVersusEvery";
import SayVersusTell from "./versus-categories/SayVersusTell";
import SpeakVersusTalk from "./versus-categories/SpeakVersusTalk";
import VersusDefinition from "./versus-categories/VersusDefinition";

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
                    title: "All Versus Every",
                    path: "/versus-categories/all-versus-every",
                    component: AllVersusEvery
                },
                {
                    title: "Say Versus Tell",
                    path: "/versus-categories/say-versus-tell",
                    component: SayVersusTell
                },
                {
                    title: "Speak Versus Talk",
                    path: "/versus-categories/speak-versus-talk",
                    component: SpeakVersusTalk
                },
            ]
        } />;
}
