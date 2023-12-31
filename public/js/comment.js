const commentInput = document.querySelector('input');
const submitButton = document.querySelector('#submitButton');


const postComment = () => {
    const text = commentInput.value;
    const userId = sessionUserId;
    const postId = sessionPostId; 

    const newComment = {
        text: text,
        user_id: userId,
        post_id: postId
    };

    console.log(newComment);

    fetch(`/api/db/comment`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newComment)
    })
    .then((response) => {
        console.log(response);
    });
}

submitButton.addEventListener('click', postComment); 
