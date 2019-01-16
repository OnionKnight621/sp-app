//uri factory method
function mapTokenToUrl(tokenKey, resultKey, uriFunc) {
    return (item) => {
        item[resultKey] = uriFunc(item[tokenKey]);
        return item;
    };
}

exports.mapTokenToUrl = mapTokenToUrl;