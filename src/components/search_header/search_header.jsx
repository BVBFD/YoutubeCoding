import styles from "./search_header.module.css";
import React, { useRef } from 'react';


const Search_header = ({ onSearch }) => {
    const inputRef = useRef();
    const handleSearch = () => {
        const value = inputRef.current.value;
        // console.log(value);
        onSearch(value);
    };

    const onClick = () => {
        // console.log('onClick');
        handleSearch();
    };

    const onKeyPress = (event) => {
        // console.log('onKeyPress');
        if(event.key === 'Enter'){
            handleSearch();
        }
    };

    return (
        <header className={styles.header}>
            <div className={styles.logo}>
                <img className={styles.img} src="/images/logo.png" alt="logo" />
                <h1 className={styles.title}>Youtube</h1>
            </div>
            <input ref={inputRef} className={styles.input} type="search" placeholder="Search.." onKeyPress={onKeyPress}/>
            <button className={styles.button} type="submit" onClick={onClick}>
                <img className={styles.buttonImg} src="/images/search.png" alt="search"/>
            </button>
            {/* input과 함께 쓰기 때문에 submit으로 지정 */}
        </header>
    );
};

export default Search_header;