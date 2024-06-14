import React, { useState } from 'react'
import Styles from './SearchBar.module.css'
import { FaSearch } from 'react-icons/fa'
import { MdCancel } from 'react-icons/md'
import handleInputChange from '../../../../utils/Handlers/HandleInputChange'

const SearchBar = () => {

    const [inputData, setInputData] = useState({
        search: ""
    })

    function clearInputData() { setInputData({ search: "" }) };

    return (
        <form className={Styles.container}>

            {inputData.search && <button onClick={clearInputData} type='button' className={Styles.cancel}>< MdCancel /></button>}

            <input
                onChange={(e) => handleInputChange(e, setInputData, false)}
                className={`${Styles.input} ${!inputData.search && Styles.input_not_showing_button}`}
                type="text"
                name="search"
                id="search"
                value={inputData.search}
                placeholder='¿Qué estás buscando?'
            />

            <button className={Styles.submit} type="submit">
                <FaSearch />
            </button>
        </form>
    )
}

export default SearchBar