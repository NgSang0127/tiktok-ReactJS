import React, { memo } from 'react';
import AccountItem from '~/components/AccountItem/AccountItem';
import PropTypes from 'prop-types';

const ListSearch = ({ data }) => {
    console.log("re-render");
    return (
        <>
            {
                data.map((result) => <AccountItem key={result.id} data={result}></AccountItem>)
            }
        </>
    )
};
ListSearch.propTypes = { data: PropTypes.array.isRequired};

export default memo(ListSearch);
