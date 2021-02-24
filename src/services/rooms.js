import birdie from '../api/birdie';

const getJoinedRooms = async () => {
    if (process.env.REACT_APP_PROD === 'true') {
        try {   
            const response = await birdie.get("/main", {
                withCredentials: true
            });
            if (response.status !== 200) throw new Error("Wow, did not go well.");
            
            console.log(response.data.room);
            return response.data.room;
        } catch (err) {
            console.log(err);
            throw new Error("Error when connecting to server.")
        }
    } else {
        return [
            {
                _id: "602d50163d9ab928d0bb15ea",
                name: "Secret Chat",
                description: "Let's talk about area 52",
                isOwner: true,
                members: 10
            },
            {
                _id: "602d50163d9ab928d0bb15ea",
                name: "Not a secret Chat",
                description: "Let's talk about area 12",
                isOwner: false,
                members: 3
            },
            {
                _id: "602d50163d9ab928d0bb15ea",
                name: "Pizza Chat",
                description: "Pizza Time",
                isOwner: true,
                members: 2
            },
            {
                _id: "602d50163d9ab928d0bb15ea",
                name: "La familla",
                description: "Do iitt",
                isOwner: false,
                members: 34
            },
        ]
    }
}

const createRoom = async (
    name,
    description,
    isPrivate,
    password
) => {
    if (process.env.REACT_APP_PROD) {
        const payload = {
            name, 
            description,
            isPrivate
        };
        if (isPrivate) payload.password = password;
        await birdie.post("/room", payload, {
            withCredentials: true
        });
    } else {

    }
}

const getRoomById = async id => {
    if (process.env.REACT_APP_PROD) {
        const response = await birdie.get(`/room/${id}`, {
            withCredentials: true
        });
        return response.data;
    } else {

    }
}

const deleteRoom = async id => {
    if (process.env.REACT_APP_PROD) {
        await birdie.delete(`/room/${id}`, {
            withCredentials: true
        });
    } else {

    }
}

const updateRoom = async (id, description) => {
    if (process.env.REACT_APP_PROD) {
        await birdie.put(`/room/${id}`, {
            description
        }, {
            withCredentials: true
        });
    } else {

    }
}

const searchRoomByName = async name => {
    if (process.env.REACT_APP_PROD) {
        console.log("query: ", name)
        const response = await birdie.get(`/room/search/${name}`, {
            withCredentials: true
        });
        console.log("data: ", response.data);
        return response.data;
    } else {

    }
}

export { getJoinedRooms, createRoom, getRoomById, deleteRoom, updateRoom, searchRoomByName };