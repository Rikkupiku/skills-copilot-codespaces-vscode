// Create web server
// 1. Get all comments
// 2. Post a comment
// 3. Get a comment by id
// 4. Delete a comment by id
// 5. Update a comment by id

// 1. Get all comments
router.get('/', (req, res) => {
    // Get all comments from database
    Comment.find({}, (err, comments) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.status(200).json(comments);
        }
    });
});

// 2. Post a comment
router.post('/', (req, res) => {
    // Get data from request body
    const newComment = {

        // id: req.body.id,
        name: req.body.name,
        comment: req.body.comment,
        date: req.body.date
    };


    // Create a new comment based on Comment model
    const comment = new Comment(newComment);

    // Save comment to database
    comment.save((err, comment) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.status(201).json(comment);
        }
    });
}