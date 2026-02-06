"use server"

// noget hængende her... 

export async function getAllBlogPosts () {
    const res = await fetch("http://localhost:4000/posts")
    console.log(res)
    if (!res.ok) {
        throw new Error({message: "Something went wrong"})
    }
    return await res.json()
}

export async function getBlogPostById(id) {
    const res = await fetch(`http://localhost:4000/posts/${id}`)
    if (!res.ok) {
        throw new Error({message: "Something went wrong"})
    }
    return await res.json()
}