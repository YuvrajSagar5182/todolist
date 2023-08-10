
const mainUrl = 'https://todolist-backend-4kkp1ebbv-yuvrajsagar5182.vercel.app';

export const fetchTodos = async () => {
    const response = await fetch(`${mainUrl}/todos`);
    if (!response.ok) {
        throw new Error('Something went wrong!');
    }
    // console.log(response)

    //This return out data from the server in a form of ARRAY OF OBJECTS
    const data = await response.json();
    return data;
}


export const addTodos = async (newTodo) => {
    try {
        const response = await fetch(`${mainUrl}/todos`, {
            method: 'POST',
            body: JSON.stringify({ todo: newTodo }), //The type required by our MONGO DB
            headers: {
                'Content-Type': 'application/json'
            }
        });
        // const toDodata = await response.json();
        await response.json();
        // console.log("DATA from addTodos... ", toDodata);
    } catch (err) {
        console.log(err)
    }
}

export const deleteTodos = async (id) => {
    try {
        const response = await fetch(`${mainUrl}/todos/${id}`, {
            method: 'DELETE'
        });

        return response; // Return response if the deletion was successful
    } catch (error) {
        console.error('Error deleting todo:', error);
        return false; // Return false if there was an error during deletion
    }
};

export const updateTodos = async (todoId, newText) => {
    try {
        const updateUrl = `${mainUrl}/todos/${todoId}`;

        const response = await fetch(updateUrl, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ todo: newText }),
        });

        if (!response.ok) {
            console.error("Failed to update todo:", response.status, response.statusText);
        }
    } catch (error) {
        console.error("Error updating todo:", error);
    }
};
