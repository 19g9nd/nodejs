const postData = async (data,next) => {
    try {
        const response = await fetch('http://localhost:3000', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });
        next();
    } catch (error) {
        console.error('Error:', error);
    }
};

postData({
    "glossary": {
        "id": 0,
        "title": "example glossary"
    }
})

const removeData = async () => {
    try {
        const response = await fetch('http://localhost:3000/delete', {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "id": 0
        })
        });

    } catch (error) {
        console.error('Error:', error);
    }
};
removeData();