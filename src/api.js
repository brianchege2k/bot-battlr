export const fetchBots = async () => {
    try {
      const response = await fetch('https://my-json-server.typicode.com/brianchege2k/bot-battlr/bots');
      if (!response.ok) {
        throw new Error('Failed to fetch bots');
      }
      return await response.json();
    } catch (error) {
      console.error('Error fetching bots:', error);
      return [];
    }
  };
  
  export const deleteBot = async (botId) => {
    try {
      const response = await fetch(`https://my-json-server.typicode.com/brianchege2k/bot-battlr/bots/${botId}`, {
        method: 'DELETE',
      });
      if (!response.ok) {
        throw new Error('Failed to delete bot');
      }
    } catch (error) {
      console.error('Error deleting bot:', error);
      throw error; // Re-throw the error to handle it in the component
    }
  };
  