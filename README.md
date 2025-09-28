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
