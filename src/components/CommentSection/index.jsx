import Comment from "../Comment"

export default function CommentSection ({ comments }) {

    return (
        <section>
            <h2>Comments: </h2>
            { comments.length ? (
            <ul>
                { comments.map(comment => (
                    <Comment key={comment.id} comment={comment} />
                ))} 
            </ul> 
            ) : (
                <p>Be the first to comment this post!</p>
            )}
        </section>
    )
}