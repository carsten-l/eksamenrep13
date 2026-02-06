

export default function Comment({ comment }) {

    return (
        <li>
            <p>{comment.content}</p>
            <p>{comment.name}</p>
        </li>
    )
}