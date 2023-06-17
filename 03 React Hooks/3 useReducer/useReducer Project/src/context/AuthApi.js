export const login = async (identifier, password) => {
  try {
    const connection = await fetch(
      'https://api-ik98r.strapidemo.com/api/auth/local', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        identifier, password      
      })
    })
    const response = await connection.json();
    if(response && !response.error){
      // Handle success.
      console.log('SignIn Success!');
    //   console.log('response', response);
      return response;
      }
    else{
      throw new Error(response.error);
    }
    
  } catch (error) {
    console.log('SignIn Failure!');
    console.log('error:', error);
    return null;
  }
};

export const register = async (username, email, password) => {
  try {
    const connection = await fetch(
      'https://api-ik98r.strapidemo.com/api/auth/local/register', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username, email, password      
      })
    })
    const response = await connection.json();
    if(response && !response.error){
      // Handle success.
      console.log('Register Success!');
      console.log('response', response);
      return response;
      }
    else{
      throw new Error(response.error);
    }
  } catch (error) {
    console.log('Register Failure!');
    console.log('error:', error);
    console.log('error:', error.message);
    return null;
  }
};