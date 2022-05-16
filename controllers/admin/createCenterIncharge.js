const db = require("../../helpers/dbconnect");

module.exports = async (req, res) => {
  const email = req.body.email;
  const name = req.body.name;
  const phone = req.body.phone;
  const college = req.body.college;
  const collegeEmail = req.body.collegeEmail;

  try {
    await db.queryAsync(
      "INSERT INTO center_incharge (email , name , phone , college , college_email) values (? ,? ,?,?,?)",
      [email, name, phone, college, collegeEmail]
    );
    res
      .status(200)
      .json({ success: true, message: "Center Incharge Created Successfully" });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};
