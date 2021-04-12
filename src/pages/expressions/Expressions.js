import SidebarPage from "../../components/SidebarPage";
import Expressions1 from "./Expressions1";

export default function Expressions() {
    return <SidebarPage title="Expressions" links={
            [
                {
                    title: "Expressions 1",
                    path: "/expressions/expressions1",
                    component: Expressions1
                }
            ]
        } />;
}
