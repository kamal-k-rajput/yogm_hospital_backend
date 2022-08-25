module.exports = (req, res, next) => {
  console.log(req.body, "in middleware");
  const userInfo = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    age: req.body.age,
    gender: req.body.gender,
  };
  const data = {
    userInfo,
    appointmentdate: req.body.appointmentdate || new Date(),
    pincode: req.body.pincode,
    description: req.body.description,
    address: req.body.address,
    mobileNumber: req.body.mobileNumber,
  };
  req.body = data;
  next();
};
