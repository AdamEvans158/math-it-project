import styles from "./navbar.module.css"

function Navbar({ buttons }) {
    return (
        <nav className={styles.navbar}>

            <div className={styles.logoContainer}>
                <h1>Math-it</h1>
            </div>

            <div className={styles.navButtons}>
                {buttons.map( button => (
                    <button key={buttons.indexOf(button)}
                            className={`${styles.navButton} ${button.text === "Login" ? styles.loginButton : ""}`}>
                        {button.text}
                    </button>
                ))}
            </div>

        </nav>
    )

}

export default Navbar;