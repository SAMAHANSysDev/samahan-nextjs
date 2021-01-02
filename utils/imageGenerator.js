const imageGenerator = (url, width) => {
  if (!url) {
    return '';
  }
  try {
    const urlObject = new URL(url);
    if (urlObject.hostname === 'secure.gravatar.com') {
      return url;
    }
    return `https://cdn.statically.io/img/${urlObject.hostname}/w=${width},f=auto${urlObject.pathname}`;
  } catch (err) {
    return url;
  }
};

export default imageGenerator;
