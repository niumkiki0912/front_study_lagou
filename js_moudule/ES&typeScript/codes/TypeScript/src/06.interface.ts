export {}
// 可以用来约定对象中的成员
interface Post {
  title: string
  content: string
  subTitle?: string //可选成员
  readonly summary: string
}

function printPost(post: Post) {
  console.log(post.title)
  console.log(post.content)
}


printPost({
  title: 'hello',
  content: 'world',
  summary: 'hello'
})


// 只读
interface Post2 {
  title: string
  content: string
  subTitle?: string //可选成员
  readonly summary: string // 只读成员
}

const hello: Post2 = {
  title: 'hello',
  content: 'world',
  summary: 'hello'
}


// hello.summary = '222' 



// 动态成员
interface Cache {
  [key: string]: string
}

const cache: Cache = {}

cache.name = 'cache'
cache.content = 'content'