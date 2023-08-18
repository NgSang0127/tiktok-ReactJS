import images from '~/assets/images';
import React from 'react';
import AccountItem from '~/components/Layout/components/AccountItem';
const accountData = [
    { image: images.image1, nickname: 'cobedangiu1', name: 'Jaeyoon' },
    { image: images.image2, nickname: 'cobedangiu2', name: 'Go YounJung' },
    { image: images.image3, nickname: 'cobedangiu3', name: 'Rosé' },
    { image: images.image4, nickname: 'cobedangiu4', name: 'Han So Hee' },
];
const AccountList = () => {
    return (
        <div>
            {accountData.map((account, index) => (
                <AccountItem
                    key={index}
                    image={account.image}
                    nikname={account.nickname}
                    name={account.name}
                ></AccountItem>
            ))}
        </div>
    );
};

export default AccountList;
