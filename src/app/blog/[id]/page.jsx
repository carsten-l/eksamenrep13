import CommentSection from "@/components/CommentSection"
import { getBlogPostById } from "@/lib/dal"


export default async function BlogDetailPage ({ params }) {

    const { id } = await params
    const post = await getBlogPostById(id)

    console.log(post)

    return (
        <main>
            <article>
                <h1>{ post.data.title}</h1>
                <p>{post.data.content}</p>

                <CommentSection comments={post.data.comments} />
            </article>
        </main>
    )




}