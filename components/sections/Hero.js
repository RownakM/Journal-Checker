import styles from '../../styles/Hero.module.css'
import Image from 'next/image';
import Search from '../Search';

const Hero = () => {
    return (
        <>
            <section className={styles.section}>
                <div className={styles.container}>
                    <div className={styles.heading}>
                        <Image src="/images/logoCustom.png" height={100} width={350} />
                    </div>
                    <div className={styles.search}>
                        <Search />
                    </div>
                    <div className={styles.desc}>
                        <span>
                        This search engine searches through relevant database 
                        and checks whether the journal is accepted for promotion, 
                        according to the latest NMC guidelines.
                            <hr />
                        </span>
                    </div>
                    <div className={styles.footer}>
                        <div className={styles.footerContainer}>
                            <span>Supported by</span>
                            <Image src="/images/logo.png" width={75} height={75}/>
                        </div>
                    </div>
                </div>
                <div className={styles.update}>
                    <span>Last Updated On: 12/04/2022</span>
                    <span>23:23 hr</span>
                </div>
            </section>
        </>
    );
}
 
export default Hero;