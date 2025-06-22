const userModel = require("../models/userModel");

module.exports = async (req, res, next) => {
  try {
    // Use user ID from the decoded token (added by authMiddleware)
    const user = await userModel.findById(req.user._id);

    if (!user || user.role !== "admin") {
      return res.status(401).send({
        success: false,
        message: "Authentication failed. Admin access required.",
      });
    }

    next(); // ✅ User is admin, proceed
  } catch (error) {
    console.error("Error in admin middleware:", error);
    return res.status(500).send({
      success: false,
      message: "Authentication failed for Admin API",
      error: error.message || error,
    });
  }
};

 