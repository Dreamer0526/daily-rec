const getPathName = () => window && window.location && window.location.pathname;
const getOrigin = () => window && window.location && window.location.origin;
const getHost = () => window && window.location && window.location.host;

export const PathName = getPathName();
export const Origin = getOrigin();
export const Host = getHost();
export const Path = `${getOrigin()}${getPathName()}`;

export const redirectToHome = () => window.location = Origin;
export const redirectToLogin = () => window.location = `${Origin}/login`;