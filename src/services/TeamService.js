import request from "../utilis/ApiCentral";

export function getSinglLeTeam(id) {
  return request(
    {
      url: `/teams/${id}`,
      method: "GET"
    },
    true
  );
}

export function getTeams(id) {
  return request(
    {
      url: `competitions/${id}/teams`,
      method: "GET"
    },
    true
  );
}
