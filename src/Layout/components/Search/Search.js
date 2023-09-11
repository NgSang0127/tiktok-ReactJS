import React, { useEffect, useState, useRef } from 'react';
import * as searchServices from '~/services/searchService';
import Headless from '@tippyjs/react/headless';
import { Wrapper as PopperWrapper } from '~/components/Popper/export';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faSpinner } from '@fortawesome/free-solid-svg-icons';
import { SearchIcon } from '~/components/Icons/Icons';
import { useDebounce } from '~/hooks/export';
import ListSearch from "~/Layout/components/Search/ListSearch";

import classNames from 'classnames/bind';
import styles from './Search.module.scss';
const cx = classNames.bind(styles);

const Search = () => {
    const [searchValue, setSearchValue] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [showResult, setShowResult] = useState(false);
    const [loading, setLoading] = useState(false);

    const debounce = useDebounce(searchValue, 500);
    const inputRef = useRef();
    const handleClear = () => {
        setSearchValue('');
        inputRef.current.focus();
        setShowResult(false);
    };
    const handleChange = (e) => {
        const searchValue = e.target.value;
        if (searchValue.startsWith(' ')) {
            return;
        } else {
            setSearchValue(searchValue);
        }
    };
    const handleHideResult = () => {
        setShowResult(false);
    };
    useEffect(() => {
        if (!debounce.trim()) {
            setSearchResults([]);
            return;
        }
        const fetchApi = async () => {
            setLoading(true);

            const result = await searchServices.search(debounce);

            setSearchResults(result);
            setLoading(false);
        };
        fetchApi();
    }, [debounce]);
    return (
        <div>
            <Headless
                onClickOutside={handleHideResult}
                interactive
                visible={showResult && searchResults.length > 0}
                render={(attrs) => (
                    <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                        <PopperWrapper>
                            <h4 className={cx('search-title')}>Accounts</h4>
                            <ListSearch data={searchResults}></ListSearch>
                        </PopperWrapper>
                    </div>
                )}
            >
                <div className={cx('search')}>
                    <input
                        ref={inputRef}
                        value={searchValue}
                        type="search"
                        placeholder="Search accounts and videos"
                        spellCheck={false}
                        onChange={handleChange}
                        onFocus={() => setShowResult(true)}
                    />
                    {!!searchValue && !loading && (
                        <button className={cx('clear')} onClick={handleClear}>
                            <FontAwesomeIcon icon={faCircleXmark}></FontAwesomeIcon>
                            {/*Icon clear*/}
                        </button>
                    )}
                    {loading && <FontAwesomeIcon className={cx('loading')} icon={faSpinner}></FontAwesomeIcon>}
                    {/*Loading*/}
                    <button className={cx('search-btn')}>
                        <SearchIcon className={cx('search-icon')}></SearchIcon>
                        {/*Icons search*/}
                    </button>
                </div>
            </Headless>
        </div>
    );
};

export default Search;
