import Navbar from './Navbar.js';
import styles from "./landing.module.css";

function Landing() {

    console.log(styles);

        return (

            <>
                <Navbar buttons = {[
                    {
                        text: "Education"
                    },
                    {
                        text: "About"
                    },
                    {
                        text: "Login"
                    }
                ]}/>

                <div className={styles.titleContainer}>

                    <h1 className={styles.pageTitle}>Math-It</h1>
                    <p className={styles.openingText}>For all your trouble in</p>
                    <div className={styles.subjectContainer}>

                        <p className={styles.subjectText1}>Algebra</p>

                    </div>
                </div>


            </>

        )

}

export default Landing;