import { useState, useEffect } from 'react';
import { getJoinedRooms, deleteRoom } from '../services/rooms';

const useJoinedRooms = () => {
    const [joinedRooms, setJoinedRooms] = useState([]);

    const update = async () => {
        setJoinedRooms(await getJoinedRooms());
    }

    useEffect(update, []);

    const remove = id => {
        deleteRoom(id);
        const rooms = [...joinedRooms];
        const filteredRooms = rooms.filter(room => room._id !== id);
        setJoinedRooms(filteredRooms);
    }

    return [joinedRooms, update, remove]
}

export default useJoinedRooms;