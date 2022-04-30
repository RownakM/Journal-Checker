import Search from "../Search";
import styles from '../../styles/Results.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { useRouter } from "next/router";
import { useEffect } from 'react'

const Results = () => {
    const router = useRouter()
    const result = JSON.parse(localStorage.getItem("result"))
    const searchTerm = localStorage.getItem("searchTerm")
    const number = result.length

    const zero = (number, searchTerm) => {
        if (number == 0) {
            return (
            <>
                <p>Sorry, we couldn&apos;t find <b>&quot;{searchTerm}&quot;</b> in any of the database(s).</p>
            </>
            )
        } else return (
            <p>{number} results for <b>&quot;{searchTerm}&quot;</b></p>
        )
    }

    const issnFunc = (obj) => {
        if (obj.issn != 'N/A') {
            return obj.issn
        } else if (obj.e_issn != 'N/A') {
            return obj.e_issn
        } else return 'N/A'
    }
    const handleOnClick = (obj) => {
        localStorage.setItem("detail", JSON.stringify(obj))
        router.push({
            pathname: '/journals/' + obj.id
        })
    }
    const element = <FontAwesomeIcon icon={faArrowRight} size="xs" height={12} width={12}/>
    const updateObjs = result.map(obj=> {
        return <>
            
                <li>{obj.unique_identifier}</li>
                <span>ISSN / e-ISSN: {issnFunc(obj)}</span>
                <a onClick={() => handleOnClick(obj)}>show more details {element}</a>
            
        </>
    })

    return (
        <>
        <section className={styles.section}>
            <div className={styles.container}>
                <div className={styles.search}>
                    <Search />
                    {zero(number, searchTerm)}
                </div>
            </div>
            <div className={styles.iter} >
                <ol>
                    {updateObjs}
                </ol>
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
 
export default Results;