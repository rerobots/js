export function instanceKeepAlive(instanceId: string, token: string) {
    fetch(`https://api.rerobots.net/instance/${instanceId}/ka`, {
        method: 'POST',
        headers: {
            Authorization: 'Bearer ' + token,
            'Content-Type': 'application/json',
        },
    })
        .then((res) => {
            if (res.ok) {
                setTimeout(() => {
                    instanceKeepAlive(instanceId, token);
                }, 45000);
                return;
            }
        })
        .catch((err) => {
            console.log(err);
        });
}
