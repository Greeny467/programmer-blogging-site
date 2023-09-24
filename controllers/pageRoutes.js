//imports and settup
const router = require('express').Router();
const {Post, Comment, User} = require('../models');

const withAuth = require('../utils/auth');
const formatDate = require('../utils/helpers/formatData');

// get route for home page
router.get('/', async (req, res) => {
    try{
        const homeData = await Post.findAll({
            include: [{
                model: User,
                attributes: ['username']
            }]
        });

        if (homeData.length === 0){
            res.status(404).json({message: 'There are no posts'});
        }
        else{
            const posts = homeData.map((post) => ({
                ...post.get({ plain: true }),
                date: formatDate(post.createdAt)
            }));
            

            res.render('homepage', {
                posts,
                userId: req.session.userId,
                loggedIn: req.session.loggedIn,
            });
            res.status(200);
        }
    }
    catch (err) {
        console.error(err);
        res.status(500).json(err);
    };
});

// get route for post page
router.get('/post/:id', async (req, res) => {
    try{
        const postData = await Post.findByPk(req.params.id, {
            include: [
                {
                    model: User,
                    attributes: ['username'],
                },
            ]
        });

        const post = postData.get({ plain: true});
        post.date = formatDate(post.createdAt);

        const commentData = await Comment.findAll({
            where: {
                post_id: post.id,
            },
            include: [{
                model: User,
                attributes: ['username']
            }]
        });

        const comments = commentData.map((comment) => ({
            ...comment.get({plain : true }),
            date: formatDate(comment.createdAt)
    }));

        if (!post) {
            res.status(404).json({message: 'There is no post here.'});
        }
        else {
            let areComments;
            if(!comments) {
                areComments = false;
            }
            else {
                areComments = true;
            };

            res.render('postpage', {
                post,
                comments,
                areComments,
                loggedIn: req.session.loggedIn,
                userId: req.session.userId
            });
        }
        
    }
    catch (err) {
        console.error(err);
        res.status(500).json(err);
    };
});
// get route for dashboard
router.get('/dashboard/:id', withAuth, async (req, res) => {

    const thisUser = req.session.userId.toString();
    const requestedUser = req.params.id.toString();

    if (thisUser === requestedUser){
        try{
            const postData = await Post.findAll({
             where: {
                 user_id: req.params.id
             }
            });
            
            const posts = postData.map((post) => ({
                ...post.get({ plain: true }),
                date: formatDate(post.createdAt)
            }));
            
            let arePosts;
            if(!posts){
             arePosts = false;
            }
            else{
             arePosts = true; 
            };
            res.render('dashboard', {
             posts,
             arePosts,
             loggedIn: req.session.loggedIn,
             userId: req.session.userId
            });
            console.log("mark5")
         }
         catch (err) {
             console.error(err);
             res.status(500).json(err);
         };
    }
    else{
        console.log("rejected")
    }
})
// get route for login page
router.get('/login', async (req, res) => {
    try{
        if(req.session.loggedIn){
            res.redirect('/');
        }
        else{
            res.render('login');
            res.status(200);
        }
    }
    catch (err) {
        console.error(err);
        res.status(500).json(err);
    }
})
// get route for edit post page and post post page
router.get('/edit/:id', withAuth, async (req, res) => {
    try{
        const isCreate = false;

        const postData = await Post.findByPk(req.params.id);
        const post = postData.get({ plain: true});

        if(!post){
            res.status(404).json({message:'No post of this ID'});
        }
        else {

            const thisUser = req.session.userId.toString();
            const postUser = post.user_id.toString();

            if(thisUser === postUser){
                res.render('edit', {post, loggedIn: req.session.loggedIn, userId: req.session.userId, isCreate});
                res.status(200);   
            }
            else{
                console.log('rejected');
            }
        }
    }
    catch (err) {
        console.error(err);
        res.status(500).json(err);
    }
})

router.get('/create', withAuth, async (req, res) => {
    const isCreate = true;

    try{
        res.render('edit', {loggedIn: req.session.loggedIn, userId: req.session.userId, isCreate});
        res.status(200);
        
    }
    catch (err) {
        console.error(err);
        res.status(500).json(err);
    }
})
// export express instance

module.exports = router;