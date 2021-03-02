import birdie from '../api/birdie';

const login = async (email, password) => {
    if (process.env.REACT_APP_PROD === 'true') {
        try {
            const response = await birdie.post('/user/login', {
                email, password
            }, {
                withCredentials: true
            });
            if (response.status !== 200) throw new Error("Something went wrong.")
            return response.data;
        } catch (err) {
            throw new Error("Problem in connecting to the api.");
        }
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
    if (process.env.REACT_APP_PROD === 'true') {
        try {
            const response = await birdie.post("/user/signup", {
                firstName,
                lastName,
                email,
                password,
                description: ""
            });
            if (response.status !== 200) {
                console.log(response.data);
                throw new Error(response.data);
            }
        } catch (err) {
            throw new Error("User already exists");
        }
    } else {
        if (email === "john@smith.com") {
            throw new Error("User already exists.");
        }
        return true;
    }
}

const update = async (
    firstName,
    lastName,
    description,
    password
) => {
    if (process.env.REACT_APP_PROD === 'true') {
        try {
            const response = await birdie.put("/user/update", {
                firstName,
                lastName,
                description
            }, {
                withCredentials: true
            });
        } catch (err) {
            throw new Error("Error when communicating with server.");
        }
    } else {
        return;
    }
}

const uploadProfileImage = async (id, img) => {
    const form = new FormData();
    form.append("image", img);
    await birdie.post(
        `/user/${id}/image`,
        form,
        {
            withCredentials: true,
            headers: {
                "Content-Type": 'multipart/form-data'
            }
        } 
    );
}

const fetchProfileImage = async id => {
    if (process.env.REACT_APP_PROD === 'true') {
        try {
            const response = await birdie.get(`/user/${id}/image`, { withCredentials: true });
            console.log(response.data.image)
            return response.data.image;
        } catch (err) {
            return `${process.env.PUBLIC_URL}/images/default-profile.png`;
        }
    } else {
        return require(`${process.env.PUBLIC_URL}/images/default-profile.png`); // return placeholder
    }
}

const fetchMain = async () => {
    if (process.env.REACT_APP_PROD === 'true') {
        try {
            const response = await birdie.get(`/main`, { withCredentials: true });
            console.log(response.data)
            return response.data;
        } catch (err) {
            return `${process.env.PUBLIC_URL}/images/default-profile.png`;
        }
    } else {
        return require(`${process.env.PUBLIC_URL}/images/default-profile.png`); // return placeholder
    }
}

export { login, signup, update, uploadProfileImage, fetchProfileImage, fetchMain };