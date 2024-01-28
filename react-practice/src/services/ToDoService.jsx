const getTodo = async (userId, todoId) => {
  try {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}/todos?id=${todoId}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching todo:', error);
    throw error;
  }
};

const getTodos = async (userId) => {
  try {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}/todos`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching todos:', error);
    return [];
  }
};

const updateTodoStatus = async (userId, todoId, completed) => {
  try {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}/todos?id=${todoId}`, {
      method: 'PATCH',
      body: JSON.stringify({
        completed: completed,
      }),
      headers: {
        'Content-Type': 'application/json; charset=UTF-8',
      },
    });

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error updating todo status:', error);
    throw error;
  }
};

export {getTodo, getTodos, updateTodoStatus};
