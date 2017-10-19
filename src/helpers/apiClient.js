const client = require("superagent");
const apiHost = "http://localhost:3030";

export default {
  get: path => client.get(`${apiHost}${path}`),
  post: (path, data) => client.post(`${apiHost}${path}`).send(data),
  put: (path, data) => client.put(`${apiHost}${path}`).send(data),
  del: path => client.del(`${apiHost}${path}`)
};
