export const getToken = ():string => {
  const accessToken = JSON.parse(localStorage.getItem("access_token") || "{}");
  const accessToken2 = JSON.parse(
    sessionStorage.getItem("access_token") || "{}"
  );
  return accessToken.length === undefined ? accessToken2 : accessToken;
};
