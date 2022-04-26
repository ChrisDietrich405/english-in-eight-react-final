import Sidebar from "../../components/ContentPage";
import AdjectiveDefinition from "./adjective-categories/AdjectiveDefinition";
import PossessiveAdjectives from "./adjective-categories/PossessiveAdjectives";
import SuperlativeAdjectives from "./adjective-categories/SuperlativeAdjectives";
import ComparativeAdjectives from "./adjective-categories/ComparativeAdjectives";

export default function Adjectives() {
  return (
    <Sidebar
      links={[
        {
          title: "<b>Adjective Definition</b>",
          path: "/adjective-categories/adjective-definition",
          component: AdjectiveDefinition,
        },
        {
          title: "Possessive Adjectives",
          path: "/adjective-categories/possessive-adjectives",
          component: PossessiveAdjectives,
        },
        {
          title: "Superlative Adjectives",
          path: "/adjective-categories/superlative-adjectives",
          component: SuperlativeAdjectives,
        },
        {
          title: "Comparative Adjectives",
          path: "/adjective-categories/comparative-adjectives",
          component: ComparativeAdjectives,
        },
      ]}
    />
  );
}
