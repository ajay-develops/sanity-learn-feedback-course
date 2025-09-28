# Sanity Blogging Content Studio

Congratulations, you have now installed the Sanity Content Studio, an open-source real-time content editing environment connected to the Sanity backend.

Now you can do the following things:

- [Read “getting started” in the docs](https://www.sanity.io/docs/introduction/getting-started?utm_source=readme)
- Check out the example frontend: [React/Next.js](https://github.com/sanity-io/tutorial-sanity-blog-react-next)
- [Read the blog post about this template](https://www.sanity.io/blog/build-your-own-blog-with-sanity-and-next-js?utm_source=readme)
- [Join the Sanity community](https://www.sanity.io/community/join?utm_source=readme)
- [Extend and build plugins](https://www.sanity.io/docs/content-studio/extending?utm_source=readme)

## Notes

- useDocument - optimistic updates (live updates, more real-time, uses more memory, because it syncs local and remote updates of the document). Limit using it to make the application less memory intensive
- useDocumentProjection - real-time updates from server(content lake). No Optimistic Updates(Local changes don't affect it's state).

- The select() function in GROQ query returns the database filter for the first value that returns true

```js
      select(defined($userId) => assignee == $userId , true)
      && select(
        $status == "pending" => !defined(status) || status == "pending",
        $status == "spam" => status == $status,
        $status == "approved" => status == $status,
        true
      )
```

Here the select checks the condition before the => and if it's true it applies the filter after the => to query the database
