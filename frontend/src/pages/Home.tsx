import React, { FormEventHandler, ChangeEventHandler, useState } from 'react'
import { CreatePostMutation, useCreatePostMutation, useGetPostsQuery } from '../__generated__/types'

function Home() {
  const { data, updateQuery } = useGetPostsQuery()
  const [content, setContent] = useState('')

  const onCompleted = (data: CreatePostMutation) => {
    updateQuery((previousResult) => {
      return {
        ...previousResult,
        getPosts: previousResult.getPosts.concat({ ...data.createPost, __typename: 'Post' }),
      }
    })
    setContent('')
  }

  const [createPost] = useCreatePostMutation({
    onCompleted,
  })

  const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault()
    createPost({
      variables: { input: { content } },
    })
  }
  const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setContent(e.target.value)
  }
  return (
    <div>
      <div>Home Page</div>
      <ul>
        {data?.getPosts.map((post) => (
          <li key={post.id}>{post.id}</li>
        ))}
      </ul>

      <form onSubmit={handleSubmit}>
        <input type="text" name="content" value={content} onChange={handleChange} />
        <button type="submit">버튼</button>
      </form>
    </div>
  )
}
export default Home
