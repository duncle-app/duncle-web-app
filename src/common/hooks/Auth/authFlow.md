## Flow
1. User logs in
2. Backend issues a token 
   1. encrypts the token
   11. ties it to that user
   111. Sets a TTL
3. Responds back to the UI with the token
    1. UI saves that token in local storage
    11. also with a TTL
4. Any subsequent request will check if the token has 'expired'
    1. if it has, then redirect to log in
    