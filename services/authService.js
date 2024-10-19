const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/userModel');
const validator = require('../utils/validator');


exports.signup = async ({ name, email, password, role}) => {
    const Valid = validator.schemaSignUp.validate({name, email, password, role});
    if(!Valid.error) {
        throw new Error('Invalid data');
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({ name, email, password: hashedPassword, role });
    return user;
};

exports.login = async ({ email, password }) => {
    const Valid = validator.schemaLogin.validate({ email, password });
    if(!Valid.error) {
        throw new Error('Invalid data');
    }
    const user = await User.findOne({ where: { email } });
    if (!user || !(await bcrypt.compare(password, user.password))) {
        throw new Error('Invalid credentials');
    }
    const token = jwt.sign({ id: user.id, role: user.role }, process.env.JWT_SECRET, { expiresIn: '24h' });
    return token;
};
