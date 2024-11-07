import { createSignal } from "solid-js";
import styles from "./sign-up.module.css";
import classroomIcon from "../assets/classroom.svg";
import tutoringIcon from "../assets/tutoring.svg";
import studentIcon from "../assets/math-student.svg";

function SignUp() {
  const [userImg, setUserImg] = createSignal(studentIcon);

  const [userType, setUserType] = createSignal("learner");

  const toggleUser = (e) => {
    const parent = e.target.parentElement;

    for(let i = 0; i < parent.childNodes.length; i++){
      let child = parent.childNodes[i];
      child.className = child.className.replace(styles.activeButton, "");
    }

    e.target.className += styles.activeButton;
  }

  return (
    <div className={styles.pageContainer}>
        <div className={styles.contentWrapper}>
          <div className={styles.leftContent}>

            <div className={styles.signUpWrapper}>
              <h1 className={styles.signUpTitle}>Sign Up</h1>
              <div className={styles.signUpInputs}>

                <div className={styles.inputWrapper}>
                  <p className={styles.inputTitle}>Username:</p>
                  <input
                      type="text"
                      className={styles.inputField}
                      placeholder="Enter your Username"
                  />
                </div>

                <div className={styles.inputWrapper}>
                  <p className={styles.inputTitle}>Email:</p>
                  <input
                      type="text"
                      className={styles.inputField}
                      placeholder="Enter your Email Address"
                  />
                </div>

                <div className={styles.inputWrapper}>
                  <p className={styles.inputTitle}>Password:</p>
                  <input
                      type="text"
                      className={styles.inputField}
                      placeholder="Enter your Password"
                  />
                </div>
              </div>
              <button className={styles.signUpButton}>Sign Up</button>
            </div>
            <div className={styles.sidebar}>
              <button
                  className={styles.userTypeButton}
                  onClick={(e) => {
                    setUserImg(classroomIcon);
                    toggleUser(e);
                  }}
              >
                Educator
              </button>
              <button
                  className={styles.userTypeButton}
                  onClick={(e) => {
                    setUserImg(studentIcon);
                    toggleUser(e);
                  }}
              >
                Learner
              </button>
              <button
                  className={styles.userTypeButton}
                  onClick={(e) => {
                    setUserImg(tutoringIcon);
                    toggleUser(e);
                  }}
              >
                Tutor
              </button>
            </div>
          </div>
          <div className={styles.rightContent}>
            <div className={styles.userImgWrapper}>
              <img className={styles.userImg} src={userImg()} alt=""/>
            </div>

            <div class={styles.loginLinkWrapper}>
              <p class={styles.loginText}>Already have an Account?</p>
              <button className={styles.loginButton}>Login</button>
            </div>

          </div>
        </div>
    </div>
  );
}

export default SignUp;
