import ContentPage from "../../components/ContentPage";
import SimplePresent from "./present-verb-tenses/SimplePresent";
import PresentContinuous from "./present-verb-tenses/PresentContinuous";
import PresentPerfect from "./present-verb-tenses/PresentPerfect";
import PresentPerfectContinuous from "./present-verb-tenses/PresentPerfectContinuous";
import PresentTenseVerbDefinition from "./present-verb-tenses/PresentTenseVerbDefinition";

export default function PresentTenseVerbs() {
  return (
    <ContentPage
      links={[
        {
          title: "Present Tense Verbs",
          path: "/present-verb-tenses/present-tense",
          component: PresentTenseVerbDefinition,
        },
        {
          title: "Simple Present",
          path: "/present-verb-tenses/simple-present",
          component: SimplePresent,
        },
        {
          title: "Present Continuous",
          path: "/present-verb-tenses/present-continuous",
          component: PresentContinuous,
        },
        {
          title: "Present Perfect",
          path: "/present-verb-tenses/present-perfect",
          component: PresentPerfect,
        },
        {
          title: "Present Perfect Continuous",
          path: "/present-verb-tenses/present-perfect-continuous",
          component: PresentPerfectContinuous,
        },
      ]}
    />
  );
}
