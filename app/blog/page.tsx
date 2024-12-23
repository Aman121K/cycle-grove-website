export default async function BlogPage() {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const blogs = await res.json();
    const limitedBlogs = blogs.slice(0, 10); // Adjust the limit as needed
    return (
      <main className="blog-page">
        <h1>Our Blog</h1>
        <p>Stay updated with the latest cycling tips and stories.</p>
  
        <div className="blog-list">
          {limitedBlogs.map((blog: { id: number; title: string; body: string }) => (
            <div className="blog-card" key={blog.id}>
              <h2>{blog.title}</h2>
              <p>{blog.body.substring(0, 100)}...</p>
              <a href={`/blog/${blog.id}`} className="read-more">
                Read More
              </a>
            </div>
          ))}
        </div>
      </main>
    );
  }