const titleEl = document.querySelector('[name ="title"');
const textEl = document.querySelector('[name="text"');
const submitButton = document.querySelector('#submitButton');
const deleteButton = document.querySelector('#deleteButton');
const siteUrl = siteUrl1;

const postId = sessionPostId

let userId;

const getCurrent = async () =>{
    const response = await fetch(`${siteUrl}api/db/post/${postId}`);

    console.log(response);
    const postData = await response.json()
    
    console.log(postData);

    titleEl.value = postData.title;
    textEl.value = postData.text;
    userId = postData.user_id;
}

const editPost = async () => {
    const title = titleEl.value;
    const text = textEl.value;
    const poster = userId;

    const updatedPost = {
        title: title,
        text: text,
        user_id: poster,
    };

    fetch(`${siteUrl}api/db/post/${postId}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedPost), 
    })
    .then((response) => {
        if (response.ok) {
            console.log('Post updated successfully');
            window.location.replace(`${siteUrl}post/${postId}`)

        } 
        else {

            console.error('Failed to update post');
        }
    })
    .catch((error) => {
        console.error('Fetch error:', error);
    });
};


const deletePost = () => {

    fetch(`${siteUrl}api/db/post/${postId}`, {
        method: 'DELETE'
    })
    .then((response) => {
        console.log(response);
        window.location.replace('${siteUrl}');
    });
};

getCurrent();

submitButton.addEventListener('click', editPost);
deleteButton.addEventListener('click', deletePost);

