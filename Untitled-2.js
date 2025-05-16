document.addEventListener("DOMContentLoaded", () => {
  const clickablePosts = document.querySelectorAll(".clickable-post");

  clickablePosts.forEach(post => {
    post.addEventListener("click", () => {
      alert("Thanks for checking out this post!");
    });
  });
});
