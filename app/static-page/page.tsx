export default function () {
  return (
    <div className="flex flex-col justify-center">
      <div className="flex justify-center">
        <div className="flex flex-col px-20 md:px-50 lg:px-100 pt-20">
          <div className="text-3xl font-bold p-4 pl-0">
            Welcome to Static Page
          </div>
          <div>
            This paraphraph right here is rendered statically using Next.js. By
            generating the content on the server at build time, Next.js ensures
            that search engines can easily crawl and index this page, boosting
            its SEO. Plus, serving static content leads to faster load times and
            a smoother user experience. And if I need interactivity, Next.js
            allows to use the "use client" directive for specific components.
          </div>
          <br />
          <div>
            Pretty cool, right? Now navigate to the 'Client Page' to check how
            interactivity is added is added in Next.js!
          </div>
        </div>
      </div>
    </div>
  );
}
