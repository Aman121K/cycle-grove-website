export default function ContactUsPage() {
    return (
      <main>
        <h1>Contact Us</h1>
        <form>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" required />
  
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />
  
          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" required></textarea>
  
          <button type="submit">Submit</button>
        </form>
      </main>
    );
  }