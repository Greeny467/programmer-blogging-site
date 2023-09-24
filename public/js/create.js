const titleEl = document.querySelector('[name ="title"');
const textEl = document.querySelector('[name="text"');
const submitButton = document.querySelector('#submitButton');

const userId = sessionUserId;

const createPost = async () => {
    const title = titleEl.value;
    const text = textEl.value;
    const poster = userId;

    const newPost = {
        title: title,
        text: text,
        user_id: poster,
    };

    fetch(`http://localhost:3001/api/db/post`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(newPost), 
    })
    .then((response) => {
        if (response.ok) {
            console.log('Post created successfully');

            fetch(`http://localhost:3001/api/db/post/${userId}/${newPost.title}/${newPost.text}`)
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                const searchId = data.id;

                window.location.replace(`http://localhost:3001/post/${searchId}`);
            }) 
           

        } 
        else {

            console.error('Failed to create post');
        }
    })
    .catch((error) => {
        console.error('Fetch error:', error);
    });
};

submitButton.addEventListener('click', createPost);