const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

const port = process.env.PORT || "3000";

app.get('/', (req, res) => {
	const isoDate = new Date().toISOString().split('.')[0] + 'Z';
	res.json({
		"email": "timberwamalwa@yahoo.com",
		"current_datetime": isoDate,
		"github_url": "https://github.com/10-menachi/hng_12_stage_zero.git"
	});
});

app.listen(port, () => {
	console.log(`App listening on port ${port}`);
});
