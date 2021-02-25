import { useState } from 'react';

const useTimeRestrictedAxios = ({axios, delay, setResponse}) => {
    const [lastRequestTime, setLastRequestTime] = useState(0);
    const [queuedRequest, setQueuedRequest] = useState(null);

    const get = async (url, options) => {
        console.log("running get")
        const currentTime = new Date().getTime();
        const timeSinceLastRequest = lastRequestTime ? currentTime - lastRequestTime : delay;
        
        const shouldReturn = queuedRequest !== null;
        console.log("shouldReturn", shouldReturn);
        setQueuedRequest(url);
        if (shouldReturn) return;

        if (delay > timeSinceLastRequest) {
            console.log("waiting for ", delay - timeSinceLastRequest);
            await sleep(delay - timeSinceLastRequest);
        }
        
        try {
            const response = await axios.get(queuedRequest ? queuedRequest : url, { withCredentials: true });
            setResponse(response.data);
        } catch (err) {

        } finally {
            setLastRequestTime(new Date().getTime());
            setQueuedRequest(null);
        }
    }

    return [get];
}

const sleep = async milliseconds => {
    return new Promise(resolve => setTimeout(resolve, milliseconds));
}

export default useTimeRestrictedAxios;