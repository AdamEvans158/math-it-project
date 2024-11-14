import styles from "./subject-page.module.css"
import SideNavbar from "./SideNavbar";
import subjectsJSON from "../json/subjects.json";
import { Show } from "solid-js";
import SubjectButton from "./SubjectButton";
const subjects = subjectsJSON.subjects;

function SubjectPage({params}) {
    let subject = params.subject.replace("_", " ");

    let subjectTitle = subject[0].toUpperCase() + subject.substring(1);

    // Math Subjects Topic
    const getTopics = (targetSubject) => {
        for(let i = 0; i < subjectsJSON.subjects.length; i++)
            if(subjects[i].subject.toLowerCase() == targetSubject)
                return subjects[i].topics;
    }

    const topics = getTopics(subject);

    return (
        <div className={styles.wrapper}>
            <SideNavbar />
            <div className={styles.pageContent}>


                <Show when={topics}>
                    <h1 className={styles.subjectTitle}>{subjectTitle}</h1>

                    <div className={styles.topicsContainer}>
                        {topics.map((topic) => {
                            return (

                                <SubjectButton title={topic} />
                            )

                        })}
                    </div>
                </Show>

                <Show when={!topics}>
                    <div className={styles.noTopicsFoundWrapper}>
                        <h1 className={styles.noTopicsTitle}>Sorry, No Topics Where Found</h1>
                    </div>
                </Show>

            </div>

        </div>
    )

}
export default SubjectPage;