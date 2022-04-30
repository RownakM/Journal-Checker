import Image from "next/image";
import styles from '../styles/Search.module.css'
import React from 'react'
import { useRouter } from "next/router";

const Search = () => {
    const router = useRouter();
    async function handleOnClick(e) {
        e.preventDefault()
        const inp = document.getElementById('input_id').value
        const fetchUrl = 'https://api.journalchecker.com/search/' + inp.toString() + '/'
        const res = fetch(fetchUrl, {
            method: "GET",
            headers: {
                "content-type": "application/json",
            },
        }).then(res => res.json())
        .then(res => {
            const result = res
            localStorage.setItem("result", JSON.stringify(result))
            localStorage.setItem("searchTerm", inp)
            router.push({
                pathname: '/journals',
            })
        }).catch(err => {
            console.log(err)
        })
    }

    const handleEnter = (e) => {
        if (e.which == 13 || e.keyCode == 13) {
            handleOnClick(e)
        }
    }

    return (
        <>
        <div className={styles.container}>
            <input onKeyDown={handleEnter} type="text" placeholder="Search for journals (name / ISSN)" id="input_id" autoComplete="off" />
            <a onClick={handleOnClick}><Image className={styles.image} src="/images/search.png" height={16} width={16} /></a>
        </div>
        </>
    );
}
 
export default Search;