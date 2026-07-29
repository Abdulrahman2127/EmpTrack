import Employee from '../models/employee.js'

export const getEmp = async (req, res) => {
  try {
    const data = await Employee.find({ user: req.user.id })
    res.json(data)
  } catch (error) {
    res.status(404).json({ message: 'Something went wrong' })
  }
}

export const getDetails = async (req, res) => {
  try {
    const employee = await Employee.findOne({
      _id: req.params.id,
      user: req.user.id,
    })

    if (!employee) {
      return res.status(404).json({
        message: 'Employee not found',
      })
    }

    res.status(200).json(employee)
  } catch (error) {
    res.status(500).json({
      message: 'Something went wrong',
    })
  }
}

export const addEmployee = async (req, res) => {
  try {
    const { name, email, phone, age, gender, department, salary } = req.body

    const employee = await Employee.create({
      name,
      email,
      phone,
      age,
      gender,
      department,
      salary,
      user: req.user.id,
    })

    res.status(201).json({
      message: 'Employee created successfully',
      employee,
    })
  } catch (error) {
    res.status(500).json({
      message: 'Something went wrong',
      error: error.message,
    })
  }
}

export const deleteEmp = async (req, res) => {
  try {
    const employee = await Employee.findOneAndDelete({
      _id: req.params.id,
      user: req.user.id,
    })
    if (!employee) {
      return res.status(404).json({
        message: 'Employee not found',
      })
    }

    res.status(200).json({ message: 'Employee deleted successfully', employee })
  } catch (error) {
    res.status(500).json({
      message: 'Something went wrong',
    })
  }
}

export const putEmp = async (req, res) => {
  try {
    const employee = await Employee.findOneAndUpdate(
      {
        _id: req.params.id,
        user: req.user.id,
      },
      {
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone,
        age: req.body.age,
        gender: req.body.gender,
        department: req.body.department,
        salary: req.body.salary,
      },
      {
        returnDocument: "after"
      }
    );

    if (!employee) {
      return res.status(404).json({
        message: "Employee not found",
      });
    }

    res.status(200).json({
      message: "Employee updated successfully",
      employee,
    });
  } catch (error) {
    res.status(500).json({
      message: "Something went wrong",
    });
  }
};
