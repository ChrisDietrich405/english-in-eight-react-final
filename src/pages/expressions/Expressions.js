import SidebarPage from "../../components/SidebarPage";
import Expressions1 from "./expressions-categories/Expressions1";
import Expressions2 from "./expressions-categories/Expressions2";
import Expressions3 from "./expressions-categories/Expressions3";
import Expressions4 from "./expressions-categories/Expressions4";
import ExpressionsDefinition from "./expressions-categories/ExpressionsDefinition";


export default function Expressions() {
    return <SidebarPage title="Expressions" links={
            [
                {
                    title: "Expressions Definition",
                    path: "/expressions-categories/expressions-definition",
                    component: ExpressionsDefinition
                },
                {
                    title: "Expressions List 1",
                    path: "/expressions-categories/expressions1",
                    component: Expressions1
                },
                {
                    title: "Expressions List 2",
                    path: "/expressions-categories/expressions2",
                    component: Expressions2
                },
                {
                    title: "Expressions List 3",
                    path: "/expressions-categories/expressions3",
                    component: Expressions3
                },
                {
                    title: "Expressions List 4",
                    path: "/expressions-categories/expressions4",
                    component: Expressions4
                },
            ]
        } />;
}
