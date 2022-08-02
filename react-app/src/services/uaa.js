const signIn = async (credentials) => {
    let resturnValue = null;
    let errorValue = null;
    try {
        const response = await fetch('http://localhost:8080/api/v1/uaa', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(credentials)
        });
        const results = await response.json();
        resturnValue = results;

    } catch (error) {
        errorValue = error;
    }

    return [errorValue, resturnValue];
}

export {
    signIn
}


