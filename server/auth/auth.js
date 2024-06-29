const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const crypto = require("crypto");
const nodemailer = require("nodemailer");
const User = require("../model/UserModel");

let k = "";

// Configure Nodemailer
const transporter = nodemailer.createTransport({
  service: "Gmail",
  auth: {
    user: "vulturelines@gmail.com", // Replace with your email
    pass: "ryls vsaq vhxz deys", // Replace with your email password or app password
  },
});

router.get("/", (req, res) => {
  if (k.length) {
    res.status(200).json({ isLoggedIn: true, user: k });
  } else {
    res.status(200).json({ isLoggedIn: false });
  }
});

router.post("/signup", async (req, res) => {
  const { name, email, username, password } = req.body;

  if (!name || !email || !username || !password) {
    return res.status(400).json({ message: "All fields are required." });
  }

  try {
    const existingUser = await User.findOne({
      $or: [{ email }, { username }],
    });

    if (existingUser) {
      return res
        .status(409)
        .json({ message: "Email or Username already taken." });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const verificationToken = crypto.randomBytes(32).toString("hex");

    const newUser = new User({
      name,
      email,
      username,
      password: hashedPassword,
      verificationToken,
      isVerified: false,
    });

    const verificationLink = `http://localhost:3001/api/auth/verify-email?token=${verificationToken}&email=${email}`;

    const mailOptions = {
      from: "vulturelines@gmail.com",
      to: email,
      subject: "Email Verification",
      text: `Please click the following link to verify your email: ${verificationLink}`,
    };

    transporter.sendMail(mailOptions, async (error, info) => {
      if (error) {
        console.error("Error sending email:", error);
        return res.status(500).json({ message: "Error sending email." });
      }

      await newUser.save();
      res
        .status(201)
        .json({ message: "Verification email sent. Please check your inbox." });
    });
  } catch (err) {
    console.error("Error during signup:", err);
    res
      .status(500)
      .json({ message: "Something went wrong. Please try again later." });
  }
});

router.get("/verify-email", async (req, res) => {
  const { token, email } = req.query;

  if (!token || !email) {
    return res.status(400).json({ message: "Invalid verification link." });
  }

  try {
    const user = await User.findOne({ email });

    if (!user || user.verificationToken !== token) {
      return res
        .status(400)
        .json({ message: "Invalid or expired verification link." });
    }

    user.isVerified = true;
    user.verificationToken = undefined; // Clear the verification token

    await user.save();

    res
      .status(200)
      .json({ message: "Email verified successfully." });
  } catch (err) {
    console.error("Error during email verification:", err);
    res
      .status(500)
      .json({ message: "Something went wrong. Please try again later." });
  }
});

router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: "All fields are required." });
  }

  try {
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(401).json({ message: "Invalid username or password." });
    }

    if (!user.isVerified) {
      return res
        .status(401)
        .json({ message: "Please verify your email before logging in." });
    }

    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) {
      return res
        .status(401)
        .json({ message: "Invalid username or password.", isLoggedIn: false });
    }

    req.session.nagamuthu = user.username;
    k = req.session.nagamuthu;

    res.status(200).json({
      message: "User logged in successfully.",
      isLoggedIn: true,
      name: req.session.nagamuthu,
    });
  } catch (err) {
    console.error("Error during login:", err);
    res
      .status(500)
      .json({ message: "Something went wrong. Please try again later..." });
  }
});

router.get("/logout", (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      console.log("succ");

      return res.status(500).json({ message: "Server Error" });
    }
    res.clearCookie("connect.sid"); // Clear session cookie
    k = "";
    res.status(201).json({ message: "Logout successful", isLoggedIn: false });
  });
});

// Forgot Password Routes
router.post("/forgot-password", async (req, res) => {
  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ message: "Email is required." });
  }

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: "User not found." });
    }

    // const otp = crypto.randomBytes(3).toString("hex");
    const otp = Math.floor(100000 + Math.random() * 900000).toString();
    user.resetPasswordOtp = otp;
    user.resetPasswordExpires = Date.now() + 3600000; // 1 hour from now

    await user.save();

    const mailOptions = {
      from: "vulturelines@gmail.com",
      to: user.email,
      subject: "Password Reset OTP",
      text: `Your OTP for password reset is ${otp}`,
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error("Error sending email:", error);
        return res.status(500).json({ message: "Error sending email." });
      }
      res.status(200).json({ message: "OTP sent to email." });
    });
  } catch (err) {
    console.error("Error during forgot password:", err);
    res
      .status(500)
      .json({ message: "Something went wrong. Please try again later." });
  }
});

router.post("/reset-password", async (req, res) => {
  const { email, otp, newPassword } = req.body;

  if (!email || !otp || !newPassword) {
    return res.status(400).json({ message: "All fields are required." });
  }

  try {
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({ message: "User not found." });
    }

    if (
      user.resetPasswordOtp !== otp ||
      user.resetPasswordExpires < Date.now()
    ) {
      return res.status(400).json({ message: "Invalid or expired OTP." });
    }

    const hashedPassword = await bcrypt.hash(newPassword, 10);
    user.password = hashedPassword;
    user.resetPasswordOtp = undefined;
    user.resetPasswordExpires = undefined;

    await user.save();

    res.status(200).json({ message: "Password reset successfully." });
  } catch (err) {
    console.error("Error during password reset:", err);
    res
      .status(500)
      .json({ message: "Something went wrong. Please try again later." });
  }
});

module.exports = router;
