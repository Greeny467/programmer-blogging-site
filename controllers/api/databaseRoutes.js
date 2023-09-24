// imports and settup
const router = require('express').Router();
const {User, Post, Comment} = require('../../models');


// get, post, put, and delete routes for user posts.
router.get('/post', async (req, res) => {
    try{
        const postData = await Post.findAll();
        const posts = postData.map((post) =>
            post.get({ plain: true})
        );

        if(!posts){
            res.status(404).json({message: 'no posts'});
        }
        else{
            res.status(200).json(posts);
        };
    }
    catch (err){
        console.error(err);
        res.status(500).json(err);
    };
});

router.get('/post/:id', async (req, res) => {
    try{
        const postData = await Post.findByPk(req.params.id);
        const post = postData.get({plain: true});

        if (!post){
            res.status(404).json({message:'No post of this id'});
        }
        else{
            res.status(200).json(post);
        };
    }
    catch (err){
        console.error(err);
        res.status(500).json(err);
    }
})

router.get('/post/:userId/:title/:text', async (req, res) => {
    const thisUser = req.session.userId.toString();
    const postUser = req.params.userId.toString();
    if(thisUser === postUser){
        try{
            const postData = await Post.findOne({
                where: {
                    title: req.params.title,
                    text: req.params.text,
                    user_id: req.params.userId,
                },
            });
            const post = postData.get({plain: true});
    
            if (!post){
                res.status(404).json({message:'No post of these credentials'});
            }
            else{
                res.status(200).json(post);
            };
        }
        catch (err){
            console.error(err);
            res.status(500).json(err);
        }
    }
    else{
        console.log('rejected');
    }
})

router.post('/post', async (req, res) => {
    const {title, text} = req.body;

    if(req.body){
        try{
            const postData = await Post.create(req.body);

            if(!postData){
                res.status(404).json({message:'something went wrong'});
            }
            else{
                res.status(200).json(postData);
            };
        }
        catch (err){
            console.error(err);
            res.status(500).json(err);
        };
    };
    
});

router.put('/post/:id', async (req, res) => {
    const {title, text, user_id} = req.body;

    try{
        const postData = await Post.update(req.body,{
            where: {
                id: req.params.id,
            },
        });

        if(!postData){
            res.status(404).json({message:'something went wrong with the update'});
        }
        else{
            res.status(200).json(postData);
        }
    }  
    catch (err){
        console.error(err);
        res.status(500).json(err);
    };
});

router.delete('/post/:id', async (req, res) => {
    try{
        const postData = await Post.destroy({
            where: {
                id: req.params.id,
            },
        });

        if(!postData){
            res.status(404).json({message:'something went wrong deleting'});
        }
        else{
            res.status(200).json(postData);
        };
    }
    catch (err){
        console.error(err);
        res.status(500).json(err);
    };
});

// post and delete routes for comments.

router.post('/comment', async (req, res) => {
    const {text, user_id, post_id} = req.body;
    console.log('yes', req.body);
    
    try{
        const commentData = await Comment.create(req.body);
        console.log('yes 2', commentData)

        if(!commentData){
            res.status(404).json({message: 'something went wrong posting comment'});
        }
        else{
            res.status(200).json(commentData);
        }
    }
    catch (err){
        console.error(err);
        res.status(500).json(err);
    };
});

router.delete('/comment/:id', async (req, res) => {
    try{
        const commentData = await Comment.destroy({
            where: {
                id: req.params.id,
            },
        });

        if(!commentData){
            res.status(404).json({message: 'something went wrong deleting comment'});
        }
        else{
            res.status(200).json(commentData);
        };
    }
    catch (err){
        console.error(err);
        res.status(500).json(err);
    };
});

// get and post routes for users

router.get('/user/:id', async (req, res) => {
    try{
        const userData = await User.findByPk(req.params.id);

        if(!userData){
            res.status(404).json({message:'no user by this id found'});
        }
        else{
            res.status(200).json(userData);
        };  
    }
    catch (err){
        console.error(err);
        res.status(500).json(err);
    };
});

router.post('/user', async (req, res) => {
    const {username, email, password} = req.body;

    try{
        const userData = User.create(req.body);

        if(!userData){
            res.status(404).json({message: 'There was an error with the data given.'});
        }
        else{
            res.status(200).json(userData);
        };
    }
    catch (err){
        console.error(err);
        res.status(500).json(err);
    };
});

module.exports = router;