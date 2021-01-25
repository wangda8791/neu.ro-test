import * as http from "./Http";

export const getConfig = () => {
  return http.get("config");
};

export const getJobs = (status, cluster = null) => {
  let uri = "jobs?";
  let qs = [];
  if (status) {
    qs.push("status=" + status);
  }
  if (cluster && cluster !== "all") {
    qs.push("cluster_name=" + cluster);
  }
  return http.get(uri + qs.join("&"));
};

export const getSecrets = () => {
  return http.get("secrets");
};

export const addSecret = (key, value) => {
  return http.post("secrets", {
    key,
    value,
  });
};
