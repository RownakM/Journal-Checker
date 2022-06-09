import styles from '../../styles/Detail.module.css'
import Search from '../Search'
import Image from 'next/image'

const Detail = () => {
    const cross = <Image src="/images/cross.png" width={20} height={20}/>
    const tick = <Image src="/images/tick.png" width={20} height={20}/>
    const obj = JSON.parse(localStorage.getItem("detail"))
    const issnFunc = (obj) => {
        if (obj.issn != 'N/A') {
            return obj.issn
        } else if (obj.e_issn != 'N/A') {
            return obj.e_issn
        } else return 'N/A'
    }
    const tickCross = (obj, name) => {
        if (eval(`obj.in_${name}`)) return tick
        else return cross
    }

    const pmc = (obj) => {
        if (obj.in_pmc) {
            return (
            <div className={styles.journal}>
                <h4>PMC Information</h4>
                <div className={styles.flexContainer}>
                    <div className={styles.singleInfo}>
                        <p>Earliest Volume</p>
                        <p>{obj.earliest_volume}</p>   
                    </div>
                    <div className={styles.vertical}></div>
                    <div className={styles.horizontal}><hr /></div>
                    <div className={styles.singleInfo}>
                        <p>Lastest Issue</p>
                        <p>{obj.latest_issue}</p>   
                    </div>
                    <div className={styles.vertical}></div>
                    <div className={styles.horizontal}><hr /></div>
                    <div className={styles.singleInfo}>
                        <p>Participation</p>
                        <p>{obj.latest_issue}</p>   
                    </div>
                </div>
            </div>
            )
        }
    }
    const doaj = (obj) => {
        if (obj.in_doaj) {
            const apc = obj.apc || 'N/A'
            return (
            <div className={styles.journal}>
                <h4>DOAJ Information</h4>
                <div className={styles.flexContainer}>
                    <div className={styles.singleInfo}>
                        <p>Article Processing Charge</p>
                        <p>{apc}</p>   
                    </div>
                    <div className={styles.vertical}></div>
                    <div className={styles.horizontal}><hr /></div>
                    <div className={styles.singleInfo}>
                        <p>APC Amount</p>
                        <p>{obj.apc_amount}</p>   
                    </div>
                    <div className={styles.vertical}></div>
                    <div className={styles.horizontal}><hr /></div>
                    <div className={styles.singleInfo}>
                        <p>Added On</p>
                        <p>{obj.added_on}</p>   
                    </div>
                </div>
            </div>
            )
        }
    }
    const scopus = (obj) => {
        if (obj.in_scopus) {
            return (
            <div className={styles.journal}>
                <h4>Scopus Information</h4>
                <div className={styles.flexContainer}>
                    <div className={styles.singleInfo}>
                        <p>Active/Inactive</p>
                        <p>{obj.active}</p>   
                    </div>
                    <div className={styles.vertical}></div>
                    <div className={styles.horizontal}><hr /></div>
                    <div className={styles.singleInfo}>
                        <p>Coverage Years</p>
                        <p>{obj.coverage_years}</p>   
                    </div>
                </div>
            </div>
            )
        }
    }

    const h_index = (obj) => {
        if (obj.h_index) {
            return (
                <div className={styles.h_index}>
                    <h4>H-Index</h4>
                    <span>{obj.h_index}</span>
                </div>
            )
        } else return (
            <div className={styles.h_index}>
                    <h4>H-Index</h4>
                    <span>N/A</span>
                </div>
        )
    }

    const sjr = (obj) => {
        if (obj.sjr) {
            return (
                <div className={styles.sjr}>
                    <h4>SJR Quartiles</h4>
                    <span>{obj.sjr}</span>
                </div>
            )
        } else return (
            <div className={styles.sjr}>
                    <h4>SJR Quartiles</h4>
                    <span>N/A</span>
                </div>
        )
    }

    const impact = (obj) => {
        if (obj.impact_factor) {
            return (
                <div className={styles.impact}>
                    <h4>Impact Factor</h4>
                    <span>{obj.impact_factor}</span>
                    <div className={styles.combined}>
                        {h_index(obj)}
                        <div className={styles.sjrVerti}></div>
                        {sjr(obj)}
                    </div>
                </div>
            )
        } else return (
            <div className={styles.impact}>
                <h4>Impact Factor</h4>
                <span>N/A</span>
                <div className={styles.combined}>
                        {h_index(obj)}
                        {sjr(obj)}
                    </div>
            </div>
        )
        
    }
    
    return (
        <>
        <section className={styles.section}>
            <div className={styles.container}>
                <div className={styles.searchContainer}>
                    <Search />
                </div>
            </div>
            <div className={styles.detailDiv}>
                <h4>{obj.unique_identifier}</h4>
                <span>ISSN / e-ISSN : {issnFunc(obj)}</span>
            </div>
            <div className={styles.infoContainer}>
                <div className={styles.indexContainer}>
                    <div className={styles.index}>
                        <h4>Indexed In</h4>
                        <div className={styles.checkboxes}>
                            <div className={styles.checkbox}>
                                <p>PMC</p><div>{tickCross(obj, 'pmc')}</div>
                            </div>
                            <div className={styles.checkbox}>
                                <p>SCIE</p><div>{tickCross(obj, 'scie')}</div>
                            </div>
                            <div className={styles.checkbox}>
                                <p>DOAJ</p><div>{tickCross(obj, 'doaj')}</div>
                            </div>
                            <div className={styles.checkbox}>
                                <p>Embase</p><div>{tickCross(obj, 'embase')}</div>
                            </div>
                            <div className={styles.checkbox}>
                                <p>Medline</p><div>{tickCross(obj, 'medline')}</div>
                            </div>
                            
                            <div className={styles.checkbox}>
                                <p>Scopus</p><div>{tickCross(obj, 'scopus')}</div>
                            </div>
                            
                        </div>
                    </div>
                    {impact(obj)}
                </div>
                <div className={styles.detailedContainer}>
                    {pmc(obj)}
                    {doaj(obj)}
                    {scopus(obj)}
                </div>
            </div>

            <div className={styles.footerContainer}>
                <span>Supported by</span>
                <Image src="/images/darkLogo.png" width={75} height={75}/>
            </div>
            
            <div className={styles.disclaimer} >
                <div className={styles.disclaimerDiv}>
                    <span><b>Disclaimer: </b></span>
                    <p>
                         We endeavour to constantly keep our database updated. 
                        Journal indexing remains in constant flux, with frequent 
                        additions and deletions being the norm. Hence, we ask you to 
                        review the indexing of the journal once through the official 
                        journal website, before making any submissions. This website 
                        is not liable in case of any mishaps.
                    </p>
                </div>
            </div>
            
        </section>
        </>
    );
}
 
export default Detail;