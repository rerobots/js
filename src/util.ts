export function instanceKeepAlive(instanceId: string, token: string) {
    return fetch(`https://api.rerobots.net/instance/${instanceId}/ka`, {
        method: 'POST',
        headers: {
            Authorization: 'Bearer ' + token,
            'Content-Type': 'application/json',
        },
    }).then((res) => {
        if (res.ok) {
            setTimeout(() => {
                instanceKeepAlive(instanceId, token);
            }, 45000);
            return;
        } else if (res.status < 404) {
            throw new Error(`${res.status}`);
        }
    });
}
