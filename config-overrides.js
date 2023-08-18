const { override, useBabelRc } = require('customize-cra');
module.exports = override(
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useBabelRc(), //React sẽ nhầm đây là hook vì no bat dau bang use
);
