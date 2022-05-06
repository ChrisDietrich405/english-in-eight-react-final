//for the quizzes get rid of the letters
//add the feedback underneath
//add a third value alert that notifies the user that the question wasn't answered
//after user submits disable all the questions (bullets) that were answered
//notification of the questions that the user didn't answer
//after user clicks submit if some of the questions aren't answered change opacity
//of the button and also add a notification at the end of the quiz that the user they didn't
//answer for example questions 4, 5

//the search button in the navbar should have the blue as the default

import ContentPage from "../../components/ContentPage";
import PastContinuous from "./past-verb-tenses/PastContinuous";
import PastPerfect from "./past-verb-tenses/PastPerfect";
import PastTenseVerbDefinition from "./past-verb-tenses/PastTenseVerbDefinition";
import PastSimple from "./past-verb-tenses/PastSimple";
import PastPerfectContinuous from "./past-verb-tenses/PastPerfectContinuous";

export default function PastTenseVerbs() {
  return (
    <ContentPage
      links={[
        {
          title: "Past Tense Verbs",
          path: "/past-verb-tenses/past-tense",
          component: PastTenseVerbDefinition,
        },
        {
          title: "Past Simple",
          path: "/past-verb-tenses/past-simple",
          component: PastSimple,
        },
        {
          title: "Past Continuous",
          path: "/past-verb-tenses/past-continuous",
          component: PastContinuous,
        },
        {
          title: "Past Perfect",
          path: "/past-verb-tenses/past-perfect",
          component: PastPerfect,
        },
        {
          title: "Past Perfect Continuous",
          path: "/past-verb-tenses/past-perfect-continuous",
          component: PastPerfectContinuous,
        },
      ]}
    />
  );
}
