import styles from './home.module.scss';

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
                        Sigin In
                    </button>
                    <button
                        className={styles.buttonSolid}
                        onClick={() => launchUrl(dashBoardSignUpUrl)}
                    >
                        Sign Up
                    </button>
                </div>
            </div>
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
                        Create Your Free Account Today
                    </button>
                </div>
            </div>
            <div className={styles.illustrationHolder}>
                <img src="/images/storeImage.png" alt="" />
            </div>
        </div>
    );
};

export default Home;
