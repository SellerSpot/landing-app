import styles from './Home.module.scss';

const Home = () => {
    const dashBoardSignInUrl = `https://dashboard.sellerspotdev.tech/auth/signin`;
    const dashBoardSignUpUrl = `https://dashboard.sellerspotdev.tech/auth/signup`;

    const launchUrl = (url: string) => window.open(url, '_self');

    return (
        <div className={styles.homeWrapper}>
            <div className={styles.headerWrapper}>
                <div className={styles.logoContainer}>
                    <img src="/images/logo.png" alt="" />
                </div>
                <div className={styles.callToActionHolder}>
                    <button
                        className={styles.buttonLink}
                        onClick={() => launchUrl(dashBoardSignInUrl)}
                    >
                        Sign in
                    </button>
                    <button
                        className={styles.buttonSolid}
                        onClick={() => launchUrl(dashBoardSignUpUrl)}
                    >
                        Sign up
                    </button>
                </div>
            </div>

            <div className={styles.mainContentWrapper}>
                <div className={styles.mainContent}>
                    <div className={styles.mainSlogan}>
                        Hassle-free End to End <br />
                        Retail Eco-System <br />
                        in One Place.
                    </div>
                    <div className={styles.subSlogan}>
                        From Inventory Management, Accounting, Invoicing <br />
                        to End to End Delivery in One Single platform.
                    </div>
                    <div className={styles.mainCallToActionHolder}>
                        <button
                            className={styles.buttonSolid}
                            onClick={() => launchUrl(dashBoardSignUpUrl)}
                        >
                            Create your free store today
                        </button>
                    </div>
                </div>
                <div className={styles.illustrationHolder}>
                    <img src="/images/storeImage.png" alt="" />
                </div>
            </div>
        </div>
    );
};

export default Home;
