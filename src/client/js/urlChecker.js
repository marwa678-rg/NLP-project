function checkForURL(url) {
    const urlPattern = /^(https?|ftp|ws):\/\/[^\s/$.?#].[^\s]*$/i;
    return urlPattern.test(url);
};

export { checkForURL };
