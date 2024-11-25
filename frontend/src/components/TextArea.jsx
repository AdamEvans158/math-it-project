import styles from "./text-area.module.css";
import italicIcon from "../assets/italic-icon.svg";
import boldIcon from "../assets/bold-icon.svg";
import headingIcon from "../assets/heading-icon.svg";
import piIcon from "../assets/pi.png";
import {createSignal} from "solid-js";

function HeaderButton({image, about, sentinel, getCurrentText, setCurrentText}){

    const addSentinelToText = () => {
        setCurrentText(getCurrentText() + " " + sentinel + " ");
    }

    return (
        <div className={styles.topSectionButtonWrapper}>

            <img src={image} alt="" class={styles.topSectionButtonImage}/>

            <div className={styles.buttonAboutWrapper}>
                <p className={styles.buttonAboutText}>{about}</p>
            </div>
        </div>
    )
}

function TextArea(){
    const topButtons = [
        {
            image: headingIcon,
            about: "Add Heading",
            sentinel: "#"
        },
        {
            image: boldIcon,
            about: "Make Text Bold",
            sentinel: "*"
        },
        {
            image: italicIcon,
            about: "Make Text Italicized",
            sentinel: "~"
        },
        {
            image: piIcon,
            about: "Add Mathjax",
            sentinel: "$"
        }
    ]

    const [currentText, setCurrentText] = createSignal("");

    return (

        <div className={styles.textAreaWrapper}>
            <div className={styles.topSection}>
                <div className={styles.textButtons}>
                    {topButtons.map(button => {
                        return (
                            <HeaderButton image={button.image} about={button.about} sentinel={button.sentinel} getCurrentText={currentText} setCurrentText={setCurrentText}/>
                        )
                    })}
                </div>
            </div>
            <div className={styles.bottomSection}>
                <textarea oninput={(e) => {
                    setCurrentText(e.target.value);
                }} value={currentText()}  name="" id="" cols="30" rows="10"></textarea>
            </div>
        </div>

    )
}

// <a href="https://www.flaticon.com/free-icons/pi" title="Pi icons">Pi icons created by bearicons - Flaticon</a>