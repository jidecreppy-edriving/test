const FormManager = require("./formManager");
let formManager = new FormManager();

function apiResponse(statusCode, message) {
  const response = {
    statusCode,
    body: JSON.stringify(message),
  };

  return response;
}

module.exports.handler = async (event) => {
  const body = JSON.parse(event.body);
  const params = event.queryStringParameters;

  switch (event.httpMethod) {
    case "GET":
      return formManager.findForm(params)
        .then(form => Object.keys(form).length ? apiResponse(200, form) : apiResponse(404, "Not Found"))
        .catch(err => apiResponse(404, err));

    case "POST":
      const form = formManager.buildForm(body);
      return formManager.createForm(form)
        .then(() => apiResponse(200, form))
        .catch(err => apiResponse(400, err));

    case "DELETE":
      return formManager.removeForm(body)
        .then(() => apiResponse(204, ""))
        .catch(err => apiResponse(404, "Not Found "+ err));
      
    default:
      return apiResponse(400, "Method not supported");
  }
};
