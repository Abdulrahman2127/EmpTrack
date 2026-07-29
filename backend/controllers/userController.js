import User from '../models/data.js'
import bcrypt from 'bcrypt'
import jwt from "jsonwebtoken"; 
export const postUser = async (req, res) => {
  try {
    const { email, name, password } = req.body

    const existingUser = await User.findOne({ email })

    if (existingUser) {
      return res.status(400).json({
        message: 'Email already exists',
      })
    }
    const hashedPassword = await bcrypt.hash(password, 10)

    const newUser = new User({
      name,
      email,
      password: hashedPassword,
    })

    await newUser.save()
    res.status(201).json({
      message: 'User created successfully',
    })
  } catch (error) {
    res.status(500).json({
      message: error.message,
    })
  }
}

export const getCreateUser = (req, res) => {
  res.send('Users route is working')
}

export const postLogin = async (req, res) => {
  try {
    const { email, password } = req.body

    const user = await User.findOne({ email })

    if (!user) {
      return res.status(400).json({
        message: 'Email is note found!',
      })
    }

    const isPasswordCorrect = await bcrypt.compare(password, user.password)

    if (!isPasswordCorrect) {
      return res.status(400).json({
        message: 'Incorrect password',
      })
    }
    console.log(process.env.JWT_SECRET);
    const token = jwt.sign(
  {
    id: user._id,
    email: user.email,
  },
  process.env.JWT_SECRET,
  {
    expiresIn: "1d",
  }
);

res.cookie("token", token, {
  httpOnly: true,
  maxAge: 24 * 60 * 60 * 1000,
});
    return res.status(200).json({
      message: 'Login successful',
    })
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
}


export const postLogut = (req , res) => {
  res.clearCookie("token");
  res.status(200).json({
  message: "Logout successful",
});
}