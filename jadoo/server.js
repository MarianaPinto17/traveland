
const express = require("express");
const path = require("path");

const app = express();

//vai buscar os ficheiros dentro da pasta assets -> js, css
app.use("/assets", express.static(path.resolve(__dirname, "public", "assets")));

//vai redirecionar todas as páginas para o index.html
app.get("/*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "public", "index.html"));
});

// server está a correr
app.listen(process.env.PORT || 5030, () => console.log("Server running..."));