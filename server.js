/*========================================================================================
 * SERVER
 * ========================================================================================
 * THIS FILE ROUTES PATH TO SPECIFIC PAGES/VIEWS
 * - Loads router modules in [ex. app.use("/projects", projectRouter);]
 */

const express = require("express");
const app = express();
const { ROLE, users } = require("./data");
const projectRouter = require("./routes/projects");
const { authUser, authRole } = require("./basicAuth");
const { setUser } = require("./routes/users");

app.use(express.json());
app.use(setUser);
app.use("/projects", projectRouter);

app.get("/", (req, res) => {
  res.send("Home Page");
});

app.get("/dashboard", authUser, (req, res) => {
  res.send("Dashboard Page");
});

app.get("/admin", authUser, authRole(ROLE.ADMIN), (req, res) => {
  res.send("Admin Page");
});

app.listen(3000);
