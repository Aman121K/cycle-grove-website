interface BlogDetailsProps {
    params: {
      id: string;
    };
  }
  
  export default async function BlogDetailsPage({ params }: BlogDetailsProps) {
    // Fetch a single blog post based on the ID
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`);
    const blog = await res.json();
  
    return (
      <main className="blog-details">
        <h1>{blog.title}</h1>
        <p>{blog.body}</p>
  
      
      </main>
    );
  }