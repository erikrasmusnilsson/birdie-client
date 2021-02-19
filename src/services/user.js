import axios from 'axios';

const login = async (email, password) => {
    if (process.env.PRODUCTION) {
        // TODO: connect to API
    } else {
        if (email === "john@smith.com" && password === "abc123") {
            const user = {
                _id: "test-id",
                firstName: "John",
                lastName: "Smith",
                email: "john@smith.com",
                description: "Lorem ipsum dolor sit amet.",
            };
            return user;
        } else {
            throw new Error("Invalid username or password");
        }
    }
}

const signup = async (
    firstName,
    lastName,
    email,
    password
) => {
    if (process.env.PRODUCTION) {
        // TODO: connect to API
    } else {
        if (email === "john@smith.com") {
            throw new Error("User already exists.");
        }
        return true;
    }
}

export { login, signup };