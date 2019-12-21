import request from "../utilis/ApiCentral";
export function getLeagues() {
  return request(
    {
      url: `/competitions`,
      method: "GET"
    },
    true
  );
}

export function getSinglLeague(id) {
  return request(
    {
      url: `/competitions/${id}`,
      method: "GET"
    },
    true
  );
}
