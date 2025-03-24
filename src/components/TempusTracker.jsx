import React, { useEffect, useState } from 'react';
import './TempusTracker.css'

const TempusTracker = () => {
    const [servers, setServers] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://tempus2.xyz/api/v0/servers/statusList'); // Fuck this API, status for game_info is fucking null when the server is down??? What the fuck is the status if it is online? Document your fucking API properly in swagger bloody shit ass API.
                const data = await response.json();
                setServers(data);
                setLoading(false);
            } catch (error) {
                console.error("Eurrhg Could not fucking get data because fuck you: ", error);
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    // Check if any server has game_info set to a non-null value
    const checkGameInfo = (servers) => {
        return servers.some(server => server.game_info !== null);
    };

    return (
        <div class="centereddiv">
            {loading ? (
                <p>Loading...</p>
            ) : (
                <div>
                    {checkGameInfo(servers) ? (
                        <p class="up">No</p> // Servers up baby
                    ) : (
                        <p class="down">Yes</p> // Servers down babyy
                    )}
                </div>
            )}
        </ div>
    );
};

export default TempusTracker;
