import { useState, useEffect } from 'react';
import { fetchProfileImage, uploadProfileImage } from '../services/user';

const useProfileImage = id => {
    const [profileImage, setProfileImage] = useState(null);

    useEffect(async () => {
        const img = await fetchProfileImage(id);
        setProfileImage(img);
    }, []);

    const update = async (img) => {
        await uploadProfileImage(id, img);
        setProfileImage(img);
    }

    return [profileImage, update];
}

export default useProfileImage;