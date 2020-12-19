const { log } = require("@tsw38/custom-logger");

log("Info message", {
  header: "Info Header",
  type: "info",
});

log("Warning message", {
  header: "Warning Header",
  type: "warning",
});

log("Success message", {
  header: "Success Header",
  type: "success",
});

log("Error message", {
  header: "Error Header",
  type: "error",
});
