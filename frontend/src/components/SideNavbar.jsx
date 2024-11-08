import styles from "./side-navbar.module.css";

function sideNavbar({ buttons }) {

    return (
        <div class={styles.navbar}>

                {buttons.map((button) => {
                    // Each button has an icon, title, active, and text property
                    return (
                        <div className={styles.navSection}>
                            <div className={styles.sectionHead}>
                                <img src={button.icon} className={styles.sectionIcon} alt="Icon image"/>
                                <h2 className={styles.sectionTitle}>{button.title}</h2>
                            </div>

                            <div className={styles.textSection}>
                                <p className={styles.sectionText}>{button.icon}</p>
                            </div>
                        </div>
                    )
                })}
        </div>
    )

}

export default sideNavbar;