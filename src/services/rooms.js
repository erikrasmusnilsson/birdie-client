
const getJoinedRooms = async () => {
    if (process.env.REACT_APP_PROD) {
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

export { getJoinedRooms };