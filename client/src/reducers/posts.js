export default (posts = [], action) => {
    switch(action.type === 'CREATE'){
        case 'FETCH_ALL':
            return action.payload;
        case 'CREATE':
            return [... posts, action.payload];
        default:
            return posts;

    }
}